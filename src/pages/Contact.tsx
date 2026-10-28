import React, { useState } from 'react';
import { submitContactInquiry } from '../lib/supabase';
import { profileData } from '../data/profile';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import { Copy, Check } from 'lucide';
import { MorphIcon } from 'morphicons/react';
import { CmykStrip, RegistrationMark } from '../components/print/PrintMarks';
import { usePageMeta } from '../lib/page-meta';
import { SocialLinks } from '../components/SocialLinks';
import { Reveal } from '../components/motion/Reveal';

const keepCompounds = (text: string): React.ReactNode =>
  text.split(/(E-commerce|E-Commerce|2D\/3D|Print-on-Demand)/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  );

const sectionShell = 'max-w-6xl mx-auto px-4 sm:px-6';

export const Contact: React.FC = () => {
  usePageMeta(
    'Liên hệ tuyển dụng Graphic Designer E-commerce | Trần Tiểu Ngọc',
    'Open to Work: E-commerce Graphic Designer toàn thời gian tại TP.HCM. Gửi lời mời phỏng vấn, yêu cầu CV hoặc dự án thiết kế.'
  );
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      window.location.href = `mailto:${profileData.email}`;
    }
  };

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
      setErrorMsg(res.error || 'Tin nhắn chưa gửi được. Bạn thử lại giúp mình nhé, hoặc gửi thẳng qua email bên dưới.');
    }
  };

  return (
    <div className="pb-14 sm:pb-28">
      {/* Proof Sheet Header */}
      <section className="bg-paper-beige dark:bg-editorial-surfaceDark border-b border-paper-line dark:border-editorial-borderDark">
        <div className={`${sectionShell} py-12 sm:py-20`}>
          <Reveal className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-paper-line dark:border-editorial-borderDark text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
            <span className="inline-flex items-center gap-2">
              <RegistrationMark className="w-3.5 h-3.5 text-ink dark:text-paper" />
              <span>JOB REQUISITION &amp; CONTACT DESK · HCMC</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-ink dark:text-paper">
              <span className="w-2 h-2 rounded-full bg-[#3f9a6b]" />
              Open to Work · Sẵn sàng trong 2–4 tuần
            </span>
          </Reveal>

          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 sm:pt-10">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                Liên hệ &amp; Tuyển dụng
              </p>
              <h1 className="font-heading font-bold text-3xl sm:text-5xl leading-[1.15] sm:leading-[1.15] tracking-[-0.03em] text-ink dark:text-paper">
                Có việc hay có brief, cứ nhắn mình
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
                {keepCompounds(
                  'Mình đang mở cho lời mời phỏng vấn vị trí Full-time E-commerce Graphic Designer tại TP.HCM, cùng các dự án thiết kế sản phẩm in POD, banner quảng cáo, mockup 2D/3D và tự động hóa Photoshop.'
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className={`${sectionShell} pt-12 sm:pt-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Recruiter Fast-Track + Direct Spec Table */}
          <Reveal className="lg:col-span-5 space-y-8">
            {/* Fast-Track CV Box */}
            <div className="relative bg-ink text-paper dark:bg-editorial-cardDark">
              <CmykStrip className="h-1.5" />
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-300">
                  FAST-TRACK · DÀNH CHO NHÀ TUYỂN DỤNG
                </p>
                <h2 className="font-heading font-bold text-xl sm:text-2xl leading-snug">
                  Cần bản CV PDF 1 trang A4 (VI/EN) kèm số điện thoại đầy đủ?
                </h2>
                <p className="text-sm leading-relaxed text-paper/80">
                  Để bảo mật thông tin cá nhân trên web công khai, mình gửi CV trực tiếp qua email. Bạn chỉ cần bấm nút dưới đây (đã điền sẵn tiêu đề) hoặc nhắn qua form bên cạnh, mình sẽ phản hồi ngay trong ngày.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={profileData.cvRequestUrl}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-paper text-ink font-semibold text-xs hover:bg-brand-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Nhận CV qua email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact Spec Table (Fixed P0 invalid tel:# link) */}
            <div className="border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark divide-y divide-paper-line dark:divide-editorial-borderDark text-xs">
              <div className="px-5 py-3 bg-paper-beige/70 dark:bg-editorial-cardDark flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                <span>LIÊN HỆ TRỰC TIẾP</span>
                <span>PHẢN HỒI TRONG 24H</span>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-paper-muted dark:text-editorial-textDark">
                    <Mail className="w-3.5 h-3.5 text-brand-600 dark:text-brand-300" />
                    <span>Email công việc</span>
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink dark:text-paper hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                  >
                    <MorphIcon icon={copiedEmail ? Check : Copy} size={13} className={copiedEmail ? 'text-[#3f9a6b]' : ''} />
                    <span>{copiedEmail ? 'Đã chép email' : 'Chép địa chỉ'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="block text-sm font-semibold tabular-nums text-ink dark:text-paper underline decoration-brand-500 dark:decoration-brand-300 hover:text-brand-600 dark:hover:text-brand-300"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Phone row: text + CV request link instead of broken tel:0393258### */}
              <div className="p-5 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-paper-muted dark:text-editorial-textDark">
                    <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-300" />
                    <span>Điện thoại / Zalo</span>
                  </span>
                  <a
                    href={profileData.cvRequestUrl}
                    className="text-[11px] font-semibold text-brand-600 dark:text-brand-300 underline hover:opacity-80"
                  >
                    Nhận số đầy đủ trong CV
                  </a>
                </div>
                <p className="text-sm font-semibold tabular-nums text-ink dark:text-paper">
                  {profileData.phoneInternational}
                  <span className="ml-2 text-xs font-normal text-paper-muted dark:text-editorial-textDark">
                    (ẩn 3 số cuối trên web công khai)
                  </span>
                </p>
              </div>

              <div className="p-5 space-y-1">
                <span className="inline-flex items-center gap-2 text-paper-muted dark:text-editorial-textDark">
                  <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-300" />
                  <span>Nơi làm việc</span>
                </span>
                <p className="text-sm font-semibold text-ink dark:text-paper">{profileData.location}</p>
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark">
                4 KÊNH CHÍNH THỨC CỦA MÌNH
              </p>
              <SocialLinks />
            </div>
          </Reveal>

          {/* Right Column: Job Ticket Inquiry Form */}
          <Reveal className="lg:col-span-7" delay={80}>
            <div className="border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark">
              <div className="px-6 sm:px-8 py-4 bg-paper-beige dark:bg-editorial-surfaceDark border-b border-paper-line dark:border-editorial-borderDark flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 text-[11px] tabular-nums uppercase tracking-wider font-semibold text-ink dark:text-paper">
                  <RegistrationMark className="w-3.5 h-3.5" />
                  <span>PHIẾU GỬI TIN NHẮN &amp; LỜI MỜI PHỎNG VẤN</span>
                </span>
                <span className="text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                  FORM SHEET · DIRECT INBOX
                </span>
              </div>

              <div className="p-6 sm:p-10 space-y-6">
                <div className="space-y-1">
                  <h2 className="font-heading font-bold text-2xl text-ink dark:text-paper">
                    Nhắn trực tiếp cho Tiểu Ngọc
                  </h2>
                  <p className="text-xs text-paper-muted dark:text-editorial-textDark">
                    Thông tin của bạn được bảo mật và gửi thẳng tới hộp thư công việc của mình.
                  </p>
                </div>

                {success && (
                  <div className="p-4 bg-paper-beige dark:bg-editorial-surfaceDark border-l-2 border-[#3f9a6b] flex items-start gap-3 text-sm text-ink dark:text-paper">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#3f9a6b] mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold">Mình đã nhận được tin nhắn của bạn!</p>
                      <p className="text-xs text-paper-text dark:text-editorial-textDark">
                        Cảm ơn bạn đã kết nối. Mình sẽ đọc kỹ và phản hồi qua email trong vòng 24 giờ.
                      </p>
                    </div>
                  </div>
                )}

                {errorMsg && (
                  <div className="p-4 bg-paper-beige dark:bg-editorial-surfaceDark border-l-2 border-brand-600 flex items-start gap-3 text-sm text-ink dark:text-paper">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-brand-600 dark:text-brand-300 mt-0.5" />
                    <div className="space-y-2">
                      <p>{errorMsg}</p>
                      <a
                        href={`mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject || 'Liên hệ từ tieungoc.site')}&body=${encodeURIComponent(formData.message)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-300 underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Mở trình gửi email trực tiếp tới {profileData.email}</span>
                      </a>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Purpose selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink dark:text-paper">
                      01 · Mục đích liên hệ
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'recruitment', label: 'Lời mời tuyển dụng / Nhận CV' },
                        { id: 'project', label: 'Dự án thiết kế E-commerce' },
                        { id: 'networking', label: 'Kết nối đồng nghiệp' },
                      ].map((item) => {
                        const active = formData.purpose === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, purpose: item.id })}
                            className={`py-2.5 px-3 rounded-sm text-xs font-semibold text-left border transition-colors ${
                              active
                                ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                                : 'bg-paper-beige/60 dark:bg-editorial-surfaceDark text-paper-text dark:text-editorial-textDark border-paper-line dark:border-editorial-borderDark hover:bg-paper-beige dark:hover:bg-editorial-cardDark'
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-ink dark:text-paper">
                        02 · Họ và tên của bạn <span className="text-brand-600 dark:text-brand-300">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Ví dụ: Nguyễn Minh Anh (HR / Lead)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm text-sm bg-paper-beige/50 dark:bg-editorial-surfaceDark border border-paper-line dark:border-editorial-borderDark text-ink dark:text-paper focus:border-brand-600 dark:focus:border-brand-300 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-ink dark:text-paper">
                        03 · Địa chỉ Email <span className="text-brand-600 dark:text-brand-300">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="hr@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm text-sm bg-paper-beige/50 dark:bg-editorial-surfaceDark border border-paper-line dark:border-editorial-borderDark text-ink dark:text-paper focus:border-brand-600 dark:focus:border-brand-300 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-ink dark:text-paper">
                      04 · Tiêu đề <span className="text-brand-600 dark:text-brand-300">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="Ví dụ: Mời phỏng vấn E-commerce Graphic Designer tại [Tên Công Ty]"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm text-sm bg-paper-beige/50 dark:bg-editorial-surfaceDark border border-paper-line dark:border-editorial-borderDark text-ink dark:text-paper focus:border-brand-600 dark:focus:border-brand-300 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-ink dark:text-paper">
                      05 · Nội dung chi tiết <span className="text-brand-600 dark:text-brand-300">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Chia sẻ ngắn gọn về vị trí tuyển dụng, link JD, địa điểm làm việc hoặc yêu cầu dự án của bạn..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm text-sm bg-paper-beige/50 dark:bg-editorial-surfaceDark border border-paper-line dark:border-editorial-borderDark text-ink dark:text-paper focus:border-brand-600 dark:focus:border-brand-300 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-semibold hover:bg-brand-600 dark:hover:bg-brand-300 transition-colors disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Đang gửi tin nhắn...</span>
                        </>
                      ) : (
                        <>
                          <span>Gửi tin nhắn cho Tiểu Ngọc</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <span className="text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                      Hoặc gửi thẳng tới: <a href={`mailto:${profileData.email}`} className="underline text-ink dark:text-paper">{profileData.email}</a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
