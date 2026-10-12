import React from 'react';
import { profileData } from '../data/profile';
import { FileText, ArrowUpRight, Check, Sparkles, Briefcase, Cpu, Rocket, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20">
      {/* Header & Portrait Bio */}
      <div className="space-y-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-mono font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Về Trần Tiểu Ngọc • AI Product Designer</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-[1.15]">
          Nhà thiết kế đồng hành cùng sự phát triển của sản phẩm AI và thương hiệu số.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pt-6">
          {/* Portrait Photo & Recruiter Actions */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow-sm relative group">
              <img
                src={profileData.avatarUrl}
                alt="Trần Tiểu Ngọc - AI Product Designer"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80";
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs">
                <span className="font-semibold block">{profileData.name}</span>
                <span className="opacity-75">{profileData.role}</span>
              </div>
            </div>

            {/* Quick Actions for Recruiters */}
            <div className="space-y-2">
              <a
                href={profileData.resumeUrl}
                download
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Tải CV & Bảng Kỹ năng AI (PDF)</span>
              </a>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <span>Đặt lịch phỏng vấn</span>
              </Link>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-2 space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-base">
            {profileData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="p-6 rounded-2xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-300/50 dark:border-amber-900/50 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-800 dark:text-amber-300 font-semibold">
                <Rocket className="w-4 h-4 text-amber-500" />
                <span>Giá trị mang lại cho Nhà tuyển dụng</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                {profileData.recruiterPitch}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Địa điểm & Tình trạng công việc
              </span>
              <p className="text-sm font-medium text-neutral-900 dark:text-white">
                {profileData.location} • Sẵn sàng nhận lời mời phỏng vấn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
            Năng lực chuyên môn
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white">
            Kỹ năng Thiết kế & Năng lực AI
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profileData.skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-neutral-200 dark:border-neutral-800 space-y-4"
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
            <Cpu className="w-4 h-4 text-amber-500" />
            <span>Hệ sinh thái Công cụ & Nền tảng AI</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
            Bộ công cụ làm chủ hàng ngày
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Work Experience Timeline */}
      <div className="space-y-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <Briefcase className="w-4 h-4" />
          <span>Hành trình kinh nghiệm</span>
        </div>
        <h2 className="font-serif text-3xl font-bold text-neutral-900 dark:text-white">
          Kinh nghiệm làm việc & Dự án thực tế
        </h2>

        <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-neutral-200 dark:before:bg-neutral-800">
          {profileData.experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 space-y-2">
              <span className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-neutral-900 dark:bg-white border-4 border-white dark:border-neutral-900" />
              <div className="flex flex-wrap items-center justify-between text-xs text-neutral-500 font-mono">
                <span className="font-semibold text-amber-700 dark:text-amber-400">{exp.company}</span>
                <span>{exp.period}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Life Outside Design & Pets Section */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 relative group shadow-sm">
          <img
            src={profileData.petsUrl}
            alt="Thú cưng của Trần Tiểu Ngọc"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-mono flex items-center justify-between">
            <span>🐾 Best Co-pilot</span>
            <span className="text-amber-300">Companion</span>
          </div>
        </div>

        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Góc nhỏ đời thường & Người bạn 4 chân</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
            Nguồn năng lượng tích cực đằng sau những bản thiết kế
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
            {profileData.petsBio} Khi không đắm chìm vào các luồng người dùng phức tạp hay thử nghiệm prompt mới, thời gian vui đùa bên thú cưng giúp Tiểu Ngọc tái tạo năng lượng sáng tạo, giữ tâm thế an yên và luôn tìm thấy niềm vui trong những điều giản dị nhất.
          </p>
        </div>
      </div>

      {/* Recruiter Callout */}
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h4 className="font-serif text-2xl font-bold">
            Sẵn sàng kết nối cùng đội ngũ của bạn
          </h4>
          <p className="text-xs sm:text-sm opacity-85 font-light">
            Nhận lời mời phỏng vấn cho các vị trí: AI Product Designer, Senior UX/UI Designer, Design Lead.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-1.5 px-6 py-3 rounded-xl text-xs font-semibold bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white hover:opacity-90 transition-opacity"
          >
            <span>Đặt lịch trao đổi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={profileData.resumeUrl}
            download
            className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-xl text-xs font-semibold border border-neutral-700 dark:border-neutral-300 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Tải CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};
