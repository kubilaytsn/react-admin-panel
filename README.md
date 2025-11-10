# React Admin Panel

> Modern bir React admin paneli örneği. MUI, TailwindCSS ve TypeScript kullanılarak geliştirilmiştir.
> Uluslararasılaştırma (i18n), tema renk desteği ve veri görselleştirme özelliklerini içerir.

---

## 📦 Dosya Yapısı

```
.
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── public
│   ├── admin-logo.svg
│   ├── avatar.svg
│   ├── favicon-admin.svg
│   ├── locales
│   │   ├── en/translation.json
│   │   └── tr/translation.json
│   ├── mockServiceWorker.js
│   └── vite.svg
├── README.md
├── src
│   ├── api
│   │   ├── client.ts
│   │   └── services/dashboard.service.ts
│   ├── App.css
│   ├── App.tsx
│   ├── assets/react.svg
│   ├── components
│   │   ├── Layout
│   │   │   ├── Header.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── Sidebar.tsx
│   │   └── SpriteSVG.tsx
│   ├── context/ThemeColorProvider.tsx
│   ├── hooks
│   │   ├── useThemeColor.ts
│   │   └── useUsers.ts
│   ├── i18n.ts
│   ├── index.css
│   ├── main.tsx
│   ├── mocks
│   │   ├── browser.ts
│   │   └── handlers/dashboard.mocks.ts
│   ├── pages
│   │   ├── Dashboard.tsx
│   │   ├── Settings.tsx
│   │   └── Users.tsx
│   ├── routes/router.tsx
│   └── utils/debounce.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Başlangıç

Projeyi yerel ortamda çalıştırmak için:

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Üretim build'i oluştur
npm run build

# Build'i önizle
npm run preview

# Kod stilini kontrol et
npm run lint
```

---

## 🛠 Kullanılan Teknolojiler

- **React 19** – Modern React özellikleri ile.
- **TypeScript** – Statik tip desteği.
- **Vite** – Hızlı build ve geliştirme deneyimi.
- **MUI (Material UI)** – UI bileşenleri ve temalar.
- **TailwindCSS** – Hızlı ve responsive CSS framework.
- **Recharts** – Dashboard grafik ve görselleştirme.
- **i18next** – Çok dilli destek.
- **MSW (Mock Service Worker)** – API mocklama.
- **Axios** – HTTP istekleri.

---

## 🌈 Tema ve Renk Yönetimi

- `ThemeColorProvider.tsx` üzerinden tema renkleri yönetilir.
- Header ve Sidebar, seçilen tema rengini dinamik olarak uygular.
- `useThemeColor` hook'u ile bileşenlerde renk değişimi kolayca uygulanabilir.
- Renk seçimi debounce edilerek performans optimize edilmiştir.

---

## 📊 Dashboard Özellikleri

- Grafikler ve tablolar (`Recharts` ve `MUI DataGrid`) ile veri görselleştirme.
- Mock verilerle (`mocks/handlers/dashboard.mocks.ts`) API simülasyonu.
- Responsive tasarım ve tema renkleri destekli görünümler.

---

## 🌐 Uluslararasılaştırma (i18n)

- `react-i18next` kullanılır.
- `public/locales/en/translation.json` ve `public/locales/tr/translation.json` dosyaları ile dil desteği.
- Dil algılama `i18next-browser-languagedetector` ile otomatik.

---

## ⚡ Özelleştirmeler

- **Debounce**: Özellikle tema renk seçimlerinde performans artışı için `utils/debounce.ts` kullanılır.
- **MSW**: API çağrılarını gerçek sunucuya ihtiyaç duymadan geliştirme sırasında simüle eder.
- **DataGrid**: Dashboard tablolarında sayfa, filtre ve sıralama desteği sağlar.

---

## 🧩 Gelecek Planlar

- Kullanıcı yetkilendirme ve rol bazlı erişim.
- Daha fazla dashboard grafiği ve özelleştirilebilir widget’lar.
- API entegrasyonu ve gerçek verilerle dinamik içerik.

---

## 📄 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.
