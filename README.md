# Oodi Vue Admin — Dark Mode Starter

![Panel screenshot](panel-screenshot.png)

این پروژه یک قالب پنل ادمین ساخته شده با **Vue 3**, **Vite** و **TailwindCSS** است. حالت دارک به صورت پیش‌فرض فعال است و رنگ‌های اصلی بر اساس `#212121` (bgPrimary) و `#303030` (bgSecondary) تنظیم شده‌اند.

---

## اجرا سریع

1. نصب وابستگی‌ها:

```bash
npm install
```

2. اجرای محیط توسعه:

```bash
npm run dev
```

3. ساخت نسخه‌ی production:

```bash
npm run build
```

---

## ساختار پروژه

```
src/
├─ layouts/      # لایه‌های Admin و Auth
├─ components/   # کارت، جدول، مودال و دکمه
├─ pages/        # Dashboard, Users, Reports, Settings, Login
├─ store/        # Pinia store برای UI state
└─ assets/       # تصاویر و آیکون‌ها
```

---

## سفارشی‌سازی رنگ

رنگ‌ها در `tailwind.config.cjs` تعریف شده‌اند. برای تغییر رنگ‌های اصلی (bgPrimary و bgSecondary) مقدار متغیرها را تغییر دهید تا ظاهر کلی پنل عوض شود.

مثال (در `tailwind.config.cjs`):

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        bgPrimary: '#212121',
        bgSecondary: '#303030'
      }
    }
  }
}
```

---

## نکات کاربردی برای توسعه

- برای اضافه کردن صفحه جدید: یک فایل Vue در `src/pages/` بسازید و آن را در `src/layouts/Admin` به عنوان یک route ثبت کنید.
- برای state محلی مجموعه‌ای از storeها را در `src/store/` با Pinia بسازید.
- از کامپوننت‌های موجود در `src/components/` استفاده کنید تا رابط یکنواخت بماند.

---

## Contribution / تغییرات پیشنهادی

اگر می‌خواهید توسعه بدهید می‌توانید:

- اضافه کردن چند تم (مثلاً light/darker shades)
- افزودن i18n برای پشتیبانی چند زبانه
- اضافه کردن تست‌های واحد (Vitest)
- طراحی چندین کامپوننت قابل‌استفاده مجدد مانند جدول دیتابیس با pagination و فیلتر

---

## مجوز و اعتبار

این پروژه به عنوان یک قالب قرار گرفته است — لطفاً قبل از استفاده در پروژه‌های تجاری فایل LICENSE و توضیحات مالک را بررسی کنید.

**Credit:** این README توسعه‌یافته بر پایه‌ی مخزن اصلی ساخته شده است.

---
