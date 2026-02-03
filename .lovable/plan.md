

## Rencana: Menambahkan Section Video

Berdasarkan gambar referensi, saya akan menambahkan section video baru yang terletak antara section **ValueCards** ("Meet Achieved, Your Study Buddy.") dan section **TestModules** ("Free IELTS Online Tests For Practicing").

---

### Tampilan yang Akan Dibuat

Section ini akan menampilkan:
- Gambar video classroom dengan overlay gradien gelap di bagian bawah
- Tombol play di tengah gambar
- Teks besar "achieved" dengan warna split (#EDF9FF untuk "achie" dan #1B79A8 untuk "ved")
- Teks deskripsi di bawah: "Automated grading can't catch the nuance of Band 8.0 English. That's why we've put real human examiners, detailed writing feedback, and live speaking practice at the core of everything we do."

---

### File yang Akan Dibuat/Diubah

| File | Aksi |
|------|------|
| `src/assets/video-classroom.png` | Copy gambar yang di-upload |
| `src/components/landing/VideoSection.tsx` | Buat komponen baru untuk section video |
| `src/pages/Index.tsx` | Import dan tambahkan VideoSection antara ValueCards dan FeatureSection |

---

### Detail Teknis

**1. Struktur VideoSection Component:**
```text
+------------------------------------------+
|                                          |
|     [Gambar Classroom dengan overlay]    |
|                                          |
|              [Play Button]               |
|                                          |
|            "achieved" (large text)       |
|                                          |
|    [Deskripsi tentang human examiners]   |
|                                          |
+------------------------------------------+
```

**2. Styling:**
- Background gelap (#1B1B1B) sama seperti ValueCards
- Gambar dengan aspect ratio 16:9 atau serupa
- Overlay gradien dari transparan ke gelap di bagian bawah gambar
- Teks "achieved" menggunakan font-display, bold, ukuran besar (~10-12vw)
- Play button dengan icon Play, background teal (#156790), rounded full
- Responsive untuk mobile dan desktop

**3. Urutan Section di Index.tsx:**
```
Hero -> ValueCards -> VideoSection -> FeatureSection -> TestModules -> FAQ -> Blog -> Footer
```

---

### Hasil Akhir

Section video akan memberikan transisi visual yang menarik antara ValueCards dan FeatureSection, menampilkan suasana kelas IELTS dan menekankan pendekatan human-centered dari platform Achieved.

