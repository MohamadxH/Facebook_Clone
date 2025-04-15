// open menu function
let cardWrap = document.getElementById('cardWrap');

function openCard(){
    cardWrap.classList.toggle('open-menu');
}

// center navbar animation function
document.addEventListener("DOMContentLoaded", function () {
    const navIcons = document.querySelectorAll(".nav-center i");
    const navBar = document.querySelector(".nav-center");

    function updateActiveIcon(activeIcon) {
        // إزالة `active` من كل الأيقونات
        navIcons.forEach(icon => icon.classList.remove("active"));

        // إضافة `active` للأيقونة المضغوط عليها
        activeIcon.classList.add("active");

        // تحريك الخط السفلي ليكون أسفل العنصر المضغوط عليه
        const leftOffset = activeIcon.offsetLeft + (activeIcon.offsetWidth / 2) - 45;
        navBar.style.setProperty("--underline-position", `${leftOffset}px`);
    }

    // تحديد العنصر الأول كافتراضي عند تحميل الصفحة
    updateActiveIcon(navIcons[0]);

    // إضافة حدث النقر على كل الأيقونات
    navIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            updateActiveIcon(this);
        });
    });
});



