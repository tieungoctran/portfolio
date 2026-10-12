# Substack MCP Setup Guide

Hướng dẫn kết nối Substack với Claude Code để tạo draft bài viết trực tiếp từ terminal.

## Bước 1: Lấy Substack Credentials

Cần 3 giá trị từ browser:

### 1.1 Publication URL

- Vào https://substack.com/@tieungoc
- Click "Start writing" hoặc tạo publication nếu chưa có
- URL publication sẽ có dạng: `https://tieungoc.substack.com`

### 1.2 Session Token + User ID

1. Mở Chrome, đăng nhập Substack
2. Vào trang publication của bạn (ví dụ: `https://tieungoc.substack.com`)
3. Mở DevTools: `F12` hoặc `Ctrl + Shift + I`
4. Chuyển sang tab **Application**
5. Bên trái chọn **Cookies** > `https://substack.com`
6. Tìm cookie tên `substack.sid` -> đây là **Session Token**
7. Tìm cookie tên `substack.lli` -> đây là **User ID**

Nếu không thấy `substack.lli`:
- Vào tab **Network** trong DevTools
- Reload trang
- Click vào bất kỳ request nào đến `substack.com`
- Trong Headers, tìm `Cookie` header
- Tìm giá trị `substack.lli=...`

### 1.3 Cách khác (dùng Network tab)

1. DevTools > tab **Network**
2. Reload trang Substack
3. Filter request: `api`
4. Click vào request nào có `/api/v1/`
5. Xem **Request Headers** > `Cookie`
6. Copy giá trị `substack.sid=xxx` và `substack.lli=yyy`

## Bước 2: Gửi credentials cho Gosu

Gửi 3 giá trị này qua Lark/chat (KHÔNG commit vào git):

```
SUBSTACK_PUBLICATION_URL=https://tieungoc.substack.com
SUBSTACK_SESSION_TOKEN=<giá trị substack.sid>
SUBSTACK_USER_ID=<giá trị substack.lli>
```

Gosu sẽ cài vào Claude Code global settings.

## Bước 3: Sau khi cài xong

Claude Code sẽ có thể:
- Tạo draft bài viết trên Substack từ terminal
- Tieu Ngoc review draft trên Substack dashboard
- Publish khi hài lòng

Flow: Claude Code tạo draft -> Tieu Ngoc review trên substack.com -> chỉnh sửa nếu cần -> Publish.

## Lưu ý bảo mật

- KHÔNG commit session token vào git
- Session token có thể hết hạn, cần lấy lại nếu MCP báo lỗi auth
- Chỉ dùng cho tài khoản cá nhân của Tieu Ngoc
