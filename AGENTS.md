# 🤖 AGENTS.md - TN-Project Agentic Guide & Context

This file provides system context, architectural guidelines, and developer conventions for AI coding agents and developers working on **TN-Project**.

---

## 📌 Project Overview

- **Project Path:** `D:\TN-Project`
- **Owner & Domain:** Portfolio cá nhân & Showcase thiết kế của **Trần Tiểu Ngọc - Designer**
- **Architecture:** Multi-page Static SPA (React/Vite/Tailwind) deploy Vercel + Supabase (Contact Form Inquiries) + Curated Substack/LinkedIn Blog
- **Detailed Requirements:** Xem chi tiết tại [`docs/BA_REQUIREMENTS.md`](docs/BA_REQUIREMENTS.md)
- **Primary Languages:** TypeScript (Strict), React, HTML/CSS (Tailwind)

---

## 🏗️ Tech Stack

| Layer | Technology | Key Highlights |
| :--- | :--- | :--- |
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, Lucide React | SPA, Tailwind styling, Vite proxy to Backend (`/api`, `/health`) |
| **Backend** | Node.js (>= 18), Express, TypeScript, Vitest | REST API (`/api/v1/*`), Helmet, CORS, Morgan logging, Error handling |
| **Database** | PostgreSQL 16 (Containerized) | Persistent volume `postgres_data`, default database `tn_project_db` |
| **DevOps** | Docker, Docker Compose, Nginx Reverse Proxy | Multi-stage builds, non-root user execution, SPA routing |
| **CI/CD** | GitHub Actions (`.github/workflows/ci.yml`) | Automated type-checking, unit testing, bundle build, Docker verify |

---

## 📁 Repository Structure

```text
D:/TN-Project/
├── backend/                   # Backend REST API Service
│   ├── src/
│   │   ├── controllers/       # Controller logic (e.g. infoController, health)
│   │   ├── middleware/        # Error handlers, security middleware
│   │   ├── routes/            # Express routers (/api/v1/*)
│   │   ├── app.ts             # Express application factory
│   │   └── index.ts           # Server entry point (starts listener)
│   ├── tests/                 # Vitest test suite (e.g. health.test.ts)
│   ├── Dockerfile             # Multi-stage production container
│   ├── .env                   # Local backend environment configuration
│   └── package.json
│
├── frontend/                  # Frontend Web Client
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── App.tsx            # Main application dashboard
│   │   ├── main.tsx           # React DOM root entry
│   │   └── index.css          # Tailwind CSS base styles
│   ├── Dockerfile             # Production build served with Nginx Alpine
│   ├── nginx.conf             # Nginx configuration with SPA fallback
│   ├── vite.config.ts         # Vite build & proxy settings
│   └── package.json
│
├── devops/                    # Container Orchestration
│   ├── docker-compose.yml     # Production full stack (Frontend + Backend + DB)
│   ├── docker-compose.dev.yml # Live-reload development stack
│   └── nginx/                 # Gateway reverse proxy configuration
│
├── .github/workflows/         # CI/CD pipelines
│   └── ci.yml                 # Automated checks on push/PR
│
├── docs/                      # Architectural & DevOps documentation
│   └── DEVOPS.md              # In-depth DevOps operation manual
│
├── .env                       # Root environment configuration
├── package.json               # Monorepo root scripts
└── README.md                  # Project overview & documentation
```

---

## ⚡ Development Commands

All main workflows can be executed from the repository root:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs both Backend (port 5000) and Frontend (port 3000) concurrently with hot-reload |
| `npm run dev:backend` | Starts only the backend with `tsx watch` |
| `npm run dev:frontend` | Starts only the frontend Vite dev server |
| `npm run test` | Executes unit/integration test suite via Vitest |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) across backend & frontend |
| `npm run build` | Compiles backend (`dist/`) and bundles frontend (`dist/`) |
| `npm run install:all` | Installs dependencies for both `backend` and `frontend` |
| `npm run docker:up` | Builds and boots the full container stack via Docker Compose |
| `npm run docker:down` | Stops and tears down the Docker Compose stack |

---

## 📐 Conventions & Rules for AI Agents

1. **TypeScript First:** Ensure all new code in `backend` and `frontend` is strictly typed. Avoid `any`.
2. **Standard API Response Envelope:** Maintain standard JSON response contracts:
   ```json
   {
     "success": true,
     "data": { ... },
     "message": "Optional descriptive message",
     "timestamp": "ISO-8601 string"
   }
   ```
   For errors:
   ```json
   {
     "success": false,
     "error": {
       "message": "Error description",
       "status": 400
     }
   }
   ```
3. **Always Run Checks:** Before concluding tasks that modify code, run:
   - `npm run lint`
   - `npm run test`
4. **Environment Secrets:** Never commit `.env` or sensitive credentials. Keep `.env.example` up to date when introducing new environment variables.
