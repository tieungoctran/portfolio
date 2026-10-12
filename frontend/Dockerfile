# ==========================================
# Giai đoạn 1: Build source React + Vite
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Cache layer dependencies
COPY package*.json ./
RUN npm ci

# Copy code nguồn và build
COPY . .
RUN npm run build

# ==========================================
# Giai đoạn 2: Nginx Web Server siêu nhẹ
# ==========================================
FROM nginx:1.27-alpine AS runner

# Xóa cấu hình mặc định của Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copy cấu hình Nginx tùy biến tối ưu cho SPA & Reverse Proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts từ builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Healthcheck cho Nginx
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
