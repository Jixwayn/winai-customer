// ตัวแปรเก็บคะแนนดาว
const ratings = {};

// ฟังก์ชันสำหรับจัดการการกดดาว
document.querySelectorAll('.stars').forEach((starContainer, index) => {
    const ratingKey = `rating-${index}`; // สร้างคีย์สำหรับเก็บคะแนนแต่ละหมวด

    starContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('star')) {
            const stars = Array.from(starContainer.children);
            stars.forEach(star => star.classList.remove('selected'));

            // ไฮไลต์ดาวที่กดและดาวทั้งหมดก่อนหน้า
            const selectedIndex = stars.indexOf(e.target);
            for (let i = 0; i <= selectedIndex; i++) {
                stars[i].classList.add('selected');
            }

            // เก็บค่าคะแนนดาวที่เลือกลงในตัวแปร
            ratings[ratingKey] = selectedIndex + 1; // บันทึกคะแนน (เริ่มจาก 1)
            console.log(`Updated ${ratingKey}: ${ratings[ratingKey]}`);
        }
    });
});

// เมื่อกดปุ่มยืนยัน
document.querySelector('.submit-button').addEventListener('click', function () {
    // รวมค่าคะแนนดาวและรีวิว
    const reviewText = document.getElementById('review').value;
    console.log('Ratings:', ratings);
    console.log('Review:', reviewText);

    // ตัวอย่างการแสดงผลรวม หรือส่งไปยัง Backend
    alert(`คุณได้ให้คะแนนดังนี้:\n${JSON.stringify(ratings, null, 2)}\n\nรีวิว: ${reviewText}`);
});
