# ==========================================
# Giai đoạn 1: Build source TypeScript
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package descriptors trước để cache layer npm install
COPY package*.json ./
RUN npm ci

# Copy toàn bộ mã nguồn và build ra JavaScript (dist/)
COPY tsconfig.json ./
COPY src/ ./src/
RUN npm run build

# ==========================================
# Giai đoạn 2: Runtime Production siêu nhẹ
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

# Thiết lập biến môi trường production
ENV NODE_ENV=production
ENV PORT=5000

# Chỉ cài production dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy artifacts đã build từ builder
COPY --from=builder /app/dist ./dist

# Sử dụng non-root user có sẵn trong Node image để tăng cường bảo mật
USER node

EXPOSE 5000

# Health check tích hợp trong Docker container
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/health || exit 1

CMD ["node", "dist/index.js"]
