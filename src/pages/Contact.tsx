import React, { useState } from 'react';
import { submitContactInquiry, isSupabaseConfigured } from '../lib/supabase';
import { profileData } from '../data/profile';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, ArrowUpRight, Loader2, Briefcase, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'recruitment',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccess(false);

    const fullSubject = `[${formData.purpose.toUpperCase()}] ${formData.subject}`;

    const res = await submitContactInquiry({
      name: formData.name,
      email: formData.email,
      subject: fullSubject,
      message: formData.message,
    });

    setLoading(false);

    if (res.success) {
      setSuccess(true);
      setFormData({ name: '', email: '', purpose: 'recruitment', subject: '', message: '' });
    } else {
      setErrorMsg(res.error || 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
          Liên hệ & Tuyển dụng
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white">
          Cùng nhau kết nối & thảo luận cơ hội.
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          Tiểu Ngọc luôn cởi mở đón nhận các cơ hội phỏng vấn, dự án thiết kế Brand & E-commerce Visual, POSM/Print và hợp tác thương mại điện tử.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Contact Info Sidebar */}
        <div className="space-y-8">
          {/* Recruiter fast-track box */}
          <div className="p-6 rounded-2xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-300/60 dark:border-amber-900/50 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-300 font-semibold">
              <Briefcase className="w-4 h-4 text-amber-500" />
              <span>Dành cho Nhà tuyển dụng</span>
            </div>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
              Cần CV nhanh để gửi cho Hiring Manager hoặc Design Director?
            </p>
            <a
              href={profileData.resumeUrl}
              download
              className="inline-flex items-center space-x-2 text-xs font-semibold text-neutral-900 dark:text-white underline hover:opacity-80"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Tải file CV & Portfolio (PDF)</span>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">
              Thông tin trực tiếp
            </h3>
            
            <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-3 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span className="font-mono">{profileData.phoneInternational}</span>
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center space-x-3 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span className="font-mono">{profileData.email}</span>
              </a>

              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Kênh mạng xã hội & Viết lách
            </h4>
            <ul className="space-y-2 text-sm">
              {profileData.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Supabase status notice */}
          <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 space-y-1">
            <span className="font-semibold block text-neutral-700 dark:text-neutral-300">
              ⚡ Hệ thống lưu trữ:
            </span>
            <p>
              {isSupabaseConfigured
                ? 'Đã kết nối trực tiếp với Supabase Database an toàn.'
                : 'Đang ở chế độ mô phỏng demo. Thêm khóa VITE_SUPABASE_URL vào .env để lưu vào database thật.'}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-[#121316] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
          <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
            Gửi lời mời phỏng vấn hoặc lời nhắn
          </h2>

          {success && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start space-x-3 text-sm text-emerald-800 dark:text-emerald-200">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-500 mt-0.5" />
              <div>
                <p className="font-semibold">Tin nhắn đã được gửi thành công!</p>
                <p className="text-xs opacity-90 mt-1">
                  Cảm ơn bạn đã liên hệ. Tiểu Ngọc sẽ kiểm tra hộp thư và phản hồi lại qua email trong vòng 24 giờ.
                </p>
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-start space-x-3 text-sm text-rose-800 dark:text-rose-200">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-500 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Purpose selection for recruiter vs client */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Mục đích liên hệ
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'recruitment', label: '💼 Lời mời tuyển dụng' },
                  { id: 'project', label: '🚀 Dự án Brand & E-commerce Visual' },
                  { id: 'networking', label: '☕ Kết nối & Trò chuyện' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, purpose: item.id })}
                    className={`py-2 px-3 rounded-xl text-xs font-medium text-left border transition-all ${
                      formData.purpose === item.id
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-transparent shadow-sm'
                        : 'bg-neutral-100 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  Họ và tên của bạn <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:border-neutral-500 outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  Địa chỉ Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:border-neutral-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Tiêu đề lời mời / Dự án <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Ví dụ: Trao đổi dự án thiết kế Brand Visual / Tuyển dụng Senior Graphic Designer"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:border-neutral-500 outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                Nội dung chi tiết <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="Mô tả sơ lược về công ty, vị trí tuyển dụng, link JD hoặc yêu cầu dự án..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:border-neutral-500 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang gửi thông tin...</span>
                </>
              ) : (
                <>
                  <span>Gửi lời nhắn ngay</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
