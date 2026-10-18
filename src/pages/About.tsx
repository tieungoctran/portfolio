import React from 'react';
import { profileData } from '../data/profile';
import { ArrowUpRight, Check, Sparkles, Briefcase, Cpu, Rocket, GraduationCap, Globe2, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/page-meta';

export const About: React.FC = () => {
  usePageMeta(
    'Giới thiệu Trần Tiểu Ngọc | Chuyên viên Thiết kế Đồ họa TMĐT',
    'Senior Graphic Designer (E-commerce) 4+ năm tại Vani Ecommerce, tốt nghiệp HCMUTE. Photoshop, Illustrator, Figma, công cụ AI và tự động hóa Photoshop.'
  );
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20">
      {/* Header & Portrait Bio */}
      <div className="space-y-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-300 text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-brand-500" />
          <span>Về Trần Tiểu Ngọc • {profileData.role}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-[1.15]">
          Nhà thiết kế đồng hành cùng sự bùng nổ của thương mại điện tử.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pt-6">
          {/* Portrait Photo & Recruiter Actions */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow-sm relative group">
              <img
                src={profileData.avatarUrl}
                alt="Chân dung Trần Tiểu Ngọc, Senior Graphic Designer (E-commerce) tại TP.HCM"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80";
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs">
                <span className="font-semibold block">{profileData.name}</span>
                <span className="opacity-75">Senior Graphic Designer</span>
              </div>
            </div>

            {/* Quick Contact Details */}
            <div className="p-4 rounded-xl bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-2 text-xs">
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                <span>{profileData.phoneInternational}</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                <span>{profileData.email}</span>
              </a>
            </div>

            {/* Quick Actions for Recruiters */}
            <div className="space-y-2">
              <a
                href={profileData.cvRequestUrl}
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Xin CV qua email</span>
              </a>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>Liên hệ hợp tác</span>
              </Link>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-2 space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-base">
            {profileData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="p-6 rounded-2xl bg-brand-500/10 dark:bg-brand-950/20 border border-brand-300/50 dark:border-brand-900/50 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-800 dark:text-brand-300 font-semibold">
                <Rocket className="w-4 h-4 text-brand-500" />
                <span>Giá trị mang lại cho Nhà tuyển dụng</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                {profileData.recruiterPitch}
              </p>
            </div>

            {/* Job Search Preferences Box */}
            <div className="p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Tiêu chí công việc & Tình trạng ứng tuyển
                </span>
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{profileData.jobPreferences.status}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="space-y-1">
                  <span className="text-neutral-400 font-mono block">Vị trí mục tiêu:</span>
                  <ul className="space-y-1 text-neutral-800 dark:text-neutral-200 font-medium">
                    {profileData.jobPreferences.targetRoles.map((role) => (
                      <li key={role}>• {role}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1">
                  <span className="text-neutral-400 font-mono block">Hình thức & Thời gian nhận việc:</span>
                  <ul className="space-y-1 text-neutral-800 dark:text-neutral-200 font-medium">
                    {profileData.jobPreferences.workModes.map((mode) => (
                      <li key={mode}>• {mode}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                📍 {profileData.location} • {profileData.jobPreferences.availability} • Lương: {profileData.jobPreferences.salaryExpectation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 font-mono">
            Năng lực chuyên môn
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white">
            Kỹ năng Đồ họa, In ấn & Tự động hóa AI
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profileData.skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-white dark:bg-editorial-surfaceDark border border-neutral-200 dark:border-neutral-800 space-y-4"
            >
              <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white flex items-center space-x-2">
                <span>{cat.title}</span>
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start space-x-2 text-sm text-neutral-600 dark:text-neutral-300 font-light">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tools Suite */}
      <div className="space-y-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <Cpu className="w-4 h-4 text-brand-500" />
            <span>Hệ sinh thái Công cụ Thiết kế, AI & Tự động hóa</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
            Tool Tech Stack làm chủ hàng ngày
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profileData.aiTools.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-3"
            >
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block font-mono">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium border border-neutral-200/80 dark:border-neutral-700/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Human-Crafted, AI-Accelerated Philosophy Section */}
      <div className="space-y-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white dark:bg-editorial-surfaceDark dark:text-neutral-100 border border-neutral-800 space-y-8 relative overflow-hidden">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-300 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>{profileData.aiPhilosophy.badge}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {profileData.aiPhilosophy.headline}
            </h2>
            <blockquote className="p-4 rounded-2xl bg-neutral-800/80 border-l-4 border-brand-400 text-sm sm:text-base font-quote italic text-brand-100 leading-relaxed">
              &ldquo;{profileData.aiPhilosophy.coreBelief}&rdquo;
            </blockquote>
            <div className="pt-1">
              <span className="inline-block text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold">
                ✦ {profileData.aiPhilosophy.ratio}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {profileData.aiPhilosophy.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700/70 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-brand-400 block font-semibold">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience Timeline */}
      <div className="space-y-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <Briefcase className="w-4 h-4" />
          <span>Hành trình kinh nghiệm (Chuẩn định lượng Google XYZ)</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white">
          Kinh nghiệm làm việc & Thành tựu thực tế
        </h2>

        <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-neutral-200 dark:before:bg-neutral-800">
          {profileData.experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 space-y-3">
              <span className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-neutral-900" />
              <div className="flex flex-wrap items-center justify-between text-xs text-neutral-500 font-mono">
                <span className="font-semibold text-brand-700 dark:text-brand-400">{exp.company}</span>
                <span>{exp.period}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                {exp.description}
              </p>
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-2 pt-2">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-neutral-600 dark:text-neutral-300 font-light">
                      <Check className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education & Languages + Soft Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        {/* Education & Languages */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <GraduationCap className="w-4 h-4 text-brand-500" />
              <span>Học vấn & Đào tạo</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
              Nền tảng Học thuật
            </h3>
          </div>

          {profileData.educations.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-editorial-surfaceDark border border-neutral-200 dark:border-neutral-800 space-y-2"
            >
              <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold">
                {edu.period}
              </span>
              <h4 className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
                {edu.degree}
              </h4>
              <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                {edu.institution}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed pt-1">
                {edu.description}
              </p>
            </div>
          ))}

          {/* Languages */}
          <div className="p-6 rounded-2xl bg-white dark:bg-editorial-surfaceDark border border-neutral-200 dark:border-neutral-800 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <Globe2 className="w-4 h-4 text-brand-500" />
              <span>Ngoại ngữ</span>
            </div>
            <div className="space-y-3">
              {profileData.languages.map((lang) => (
                <div key={lang.language} className="space-y-0.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-900 dark:text-white">{lang.language}</span>
                    <span className="text-brand-700 dark:text-brand-400 font-mono text-[11px]">{lang.level}</span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                    {lang.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Kỹ năng mềm & Phong cách làm việc</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
              Tác phong Chuyên nghiệp
            </h3>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-editorial-surfaceDark border border-neutral-200 dark:border-neutral-800 space-y-4">
            <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Kết hợp sự nhạy bén thẩm mỹ của cung Song Ngư với tư duy hệ thống và kỷ luật tiến độ trong môi trường E-commerce quốc tế:
            </p>
            <ul className="space-y-2.5">
              {profileData.softSkills.map((skill) => (
                <li key={skill} className="flex items-start space-x-2 text-sm text-neutral-700 dark:text-neutral-300 font-light">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Recruiter Callout */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h4 className="font-serif text-2xl font-bold">
            Sẵn sàng kết nối cùng đội ngũ của bạn
          </h4>
          <p className="text-xs sm:text-sm opacity-85 font-light">
            Nhận lời mời hợp tác các dự án: thiết kế sản phẩm in (Print-on-Demand), banner Facebook & Google Ads, mockup 2D/3D, POSM/In ấn & thiết kế ứng dụng công cụ AI.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-1.5 px-6 py-3 rounded-xl text-xs font-semibold bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white hover:opacity-90 transition-opacity"
          >
            <span>Liên hệ hợp tác</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={profileData.cvRequestUrl}
            className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-xl text-xs font-semibold border border-neutral-700 dark:border-neutral-300 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Xin CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};
