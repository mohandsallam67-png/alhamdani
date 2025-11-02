// about.js - العداد عند الظهور على الشاشة

// دالة العدادات الخاصة بصفحة about
function initializeCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const suffix = stat.textContent.includes('%') ? '%' : '';
        animateCounter(stat, 0, target, 1500, suffix);
    });
}

// دالة تحريك العداد
function animateCounter(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// مراقبة ظهور القسم على الشاشة
function setupCounterObserver() {
    const statsSection = document.querySelector('.stats-section');

    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeCounters();
                observer.unobserve(entry.target); // توقف المراقبة بعد التشغيل
            }
        });
    }, { threshold: 0.5 }); // عندما يكون 50% من القسم مرئي

    observer.observe(statsSection);
}

// تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    // بدء مراقبة ظهور قسم الإحصائيات
    setTimeout(() => {
        setupCounterObserver();
    }, 500);
});