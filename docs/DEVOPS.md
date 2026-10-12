# 🛠️ Cẩm Nang DevOps - TN-Project

Tài liệu này cung cấp hướng dẫn toàn diện về quy trình DevOps, đóng gói Container và tự động hóa CI/CD cho dự án **TN-Project**.

---

## 🏛️ 1. Kiến Trúc Hệ Thống (Architecture)

```text
[ Người Dùng (Browser) ]
           │
           ▼
[ Nginx Reverse Proxy (Cổng 80) ]
     │                        │
     ├─ /api/*, /health       └─ /* (SPA tĩnh)
     ▼                        ▼
[ Backend (Node.js/Express) ]   [ Frontend (React + Vite) ]
     │
     ▼ (PostgreSQL Wire)
[ PostgreSQL Database (Cổng 5432) ]
```

---

## 🚀 2. Hướng Dẫn Vận Hành Môi Trường

### A. Phát triển cục bộ (Local Development)

Yêu cầu máy đã cài **Node.js (>= 18)**.

1. **Cài đặt thư viện:**
   ```bash
   npm run install:all
   ```

2. **Khởi chạy đồng thời cả 2 service (Hot reload):**
   ```bash
   npm run dev
   ```
   - **Frontend:** http://localhost:3000
   - **Backend API:** http://localhost:5000
   - **Health check:** http://localhost:5000/health

### B. Môi trường Container (Docker Compose)

Yêu cầu máy đã cài đặt **Docker Desktop** / **Docker Engine**.

1. **Khởi động toàn bộ stack (Frontend + Backend + PostgreSQL):**
   ```bash
   npm run docker:up
   # hoặc:
   docker compose -f devops/docker-compose.yml up --build -d
   ```

2. **Kiểm tra trạng thái các container:**
   ```bash
   docker compose -f devops/docker-compose.yml ps
   ```

3. **Xem log trực tiếp:**
   ```bash
   docker compose -f devops/docker-compose.yml logs -f
   ```

4. **Dừng toàn bộ hệ thống:**
   ```bash
   npm run docker:down
   # hoặc:
   docker compose -f devops/docker-compose.yml down
   ```

---

## 🐳 3. Chi Tiết Tối Ưu Hóa Dockerfile

### Backend (`backend/Dockerfile`)
- **Multi-stage build:**
  - Stage 1 (`builder`): Build TypeScript code ra JavaScript (`dist/`).
  - Stage 2 (`runner`): Alpine Linux siêu nhẹ, chỉ cài production dependencies.
- **Bảo mật:** Chạy dưới quyền `USER node` (non-root) để ngăn chặn tấn công đặc quyền container breakout.
- **Healthcheck:** Tích hợp `HEALTHCHECK` định kỳ gọi `http://localhost:5000/health`.

### Frontend (`frontend/Dockerfile`)
- **Multi-stage build:**
  - Stage 1 (`builder`): Biên dịch React + Vite + Tailwind CSS thành static assets tối ưu.
  - Stage 2 (`runner`): Nginx Alpine phục vụ static files với gzip và cấu hình SPA routing (`try_files $uri $uri/ /index.html`).

---

## 🔄 4. Quy Trình CI/CD (GitHub Actions)

Quy trình tự động hóa được định nghĩa tại [`.github/workflows/ci.yml`](file:///D:/TN-Project/.github/workflows/ci.yml) và kích hoạt khi có commit/pull request vào nhánh `main` hoặc `master`:

1. **`backend-checks`**:
   - Cài đặt dependencies sạch với `npm ci`.
   - Kiểm tra kiểu dữ liệu TypeScript (`npm run lint`).
   - Chạy toàn bộ Unit & Integration tests (`npm test`).
2. **`frontend-checks`**:
   - Type-check TypeScript.
   - Build bundle production kiểm tra lỗi cú pháp/CSS.
3. **`docker-build`**:
   - Kiểm tra build thành công các image Docker cho cả frontend và backend.

---

## 🩺 5. Monitoring & Health Checks

- Endpoint: `GET /health` hoặc `GET /api/v1/health`
- Kết quả mẫu:
  ```json
  {
    "status": "healthy",
    "service": "tn-project-backend",
    "uptime": 128.45,
    "timestamp": "2026-10-12T13:56:00.000Z",
    "environment": "production"
  }
  ```
- Endpoint này sẵn sàng tích hợp với Kubernetes Liveness/Readiness probes, AWS ALB Target Groups hoặc UptimeRobot.
