                // global-header-footer.js - ملف مشترك لكل الصفحات
const grants = [
    {
        id: 1,
        name: "Hebei Academy of fine Arts",
        nameEn: "Hebei Academy of fine Arts",
        image: "../images/grants-Uni-Image/Hebei Academy of fine Arts.webp",
        description: "وجهتك المثالية إذا كنت تحلم بتحويل شغفك الفني إلى مستقبل عالمي...",
        descriptionEn: "Your ideal destination if you dream of turning your artistic passion into a global future...",
        details: "منذ تأسيسها عام 2002، أصبحت Hebei Academy of fine Arts واحدة من أهم الجامعات الفنية المستقلة في الصين...",
        detailsEn: "Since its establishment in 2002, Hebei Academy of Fine Arts has become one of the most important independent art universities in China, with more than 11 colleges specializing in painting, sculpture, calligraphy, fashion design, industrial design, digital media and animation."
    },
    {
        id: 2,
        name: "Xuzhou University of technology",
        nameEn: "Xuzhou University of technology",
        image: "../images/grants-Uni-Image/Xuzhou_University.jpg",
        description: "إكتشف عالم الابتكار والمعرفة في جامعة شوزهو للتكنولوجيا!...",
        descriptionEn: "Discover the world of innovation and knowledge at Xuzhou University of Technology!...",
        details: "تأسست جامعة شوزهو للتكنولوجيا عام 1958 وتعتبر من أبرز الجامعات التكنولوجية في الصين...",
        detailsEn: "Xuzhou University of Technology was established in 1958 and is considered one of the most prominent technological universities in China. The university includes more than 20,000 students and offers diverse study programs in the fields of engineering, technology and arts."
    },
    {
        id: 3,
        name: "Yan'an University",
        nameEn: "Yan'an University",
        image: "../images/grants-Uni-Image/Yan'an_University_(YAU).jpeg",
        description: "جامعة يانآن… خيار مثالي لكل طالب يبحث عن تعليم عالي الجودة...",
        descriptionEn: "Yan'an University an ideal choice for every student seeking high-quality education...",
        details: "تعد جامعة يانآن (Yan'an University) واحدة من الجامعات المتميزة في شمال الصين...",
        detailsEn: "Yan'an University (YAU) is one of the distinguished universities in northern China, offering its students an integrated educational experience that combines academic excellence and a vibrant campus environment."
    }
];


// ========== الهيدر الكامل مع النظام المزدوج ==========
function generateHeaderHTML(isLoggedIn = false, userData = null) {
    return `
    <header>
        <div class="logo"><a href="../index/index.html"><img src="../images/logo/logo.png" alt="الهمداني"></a></div>
        <nav>
            <ul>
                <li><a href="index.html" data-key="home">الرئيسية</a></li>
                <li><a href="gra.html" data-key="grants">المنح الدراسية</a></li>
                <li><a href="about.html" data-key="about">من نحن؟</a></li>
                <li><a href="contact.html" data-key="contact">تواصل معنا</a></li>
            </ul>
        </nav>
        <div class="header-actions">
            <div class="search-box">
                <input type="text" placeholder="ابحث هنا" data-key="searchPlaceholder">
            </div>
            <div class="translate-dropdown">
                <button class="translate-btn">🌐</button>
                <div class="translate-options">
                    <div class="translate-option" data-lang="ar">العربية</div>
                    <div class="translate-option" data-lang="en">English</div>
                </div>
            </div>
            <!-- عنصر مترجم جوجل المخفي -->
              <div id="google_translate_element" style="display: none;"></div>

                ${isLoggedIn ? generateDashboardHTML(userData) : generateLoginButtonHTML()}
            
            <!-- نافذة تسجيل الدخول -->
            <div class="login-modal" id="loginModal">
                <div class="modal-head">
                    <h2 data-key="login">تسجيل الدخول</h2>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="tabs">
                    <div class="tab active" data-tab="login" data-key="tab_login">تسجيل الدخول</div>
                    <div class="tab" data-tab="signup" data-key="tab_singup">إنشاء حساب</div>
                </div>
                <div class="tab-content">
                    <div class="form active" id="loginForm">
                        <div class="form-group">
                            <label for="loginEmail" data-key="email">البريد الإلكتروني</label>
                            <input type="email" id="loginEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword" data-key="password">كلمة المرور</label>
                            <input type="password" id="loginPassword" required>
                        </div>
                        <button class="submit-btn" id="loginSubmitBtn" data-key="login">تسجيل الدخول</button>
                        <div class="form-footer">
                            <a href="#" id="forgotPassword" data-key="forgotPassword">هل نسيت كلمة المرور؟</a>
                        </div>
                        <div class="social-login">
                            <div class="google-btn">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=" alt="Google">
                                <span data-key="loginWithGoogle">تسجيل الدخول بإستخدام جوجل</span>
                            </div>
                        </div>
                    </div>

                    <div class="form" id="signupForm">
                        <div class="form-group">
                            <label for="signupUsername" data-key="username">اسم المستخدم</label>
                            <input type="text" id="signupUsername" required>
                        </div>
                        <div class="form-group">
                            <label for="signupEmail" data-key="email">البريد الإلكتروني</label>
                            <input type="email" id="signupEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="signupPassword" data-key="password">كلمة المرور</label>
                            <input type="password" id="signupPassword" required>
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword" data-key="confirmPassword">تأكيد كلمة المرور</label>
                            <input type="password" id="confirmPassword" required>
                        </div>
                        <button class="submit-btn" data-key="createAccount">إنشاء حساب</button>
                    </div>

                    <div class="form" id="forgotPasswordForm">
                        <div class="form-group">
                            <label for="forgotEmail" data-key="email">البريد الإلكتروني</label>
                            <input type="email" id="forgotEmail" required>
                        </div>
                        <button class="submit-btn" data-key="resetPassword">إعادة تعيين كلمة المرور</button>
                        <div class="form-footer">
                            <a href="#" id="backToLogin" data-key="back_to_login">العودة لتسجيل الدخول</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `;
}

// ========== نظام الترجمة باستخدام مترجم جوجل المدمج ==========
class GooglePageTranslator {
    constructor() {
        this.currentLang = localStorage.getItem('currentLang') || 'ar';
        this.googleTranslateElement = null;
        this.isInitialized = false;
    }

    // تهيئة مترجم جوجل
    initGoogleTranslate() {
        if (this.isInitialized) return;

        // إنشاء عنصر مترجم جوجل
        const translateScript = document.createElement('script');
        translateScript.type = 'text/javascript';
        translateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(translateScript);

        // تعريف دالة التهيئة
        window.googleTranslateElementInit = () => {
            this.googleTranslateElement = new google.translate.TranslateElement({
                pageLanguage: 'ar',
                includedLanguages: 'ar,en',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true
            }, 'google_translate_element');

            this.isInitialized = true;
            console.log('✅ مترجم جوجل جاهز للاستخدام');
        };
    }

    // تبديل اللغة
    toggleLanguage(targetLang) {
        if (!this.isInitialized) {
            this.initGoogleTranslate();
            setTimeout(() => this.toggleLanguage(targetLang), 1000);
            return;
        }

        const googleSelect = document.querySelector('.goog-te-combo');
        if (googleSelect) {
            googleSelect.value = targetLang;
            googleSelect.dispatchEvent(new Event('change'));

            this.currentLang = targetLang;
            localStorage.setItem('currentLang', targetLang);
            this.updatePageDirection(targetLang);
            this.updateLanguageUI(targetLang);

            console.log(`✅ تم التبديل إلى: ${targetLang}`);
        } else {
            console.log('❌ عنصر مترجم جوجل غير موجود');
            this.fallbackTranslate(targetLang);
        }
    }

    // ترجمة احتياطية بسيطة
    fallbackTranslate(targetLang) {
        const simpleTranslations = {
            ar: {
                'Home': 'الرئيسية',
                'Study Grants': 'المنح الدراسية',
                'About Us': 'من نحن',
                'Contact Us': 'تواصل معنا',
                'Login': 'تسجيل الدخول',
                'Search here': 'ابحث هنا',
                'Quick Links': 'روابط سريعة'
            },
            en: {
                'الرئيسية': 'Home',
                'المنح الدراسية': 'Study Grants',
                'من نحن': 'About Us',
                'تواصل معنا': 'Contact Us',
                'تسجيل الدخول': 'Login',
                'ابحث هنا': 'Search here',
                'روابط سريعة': 'Quick Links'
            }
        };

        const translations = simpleTranslations[targetLang];
        document.querySelectorAll('a, span, button, h1, h2, h3, h4, h5, h6, p, label').forEach(element => {
            const text = element.textContent.trim();
            if (translations[text]) {
                element.textContent = translations[text];
            }
        });

        this.currentLang = targetLang;
        localStorage.setItem('currentLang', targetLang);
        this.updatePageDirection(targetLang);
    }

    // تحديث اتجاه الصفحة
    updatePageDirection(lang) {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }

    // تحديث واجهة اللغة
    updateLanguageUI(lang) {
        const translateBtn = document.querySelector('.translate-btn');
        if (translateBtn) {
            translateBtn.textContent = lang === 'ar' ? '🌐 English' : '🌐 العربية';
        }

        document.querySelectorAll('.translate-option').forEach(option => {
            option.classList.toggle('active', option.getAttribute('data-lang') === lang);
        });
    }

    // إخفاء شريط مترجم جوجل
    hideGoogleToolbar() {
        const style = document.createElement('style');
        style.innerHTML = `
            .goog-te-banner-frame { display: none !important; }
            .goog-te-menu-value { display: none !important; }
            .goog-te-gadget { display: none !important; }
            .goog-te-combo { margin: 5px !important; }
            #google_translate_element { display: none; }
            .skiptranslate { display: none !important; }
            body { top: 0px !important; }
        `;
        document.head.appendChild(style);
    }
}

// إنشاء المترجم
const pageTranslator = new GooglePageTranslator();

// توليد زر الدخول للزوار
function generateLoginButtonHTML() {
    return `<button class="login-btn" data-key="login">تسجيل الدخول</button>`;
}

// توليد Dashboard للمستخدمين المسجلين
function generateDashboardHTML(userData) {
    return `
    <div class="user-dashboard">
        <div class="user-menu-toggle">
            <img src="${userData.avatar || '../images/default-avatar.png'}" alt="صورة المستخدم" class="user-avatar">
            <span class="user-name">${userData.name}</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="user-dropdown">
            <div class="dropdown-header">
                <img src="${userData.avatar || '../images/default-avatar.png'}" alt="صورة المستخدم" class="dropdown-avatar">
                <div class="user-info">
                    <span class="user-name">${userData.name}</span>
                    <span class="user-email">${userData.email}</span>
                </div>
            </div>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item" id="myRequestsBtn">
                    <i class="fas fa-file-alt"></i>
                    <span data-key="myRequests">طلباتي</span>
                </a>
                <a href="#" class="dropdown-item" id="logoutBtn">
                    <i class="fas fa-sign-out-alt"></i>
                    <span data-key="logout">تسجيل الخروج</span>
                </a>
            </div>
        </div>
    </div>
    `;
}

// ========== الفوتر الكامل ==========
const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3 data-key="about">من نحن</h3>
                <p data-key="footerAbout">وكالة الهمداني للدراسة في الخارج - نقدم خدمات استشارية متكاملة للطلاب الراغبين في استكمال دراستهم بالخارج</p>
            </div>
            <div class="footer-section">
                <h3 data-key="contact">تواصل معنا</h3>
                <p>📞 +967 738 198 397</p>
                <p>📧 mohandsallam67@gmail.com</p>
            </div>
            <div class="footer-section">
                <h3 data-key="quickLinks">روابط سريعة</h3>
                <p><a href="../index/index.html" data-key="home">الرئيسية</a></p>
                <p><a href="../grants/gra.html" data-key="grants">المنح الدراسية</a></p>
                <p><a href="../about/about.html" data-key="about">من نحن</a></p>
                <p><a href="../contact/contact.html" data-key="contact">تواصل معنا</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <p data-key="footer_rights">&copy; 2025 وكالة الهمداني. جميع الحقوق محفوظة. تم إنشاء الموقع بواسطة المهندس/ مهند سلام</p>
        </div>
    </footer>
`;

// ========== الدوال الرئيسية ==========
function loadHeaderAndFooter() {
    // التحقق من حالة تسجيل الدخول
    checkLoginStatus()
        .then(userData => {
            // تحميل الهيدر
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = generateHeaderHTML(!!userData, userData);
            }

            // تحميل الفوتر
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = footerHTML;
            }

            // تهيئة الأحداث بعد التحميل
            setTimeout(() => {
                initializeHeaderFooterEvents(!!userData);
                setActivePage();
            }, 100);
        })
        .catch(error => {
            console.error('Error checking login status:', error);
            // في حالة الخطأ، نعرض الهيدر الأساسي
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = generateHeaderHTML(false);
            }
            
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.innerHTML = footerHTML;
            }
            
            setTimeout(() => {
                initializeHeaderFooterEvents(false);
                setActivePage();
            }, 100);
        });
}

// التحقق من حالة تسجيل الدخول
async function checkLoginStatus() {
    try {
        const response = await fetch('../php/session.php');
        const data = await response.json();
        return data.loggedIn ? data.user : null;
    } catch (error) {
        console.error('Error checking login status:', error);
        return null;
    }
}

function initializeHeaderFooterEvents(isLoggedIn) {
    setupTranslation();
    if (!isLoggedIn) {
        setupLoginModal();
    } else {
        setupDashboardEvents();
    }
    loadUserState();
    
    // تحميل اللغة المحفوظة
    const savedLang = localStorage.getItem('currentLang') || 'ar';
    changeLanguage(savedLang);
}

// إعداد أحداث Dashboard
function setupDashboardEvents() {
    const userToggle = document.querySelector('.user-menu-toggle');
    const userDropdown = document.querySelector('.user-dropdown');
    const logoutBtn = document.getElementById('logoutBtn');
    const myRequestsBtn = document.getElementById('myRequestsBtn');

    if (userToggle && userDropdown) {
        userToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logoutUser();
        });
    }

    if (myRequestsBtn) {
        myRequestsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            userDropdown.classList.remove('show'); // إغلاق القائمة
            showMyRequests(); // ✅ فتح نافذة الطلبات
        });
    }

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', () => {
        if (userDropdown) userDropdown.classList.remove('show');
    });
}


// تسجيل الخروج
async function logoutUser() {
    try {
        const response = await fetch('../php/logout.php');
        const data = await response.json();
        
        if (data.success) {
            localStorage.removeItem('currentUser');
            window.location.reload();
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }
}

// دالة عرض نافذة طلباتي
async function showMyRequests() {
    try {
        console.log('📋 جاري تحميل الطلبات...');

        const response = await fetch('../php/applications.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'get_my_applications' })
        });

        const result = await response.json();

        if (result.success) {
            createRequestsModal(result.applications);
        } else {
            console.error('❌ خطأ في جلب الطلبات:', result.message);
            createRequestsModal([]);
        }
    } catch (error) {
        console.error('❌ خطأ في الاتصال:', error);
        createRequestsModal([]);
    }
}
// جمع بيانات الطلب من النماذج
function getApplicationData() {
    const avatar = document.getElementById('photoPreview')?.src || '../images/default-avatar.png';
    const firstName = document.getElementById('firstName')?.value || '';
    const middleName = document.getElementById('middleName')?.value || '';
    const lastName = document.getElementById('lastName')?.value || '';
    const specialization = document.getElementById('specialization')?.value || 'لم يتم التحديد';
    const academicDegree = document.getElementById('academicDegree')?.value || 'لم يتم التحديد';

    const fullName = `${firstName} ${middleName} ${lastName}`.trim();

    return {
        avatar: avatar,
        fullName: fullName || 'لم يتم التعيين',
        specialization: specialization,
        degree: academicDegree,
        status: 'قيد المراجعة', // الحالة الافتراضية
        date: new Date().toLocaleDateString('ar-SA')
    };
}
// إنشاء نافذة الطلبات
function createRequestsModal(applications) {
    // إزالة النافذة السابقة إذا كانت موجودة
    const existingModal = document.getElementById('requestsModal');
    if (existingModal) existingModal.remove();

    const hasApplications = applications && applications.length > 0;

    const modalHTML = `
    <div class="requests-modal-overlay" id="requestsModal">
        <div class="requests-modal">
            <div class="requests-header">
                <h2>
                    <i class="fas fa-file-alt"></i>
                    طلباتي المقدمة
                </h2>
                <button class="requests-close" onclick="closeRequestsModal()">
                    &times;
                </button>
            </div>
            <div class="requests-content">
                ${hasApplications ? createRequestsTable(applications) : createNoRequestsMessage()}
            </div>
            <div class="requests-footer">
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // عرض النافذة مع تأثير
    setTimeout(() => {
        const modal = document.getElementById('requestsModal');
        if (modal) modal.style.display = 'flex';
    }, 100);
}
// إنشاء جدول الطلبات
function createRequestsTable(applications) {
    // حساب الإحصائيات
    const stats = {
        total: applications.length,
        pending: applications.filter(app => app.status === 'قيد المراجعة').length,
        approved: applications.filter(app => app.status === 'مقبول').length,
        rejected: applications.filter(app => app.status === 'مرفوض').length
    };

    return `
    <div class="requests-table-container">
        <!-- إضافة الإحصائيات المحسنة -->
        <div class="requests-stats">
            <div class="stat-card">
                <div class="stat-number">${stats.total}</div>
                <div class="stat-label">إجمالي الطلبات</div>
            </div>
            <div class="stat-card pending">
                <div class="stat-number">${stats.pending}</div>
                <div class="stat-label">قيد المراجعة</div>
            </div>
            <div class="stat-card approved">
                <div class="stat-number">${stats.approved}</div>
                <div class="stat-label">مقبول</div>
            </div>
            <div class="stat-card rejected">
                <div class="stat-number">${stats.rejected}</div>
                <div class="stat-label">مرفوض</div>
            </div>
        </div>

        <table class="requests-table">
            <thead>
                <tr>
                    <th>الصورة</th>
                    <th>المعلومات الشخصية</th>
                    <th>التخصص</th>
                    <th>الدرجة</th>
                    <th>تاريخ التقديم</th>
                    <th>الحالة</th>
                </tr>
            </thead>
            <tbody>
                ${applications.map((app, index) => `
                <tr class="request-row" data-application-id="${app.id}">
                    <td>
                        <div class="request-avatar-container">
                            <img src="${app.photo_path || '../images/default-avatar.png'}" 
                                 alt="صورة الطالب" 
                                 class="request-avatar"
                                 onerror="this.src='../images/default-avatar.png'">
                        </div>
                    </td>
                    <td>
                        <div class="student-info">
                            <div class="student-name">${app.first_name} ${app.middle_name || ''} ${app.last_name}</div>
                            <div class="student-email">${app.email}</div>
                            <div class="student-program">البرنامج: ${app.program_id}</div>
                        </div>
                    </td>
                    <td>
                        <div class="program-info">
                            <div class="program-name">${app.specialization || 'غير محدد'}</div>
                        </div>
                    </td>
                    <td>
                        <div class="program-info">
                            <span class="program-degree">${app.academic_degree || 'غير محدد'}</span>
                        </div>
                    </td>
                    <td>
                        <div class="request-date">
                            ${new Date(app.submitted_at).toLocaleDateString('ar-SA')}
                            <div class="request-time">
                                ${new Date(app.submitted_at).toLocaleTimeString('ar-SA')}
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="status-badge status-${getStatusClass(app.status)}">
                            ${app.status || 'قيد المراجعة'}
                        </span>
                    </td>
                </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
    `;
}
// رسالة عدم وجود طلبات
function createNoRequestsMessage() {
    return `
    <div class="no-requests">
        <i class="fas fa-file-invoice" style="font-size: 4rem; color: #ddd; margin-bottom: 20px;"></i>
        <h3 style="color: #666; margin-bottom: 10px;">لا توجد طلبات مقدمة حالياً</h3>
        <p style="color: #999; margin-bottom: 25px;">قم بتقديم طلبك الأول لرؤيته هنا</p>
        <button class="apply-now-btn" onclick="closeRequestsModalAndOpenGrants()">
            <i class="fas fa-paper-plane"></i>
            تقديم طلب جديد
        </button>
    </div>
    `;
}
// إغلاق نافذة الطلبات والذهاب لصفحة المنح
function closeRequestsModalAndOpenGrants() {
    closeRequestsModal();
    setTimeout(() => {
        window.location.href = '../grants/grants.html';
    }, 300);
}
// إغلاق نافذة الطلبات
function closeRequestsModal() {
    const modal = document.getElementById('requestsModal');
    if (modal) {
        modal.style.display = 'none';
        setTimeout(() => modal.remove(), 300);
    }
}
// الحصول على بريد المستخدم الحالي
function getCurrentUserEmail() {
    // هذه دالة افتراضية - يمكنك استبدالها بالبيانات الفعلية
    return 'mohanadsallam@gmail.com';
}

function setupLoginModal() {
    const loginBtn = document.querySelector('.login-btn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');
    const tabs = document.querySelectorAll('.tab');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');

    if (loginBtn && modal) {
        loginBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.style.display = 'block';
            // إزالة النماذج القديمة إذا كانت موجودة
            removeOldResetForms();
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                resetAllForms();
            });
        }

        document.addEventListener('click', (e) => {
            if (modal && !modal.contains(e.target) && e.target !== loginBtn) {
                modal.style.display = 'none';
                resetAllForms();
            }
        });

        if (modal) {
            modal.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // التبويبات
        if (tabs) {
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabName = tab.getAttribute('data-tab');
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');

                    if (tabName === 'login') {
                        showForm('loginForm');
                        resetAllForms();
                    } else if (tabName === 'signup') {
                        showForm('signupForm');
                        resetAllForms();
                    }
                });
            });
        }

        // ✅ إصلاح: إزالة النموذج القديم وإضافة النظام الجديد
        const forgotPasswordLink = document.getElementById('forgotPassword');
        if (forgotPasswordLink) {
            forgotPasswordLink.addEventListener('click', (e) => {
                e.preventDefault();
                // إخفاء التبويبات
                document.querySelectorAll('.tab').forEach(tab => {
                    tab.style.display = 'none';
                });
                // إخفاء النماذج العادية
                document.querySelectorAll('.form').forEach(form => {
                    form.classList.remove('active');
                });
                // إنشاء النظام الجديد
                createNewPasswordResetForm();
            });
        }

        if (backToLoginLink) {
            backToLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                showForm('loginForm');
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.getAttribute('data-tab') === 'login') {
                        tab.classList.add('active');
                    }
                });
                resetAllForms();
            });
        }

        // إضافة event listener لزر تسجيل الدخول
        if (loginSubmitBtn) {
            loginSubmitBtn.addEventListener('click', handleLogin);
        }

        // إضافة event listener لزر إنشاء الحساب
        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            const signupSubmitBtn = signupForm.querySelector('.submit-btn');
            if (signupSubmitBtn) {
                signupSubmitBtn.replaceWith(signupSubmitBtn.cloneNode(true));
                const newSignupBtn = signupForm.querySelector('.submit-btn');
                newSignupBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    handleSignup();
                });
            }
        }
    }
}
function removeOldResetForms() {
    const oldForm = document.getElementById('forgotPasswordForm');
    if (oldForm) oldForm.remove();

    const oldResetForm = document.getElementById('passwordResetForm');
    if (oldResetForm) oldResetForm.remove();
}
// دالة إعادة تعيين جميع النماذج
function resetAllForms() {
    showForm('loginForm');
    document.querySelectorAll('.password-reset-form').forEach(form => {
        form.classList.remove('active');
    });

    // إعادة إظهار التبويبات
    document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'flex';
    });
}
// معالجة تسجيل الدخول
async function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');

    // مسح الرسائل السابقة
    clearLoginErrors();

    let hasErrors = false;

    // التحقق من البريد الإلكتروني
    if (!email) {
        showFieldError('loginEmail', 'البريد الإلكتروني مطلوب');
        hasErrors = true;
    } else if (!validateEmail(email)) {
        showFieldError('loginEmail', 'البريد الإلكتروني غير صحيح');
        hasErrors = true;
    }

    // التحقق من كلمة المرور
    if (!password) {
        showFieldError('loginPassword', 'كلمة المرور مطلوبة');
        hasErrors = true;
    }

    if (hasErrors) return;

    // تعطيل الزر أثناء المعالجة
    loginSubmitBtn.disabled = true;
    loginSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التسجيل...';

    try {
        const response = await fetch('../php/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        });

        const data = await response.json();

        if (data.success) {
            // إغلاق نافذة التسجيل
            const modal = document.getElementById('loginModal');
            if (modal) modal.style.display = 'none';

            // إعادة تحميل الصفحة لتحديث الهيدر
            window.location.reload();
        } else {
            showFieldError('loginPassword', data.message || 'حدث خطأ أثناء تسجيل الدخول');
        }
    } catch (error) {
        console.error('Login error:', error);
        showFieldError('loginPassword', 'حدث خطأ في الاتصال بالخادم');
    } finally {
        // إعادة تمكين الزر
        loginSubmitBtn.disabled = false;
        loginSubmitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> تسجيل الدخول';
    }
}
// دالة إنشاء الحساب
async function handleSignup() {
    const name = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // مسح الرسائل السابقة
    clearSignupErrors();

    let hasErrors = false;

    // التحقق من الاسم
    if (!name) {
        showFieldError('signupUsername', 'اسم المستخدم مطلوب');
        hasErrors = true;
    }

    // التحقق من البريد الإلكتروني
    if (!email) {
        showFieldError('signupEmail', 'البريد الإلكتروني مطلوب');
        hasErrors = true;
    } else if (!validateEmail(email)) {
        showFieldError('signupEmail', 'البريد الإلكتروني غير صحيح');
        hasErrors = true;
    }

    // التحقق من كلمة المرور
    if (!password) {
        showFieldError('signupPassword', 'كلمة المرور مطلوبة');
        hasErrors = true;
    } else if (password.length < 6) {
        showFieldError('signupPassword', 'كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        hasErrors = true;
    }

    // التحقق من تأكيد كلمة المرور
    if (!confirmPassword) {
        showFieldError('confirmPassword', 'تأكيد كلمة المرور مطلوب');
        hasErrors = true;
    } else if (password !== confirmPassword) {
        showFieldError('confirmPassword', 'كلمات المرور غير متطابقة');
        hasErrors = true;
    }

    if (hasErrors) return;

    // تعطيل الزر أثناء المعالجة
    const signupSubmitBtn = document.querySelector('#signupForm .submit-btn');
    signupSubmitBtn.disabled = true;
    signupSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري إنشاء الحساب...';

    try {
        const response = await fetch('../php/signup.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&confirmPassword=${encodeURIComponent(confirmPassword)}`
        });

        const data = await response.json();

        if (data.success) {
            showCustomAlert('✅ تم إنشاء الحساب بنجاح', 'success', 3000);

            setTimeout(() => {
                const modal = document.getElementById('loginModal');
                if (modal) modal.style.display = 'none';
                window.location.reload();
            }, 1500);

        } else {
            // عرض الخطأ في الحقل المناسب
            if (data.message.includes('بريد')) {
                showFieldError('signupEmail', data.message);
            } else {
                showFieldError('signupPassword', data.message);
            }
        }
    } catch (error) {
        console.error('Signup error:', error);
        showFieldError('signupEmail', 'حدث خطأ في الاتصال بالخادم');
    } finally {
        signupSubmitBtn.disabled = false;
        signupSubmitBtn.innerHTML = '<i class="fas fa-user-plus"></i> إنشاء حساب';
    }
}
// دوال التحقق وعرض الأخطاء
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// عرض خطأ تحت حقل معين
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    // إضافة ستايل خطأ للحقل
    field.style.borderColor = '#e74c3c';
    field.style.backgroundColor = '#ffeaea';

    // إزالة أي رسالة خطأ سابقة
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }

    // إنشاء رسالة الخطأ
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = `
        color: #e74c3c;
        font-size: 12px;
        margin-top: 5px;
        padding: 4px 8px;
        background: #ffeaea;
        border-radius: 3px;
        border: 1px solid #e74c3c;
        animation: fadeIn 0.3s ease;
    `;
    errorDiv.textContent = message;

    // إدراج الرسالة بعد الحقل
    field.parentNode.appendChild(errorDiv);

    // إضافة مستمع لإزالة الخطأ عند الكتابة
    field.addEventListener('input', function clearErrorOnInput() {
        field.style.borderColor = '';
        field.style.backgroundColor = '';
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
        field.removeEventListener('input', clearErrorOnInput);
    });
}
// مسح أخطاء تسجيل الدخول
function clearLoginErrors() {
    const fields = ['loginEmail', 'loginPassword'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = '';
            field.style.backgroundColor = '';
            const error = field.parentNode.querySelector('.field-error');
            if (error) error.remove();
        }
    });
}
// مسح أخطاء إنشاء الحساب
function clearSignupErrors() {
    const fields = ['signupUsername', 'signupEmail', 'signupPassword', 'confirmPassword'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = '';
            field.style.backgroundColor = '';
            const error = field.parentNode.querySelector('.field-error');
            if (error) error.remove();
        }
    });
}

//////////////////////////////////////
/////////////////////////////////////

// ========== نظام استعادة كلمة المرور الجديد ==========

// ========== نظام استعادة كلمة المرور المصحح ==========

// دالة إنشاء نموذج استعادة كلمة المرور
function createNewPasswordResetForm() {
    console.log('🔄 إنشاء نظام استعادة كلمة المرور الجديد');

    // إزالة أي نماذج قديمة
    const oldForm = document.getElementById('passwordResetForm');
    if (oldForm) oldForm.remove();

    const resetFormHTML = `
    <div class="password-reset-form active" id="passwordResetForm">
        <!-- الخطوة 1: البريد الإلكتروني -->
        <div class="reset-step active" id="stepEmail">
            <div style="text-align: center; margin-bottom: 20px;">
                <i class="fas fa-envelope" style="font-size: 48px; color: #3498db; margin-bottom: 15px;"></i>
                <h3 style="color: #2c3e50; margin-bottom: 10px;">استعادة كلمة المرور</h3>
                <p style="color: #7f8c8d; margin-bottom: 20px;">أدخل بريدك الإلكتروني لإرسال رمز التحقق</p>
            </div>
            
            <div class="form-group">
                <input type="email" id="resetEmail" placeholder="بريدك الإلكتروني" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px;">
            </div>
            
            <button class="reset-submit-btn" id="sendCodeBtn">
                إرسال رمز التحقق
            </button>
            
            <div class="reset-back-link">
                <a href="#" id="backToLoginBtn">العودة لتسجيل الدخول</a>
            </div>
        </div>

        <!-- الخطوة 2: رمز التحقق -->
        <div class="reset-step" id="stepCode">
            <div style="text-align: center; margin-bottom: 20px;">
                <i class="fas fa-shield-alt" style="font-size: 48px; color: #3498db; margin-bottom: 15px;"></i>
                <h3 style="color: #2c3e50; margin-bottom: 10px;">تحقق من الهوية</h3>
                <p style="color: #7f8c8d; margin-bottom: 20px;">أدخل رمز التحقق المكون من 5 أرقام</p>
            </div>
            
            <div class="verification-container">
                <input type="text" class="verification-box" maxlength="1" data-index="0">
                <input type="text" class="verification-box" maxlength="1" data-index="1">
                <input type="text" class="verification-box" maxlength="1" data-index="2">
                <input type="text" class="verification-box" maxlength="1" data-index="3">
                <input type="text" class="verification-box" maxlength="1" data-index="4">
            </div>
            
            <div class="reset-timer" id="codeTimer">05:00</div>
            
            <button class="reset-submit-btn" id="verifyCodeBtn" disabled>
                تحقق من الرمز
            </button>
            
            <div class="resend-container">
                <button class="resend-button" id="resendCodeBtn" disabled>
                    إعادة إرسال الرمز
                </button>
            </div>
        </div>

        <!-- الخطوة 3: كلمة المرور الجديدة -->
        <div class="reset-step" id="stepPassword">
            <div style="text-align: center; margin-bottom: 20px;">
                <i class="fas fa-lock" style="font-size: 48px; color: #3498db; margin-bottom: 15px;"></i>
                <h3 style="color: #2c3e50; margin-bottom: 10px;">كلمة مرور جديدة</h3>
                <p style="color: #7f8c8d; margin-bottom: 20px;">اختر كلمة مرور قوية وآمنة</p>
            </div>
            
            <div class="form-group">
                <input type="password" id="newPassword" placeholder="كلمة المرور الجديدة" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px; margin-bottom: 10px;">
                <div class="password-strength" id="passwordStrength"></div>
            </div>
            
            <div class="form-group">
                <input type="password" id="confirmPassword" placeholder="تأكيد كلمة المرور" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; font-size: 14px;">
            </div>
            
            <button class="reset-submit-btn" id="resetPasswordBtn">
                إعادة تعيين كلمة المرور
            </button>
        </div>
    </div>
    `;

    const tabContent = document.querySelector('.tab-content');
    tabContent.insertAdjacentHTML('beforeend', resetFormHTML);

    console.log('✅ تم إنشاء النموذج الجديد');

    // إخفاء جميع الخطوات أولاً ثم إظهار الخطوة الأولى فقط
    setTimeout(() => {
        hideAllResetSteps();
        showResetStep('stepEmail');
        initializeNewResetEvents();
    }, 100);
}

// إخفاء جميع الخطوات
function hideAllResetSteps() {
    const steps = document.querySelectorAll('.reset-step');
    steps.forEach(step => {
        step.style.display = 'none';
        step.classList.remove('active');
    });
    console.log('📁 تم إخفاء جميع الخطوات');
}

// عرض خطوة محددة وإخفاء الباقي
function showResetStep(stepId) {
    console.log('🎯 عرض الخطوة:', stepId);

    // إخفاء جميع الخطوات أولاً
    hideAllResetSteps();

    // إظهار الخطوة المطلوبة
    const targetStep = document.getElementById(stepId);
    if (targetStep) {
        targetStep.style.display = 'block';
        targetStep.classList.add('active');
        console.log('✅ تم عرض الخطوة:', stepId);
    } else {
        console.error('❌ لم يتم العثور على الخطوة:', stepId);
    }
}

// تهيئة أحداث النظام الجديد
function initializeNewResetEvents() {
    console.log('⚡ تهيئة أحداث النظام الجديد');

    // زر العودة لتسجيل الدخول
    const backBtn = document.getElementById('backToLoginBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('↩️ العودة لتسجيل الدخول');
            resetToLogin();
        });
    }

    // زر إرسال الرمز
    const sendBtn = document.getElementById('sendCodeBtn');
    if (sendBtn) {
        sendBtn.addEventListener('click', handleSendCode);
        console.log('✅ تم إعداد زر إرسال الرمز');
    }

    // إعداد خانات رمز التحقق
    const codeInputs = document.querySelectorAll('.verification-box');
    if (codeInputs.length > 0) {
        setupCodeInputs();
        console.log('✅ تم إعداد خانات الرمز');
    }

    // زر التحقق من الرمز
    const verifyBtn = document.getElementById('verifyCodeBtn');
    if (verifyBtn) {
        verifyBtn.addEventListener('click', handleVerifyCode);
        console.log('✅ تم إعداد زر التحقق');
    }

    // زر إعادة الإرسال
    const resendBtn = document.getElementById('resendCodeBtn');
    if (resendBtn) {
        resendBtn.addEventListener('click', handleResendCode);
        console.log('✅ تم إعداد زر إعادة الإرسال');
    }

    // متابعة قوة كلمة المرور
    const newPasswordInput = document.getElementById('newPassword');
    if (newPasswordInput) {
        newPasswordInput.addEventListener('input', checkPasswordStrength);
        console.log('✅ تم إعداد متابعة كلمة المرور');
    }

    // زر إعادة تعيين كلمة المرور
    const resetBtn = document.getElementById('resetPasswordBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', handleResetPassword);
        console.log('✅ تم إعداد زر إعادة التعيين');
    }
}

// إعداد خانات رمز التحقق
function setupCodeInputs() {
    const inputs = document.querySelectorAll('.verification-box');

    inputs.forEach((input, index) => {
        // مسح أي event listeners قديمة
        input.replaceWith(input.cloneNode(true));
    });

    // الحصول على العناصر الجديدة
    const newInputs = document.querySelectorAll('.verification-box');

    newInputs.forEach((input, index) => {
        input.addEventListener('input', function (e) {
            const value = e.target.value;

            // السماح بالأرقام فقط
            if (!/^\d*$/.test(value)) {
                e.target.value = '';
                return;
            }

            // الانتقال للخانة التالية
            if (value.length === 1 && index < newInputs.length - 1) {
                newInputs[index + 1].focus();
            }

            checkCodeCompletion();
        });

        input.addEventListener('keydown', function (e) {
            // الرجوع للخانة السابقة عند الضغط على backspace
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                newInputs[index - 1].focus();
            }
        });

        input.addEventListener('paste', function (e) {
            e.preventDefault();
            const pasteData = e.clipboardData.getData('text').slice(0, 5);
            const numbers = pasteData.split('').filter(char => /^\d$/.test(char));

            numbers.forEach((num, numIndex) => {
                if (newInputs[numIndex]) {
                    newInputs[numIndex].value = num;
                }
            });

            checkCodeCompletion();
        });
    });
}

// التحقق من اكتمال الرمز
function checkCodeCompletion() {
    const inputs = document.querySelectorAll('.verification-box');
    const verifyBtn = document.getElementById('verifyCodeBtn');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value) {
            allFilled = false;
        }
    });

    if (verifyBtn) {
        verifyBtn.disabled = !allFilled;
    }
}

// معالجة إرسال الرمز
async function handleSendCode() {
    const email = document.getElementById('resetEmail').value;
    const sendBtn = document.getElementById('sendCodeBtn');

    if (!email) {
        alert('يرجى إدخال البريد الإلكتروني');
        return;
    }

    if (!validateEmail(email)) {
        alert('البريد الإلكتروني غير صحيح');
        return;
    }

    // تعطيل الزر
    sendBtn.disabled = true;
    sendBtn.textContent = 'جاري الإرسال...';

    try {
        // التحقق من وجود المستخدم
        const userCheck = await checkUserExists(email);

        if (userCheck.exists) {
            // إرسال رمز التحقق عبر EmailJS
            await sendVerificationCode(email);

            // الانتقال للخطوة الثانية
            showResetStep('stepCode');
            startCodeTimer();

            alert('تم إرسال رمز التحقق إلى بريدك الإلكتروني');
        } else {
            alert('هذا البريد الإلكتروني غير مسجل');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('حدث خطأ في الإرسال');
    } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = 'إرسال رمز التحقق';
    }
}

// إرسال رمز التحقق عبر EmailJS
async function sendVerificationCode(email) {
    const verificationCode = Math.floor(10000 + Math.random() * 90000).toString(); // 5 أرقام

    console.log('📧 رمز التحقق:', verificationCode);

    // حفظ الرمز
    localStorage.setItem('resetCode', verificationCode);
    localStorage.setItem('resetEmail', email);
    localStorage.setItem('codeExpiry', Date.now() + 5 * 60 * 1000);

    try {
        // إرسال عبر EmailJS
        await emailjs.send(
            'service_azkrvw4',
            'template_91l89cc',
            {
                to_email: email,
                verification_code: verificationCode,
                user_name: email.split('@')[0]
            },
            '-HQCAcMh7jH1py0k'
        );

        console.log('✅ تم إرسال البريد بنجاح');
        return true;
    } catch (error) {
        console.error('❌ خطأ في إرسال البريد:', error);
        // للمحاكاة فقط - نعود بنجاح حتى بدون إرسال حقيقي
        return true;
    }
}

// بدء المؤقت
function startCodeTimer() {
    let timeLeft = 300; // 5 دقائق
    const timerElement = document.getElementById('codeTimer');
    const resendBtn = document.getElementById('resendCodeBtn');

    if (!timerElement) return;

    resendBtn.disabled = true;

    const timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerElement.textContent = 'انتهت صلاحية الرمز';
            timerElement.style.color = '#e74c3c';
            if (resendBtn) {
                resendBtn.disabled = false;
            }
        }

        timeLeft--;
    }, 1000);
}

// معالجة التحقق من الرمز
function handleVerifyCode() {
    const inputs = document.querySelectorAll('.verification-box');
    let enteredCode = '';

    inputs.forEach(input => {
        enteredCode += input.value;
    });

    const savedCode = localStorage.getItem('resetCode');
    const expiry = localStorage.getItem('codeExpiry');

    if (!savedCode || Date.now() > expiry) {
        alert('انتهت صلاحية الرمز');
        return;
    }

    if (enteredCode === savedCode) {
        // تم التحقق بنجاح
        inputs.forEach(input => {
            input.classList.add('valid');
        });

        setTimeout(() => {
            showResetStep('stepPassword');
        }, 1000);
    } else {
        alert('رمز التحقق غير صحيح');
    }
}

// معالجة إعادة الإرسال
function handleResendCode() {
    const email = localStorage.getItem('resetEmail');
    if (email) {
        handleSendCode();
    }
}

// معالجة إعادة تعيين كلمة المرور
async function handleResetPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = localStorage.getItem('resetEmail');

    if (!newPassword || !confirmPassword) {
        alert('يرجى ملء جميع الحقول');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('كلمات المرور غير متطابقة');
        return;
    }

    if (newPassword.length < 6) {
        alert('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        return;
    }

    try {
        const response = await fetch('../php/reset_password.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}&newPassword=${encodeURIComponent(newPassword)}`
        });

        const data = await response.json();

        if (data.success) {
            alert('تم إعادة تعيين كلمة المرور بنجاح');
            resetToLogin();
        } else {
            alert('حدث خطأ: ' + data.message);
        }
    } catch (error) {
        alert('حدث خطأ في الاتصال');
    }
}

// التحقق من قوة كلمة المرور
function checkPasswordStrength() {
    const password = document.getElementById('newPassword').value;
    const strengthElement = document.getElementById('passwordStrength');

    if (!password) {
        strengthElement.textContent = '';
        return;
    }

    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) {
        strengthElement.textContent = 'قوة كلمة المرور: ضعيفة';
        strengthElement.className = 'password-strength strength-weak';
    } else if (strength <= 4) {
        strengthElement.textContent = 'قوة كلمة المرور: متوسطة';
        strengthElement.className = 'password-strength strength-medium';
    } else {
        strengthElement.textContent = 'قوة كلمة المرور: قوية';
        strengthElement.className = 'password-strength strength-strong';
    }
}

// العودة لتسجيل الدخول
function resetToLogin() {
    const resetForm = document.getElementById('passwordResetForm');
    if (resetForm) resetForm.remove();

    document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'flex';
    });

    showForm('loginForm');
    document.querySelector('.tab[data-tab="login"]').classList.add('active');

    // تنظيف localStorage
    localStorage.removeItem('resetCode');
    localStorage.removeItem('resetEmail');
    localStorage.removeItem('codeExpiry');
}

// التحقق من وجود المستخدم
async function checkUserExists(email) {
    try {
        const response = await fetch('../php/check_user.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${encodeURIComponent(email)}`
        });

        return await response.json();
    } catch (error) {
        return { exists: false };
    }
}

////////////////////////////////////////
// دالة لعرض رسائل مخصصة (إذا لم تكن موجودة)
function showCustomAlert(message, type = 'info', duration = 3000) {
    // إذا كانت الدالة موجودة في gra.js، سنستخدمها
    if (typeof window.showCustomAlert === 'function' && window.showCustomAlert !== showCustomAlert) {
        window.showCustomAlert(message, type, duration);
        return;
    }

    // إنشاء رسالة مخصصة
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease;
    `;

    // تخصيص الألوان حسب النوع
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };

    alertDiv.style.backgroundColor = colors[type] || colors.info;
    alertDiv.textContent = message;

    document.body.appendChild(alertDiv);

    // إزالة الرسالة بعد المدة المحددة
    setTimeout(() => {
        alertDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 300);
    }, duration);
}
// تأكد من إضافة هذا الـ style في com.js
if (!document.querySelector('#field-error-styles')) {
    const style = document.createElement('style');
    style.id = 'field-error-styles';
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .form-group {
            position: relative;
            margin-bottom: 15px;
        }
        
        .field-error {
            color: #e74c3c !important;
            font-size: 12px !important;
            margin-top: 5px !important;
            padding: 4px 8px !important;
            background: #ffeaea !important;
            border-radius: 3px !important;
            border: 1px solid #e74c3c !important;
            animation: fadeIn 0.3s ease !important;
        }
        
        input:focus {
            border-color: #3498db !important;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.3) !important;
        }
        
        input.error {
            border-color: #e74c3c !important;
            background-color: #ffeaea !important;
        }
    `;
    document.head.appendChild(style);
}

function setupTranslation() {
    const translateBtn = document.querySelector('.translate-btn');
    const translateOptions = document.querySelector('.translate-options');
    const translateOptionItems = document.querySelectorAll('.translate-option');

    if (translateBtn) {
        translateBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            translateOptions.classList.toggle('show');
        });
    }

    document.addEventListener('click', () => {
        if (translateOptions) translateOptions.classList.remove('show');
    });

    if (translateOptionItems) {
        translateOptionItems.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                changeLanguage(lang); // استخدام الدالة الجديدة
                translateOptions.classList.remove('show');
            });
        });
    }
}

// دالة الترجمة الأساسية
function changeLanguage(lang) {
    console.log(`🎯 التبديل إلى: ${lang}`);
    pageTranslator.toggleLanguage(lang);
}
function showForm(formId) {
    const forms = document.querySelectorAll('.form');
    if (forms) {
        forms.forEach(form => {
            form.classList.remove('active');
        });
        const targetForm = document.getElementById(formId);
        if (targetForm) targetForm.classList.add('active');
    }
}

function handleFormSubmission(form) {
    const currentLang = localStorage.getItem('currentLang') || 'ar';

    if (form.id === 'loginForm') {
        // محاكاة تسجيل الدخول
        const currentUser = {
            name: 'مستخدم',
            avatar: '../images/default-avatar.png'
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUIForLoggedInUser(currentUser);

        const modal = document.getElementById('loginModal');
        if (modal) modal.style.display = 'none';

        alert(currentLang === 'ar' ?
            'تم تسجيل الدخول بنجاح!' :
            'Login successful!');
    } else {
        alert(currentLang === 'en' ?
            'This is just a demo interface' :
            'هذه مجرد واجهة عرض وليست وظيفة حقيقية');
    }
}
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref && linkHref.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}
function loadUserState() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser(currentUser);
    }
}

function updateUIForLoggedInUser(user) {
    const loginBtn = document.querySelector('.login-btn');
    if (user && loginBtn) {
        loginBtn.innerHTML = `
                <div class="user-menu">
                    <img src="${user.avatar || '../images/default-avatar.png'}" alt="صورة المستخدم" class="user-avatar">
                    <span>${user.name}</span>
                </div>
            `;

        // إضافة أنماط للـ user menu
        const style = document.createElement('style');
        style.textContent = `
                .user-menu {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 5px 15px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                    color: var(--white);
                }
                .user-avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    border: 2px solid var(--white);
                }
            `;
        document.head.appendChild(style);
    }
}


// ========== التحميل التلقائي ==========
document.addEventListener('DOMContentLoaded', function () {
    loadHeaderAndFooter();

    // تهيئة مترجم جوجل بعد تحميل الصفحة
    setTimeout(() => {
        pageTranslator.initGoogleTranslate();
        pageTranslator.hideGoogleToolbar();

        // تطبيق اللغة المحفوظة
        const savedLang = localStorage.getItem('currentLang') || 'ar';
        if (savedLang === 'en') {
            setTimeout(() => pageTranslator.toggleLanguage('en'), 1500);
        }
    }, 1000);
});

function getStatusClass(status) {
    const statusMap = {
        'قيد المراجعة': 'under-review',
        'مقبول': 'approved',
        'مرفوض': 'rejected'
    };
    return statusMap[status] || 'under-review';
}
// عرض تفاصيل الطلب
async function viewApplicationDetails(applicationId) {
    try {
        const response = await fetch('../php/applications.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'get_application_details',
                application_id: applicationId
            })
        });

        const result = await response.json();

        if (result.success) {
            showApplicationDetailsModal(result.application);
        } else {
            showCustomAlert('❌ ' + result.message, 'error', 3000);
        }
    } catch (error) {
        console.error('❌ خطأ في جلب التفاصيل:', error);
        showCustomAlert('❌ حدث خطأ في جلب التفاصيل', 'error', 3000);
    }
}
// عرض نافذة تفاصيل الطلب
function showApplicationDetailsModal(application) {
    const modalHTML = `
    <div class="details-modal-overlay" id="detailsModal">
        <div class="details-modal">
            <div class="details-header">
                <h2><i class="fas fa-info-circle"></i> تفاصيل الطلب</h2>
                <button class="details-close" onclick="closeDetailsModal()">&times;</button>
            </div>
            <div class="details-content">
                <div class="details-section">
                    <h3>المعلومات الشخصية</h3>
                    <div class="details-grid">
                        <div class="detail-item">
                            <label>الاسم الكامل:</label>
                            <span>${application.personal.first_name} ${application.personal.middle_name || ''} ${application.personal.last_name}</span>
                        </div>
                        <div class="detail-item">
                            <label>البريد الإلكتروني:</label>
                            <span>${application.personal.email}</span>
                        </div>
                        <div class="detail-item">
                            <label>الهاتف:</label>
                            <span>${application.personal.phone}</span>
                        </div>
                    </div>
                </div>
                
                <div class="details-section">
                    <h3>البيانات الأكاديمية</h3>
                    <div class="details-grid">
                        <div class="detail-item">
                            <label>التخصص:</label>
                            <span>${application.academic.specialization}</span>
                        </div>
                        <div class="detail-item">
                            <label>الدرجة العلمية:</label>
                            <span>${application.academic.academic_degree}</span>
                        </div>
                    </div>
                </div>
                
                ${application.files && application.files.length > 0 ? `
                <div class="details-section">
                    <h3>المستندات المرفوعة</h3>
                    <div class="files-list">
                        ${application.files.map(file => `
                        <div class="file-item">
                            <i class="fas fa-file"></i>
                            <span class="file-name">${file.file_name}</span>
                            <button class="btn-download-small" onclick="downloadFile(${file.id})">
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}
// إغلاق نافذة التفاصيل
function closeDetailsModal() {
    const modal = document.getElementById('detailsModal');
    if (modal) modal.remove();
}
// تحميل ملف
function downloadFile(fileId) {
    alert('سيتم إضافة خاصية التحميل قريباً');
}
// تحميل الطلب كـ PDF
function downloadApplication(applicationId) {
    showCustomAlert('📥 جاري تحضير ملف PDF للتحميل...', 'info', 2000);

    // محاكاة التحميل (يمكن استبدالها بدالة حقيقية)
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = '#'; // يمكن استبدالها برابط حقيقي لملف PDF
        link.download = `طلب_الالتحاق_${applicationId}.pdf`;
        link.click();

        showCustomAlert('✅ تم تحميل ملف PDF بنجاح', 'success', 3000);
    }, 1500);
}