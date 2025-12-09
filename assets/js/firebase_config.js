// =============================================================
// KONFIGURASI FIREBASE (JANGAN DIUBAH KECUALI GANTI AKUN)
// =============================================================

const firebaseConfig = {
    apiKey: "AIzaSyBXWR-_aJyoMrUjTeNQYlcPD8p3eu58yOo",
    authDomain: "siganteng-absensi.firebaseapp.com",
    databaseURL: "https://siganteng-absensi-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "siganteng-absensi",
    storageBucket: "siganteng-absensi.firebasestorage.app",
    messagingSenderId: "917873420012",
    appId: "1:917873420012:web:0fe1a9eddc5f94959ba7c9",
    measurementId: "G-XK1HSVWWRN"
};

// Cek apakah Firebase sudah jalan? Kalau belum, nyalakan.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Export database biar bisa dipakai di file lain
const database = firebase.database();

console.log("🔥 Firebase SiGanteng Siap Meluncur!");