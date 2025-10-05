# Oodi Vue Admin — Dark Mode Starter

این پروژه یک قالب پنل ادمین ساخته شده با Vue 3، Vite و TailwindCSS است. حالت دارک به صورت پیش‌فرض فعال است و رنگ‌های اصلی بر اساس #212121 و #303030 تنظیم شده‌اند.

## اجرا سریع

1. نصب وابستگی‌ها:

```bash
npm install
```

2. اجرای محیط توسعه:

```bash
npm run dev
```

## ساختار پروژه

- src/layouts — لایه‌های Admin و Auth
- src/components — کارت، جدول، مودال و دکمه
- src/pages — صفحات Dashboard, Users, Reports, Settings, Login
- src/store — Pinia store برای UI state

## سفارشی‌سازی رنگ

برای تغییر رنگ‌ها به `tailwind.config.cjs` مراجعه کنید و متغیرهای `bgPrimary` و `bgSecondary` را تغییر دهید.

