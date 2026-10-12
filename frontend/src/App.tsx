import { useState, useEffect } from 'react';
import { 
  Server, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  Container, 
  GitBranch, 
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface ProjectInfo {
  name: string;
  description: string;
  stack: {
    frontend: string[];
    backend: string[];
    devops: string[];
  };
  status: string;
  version: string;
}

interface HealthInfo {
  status: string;
  service: string;
  uptime: number;
  timestamp: string;
  environment: string;
}

export default function App() {
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | null>(null);
  const [healthInfo, setHealthInfo] = useState<HealthInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const [resHealth, resInfo] = await Promise.all([
        fetch('/api/v1/health'),
        fetch('/api/v1/info')
      ]);

      if (!resHealth.ok || !resInfo.ok) {
        throw new Error('Không thể kết nối đến Backend API');
      }

      const healthData = await resHealth.json();
      const infoData = await resInfo.json();

      setHealthInfo(healthData);
      setProjectInfo(infoData.data);
    } catch (err: any) {
      setError(err.message || 'Lỗi kết nối Backend');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-600 rounded-lg shadow-md shadow-indigo-500/20">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                TN-Project
              </span>
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                Full-Stack & DevOps
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchStatus}
              disabled={loading}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-sm font-medium text-slate-200 transition disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Kiểm tra kết nối
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full space-y-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-950/40 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                <GitBranch className="w-3.5 h-3.5" /> CI/CD Automation
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                <ShieldCheck className="w-3.5 h-3.5" /> Non-root Docker Security
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                <Cpu className="w-3.5 h-3.5" /> Microservice Ready
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hạ tầng Full-stack Web & DevOps Sẵn Sàng
            </h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Dự án tại <code className="text-indigo-300 bg-slate-800/80 px-2 py-0.5 rounded font-mono text-sm">D:\TN-Project</code> đã được cấu hình hoàn chỉnh với kiến trúc Microservice/Container hóa gồm Frontend (React + Vite), Backend (Express + TypeScript), Docker Compose và CI/CD.
            </p>
          </div>

          {/* Connection Status Banner */}
          <div className="mt-6 pt-6 border-t border-slate-800/80">
            {error ? (
              <div className="flex items-center gap-3 p-4 bg-amber-950/30 border border-amber-800/50 rounded-xl text-amber-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>Backend đang dừng:</strong> Hãy chạy lệnh <code className="bg-amber-900/50 px-2 py-0.5 rounded font-mono">npm run dev</code> ở thư mục gốc để kích hoạt cả Frontend & Backend đồng thời.
                </div>
              </div>
            ) : healthInfo ? (
              <div className="flex items-center justify-between p-4 bg-emerald-950/20 border border-emerald-800/40 rounded-xl text-emerald-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium">
                    Backend API kết nối thành công: <strong>{healthInfo.service}</strong> (Môi trường: {healthInfo.environment})
                  </span>
                </div>
                <span className="text-xs text-emerald-400/80 font-mono">
                  Uptime: {Math.floor(healthInfo.uptime)}s
                </span>
              </div>
            ) : (
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-indigo-400" />
                Đang kiểm tra tín hiệu Backend API...
              </div>
            )}
          </div>

          {/* Dynamic Backend Data Display */}
          {projectInfo && (
            <div className="mt-4 p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-300 flex flex-wrap gap-4 items-center justify-between">
              <div>
                <span className="text-slate-400">Dữ liệu từ API: </span>
                <span className="font-semibold text-white">{projectInfo.name}</span> — {projectInfo.description}
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-indigo-900/40 text-indigo-300 rounded border border-indigo-700/50 font-mono">
                  v{projectInfo.version}
                </span>
                <span className="px-2 py-0.5 bg-emerald-900/40 text-emerald-300 rounded border border-emerald-700/50">
                  {projectInfo.status}
                </span>
              </div>
            </div>
          )}
        </section>

        {/* 3 Pillars Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Pillar */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-indigo-500/50 transition">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-cyan-950 text-cyan-400 rounded-lg">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono bg-cyan-950/80 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-800/50">
                Port 3000
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Frontend Web</h2>
              <p className="text-sm text-slate-400 mt-1">Giao diện SPA hiện đại, mượt mà và tối ưu tốc độ render.</p>
            </div>
            <ul className="text-xs space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> React 18 + Vite Bundler
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> TypeScript Type-safe
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Tailwind CSS Responsive Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Nginx Alpine Production image
              </li>
            </ul>
          </div>

          {/* Backend Pillar */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-indigo-500/50 transition">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-indigo-950 text-indigo-400 rounded-lg">
                <Server className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono bg-indigo-950/80 text-indigo-300 px-2.5 py-1 rounded-full border border-indigo-800/50">
                Port 5000
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Backend REST API</h2>
              <p className="text-sm text-slate-400 mt-1">Dịch vụ API chuẩn RESTful kiến trúc module hóa.</p>
            </div>
            <ul className="text-xs space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Node.js + Express + TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Bảo mật Helmet & CORS Middleware
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Health Check Endpoint tự động
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Kiểm thử tự động với Vitest
              </li>
            </ul>
          </div>

          {/* DevOps Pillar */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-indigo-500/50 transition">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-emerald-950 text-emerald-400 rounded-lg">
                <Container className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-800/50">
                CI/CD Ready
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">DevOps & Triển khai</h2>
              <p className="text-sm text-slate-400 mt-1">Tự động hóa toàn diện từ môi trường Dev đến Production.</p>
            </div>
            <ul className="text-xs space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Docker Multi-stage Builds siêu nhẹ
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Docker Compose (App + Database)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Nginx Reverse Proxy Gateway
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> GitHub Actions CI Pipeline
              </li>
            </ul>
          </div>
        </section>

        {/* Quick Commands & DevOps Architecture */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Terminal className="w-5 h-5 text-indigo-400" />
            <span>Lệnh phát triển & DevOps thông dụng</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800/80 space-y-2">
              <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                Môi trường Local Dev (Đồng thời cả 2 service)
              </div>
              <pre className="text-xs font-mono text-slate-300 overflow-x-auto p-2 bg-slate-900 rounded">
                npm run dev
              </pre>
              <p className="text-xs text-slate-400">Chạy đồng thời Frontend (:3000) và Backend (:5000) với Hot Reload.</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800/80 space-y-2">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Môi trường Container (Docker Compose)
              </div>
              <pre className="text-xs font-mono text-slate-300 overflow-x-auto p-2 bg-slate-900 rounded">
                docker compose -f devops/docker-compose.yml up --build
              </pre>
              <p className="text-xs text-slate-400">Khởi chạy toàn bộ hệ thống gồm Frontend, Backend và PostgreSQL.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        D:\TN-Project • Kiến trúc Full-stack & DevOps chuẩn công nghiệp
      </footer>
    </div>
  );
}
