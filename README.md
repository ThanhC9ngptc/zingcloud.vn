# Zing Cloud - Premium Cloud Services Website

Website tĩnh (static) với giao diện glassmorphism gradient tím-xanh, được thiết kế để deploy lên GitHub Pages.

## 🚀 Tính năng

- ✅ Giao diện glassmorphism với gradient tím ↔ xanh ↔ đen
- ✅ Header cố định với 2 trạng thái (expanded/shrunk) khi scroll
- ✅ Logo "Z" gradient 3D
- ✅ 3 dịch vụ chính: VPS, Cloud Game, Dedicated Server
- ✅ Mỗi dịch vụ có 3 gói: Performance, Plastic, Premium
- ✅ Carousel/brand strip tự động scroll liên tục
- ✅ Modal đăng nhập/đăng ký với hiệu ứng glass
- ✅ Floating Action Button (FAB) với menu liên hệ
- ✅ QR code generator cho checkout (demo)
- ✅ Button zoom effect khi click
- ✅ Fully responsive (Desktop, Tablet, Mobile)
- ✅ Accessibility support (ARIA labels, keyboard navigation)

## 📁 Cấu trúc files

Tất cả files nằm trực tiếp ở thư mục gốc (root):

```
/
├── index.html        # Trang chính
├── styles.css        # CSS tùy chỉnh
├── app.js           # JavaScript logic
├── logo.svg         # Logo Zing Cloud
└── README.md        # File hướng dẫn này
```

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc trang
- **Tailwind CSS** (CDN) - Framework CSS utility-first
- **Vanilla JavaScript** - Logic tương tác
- **QRCode.js** (CDN) - Tạo mã QR
- **Google Fonts** - Font Inter

## 📦 Cách chạy local

### Phương pháp 1: VSCode Live Server

1. Mở thư mục project trong Visual Studio Code
2. Cài extension "Live Server" (nếu chưa có)
3. Click phải vào `index.html` → chọn "Open with Live Server"
4. Website sẽ mở tại `http://localhost:5500`

### Phương pháp 2: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Mở browser tại http://localhost:8000
```

### Phương pháp 3: Node.js HTTP Server

```bash
# Cài http-server global (chỉ cần 1 lần)
npm install -g http-server

# Chạy server
http-server -p 8000

# Mở browser tại http://localhost:8000
```

## 🌐 Deploy lên GitHub Pages

### Bước 1: Tạo repository mới trên GitHub

1. Đăng nhập GitHub
2. Click "New repository"
3. Đặt tên: `zing-cloud` (hoặc tên tùy chọn)
4. Chọn "Public"
5. KHÔNG check "Add README" (vì đã có file này)

### Bước 2: Upload code lên GitHub

```bash
# Khởi tạo git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit - Zing Cloud website"

# Link với GitHub repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click tab "Settings"
3. Scroll xuống phần "Pages" (bên trái sidebar)
4. Tại "Source" chọn "Deploy from a branch"
5. Tại "Branch" chọn `main` và folder `/ (root)`
6. Click "Save"

### Bước 4: Truy cập website

Sau vài phút, website sẽ có tại:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## ⚙️ Tùy chỉnh

### Thay đổi thông tin liên hệ

Mở file `index.html`, tìm phần FAB menu và sửa:

```html
<!-- Email -->
<a href="mailto:YOUR_EMAIL@gmail.com" class="fab-menu-item">
    ...
    <span>YOUR_EMAIL@gmail.com</span>
</a>

<!-- Hotline -->
<a href="tel:YOUR_PHONE" class="fab-menu-item">
    ...
    <span>YOUR_PHONE</span>
</a>
```

### Thay đổi giá gói dịch vụ

Mở file `app.js`, tìm object `pricingData` và sửa:

```javascript
const pricingData = {
    vps: {
        title: 'VPS Server',
        plans: [
            {
                name: 'Performance',
                price: 'GIÁ MỚI/tháng',
                specs: {
                    cpu: 'CẤU HÌNH',
                    // ...
                }
            }
        ]
    }
}
```

### Thay đổi màu sắc

Mở file `styles.css`, tìm `:root` và sửa:

```css
:root {
    --gradient-primary: linear-gradient(135deg, #MÀU1 0%, #MÀU2 50%, #MÀU3 100%);
    --glass-bg: rgba(59, 130, 246, 0.1); /* Độ mờ glass */
    /* ... */
}
```

## 🔌 Tích hợp Backend

File này là **frontend demo**. Để tích hợp backend thực:

### 1. Đăng nhập/Đăng ký

Trong `app.js`, tìm phần form submission và thay:

```javascript
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Gọi API backend
    try {
        const response = await fetch('YOUR_API_URL/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        // Xử lý response...
    } catch (error) {
        console.error('Login error:', error);
    }
});
```

### 2. Thanh toán QR thực

Tích hợp với VNPay, MoMo, hoặc ZaloPay API để tạo QR thanh toán thật.

## 📱 Liên hệ & Hỗ trợ

- **Email**: ZingCloud.tech@gmail.com
- **Hotline**: 0705 983 391
- **Discord**: [discord.gg/zingcloud](https://discord.gg/zingcloud)
- **Facebook**: [facebook.com/zingcloud](https://facebook.com/zingcloud)
- **Messenger**: [m.me/zingcloud](https://m.me/zingcloud)

## 📄 License

© 2025 Zing Cloud. All rights reserved.

---

**Lưu ý**: Website này chỉ là demo frontend. Các tính năng thanh toán và đăng nhập cần backend API để hoạt động đầy đủ.
