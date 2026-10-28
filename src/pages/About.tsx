import React from 'react';
import { profileData } from '../data/profile';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CmykStrip, CropMarks, RegistrationMark } from '../components/print/PrintMarks';
import { usePageMeta } from '../lib/page-meta';
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
const swipeRail =
  'flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain gap-4 -mx-4 px-4 pb-3 scroll-px-4 sm:-mx-6 sm:px-6 sm:scroll-px-6';
const swipeItem = 'snap-start shrink-0 w-[84%] sm:w-[60%]';

export const About: React.FC = () => {
  usePageMeta(
    'Giới thiệu Trần Tiểu Ngọc | E-commerce Graphic Designer ứng dụng AI',
    'E-commerce Graphic Designer, 4+ năm tại Vani Ecommerce. Ad Creatives cho Meta & Google Ads, website & email, POD artwork, ứng dụng AI và tự động hóa Photoshop.'
  );

  return (
    <div className="pb-14 sm:pb-28">
      {/* Section 1: Portrait Proof Sheet & Bio */}
      <section className="bg-paper-beige dark:bg-editorial-surfaceDark border-b border-paper-line dark:border-editorial-borderDark">
        <div className={`${sectionShell} py-12 sm:py-20`}>
          {/* Top Slug Bar */}
          <Reveal className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-paper-line dark:border-editorial-borderDark text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
            <span className="inline-flex items-center gap-2">
              <RegistrationMark className="w-3.5 h-3.5 text-ink dark:text-paper" />
              <span>DESIGNER DOSSIER · {profileData.name.toUpperCase()}</span>
            </span>
            <span>HCMUTE B.A. (2018–2022) · VANI ECOMMERCE (2022–NAY)</span>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-8 sm:pt-12 items-start">
            {/* Left Column: Portrait Frame + Contact Spec Table */}
            <Reveal className="lg:col-span-4 space-y-6">
              <figure className="relative m-4">
                <CropMarks offset={6} length={12} />
                <div className="aspect-[4/5] overflow-hidden bg-paper dark:bg-editorial-cardDark border border-paper-line dark:border-editorial-borderDark">
                  <img
                    src={profileData.avatarUrl}
                    alt="Chân dung Trần Tiểu Ngọc, E-commerce Graphic Designer tại TP.HCM"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="pt-3 flex items-baseline justify-between gap-2">
                  <span className="font-hand text-3xl leading-none text-brand-600 dark:text-brand-300 -rotate-2">
                    Tiểu Ngọc
                  </span>
                  <span className="text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                    PISCES · 2000 · HCMC
                  </span>
                </figcaption>
              </figure>

              {/* Spec Table: Direct Contact & Privacy */}
              <div className="border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark divide-y divide-paper-line dark:divide-editorial-borderDark text-xs">
                <div className="px-4 py-2.5 bg-paper-beige/70 dark:bg-editorial-cardDark flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                  <span>THÔNG TIN LIÊN HỆ</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-ink dark:text-paper">
                    <span className="w-2 h-2 rounded-full bg-[#3f9a6b]" />
                    Open to Work
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-paper-muted dark:text-editorial-textDark">
                    <Mail className="w-3.5 h-3.5 text-brand-600 dark:text-brand-300" />
                    <span>Email</span>
                  </span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="font-semibold text-ink dark:text-paper underline decoration-brand-500 dark:decoration-brand-300 hover:text-brand-600 dark:hover:text-brand-300"
                  >
                    {profileData.email}
                  </a>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-paper-muted dark:text-editorial-textDark">
                    <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-300" />
                    <span>Điện thoại</span>
                  </span>
                  <span className="tabular-nums font-semibold text-ink dark:text-paper" title="Số điện thoại đầy đủ có trong bản CV gửi qua email">
                    {profileData.phone} <span className="text-[11px] font-normal text-paper-muted dark:text-editorial-textDark">(trong CV)</span>
                  </span>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 text-paper-muted dark:text-editorial-textDark">
                    <MapPin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-300" />
                    <span>Khu vực</span>
                  </span>
                  <span className="font-semibold text-ink dark:text-paper">{profileData.location}</span>
                </div>
              </div>

              {/* Recruiter Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={profileData.cvRequestUrl}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink text-xs font-semibold hover:bg-brand-600 dark:hover:bg-brand-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Nhận CV đầy đủ qua email</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-ink dark:border-paper text-ink dark:text-paper text-xs font-semibold hover:bg-paper dark:hover:bg-editorial-cardDark transition-colors"
                >
                  <span>Mời phỏng vấn / Liên hệ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>

            {/* Right Column: Bio & Job Search Spec */}
            <Reveal className="lg:col-span-8 space-y-8" delay={80}>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                  Về Trần Tiểu Ngọc · {keepCompounds(profileData.role)}
                </p>
                <h1 className="font-heading font-bold text-3xl sm:text-5xl leading-[1.15] sm:leading-[1.15] tracking-[-0.03em] text-ink dark:text-paper">
                  Mình dùng AI mỗi ngày. Quyết định cuối vẫn nằm trên bàn Wacom.
                </h1>
              </div>

              <div className="space-y-4 text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark max-w-[66ch]">
                {profileData.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Recruiter Pitch Callout */}
              <div className="border-l-2 border-brand-500 dark:border-brand-300 pl-5 py-1 space-y-2 bg-paper/60 dark:bg-editorial-dark/60 p-5">
                <p className="text-[11px] tabular-nums uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-300">
                  TÓM TẮT NHANH CHO NHÀ TUYỂN DỤNG
                </p>
                <p className="text-sm leading-relaxed text-ink dark:text-paper">
                  {profileData.recruiterPitch}
                </p>
              </div>

              {/* Job Search Preferences Spec Sheet */}
              <div className="border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark">
                <div className="px-5 py-3 bg-paper-beige/70 dark:bg-editorial-cardDark border-b border-paper-line dark:border-editorial-borderDark flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] tabular-nums uppercase tracking-wider font-semibold text-ink dark:text-paper">
                    MỤC TIÊU NGHỀ NGHIỆP HIỆN TẠI
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink dark:text-paper">
                    <span className="w-2 h-2 rounded-full bg-[#3f9a6b]" />
                    <span>{profileData.jobPreferences.status}</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-paper-line dark:divide-editorial-borderDark">
                  <div className="p-5 space-y-2.5">
                    <span className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark block">
                      Vị trí mình nhắm tới
                    </span>
                    <ul className="space-y-1.5 text-xs font-semibold text-ink dark:text-paper">
                      {profileData.jobPreferences.targetRoles.map((role) => (
                        <li key={role} className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 bg-brand-500 dark:bg-brand-300 shrink-0" />
                          <span>{keepCompounds(role)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <span className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark block">
                      Hình thức &amp; Thời gian nhận việc
                    </span>
                    <ul className="space-y-1.5 text-xs font-semibold text-ink dark:text-paper">
                      {profileData.jobPreferences.workModes.map((mode) => (
                        <li key={mode} className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 bg-brand-500 dark:bg-brand-300 shrink-0" />
                          <span>{mode}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-2 text-paper-text dark:text-editorial-textDark font-normal pt-1">
                        <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 bg-ink/40 dark:bg-paper/40 shrink-0" />
                        <span>{profileData.jobPreferences.availability} · Mức lương: {profileData.jobPreferences.salaryExpectation}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 2: Core Skills Matrix */}
      <section className={`${sectionShell} py-14 sm:py-24`}>
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7 space-y-2">
            <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-600 dark:text-brand-300 font-semibold">
              01 · NĂNG LỰC CHUYÊN MÔN CỐT LÕI
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-[1.2] sm:leading-[1.2] text-ink dark:text-paper">
              Việc mình làm mỗi ngày, xếp theo thế mạnh
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
            Xếp theo thế mạnh: Ad Creatives cho Meta & Google Ads và hình ảnh E-commerce trước, rồi website và email, POD artwork, sau đó là AI, tự động hóa Photoshop và kiểm soát chất lượng in.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-paper-line dark:border-editorial-borderDark divide-y md:divide-y-0 md:divide-x divide-paper-line dark:divide-editorial-borderDark bg-paper dark:bg-editorial-dark">
          {profileData.skillCategories.slice(0, 2).map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 80} className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                <span>PILLAR 0{idx + 1}</span>
                <RegistrationMark className="w-3.5 h-3.5" />
              </div>
              <h3 className="font-heading font-bold text-xl leading-snug text-ink dark:text-paper">
                {keepCompounds(cat.title)}
              </h3>
              <ul className="space-y-2.5 pt-1">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex gap-2.5 text-sm leading-relaxed text-paper-text dark:text-editorial-textDark">
                    <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 flex-shrink-0 bg-brand-500 dark:bg-brand-300" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-x border-b border-paper-line dark:border-editorial-borderDark divide-y md:divide-y-0 md:divide-x divide-paper-line dark:divide-editorial-borderDark bg-paper dark:bg-editorial-dark">
          {profileData.skillCategories.slice(2, 4).map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 80} className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                <span>PILLAR 0{idx + 3}</span>
                <RegistrationMark className="w-3.5 h-3.5" />
              </div>
              <h3 className="font-heading font-bold text-xl leading-snug text-ink dark:text-paper">
                {keepCompounds(cat.title)}
              </h3>
              <ul className="space-y-2.5 pt-1">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex gap-2.5 text-sm leading-relaxed text-paper-text dark:text-editorial-textDark">
                    <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 flex-shrink-0 bg-brand-500 dark:bg-brand-300" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Daily Tool Stack */}
        <Reveal className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-paper-line dark:border-editorial-borderDark divide-y sm:divide-y-0 sm:divide-x divide-paper-line dark:divide-editorial-borderDark bg-paper-beige dark:bg-editorial-surfaceDark">
          {profileData.aiTools.map((group) => (
            <div key={group.category} className="p-5 space-y-3">
              <span className="text-[11px] tabular-nums uppercase tracking-wider font-semibold text-ink dark:text-paper block">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 bg-paper dark:bg-editorial-dark text-paper-text dark:text-editorial-textDark border border-paper-line dark:border-editorial-borderDark"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Section 3: AI vs. Designer Split per Workflow Stage */}
      <section className="bg-paper-beige dark:bg-editorial-surfaceDark border-y border-paper-line dark:border-editorial-borderDark py-14 sm:py-24">
        <div className={sectionShell}>
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-14">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-600 dark:text-brand-300 font-semibold">
                02 · AI TRONG QUY TRÌNH
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-[1.2] sm:leading-[1.2] text-ink dark:text-paper">
                AI làm phần nào, mình làm phần nào
              </h2>
            </div>
            <p className="lg:col-span-5 text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
              Mình không chia AI theo phần trăm. Mình chia theo khâu: khâu nào cần tốc độ thì giao cho AI, khâu nào cần gu và độ chính xác thì giữ lại cho mình.
            </p>
          </Reveal>

          <div
            className={`${swipeRail} md:block md:overflow-visible md:mx-0 md:px-0 md:pb-0 md:border md:border-paper-line md:dark:border-editorial-borderDark md:divide-y md:divide-paper-line md:dark:divide-editorial-borderDark md:bg-paper md:dark:bg-editorial-dark`}
          >
            {profileData.aiWorkflow.map((step, i) => (
              <Reveal
                key={step.phase}
                delay={i * 80}
                className={`${swipeItem} md:w-auto p-6 bg-paper dark:bg-editorial-dark border border-paper-line dark:border-editorial-borderDark md:border-0 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-6`}
              >
                <div className="md:col-span-3 space-y-1">
                  <span className="text-[11px] tabular-nums font-semibold text-brand-600 dark:text-brand-300 uppercase tracking-wider block">
                    {step.phase}
                  </span>
                  <h3 className="font-heading font-bold text-lg leading-snug text-ink dark:text-paper">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-5 space-y-1">
                  <span className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark block">
                    AI / máy lo
                  </span>
                  <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark">
                    {step.aiRole}
                  </p>
                </div>
                <div className="md:col-span-4 space-y-1 border-l-2 border-brand-500 dark:border-brand-300 pl-4">
                  <span className="text-[11px] tabular-nums uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-300 block">
                    Mình lo
                  </span>
                  <p className="text-sm leading-relaxed font-semibold text-ink dark:text-paper">
                    {step.humanRole}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <p className="lg:col-span-5 text-[15px] leading-relaxed text-ink dark:text-paper font-semibold">
              Nhờ chia việc như vậy, ý tưởng ra nhanh gấp 3 lần, sản xuất nhanh hơn ~40%, mà sản phẩm vẫn mang nét tay của người làm.
            </p>
            <blockquote className="lg:col-span-7 p-6 sm:p-8 bg-paper dark:bg-editorial-dark border border-paper-line dark:border-editorial-borderDark font-quote italic text-lg leading-relaxed text-ink dark:text-paper">
              &ldquo;{profileData.aiPhilosophy.coreBelief}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Section 4: Work Experience, Education & Languages */}
      <section className={`${sectionShell} py-14 sm:py-24 space-y-16`}>
        {/* Work Experience */}
        <div className="space-y-8">
          <Reveal className="space-y-2">
            <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-600 dark:text-brand-300 font-semibold">
              03 · KINH NGHIỆM THỰC CHIẾN
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl leading-[1.2] sm:leading-[1.2] text-ink dark:text-paper">
              4+ năm ở Vani Ecommerce, tính bằng kết quả
            </h2>
          </Reveal>

          {profileData.experiences.map((exp, index) => (
            <Reveal
              key={index}
              className="border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark p-6 sm:p-10 space-y-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-paper-line dark:border-editorial-borderDark">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300 block">
                    {exp.company}
                  </span>
                  <h3 className="mt-1 font-heading font-bold text-2xl sm:text-3xl leading-snug sm:leading-snug text-ink dark:text-paper">
                    {keepCompounds(exp.role)}
                  </h3>
                </div>
                <span className="text-xs tabular-nums font-semibold px-3 py-1 bg-paper-beige dark:bg-editorial-cardDark text-ink dark:text-paper border border-paper-line dark:border-editorial-borderDark">
                  {exp.period}
                </span>
              </div>

              <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
                {exp.description}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {exp.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-4 bg-paper-beige/60 dark:bg-editorial-surfaceDark border border-paper-line dark:border-editorial-borderDark flex gap-3 text-sm leading-relaxed text-paper-text dark:text-editorial-textDark"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] w-1.5 h-1.5 flex-shrink-0 bg-brand-500 dark:bg-brand-300"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        {/* Education, Languages & Soft Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark">
                04 · HỌC VẤN &amp; NGOẠI NGỮ
              </p>
              <h3 className="font-heading font-bold text-2xl leading-snug text-ink dark:text-paper">
                Nền tảng đào tạo chính quy
              </h3>
            </div>

            {profileData.educations.map((edu, index) => (
              <div
                key={index}
                className="p-6 border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark space-y-2"
              >
                <span className="text-xs tabular-nums font-semibold text-brand-600 dark:text-brand-300 block">
                  {edu.period}
                </span>
                <h4 className="font-heading font-bold text-lg text-ink dark:text-paper">
                  {edu.degree}
                </h4>
                <p className="text-xs font-semibold text-ink dark:text-paper">
                  {edu.institution}
                </p>
                <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark pt-1">
                  {edu.description}
                </p>
              </div>
            ))}

            <div className="p-6 border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark space-y-4">
              <span className="text-[11px] tabular-nums uppercase tracking-wider font-semibold text-paper-muted dark:text-editorial-textDark block">
                NGOẠI NGỮ TRONG CÔNG VIỆC
              </span>
              <div className="divide-y divide-paper-line dark:divide-editorial-borderDark">
                {profileData.languages.map((lang) => (
                  <div key={lang.language} className="py-3 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-ink dark:text-paper">{lang.language}</span>
                      <span className="font-semibold text-brand-600 dark:text-brand-300">{lang.level}</span>
                    </div>
                    <p className="text-xs text-paper-text dark:text-editorial-textDark">
                      {lang.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 space-y-6" delay={80}>
            <div className="space-y-1">
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark">
                05 · PHONG CÁCH PHỐI HỢP
              </p>
              <h3 className="font-heading font-bold text-2xl leading-snug text-ink dark:text-paper">
                Cách mình làm việc cùng team
              </h3>
            </div>

            <div className="p-6 sm:p-8 border border-paper-line dark:border-editorial-borderDark bg-paper-beige dark:bg-editorial-surfaceDark space-y-4">
              <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark">
                Song Ngư nên mình nhạy với màu sắc và bố cục. Nhưng khi chạy đơn hàng quốc tế thì mình làm theo hệ thống: quy chuẩn đặt tên file, checklist trước khi in, tiến độ rõ ràng.
              </p>
              <ul className="space-y-3">
                {profileData.softSkills.map((skill) => (
                  <li key={skill} className="flex gap-3 text-sm leading-relaxed text-ink dark:text-paper">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] w-1.5 h-1.5 flex-shrink-0 bg-brand-500 dark:bg-brand-300"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 5: Recruiter Sign-Off Block */}
      <section className={sectionShell}>
        <Reveal className="relative bg-ink text-paper dark:bg-editorial-cardDark">
          <CmykStrip className="h-1.5" />
          <div className="px-5 sm:px-10 lg:px-14 py-10 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-300">
                OPEN TO WORK · TP. HỒ CHÍ MINH
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-[1.2] sm:leading-[1.2]">
                Team bạn cần một designer làm nhanh nhờ AI mà vẫn giữ được gu?
              </h2>
              <p className="text-sm leading-relaxed text-paper/80">
                Mình nhận việc full-time tại TP.HCM sau 2–4 tuần. Nhắn mình để nhận CV PDF 1 trang (tiếng Việt hoặc tiếng Anh), hoặc hẹn một buổi xem portfolio cùng nhau.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={profileData.cvRequestUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-paper text-ink font-semibold text-sm hover:bg-brand-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Nhận CV qua email
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-paper/40 text-paper font-semibold text-sm hover:border-paper transition-colors"
              >
                Mời phỏng vấn
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
