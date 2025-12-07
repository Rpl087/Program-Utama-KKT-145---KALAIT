document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. HEADER HIDE/SHOW ON SCROLL
       ========================================= */
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    if (header) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Mencegah nilai negatif (scroll bounce pada iOS/Mobile)
            if (scrollTop < 0) scrollTop = 0;

            // Logika: Jika scroll ke bawah > 100px, sembunyikan header
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }

            lastScrollTop = scrollTop;
        });
    }

    /* =========================================
       2. TOMBOL BACK TO TOP
       ========================================= */
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        // A. Tampilkan tombol saat scroll > 300px
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        // B. Klik untuk scroll ke atas (Smooth)
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* =========================================
       3. LOGIKA MODAL POP-UP
       ========================================= */
    
    /**
     * Fungsi reusable untuk mengaktifkan modal
     * @param {string} triggerId - ID elemen yang diklik untuk membuka modal
     * @param {string} modalId - ID container modal
     */
    function initModal(triggerId, modalId) {
        const trigger = document.getElementById(triggerId);
        const modal = document.getElementById(modalId);

        // Pastikan elemen trigger dan modal ada sebelum menjalankan logika
        if (!trigger || !modal) return;

        // Cari tombol close (X) di DALAM modal ini saja
        const closeBtn = modal.querySelector('.custom-close-btn');

        // Fungsi Menutup Modal
        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = ""; // Kembalikan scroll body
        };

        // 1. Buka Modal
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah loncat ke atas jika trigger adalah link #
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Matikan scroll body saat modal aktif
        });

        // 2. Tutup via Tombol X
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // 3. Tutup via Klik Area Gelap (Overlay)
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // --- Inisialisasi Modal ---
    
    // A. Modal Total Penduduk
    initModal('cardTrigger', 'infoModal');

    // B. Modal Laki-laki
    initModal('maleTrigger', 'maleModal');

    // C. Modal Perempuan
    initModal('femaleTrigger', 'femaleModal');

});