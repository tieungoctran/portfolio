# Asset Registry - Cross-Brand Asset Index

> Tài liệu này track tất cả design assets và shared resources xuyên suốt 3 brands.
> Cập nhật mỗi khi thêm/xóa assets trong brand workspaces.

---

## 1. SHARED RESOURCES

### POD Mockup Templates (dùng chung cho mọi brand)

| Product Type | Kích thước file | DPI | Color Mode | Bleed | Ghi chú |
|-------------|----------------|-----|-----------|-------|---------|
| **T-Shirt (chest)** | 4500 x 5400px | 150 | RGB (DTG) | Không | Mặt trước + sau |
| **T-Shirt (sleeve)** | 1800 x 1800px | 150 | RGB (DTG) | Không | |
| **Hoodie** | 4500 x 5400px | 150 | RGB (DTG) | Không | Tương tự T-shirt |
| **Poster A4** | 2480 x 3508px | 300 | CMYK | +3mm | |
| **Poster A3** | 3508 x 4961px | 300 | CMYK | +3mm | |
| **Poster 50x70cm** | 5906 x 8268px | 300 | CMYK | +3mm | |
| **Mug 11oz** | 3300 x 2400px | 300 | RGB (sublimation) | Không | PNG transparent |
| **Tote Bag** | 4500 x 4800px | 150 | RGB | Không | Mặt trước + sau |
| **Sticker** | Varies | 300 | RGB | +2mm | PNG transparent |
| **Canvas** | Varies by size | 300 | RGB | +1inch wrap | |

Chi tiết đầy đủ: [brand-guideline-template.md](brand-guideline-template.md) Section 5

### Color Profiles

| Môi trường | Profile |
|-----------|---------|
| In offset (Coated) | Fogra39 / GRACoL 2006 |
| In offset (Uncoated) | Fogra47 |
| Digital / Web | sRGB IEC61966-2.1 |
| POD (Sublimation/DTG) | sRGB |

---

## 2. PER-BRAND ASSET STATUS

### LittleOwh (Otaku/Fandom)

| Asset Type | Count | Location | Last Updated |
|-----------|-------|----------|-------------|
| Logo variants | 0 | `LittleOwh/designs/assets/` | - |
| Design files | 0 | `LittleOwh/designs/assets/` | - |
| Product mockups | 0 | `LittleOwh/designs/mockups/` | - |
| POD exports | 0 | `LittleOwh/designs/exports/` | - |
| Campaign assets | 0 | `LittleOwh/campaigns/` | - |

**Brand colors:** Primary: #FFCC00 (Otaku Gold) | Secondary: #1A1A2E (Manga Dark) | Accent: #FF6600 (Power Orange)
**Brand guide:** `CoworkOS/brands/littleowh/brand-guide.md`

### EzCustomcar (Car Enthusiasts)

| Asset Type | Count | Location | Last Updated |
|-----------|-------|----------|-------------|
| Logo variants | 0 | `EzCustomcar/designs/assets/` | - |
| Design files | 0 | `EzCustomcar/designs/assets/` | - |
| Product mockups | 0 | `EzCustomcar/designs/mockups/` | - |
| POD exports | 0 | `EzCustomcar/designs/exports/` | - |
| Campaign assets | 0 | `EzCustomcar/campaigns/` | - |

**Brand colors:** Xem `CoworkOS/brands/ezcustomcar/brand-guide.md`
**Brand guide:** `CoworkOS/brands/ezcustomcar/brand-guide.md`

### Kozmozracing (Motorsport Fans)

| Asset Type | Count | Location | Last Updated |
|-----------|-------|----------|-------------|
| Logo variants | 0 | `Kozmozracing/designs/assets/` | - |
| Design files | 0 | `Kozmozracing/designs/assets/` | - |
| Product mockups | 0 | `Kozmozracing/designs/mockups/` | - |
| POD exports | 0 | `Kozmozracing/designs/exports/` | - |
| Campaign assets | 0 | `Kozmozracing/campaigns/` | - |

**Brand colors:** Xem `CoworkOS/brands/kozmozracing/brand-guide.md`
**Brand guide:** `CoworkOS/brands/kozmozracing/brand-guide.md`

---

## 3. SUPPLIER SPECS - Quick Reference

### PGPrints (Primary - dùng cho LittleOwh, EzCustomcar)

| Product | Format | Max Size | Color | Notes |
|---------|--------|----------|-------|-------|
| T-Shirt DTG | PNG | 4500x5400px | RGB/sRGB | Transparent BG optional |
| Hoodie DTG | PNG | 4500x5400px | RGB/sRGB | |
| Poster | PDF/PNG | Theo size thực | CMYK (PDF) / RGB (PNG) | Bleed +3mm |
| Mug sublimation | PNG | 3300x2400px | RGB/sRGB | Transparent BG |
| Canvas | PNG | Theo size + 1" wrap | RGB/sRGB | |

### Toaddit (Secondary - backup cho PGPrints)

| Product | Format | Max Size | Color | Notes |
|---------|--------|----------|-------|-------|
| T-Shirt | PNG | 4500x5400px | RGB | Spec tương tự PGPrints |
| Sticker | PNG | Varies | RGB | Transparent BG, bleed +2mm |

### Catkissfish (Kozmozracing-specific)

| Product | Format | Max Size | Color | Notes |
|---------|--------|----------|-------|-------|
| Racing merchandise | PNG/PDF | Varies | RGB/CMYK | Check trực tiếp với supplier |

> **Lưu ý:** Luôn check spec mới nhất trực tiếp với supplier trước khi export hàng loạt. Bảng trên là baseline reference.

---

## 4. ASSET LIFECYCLE

```
Design Brief (CoworkOS)
    │
    ▼
Source File → designs/assets/    (PSD, AI, working files)
    │
    ▼
Mockup → designs/mockups/       (Product visualization)
    │
    ▼
Approved → designs/exports/     (Ready-to-upload, theo supplier spec)
    │
    ▼
Live on Store                    (ShopBase / WooCommerce)
    │
    ▼ (sau 90 ngày không bán)
Archive → designs/archive/      (giữ lại, không xóa)
```

---

*Tạo: 2026-03-27 | Version: 1.0*
