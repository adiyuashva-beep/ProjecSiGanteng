
        function handleLogin(event) {
            // Mencegah HTML melakukan default (melompat sebelum dicek)
            event.preventDefault(); 
            
            // 1. Ambil data dari input field
            const user = document.getElementById('username').value.toLowerCase(); 
            const pass = document.getElementById('password').value;
            
            // 2. Logika Pengecekan Peran (Role Check)
            if (user === 'admin' && pass === 'admin123') {
                window.location.href = 'siganteng_apk.html'; // Admin Dashboard
                
            } else if (user === 'siswa' && pass === 'siswa123') {
                window.location.href = 'Dasbor.siswa.html'; // Siswa Dashboard
                
            } else if (user === 'wali' && pass === 'wali123') {
                window.location.href = 'Dasbor.wali.html'; // Wali Dashboard
                
            } else {
                // Jika salah semua
                alert('Username atau Password salah. Coba: admin/admin123, siswa/siswa123, atau wali/wali123');
            }
        }
