

## Rencana Perbaikan Layout Hero Section

Berdasarkan gambar referensi, ada beberapa elemen yang perlu diperbaiki agar tampilan lebih rapi:

### Perubahan yang Akan Dilakukan

#### 1. Menambahkan Teks "Learn Practies" dengan Panah
- Menambahkan teks "Learn" (biru teal) dan "Practies" (kuning/orange) dengan styling yang sesuai
- Menambahkan icon panah melengkung yang mengarah ke card Comunicative Skill
- Posisi di atas card Comunicative Skill

#### 2. Memperbaiki Card Comunicative Skill
- Memperbesar ukuran card agar lebih jelas
- Memperbesar ukuran circular progress indicators
- Memperbaiki spacing dan padding
- Menambahkan background yang lebih solid (putih dengan opacity lebih tinggi)

#### 3. Memperbaiki Section "300+ Student Joined"
- Memposisikan ulang agar berada di bawah card Comunicative Skill
- Menambahkan background card dengan glass-morphism effect
- Memperbaiki layout avatar dan teks agar lebih rapi
- Menambahkan teks deskriptif di bawahnya

### Detail Teknis

**File yang akan diubah:** `src/components/landing/Hero.tsx`

**Perubahan spesifik:**
1. Menambahkan komponen teks "Learn Practies" dengan icon curved arrow
2. Mengupdate styling card Comunicative Skill:
   - Memperbesar ukuran circular progress (dari w-8/w-11 ke w-12/w-14)
   - Memperbesar font size score dan label
   - Meningkatkan padding card
3. Menggabungkan card Comunicative Skill dan Student Joined dalam satu container di kiri
4. Menyesuaikan posisi dan gap antar elemen

### Preview Hasil
- Teks "Learn Practies" dengan panah akan muncul di atas card skills
- Card Comunicative Skill dengan circular progress yang lebih besar dan jelas
- Section Student Joined dengan layout yang lebih rapi di bawah card skills
- Semua elemen tersusun secara vertikal di sisi kiri

