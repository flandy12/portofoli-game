# Game Portfolio — Flandy Rockyliano Mamun

Website portofolio satu halaman yang menampilkan koleksi browser game dan interactive experience untuk event, exhibition, dan brand activation. Proyek ini memuat 17 karya dan eksperimen, mulai dari timing game, puzzle, dan multiplayer realtime hingga computer vision, kontrol suara, Three.js, serta WebGL.

## Fitur utama

- Daftar proyek lengkap dengan deskripsi, tantangan, fitur, dan teknologi.
- Galeri eksperimen interaksi berbasis suara, gesture, kamera, dan realtime.
- Logo klien dalam marquee yang responsif.
- Metadata SEO, Open Graph, Twitter Card, dan structured data Schema.org.
- Optimasi gambar menggunakan `next/image`.
- Tampilan responsif untuk desktop, tablet, dan perangkat seluler.
- Navigasi satu halaman dan kontak langsung melalui email.

> Website ini adalah katalog portofolio. Beberapa teknologi yang tertulis pada kartu proyek menjelaskan teknologi dari karya yang ditampilkan, bukan dependency website portofolio ini.

## Teknologi

| Teknologi | Kegunaan |
| --- | --- |
| Next.js 16 | Framework dan App Router |
| React 19 | Antarmuka pengguna |
| TypeScript | Pemeriksaan tipe |
| Tailwind CSS 4 | Pemrosesan CSS melalui Turbopack |
| CSS | Layout, tema, animasi, dan tampilan responsif |
| ESLint 9 | Pemeriksaan kualitas kode |

## Prasyarat

Pastikan perangkat sudah memiliki:

- [Node.js](https://nodejs.org/) versi **20.9.0 atau lebih baru**.
- npm, yang sudah disertakan bersama Node.js.
- Browser modern seperti Chrome 111+, Edge 111+, Firefox 111+, atau Safari 16.4+.

## Menjalankan proyek

1. Clone repositori dan masuk ke direktori proyek.

   ```bash
   git clone <URL_REPOSITORI>
   cd portofolio-web
   ```

2. Instal dependency sesuai lockfile.

   ```bash
   npm ci
   ```

3. Jalankan development server.

   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

Proyek saat ini tidak memerlukan file `.env` atau layanan database agar dapat dijalankan.

## Perintah yang tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server dengan Turbopack |
| `npm run lint` | Memeriksa kode menggunakan ESLint |
| `npm run build` | Membuat production build |
| `npm run start` | Menjalankan production server setelah proses build |

Sebelum membuat perubahan atau melakukan deployment, jalankan:

```bash
npm run lint
npm run build
```

## Struktur proyek

```text
portofolio-web/
├── app/
│   ├── globals.css       # Tema, layout, animasi, dan responsive styles
│   ├── layout.tsx        # Root layout dan metadata SEO
│   └── page.tsx          # Konten halaman dan data seluruh proyek
├── public/
│   ├── clients/          # Logo klien
│   └── projects/         # Gambar preview proyek
├── next.config.ts        # Konfigurasi Next.js dan Turbopack
├── eslint.config.mjs     # Konfigurasi ESLint
├── package.json          # Dependency dan npm scripts
└── tsconfig.json         # Konfigurasi TypeScript
```

## Mengubah konten

### Menambah proyek utama

Tambahkan objek baru ke array `projects` di `app/page.tsx`. Setiap proyek memerlukan data berikut:

```ts
{
  id: "slug-proyek",
  index: "18",
  title: "Nama Proyek",
  category: "Jenis Game · Kategori",
  image: "/projects/nama-gambar.png",
  imageAlt: "Deskripsi gambar yang informatif",
  description: "Ringkasan proyek.",
  challenge: "Tantangan desain atau teknis.",
  features: ["Fitur satu", "Fitur dua"],
  stack: ["Teknologi satu", "Teknologi dua"],
  tone: "rose",
}
```

Nilai `tone` yang sudah memiliki style adalah `rose`, `blue`, `navy`, `cyan`, dan `amber`.

### Menambah proyek eksperimen

Tambahkan objek ke array `labProjects` di `app/page.tsx`. Gunakan struktur objek yang sudah ada agar kartu baru konsisten dengan desain.

### Mengganti gambar atau logo

- Simpan gambar proyek di `public/projects/`.
- Simpan logo klien di `public/clients/`.
- Gunakan nama file sederhana, huruf kecil, dan tanda hubung, misalnya `game-baru.png`.
- Gunakan gambar yang sudah dikompresi agar halaman tetap cepat. Aset gambar saat ini cukup besar, sehingga WebP atau AVIF direkomendasikan untuk aset baru.
- Selalu isi `imageAlt` dengan deskripsi yang membantu pengguna pembaca layar.

### Mengubah identitas dan kontak

- Ubah metadata situs di `app/layout.tsx`.
- Ubah nama, teks hero, daftar keahlian, dan alamat email di `app/page.tsx`.
- Ubah warna, tipografi, jarak, breakpoint, dan animasi di `app/globals.css`.

## Keamanan dan performa

Website saat ini tidak memiliki form, API, autentikasi, atau database, sehingga tidak menerima input pengguna di server. Jika fitur-fitur tersebut ditambahkan:

- Validasi seluruh input di server menggunakan schema yang ketat.
- Jangan merender HTML dari pengguna secara langsung; lakukan sanitasi untuk mencegah XSS.
- Gunakan query terparameterisasi atau ORM untuk mencegah SQL Injection.
- Terapkan autentikasi, otorisasi, rate limiting, dan proteksi CSRF pada operasi yang mengubah data.
- Simpan secret hanya di environment variable dan jangan commit file `.env`.
- Optimalkan query, buat index database yang sesuai, dan batasi ukuran respons API.

Untuk menjaga performa frontend, kompres aset sebelum disimpan, pertahankan penggunaan `next/image`, dan uji production build setiap kali menambah dependency atau konten dalam jumlah besar.

## Deployment

Website dapat dijalankan pada penyedia hosting yang mendukung Node.js:

```bash
npm ci
npm run build
npm run start
```

Pada platform seperti Vercel, framework dan perintah build biasanya terdeteksi otomatis. Pastikan `npm run lint` dan `npm run build` berhasil sebelum deployment.

## Kontak

**Flandy Rockyliano Mamun**

Creative Web Developer — Tangerang, Indonesia

[flandydev@gmail.com](mailto:flandydev@gmail.com)
