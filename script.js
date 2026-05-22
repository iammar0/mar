// خوارزمية تتبع الماوس المتقدمة (Spotlight Grid Effect)
const spotlight = document.getElementById('spotlight');

window.addEventListener('mousemove', (e) => {
    // تحديث مكان الإضاءة التفاعلية في الخلفية بناء على الماوس
    spotlight.style.setProperty('--x', `${e.clientX}px`);
    spotlight.style.setProperty('--y', `${e.clientY}px`);
});

// نظام ظهور بطاقات المشاريع تدريجياً وبنعومة تامة (Fade-in on Scroll)
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearanceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            appearanceObserver.unobserve(entry.target); // تشغيل الأنميشن مرة واحدة فقط للفخامة
        }
    });
}, observerOptions);

// تهيئة البطاقات بحالة مخفية أنيقة قبل التمرير إليها
document.querySelectorAll('.premium-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.98)';
    card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    appearanceObserver.observe(card);
});