window.onscroll = function() {
    var footer = document.getElementById('footer');
    // ตรวจสอบว่าเลื่อนถึงล่างสุดหรือไม่
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.bottom = '0'; // แสดง footer
    } else {
        footer.style.bottom = '-100%'; // ซ่อน footer
    }
};
