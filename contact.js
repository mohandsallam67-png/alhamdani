// عناصر DOM
const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close-btn');
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.form');
const translateBtn = document.querySelector('.translate-btn');
const translateOptions = document.querySelector('.translate-options');
const translateOptionItems = document.querySelectorAll('.translate-option');
const modernForm = document.getElementById('modernContactForm');
const categoryBtns = document.querySelectorAll('.category-btn');
const faqCategories = document.querySelectorAll('.faq-category');
const faqItems = document.querySelectorAll('.faq-item');
// ========== دوال التصميم الحديث ==========

// تأثيرات البطاقات التفاعلية
function initInteractiveCards() {
    const interactiveCards = document.querySelectorAll('.interactive-card');

    interactiveCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) { // فقط على الشاشات الكبيرة
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateY = (x - centerX) / 25;
                const rotateX = (centerY - y) / 25;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-10px)';
            } else {
                card.style.transform = 'translateY(-10px)';
            }
        });
    });
}

// نظام نموذج التواصل الحديث
function initModernForm() {
    if (!modernForm) return;

    const submitBtn = modernForm.querySelector('.modern-submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    modernForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // التحقق من الحقول
        const inputs = modernForm.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                showFieldError(input, 'هذا الحقل مطلوب');
            } else {
                clearFieldError(input);

                // تحقق إضافي للبريد الإلكتروني
                if (input.type === 'email' && input.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        isValid = false;
                        showFieldError(input, 'البريد الإلكتروني غير صحيح');
                    }
                }

                // تحقق إضافي للهاتف
                if (input.type === 'tel' && input.value.trim()) {
                    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                    if (!phoneRegex.test(input.value)) {
                        isValid = false;
                        showFieldError(input, 'رقم الهاتف غير صحيح');
                    }
                }
            }
        });

        if (!isValid) {
            showNotification('يرجى تصحيح الأخطاء في النموذج', 'error');
            return;
        }

        // عرض حالة التحميل
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        submitBtn.disabled = true;

        // محاكاة الإرسال
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            showNotification('تم إرسال رسالتك بنجاح! سنرد عليك خلال 24 ساعة.', 'success');
            modernForm.reset();

            // إعادة تعيين الأنماط
            inputs.forEach(input => {
                clearFieldError(input);
            });

        } catch (error) {
            showNotification('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.', 'error');
        } finally {
            btnText.style.display = 'block';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
        }
    });

    // تأثيرات الحقول التفاعلية
    modernForm.querySelectorAll('.form-field input, .form-field textarea, .form-field select').forEach(field => {
        field.addEventListener('focus', () => {
            field.parentElement.classList.add('focused');
        });

        field.addEventListener('blur', () => {
            if (!field.value) {
                field.parentElement.classList.remove('focused');
            }
        });

        // التحقق من الحقول المملوءة مسبقاً
        if (field.value) {
            field.parentElement.classList.add('focused');
        }
    });
}

// إظهار خطأ في الحقل
function showFieldError(field, message) {
    const formField = field.parentElement;
    let errorElement = formField.querySelector('.field-error');

    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        formField.appendChild(errorElement);
    }

    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '5px';

    field.style.borderBottomColor = '#e74c3c';
}

// مسح خطأ الحقل
function clearFieldError(field) {
    const formField = field.parentElement;
    const errorElement = formField.querySelector('.field-error');

    if (errorElement) {
        errorElement.remove();
    }

    field.style.borderBottomColor = '#cbd5e1';
}

// نظام الأسئلة الشائعة المطور
function initAdvancedFAQ() {
    // تفعيل أزرار التصنيفات
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // تحديث الأزرار النشطة
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // إظهار المحتوى المناسب
            faqCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.id === category) {
                    cat.classList.add('active');
                }
            });
        });
    });

    // تفعيل الأسئلة الفردية
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // إغلاق جميع الأسئلة الأخرى في نفس الفئة
            item.parentElement.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // فتح/إغلاق السؤال الحالي
            item.classList.toggle('active');
        });
    });
}


// تأثيرات الظهور عند التمرير
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // تأثيرات إضافية للبطاقات
                if (entry.target.classList.contains('interactive-card')) {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease';
                }
            }
        });
    }, observerOptions);

    // مراقبة العناصر لإضافة تأثيرات الظهور
    const animatedElements = document.querySelectorAll('.interactive-card, .partner-card, .faq-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// تأثيرات التمرير للهيدر
function initHeaderEffects() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        if (scrolled > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.boxShadow = 'var(--shadow)';
            header.style.backdropFilter = 'none';
        }
    });
}

// تهيئة جميع المكونات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initInteractiveCards();
    initModernForm();
    initAdvancedFAQ();
    initScrollAnimations();
    initHeaderEffects();

    // منع إرسال النماذج (لأغراض العرض فقط)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            // النماذج يتم التعامل معها في دوالها الخاصة
            // هذا فقط للصفحات الأخرى إذا وجدت
        });
    });

    // تأثيرات إضافية للهيرو
    const heroSection = document.querySelector('.modern-hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.modern-hero');

            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
});

// تأثيرات إضافية للزر CTA في البطاقات
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// تأثيرات للشعارات الاجتماعية
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) rotate(5deg) scale(1.1)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotate(0) scale(1)';
    });
});

// تحسين تجربة المستخدم على الأجهزة المحمولة
function initMobileOptimizations() {
    // منع تأثيرات البطاقات التفاعلية على الأجهزة المحمولة
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.interactive-card').forEach(card => {
            card.style.transform = 'none';
        });
    }

    // إضافة حدث resize للتكيف مع تغيير حجم الشاشة
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.interactive-card').forEach(card => {
                card.style.transform = 'none';
            });
        }
    });
}

// تفعيل تحسينات الجوال
initMobileOptimizations();