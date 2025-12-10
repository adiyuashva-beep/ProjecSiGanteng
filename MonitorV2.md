<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monitor Resepsionis - Si Ganteng</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    
    <style>
        /* --- SETUP WARNA & FONT --- */
        :root {
            --bg-dark: #0a0e17;       /* Latar belakang utama - Gelap pekat */
            --card-dark: #111827;     /* Latar belakang kartu/panel */
            --text-primary: #ffffff;  /* Teks utama - Putih */
            --text-secondary: #9ca3af;/* Teks sekunder - Abu-abu */
            --neon-green: #00f5d4;    /* Aksen warna hijau neon untuk yang hadir/positif */
            --neon-red: #ff3366;      /* Aksen warna merah neon untuk yang belum hadir */
            --accent-blue: #00b4d8;   /* Aksen biru untuk elemen lain */
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-primary);
            height: 100vh; /* Layar penuh */
            overflow: hidden; /* Mencegah scroll bar ganda di body */
        }

        /* --- HEADER ATAS --- */
        .header {
            display: flex;
            align-items: center;
            padding: 15px 30px;
            background: rgba(17, 24, 39, 0.8); /* Semi-transparan */
            backdrop-filter: blur(10px); /* Efek blur di belakang header */
            border-bottom: 1px solid rgba(255,255,255,0.1);
            height: 80px;
        }

        .logo-area {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .logo-area img {
            height: 50px; /* Ukuran logo */
        }

        .header-text h1 {
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        /* --- UPDATE 1: MENAMBAHKAN BRAND SI GANTENG --- */
        .highlight-brand {
            color: var(--neon-green);
            font-weight: 800;
            background: rgba(0, 245, 212, 0.1);
            padding: 2px 10px;
            border-radius: 4px;
            border: 1px solid var(--neon-green);
            font-size: 1.6rem; /* Sedikit lebih kecil dari judul utama agar manis */
        }

        .header-text p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* --- LAYOUT UTAMA (GRID 3 KOLOM) --- */
        .main-content {
            display: grid;
            grid-template-columns: 350px 1fr 400px; /* Kiri(tetap) Tengah(fleksibel) Kanan(tetap) */
            gap: 20px;
            padding: 20px;
            height: calc(100vh - 80px); /* Tinggi layar dikurangi tinggi header */
        }

        /* --- STYLE UMUM KARTU/PANEL --- */
        .card {
            background: var(--card-dark);
            border-radius: 15px;
            padding: 20px;
            border: 1px solid rgba(255,255,255,0.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            height: 100%; /* Memenuhi tinggi grid */
            overflow: hidden; /* Mencegah konten tumpah */
        }

        .card-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--neon-green);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .card-header.red { color: var(--neon-red); } /* Khusus header merah */

        /* --- KOLOM KIRI: 10 TER-GASIK --- */
        /* --- UPDATE 2: PERBAIKAN FIT 10 NAMA --- */
        .gasik-list {
            list-style: none;
            overflow-y: auto; /* Bisa discroll jika tetap kepanjangan */
            flex-grow: 1; /* Mengisi sisa ruang di kartu */
            /* Sembunyikan scrollbar biar rapi */
            scrollbar-width: none; 
            -ms-overflow-style: none;
        }
        .gasik-list::-webkit-scrollbar { display: none; }

        .gasik-item {
            display: flex;
            align-items: center;
            /* PADDING DIRAPATKAN DARI 12px JADI 8px */
            padding: 8px 12px; 
            margin-bottom: 8px;
            background: rgba(255,255,255,0.03);
            border-radius: 10px;
            border-left: 3px solid var(--neon-green);
            transition: all 0.3s ease;
        }

        .gasik-item:hover {
             background: rgba(0, 245, 212, 0.1);
             transform: translateX(5px);
        }

        .rank-number {
            font-size: 1.1rem; /* Font nomor sedikit dikecilkan */
            font-weight: 700;
            color: var(--bg-dark);
            background: var(--neon-green);
            width: 28px; height: 28px;
            display: flex; align-items: center; justify-content: center;
            border-radius: 50%;
            margin-right: 12px;
        }

        .siswa-info { flex: 1; }

        .siswa-nama {
            font-weight: 600;
            font-size: 0.95rem; /* FONT NAMA DIKECILKAN SEDIKIT (Awalnya 1rem/1.1rem) */
            margin-bottom: 2px;
        }

        .siswa-kelas {
            font-size: 0.75rem; /* FONT KELAS DIKECILKAN */
            color: var(--text-secondary);
        }

        .jam-hadir {
            font-family: 'Courier New', monospace; /* Font seperti jam digital */
            font-weight: 700;
            color: var(--neon-green);
            font-size: 1rem; /* Font jam disesuaikan */
            background: rgba(0, 245, 212, 0.1);
            padding: 4px 8px;
            border-radius: 5px;
        }

        /* --- KOLOM TENGAH: STATISTIK & BARU MASUK --- */
        .middle-column {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* Area Lingkaran Statistik */
        .stats-overview {
            flex: 1; /* Mengambil porsi atas */
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: rgba(255,255,255,0.02);
            border-radius: 15px;
            padding: 20px;
            position: relative;
            overflow: hidden;
        }
        
        /* Efek cahaya di belakang statistik */
        .stats-overview::before {
            content: ''; position: absolute;
            top: -50%; left: -50%; width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(0,245,212,0.1) 0%, rgba(0,0,0,0) 70%);
            animation: rotate 20s linear infinite; /* Animasi berputar pelan */
            z-index: 0;
        }
        @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

        .stat-box { z-index: 1; text-align: center; }
        .stat-number {
            font-size: 2.5rem; font-weight: 700;
            display: block; margin-bottom: 5px;
        }
        .stat-label { font-size: 0.9rem; color: var(--text-secondary); letter-spacing: 1px; text-transform: uppercase; }

        /* Lingkaran Progress */
        .progress-circle-container {
            position: relative; width: 180px; height: 180px; z-index: 1;
        }
        .progress-circle-bg, .progress-circle-fg {
            fill: none; stroke-width: 12;
            transform: rotate(-90deg); transform-origin: 50% 50%; /* Mulai dari atas */
        }
        .progress-circle-bg { stroke: rgba(255,255,255,0.1); }
        .progress-circle-fg {
            stroke: var(--neon-green);
            stroke-dasharray: 440; /* Keliling lingkaran */
            stroke-dashoffset: 440; /* Mulai dari kosong (akan diubah via JS) */
            transition: stroke-dashoffset 1.5s ease-in-out;
            stroke-linecap: round; /* Ujung garis membulat */
        }
        .progress-text {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
        .progress-percent { font-size: 2.2rem; font-weight: 800; }
        .progress-label { font-size: 0.8rem; color: var(--text-secondary); }


        /* Area Baru Saja Masuk */
        .recent-activity {
            flex: 1.5; /* Mengambil porsi lebih besar di bawah */
            overflow-y: auto; /* Bisa discroll */
             /* Sembunyikan scrollbar */
            scrollbar-width: none; -ms-overflow-style: none;
        }
        .recent-activity::-webkit-scrollbar { display: none; }

        .recent-item {
            display: flex; align-items: center; justify-content: space-between;
            padding: 12px 15px;
            margin-bottom: 10px;
            background: rgba(0, 180, 216, 0.05); /* Biru transparan */
            border-radius: 10px;
            border-left: 3px solid var(--accent-blue);
            animation: slideIn 0.5s ease-out; /* Animasi masuk */
        }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .recent-info h4 { font-size: 1rem; font-weight: 600; margin-bottom: 3px; }
        .recent-info p { font-size: 0.8rem; color: var(--text-secondary); }
        .recent-time {
             font-family: 'Courier New', monospace; font-weight: 700; color: var(--accent-blue);
        }

        /* --- KOLOM KANAN: BELUM HADIR (MERAH) --- */
        .card.red-accent { border-color: rgba(255, 51, 102, 0.2); }
        
        /* Container untuk list yang bisa berjalan (marquee vertikal) */
        .marquee-container {
            flex-grow: 1;
            overflow: hidden; /* Sembunyikan yang di luar kotak */
            position: relative;
        }
        
        .not-present-list {
            list-style: none;
            /* Animasi berjalan ke atas */
            animation: scrollUp 60s linear infinite; /* 60 detik untuk satu putaran, sesuaikan kecepatannya */
        }
        
        /* Saat di-hover mouse, animasinya berhenti biar bisa dibaca */
        .marquee-container:hover .not-present-list {
            animation-play-state: paused;
        }

        @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); /* Berjalan sampai habis ke atas */ }
        }

        .not-present-item {
            display: flex; align-items: center; justify-content: space-between;
            padding: 10px 15px;
            margin-bottom: 8px;
            background: rgba(255, 51, 102, 0.05); /* Merah transparan */
            border-radius: 8px;
            border-right: 3px solid var(--neon-red);
        }
        .not-present-name { font-weight: 600; font-size: 0.95rem; }
        .not-present-status {
            font-size: 0.8rem; font-weight: 700; color: var(--neon-red);
            background: rgba(255, 51, 102, 0.1); padding: 2px 6px; border-radius: 4px;
        }
    </style>
</head>
<body>

    <header class="header">
        <div class="logo-area">
            <i class='bx bxs-school' style="font-size: 50px; color: var(--neon-green);"></i> <div class="header-text">
                <h1>MAN 1 PEJAGOAN <span class="highlight-brand">SI GANTENG</span></h1>
                <p>PUSAT MONITORING KEDISIPLINAN SISWA & GURU</p>
            </div>
        </div>
    </header>

    <main class="main-content">
        
        <div class="card">
            <div class="card-header">
                <i class='bx bxs-trophy'></i> 10 SISWA TER-GASIK HARI INI
            </div>
            <ul class="gasik-list" id="gasikList">
                <li style="text-align: center; color: var(--text-secondary); padding: 20px;">
                    <i class='bx bx-loader-alt bx-spin' style="font-size: 24px;"></i><br>Memuat data...
                 </li>
            </ul>
        </div>

        <div class="middle-column">
            <div class="card stats-overview">
                <div class="stat-box">
                    <span class="stat-number" style="color: var(--neon-green);" id="totalHadir">0</span>
                    <span class="stat-label">HADIR</span>
                </div>
                
                <div class="progress-circle-container">
                    <svg width="180" height="180">
                        <circle class="progress-circle-bg" cx="90" cy="90" r="70"></circle>
                        <circle class="progress-circle-fg" id="progressFg" cx="90" cy="90" r="70"></circle>
                    </svg>
                    <div class="progress-text">
                        <span class="progress-percent" id="persenHadir">0%</span>
                        <span class="progress-label">KEHADIRAN</span>
                    </div>
                </div>

                <div class="stat-box">
                    <span class="stat-number" style="color: var(--neon-red);" id="totalBelum">0</span>
                    <span class="stat-label">BELUM</span>
                </div>
            </div>

            <div class="card recent-activity">
                <div class="card-header" style="color: var(--accent-blue);">
                    <i class='bx bx-time-five'></i> BARU SAJA MASUK
                </div>
                <div id="recentList">
                    </div>
            </div>
        </div>

        <div class="card red-accent">
            <div class="card-header red">
                <i class='bx bxs-user-x'></i> BELUM HADIR (AUTO SCROLL)
            </div>
            <div class="marquee-container">
                <ul class="not-present-list" id="belumHadirList">
                   <li style="text-align: center; color: var(--neon-red); padding: 20px;">
                        Menunggu data total siswa...
                   </li>
                </ul>
            </div>
        </div>
    </main>


<script type="module">

    // --- IMPORT FUNGSI YANG DIBUTUHKAN DARI FIREBASE ---
    // Kita butuh 'collection' (mengakses folder data), 
    // 'query' & 'orderBy' & 'limit' (untuk menyaring 10 tergasik dan data hari ini),
    // 'onSnapshot' (ini kuncinya! agar data update REAL-TIME tanpa refresh page)
    import { collection, query, orderBy, limit, onSnapshot, where, Timestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
    
    // Import database 'db' yang sudah kita setting di file firebase_config.js
    import { db } from './js/firebase_config.js';

    // --- KONFIGURASI TANGGAL HARI INI (PENTING UNTUK FILTER) ---
    // Kita harus membuat batas waktu jam 00:00:00 hari ini sampai jam 23:59:59 hari ini
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0); // Set jam jadi 00:00:00
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999); // Set jam jadi 23:59:59

    // Ubah format tanggal Javascript menjadi format Timestamp Firebase agar bisa dibandingkan
    const startTimestamp = Timestamp.fromDate(todayStart);
    const endTimestamp = Timestamp.fromDate(todayEnd);


    // --- REFERENSI KE ELEMEN HTML (BIAR JS TAU MAU UPDATE YG MANA) ---
    const gasikListEl = document.getElementById('gasikList');
    const recentListEl = document.getElementById('recentList');
    const totalHadirEl = document.getElementById('totalHadir');
    const totalBelumEl = document.getElementById('totalBelum');
    const persenHadirEl = document.getElementById('persenHadir');
    const progressFgEl = document.getElementById('progressFg'); // Lingkaran hijau
    const belumHadirListEl = document.getElementById('belumHadirList');


    // --- VARIABEL GLOBAL UNTUK MENYIMPAN DATA ---
    let totalSiswaTerdaftar = 0; // Nanti harusnya diambil dari database jumlah total siswa
    let siswaHadirHariIni = []; // Menyimpan daftar siswa yang sudah absen hari ini


    // ==============================================================================
    // FUNGSI 1: MENGAMBIL TOTAL SISWA (SIMULASI DULU)
    // ==============================================================================
    // Idealnya, Anda punya koleksi terpisah di Firebase berisi daftar semua siswa.
    // Untuk sekarang, kita SIMULASIKAN dulu jumlahnya misal 1080 siswa + guru.
    // Nanti bisa diganti dengan query real ke collection 'users' kalau sudah siap.
    function fetchTotalRegisteredUsers() {
        // --- CARA SIMULASI (SEMENTARA) ---
        totalSiswaTerdaftar = 1110; // Angka dari foto Bapak (1099 + 10 + 1)
        updateStatistikUI(); // Update tampilan angka

        // --- CARA ASLI NANTI (JIKA DATA USER SUDAH LENGKAP DI FIREBASE) ---
        /*
        const qTotal = query(collection(db, "users")); // Asumsi nama koleksi user adalah 'users'
        onSnapshot(qTotal, (snapshot) => {
            totalSiswaTerdaftar = snapshot.size; // Menghitung jumlah dokumen
            console.log("Total Terdaftar Real-time:", totalSiswaTerdaftar);
            updateStatistikUI(); // Update tampilan setiap ada user baru daftar
            // Setelah dapat total, panggil fungsi untuk generate list merah
            generateBelumHadirList();
        });
        */
        // Untuk sekarang kita panggil manual setelah simulasi
        generateBelumHadirList();
    }


    // ==============================================================================
    // FUNGSI UTAMA: MENGAMBIL DATA ABSENSI HARI INI SECARA REAL-TIME
    // ==============================================================================
    function listenToTodaysAttendance() {
        // 1. BUAT QUERY (PERINTAH PENCARIAN)
        // "Cari di koleksi 'absensi', DIMANA 'waktu_absen' >= jam 00:00 hari ini DAN 'waktu_absen' <= jam 23:59 hari ini"
        // Hasilnya URUTKAN berdasarkan 'waktu_absen' dari yang paling kecil (asc/terpagi)
       // 1. BUAT QUERY (PERINTAH PENCARIAN)
    const q = query(
        collection(db, "absensi"),
        where("waktu_absen", ">=", startTimestamp), // <--- INI BIANG KEROKNYA
        where("waktu_absen", "<=", endTimestamp),   // <--- INI JUGA
        orderBy("waktu_absen", "asc")
    );
        // 2. PASANG PENDENGAR (onSnapshot)
        // Fungsi ini akan jalan PERTAMA KALI saat halaman dibuka,
        // DAN akan jalan LAGI otomatis setiap ada data baru masuk ke Firebase yang cocok dengan query di atas.
        onSnapshot(q, (snapshot) => {
            
            // Kosongkan array penampung data hari ini
            siswaHadirHariIni = [];

            // Loop semua dokumen yang didapat dari snapshot
            snapshot.forEach((doc) => {
                // Masukkan data dokumen + ID dokumennya ke array
                siswaHadirHariIni.push({ id: doc.id, ...doc.data() });
            });

            console.log("Data Absen Hari Ini (Real-time):", siswaHadirHariIni);

            // --- UPDATE SEMUA BAGIAN TAMPILAN ---
            updateStatistikUI();      // 1. Update angka lingkaran tengah
            updateGasikListUI();      // 2. Update list 10 tergasik (kiri)
            updateRecentListUI();     // 3. Update list baru masuk (tengah bawah)
            generateBelumHadirList(); // 4. Update list merah (kanan)
        }, (error) => {
            console.error("Error mengambil data real-time:", error);
             // Tampilkan pesan error di UI jika perlu
             gasikListEl.innerHTML = `<li style="color: var(--neon-red); padding: 20px;">Error: ${error.message}</li>`;
        });
    }


    // ==============================================================================
    // FUNGSI UPDATE UI BAGIAN 1: STATISTIK LINGKARAN
    // ==============================================================================
    function updateStatistikUI() {
        const jumlahHadir = siswaHadirHariIni.length;
        // Hitung yang belum: Total terdaftar dikurangi yang sudah hadir. Jangan sampai minus.
        const jumlahBelum = Math.max(0, totalSiswaTerdaftar - jumlahHadir);

        // 1. Update Angka Teks
        totalHadirEl.innerText = jumlahHadir;
        totalBelumEl.innerText = jumlahBelum;

        // 2. Hitung Persentase
        // Jika total 0, persen 0 untuk menghindari error pembagian dengan nol
        let persen = (totalSiswaTerdaftar > 0) ? (jumlahHadir / totalSiswaTerdaftar * 100) : 0;
        persen = persen.toFixed(1); // Ambil 1 angka di belakang koma (misal: 0.9 atau 12.5)
        persenHadirEl.innerText = persen + "%";

        // 3. Update Animasi Lingkaran Hijau
        // Keliling lingkaran penuh adalah 440 (dari CSS stroke-dasharray)
        // Rumus offset: Keliling - (Keliling * Persen / 100)
        // Contoh: 50% hadir -> 440 - (440 * 0.5) = 220. Garis akan terisi setengah.
        const offset = 440 - (440 * (persen / 100));
        progressFgEl.style.strokeDashoffset = offset;
    }


    // ==============================================================================
    // FUNGSI UPDATE UI BAGIAN 2: 10 TER-GASIK (KIRI)
    // ==============================================================================
    function updateGasikListUI() {
        // Ambil 10 data pertama saja dari array hari ini (karena sudah diurutkan 'asc' di query utama tadi)
        const top10Data = siswaHadirHariIni.slice(0, 10);

        // Siapkan wadah HTML kosong
        let listHTML = "";

        // Jika belum ada yang hadir
        if (top10Data.length === 0) {
            listHTML = `<li style="text-align: center; color: var(--text-secondary); padding: 20px;">Belum ada yang hadir hari ini.</li>`;
        } else {
            // Loop data top 10 untuk membuat elemen HTML
            top10Data.forEach((data, index) => {
                // Format Jam dari Timestamp Firebase
                const jamHadir = formatTimeFromTimestamp(data.waktu_absen);
                // Tentukan kelas CSS baris (genap/ganjil) untuk variasi warna (opsional, di CSS belum diatur spesifik)
                const rowClass = (index % 2 === 0) ? 'even' : 'odd';
                // Nomor urut (index mulai dari 0, jadi ditambah 1)
                const rank = index + 1;

                listHTML += `
                <li class="gasik-item ${rowClass}">
                    <div class="rank-number">${rank}</div>
                    <div class="siswa-info">
                        <div class="siswa-nama">${data.nama || 'Tanpa Nama'}</div>
                        <div class="siswa-kelas">${data.kelas || data.role || '-'}</div>
                    </div>
                    <div class="jam-hadir">${jamHadir}</div>
                </li>
                `;
            });
        }

        // Masukkan HTML yang sudah dirakit ke dalam elemen <ul>
        gasikListEl.innerHTML = listHTML;
    }


    // ==============================================================================
    // FUNGSI UPDATE UI BAGIAN 3: BARU SAJA MASUK (TENGAH BAWAH)
    // ==============================================================================
    function updateRecentListUI() {
        // Kita butuh data yang PALING BARU masuk.
        // Karena array 'siswaHadirHariIni' urut dari pagi (asc), maka data terbaru ada di BELAKANG array.
        // Kita copy arraynya dulu [...siswaHadirHariIni] biar array asli nggak kebalik.
        // Lalu di-reverse (balik urutan) dan diambil 5 teratas.
        const recentData = [...siswaHadirHariIni].reverse().slice(0, 5);

        let listHTML = "";
         if (recentData.length === 0) {
             listHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 15px;">Menunggu absensi masuk...</div>`;
         } else {
            recentData.forEach(data => {
                const jamHadir = formatTimeFromTimestamp(data.waktu_absen);
                listHTML += `
                <div class="recent-item">
                    <div class="recent-info">
                        <h4>${data.nama || 'Tanpa Nama'}</h4>
                        <p>${data.kelas || data.role || '-'}</p>
                    </div>
                    <div class="recent-time">${jamHadir}</div>
                </div>
                `;
            });
         }
        
        recentListEl.innerHTML = listHTML;
    }


    // ==============================================================================
    // FUNGSI UPDATE UI BAGIAN 4: LIST MERAH BELUM HADIR (KANAN)
    // ==============================================================================
    // CATATAN PENTING: Fungsi ini SANGAT KOMPLEKS jika ingin data real.
    // Logikanya: Ambil SEMUA data siswa dari koleksi 'users', lalu BANDINGKAN dengan 'siswaHadirHariIni'.
    // Siapa yang ada di 'users' tapi TIDAK ADA di 'siswaHadirHariIni', itulah yang masuk list merah.
    // KARENA KITA BELUM PUNYA DATA 'USERS' LENGKAP, KITA PAKAI DATA DUMMY (PALS U) DULU UNTUK DEMO VISUAL.
    function generateBelumHadirList() {
        
        // --- SIMULASI DATA DUMMY (HANYA UNTUK TAMPILAN AGAR TERLIHAT JALAN) ---
        // Nanti bagian ini DIHAPUS dan diganti logika perbandingan data real.
        let dummyListHTML = "";
        // Kita buat 50 nama palsu biar kelihatan banyak dan bisa discroll
        for (let i = 1; i <= 50; i++) {
            dummyListHTML += `
            <li class="not-present-item">
                <div class="not-present-name">Siswa Simulasi Absen Ke-${i}</div>
                <div class="not-present-status">XJ</div>
            </li>
            `;
        }
        // Tambahkan penanda di akhir
        dummyListHTML += `
             <li class="not-present-item" style="background: rgba(255,255,255,0.05); justify-content: center;">
                <span style="font-size:0.8rem; color: var(--text-secondary);">--- Akhir Daftar Simulasi ---</span>
            </li>
        `;

        // Masukkan ke elemen marquee
        belumHadirListEl.innerHTML = dummyListHTML;

        // --- LOGIKA ASLI (DISIMPAN DULU UNTUK NANTI) ---
        /*
        // 1. Ambil semua UID yang sudah hadir hari ini agar mudah dicek
        const uidHadirSet = new Set(siswaHadirHariIni.map(data => data.uid));

        // 2. Ambil semua data user (idealnya ini sudah di-fetch di awal dan disimpan di variabel global)
        // Anggaplah variabel 'allUsersArray' berisi semua data dari koleksi 'users'

        let belumHadirHTML = "";
        allUsersArray.forEach(user => {
            // Cek apakah UID user ini ADA di dalam set UID yang hadir
            if (!uidHadirSet.has(user.uid)) {
                // JIKA TIDAK ADA, berarti dia BELUM HADIR. Masukkan ke list.
                belumHadirHTML += `
                 <li class="not-present-item">
                    <div class="not-present-name">${user.nama}</div>
                    <div class="not-present-status">BLM</div>
                </li>
                `;
            }
        });
        belumHadirListEl.innerHTML = belumHadirHTML;
        */
    }


    // ==============================================================================
    // FUNGSI BANTUAN: FORMAT TIMESTAMP FIREBASE KE JAM (HH:MM:SS)
    // ==============================================================================
    function formatTimeFromTimestamp(timestamp) {
        if (!timestamp) return "--:--:--";
        // Ubah timestamp Firebase jadi objek Date Javascript normal
        const date = timestamp.toDate();
        // Ambil jam, menit, detik dan pastikan 2 digit (misal 8 jadi 08)
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }


    // ==============================================================================
    // EKSEKUSI UTAMA SAAT HALAMAN DIMUAT
    // ==============================================================================
    // Panggil fungsi-fungsi untuk memulai aplikasi
    fetchTotalRegisteredUsers(); // Ambil total siswa (simulasi)
    listenToTodaysAttendance();  // Mulai dengarkan data absensi real-time

</script>

</body>
</html>