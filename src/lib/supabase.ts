import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project-id')
);

export const supabase: SupabaseClient | null = (isSupabaseConfigured && supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ContactInquiry {
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at?: string;
}

/**
 * Gửi thông tin liên hệ lên Supabase
 * Nếu Supabase chưa được cấu hình, lưu mô phỏng local và trả về thành công
 */
export async function submitContactInquiry(inquiry: ContactInquiry): Promise<{ success: boolean; error?: string }> {
  try {
    if (supabase && isSupabaseConfigured) {
      const { error } = await supabase.from('contact_inquiries').insert([
        {
          name: inquiry.name,
          email: inquiry.email,
          subject: inquiry.subject,
          message: inquiry.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error('Lỗi khi gửi lên Supabase:', error);
        return { success: false, error: error.message };
      }
      return { success: true };
    } else {
      // Chế độ mô phỏng khi chưa điền Supabase credentials
      console.warn('⚠️ Supabase chưa được cấu hình biến môi trường. Đang chạy chế độ demo:');
      console.log('Thông tin nhận được:', inquiry);
      // Mô phỏng độ trễ mạng
      await new Promise((resolve) => setTimeout(resolve, 800));
      return { success: true };
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Có lỗi không xác định xảy ra';
    return { success: false, error: message };
  }
}
