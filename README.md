# 🚀 TN-Project - Full-stack Web & DevOps Platform

Dự án phát triển web toàn diện kết hợp quy trình DevOps tự động hóa chuẩn công nghiệp tại `D:\TN-Project`.

---

## 🏗️ Kiến Trúc Công Nghệ

| Thành phần | Công nghệ chính | Tính năng nổi bật |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons | Tốc độ tải trang siêu nhanh, SPA, Dashboard giám sát API thời gian thực |
| **Backend** | Node.js, Express, TypeScript | RESTful API, Helmet, CORS, Morgan logger, Health Check |
| **Database** | PostgreSQL 16 (Docker) | Volume lưu trữ dữ liệu bền vững |
| **DevOps & Containers** | Docker (Multi-stage), Docker Compose, Nginx Reverse Proxy | Image nhỏ gọn, bảo mật non-root user, proxy gateway |
| **CI/CD** | GitHub Actions Pipeline | Tự động hóa Lint, Unit Test, Build và Docker verification |

---

## 📁 Cấu Trúc Dự Án

```text
D:/TN-Project/
├── backend/                   # Dịch vụ Backend REST API (Node.js + Express + TS)
│   ├── src/
│   │   ├── controllers/       # Xử lý logic API & Health check
│   │   ├── middleware/        # Error handler, CORS, Helmet
│   │   ├── routes/            # Khai báo Endpoint /api/v1/*
│   │   ├── app.ts             # Cấu hình Express app
│   │   └── index.ts           # Điểm khởi chạy server
│   ├── tests/                 # Unit & Integration tests (Vitest)
│   ├── Dockerfile             # Multi-stage build Node Alpine
│   └── package.json
│
├── frontend/                  # Giao diện Web SPA (React + Vite + Tailwind)
│   ├── src/
│   │   ├── components/        # UI components
│   │   ├── App.tsx            # Dashboard theo dõi hệ thống & kết nối API
│   │   ├── main.tsx           # Entrypoint React
│   │   └── index.css          # Tailwind CSS styles
│   ├── Dockerfile             # Multi-stage build -> Nginx Alpine
│   ├── nginx.conf             # Cấu hình Nginx reverse proxy cho SPA
│   └── package.json
│
├── devops/                    # Tài nguyên DevOps & Điều phối Container
│   ├── docker-compose.yml     # Khởi chạy Frontend + Backend + Postgres
│   ├── docker-compose.dev.yml # Môi trường container live-reload
│   └── nginx/                 # Gateway reverse proxy
│
├── .github/workflows/         # CI/CD Pipelines
│   └── ci.yml                 # Tự động lint, test, build và verify docker
│
├── docs/                      # Tài liệu dự án
│   └── DEVOPS.md              # Cẩm nang DevOps chi tiết
│
├── .editorconfig              # Quy chuẩn định dạng code
├── .env.example               # Mẫu biến môi trường
├── .gitignore                 # Bỏ qua node_modules, dist, secrets,...
├── package.json               # Root monorepo quản lý đồng thời cả 2 service
└── README.md
```

---

## ⚡ Hướng Dẫn Khởi Chạy Nhanh

### 1. Cài đặt các gói phụ thuộc (Dependencies)

Tại thư mục gốc `D:\TN-Project`:

```bash
npm install
# hoặc chạy:
npm run install:all
```

### 2. Chạy môi trường Local Development (Khuyến nghị)

Chạy đồng thời cả Frontend và Backend trong một terminal với hot reload:

```bash
npm run dev
```

- 🌐 **Giao diện Web Frontend:** [http://localhost:3000](http://localhost:3000)
- 🔌 **Backend REST API:** [http://localhost:5000](http://localhost:5000)
- 🩺 **API Health Check:** [http://localhost:5000/health](http://localhost:5000/health)

### 3. Kiểm thử tự động (Automated Tests)

```bash
npm run test
```

### 4. Khởi chạy bằng Docker Compose (Production Stack)

```bash
npm run docker:up
```

Chi tiết các thiết lập mở rộng và CI/CD có thể xem tại [docs/DEVOPS.md](file:///D:/TN-Project/docs/DEVOPS.md).
