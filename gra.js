// في بداية gra.js - أضف هذه السطور
let currentGrantId = null;
let application_id = null; // ⬅️ أضف هذا السطر
let isEditing = false;
// بيانات الجامعات والبرامج
const universitiesData = [
    {
        id: 1,
        name: "Hebei Academy of fine Arts",
        nameEn: "Hebei Academy of fine Arts",
        image: "Hebei Academy of fine Arts.webp",
        shortDescription: "أكاديمية رائدة في الفنون الجميلة والتصميم في الصين، تقدم بيئة إبداعية محفزة للفنانين والمصممين الطموحين.",
        fullDescription: "تعتبر أكاديمية هوبي للفنون الجميلة من أبرز المؤسسات التعليمية المتخصصة في المجالات الفنية والإبداعية في الصين. تأسست الأكاديمية عام 2002 وتمتلك سمعة متميزة في تخريج فنانين ومصممين مبدعين. تقدم الأكاديمية بيئة تعليمية محفزة تجمع بين الأصالة الفنية والابتكار المعاصر، مع تركيز قوي على الجوانب العملية والتطبيقية في جميع برامجها التعليمية. تضم الأكاديمية أكثر من 11 كلية متخصصة وتتميز بمرافقها الحديثة التي تشمل مراسم فنية مجهزة بأحدث التقنيات، استوديوهات للوسائط الرقمية، ومعارض دائمة لأعمال الطلاب.",
        city: "الصين",
        language: "الإنجليزية",
        specializations: [
            "الرسم والفنون التشكيلية",
            "النحت والتصميم ثلاثي الأبعاد",
            "التصميم الجرافيكي",
            "تصميم الأزياء",
            "التصميم الصناعي",
            "الوسائط الرقمية",
            "الأنيميشن والرسوم المتحركة",
            "التصوير الفوتوغرافي",
            "التصميم الداخلي",
            "فنون الخط العربي"
        ]
    },
    {
        id: 2,
        name: "جامعة يان آن",
        nameEn: "Beijing University",
        image: "Yan'an_University_(YAU).jpeg",
        shortDescription: "إحدى أعرق الجامعات الصينية ذات السمعة العالمية في البحث العلمي والابتكار الأكاديمي.",
        fullDescription: "جامعة بكين هي إحدى أعرق وأهم الجامعات الصينية، تأسست عام 1898 وتحظى بسمعة عالمية متميزة في مجال البحث العلمي والابتكار. تحتل الجامعة مراكز متقدمة في التصنيفات العالمية وتضم كادراً تدريسياً من نخبة الأساتذة والباحثين. تتميز الجامعة ببنيتها التحتية المتطورة التي تشمل مكتبة ضخمة تضم ملايين المراجع العلمية، مراكز بحثية متخصصة، ومستشفى تعليمي مجهز بأحدث التقنيات الطبية. تتبنى الجامعة منهجاً متكاملاً يجمع بين الأصالة الأكاديمية والابتكار المعاصر.",
        city: "بكين",
        language: "الإنجليزية والصينية",
        specializations: [
            "الطب البشري وطب الأسنان",
            "الهندسة بكافة تخصصاتها",
            "علوم الحاسب والذكاء الاصطناعي",
            "إدارة الأعمال والاقتصاد",
            "العلوم الطبيعية والرياضيات",
            "الآداب والعلوم الإنسانية",
            "القانون والعلوم السياسية",
            "العلوم البيئية والزراعية",
            "الصيدلة والعلوم الصحية",
            "التربية والتعليم"
        ]
    }
];

const programsData = [
    {
        id: 1,
        city: "تياتجين",
        program: "اللغة الصينية",
        degree: "دبلوم",
        language: "إنجليزي",
        scholarship: "منحة كاملة 100%",
        deadline: "2025-10-3",
        specialization: "اللغات",
        // البيانات الجديدة
        tuitionFees: {
            original: "3,000$",
            afterScholarship: "2,000$",
            accommodation: "1,000$",
            accommodationAfterScholarship: "700$",
            application: "400$"
        },
        programDetails: {
            admissionPeriod: "2025/10 - 2025/12",
            ageRequirement: "18 - 25 سنة"
        },
        requiredDocuments: [
            "صورة شخصية",
            "جواز سفر",
            "شهادة أكاديمية",
            "بيان درجات",
            "شهادة إنجليزية",
            "سيرة ذاتية (تنزيل)",
            "فحص طبي (تنزيل)",
            "ابلكيشن فورم (تنزيل)",
            "فيديو تعريفي لا يقل عن دقيقتين",

        ]
    },
    {
        id: 2,
        city: "ووهان",
        program: "اللغة الصينية",
        degree: "دبلوم",
        language: "إنجليزي",
        scholarship: "منحة جزئية 50%",
        deadline: "2025-10-31",
        specialization: "اللغات",
        // البيانات الجديدة
        tuitionFees: {
            original: "5,000$",
            afterScholarship: "3,000$",
            accommodation: "2,000$",
            accommodationAfterScholarship: "1,500$",
            application: "500$"
        },
        programDetails: {
            admissionPeriod: "2025/09 - 2026/01",
            ageRequirement: "17 - 30 سنة"
        },
        requiredDocuments: [
            "صورة شخصية",
            "جواز سفر",
            "شهادة أكاديمية",
            "بيان درجات",
            "توصية",
            "شهادة إنجليزية",
            "كشف حساب بنكي",
            "سيرة ذاتية (تنزيل)",
            "فحص طبي (تنزيل)",
            "ابلكيشن فورم (تنزيل)",
            "فيديو تعريفي لا يقل عن دقيقتين"
        ]
    }
];

// بيانات الدول والولايات
const countries = {
    yemen: ["أمانة العاصمة", "صنعاء", "عدن", "تعز", "حضرموت", "الحديدة", "إب", "ذمار", "مأرب", "الجوف", "شبوة", "المهرة", "لحج", "أبين", "الضالع", "البيضاء", "حجة", "ريمة", "صعدة", "سقطرى", "المحويت", "عمران"],
    saudi: ["الرياض", "مكة المكرمة", "المدينة المنورة", "الشرقية", "عسير", "تبوك", "حائل", "القصيم", "جازان", "نجران", "الباحة", "الجوف", "الحدود الشمالية"],
    egypt: ["القاهرة", "الإسكندرية", "بورسعيد", "السويس", "دمياط", "الدقهلية", "الشرقية", "القليوبية", "كفر الشيخ", "الغربية", "المنوفية", "البحيرة", "الإسماعيلية", "الجيزة", "بني سويف", "الفيوم", "المنيا", "أسيوط", "سوهاج", "قنا", "أسوان", "الأقصر", "البحر الأحمر", "الوادي الجديد", "مطروح", "شمال سيناء", "جنوب سيناء"]
};

// بيانات التخصصات والأقسام
const specializations = {
    medical: ["تمريض", "أسنان", "صيدلة", "طب", "طب بيطري"],
    engineering: ["مدني", "كهرباء", "ميكانيكا", "كمبيوتر", "كيميائي"],
    science: ["حاسوب", "فيزياء", "كيمياء", "رياضيات", "أحياء"],
    business: ["محاسبة", "تمويل", "تسويق", "إدارة"],
    arts: ["لغة عربية", "لغة إنجليزية", "تاريخ", "جغرافيا"]
};

// العناصر الرئيسية
const viewTypeSelect = document.getElementById('viewType');
const searchInput = document.getElementById('mainSearchInput');
const universitiesView = document.getElementById('universitiesView');
const programsView = document.getElementById('programsView');
const universitiesContainer = document.getElementById('universitiesContainer');
const filterSection = document.querySelector('.filter-section');
const applicationModal = document.getElementById('applicationModal');
const applicationTabs = document.querySelectorAll('.application-tab');
const applicationForms = document.querySelectorAll('.application-form');

// حالة التطبيق
let activeUniversityCard = null;
let currentProgramFilters = {
    degree: 'جميع الدرجات',
    specialization: 'جميع التخصصات'
};
//-----------------------------------------------
//-----------------------------------------------
//      دالة لتنزيل الملفات
// نظام إدارة وتنزيل المستندات مع دعم صيغ متعددة
class DocumentDownloader {
    constructor() {
        this.documents = {
            "سيرة ذاتية (تنزيل)": {
                id: "cv",
                filename: "نموذج_السيرة_الذاتية.doc",
                path: "APPLICATION-FORM.docx",
                type: "application/msword",
                backup: {
                    filename: "نموذج_السيرة_الذاتية.txt",
                    content: `نموذج السيرة الذاتية

المعلومات الشخصية:
الاسم: __________________
التاريخ الميلادي: __________________
الجنسية: __________________

المؤهلات العلمية:
- __________________
- __________________

الخبرات العملية:
- __________________
- __________________

المهارات:
- __________________
- __________________

─────────────────────────
وكالة الهمداني للخدمات التعليمية
`
                }
            },
            "فحص طبي (تنزيل)": {
                id: "medical",
                filename: "نموذج_الفحص_الطبي.pdf",
                path: "FOREIGNER-PHYSICAL-EXAMINATION-FORM.pdf",
                type: "application/pdf",
                backup: {
                    filename: "نموذج_الفحص_الطبي.txt",
                    content: `نموذج الفحص الطبي

البيانات الشخصية:
الاسم: __________________
العمر: __________________

التاريخ الطبي:
الأمراض المزمنة: __________________
الحساسيات: __________________

نتائج الفحص:
الطول: ______ الوزن: ______
ضغط الدم: ______
التحاليل: __________________

توقيع الطبيب: __________________
`
                }
            },
            "ابلكيشن فورم (تنزيل)": {
                id: "application",
                filename: "نموذج_طلب_الالتحاق.doc",
                path: "RESUME.doc",
                type: "application/msword",
                backup: {
                    filename: "نموذج_طلب_الالتحاق.txt",
                    content: `نموذج طلب الالتحاق

البيانات الشخصية:
الاسم الثلاثي: __________________
مكان الميلاد: __________________

البيانات الأكاديمية:
المؤهل: __________________
المعدل: __________________

البرنامج المطلوب:
اسم البرنامج: __________________
التخصص: __________________

المستندات المرفقة:
☐ صورة شخصية
☐ شهادة الميلاد
☐ الشهادات الأكاديمية

التوقيع: __________________
`
                }
            }
        };
    }

    // الدالة الرئيسية للتنزيل
    async downloadDocument(docName) {
        const doc = this.documents[docName];

        if (!doc) {
            this.showError(`الملف غير متوفر: ${docName}`);
            return;
        }

        // إظهار حالة التحميل
        this.showLoading(docName);

        try {
            // محاولة التحميل من الملف الحقيقي
            await this.downloadFromFile(doc);
        } catch (error) {
            console.log(`❌ فشل تحميل الملف الحقيقي: ${error}`);
            // إذا فشل، أنشئ ملف بديل
            this.createBackupFile(doc);
        }
    }

    // تحميل من ملف حقيقي
    async downloadFromFile(doc) {
        return new Promise((resolve, reject) => {
            fetch(doc.path)
                .then(response => {
                    if (response.ok) {
                        return response.blob();
                    } else {
                        reject(new Error('الملف غير موجود على السيرفر'));
                    }
                })
                .then(blob => {
                    // التأكد من نوع الملف
                    const finalBlob = new Blob([blob], { type: doc.type });
                    this.downloadBlob(finalBlob, doc.filename);
                    this.showSuccess(`تم تنزيل الملف: ${doc.filename}`);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    // إنشاء ملف بديل
    createBackupFile(doc) {
        const content = doc.backup.content;
        const blob = new Blob([content], {
            type: 'text/plain; charset=utf-8'
        });

        this.downloadBlob(blob, doc.backup.filename);
        this.showSuccess(`تم إنشاء ملف بديل: ${doc.backup.filename}`);
    }

    // تنزيل الـ Blob
    downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // تحرير الذاكرة
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    // إظهار حالة التحميل
    showLoading(docName) {
        console.log(`📥 جاري تحميل: ${docName}`);
    }

    // إظهار نجاح التحميل
    showSuccess(message) {
        console.log(`✅ ${message}`);
    }

    // إظهار خطأ
    showError(message) {
        console.error(`❌ ${message}`);
        alert(message);
    }

    // الحصول على معلومات الملف
    getDocumentInfo(docName) {
        return this.documents[docName];
    }

    // الحصول على قائمة المستندات المتاحة
    getAvailableDocuments() {
        return Object.keys(this.documents);
    }
}

// إنشاء نسخة عامة للاستخدام
const documentDownloader = new DocumentDownloader();








// ========== دوال تفاصيل البرنامج المضافة ==========

function showProgramDetails(programId) {
    console.log('🎯 عرض تفاصيل البرنامج:', programId);

    const program = programsData.find(prog => prog.id === programId);
    if (!program) {
        alert('البرنامج غير موجود!');
        return;
    }

    // استخدام البيانات الديناميكية من البرنامج
    const programData = {
        specialization: program.specialization,
        programName: program.program,
        degree: program.degree,
        admissionPeriod: program.programDetails?.admissionPeriod || "2025/10 - 2025/12",
        ageRequirement: program.programDetails?.ageRequirement || "18 - 25 سنة",
        applicationDeadline: program.deadline,

        tuitionFees: program.tuitionFees || {
            original: "20,000$",
            afterScholarship: "5,000$",
            accommodation: "8,000$",
            accommodationAfterScholarship: "2,000$",
            application: "500$"
        },

        requiredDocuments: program.requiredDocuments || [
            "صورة شخصية",
            "جواز سفر",
            "شهادة أكاديمية",
            "بيان درجات",
            "توصية",
            "رسالة دافع",
            "سيرة ذاتية (تنزيل)",
            "فحص طبي (تنزيل)",
            "شهادة إنجليزية",
            "كشف حساب بنكي",
            "ابلكيشن فورم (تنزيل)",
            "فيديو تعريفي لا يقل عن دقيقتين"
        ]
    };

    // إنشاء النافذة المنبثقة
    const modalHTML = `
    <div class="program-modal-overlay" id="programModal">
        <div class="program-modal-container">
            <!-- الهيدر -->
            <div class="program-modal-header">
                <h2>تفاصيل البرنامج الدراسي</h2>
                <button class="program-modal-close" onclick="closeProgramModal()">×</button>
            </div>
            
            <!-- المحتوى -->
            <div class="program-modal-content">
                <!-- الجدول الأول: معلومات البرنامج -->
                <div class="program-details-section program-info-section">
                    <h3 class="section-title">
                        <i class="fas fa-info-circle"></i>
                        معلومات البرنامج
                    </h3>
                    <table class="program-details-table">
                        <tr>
                            <td class="info-label">التخصص</td>
                            <td class="info-value">${programData.specialization}</td>
                        </tr>
                        <tr>
                            <td class="info-label">اسم البرنامج</td>
                            <td class="info-value">${programData.programName}</td>
                        </tr>
                        <tr>
                            <td class="info-label">الدرجة العلمية</td>
                            <td class="info-value">${programData.degree}</td>
                        </tr>
                        <tr>
                            <td class="info-label">فترة القبول / الالتحاق</td>
                            <td class="info-value">${programData.admissionPeriod}</td>
                        </tr>
                        <tr>
                            <td class="info-label">العمر</td>
                            <td class="info-value">${programData.ageRequirement}</td>
                        </tr>
                        <tr>
                            <td class="info-label">موعد انتهاء التقديمة</td>
                            <td class="info-value deadline-cell">${programData.applicationDeadline}</td>
                        </tr>
                    </table>
                </div>

                <!-- الجدول الثاني: الرسوم الجامعية -->
                <div class="program-details-section program-fees-section">
                    <h3 class="section-title">
                        <i class="fas fa-money-bill-wave"></i>
                        الرسوم الجامعية
                    </h3>
                    <table class="program-details-table">
                        <tr>
                            <td class="info-label">الرسوم الدراسية الأصلية</td>
                            <td class="info-value">${programData.tuitionFees.original}</td>
                        </tr>
                        <tr>
                            <td class="info-label">الرسوم الدراسية بعد المنحة</td>
                            <td class="info-value scholarship-value">${programData.tuitionFees.afterScholarship}</td>
                        </tr>
                        <tr>
                            <td class="info-label">رسوم الإقامة / السكن</td>
                            <td class="info-value">${programData.tuitionFees.accommodation}</td>
                        </tr>
                        <tr>
                            <td class="info-label">رسوم الإقامة بعد المنحة</td>
                            <td class="info-value scholarship-value">${programData.tuitionFees.accommodationAfterScholarship}</td>
                        </tr>
                        <tr>
                            <td class="info-label">رسوم الطلب / رسوم التقديم</td>
                            <td class="info-value">${programData.tuitionFees.application}</td>
                        </tr>
                    </table>
                </div>

                <!-- الجدول الثالث: المستندات المطلوبة -->
                <div class="program-details-section program-documents-section">
                    <h3 class="section-title">
                        <i class="fas fa-file-alt"></i>
                        المستندات المطلوبة
                    </h3>
                    <div class="documents-list">
                        ${programData.requiredDocuments.map(doc => `
                            <div class="document-item ${doc.includes('(تنزيل)') ? 'downloadable' : ''}">
                                <span class="document-name">${doc}</span>
                                ${doc.includes('(تنزيل)') ? `
                                    <button class="download-btn" onclick="downloadDocument('${doc}')">
                                        <i class="fas fa-download"></i>
                                        تنزيل
                                    </button>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- الأزرار -->
            <div class="program-modal-actions">
                <button class="modal-close-btn" onclick="closeProgramModal()">إغلاق</button>
                <button class="modal-apply-btn" onclick="applyForProgramFromModal(${programId})">
                    <i class="fas fa-paper-plane"></i>
                    تقديم على البرنامج
                </button>
            </div>
        </div>
    </div>
    `;

    // إضافة النافذة إلى الصفحة
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeProgramModal() {
    const modal = document.getElementById('programModal');
    if (modal) {
        modal.remove();
    }
}

function downloadDocument(docName) {
    documentDownloader.downloadDocument(docName);
}

function applyForProgramFromModal(programId) {
    console.log('🎯 تقديم على البرنامج من النافذة:', programId);

    // إغلاق نافذة التفاصيل أولاً
    closeProgramModal();

    // فتح نافذة التقديم الرئيسية بعد تأخير بسيط
    setTimeout(() => {
        applyForProgram(programId);
    }, 300);
}

// ========== النظام الأساسي (من gra.js الأصلي) ==========

function initializeApp() {
    displayUniversities(universitiesData);
    displayProgramsTable(programsData);
    setupFilterSection('programs');
}

function setupEventListeners() {
    if (viewTypeSelect) {
        viewTypeSelect.addEventListener('change', function () {
            switchView(this.value);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase().trim();
            if (viewTypeSelect.value === 'universities') {
                if (searchTerm === '') {
                    displayUniversities(universitiesData);
                } else {
                    const filtered = universitiesData.filter(uni => {
                        return (
                            uni.name.toLowerCase().includes(searchTerm) ||
                            uni.shortDescription.toLowerCase().includes(searchTerm) ||
                            uni.fullDescription.toLowerCase().includes(searchTerm) ||
                            uni.city.toLowerCase().includes(searchTerm) ||
                            uni.language.toLowerCase().includes(searchTerm) ||
                            uni.specializations.some(spec =>
                                spec.toLowerCase().includes(searchTerm)
                            )
                        );
                    });
                    displayUniversities(filtered);
                }
            } else {
                if (searchTerm === '') {
                    displayProgramsTable(programsData);
                } else {
                    const filtered = programsData.filter(program =>
                        program.program.toLowerCase().includes(searchTerm) ||
                        program.city.toLowerCase().includes(searchTerm) ||
                        program.specialization.toLowerCase().includes(searchTerm) ||
                        program.degree.toLowerCase().includes(searchTerm) ||
                        program.language.toLowerCase().includes(searchTerm)
                    );
                    displayProgramsTable(filtered);
                }
            }
        });
    }
}

function switchView(viewType) {
    universitiesView.classList.remove('active');
    programsView.classList.remove('active');

    setTimeout(() => {
        if (viewType === 'universities') {
            universitiesView.classList.add('active');
            setupFilterSection('universities');
        } else {
            programsView.classList.add('active');
            setupFilterSection('programs');
        }
    }, 50);
}

function setupFilterSection(type) {
    if (!filterSection) return;

    if (type === 'universities') {
        filterSection.innerHTML = `
            <h3 class="filter-title">المدن</h3>
            <div class="cities-buttons" id="citiesButtons">
                ${['جميع المدن', 'الصين', 'بكين', 'شنغهاي'].map(city => `
                    <button class="city-btn ${city === 'جميع المدن' ? 'active' : ''}" data-city="${city}">
                        ${city}
                    </button>
                `).join('')}
            </div>
        `;
        setupCityFilters();
    } else {
        filterSection.innerHTML = `
            <h3 class="filter-title">الدرجات العلمية</h3>
            <div class="specialization-buttons" id="degreeButtons">
                ${['جميع الدرجات', 'بكالوريوس', 'ماجستير', 'دكتوراه', 'دبلوم'].map(degree => `
                    <button class="specialization-btn ${degree === 'جميع الدرجات' ? 'active' : ''}" data-degree="${degree}">
                        ${degree}
                    </button>
                `).join('')}
            </div>
            <hr class="divider">
            <h3 class="filter-title">التخصصات</h3>
            <div class="specialization-buttons" id="specializationButtons">
                ${['جميع التخصصات', 'طبية', 'هندسية', 'علمية', 'إدارية', 'فنية', 'اللغات'].map(spec => `
                    <button class="specialization-btn ${spec === 'جميع التخصصات' ? 'active' : ''}" data-specialization="${spec}">
                        ${spec}
                    </button>
                `).join('')}
            </div>
        `;
        setupProgramFilters();
    }
}

function setupCityFilters() {
    const cityButtons = document.querySelectorAll('.city-btn');
    cityButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            cityButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const selectedCity = this.getAttribute('data-city');
            if (selectedCity === 'جميع المدن') {
                displayUniversities(universitiesData);
            } else {
                const filtered = universitiesData.filter(uni => uni.city === selectedCity);
                displayUniversities(filtered);
            }
        });
    });
}

function setupProgramFilters() {
    const degreeButtons = document.querySelectorAll('#degreeButtons .specialization-btn');
    const specializationButtons = document.querySelectorAll('#specializationButtons .specialization-btn');

    degreeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            degreeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentProgramFilters.degree = this.getAttribute('data-degree');
            filterPrograms();
        });
    });

    specializationButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            specializationButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentProgramFilters.specialization = this.getAttribute('data-specialization');
            filterPrograms();
        });
    });
}

function filterPrograms() {
    let filtered = programsData;

    if (currentProgramFilters.degree !== 'جميع الدرجات') {
        filtered = filtered.filter(program => program.degree === currentProgramFilters.degree);
    }

    if (currentProgramFilters.specialization !== 'جميع التخصصات') {
        filtered = filtered.filter(program => program.specialization === currentProgramFilters.specialization);
    }

    displayProgramsTable(filtered);
}

function displayUniversities(universities) {
    if (!universitiesContainer) return;

    universitiesContainer.innerHTML = universities.map(uni => `
        <div class="university-card" data-id="${uni.id}">
            <div class="university-main">
                <img src="${uni.image}" alt="${uni.name}" class="university-image">
                <div class="university-info">
                    <h3 class="university-name">${uni.name}</h3>
                    <p class="university-description">${uni.shortDescription}</p>
                    <div class="read-more-hint">
                        <span>انقر لرؤية التفاصيل</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div class="university-details">
                <div class="details-content">
                    <div class="university-basic-info">
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>المدينة: ${uni.city}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-language"></i>
                            <span>لغة التدريس: ${uni.language}</span>
                        </div>
                    </div>
                    
                    <div class="full-description">
                        ${uni.fullDescription}
                    </div>
                    
                    <div class="university-specializations">
                        <h4 class="specializations-title">
                            <i class="fas fa-graduation-cap"></i>
                            التخصصات المتاحة
                        </h4>
                        <div class="specializations-grid">
                            ${uni.specializations.map(spec => `
                                <div class="specialization-tag">${spec}</div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="apply-btn-container">
                        <button class="apply-btn-single" onclick="applyForUniversity(${uni.id})">
                            <i class="fas fa-paper-plane"></i>
                            تقديم طلب الالتحاق
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    setupUniversityCards();
}

function setupUniversityCards() {
    const universityCards = document.querySelectorAll('.university-card');
    universityCards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.closest('.apply-btn-single')) return;
            const cardId = this.getAttribute('data-id');
            if (activeUniversityCard && activeUniversityCard !== this) {
                activeUniversityCard.classList.remove('active');
            }
            this.classList.toggle('active');
            activeUniversityCard = this.classList.contains('active') ? this : null;
        });
    });
}

function displayProgramsTable(programs = programsData) {
    const tableContainer = document.querySelector('.table-container');
    if (!tableContainer) return;

    const tableHeader = tableContainer.querySelector('.table-header');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(tableHeader);

    programs.forEach(program => {
        const row = document.createElement('div');
        row.className = 'table-row';
        row.innerHTML = `
            <div class="table-cell">${program.city}</div>
            <div class="table-cell">${program.program}</div>
            <div class="table-cell">
                <span class="degree-badge ${program.degree === 'بكالوريوس' ? 'bachelor' :
                program.degree === 'ماجستير' ? 'master' :
                    program.degree === 'دكتوراه' ? 'phd' : 'diploma'}">
                    ${program.degree}
                </span>
            </div>
            <div class="table-cell">
                <span class="language-badge ${program.language === 'عربي' ? 'arabic' :
                program.language === 'صيني' ? 'english' : 'english'}">
                    ${program.language}
                </span>
            </div>
            <div class="table-cell">${program.scholarship}</div>
            <div class="table-cell">${program.deadline}</div>
            <div class="table-cell">
                <button class="details-btn-table" onclick="showProgramDetails(${program.id})">
                    <i class="fas fa-info-circle"></i>
                    تفاصيل
                </button>
            </div>
            <div class="table-cell">
                <button class="apply-btn-table" onclick="applyForProgram(${program.id})">
                    <i class="fas fa-paper-plane"></i>
                    تقديم
                </button>
            </div>
        `;
        tableContainer.appendChild(row);
    });
}

function showProgramDetailsOld(programId) {
    const program = programsData.find(prog => prog.id === programId);
    if (!program) return;
    alert(`تفاصيل البرنامج: ${program.program}\n\n${program.details}`);
}

// تعديل دالة applyForUniversity
function applyForUniversity(universityId) {
    // التحقق من تسجيل الدخول أولاً
    checkApplyButtonStatus().then(() => {
        const applyButtons = document.querySelectorAll('.apply-btn-table, .apply-btn-single, .modal-apply-btn');
        const isButtonDisabled = applyButtons[0]?.style.opacity === '0.5';

        if (isButtonDisabled) {
            handleUnauthorizedApply(new Event('click'));
            return;
        }

        // إذا كان مسجلاً، تابع العملية العادية
        const university = universitiesData.find(uni => uni.id === universityId);
        if (!university) return;
        openApplicationModal(universityId);
    });
}

// تعديل دالة applyForProgram
function applyForProgram(programId) {
    // التحقق من تسجيل الدخول أولاً
    checkApplyButtonStatus().then(() => {
        const applyButtons = document.querySelectorAll('.apply-btn-table, .apply-btn-single, .modal-apply-btn');
        const isButtonDisabled = applyButtons[0]?.style.opacity === '0.5';

        if (isButtonDisabled) {
            handleUnauthorizedApply(new Event('click'));
            return;
        }

        // إذا كان مسجلاً، تابع العملية العادية
        const program = programsData.find(prog => prog.id === programId);
        if (!program) {
            console.error('البرنامج غير موجود:', programId);
            return;
        }

        console.log('فتح نافذة التقديم للبرنامج:', program.program);
        openApplicationModal(programId);
    });
}

// ========== نظام التقديم الكامل (من grants.js) ==========

// سابعاً: تحديث دالة إعداد النظام
function setupApplicationSystem() {
    setupPhotoUpload();
    setupNationalityStates();
    setupPassportUpload();
    setupCertificateUpload();
    setupSpecializations();
    setupDocuments();
    setupReviewEventListeners();
    setupApplicationEventListeners();
    setupRealTimeValidation(); // إضافة التحقق الفوري
    setupSupportDocuments(); // إضافة نظام المستندات الداعمة
    setupInputRestrictions();
    setupFileSizeValidation();
}
function addValidationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .invalid-field {
            border-color: #e74c3c !important;
            background-color: #ffeaea !important;
        }
        
        .invalid-field:focus {
            box-shadow: 0 0 5px rgba(231, 76, 60, 0.5) !important;
        }
        
        .form-group:has(.invalid-field) label {
            color: #e74c3c !important;
        }
    `;
    document.head.appendChild(style);
}
function validateFieldType(field) {
    const value = field.value.trim();
    const fieldType = field.type; // نستخدم type الأساسي فقط

    switch (fieldType) {
        case 'text':
        case 'textarea':
            // نص عربي وإنجليزي - بدون أرقام أو رموز خاصة
            return /^[\u0600-\u06FFA-Za-z\s]{2,}$/.test(value);

        case 'email':
            if (value === '') return true;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        case 'number':
        case 'tel':
            return /^\d+$/.test(value);

        case 'date':
            return value !== '';

        default:
            return value !== '';
    }
}
// 1. تحسين دالة التحقق من الحقول المطلوبة
function validateRequiredFields(tabName) {
    const tabForm = document.getElementById(tabName + 'Form');
    if (!tabForm) return true;

    const requiredFields = tabForm.querySelectorAll('[required]');
    const invalidFields = [];

    requiredFields.forEach(field => {
        let isValid = true;

        // التحقق من عدم الفراغ
        if (!field.value.trim()) {
            isValid = false;
        }
        // التحقق من نوع البيانات
        else if (!validateFieldType(field)) {
            isValid = false;
        }

        if (!isValid) {
            invalidFields.push(field);
            field.classList.add('invalid-field');
        } else {
            field.classList.remove('invalid-field');
        }
    });

    if (invalidFields.length > 0) {
        showValidationError(invalidFields);
        invalidFields[0].focus();
        return false;
    }

    return true;
}

// ثالثاً: دالة لعرض رسائل الخطأ
function showValidationError(invalidFields) {
    const fieldMessages = invalidFields.map(field => {
        const fieldType = field.type;
        const label = field.closest('.form-group')?.querySelector('label');
        const fieldName = label ? label.textContent : 'هذا الحقل';

        let message = fieldName + ': ';

        if (!field.value.trim()) {
            message += 'مطلوب';
        } else {
            switch (fieldType) {
                case 'text':
                case 'textarea':
                    message += 'يجب أن يحتوي على نص عربي أو إنجليزي فقط (بدون أرقام أو رموز)';
                    break;
                case 'email':
                    message += 'بريد إلكتروني غير صحيح';
                    break;
                case 'number':
                case 'tel':
                    message += 'يجب أن يحتوي على أرقام فقط';
                    break;
                case 'date':
                    message += 'تاريخ غير صحيح';
                    break;
                default:
                    message += 'قيمة غير صحيحة';
            }
        }

        return message;
    });

    const message = `يرجى تصحيح الأخطاء التالية:\n\n${fieldMessages.join('\n')}`;
    alert(message);
}
function setupInputRestrictions() {
    // جميع حقول النص تقبل العربي والإنجليزي
    const textFields = document.querySelectorAll('input[type="text"], textarea');
    textFields.forEach(field => {
        field.addEventListener('input', function (e) {
            // إزالة أي شيء غير عربي/إنجليزي أو مسافات
            this.value = this.value.replace(/[^\u0600-\u06FFA-Za-z\s]/g, '');
        });
    });

    // منع النص في حقول الأرقام
    const numberFields = document.querySelectorAll('input[type="number"], input[type="tel"]');
    numberFields.forEach(field => {
        field.addEventListener('input', function (e) {
            this.value = this.value.replace(/\D/g, '');
        });
    });
}
function setupApplicationEventListeners() {
    if (applicationTabs) {
        applicationTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');
                switchApplicationTab(tabName);
            });
        });
    }

    document.querySelectorAll('#applicationModal form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('هذه مجرد واجهة عرض وليست وظيفة حقيقية');
        });
    });
}
function enablePersonalEditing() {
    enableEditing('personal');
}

function enableFamilyEditing() {
    enableEditing('family');
}

function enableAcademicEditing() {
    enableEditing('academic');
}

function enableDocumentsEditing() {
    enableEditing('documents');
}
// فتح نافذة التقديم
function openApplicationModal(grantId) {
    currentGrantId = grantId;
    if (applicationModal) {
        applicationModal.style.display = 'flex';
        switchApplicationTab('personal');

        // تفعيل جميع التبويبات ما عدا المراجعة
        const allTabs = document.querySelectorAll('.application-tab');
        allTabs.forEach(tab => {
            const tabName = tab.getAttribute('data-tab');
            if (tabName === 'review') {
                // تبويب المراجعة فقط يبقى معطلاً
                tab.classList.add('disabled');
                tab.style.pointerEvents = 'none';
                tab.style.opacity = '0.5';
            } else {
                // جميع التبويبات الأخرى مفعلة
                tab.classList.remove('disabled');
                tab.style.pointerEvents = 'auto';
                tab.style.opacity = '1';
            }
        });
    }
}

// إغلاق نافذة التقديم
function closeApplicationModal() {
    if (applicationModal) {
        applicationModal.style.display = 'none';
        currentGrantId = null;
    }
}

// تبديل تبويبات التقديم
function switchApplicationTab(tabName) {
    const targetTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (targetTab && targetTab.classList.contains('disabled')) {
        alert('يرجى إكمال جميع التبويبات أولاً');
        return;
    }

    if (applicationTabs) {
        applicationTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-tab') === tabName) {
                tab.classList.add('active');
            }
        });
    }

    if (applicationForms) {
        applicationForms.forEach(form => {
            form.classList.remove('active');
            if (form.id === tabName + 'Form') {
                form.classList.add('active');
            }
        });
    }

    if (tabName === 'review') {
        setTimeout(updateReviewTab, 100);
    }
}

// ========== دوال رفع الصور والملفات ==========

function setupPhotoUpload() {
    const photoInput = document.getElementById('photoInput');
    const photoPlaceholder = document.getElementById('photoPlaceholder');
    const photoPreview = document.getElementById('photoPreview');
    const deletePhoto = document.getElementById('deletePhoto');

    if (photoPlaceholder) {
        photoPlaceholder.addEventListener('click', () => {
            if (photoInput) photoInput.click();
        });
    }

    if (photoInput) {
        photoInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    if (photoPreview) {
                        photoPreview.src = e.target.result;
                        photoPreview.style.display = 'block';
                    }
                    if (photoPlaceholder) photoPlaceholder.style.display = 'none';
                    if (deletePhoto) deletePhoto.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    }

    if (deletePhoto) {
        deletePhoto.addEventListener('click', function () {
            if (photoInput) photoInput.value = '';
            if (photoPreview) photoPreview.style.display = 'none';
            if (photoPlaceholder) photoPlaceholder.style.display = 'flex';
            if (deletePhoto) deletePhoto.style.display = 'none';
        });
    }
}

function setupNationalityStates() {
    const nationalitySelect = document.getElementById('nationality');
    const stateSelect = document.getElementById('state');
    const countryCodeSelect = document.getElementById('countryCode');

    if (nationalitySelect && stateSelect) {
        nationalitySelect.addEventListener('change', function () {
            const country = this.value;
            stateSelect.innerHTML = `<option value="">اختر الولاية</option>`;

            if (country && countries[country]) {
                countries[country].forEach(state => {
                    const option = document.createElement('option');
                    option.value = state;
                    option.textContent = state;
                    stateSelect.appendChild(option);
                });
            }
            updateCountryCode(country);
        });
    }
}

function updateCountryCode(country) {
    const countryCodeSelect = document.getElementById('countryCode');
    const codes = {
        'yemen': '+967',
        'saudi': '+966',
        'egypt': '+20'
    };

    if (countryCodeSelect && codes[country]) {
        countryCodeSelect.value = codes[country];
    }
}

function setupPassportUpload() {
    // جواز الأب
    const fatherPassportInput = document.getElementById('fatherPassportInput');
    const fatherPassportPlaceholder = document.getElementById('fatherPassportPlaceholder');
    const fatherPassportPreview = document.getElementById('fatherPassportPreview');
    const fatherDeletePassport = document.getElementById('fatherDeletePassport');

    if (fatherPassportPlaceholder) {
        fatherPassportPlaceholder.addEventListener('click', () => {
            if (fatherPassportInput) fatherPassportInput.click();
        });
    }

    if (fatherPassportInput) {
        fatherPassportInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    if (fatherPassportPreview) {
                        fatherPassportPreview.src = e.target.result;
                        fatherPassportPreview.style.display = 'block';
                    }
                    if (fatherPassportPlaceholder) fatherPassportPlaceholder.style.display = 'none';
                    if (fatherDeletePassport) fatherDeletePassport.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    }

    if (fatherDeletePassport) {
        fatherDeletePassport.addEventListener('click', function () {
            if (fatherPassportInput) fatherPassportInput.value = '';
            if (fatherPassportPreview) fatherPassportPreview.style.display = 'none';
            if (fatherPassportPlaceholder) fatherPassportPlaceholder.style.display = 'flex';
            if (fatherDeletePassport) fatherDeletePassport.style.display = 'none';
        });
    }

    // جواز الأم
    const motherPassportInput = document.getElementById('motherPassportInput');
    const motherPassportPlaceholder = document.getElementById('motherPassportPlaceholder');
    const motherPassportPreview = document.getElementById('motherPassportPreview');
    const motherDeletePassport = document.getElementById('motherDeletePassport');

    if (motherPassportPlaceholder) {
        motherPassportPlaceholder.addEventListener('click', () => {
            if (motherPassportInput) motherPassportInput.click();
        });
    }

    if (motherPassportInput) {
        motherPassportInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    if (motherPassportPreview) {
                        motherPassportPreview.src = e.target.result;
                        motherPassportPreview.style.display = 'block';
                    }
                    if (motherPassportPlaceholder) motherPassportPlaceholder.style.display = 'none';
                    if (motherDeletePassport) motherDeletePassport.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    }

    if (motherDeletePassport) {
        motherDeletePassport.addEventListener('click', function () {
            if (motherPassportInput) motherPassportInput.value = '';
            if (motherPassportPreview) motherPassportPreview.style.display = 'none';
            if (motherPassportPlaceholder) motherPassportPlaceholder.style.display = 'flex';
            if (motherDeletePassport) motherDeletePassport.style.display = 'none';
        });
    }

}
function setupFileWithNameDisplay(inputId, placeholderId, previewId, deleteId, containerId) {
    const fileInput = document.getElementById(inputId);
    const filePlaceholder = document.getElementById(placeholderId);
    const filePreview = document.getElementById(previewId);
    const fileDelete = document.getElementById(deleteId);
    const fileContainer = document.getElementById(containerId);

    if (!fileInput || !filePlaceholder) return;

    // إزالة أي event listeners سابقة لمنع التكرار
    filePlaceholder.replaceWith(filePlaceholder.cloneNode(true));
    const newPlaceholder = document.getElementById(placeholderId);

    newPlaceholder.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                // عرض الصورة
                const reader = new FileReader();
                reader.onload = function (e) {
                    if (filePreview) {
                        filePreview.src = e.target.result;
                        filePreview.style.display = 'block';
                    }
                    if (newPlaceholder) newPlaceholder.style.display = 'none';
                }
                reader.readAsDataURL(file);
            } else {
                // عرض اسم الملف للملفات الأخرى
                if (filePreview) filePreview.style.display = 'none';
                if (newPlaceholder) {
                    newPlaceholder.style.display = 'flex';
                    newPlaceholder.innerHTML = `
                        <i class="fas fa-file-pdf" style="color: #e74c3c; margin-bottom: 8px; font-size: 24px;"></i>
                        <span style="font-size: 11px; text-align: center; line-height: 1.3; color: #666;">
                            ${file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name}
                        </span>
                    `;
                }
            }

            if (fileDelete) fileDelete.style.display = 'block';
            if (fileContainer) fileContainer.classList.add('has-file');
        }
    });

    if (fileDelete) {
        fileDelete.addEventListener('click', function (e) {
            e.stopPropagation();
            if (fileInput) fileInput.value = '';
            if (filePreview) filePreview.style.display = 'none';
            if (newPlaceholder) {
                newPlaceholder.style.display = 'flex';
                newPlaceholder.innerHTML = `
                    <i class="fas fa-file-certificate"></i>
                    <span>زر رفع ملف</span>
                `;
            }
            if (fileDelete) fileDelete.style.display = 'none';
            if (fileContainer) fileContainer.classList.remove('has-file');
        });
    }
}


function setupCertificateUpload() {
    // شهادة الثانوية
    const schoolCertificateInput = document.getElementById('schoolCertificateInput');
    const schoolCertificatePlaceholder = document.getElementById('schoolCertificatePlaceholder');
    const schoolCertificatePreview = document.getElementById('schoolCertificatePreview');
    const schoolDeleteCertificate = document.getElementById('schoolDeleteCertificate');
    setupFileWithNameDisplay('schoolCertificateInput', 'schoolCertificatePlaceholder', 'schoolCertificatePreview', 'schoolDeleteCertificate', 'schoolCertificateContainer');
    setupFileWithNameDisplay('universityCertificateInput', 'universityCertificatePlaceholder', 'universityCertificatePreview', 'universityDeleteCertificate', 'universityCertificateContainer');
    setupFileWithNameDisplay('schoolTranscriptInput', 'schoolTranscriptPlaceholder', 'schoolTranscriptPreview', 'schoolDeleteTranscript', 'schoolTranscriptContainer');
    setupFileWithNameDisplay('universityTranscriptInput', 'universityTranscriptPlaceholder', 'universityTranscriptPreview', 'universityDeleteTranscript', 'universityTranscriptContainer');
    if (schoolCertificatePlaceholder) {
        schoolCertificatePlaceholder.addEventListener('click', () => {
            if (schoolCertificateInput) schoolCertificateInput.click();
        });
    }

    if (schoolCertificateInput) {
        schoolCertificateInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    if (schoolCertificatePreview) {
                        schoolCertificatePreview.src = e.target.result;
                        schoolCertificatePreview.style.display = 'block';
                    }
                    if (schoolCertificatePlaceholder) schoolCertificatePlaceholder.style.display = 'none';
                    if (schoolDeleteCertificate) schoolDeleteCertificate.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    }

    if (schoolDeleteCertificate) {
        schoolDeleteCertificate.addEventListener('click', function () {
            if (schoolCertificateInput) schoolCertificateInput.value = '';
            if (schoolCertificatePreview) schoolCertificatePreview.style.display = 'none';
            if (schoolCertificatePlaceholder) schoolCertificatePlaceholder.style.display = 'flex';
            if (schoolDeleteCertificate) schoolDeleteCertificate.style.display = 'none';
        });
    }

    // شهادة الجامعة
    const universityCertificateInput = document.getElementById('universityCertificateInput');
    const universityCertificatePlaceholder = document.getElementById('universityCertificatePlaceholder');
    const universityCertificatePreview = document.getElementById('universityCertificatePreview');
    const universityDeleteCertificate = document.getElementById('universityDeleteCertificate');

    if (universityCertificatePlaceholder) {
        universityCertificatePlaceholder.addEventListener('click', () => {
            if (universityCertificateInput) universityCertificateInput.click();
        });
    }

    if (universityCertificateInput) {
        universityCertificateInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    if (universityCertificatePreview) {
                        universityCertificatePreview.src = e.target.result;
                        universityCertificatePreview.style.display = 'block';
                    }
                    if (universityCertificatePlaceholder) universityCertificatePlaceholder.style.display = 'none';
                    if (universityDeleteCertificate) universityDeleteCertificate.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
    }

    if (universityDeleteCertificate) {
        universityDeleteCertificate.addEventListener('click', function () {
            if (universityCertificateInput) universityCertificateInput.value = '';
            if (universityCertificatePreview) universityCertificatePreview.style.display = 'none';
            if (universityCertificatePlaceholder) universityCertificatePlaceholder.style.display = 'flex';
            if (universityDeleteCertificate) universityDeleteCertificate.style.display = 'none';
        });
    }

}
// دالة جديدة لرفع ملفات بيان الدرجات
function setupTranscriptUpload(type, inputId, placeholderId, previewId, deleteId, containerId) {
    const transcriptInput = document.getElementById(inputId);
    const transcriptPlaceholder = document.getElementById(placeholderId);
    const transcriptPreview = document.getElementById(previewId);
    const transcriptDelete = document.getElementById(deleteId);
    const transcriptContainer = document.getElementById(containerId);

    if (transcriptPlaceholder) {
        transcriptPlaceholder.addEventListener('click', () => {
            if (transcriptInput) transcriptInput.click();
        });
    }

    if (transcriptInput) {
        transcriptInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                // إنشاء عنصر لعرض اسم الملف
                let fileNameElement = transcriptContainer.querySelector('.file-name-display');
                if (!fileNameElement) {
                    fileNameElement = document.createElement('div');
                    fileNameElement.className = 'file-name-display';
                    transcriptContainer.appendChild(fileNameElement);
                }

                if (file.type.startsWith('image/')) {
                    // إذا كان ملف صورة
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        if (transcriptPreview) {
                            transcriptPreview.src = e.target.result;
                            transcriptPreview.style.display = 'block';
                        }
                        if (fileNameElement) fileNameElement.style.display = 'none';
                    }
                    reader.readAsDataURL(file);
                } else if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
                    // إذا كان ملف PDF
                    if (transcriptPreview) transcriptPreview.style.display = 'none';
                    fileNameElement.style.display = 'block';
                    fileNameElement.textContent = file.name.length > 20 ?
                        file.name.substring(0, 20) + '...' : file.name;
                    fileNameElement.title = file.name;
                } else {
                    // للملفات الأخرى
                    if (transcriptPreview) transcriptPreview.style.display = 'none';
                    fileNameElement.style.display = 'block';
                    fileNameElement.textContent = file.name.length > 20 ?
                        file.name.substring(0, 20) + '...' : file.name;
                    fileNameElement.title = file.name;
                }

                if (transcriptPlaceholder) transcriptPlaceholder.style.display = 'none';
                if (transcriptDelete) transcriptDelete.style.display = 'block';
                if (transcriptContainer) transcriptContainer.classList.add('has-file');
            }
        });
    }

    if (transcriptDelete) {
        transcriptDelete.addEventListener('click', function () {
            if (transcriptInput) transcriptInput.value = '';
            if (transcriptPreview) transcriptPreview.style.display = 'none';
            if (transcriptPlaceholder) transcriptPlaceholder.style.display = 'flex';
            if (transcriptDelete) transcriptDelete.style.display = 'none';
            if (transcriptContainer) transcriptContainer.classList.remove('has-file');

            // إزالة عرض اسم الملف
            const fileNameElement = transcriptContainer.querySelector('.file-name-display');
            if (fileNameElement) {
                fileNameElement.style.display = 'none';
                fileNameElement.textContent = '';
            }
        });
    }
}

function setupSpecializations() {
    const specializationSelect = document.getElementById('specialization');
    const departmentSelect = document.getElementById('department');
    const academicDegreeSelect = document.getElementById('academicDegree');
    const higherEducationSection = document.getElementById('higherEducationSection');

    if (specializationSelect && departmentSelect) {
        specializationSelect.addEventListener('change', function () {
            const specialization = this.value;
            departmentSelect.innerHTML = `<option value="">اختر القسم</option>`;

            if (specialization && specializations[specialization]) {
                specializations[specialization].forEach(department => {
                    const option = document.createElement('option');
                    option.value = department;
                    option.textContent = department;
                    departmentSelect.appendChild(option);
                });
            }
        });
    }

    if (academicDegreeSelect && higherEducationSection) {
        academicDegreeSelect.addEventListener('change', function () {
            const degree = this.value;
            if (degree === 'ماجستير' || degree === 'دكتوراه') {
                higherEducationSection.style.display = 'block';
                document.querySelectorAll('#higherEducationSection input').forEach(input => {
                    input.required = true;
                });
            } else {
                higherEducationSection.style.display = 'none';
                document.querySelectorAll('#higherEducationSection input').forEach(input => {
                    input.required = false;
                });
            }
        });
    }
}

function setupDocuments() {
    const cvUploadContainer = document.getElementById('cvUploadContainer');
    const cvServiceBlock = document.getElementById('cvServiceBlock');
    const motivationUploadContainer = document.getElementById('motivationUploadContainer');
    const motivationServiceBlock = document.getElementById('motivationServiceBlock');


    setupFileUploads();
    setupVideoUpload();
}
// نظام المستندات الداعمة الديناميكية
// حالة البطاقات
let supportStack = [1]; // نبدأ بالبطاقة الأولى فقط

function setupSupportDocuments() {
    // إعداد البطاقات الثلاث
    setupFileUpload('supportFile1', 'supportFile1Input', 'supportFile1UploadBtn', 'supportFile1PreviewBox',
        'supportFile1ImagePreview', 'supportFile1FileNamePreview', 'supportFile1DeletePreview',
        'supportFile1EmptyState');

    setupFileUpload('supportFile2', 'supportFile2Input', 'supportFile2UploadBtn', 'supportFile2PreviewBox',
        'supportFile2ImagePreview', 'supportFile2FileNamePreview', 'supportFile2DeletePreview',
        'supportFile2EmptyState');

    setupFileUpload('supportFile3', 'supportFile3Input', 'supportFile3UploadBtn', 'supportFile3PreviewBox',
        'supportFile3ImagePreview', 'supportFile3FileNamePreview', 'supportFile3DeletePreview',
        'supportFile3EmptyState');

    // إضافة مستمعات لتتبع إضافة الملفات
    setupFileChangeListeners();

    // تحديث زر الإضافة
    updateAddButton();
}
function setupFileChangeListeners() {
    // تتبع البطاقة الأولى
    const fileInput1 = document.getElementById('supportFile1Input');
    if (fileInput1) {
        fileInput1.addEventListener('change', function (e) {
            if (e.target.files[0]) {
                updateAddButton();
            }
        });
    }

    // تتبع البطاقة الثانية
    const fileInput2 = document.getElementById('supportFile2Input');
    if (fileInput2) {
        fileInput2.addEventListener('change', function (e) {
            if (e.target.files[0]) {
                updateAddButton();
            }
        });
    }
}
function addSupportCard() {
    if (supportStack.length >= 3) return;

    // التحقق من أن البطاقة الحالية تحتوي على ملف
    const currentCardNumber = supportStack[supportStack.length - 1];
    const currentFileInput = document.getElementById(`supportFile${currentCardNumber}Input`);

    if (!currentFileInput || !currentFileInput.files[0]) {
        alert(`يرجى إضافة ملف في المستند الداعم (${currentCardNumber}) أولاً`);
        return;
    }

    const nextCardNumber = supportStack.length + 1;
    supportStack.push(nextCardNumber);

    const card = document.getElementById(`supportCard${nextCardNumber}`);
    if (card) {
        card.style.display = 'block';
        updateAddButton();
    }
}

function setupFilePreview(documentId, file) {
    const previewBox = document.getElementById(`${documentId}PreviewBox`);
    const imagePreview = document.getElementById(`${documentId}ImagePreview`);
    const fileNamePreview = document.getElementById(`${documentId}FileNamePreview`);
    const emptyState = document.getElementById(`${documentId}EmptyState`);
    const deletePreview = document.getElementById(`${documentId}DeletePreview`);

    if (file) {
        if (emptyState) emptyState.style.display = 'none';
        if (previewBox) previewBox.classList.add('has-file');
        if (deletePreview) deletePreview.style.display = 'flex';

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                if (imagePreview) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                }
                if (fileNamePreview) fileNamePreview.style.display = 'none';
            }
            reader.readAsDataURL(file);
        } else {
            if (imagePreview) imagePreview.style.display = 'none';
            if (fileNamePreview) {
                fileNamePreview.style.display = 'block';
                fileNamePreview.textContent = file.name.length > 20 ?
                    file.name.substring(0, 20) + '...' : file.name;
            }
        }
    }
}
function removeSupportCard(cardNumber) {
    // الحذف تنازلي فقط - لا يمكن حذف إلا آخر بطاقة
    if (cardNumber !== supportStack[supportStack.length - 1]) {
        alert('يجب حذف البطاقات بالترتيب التنازلي. احذف البطاقة ' + supportStack[supportStack.length - 1] + ' أولاً.');
        return;
    }

    const card = document.getElementById(`supportCard${cardNumber}`);
    const fileInput = document.getElementById(`supportFile${cardNumber}Input`);
    const previewBox = document.getElementById(`supportFile${cardNumber}PreviewBox`);
    const deleteBtn = document.getElementById(`supportFile${cardNumber}DeletePreview`);
    const emptyState = document.getElementById(`supportFile${cardNumber}EmptyState`);

    if (card && fileInput) {
        // إعادة تعيين الحقول
        fileInput.value = '';
        if (previewBox) previewBox.classList.remove('has-file');
        if (deleteBtn) deleteBtn.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';

        // إخفاء البطاقة
        card.style.display = 'none';

        // إزالة من المكدس
        supportStack.pop();

        // تحديث زر الإضافة
        updateAddButton();
    }
}
function updateAddButton() {
    const addBtn = document.getElementById('addCardBtn');
    if (addBtn) {
        if (supportStack.length >= 3) {
            addBtn.disabled = true;
            addBtn.style.opacity = '0.5';
            addBtn.style.cursor = 'not-allowed';
        } else {
            addBtn.disabled = false;
            addBtn.style.opacity = '1';
            addBtn.style.cursor = 'pointer';
        }
    }
}





function setupFileUploads() {
    setupFileUpload('cv', 'cvInput', 'cvUploadBtn', 'cvPreviewBox', 'cvImagePreview', 'cvFileNamePreview', 'cvDeletePreview', 'cvEmptyState', 'cvNoOption');
    setupFileUpload('birthCertificate', 'birthCertificateInput', 'birthCertificateUploadBtn', 'birthCertificatePreviewBox', 'birthCertificateImagePreview', 'birthCertificateFileNamePreview', 'birthCertificateDeletePreview', 'birthCertificateEmptyState');
    setupFileUpload('schoolRecommendation', 'schoolRecommendationInput', 'schoolRecommendationUploadBtn', 'schoolRecommendationPreviewBox', 'schoolRecommendationImagePreview', 'schoolRecommendationFileNamePreview', 'schoolRecommendationDeletePreview', 'schoolRecommendationEmptyState');
    setupFileUpload('englishCertificate', 'englishCertificateInput', 'englishCertificateUploadBtn', 'englishCertificatePreviewBox', 'englishCertificateImagePreview', 'englishCertificateFileNamePreview', 'englishCertificateDeletePreview', 'englishCertificateEmptyState');
    setupFileUpload('criminalRecord', 'criminalRecordInput', 'criminalRecordUploadBtn', 'criminalRecordPreviewBox', 'criminalRecordImagePreview', 'criminalRecordFileNamePreview', 'criminalRecordDeletePreview', 'criminalRecordEmptyState');
    setupFileUpload('motivation', 'motivationInput', 'motivationUploadBtn', 'motivationPreviewBox', 'motivationImagePreview', 'motivationFileNamePreview', 'motivationDeletePreview', 'motivationEmptyState', 'motivationNoOption');
    setupFileUpload('passport', 'passportInput', 'passportUploadBtn', 'passportPreviewBox', 'passportImagePreview', 'passportFileNamePreview', 'passportDeletePreview', 'passportEmptyState');
    setupFileUpload('medicalCheck', 'medicalCheckInput', 'medicalCheckUploadBtn', 'medicalCheckPreviewBox', 'medicalCheckImagePreview', 'medicalCheckFileNamePreview', 'medicalCheckDeletePreview', 'medicalCheckEmptyState');
    setupFileUpload('bankStatement', 'bankStatementInput', 'bankStatementUploadBtn', 'bankStatementPreviewBox', 'bankStatementImagePreview', 'bankStatementFileNamePreview', 'bankStatementDeletePreview', 'bankStatementEmptyState');
    // setupFileUpload('introVideo', 'introVideoInput', 'introVideoUploadBtn', 'introVideoPreviewBox', 'introVideoImagePreview', 'introVideoFileNamePreview', 'introVideoDeletePreview', 'introVideoEmptyState');
    setupFileUpload('supportFile1', 'supportFile1Input', 'supportFile1UploadBtn', 'supportFile1PreviewBox', 'supportFile1ImagePreview', 'supportFile1FileNamePreview', 'supportFile1DeletePreview', 'supportFile1EmptyState');
    setupFileUpload('supportFile2', 'supportFile2Input', 'supportFile2UploadBtn', 'supportFile2PreviewBox', 'supportFile2ImagePreview', 'supportFile2FileNamePreview', 'supportFile2DeletePreview', 'supportFile2EmptyState');
    setupFileUpload('supportFile3', 'supportFile3Input', 'supportFile3UploadBtn', 'supportFile3PreviewBox', 'supportFile3ImagePreview', 'supportFile3FileNamePreview', 'supportFile3DeletePreview', 'supportFile3EmptyState');

}
// دالة خاصة للفيديو
function setupVideoUpload() {
    const videoInput = document.getElementById('introVideoInput');
    const videoPreview = document.getElementById('introVideoPreview');
    const videoFileName = document.getElementById('introVideoFileNamePreview');
    const videoEmptyState = document.getElementById('introVideoEmptyState');
    const videoDeleteBtn = document.getElementById('introVideoDeletePreview');
    const videoPreviewBox = document.getElementById('introVideoPreviewBox');
    const videoUploadBtn = document.getElementById('introVideoUploadBtn');

    if (!videoInput || !videoPreview) return;

    if (videoUploadBtn) {
        videoUploadBtn.addEventListener('click', () => {
            videoInput.click();
        });
    }

    videoInput.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('video/')) {
                // إذا كان فيديو
                const url = URL.createObjectURL(file);
                videoPreview.src = url;
                videoPreview.style.display = 'block';
                // إيقاف أي فيديو سابق
                videoPreview.pause();
                if (videoFileName) videoFileName.style.display = 'none';
            } else {
                // إذا كان ملف آخر
                if (videoPreview) {
                    videoPreview.src = '';
                    videoPreview.style.display = 'none';
                }
                if (videoFileName) {
                    videoFileName.style.display = 'block';
                    videoFileName.textContent = file.name.length > 20 ?
                        file.name.substring(0, 20) + '...' : file.name;
                }
            }

            if (videoEmptyState) videoEmptyState.style.display = 'none';
            if (videoDeleteBtn) videoDeleteBtn.style.display = 'flex';
            if (videoPreviewBox) videoPreviewBox.classList.add('has-file');
        }
    });

    if (videoDeleteBtn) {
        videoDeleteBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            // إيقاف الفيديو وإزالة المصدر
            if (videoPreview) {
                videoPreview.pause();
                videoPreview.src = '';
                videoPreview.style.display = 'none';
            }

            // إعادة تعيين المدخلات
            if (videoInput) videoInput.value = '';

            // إعادة تعيين عرض الاسم
            if (videoFileName) {
                videoFileName.style.display = 'none';
                videoFileName.textContent = '';
            }

            // إعادة عرض الحالة الفارغة
            if (videoEmptyState) videoEmptyState.style.display = 'block';

            // إخفاء زر الحذف
            if (videoDeleteBtn) videoDeleteBtn.style.display = 'none';

            // إزالة الكلاس النشط
            if (videoPreviewBox) videoPreviewBox.classList.remove('has-file');

            // تحرير الذاكرة من object URL
            if (videoPreview.src && videoPreview.src.startsWith('blob:')) {
                URL.revokeObjectURL(videoPreview.src);
            }
        });
    }
}

function setupFileUpload(type, inputId, btnId, previewBoxId, imagePreviewId, fileNamePreviewId, deletePreviewId, emptyStateId, noOptionId = null) {
    const fileInput = document.getElementById(inputId);
    const uploadBtn = document.getElementById(btnId);
    const previewBox = document.getElementById(previewBoxId);
    const imagePreview = document.getElementById(imagePreviewId);
    const fileNamePreview = document.getElementById(fileNamePreviewId);
    const deletePreview = document.getElementById(deletePreviewId);
    const emptyState = document.getElementById(emptyStateId);
    const noOption = noOptionId ? document.getElementById(noOptionId) : null;

    if (uploadBtn && fileInput) {
        uploadBtn.addEventListener('click', () => {
            fileInput.click();
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                if (emptyState) emptyState.style.display = 'none';
                if (previewBox) previewBox.classList.add('has-file');
                if (deletePreview) deletePreview.style.display = 'flex';

                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        if (imagePreview) {
                            imagePreview.src = e.target.result;
                            imagePreview.style.display = 'block';
                        }
                        if (fileNamePreview) fileNamePreview.style.display = 'none';
                    }
                    reader.readAsDataURL(file);
                } else {
                    if (imagePreview) imagePreview.style.display = 'none';
                    if (fileNamePreview) {
                        fileNamePreview.style.display = 'block';
                        fileNamePreview.textContent = file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name;
                    }
                }

                if (noOption) {
                    noOption.classList.add('faded');
                    noOption.querySelector('input[type="radio"]').disabled = true;
                }
            }
        });
    }

    if (deletePreview) {
        deletePreview.addEventListener('click', function () {
            if (fileInput) fileInput.value = '';
            if (previewBox) previewBox.classList.remove('has-file');
            if (emptyState) emptyState.style.display = 'block';
            if (imagePreview) imagePreview.style.display = 'none';
            if (fileNamePreview) fileNamePreview.style.display = 'none';
            if (deletePreview) deletePreview.style.display = 'none';

            if (noOption) {
                noOption.classList.remove('faded');
                noOption.querySelector('input[type="radio"]').disabled = false;
            }
        });
    }
    // إضافة مستمع لزر الحذف مع التحقق التنازلي
    if (deletePreviewId && type.startsWith('supportFile')) {
        const deleteBtn = document.getElementById(deletePreviewId);
        const cardNumber = parseInt(type.replace('supportFile', ''));

        if (deleteBtn && cardNumber > 1) {
            deleteBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                removeSupportCard(cardNumber);
            });
        }
    }
}

// ========== دوال الحفظ والتحكم ==========

function enableEditing(tabName = null) {
    isEditing = true;

    // إذا تم تحديد تبويب معين، نفعله فقط
    if (tabName) {
        const tabForm = document.getElementById(tabName + 'Form');
        if (tabForm) {
            // تفعيل الحقول في هذا التبويب فقط
            const inputs = tabForm.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.disabled = false;
                input.style.opacity = '1';
                input.style.cursor = 'text';
            });

            // تفعيل أزرار الحذف في هذا التبويب فقط
            const deleteButtons = tabForm.querySelectorAll('.delete-photo, .delete-passport, .delete-document, .delete-file-top');
            deleteButtons.forEach(button => {
                button.disabled = false;
                button.style.opacity = '1';
                button.style.cursor = 'pointer';
            });

            // تفعيل أزرار الرفع في هذا التبويب فقط
            const uploadButtons = tabForm.querySelectorAll('.upload-button');
            uploadButtons.forEach(button => {
                button.disabled = false;
                button.style.opacity = '1';
                button.style.cursor = 'pointer';
            });
        }
    } else {
        // السلوك القديم (للتوافق)
        enableDeleteButtons();
        const allInputs = document.querySelectorAll('#applicationModal input, #applicationModal select, #applicationModal textarea');
        allInputs.forEach(input => {
            input.disabled = false;
            input.style.opacity = '1';
            input.style.cursor = 'text';
        });
    }
    if (tabName) {
        const tabForm = document.getElementById(tabName + 'Form');
        if (tabForm) {
            // تفعيل جميع الحقول بما في ذلك أزرار الراديو
            const inputs = tabForm.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.disabled = false;
                input.style.opacity = '1';
                input.style.cursor = 'pointer'; // أو 'text' للحقول النصية
            });

            // تفعيل أزرار الحذف والرفع
            const deleteButtons = tabForm.querySelectorAll('.delete-photo, .delete-passport, .delete-document, .delete-file-top');
            deleteButtons.forEach(button => {
                button.disabled = false;
                button.style.opacity = '1';
                button.style.cursor = 'pointer';
            });

            const uploadButtons = tabForm.querySelectorAll('.upload-button');
            uploadButtons.forEach(button => {
                button.disabled = false;
                button.style.opacity = '1';
                button.style.cursor = 'pointer';
            });
        }
    }
}

function disableEditing(tabName = null) {
    // إذا تم تحديد تبويب معين، نعطله فقط
    if (tabName) {
        const tabForm = document.getElementById(tabName + 'Form');
        if (tabForm) {
            // تعطيل الحقول في هذا التبويب فقط
            const inputs = tabForm.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), select, textarea');
            inputs.forEach(input => {
                input.disabled = true;
                input.style.opacity = '0.6';
                input.style.cursor = 'not-allowed';
            });

            // تعطيل أزرار الحذف في هذا التبويب فقط
            const deleteButtons = tabForm.querySelectorAll('.delete-photo, .delete-passport, .delete-document, .delete-file-top');
            deleteButtons.forEach(button => {
                button.disabled = true;
                button.style.opacity = '0.5';
                button.style.cursor = 'not-allowed';
            });

            // تعطيل أزرار الرفع في هذا التبويب فقط
            const uploadButtons = tabForm.querySelectorAll('.upload-button');
            uploadButtons.forEach(button => {
                button.disabled = true;
                button.style.opacity = '0.5';
                button.style.cursor = 'not-allowed';
            });
        }
    } else {
        // السلوك القديم (للتوافق)
        isEditing = false;
        const allInputs = document.querySelectorAll('#applicationModal input:not([type="radio"]):not([type="checkbox"]), #applicationModal select, #applicationModal textarea');
        allInputs.forEach(input => {
            input.disabled = true;
            input.style.opacity = '0.6';
            input.style.cursor = 'not-allowed';
        });
    }
    if (tabName) {
        const tabForm = document.getElementById(tabName + 'Form');
        if (tabForm) {
            // تعطيل جميع الحقول بما في ذلك أزرار الراديو
            const inputs = tabForm.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.disabled = true;
                input.style.opacity = '0.6';
                input.style.cursor = 'not-allowed';
            });

            // تعطيل أزرار الحذف والرفع
            const deleteButtons = tabForm.querySelectorAll('.delete-photo, .delete-passport, .delete-document, .delete-file-top');
            deleteButtons.forEach(button => {
                button.disabled = true;
                button.style.opacity = '0.5';
                button.style.cursor = 'not-allowed';
            });

            const uploadButtons = tabForm.querySelectorAll('.upload-button');
            uploadButtons.forEach(button => {
                button.disabled = true;
                button.style.opacity = '0.5';
                button.style.cursor = 'not-allowed';
            });
        }
    }
}


function enableDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.delete-photo, .delete-passport, .delete-document');
    deleteButtons.forEach(button => {
        button.disabled = false;
        button.style.opacity = '1';
        button.style.cursor = 'pointer';
    });
}

function markTabAsCompleted(tabName) {
    const tab = document.querySelector(`[data-tab="${tabName}"]`);
    if (tab) tab.classList.add('completed');
}

function checkAllTabsCompleted() {
    const tabs = ['personal', 'family', 'academic', 'documents'];
    const allCompleted = tabs.every(tabName => {
        const tab = document.querySelector(`[data-tab="${tabName}"]`);
        return tab && tab.classList.contains('completed');
    });

    if (allCompleted) {
        enableReviewTab();
    }
}

function enableReviewTab() {
    const reviewTab = document.querySelector(`[data-tab="review"]`);
    if (reviewTab) {
        reviewTab.classList.remove('disabled');
        reviewTab.style.pointerEvents = 'auto';
        reviewTab.style.opacity = '1';
    }
}

function savePersonalInfo() {
    if (!validateRequiredFields('personal')) return;
    if (!validatePersonalForm()) return;

    markTabAsCompleted('personal');
    checkAllTabsCompleted();
    disableEditing('personal');
    updateReviewTab(); // تحديث المراجعة تلقائياً
    showSaveMessage();
}

function validatePersonalForm() {
    const requiredFields = ['photoInput', 'firstName', 'lastName', 'birthDate', 'gender', 'maritalStatus', 'email', 'phone', 'nationality', 'state', 'district', 'street', 'building', 'zipCode'];

    for (let field of requiredFields) {
        const element = document.getElementById(field);
        if (!element.value.trim()) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            element.focus();
            return false;
        }
    }
    return true;
}

function saveFamilyInfo() {
    if (!validateRequiredFields('family')) return;
    if (!validateFamilyForm()) return;

    markTabAsCompleted('family');
    checkAllTabsCompleted();
    disableEditing('family');
    updateReviewTab(); // تحديث المراجعة تلقائياً
    showSaveMessage();
}

function validateFamilyForm() {
    const requiredFields = [
        'fatherFirstName', 'fatherLastName', 'fatherNationality', 'fatherBirthDate', 'fatherPhone',
        'motherFirstName', 'motherLastName', 'motherNationality', 'motherBirthDate', 'motherPhone'
    ];

    for (let field of requiredFields) {
        const element = document.getElementById(field);
        if (!element.value.trim()) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            element.focus();
            return false;
        }
    }
    return true;
}

function saveAcademicInfo() {
    if (!validateRequiredFields('academic')) return;
    if (!validateAcademicForm()) return;

    markTabAsCompleted('academic');
    checkAllTabsCompleted();
    disableEditing('academic');
    updateReviewTab(); // تحديث المراجعة تلقائياً
    showSaveMessage();
}

function validateAcademicForm() {
    const requiredFields = [
        'schoolName', 'schoolGPA', 'schoolGraduationYear',
        'specialization', 'department', 'academicDegree', 'schoolCertificateInput', 'schoolTranscriptInput'
    ];

    const academicDegree = document.getElementById('academicDegree').value;
    if (academicDegree === 'master' || academicDegree === 'phd') {
        requiredFields.push(
            'universityName', 'facultyName', 'universitySpecialization',
            'universityGPA', 'enrollmentYear', 'universityGraduationYear', 'universityCertificateInput',
            'universityTranscriptInput'
        );
    }

    for (let field of requiredFields) {
        const element = document.getElementById(field);
        if (!element.value.trim()) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            element.focus();
            return false;
        }
    }
    return true;
}

function saveDocumentsInfo() {
    if (!validateRequiredFields('documents')) return;
    if (!validateDocumentsForm()) return;

    markTabAsCompleted('documents');
    checkAllTabsCompleted();
    disableEditing('documents');
    updateReviewTab(); // تحديث المراجعة تلقائياً
    showSaveMessage();
}

function validateDocumentsForm() {
    const requiredDocuments = [
        { id: 'passportInput', name: 'جواز سفر' },
        { id: 'medicalCheckInput', name: 'الفحص الطبي' },
        { id: 'criminalRecordInput', name: 'فيش وتشبية' },
        { id: 'cvInput', name: 'سيرة ذاتية' },
        { id: 'schoolRecommendationInput', name: 'التوصية' },
        { id: 'motivationInput', name: 'رسالة دافع' },
        { id: 'birthCertificateInput', name: 'ابليكشن فورم' },
        { id: 'englishCertificateInput', name: 'شهادة إنجليزية' },
        { id: 'introVideoInput', name: 'الفيديو التعريفي' },


    ];

    for (let doc of requiredDocuments) {
        const fileInput = document.getElementById(doc.id);
        if (fileInput && !fileInput.files[0]) {
            alert(`يرجى رفع ملف ${doc.name}`);
            return false;
        }
    }

    return true;
}

function showSaveMessage() {
    const saveMessage = document.getElementById('saveMessage');
    if (saveMessage) {
        saveMessage.style.display = 'block';
        setTimeout(() => {
            saveMessage.style.display = 'none';
        }, 3000);
    }
}

// ========== دوال المراجعة ==========
function setupReviewEventListeners() {
    const clickableTermsLabel = document.getElementById('clickableTermsLabel');
    if (clickableTermsLabel) {
        clickableTermsLabel.addEventListener('click', function (e) {
            if (e.target.type !== 'checkbox') {
                e.preventDefault();
                showTermsModal(e);
            }
        });
    }

    const closeTermsBtn = document.querySelector('#termsModal .close-modal');
    if (closeTermsBtn) {
        closeTermsBtn.addEventListener('click', closeTermsModal);
    }

    const agreeTermsBtn = document.querySelector('#termsModal .modal-apply-btn');
    if (agreeTermsBtn) {
        agreeTermsBtn.addEventListener('click', agreeToTerms);
    }

    const termsModal = document.getElementById('termsModal');
    if (termsModal) {
        termsModal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeTermsModal();
            }
        });
    }

    const agreeTerms = document.getElementById('agreeTerms');
    const confirmDocuments = document.getElementById('confirmDocuments');
    if (agreeTerms && confirmDocuments) {
        agreeTerms.addEventListener('change', updateReviewButtons);
        confirmDocuments.addEventListener('change', updateReviewButtons);
    }

    const savePdfBtn = document.getElementById('savePdfBtn');
    if (savePdfBtn) {
        savePdfBtn.addEventListener('click', generatePDF);
    }

    const finalSubmitBtn = document.getElementById('finalSubmitBtn');
    if (finalSubmitBtn) {
        finalSubmitBtn.addEventListener('click', async function () {
            const agreeTerms = document.getElementById('agreeTerms');
            const confirmDocuments = document.getElementById('confirmDocuments');

            if (!agreeTerms.checked || !confirmDocuments.checked) {
                alert('يجب الموافقة على الشروط والأحكام أولاً');
                return;
            }

            // التحقق من الحقول المطلوبة
            if (!validateAllTabs()) {
                alert('يرجى ملء جميع الحقول المطلوبة بشكل صحيح');
                return;
            }

            const currentLang = localStorage.getItem('currentLang') || 'ar';
            const confirmMessage = currentLang === 'ar'
                ? 'هل أنت متأكد من تقديم الطلب؟ لا يمكنك تعديل البيانات بعد التقديم.'
                : 'Are you sure you want to submit? You cannot modify data after submission.';

            if (confirm(confirmMessage)) {
                // تعطيل الزر أثناء المعالجة
                finalSubmitBtn.disabled = true;
                finalSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التقديم...';

                try {
                    // 1. جمع البيانات النصية
                    const applicationData = collectAllApplicationData();

                    // 2. إرسال البيانات النصية أولاً
                    const result = await submitApplicationToServer(applicationData);

                    if (result.success) {
                        console.log('✅ تم إنشاء الطلب، جاري رفع الملفات...');

                        // 3. رفع الملفات بعد نجاح إنشاء الطلب
                        const fileResults = await uploadApplicationFiles(result.application_id);
                        console.log('📊 نتائج رفع الملفات:', fileResults);

                        // 4. قفل النماذج وإظهار رسالة النجاح
                        lockAllFormsAfterSubmission();

                        alert('✅ تم تقديم طلبك بنجاح! سيتم مراجعته من قبل الفريق المختص.\n\nرقم الطلب: ' + result.application_id);

                        setTimeout(() => {
                            closeApplicationModal();
                            // إعادة تحميل الصفحة لتحديث البيانات
                            window.location.reload();
                        }, 3000);

                    } else {
                        alert('❌ فشل في تقديم الطلب: ' + result.message);
                    }

                } catch (error) {
                    console.error('❌ خطأ غير متوقع:', error);
                    alert('❌ حدث خطأ غير متوقع أثناء التقديم');
                } finally {
                    // إعادة تمكين الزر
                    finalSubmitBtn.disabled = false;
                    finalSubmitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> تقديم الطلب';
                }
            }
        });
    }
}

function updateReviewTab() {
    // المعلومات الشخصية
    updatePersonalReview();
    updateFamilyReview();
    updateAcademicReview();
    updateDocumentsReview();
    updateReviewButtons();
}
function updatePersonalReview() {
    // تحديث جميع الحقول الشخصية
    const fields = [
        { id: 'firstName', reviewId: 'reviewFirstName' },
        { id: 'middleName', reviewId: 'reviewMiddleName' },
        { id: 'lastName', reviewId: 'reviewLastName' },
        { id: 'nationality', reviewId: 'reviewNationality', isSelect: true },
        { id: 'state', reviewId: 'reviewState' },
        { id: 'district', reviewId: 'reviewDistrict' },
        { id: 'street', reviewId: 'reviewStreet' },
        { id: 'zipCode', reviewId: 'reviewZipCode' },
        { id: 'building', reviewId: 'reviewBuilding' },
        { id: 'countryCode', reviewId: 'reviewCountryCode', isSelect: true },
        { id: 'phone', reviewId: 'reviewPhone' },
        { id: 'email', reviewId: 'reviewEmail' },
        { id: 'birthDate', reviewId: 'reviewBirthDate' },
        { id: 'gender', reviewId: 'reviewGender', isSelect: true },
        { id: 'maritalStatus', reviewId: 'reviewMaritalStatus', isSelect: true }
    ];

    fields.forEach(field => {
        const element = document.getElementById(field.id);
        const reviewElement = document.getElementById(field.reviewId);
        if (element && reviewElement) {
            if (field.isSelect) {
                reviewElement.textContent = getSelectedText(field.id);
            } else {
                reviewElement.textContent = element.value || '---';
            }
        }
    });

    // تحديث الصورة
    const photoPreview = document.getElementById('photoPreview');
    const reviewPhoto = document.getElementById('reviewPhotoPreview');
    if (photoPreview && photoPreview.style.display === 'block' && reviewPhoto) {
        reviewPhoto.src = photoPreview.src;
        reviewPhoto.style.display = 'block';
    } else if (reviewPhoto) {
        reviewPhoto.style.display = 'none';
    }
}
function updateFamilyReview() {
    // تحديث بيانات الأب
    document.getElementById('reviewFatherFullName').textContent =
        `${document.getElementById('fatherFirstName').value || ''} ${document.getElementById('fatherMiddleName').value || ''} ${document.getElementById('fatherLastName').value || ''}`.trim() || '---';

    document.getElementById('reviewFatherNationality').textContent = getSelectedText('fatherNationality');
    document.getElementById('reviewFatherBirthDate').textContent = document.getElementById('fatherBirthDate').value || '---';
    document.getElementById('reviewFatherPhone').textContent = document.getElementById('fatherPhone').value || '---';
    document.getElementById('reviewFatherEmail').textContent = document.getElementById('fatherEmail').value || '---';

    // تحديث بيانات الأم
    document.getElementById('reviewMotherFullName').textContent =
        `${document.getElementById('motherFirstName').value || ''} ${document.getElementById('motherMiddleName').value || ''} ${document.getElementById('motherLastName').value || ''}`.trim() || '---';

    document.getElementById('reviewMotherNationality').textContent = getSelectedText('motherNationality');
    document.getElementById('reviewMotherBirthDate').textContent = document.getElementById('motherBirthDate').value || '---';
    document.getElementById('reviewMotherPhone').textContent = document.getElementById('motherPhone').value || '---';
    document.getElementById('reviewMotherEmail').textContent = document.getElementById('motherEmail').value || '---';
}
function updateAcademicReview() {
    // البيانات الثانوية
    document.getElementById('reviewSchoolName').textContent = document.getElementById('schoolName').value || '---';
    document.getElementById('reviewSchoolGPA').textContent = document.getElementById('schoolGPA').value ? document.getElementById('schoolGPA').value + '%' : '---';
    document.getElementById('reviewSchoolGraduationYear').textContent = document.getElementById('schoolGraduationYear').value || '---';

    // التخصصات
    document.getElementById('reviewSpecialization').textContent = getSelectedText('specialization');
    document.getElementById('reviewDepartment').textContent = getSelectedText('department');
    document.getElementById('reviewAcademicDegree').textContent = getSelectedText('academicDegree');

    // البيانات الجامعية (للماجستير/الدكتوراه)
    const academicDegree = document.getElementById('academicDegree');
    const higherEducationSection = document.getElementById('reviewHigherEducationSection');
    if (academicDegree && higherEducationSection) {
        const degreeValue = academicDegree.value;
        if (degreeValue === 'master' || degreeValue === 'phd') {
            higherEducationSection.style.display = 'block';
            document.getElementById('reviewUniversityName').textContent = document.getElementById('universityName').value || '---';
            document.getElementById('reviewFacultyName').textContent = document.getElementById('facultyName').value || '---';
            document.getElementById('reviewUniversitySpecialization').textContent = document.getElementById('universitySpecialization').value || '---';
            document.getElementById('reviewUniversityGPA').textContent = document.getElementById('universityGPA').value ? document.getElementById('universityGPA').value + '%' : '---';
            document.getElementById('reviewEnrollmentYear').textContent = document.getElementById('enrollmentYear').value || '---';
            document.getElementById('reviewUniversityGraduationYear').textContent = document.getElementById('universityGraduationYear').value || '---';
        } else {
            higherEducationSection.style.display = 'none';
        }
    }
}
function setupRealTimeValidation() {
    // إضافة التحقق أثناء الكتابة
    const allInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    allInputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            this.classList.remove('invalid-field');
        });
    });
}
function updateDocumentsReview() {

    const otherDocuments = [
        { input: 'passportInput', status: 'reviewPassportStatus' },
        { input: 'medicalCheckInput', status: 'reviewMedicalCheckStatus' },
        { input: 'birthCertificateInput', status: 'reviewBirthCertificateStatus' },
        { input: 'schoolRecommendationInput', status: 'reviewSchoolRecommendationStatus' },
        { input: 'englishCertificateInput', status: 'reviewEnglishCertificateStatus' },
        { input: 'criminalRecordInput', status: 'reviewCriminalRecordStatus' },
        { input: 'schoolCertificateInput', status: 'reviewSchoolCertificate' },
        { input: 'universityCertificateInput', status: 'reviewUniversityCertificate' },
        { input: 'schoolTranscriptInput', status: 'reviewSchoolTranscriptStatus' },
        { input: 'universityTranscriptInput', status: 'reviewUniversityTranscriptStatus' },
        { input: 'fatherPassportInput', status: 'reviewFatherPassport' },
        { input: 'motherPassportInput', status: 'reviewMotherPassport' },
        { input: 'cvInput', status: 'reviewCVStatus' },
        { input: 'motivationInput', status: 'reviewMotivationStatus' },
        { input: 'bankStatementInput', status: 'reviewBankStatementStatus' },
        { input: 'introVideoInput', status: 'reviewIntroVideoStatus' },
        { input: 'supportFile1Input', status: 'reviewSupportFile1Status' },
        { input: 'supportFile2Input', status: 'reviewSupportFile2Status' },
        { input: 'supportFile3Input', status: 'reviewSupportFile3Status' }
    ];

    otherDocuments.forEach(doc => {
        const fileInput = document.getElementById(doc.input);
        const statusElement = document.getElementById(doc.status);
        if (fileInput && statusElement) {
            if (fileInput.files[0]) {
                statusElement.textContent = '✓ مرفوع';
                statusElement.className = 'review-status uploaded';
            } else {
                statusElement.textContent = '✗ غير مرفوع';
                statusElement.className = 'review-status not-uploaded';
            }
        }
    });
    // التحكم في ظهور بطاقة بيان الدرجات الجامعية
    const academicDegree = document.getElementById('academicDegree');
    const universityTranscriptCard = document.getElementById('reviewUniversityTranscriptCard');
    if (academicDegree && universityTranscriptCard) {
        const degreeValue = academicDegree.value;
        if (degreeValue === 'master' || degreeValue === 'phd') {
            universityTranscriptCard.style.display = 'block';
        } else {
            universityTranscriptCard.style.display = 'none';
        }
    }

    otherDocuments.forEach(doc => {
        const fileInput = document.getElementById(doc.input);
        const statusElement = document.getElementById(doc.status);
        if (fileInput && statusElement) {
            if (fileInput.files[0]) {
                statusElement.textContent = '✓ مرفوع';
                statusElement.className = 'review-status uploaded';
            } else {
                statusElement.textContent = '✗ غير مرفوع';
                statusElement.className = 'review-status not-uploaded';
            }
        }
    });
}

function getSelectedText(selectId) {
    const select = document.getElementById(selectId);
    return select && select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : '---';
}

function updateReviewButtons() {
    const agreeTerms = document.getElementById('agreeTerms');
    const confirmDocuments = document.getElementById('confirmDocuments');
    const submitBtn = document.getElementById('finalSubmitBtn');
    const savePdfBtn = document.getElementById('savePdfBtn');

    const bothChecked = agreeTerms && confirmDocuments && agreeTerms.checked && confirmDocuments.checked;
    if (submitBtn) submitBtn.disabled = !bothChecked;
    if (savePdfBtn) savePdfBtn.disabled = !bothChecked;
}

function showTermsModal(event) {
    if (event) event.preventDefault();
    const termsModal = document.getElementById('termsModal');
    if (termsModal) termsModal.style.display = 'flex';
}

function closeTermsModal() {
    const termsModal = document.getElementById('termsModal');
    if (termsModal) termsModal.style.display = 'none';
}

function agreeToTerms() {
    const agreeTerms = document.getElementById('agreeTerms');
    if (agreeTerms) {
        agreeTerms.checked = true;
        closeTermsModal();
        updateReviewButtons();
    }
}

function generatePDF() {
    const agreeTerms = document.getElementById('agreeTerms');
    const confirmDocuments = document.getElementById('confirmDocuments');

    if (!agreeTerms.checked || !confirmDocuments.checked) {
        showCustomAlert('يجب الموافقة على الشروط أولاً لتحميل PDF', 'warning', 3000);
        return;
    }

    const currentLang = localStorage.getItem('currentLang') || 'ar';
    const loadingMessage = currentLang === 'ar'
        ? 'جاري إنشاء ملف PDF...'
        : 'Generating PDF file...';

    showCustomAlert(loadingMessage, 'info', 3000);

    try {
        // استخدام jsPDF إذا كان متاحاً
        if (window.jspdf && window.jspdf.jsPDF) {
            createAdvancedPDF();
        } else {
            // إذا لم تتحمل المكتبة، أنشئ PDF بسيط
            createSimplePDF();
        }
    } catch (error) {
        console.error('PDF generation error:', error);
        createSimplePDF();
    }
}
function createAdvancedPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const currentLang = localStorage.getItem('currentLang') || 'ar';
    const isRTL = currentLang === 'ar';

    // إعدادات المستند
    doc.setFont('helvetica');

    // العنوان
    doc.setFontSize(20);
    doc.setTextColor(41, 128, 185);
    doc.text(isRTL ? 'طلب الالتحاق بالمنحة الدراسية' : 'Scholarship Application Form', 105, 20, { align: 'center' });

    // معلومات الطالب
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // البيانات الشخصية
    doc.setFontSize(14);
    doc.setTextColor(52, 152, 219);
    doc.text(isRTL ? 'البيانات الشخصية' : 'Personal Information', 20, 40);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    // جمع البيانات من النموذج
    const studentData = [
        { label: isRTL ? 'الاسم:' : 'Name:', value: document.getElementById('reviewFirstName')?.textContent || '' },
        { label: isRTL ? 'البريد الإلكتروني:' : 'Email:', value: document.getElementById('reviewEmail')?.textContent || '' },
        { label: isRTL ? 'الهاتف:' : 'Phone:', value: document.getElementById('reviewPhone')?.textContent || '' },
        { label: isRTL ? 'الجنسية:' : 'Nationality:', value: document.getElementById('reviewNationality')?.textContent || '' }
    ];

    let yPosition = 50;
    studentData.forEach(item => {
        doc.text(`${item.label} ${item.value}`, 20, yPosition);
        yPosition += 7;
    });

    // البيانات الأكاديمية
    yPosition += 10;
    doc.setFontSize(14);
    doc.setTextColor(52, 152, 219);
    doc.text(isRTL ? 'البيانات الأكاديمية' : 'Academic Information', 20, yPosition);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    yPosition += 10;

    const academicData = [
        { label: isRTL ? 'المدرسة:' : 'School:', value: document.getElementById('reviewSchoolName')?.textContent || '' },
        { label: isRTL ? 'المعدل:' : 'GPA:', value: document.getElementById('reviewSchoolGPA')?.textContent || '' },
        { label: isRTL ? 'التخصص:' : 'Specialization:', value: document.getElementById('reviewSpecialization')?.textContent || '' }
    ];

    academicData.forEach(item => {
        doc.text(`${item.label} ${item.value}`, 20, yPosition);
        yPosition += 7;
    });

    // حفظ الملف
    const fileName = isRTL ? 'طلب_الالتحاق.pdf' : 'Application_Form.pdf';
    doc.save(fileName);

    showCustomAlert(
        isRTL ? 'تم تحميل ملف PDF بنجاح' : 'PDF file downloaded successfully',
        'success',
        3000
    );
}
function createSimplePDF() {
    const currentLang = localStorage.getItem('currentLang') || 'ar';
    const isRTL = currentLang === 'ar';

    // إنشاء محتوى نصي للـ PDF
    let pdfContent = isRTL ?
        `طلب الالتحاق بالمنحة الدراسية\n\nالبيانات الشخصية:\n` :
        `Scholarship Application Form\n\nPersonal Information:\n`;

    // جمع البيانات الأساسية
    const fields = [
        { id: 'reviewFirstName', label: isRTL ? 'الاسم: ' : 'Name: ' },
        { id: 'reviewEmail', label: isRTL ? 'البريد الإلكتروني: ' : 'Email: ' },
        { id: 'reviewPhone', label: isRTL ? 'الهاتف: ' : 'Phone: ' },
        { id: 'reviewNationality', label: isRTL ? 'الجنسية: ' : 'Nationality: ' }
    ];

    fields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            pdfContent += field.label + element.textContent + '\n';
        }
    });

    // إنشاء blob وتحويله لـ PDF
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = isRTL ? 'طلب_الالتحاق.pdf' : 'Application_Form.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showCustomAlert(
        isRTL ? 'تم تحميل ملف PDF بنجاح' : 'PDF file downloaded successfully',
        'success',
        3000
    );
}

// إغلاق النوافذ بالزر ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            if (modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
    }
});
// ========== تحميل الصفحة ==========

// في نهاية gra.js - عدل هذا الجزء:
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    setupEventListeners();
    setupApplicationSystem();
    addValidationStyles();
    manualEventCheck();

    // ✅ تحقق إضافي بعد تحميل المحتوى
    setTimeout(() => {
        console.log('=== INITIAL CHECK ===');
        checkApplyButtonStatus();

        // ✅ تحقق من الأزرار بعد 2 ثانية إضافية
        setTimeout(() => {
            console.log('=== SECOND CHECK ===');
            checkApplyButtonStatus();
            debugButtonEvents();
        }, 2000);
    }, 1000);
});
// أضف هذا للتحقق اليدوي من الأزرار
function manualEventCheck() {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('apply-btn-table') ||
            e.target.classList.contains('apply-btn-single')) {
            console.log('Manual click detected on:', e.target.className);
            console.log('Is disabled:', e.target.classList.contains('disabled-btn'));
        }
    });
}
// التحقق من حالة تسجيل الدخول لأزرار التقديم
async function checkApplyButtonStatus() {
    try {
        const response = await fetch('../php/session.php');
        const data = await response.json();

        // ✅ تأكد أن data.loggedIn موجود وليس null
        const isLoggedIn = data.loggedIn === true;
        console.log('Login status:', isLoggedIn); // للت debugging

        updateApplyButtons(isLoggedIn);
    } catch (error) {
        console.error('Error checking login status:', error);
        updateApplyButtons(false); // في حالة الخطأ، اعتبر غير مسجل
    }
}

// تحديث حالة أزرار التقديم
function updateApplyButtons(isLoggedIn) {
    const applyButtons = document.querySelectorAll('.apply-btn-table, .apply-btn-single, .modal-apply-btn');

    console.log('Updating buttons, isLoggedIn:', isLoggedIn);
    console.log('Found buttons:', applyButtons.length);

    applyButtons.forEach(button => {
        if (!isLoggedIn) {
            // ✅ إضافة كلاس CSS
            button.classList.add('disabled-btn');
            button.style.opacity = '0.5';
            button.style.cursor = 'not-allowed';
            button.setAttribute('title', 'يجب تسجيل الدخول أولاً');

            // ✅ إزالة جميع event listeners القديمة
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);

            // ✅ إضافة event listener جديدة للزر الجديد
            newButton.addEventListener('click', handleUnauthorizedApply);

        } else {
            // ✅ إزالة التعتيم
            button.classList.remove('disabled-btn');
            button.style.opacity = '1';
            button.style.cursor = 'pointer';
            button.removeAttribute('title');
        }
    });
}
function debugButtonEvents() {
    const buttons = document.querySelectorAll('.apply-btn-table, .apply-btn-single');
    console.log('=== DEBUG BUTTON EVENTS ===');
    buttons.forEach((btn, index) => {
        const events = getEventListeners(btn);
        console.log(`Button ${index}:`, {
            text: btn.textContent,
            hasClickEvents: events && events.click,
            isDisabled: btn.classList.contains('disabled-btn')
        });
    });
}

// معالجة النقر على زر التقديم عندما المستخدم غير مسجل
function handleUnauthorizedApply(event) {
    console.log('Button clicked - unauthorized user');
    event.preventDefault();
    event.stopPropagation();

    const currentLang = localStorage.getItem('currentLang') || 'ar';
    const message = currentLang === 'ar' ?
        'يجب تسجيل الدخول أولاً لتقديم الطلب' :
        'You must login first to apply';

    alert(message);

    // ✅ فتح نافذة تسجيل الدخول بأكثر من طريقة
    const loginModal = document.getElementById('loginModal');
    const loginBtn = document.querySelector('.login-btn');

    if (loginModal) {
        console.log('Opening login modal');
        loginModal.style.display = 'block';
    } else {
        console.log('Login modal not found');
    }

    if (loginBtn) {
        loginBtn.click();
    }
}

// دالة لقفل جميع النماذج بعد التقديم النهائي
function lockAllFormsAfterSubmission() {
    console.log('🔒 بدء قفل النماذج بأمان...');
    console.log('application_id الحالي:', application_id); // للتتبع

    try {
        // 1. قفل الحقول الأساسية فقط
        const disableSelectors = [
            'input:not([type="hidden"])',
            'select',
            'textarea',
            'button:not(.close-btn)'
        ];

        disableSelectors.forEach(selector => {
            const elements = document.querySelectorAll(`#applicationModal ${selector}`);
            elements.forEach(element => {
                try {
                    element.disabled = true;
                    element.style.opacity = '0.6';
                    element.style.cursor = 'not-allowed';
                } catch (e) {
                    // تجاهل الأخطاء الصغيرة
                }
            });
        });

        // 2. تحديث أزرار الحفظ بشكل آمن
        setTimeout(() => {
            try {
                const saveButtons = document.querySelectorAll('.save-btn, .edit-btn');
                saveButtons.forEach(btn => {
                    btn.innerHTML = '<i class="fas fa-check"></i> تم التقديم';
                    btn.disabled = true;
                });

                // 3. إظهار رسالة النجاح
                showCustomAlert('✅ تم تقديم طلبك بنجاح! رقم الطلب: ' + (application_id || 'غير معروف'), 'success', 5000);

            } catch (e) {
                console.log('⚠️ خطأ بسيط في الواجهة:', e.message);
            }
        }, 500);

        console.log('✅ تم قفل النماذج بنجاح');

    } catch (error) {
        console.error('❌ خطأ في قفل النماذج:', error);
        // لا تعيد رمي الخطأ - فقط سجله
    }
}

//////////////////////////////////////////
/////////////////////////////////////////

// ========== نظام رفع الملفات ==========

// تحويل الملف إلى Base64
function fileToBase64(file, callback) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// رفع ملف عبر API
async function uploadFile(application_id, file_type, file_input) {
    try {
        // التحقق من وجود الملف
        if (!file_input || !file_input.files[0]) {
            console.log(`➖ ${file_type}: لا يوجد ملف`);
            return { success: true, message: 'لا يوجد ملف' };
        }

        const file = file_input.files[0];
        const fileSizeMB = file.size / 1024 / 1024;

        // تحديد الحد الأقصى بناءً على نوع الملف
        const maxSizeMB = file_type === 'video' ? 50 : 4;

        // التحقق من حجم الملف قبل التحويل
        if (fileSizeMB > maxSizeMB) {
            const errorMessage = `حجم الملف كبير (${fileSizeMB.toFixed(2)}MB) - الحد الأقصى ${maxSizeMB}MB`;
            console.log(`❌ ${file_type}: ${errorMessage}`);
            return {
                success: false,
                message: errorMessage
            };
        }

        console.log(`📤 ${file_type}: جاري رفع ${file.name} (${fileSizeMB.toFixed(2)}MB)`);

        // تحويل الملف إلى Base64
        const file_data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(new Error(`فشل تحويل الملف: ${error}`));
            reader.readAsDataURL(file);
        });

        if (!file_data) {
            console.error(`❌ ${file_type}: فشل تحويل الملف إلى Base64`);
            return { success: false, message: 'فشل تحويل الملف' };
        }

        console.log(`📤 ${file_type}: تم التحويل، جاري الإرسال للخادم...`);

        // إرسال الملف للخادم
        const response = await fetch('../php/upload_handler.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'upload_file',
                application_id: application_id,
                file_type: file_type,
                file_data: file_data
            })
        });

        // التحقق من استجابة الخادم
        if (!response.ok) {
            throw new Error(`خطأ في الاستجابة: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        // تسجيل النتيجة
        if (result.success) {
            console.log(`✅ ${file_type}: تم الرفع بنجاح`);
        } else {
            console.log(`❌ ${file_type}: فشل الرفع - ${result.message}`);
        }

        return result;

    } catch (error) {
        console.error(`💥 ${file_type}: خطأ غير متوقع:`, error);
        return {
            success: false,
            message: `خطأ في الرفع: ${error.message}`
        };
    }
}
function setupFileSizeValidation() {
    const fileInputs = [
        'photoInput', 'passportInput', 'medicalCheckInput', 'birthCertificateInput',
        'schoolCertificateInput', 'schoolTranscriptInput', 'universityCertificateInput',
        'universityTranscriptInput', 'cvInput', 'motivationInput', 'schoolRecommendationInput',
        'englishCertificateInput', 'criminalRecordInput', 'bankStatementInput',
        'fatherPassportInput', 'motherPassportInput', 'introVideoInput',
        'supportFile1Input', 'supportFile2Input', 'supportFile3Input'
    ];

    fileInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('change', function () {
                const fileType = this.id === 'introVideoInput' ? 'video' : 'document';
                validateFileSize(this, fileType);
            });

            // إخفاء الرسالة عند إزالة الملف
            input.addEventListener('click', function () {
                if (!this.files[0]) {
                    hideFileSizeMessage(this);
                }
            });
        }
    });

    console.log('✅ تم إعداد التحقق من أحجام الملفات مع الرسائل الديناميكية');
}
function validateFileSize(fileInput, fileType) {
    if (!fileInput || !fileInput.files[0]) {
        hideFileSizeMessage(fileInput);
        return true;
    }

    const file = fileInput.files[0];
    const fileSizeMB = file.size / 1024 / 1024;
    const maxSizeMB = fileType === 'video' ? 50 : 4;

    if (fileSizeMB > maxSizeMB) {
        showFileSizeError(fileInput, `❌ حجم الملف كبير! الحد الأقصى ${maxSizeMB}MB (حجم الملف: ${fileSizeMB.toFixed(2)}MB)`);
        return false;
    } else {
        // ✅ الملف مناسب - إظهار رسالة نجاح
        showFileSizeSuccess(fileInput, `✅ حجم الملف مناسب (${fileSizeMB.toFixed(2)}MB)`);
        return true;
    }
}
function showFileSizeSuccess(fileInput, message) {
    // إزالة أي رسالة سابقة
    hideFileSizeMessage(fileInput);

    // إنشاء عنصر رسالة النجاح
    const successElement = document.createElement('div');
    successElement.className = 'file-size-success';
    successElement.style.cssText = `
        color: #27ae60;
        font-size: 12px;
        margin-top: 5px;
        padding: 8px;
        background: #eafaf1;
        border-radius: 5px;
        border: 1px solid #27ae60;
        text-align: center;
        font-weight: bold;
        animation: fadeIn 0.3s ease;
    `;
    successElement.textContent = message;

    // إدراج الرسالة بعد زر الرفع أو الحاوية
    const container = fileInput.closest('.file-upload-container') ||
        fileInput.closest('.document-upload') ||
        fileInput.closest('.upload-section') ||
        fileInput.parentNode;

    if (container) {
        container.appendChild(successElement);
    }

    // إخفاء الرسالة بعد 3 ثواني
    setTimeout(() => {
        hideFileSizeMessage(fileInput);
    }, 3000);
}

// إظهار رسالة الخطأ تحت زر الرفع
function showFileSizeError(fileInput, message) {
    // إزالة أي رسالة سابقة
    hideFileSizeMessage(fileInput);

    // إنشاء عنصر رسالة الخطأ
    const errorElement = document.createElement('div');
    errorElement.className = 'file-size-error';
    errorElement.style.cssText = `
        color: #e74c3c;
        font-size: 12px;
        margin-top: 5px;
        padding: 8px;
        background: #ffeaea;
        border-radius: 5px;
        border: 1px solid #e74c3c;
        text-align: center;
        font-weight: bold;
        animation: fadeIn 0.3s ease;
    `;

    // إضافة زر إزالة داخل رسالة الخطأ
    errorElement.innerHTML = `
        ${message}
        <br>
        <button type="button" class="remove-file-btn" style="
            margin-top: 5px;
            padding: 4px 8px;
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 11px;
        "
    `;

    // إدراج الرسالة بعد زر الرفع أو الحاوية
    const container = fileInput.closest('.file-upload-container') ||
        fileInput.closest('.document-upload') ||
        fileInput.closest('.upload-section') ||
        fileInput.parentNode;

    if (container) {
        container.appendChild(errorElement);

        // إضافة مستمع حدث لزر الإزالة
        const removeBtn = errorElement.querySelector('.remove-file-btn');
        removeBtn.addEventListener('click', function () {
            fileInput.value = ''; // مسح الملف
            hideFileSizeMessage(fileInput); // إخفاء الرسالة

            // إعادة تعيين أي معاينة للملف
            const preview = container.querySelector('.file-preview, .image-preview');
            if (preview) {
                preview.style.display = 'none';
            }

            // إعادة عرض الحالة الفارغة
            const placeholder = container.querySelector('.upload-placeholder, .empty-state');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        });
    }
}

// إخفاء رسالة الخطأ
function hideFileSizeError(fileInput) {
    const container = fileInput.closest('.file-upload-container') ||
        fileInput.closest('.document-upload') ||
        fileInput.parentNode;

    if (container) {
        const existingError = container.querySelector('.file-size-error');
        if (existingError) {
            existingError.remove();
        }

        // إعادة تمكين زر الرفع
        const uploadBtn = container.querySelector('.upload-button');
        if (uploadBtn) {
            uploadBtn.style.opacity = '1';
            uploadBtn.style.cursor = 'pointer';
        }
    }
}
function hideFileSizeMessage(fileInput) {
    const container = fileInput.closest('.file-upload-container') ||
        fileInput.closest('.document-upload') ||
        fileInput.closest('.upload-section') ||
        fileInput.parentNode;

    if (container) {
        // إزالة رسائل الخطأ
        const existingError = container.querySelector('.file-size-error');
        if (existingError) {
            existingError.remove();
        }

        // إزالة رسائل النجاح
        const existingSuccess = container.querySelector('.file-size-success');
        if (existingSuccess) {
            existingSuccess.remove();
        }

        // ⚠️ لا داعي لإعادة تمكين الزر - هو أصلاً مفعل
    }
}

// ========== دوال جمع البيانات ==========

// جمع البيانات الشخصية
function getPersonalData() {
    return {
        first_name: document.getElementById('firstName').value,
        middle_name: document.getElementById('middleName').value,
        last_name: document.getElementById('lastName').value,
        nationality: document.getElementById('nationality').value,
        state: document.getElementById('state').value,
        district: document.getElementById('district').value,
        street: document.getElementById('street').value,
        zip_code: document.getElementById('zipCode').value,
        building: document.getElementById('building').value,
        country_code: document.getElementById('countryCode').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        birth_date: document.getElementById('birthDate').value,
        gender: document.getElementById('gender').value,
        marital_status: document.getElementById('maritalStatus').value
    };
}

// جمع البيانات العائلية
function getFamilyData() {
    return {
        father_first_name: document.getElementById('fatherFirstName').value,
        father_middle_name: document.getElementById('fatherMiddleName').value,
        father_last_name: document.getElementById('fatherLastName').value,
        father_nationality: document.getElementById('fatherNationality').value,
        father_birth_date: document.getElementById('fatherBirthDate').value,
        father_phone: document.getElementById('fatherPhone').value,
        father_email: document.getElementById('fatherEmail').value,
        mother_first_name: document.getElementById('motherFirstName').value,
        mother_middle_name: document.getElementById('motherMiddleName').value,
        mother_last_name: document.getElementById('motherLastName').value,
        mother_nationality: document.getElementById('motherNationality').value,
        mother_birth_date: document.getElementById('motherBirthDate').value,
        mother_phone: document.getElementById('motherPhone').value,
        mother_email: document.getElementById('motherEmail').value
    };
}

// جمع البيانات الأكاديمية
function getAcademicData() {
    const academicDegreeSelect = document.getElementById('academicDegree');
    const academicDegree = academicDegreeSelect.value;

    const isHigherEducation = academicDegree === 'ماجستير' || academicDegree === 'دكتوراه';

    const academicData = {
        school_name: document.getElementById('schoolName').value,
        school_gpa: document.getElementById('schoolGPA').value,
        school_graduation_year: document.getElementById('schoolGraduationYear').value,
        specialization: document.getElementById('specialization').value,
        department: document.getElementById('department').value,
        academic_degree: academicDegree,
        university_name: isHigherEducation ? document.getElementById('universityName').value : '',
        faculty_name: isHigherEducation ? document.getElementById('facultyName').value : '',
        university_specialization: isHigherEducation ? document.getElementById('universitySpecialization').value : '',
        university_gpa: isHigherEducation ? document.getElementById('universityGPA').value : null,
        enrollment_year: isHigherEducation ? document.getElementById('enrollmentYear').value : null,
        university_graduation_year: isHigherEducation ? document.getElementById('universityGraduationYear').value : null
    };

    console.log('🔍 البيانات الأكاديمية المرسلة:', academicData);
    return academicData;
}

// جمع بيانات المستندات
function getDocumentsData() {
    return {
        // سيتم رفع الملفات مباشرة
    };
}

// جمع جميع البيانات
function collectAllApplicationData() {
    const data = {
        program_id: currentGrantId,
        personal: getPersonalData(),
        family: getFamilyData(),
        academic: getAcademicData(),
        documents: getDocumentsData()
    };

    // تحقق من البيانات قبل الإرسال
    console.log('🎯 البيانات المرسلة للخادم:', data);

    return data;
}
function debugAcademicData() {
    const academicData = getAcademicData();
    console.log('=== 🔍 تحقق من البيانات الأكاديمية قبل الإرسال ===');
    console.log('الدرجة العلمية:', academicData.academic_degree);
    console.log('التخصص:', academicData.specialization);
    console.log('جميع البيانات الأكاديمية:', academicData);

    return academicData;
}

// ========== نظام التقديم النهائي ==========

// إرسال الطلب للخادم
async function submitApplicationToServer(applicationData) {
    try {
        console.log('📤 جاري إرسال البيانات النصية...');

        const response = await fetch('../php/applications.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'submit_application',
                ...applicationData
            })
        });

        const result = await response.json();
        console.log('📥 نتيجة الإرسال:', result);

        // ⬇️ تأكد من تعيين application_id بشكل صحيح ⬇️
        if (result.success && result.application_id) {
            application_id = result.application_id; // ⬅️ هذا السطر مهم
            console.log('✅ تم تعيين application_id:', application_id);
        }

        return result;

    } catch (error) {
        console.error('❌ خطأ في الإرسال:', error);
        return { success: false, message: 'خطأ في الاتصال بالخادم' };
    }
}

// رفع ملفات الطلب
async function uploadApplicationFiles(application_id) {
    // ⬇️ تحقق أمان إضافي ⬇️
    if (!application_id) {
        console.error('❌ application_id غير معروف، جاري استخدام currentGrantId:', currentGrantId);
        application_id = currentGrantId || 1; // قيمة افتراضية آمنة
    }

    console.log('🔍 application_id المستخدم:', application_id);
    const fileUploads = [
        // المستندات الأساسية
        { type: 'photo', input: document.getElementById('photoInput') },
        { type: 'passport', input: document.getElementById('passportInput') },
        { type: 'medical', input: document.getElementById('medicalCheckInput') },
        { type: 'birth_certificate', input: document.getElementById('birthCertificateInput') },

        // المستندات الأكاديمية
        { type: 'school_certificate', input: document.getElementById('schoolCertificateInput') },
        { type: 'school_transcript', input: document.getElementById('schoolTranscriptInput') },
        { type: 'university_certificate', input: document.getElementById('universityCertificateInput') },
        { type: 'university_transcript', input: document.getElementById('universityTranscriptInput') },
        { type: 'english_certificate', input: document.getElementById('englishCertificateInput') },

        // المستندات الداعمة
        { type: 'cv', input: document.getElementById('cvInput') },
        { type: 'motivation', input: document.getElementById('motivationInput') },
        { type: 'recommendation', input: document.getElementById('schoolRecommendationInput') },

        // المستندات القانونية والمالية
        { type: 'criminal_record', input: document.getElementById('criminalRecordInput') },
        { type: 'bank_statement', input: document.getElementById('bankStatementInput') },

        // مستندات العائلة
        { type: 'father_passport', input: document.getElementById('fatherPassportInput') },
        { type: 'mother_passport', input: document.getElementById('motherPassportInput') },

        // وسائط متعددة
        { type: 'video', input: document.getElementById('introVideoInput') },

        // المستندات الداعمة الإضافية
        { type: 'support_file_1', input: document.getElementById('supportFile1Input') },
        { type: 'support_file_2', input: document.getElementById('supportFile2Input') },
        { type: 'support_file_3', input: document.getElementById('supportFile3Input') }
    ];

    const results = {};
    let successfulUploads = 0;
    let failedUploads = 0;

    console.log('🚀 بدء رفع الملفات بنظام محسن...');

    // رفع الملفات بشكل متتابع (Sequential) بدلاً من متوازي
    for (let i = 0; i < fileUploads.length; i++) {
        const fileUpload = fileUploads[i];

        if (fileUpload.input && fileUpload.input.files && fileUpload.input.files[0]) {
            const file = fileUpload.input.files[0];
            console.log(`📤 [${i + 1}/${fileUploads.length}] جاري رفع: ${fileUpload.type} - ${file.name}`);

            try {
                // إضافة تأخير بين الملفات لتجنب الازدحام
                if (i > 0) {
                    await new Promise(resolve => setTimeout(resolve, 500));
                }

                const result = await uploadFileWithRetry(application_id, fileUpload.type, fileUpload.input);
                results[fileUpload.type] = result;

                if (result && result.success) {
                    console.log(`✅ [${i + 1}/${fileUploads.length}] نجح: ${fileUpload.type}`);
                    successfulUploads++;
                } else {
                    console.log(`❌ [${i + 1}/${fileUploads.length}] فشل: ${fileUpload.type} - ${result?.message}`);
                    failedUploads++;

                    // محاولة إعادة الرفع مرة واحدة
                    console.log(`🔄 [${i + 1}/${fileUploads.length}] محاولة إعادة رفع: ${fileUpload.type}`);
                    const retryResult = await uploadFileWithRetry(application_id, fileUpload.type, fileUpload.input);
                    if (retryResult && retryResult.success) {
                        console.log(`✅ [إعادة] نجح: ${fileUpload.type}`);
                        successfulUploads++;
                        failedUploads--;
                        results[fileUpload.type] = retryResult;
                    }
                }
            } catch (error) {
                console.error(`💥 [${i + 1}/${fileUploads.length}] خطأ: ${fileUpload.type}`, error);
                results[fileUpload.type] = { success: false, message: error.message };
                failedUploads++;
            }
        } else {
            console.log(`➖ [${i + 1}/${fileUploads.length}] لا يوجد ملف: ${fileUpload.type}`);
            results[fileUpload.type] = { success: true, message: 'لا يوجد ملف' };
        }
    }

    console.log(`📊 النتيجة النهائية: ✅ ${successfulUploads} نجاح, ❌ ${failedUploads} فشل`);

    // عرض نتائج مفصلة
    if (failedUploads > 0) {
        const failedFiles = Object.entries(results)
            .filter(([_, result]) => !result.success)
            .map(([type, result]) => `${type}: ${result.message}`);

        console.log('📋 الملفات التي فشلت:', failedFiles);
    }

    return results;
}
// دالة محسنة مع إعادة المحاولة
async function uploadFileWithRetry(application_id, file_type, file_input, retryCount = 1) {
    for (let attempt = 1; attempt <= retryCount + 1; attempt++) {
        try {
            console.log(`   🔄 محاولة ${attempt} لـ ${file_type}`);
            const result = await uploadFile(application_id, file_type, file_input);

            if (result && result.success) {
                return result;
            }

            if (attempt <= retryCount) {
                console.log(`   ⏳ انتظار 1 ثانية قبل إعادة المحاولة...`);
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        } catch (error) {
            console.error(`   💥 محاولة ${attempt} فشلت:`, error);
            if (attempt > retryCount) {
                throw error;
            }
        }
    }

    return { success: false, message: 'فشل بعد جميع المحاولات' };
}
// التحقق من جميع التبويبات
function validateAllTabs() {
    const tabs = ['personal', 'family', 'academic'];

    for (const tab of tabs) {
        if (!validateTab(tab)) {
            // الانتقال للتبويب الذي به خطأ
            switchApplicationTab(tab);
            return false;
        }
    }

    return true;
}
// التحقق من تبويب معين
function validateTab(tabName) {
    const requiredFields = {
        personal: ['firstName', 'lastName', 'nationality', 'email', 'phone', 'birthDate', 'gender'],
        family: ['fatherFirstName', 'fatherLastName', 'fatherNationality', 'motherFirstName', 'motherLastName'],
        academic: ['schoolName', 'schoolGPA', 'schoolGraduationYear', 'specialization', 'academicDegree']
    };

    const fields = requiredFields[tabName] || [];

    for (const fieldId of fields) {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            field.focus();
            field.style.borderColor = '#e74c3c';
            return false;
        }
    }

    return true;
}

// ========== نظام معاينة الملفات المحسن ==========

// إعداد معاينة الصور
function setupImagePreview(inputId, previewId, placeholderId, deleteId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const placeholder = document.getElementById(placeholderId);
    const deleteBtn = document.getElementById(deleteId);

    if (input && preview) {
        input.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                    if (placeholder) placeholder.style.display = 'none';
                    if (deleteBtn) deleteBtn.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (deleteBtn) {
        deleteBtn.addEventListener('click', function () {
            if (input) input.value = '';
            if (preview) preview.style.display = 'none';
            if (placeholder) placeholder.style.display = 'block';
            if (deleteBtn) deleteBtn.style.display = 'none';
        });
    }
}
// تهيئة جميع معاينات الصور
function initializeImagePreviews() {
    setupImagePreview('photoInput', 'photoPreview', 'photoPlaceholder', 'deletePhoto');
    setupImagePreview('fatherPassportInput', 'fatherPassportPreview', 'fatherPassportPlaceholder', 'fatherDeletePassport');
    setupImagePreview('motherPassportInput', 'motherPassportPreview', 'motherPassportPlaceholder', 'motherDeletePassport');
}
// تحديث التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    initializeImagePreviews();
});
// ========== نظام تتبع الأخطاء التلقائي ==========

// دالة لتسجيل جميع نتائج الرفع
function logAllUploadResults(results) {
    console.log('=== 📊 نتائج رفع جميع الملفات ===');

    let successCount = 0;
    let failCount = 0;

    Object.entries(results).forEach(([fileType, result]) => {
        if (result.success) {
            console.log(`✅ ${fileType}: نجح`);
            successCount++;
        } else {
            console.log(`❌ ${fileType}: فشل - ${result.message}`);
            failCount++;
        }
    });

    console.log(`📈 الإجمالي: ${successCount} نجاح, ${failCount} فشل`);

    // حفظ النتائج في متغير عام للوصول لها لاحقاً
    window.lastUploadResults = results;
}

// تعديل دالة uploadApplicationFiles لتسجيل النتائج تلقائياً
const originalUploadFunction = uploadApplicationFiles;
uploadApplicationFiles = async function (application_id) {
    console.log('🚀 بدء رفع الملفات مع التتبع...');

    const results = await originalUploadFunction(application_id);

    // تسجيل النتائج تلقائياً
    logAllUploadResults(results);

    return results;
}

// كشف أخطاء الرفع التلقائي
window.addEventListener('error', function (e) {
    console.error('💥 خطأ عام:', e.error);
});

// إظهار النتائج المحفوظة (يمكن استدعاؤها من الكونسول لاحقاً)
window.showLastResults = function () {
    if (window.lastUploadResults) {
        logAllUploadResults(window.lastUploadResults);
    } else {
        console.log('❌ لا توجد نتائج سابقة');
    }
}

console.log('✅ تم تفعيل نظام تتبع الأخطاء التلقائي');