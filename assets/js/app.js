// ==========================================
// CẤU HÌNH KHO HỌC LIỆU & MA TRẬN NĂNG LỰC TOAN_C1-C6 (TOÁN LỚP 2)
// ==========================================
const TOPICS_CONFIG = [
    { id: 1, title: "1. Cấu tạo số", desc: "Đọc viết số, giá trị hàng, tách – gộp và ước lượng", icon: "🔢", color: "pink" },
    { id: 2, title: "2. Dãy số và phép so sánh", desc: "Số liền trước/sau, phép so sánh, sắp xếp và quy luật dãy số", icon: "🔢", color: "cyan" },
    { id: 3, title: "3. Phép cộng và trừ", desc: "Không nhớ, có nhớ, đặt tính, tên gọi thành phần", icon: "➕", color: "purple" },
    { id: 4, title: "4. Phép nhân và chia", desc: "Ý nghĩa phép nhân/chia, bảng nhân chia 2 và 5", icon: "✖️", color: "indigo" },
    { id: 5, title: "5. Hình học", desc: "Đường thẳng, hình phẳng, khối hình, xếp hình", icon: "📐", color: "amber" },
    { id: 6, title: "6. Đơn vị đo và thời gian", desc: "Độ dài, khối lượng, dung tích, giờ, lịch, tiền", icon: "⏰", color: "emerald" },
    { id: 7, title: "7. Tìm số chưa biết", desc: "Tìm x trong phép cộng, trừ, nhân, chia", icon: "❓", color: "violet" },
    { id: 8, title: "8. Quy luật nâng cao & IQ", desc: "Khoảng cách biến đổi, sơ đồ liên kết và chuỗi hình ảnh IQ", icon: "🔗", color: "cyan" },
    { id: 9, title: "9. Toán có lời văn", desc: "Thêm bớt, nhiều hơn ít hơn, giải 2 bước tính", icon: "📝", color: "rose" },
    { id: 10, title: "10. Thống kê và xác suất", desc: "Kiểm đếm, biểu đồ tranh, khả năng xảy ra", icon: "📊", color: "blue" },
    { id: 11, title: "11. Toán nâng cao", desc: "Tính nhanh, cấu tạo số, hình học và IQ nâng cao", icon: "🧠", color: "yellow" },
    { id: 12, title: "12. Vườn thơ toán học", desc: "50 bài thơ ngắn bao quát kiến thức Toán 2", icon: "🌷", color: "rose", poetryGarden: true }
];

const SUBTOPIC_PALETTES = [
    { card: "bg-pink-50/80 hover:bg-pink-100 border-pink-300 text-pink-800", num: "text-pink-600", badge: "bg-white text-pink-600 border-pink-200" },
    { card: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-800", num: "text-emerald-600", badge: "bg-white text-emerald-600 border-emerald-200" },
    { card: "bg-purple-50/80 hover:bg-purple-100 border-purple-300 text-purple-800", num: "text-purple-600", badge: "bg-white text-purple-600 border-purple-200" },
    { card: "bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-800", num: "text-amber-600", badge: "bg-white text-amber-600 border-amber-200" },
    { card: "bg-indigo-50/80 hover:bg-indigo-100 border-indigo-300 text-indigo-800", num: "text-indigo-600", badge: "bg-white text-indigo-600 border-indigo-200" },
    { card: "bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-800", num: "text-rose-600", badge: "bg-white text-rose-600 border-rose-200" }
];

// Lộ trình 24 tuần (Tỷ lệ Vàng 30/60) — mapping tới đúng chủ đề con (sub_id dạng "X.Y")
// Tuần 18 = Đấu trường thi Học kỳ I | Tuần 35 = Đấu trường thi Học kỳ II + Học sinh giỏi
const roadmapConfig = {
    1:  { name: "Tuần 1: Khởi Động Số Học", subIds: ["1.1", "1.2", "1.5"], desc: "Đọc viết số đến 100, cấu tạo số chục/đơn vị, so sánh lớn bé, điền số tia số, ước lượng số lượng trực quan.", icon: "🔟" },
    2:  { name: "Tuần 2: Phép Cộng Trừ Nhẩm", subIds: ["2.1", "2.6"], desc: "Cộng trừ không nhớ phạm vi 100. Đọc gọi tên thành phần phép tính: số hạng, tổng, số bị trừ, số trừ, hiệu.", icon: "➕" },
    3:  { name: "Tuần 3: Cộng Trừ Có Nhớ 20", subIds: ["2.2"], desc: "Các phép tính nhẩm có nhớ qua 10 trong phạm vi 20 (9, 8, 7 cộng một số; 11, 12, 13 trừ đi một số).", icon: "➕" },
    4:  { name: "Tuần 4: Độ Dài & Đường Thẳng", subIds: ["5.1", "4.1"], desc: "Làm quen Đề-xi-mét (dm), thực hành quy đổi cm-dm; nhận diện đường thẳng, đường cong, đoạn thẳng, ba điểm thẳng hàng.", icon: "📏" },
    5:  { name: "Tuần 5: Đặt Tính Cộng Trừ 100", subIds: ["2.3"], desc: "Đặt tính rồi tính cộng, trừ có nhớ phạm vi 100 (số có 2 chữ số với số có 1 hoặc 2 chữ số).", icon: "➕" },
    6:  { name: "Tuần 6: Khối Lượng & Khối Hình", subIds: ["5.2", "4.4"], desc: "Đại lượng Ki-lô-gam (kg), Lít (l), tính danh số thực tế; nhận diện khối lập phương, hộp chữ nhật, trụ, cầu.", icon: "🧊" },
    7:  { name: "Tuần 7: Đường Gấp Khúc & Hình", subIds: ["4.3", "4.2", "4.5"], desc: "Nhận dạng đếm hình tam giác, tứ giác; tính độ dài đường gấp khúc; xếp hình Tangram, gấp giấy.", icon: "📐" },
    8:  { name: "Tuần 8: Thế Giới Hàng Trăm", subIds: ["1.3", "1.4"], desc: "Các số trong phạm vi 1000 (đọc, viết, cấu tạo số trăm/chục/đơn vị, so sánh thứ tự lớn bé và tia số).", icon: "💯" },
    9:  { name: "Tuần 9: Tính Toán 1000 & Nhân Chia", subIds: ["2.4", "2.5", "3.1"], desc: "Cộng trừ không nhớ & có nhớ (1 lần) phạm vi 1000; ý nghĩa phép nhân (tổng bằng nhau), phép chia (chia đều).", icon: "✖️" },
    10: { name: "Tuần 10: Thời Gian & Tiền Tệ", subIds: ["5.3", "5.4", "5.5", "5.6"], desc: "Đọc đồng hồ chính xác đến 5 phút, quy tắc ngày giờ 24h, lịch tờ, lịch tháng; mệnh giá tiền giấy và mua bán nhỏ.", icon: "⏰" },
    11: { name: "Tuần 11: Bảng Tính 2 & 5 & Ôn Tập", subIds: ["3.2", "3.3", "11.1"], desc: "Thuộc lòng bảng nhân/chia 2 và 5; ôn tập tổng hợp kiến thức số học, đo lường và hình học Học kỳ I.", icon: "🔢" },
    12: { name: "Tuần 12: Đấu Trường Học Kỳ I", isExam: true, subIds: [], desc: "Bé thực hành làm đề kiểm tra cuối kì I tổng hợp chuẩn ma trận 13 câu (40 phút, đạt >= 80% vượt ải).", icon: "🏆" },
    13: { name: "Tuần 13: Quy Luật & Dãy Số", subIds: ["6.1", "6.2", "6.3", "6.4"], desc: "Tìm quy luật dãy số cách đều tăng/giảm, dãy số tăng khoảng cách, nhóm sơ đồ liên kết, chuỗi hình IQ tuần hoàn.", icon: "🔗" },
    14: { name: "Tuần 14: Tìm Số Chưa Biết Cơ Bản", subIds: ["7.1", "7.2"], desc: "Đi tìm ẩn số x trong phép tính cộng (tìm số hạng) và phép tính trừ (tìm số bị trừ, tìm số trừ chưa biết).", icon: "❓" },
    15: { name: "Tuần 15: Tìm x Nâng Cao", subIds: ["7.3", "7.4"], desc: "Tìm thừa số chưa biết, tìm số bị chia; giải bài toán tìm x nâng cao chứa 2 phép tính phức tạp.", icon: "❓" },
    16: { name: "Tuần 16: Toán Lời Văn Thêm Bớt", subIds: ["8.1", "8.2"], desc: "Bài toán đơn có lời văn dạng thêm, bớt một số đơn vị; bài toán nhiều hơn, ít hơn và chênh lệch hơn kém.", icon: "📝" },
    17: { name: "Tuần 17: Toán Nhân Chia Thực Tế", subIds: ["8.3"], desc: "Bài toán đố liên quan phép nhân, phép chia trong đời sống (gấp lên/giảm đi một số lần, chia đều đồ vật).", icon: "✖️" },
    18: { name: "Tuần 18: Thống Kê Biểu Đồ", subIds: ["9.1", "9.2"], desc: "Thu thập dữ liệu trực quan, phân loại và kiểm đếm số lượng vật thể; đọc hiểu phân tích thông tin biểu đồ tranh.", icon: "📊" },
    19: { name: "Tuần 19: Toán Lời Văn 2 Bước Tính", subIds: ["8.4"], desc: "Đọc hiểu phân tích ngữ cảnh phức tạp và thực hiện giải toán bằng chính xác 2 bước tính tích hợp.", icon: "📝" },
    20: { name: "Tuần 20: Xác Suất & Hình Học Khó", subIds: ["9.3", "10.3"], desc: "Khả năng xảy ra sự kiện (chắc chắn/có thể/không thể); đếm hình tam giác/tứ giác lồng nhau và khối chồng xếp phức tạp.", icon: "🎲" },
    21: { name: "Tuần 21: Siêu Tư Duy Số Học", subIds: ["10.1", "10.2", "10.4"], desc: "Tính nhanh thuận tiện gộp số tròn chục, tròn trăm; cấu tạo số và lập số có ràng buộc kép; toán cân thăng bằng logic.", icon: "🧠" },
    22: { name: "Tuần 22: Ôn Tập Tổng Hợp HK2", subIds: ["11.2"], desc: "Hệ thống hóa toàn bộ kiến thức tính toán nâng cao học kỳ II, các dạng toán tìm x và toán đố có lời văn cả năm.", icon: "📘" },
    23: { name: "Tuần 23: Thử Thách Học Sinh Giỏi", subIds: ["11.3"], desc: "Thử thách trí tuệ bứt phá giới hạn dành cho học sinh giỏi xuất sắc; luyện tập tổng hợp toán IQ nâng cao.", icon: "🎓" },
    24: { name: "Tuần 24: Đấu Trường Cuối Năm", isExam: true, subIds: [], desc: "Làm bài kiểm tra cuối năm chuẩn hóa ma trận 13 câu (40 phút). Đạt >= 80% chính thức phá đảo khóa học Toán lớp 2.", icon: "🏆" }
};

const TOTAL_ROADMAP_WEEKS = 24;


// Toạ độ 35 mốc tuần dạng zigzag rắn bò (serpentine), 7 cột x 5 hàng, tự tính không cần khai báo tay từng điểm
function getRoadmapCoord(weekNum) {
    const cols = 6;
    const colWidth = 140, rowHeight = 105;
    const startX = 90, startY = 80;
    const idx = weekNum - 1;
    const row = Math.floor(idx / cols);
    const posInRow = idx % cols;
    const col = (row % 2 === 0) ? posInRow : (cols - 1 - posInRow);
    return { x: startX + col * colWidth, y: startY + row * rowHeight };
}

function buildRoadmapPathD(totalWeeks) {
    const pts = [];
    for (let w = 1; w <= totalWeeks; w++) pts.push(getRoadmapCoord(w));
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1], p1 = pts[i];
        const midX = (p0.x + p1.x) / 2, midY = (p0.y + p1.y) / 2;
        const dx = p1.x - p0.x, dy = p1.y - p0.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        // Sóng uốn lượn xuống-lên LIÊN TỤC xuyên suốt toàn bộ đường đi (kể cả đoạn chuyển hàng),
        // không để đoạn nào thẳng đơ xen giữa — giống hệt kiểu bản đồ lộ trình game (Duolingo-style).
        const bend = (i % 2 === 0 ? 1 : -1) * 45;
        const cx = midX + nx * bend, cy = midY + ny * bend;
        d += ` Q ${cx},${cy} ${p1.x},${p1.y}`;
    }
    return d;
}

const examFileMap = {
    hocky1: { file: 'de_thi_toan_2.json', idPrefix: '12.1.', sheet: 'LichSuBaiThi_HK1', label: 'Học kỳ 1', color: 'pink' },
    hocky2: { file: 'de_thi_toan_2.json', idPrefix: '12.2.', sheet: 'LichSuBaiThi_HK2', label: 'Học kỳ 2', color: 'purple' },
    hsg:    { file: 'de_thi_toan_2.json', idPrefix: '12.3.', sheet: 'LichSuBaiThi_HSG', label: 'Học sinh giỏi', color: 'amber' }
};

// 6 nhóm năng lực Toán lớp 2 (TOAN_C1 - TOAN_C6) — khoá nội bộ vẫn dùng C1..C6,
// việc trích tag từ chuỗi "TOAN_C1" sang "C1" được xử lý bằng regex ở nơi dùng.
const SKILL_TAXONOMY = {
    C1: { code: 'C1', sheetCol: 'C1_NhanBiet', totalCol: 'C1_NhanBiet_Tong', name: 'Nhận biết số và hình', advice: 'Cần ôn lại cách đọc viết số, phân tích cấu tạo số và nhận diện hình phẳng, hình khối cơ bản.' },
    C2: { code: 'C2', sheetCol: 'C2_PhepTinh', totalCol: 'C2_PhepTinh_Tong', name: 'Phép tính và tính nhẩm', advice: 'Rèn luyện thêm kỹ năng đặt tính rồi tính và tính nhẩm nhanh phép cộng, trừ, nhân, chia.' },
    C3: { code: 'C3', sheetCol: 'C3_DoLuong', totalCol: 'C3_DoLuong_Tong', name: 'Đo lường và thời gian', advice: 'Luyện tập thêm về đo đạc, quy đổi đơn vị, xem đồng hồ, xem lịch và nhận biết tiền Việt Nam.' },
    C4: { code: 'C4', sheetCol: 'C4_QuyLuat', totalCol: 'C4_QuyLuat_Tong', name: 'Quy luật và cấu trúc', advice: 'Cần luyện thêm về phát hiện quy luật dãy số/hình ảnh và các dạng bài tìm x.' },
    C5: { code: 'C5', sheetCol: 'C5_GiaiToan', totalCol: 'C5_GiaiToan_Tong', name: 'Giải toán có lời văn', advice: 'Tăng cường đọc hiểu ngữ cảnh bài toán đố và luyện giải toán bằng 1-2 bước tính.' },
    C6: { code: 'C6', sheetCol: 'C6_TuDuy', totalCol: 'C6_TuDuy_Tong', name: 'Tư duy logic và IQ', advice: 'Rèn kỹ năng suy luận logic, giải các bài toán cân thăng bằng và đếm hình phức tạp.' }
};

const GREETINGS_STUDENT = [
    "Chào {name}, cô Thỏ Ngọc đố con hôm nay mình tính nhanh và chính xác đến đâu nhé!",
    "Chào mừng {name} quay lại! Não bộ đã khởi động, sẵn sàng chinh phục những con số chưa nào!",
    "Cô Thỏ Ngọc chào {name}! Kính đã đeo, bút đã cầm, giờ là lúc bứt phá điểm 10 Toán học!",
    "Chào con yêu {name}, hôm nay chúng mình cùng khám phá xem con số nào đang trốn ở đâu nhé!",
    "Chào mừng {name} đến với giờ học Toán! Cô Thỏ Ngọc tin con sẽ giải đề nhanh như chớp!"
];

const GREETINGS_GUEST = [
    "Chào bé yêu, cô Thỏ Ngọc rất vui được cùng con luyện Toán hôm nay!",
    "Chào mừng bé đến với lớp Toán của cô Thỏ Ngọc! Mình cùng thử sức xem sao nhé!",
    "Cô Thỏ Ngọc chào bé! Đeo kính vào là tư duy lên hạng liền, cùng bắt đầu nào!",
    "Chào thiên tài nhí! Cô Thỏ Ngọc đang chờ xem con giải bài nhanh cỡ nào đây!",
    "Chào mừng con đến với Đấu trường Toán học! Chúc con tính toán thật minh mẫn và vui vẻ!"
];


// ==========================================
// ĐỊNH DANH MÁY CHỦ APPS SCRIPT & BIẾN TOÀN CỤC
// ==========================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycCVh4WjbjUrjn0UoHXWg6jeh8K2dwFW-a65HBozowSgQJ_orgiqWIkwHOO2P_sPE/exec";
let allTopicsDataCache = null;
let allQuestionsFlatCache = null;
// Bật/tắt đọc câu hỏi TỰ ĐỘNG khi vào câu mới — nút "Nghe câu hỏi" thủ công vẫn luôn hoạt động
// dù tắt tính năng này (đây chỉ tắt phần tự động phát, không tắt hẳn tính năng nghe).
let autoSpeechEnabled = localStorage.getItem('autoSpeechEnabled') !== 'false';
const examsCache = {};
let poetryGardenCache = null;
let poetryGardenState = { category: null, poemIndex: null };

// ==========================================
// BÀI HỌC <-> BÀI TẬP THEO SGK TOÁN 2
// 48 bài học chính; bỏ Luyện tập chung và Ôn tập khỏi module Bài học/Bài tập.
// Khung TOAN_C1-C6 phía trên vẫn là trục đánh giá xuyên suốt.
// ==========================================
const BAI_HOC_DATA_FILE = 'assets/data/bai_hoc_toan_2.json';
let baiHocDataCache = null;

async function loadBaiHocData() {
    if (baiHocDataCache) return baiHocDataCache;
    const res = await fetch(BAI_HOC_DATA_FILE);
    if (!res.ok) throw new Error('Không thể tải dữ liệu Bài học/Bài tập Toán 2');
    baiHocDataCache = await res.json();
    return baiHocDataCache;
}


let currentUser = null;
let starGreenCount = 0;
let starRedCount = 0;
let activeTopicId = null;
let activeExamContext = null;
let activeRoadmapContext = null;
let inMiniGameFlow = false;
let activeQuestionsList = [];
let practiceCycleRawPool = [];
let pendingTopicQuiz = null;
let currentQIndex = 0;
let score = 0;
let userAnswers = {};
let wrongAttemptsByQ = {};
let orderInteractionState = {};
let quizWrongAnswers = [];
let quizAnsweredLog = [];
let quizStartTime = null;
let quizTimerInterval = null;
let quizRemainingSeconds = 40 * 60;

let audioCtx = null;
const banMaiAudio = new Audio();
banMaiAudio.referrerPolicy = 'no-referrer';

let histLineChartInstance = null;
let histBarChartInstance = null;



// ==========================================
// ACCOUNT ACCESS MODEL: GUEST / REGULAR / TRIAL / VIP / ADMIN
// ==========================================
const PREMIUM_TOPIC_IDS = new Set([11]);

function normalizeRole(user) {
    const raw = user?.vaiTro ?? user?.VaiTro ?? user?.role ?? user?.Role ?? '';
    return String(raw || '').trim().toLowerCase() === 'admin' ? 'admin' : 'student';
}

function normalizeAccountType(user) {
    if (normalizeRole(user) === 'admin') return 'admin';
    const raw = user?.loaiTaiKhoan ?? user?.LoaiTaiKhoan ?? user?.accountType ?? user?.tier ?? 'regular';
    const v = String(raw || 'regular').trim().toLowerCase();
    return ['regular', 'trial', 'vip'].includes(v) ? v : 'regular';
}

function hydrateAccountFields(user) {
    if (!user) return user;
    return {
        ...user,
        vaiTro: normalizeRole(user),
        loaiTaiKhoan: normalizeAccountType(user),
        hanDungThu: user.hanDungThu ?? user.HanDungThu ?? '',
        hanVIP: user.hanVIP ?? user.HanVIP ?? ''
    };
}

function isPremiumUser() {
    if (!currentUser || currentUser.isGuest) return false;
    const role = normalizeRole(currentUser);
    const tier = normalizeAccountType(currentUser);
    return role === 'admin' || tier === 'trial' || tier === 'vip';
}

function isAdminUser() {
    return !!currentUser && !currentUser.isGuest && normalizeRole(currentUser) === 'admin';
}

function refreshAccessUI() {
    const unlocked = isPremiumUser();
    ['bai-hoc-lock-icon','roadmap-lock-icon','review-lock-icon','exam-lock-icon','minigame-lock-icon'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.toggle('hidden', unlocked);
    });
}

function openAuthFromGuest(tab = 'login') {
    stopSpeaking();
    switchAuthTab(tab);
    document.getElementById('screen-dashboard')?.classList.add('hidden');
    document.getElementById('screen-login')?.classList.remove('hidden');
}

function ensurePremiumAccess(featureName, onAllowed) {
    if (isPremiumUser()) {
        if (typeof onAllowed === 'function') onAllowed();
        return true;
    }
    showPremiumAccessModal(featureName);
    return false;
}

function showPremiumAccessModal(featureName = 'Tính năng này') {
    let modal = document.getElementById('premium-access-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'premium-access-modal';
        modal.className = 'hidden fixed inset-0 z-[70] bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-3';
        modal.innerHTML = `
            <div class="w-full max-w-[350px] bg-white rounded-[28px] border-[3px] border-pink-200 shadow-2xl overflow-hidden text-center">
                <div class="px-5 pt-5 pb-4 bg-gradient-to-b from-pink-50 to-white">
                    <div id="premium-modal-icon" class="text-5xl leading-none mb-3">🐰</div>
                    <h3 id="premium-modal-title" class="text-xl md:text-2xl font-black text-purple-600 mb-3">Nội dung Premium</h3>
                    <div id="premium-modal-message" class="text-[14px] leading-[1.55] font-bold text-slate-600"></div>
                    <div class="mt-4 rounded-2xl border border-pink-200 bg-pink-50/80 px-3 py-3 text-xs md:text-sm leading-relaxed font-extrabold text-pink-500">
                        🌸 Các chuyên đề cơ bản vẫn học miễn phí bình thường nhé!
                    </div>
                </div>
                <div id="premium-modal-actions" class="px-4 py-3.5 border-t border-pink-100 bg-white"></div>
            </div>`;
        document.body.appendChild(modal);
    }

    const guest = !currentUser || currentUser.isGuest;
    const iconMap = {
        'Bản đồ tuần': '🗺️',
        'Mini Game': '🎮',
        '11. Ôn tập': '🎮',
        '12. Đấu trường đề thi': '🏆'
    };
    const icon = iconMap[featureName] || (String(featureName).toLowerCase().includes('đấu trường') ? '🏆' : '🐰');

    const iconEl = document.getElementById('premium-modal-icon');
    if (iconEl) iconEl.textContent = icon;
    document.getElementById('premium-modal-title').textContent = featureName;
    document.getElementById('premium-modal-message').innerHTML = guest
        ? `Đây là <strong>${escapeHtml(featureName)}</strong> dành cho tài khoản Trial hoặc VIP.<br>Con có thể Sign in nếu đã có tài khoản hoặc Sign up để đăng ký nhé!`
        : `Tài khoản hiện tại của con là <strong>Regular</strong>.<br><strong>${escapeHtml(featureName)}</strong> chỉ dành cho tài khoản Trial hoặc VIP.`;

    const actions = document.getElementById('premium-modal-actions');
    actions.innerHTML = guest
        ? `<div class="grid grid-cols-2 gap-2">
               <button onclick="closePremiumAccessModal();openAuthFromGuest('login')" class="py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black text-sm shadow-sm pastel-btn">Sign in</button>
               <button onclick="closePremiumAccessModal();openAuthFromGuest('register')" class="py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-black text-sm shadow-sm pastel-btn">Sign up</button>
           </div>
           <button onclick="closePremiumAccessModal()" class="mt-2.5 w-full py-2 text-sm md:text-base font-black text-slate-400 hover:text-slate-600">Để sau nhé</button>`
        : `<button onclick="closePremiumAccessModal()" class="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-sm shadow-sm pastel-btn">Đã hiểu</button>`;
    modal.classList.remove('hidden');
}
function closePremiumAccessModal() {
    document.getElementById('premium-access-modal')?.classList.add('hidden');
}

function formatAccountTierLabel() {
    if (!currentUser || currentUser.isGuest) return 'Khách';
    if (isAdminUser()) return 'Admin';
    const t = normalizeAccountType(currentUser);
    return t === 'vip' ? 'VIP' : (t === 'trial' ? 'Trial' : 'Regular');
}



// ==========================================
// THÔNG BÁO TRONG APP - KHÔNG DÙNG HỘP THOẠI TRÌNH DUYỆT
// ==========================================
function ensureAppDialog() {
    let modal = document.getElementById('app-dialog-modal');
    if (modal) return modal;
    modal = document.createElement('div');
    modal.id = 'app-dialog-modal';
    modal.className = 'hidden fixed inset-0 z-[120] bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-3';
    modal.innerHTML = `
        <div class="w-full max-w-[380px] bg-white rounded-[28px] border-[3px] border-pink-200 shadow-2xl overflow-hidden text-center">
            <div class="px-5 pt-5 pb-4 bg-gradient-to-b from-pink-50 via-purple-50/40 to-white">
                <div id="app-dialog-icon" class="text-5xl leading-none mb-2">🐰</div>
                <h3 id="app-dialog-title" class="text-xl font-black text-purple-600 mb-2">Cô Thỏ Ngọc nhắn bé</h3>
                <div id="app-dialog-message" class="text-sm leading-6 font-bold text-slate-600 whitespace-pre-line"></div>
            </div>
            <div id="app-dialog-actions" class="px-4 py-3.5 border-t border-pink-100 bg-white"></div>
        </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal && modal.dataset.dismissible === '1') closeAppDialog(); });
    return modal;
}
function closeAppDialog() {
    document.getElementById('app-dialog-modal')?.classList.add('hidden');
}
function showAppNotice(message, options = {}) {
    const modal = ensureAppDialog();
    modal.dataset.dismissible = '1';
    document.getElementById('app-dialog-icon').textContent = options.icon || (String(message).includes('🎉') ? '🎉' : '🐰');
    document.getElementById('app-dialog-title').textContent = options.title || (String(message).includes('🎉') ? 'Giỏi lắm!' : 'Cô Thỏ Ngọc nhắn bé');
    document.getElementById('app-dialog-message').textContent = String(message ?? '');
    document.getElementById('app-dialog-actions').innerHTML = `<button id="app-dialog-ok" class="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-sm shadow-sm pastel-btn">${options.okText || 'Đã hiểu'}</button>`;
    document.getElementById('app-dialog-ok').onclick = () => { closeAppDialog(); if (typeof options.onClose === 'function') options.onClose(); };
    modal.classList.remove('hidden');
}
function showAppConfirm(message, onConfirm, options = {}) {
    const modal = ensureAppDialog();
    modal.dataset.dismissible = '0';
    document.getElementById('app-dialog-icon').textContent = options.icon || '📝';
    document.getElementById('app-dialog-title').textContent = options.title || 'Xác nhận nộp bài';
    document.getElementById('app-dialog-message').textContent = String(message ?? '');
    document.getElementById('app-dialog-actions').innerHTML = `
        <div class="grid grid-cols-2 gap-2">
            <button id="app-dialog-cancel" class="py-3 rounded-2xl border-2 border-pink-200 bg-pink-50 text-pink-600 font-black text-sm pastel-btn">${options.cancelText || 'Làm tiếp'}</button>
            <button id="app-dialog-confirm" class="py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-sm shadow-sm pastel-btn">${options.confirmText || 'Đồng ý'}</button>
        </div>`;
    document.getElementById('app-dialog-cancel').onclick = closeAppDialog;
    document.getElementById('app-dialog-confirm').onclick = () => { closeAppDialog(); if (typeof onConfirm === 'function') onConfirm(); };
    modal.classList.remove('hidden');
}

// ==========================================
// HÀM TIỆN ÍCH DỮ LIỆU
// ==========================================
function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

function normalizeQuestion(q) {
    if (!q) return null;
    return {
        question_id: q.id ?? q.question_id ?? q.question_no ?? 0,
        // Kho dữ liệu Toán 2 (bản mới) đã tách riêng "sub" = TÊN đầy đủ chủ đề con và "sub_code" = MÃ "X.Y"
        // (dùng để khớp roadmap 24 tuần). Vẫn dự phòng cho định dạng cũ (chỉ có "sub" là mã) để không vỡ dữ liệu cũ.
        sub_topic: String(q.sub_code ?? q.sub ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        sub_id: String(q.sub_code ?? q.sub_id ?? q.sub ?? q.sub_topic ?? '').trim(),
        sub_topic_label: String(q.sub ?? q.sub_code ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        week: q.week ?? q.w ?? null,
        question_text: q.q ?? q.question_text ?? '',
        options: Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : []),
        answer: q.a ?? q.answer ?? '',
        hint: q.h ?? q.hint ?? '',
        image_url: q.img ?? q.image_url ?? '',
        audio_text: q.aud ?? q.audio_text ?? '',
        reading_title: q.r_title ?? q.reading_title ?? '',
        reading_passage: q.r_passage ?? q.reading_passage ?? q.passage_text ?? '',
        skill_tag: q.skill_tag ?? q.tag ?? 'TOAN_C1',
        explore_topic_id: Number(q.explore_topic_id ?? inferExploreTopicIdFromSubCode_(q.sub_code ?? q.sub_id ?? q.sub ?? q.sub_topic)),
        explore_topic: q.explore_topic ?? '',
        explore_group: q.explore_group ?? '',
        explore_group_label: q.explore_group_label ?? '',
        explore_level: Number(q.explore_level ?? 0),
        explore_type: q.explore_type ?? '',
        explore_branch: q.explore_branch ?? '',
        explore_hidden: Boolean(q.explore_hidden ?? false),
        visual_data: q.visual_data ?? null,
        lesson_refs: Array.isArray(q.lesson_refs) ? q.lesson_refs.map(String) : [],
        diem: Number(q.diem ?? q.score ?? 0.5),
        explanation: q.explanation ?? q.h ?? 'Không có giải thích chi tiết.'
    };
}

function normalizeTopic(t) {
    if (!t) return null;
    const rawQuestions = t.qs || t.questions || [];
    return {
        topic_id: Number(t.id ?? t.topic_id),
        topic_name: t.name ?? t.topic_name ?? '',
        description: t.desc ?? t.description ?? '',
        lecture_title: t.l_title ?? t.lecture_title ?? '',
        lecture_content: t.l_content ?? t.lecture_content ?? '',
        lecture_audio_text: t.l_audio ?? t.lecture_audio_text ?? '',
        questions: rawQuestions.map(normalizeQuestion).filter(Boolean)
    };
}

function shuffleArray(arr) {
    if (!arr) return [];
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildTrickyChoices(correctAnswer, sameGroupPool, allPool, count = 3) {
    let same = [...new Set(sameGroupPool.filter(x => x !== correctAnswer))];
    same = shuffleArray(same);
    let picks = same.slice(0, count);
    if (picks.length < count) {
        let rest = [...new Set(allPool.filter(x => x !== correctAnswer && !picks.includes(x)))];
        rest = shuffleArray(rest);
        picks = picks.concat(rest.slice(0, count - picks.length));
    }
    return shuffleArray([correctAnswer, ...picks]);
}

function getQuestionsForWeek343(weekNumber) {
    const config = roadmapConfig[weekNumber];
    if (!config || !allQuestionsFlatCache) return [];

    // Gom toàn bộ câu hỏi thuộc đúng các chủ đề con (sub_id dạng "X.Y") của tuần này —
    // mỗi câu đã tự mang theo skill_tag riêng (TOAN_C1-C6), không cần bảng TOPIC_TO_SKILL suy luận gián tiếp.
    let pool = allQuestionsFlatCache.filter(q => config.subIds.includes(q.sub_topic));

    if (pool.length < 30) return shuffleArray([...pool]);
    
    const size = pool.length;
    const basket1 = pool.slice(0, Math.floor(size * 0.35));
    const basket2 = pool.slice(Math.floor(size * 0.35), Math.floor(size * 0.75));
    const basket3 = pool.slice(Math.floor(size * 0.75));
    
    const easy = shuffleArray([...basket1]).slice(0, 9);
    const medium = shuffleArray([...basket2]).slice(0, 12);
    const hard = shuffleArray([...basket3]).slice(0, 9);
    
    return shuffleArray([...easy, ...medium, ...hard]);
}

function capitalizeFirstLetter(val) {
    if (!val) return '';
    const s = String(val).trim();
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function beautifySubtopicName(name) {
    if (!name) return '';
    let s = String(name).trim();
    if (/đa giác quan/i.test(s)) return 'Trải nghiệm đa giác quan';
    if (/trái nghĩa.*đồng nghĩa/i.test(s) || /đồng nghĩa.*trái nghĩa/i.test(s)) return 'Trái nghĩa - đồng nghĩa';
    if (s.length > 40 && s.includes('(')) {
        s = s.replace(/\s*\([^)]*\)/g, '').trim();
    }
    return s;
}

const DATA_VERSION = '20260919-2232-topic2-pattern30';
const TOPICS_DATA_FILES = [
    'assets/data/kho_hoc_toan_2_hk1.json',
    'assets/data/kho_hoc_toan_2_hk2.json'
];

function inferExploreTopicIdFromSubCode_(subCode) {
    const code = String(subCode || '').trim();
    if (!code) return 0;
    const parts = code.split('.');
    const major = Number(parts[0]);
    const minor = Number(parts[1]);
    if (major === 1) {
        if ([1, 3, 5].includes(minor)) return 1; // Cấu tạo số + ước lượng
        if ([2, 4].includes(minor)) return 2;    // Tia số + so sánh
        return 0;
    }
    // Sau khi đổi vị trí Mục 7 và 8:
    // sub 6.x = Quy luật nâng cao & IQ -> Mục 8
    // sub 7.x = Tìm số chưa biết       -> Mục 7
    if (major === 6) return 8;
    if (major === 7) return 7;
    if (major >= 2 && major <= 5) return major + 1;
    if (major >= 8 && major <= 10) return major + 1;
    return 0;
}

// Kho học liệu Toán 2 là MẢNG PHẲNG câu hỏi (mỗi câu tự mang "sub": "X.Y" và "tag": "TOAN_Cx"),
// không bọc sẵn theo từng Mục lớn như bản gốc — nên cần tự gom nhóm theo số Mục (phần trước dấu chấm của "sub").
async function fetchAllQuestionsFlat() {
    if (allQuestionsFlatCache) return allQuestionsFlatCache;

    const results = await Promise.all(TOPICS_DATA_FILES.map(async (file) => {
        const res = await fetch(`${file}?v=${DATA_VERSION}`, { cache: 'no-store' });
        if (!res.ok) throw new Error(`Không thể tải file dữ liệu ${file}`);
        return res.json();
    }));

    const rawQuestions = results.flatMap(data => {
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.topics)) return data.topics.flatMap(t => t.qs || t.questions || []);
        return [];
    });

    allQuestionsFlatCache = rawQuestions.map(normalizeQuestion).filter(Boolean);
    return allQuestionsFlatCache;
}

async function fetchAllTopicsData() {
    if (allTopicsDataCache) return allTopicsDataCache;

    const flat = await fetchAllQuestionsFlat();
    const byMuc = {};
    flat.forEach(q => {
        // Khám phá dùng explore_topic_id riêng để tách "Số học" thành 2 mục lớn,
        // trong khi sub_code gốc vẫn giữ nguyên cho Bài tập/Roadmap/Bài học.
        const mucNum = Number(q.explore_topic_id || inferExploreTopicIdFromSubCode_(q.sub_id || q.sub_topic) || 0);
        if (!mucNum || q.explore_hidden) return;
        if (!byMuc[mucNum]) byMuc[mucNum] = [];
        byMuc[mucNum].push(q);
    });

    allTopicsDataCache = TOPICS_CONFIG.map(t => ({
        topic_id: t.id,
        topic_name: t.title,
        description: t.desc,
        lecture_title: '',
        lecture_content: '',
        lecture_audio_text: '',
        questions: byMuc[t.id] || []
    }));
    return allTopicsDataCache;
}

async function loadExamDataFile(file) {
    if (examsCache[file]) return examsCache[file];
    const res = await fetch(`assets/data/${file}`);
    if (!res.ok) throw new Error("Không thể tải file đề thi");
    const data = await res.json();
    if (data && Array.isArray(data.exams)) {
        data.exams = data.exams.map(ex => ({
            ...ex,
            questions: (ex.qs || ex.questions || []).map(normalizeQuestion).filter(Boolean)
        }));
    }
    examsCache[file] = data;
    return data;
}

// ==========================================
// RENDER GIAO DIỆN TRANG CHỦ & ĐẤU TRƯỜNG
// ==========================================
async function renderDashboardGrid() {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;

    // Luon khoi phuc layout Khám phá khi quay ve trang chu.
    // Desktop rong: 4 cot; man hinh vua: 3 cot; nho hon: 2/1 cot.
    // Cac man con co the tam thoi doi className cua container, nen neu khong
    // reset tai day thi trang Khám phá se bi ket o layout 2 cot.
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5';
    
    let topicsData = [];
    try { topicsData = await fetchAllTopicsData(); } catch (e) {}

    let html = '';
    TOPICS_CONFIG.forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj && topicObj.questions ? topicObj.questions.length : 0;
        const countLabel = Number(t.id) === 12 ? '50 bài thơ' : (totalCount > 0 ? `${totalCount} câu` : 'Đang cập nhật');

        const iconHtml = t.isCustomTextIcon 
            ? `<div class="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center text-[11px] font-black text-rose-600 shadow-inner group-hover:scale-110 transition-transform shrink-0 tracking-tight">S/X</div>`
            : `<div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>`;

        const premiumLocked = PREMIUM_TOPIC_IDS.has(Number(t.id)) && !isPremiumUser();
        html += `
            <div onclick="openTopic(${t.id}, '${t.title}', '${t.icon}')" class="pastel-card relative p-3 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[92px]">
                ${premiumLocked ? '<i class="fa-solid fa-lock absolute top-2.5 right-3 text-slate-400 text-xs"></i>' : ''}
                <div class="flex items-center space-x-2.5">
                    ${iconHtml}
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight">${t.title}</h3>
                </div>
                <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-pink-100 text-[11px] font-bold text-gray-500">
                    <span>${t.desc}</span>
                    <span class="bg-${t.color}-50 text-${t.color}-600 px-2 py-0.5 rounded-full">${countLabel}</span>
                </div>
            </div>
        `;
    });

    // Khám phá hiển thị 11 chuyên mục học + Vườn thơ; Ôn tập và Đề thi có tab riêng.
    container.innerHTML = html;
}

async function startRandomExam(categoryKey) {
    stopSpeaking();
    // Dữ liệu đề thi Toán 2 không có field "exam_category" dạng chữ — phân loại HK1/HK2/HSG
    // dựa đúng theo TIỀN TỐ của "exam_id" (12.1.x = HK1, 12.2.x = HK2, 12.3.x = HSG),
    // khớp với ma trận exam_id đã chuẩn hoá trong file dữ liệu.
    const idPrefix = examFileMap[categoryKey]?.idPrefix || '';

    showLoadingOverlay("Đang chuẩn bị đề thi...");
    try {
        const examData = await loadExamDataFile('de_thi_toan_2.json');
        hideLoadingOverlay();

        const pool = (examData && Array.isArray(examData.exams)) ? examData.exams : [];
        let candidates = pool.filter(e => String(e.exam_id || '').startsWith(idPrefix));
        if (!candidates.length) return showAppNotice('Đang cập nhật thêm đề thi cho mục này, bé quay lại sau nhé!');

        const exam = candidates[Math.floor(Math.random() * candidates.length)];
        const examIndex = pool.indexOf(exam);
        const examLabel = examFileMap[categoryKey]?.label || 'Đề thi';
        const examTitle = exam.exam_title || exam.name || exam.title || `${examLabel} - Đề số ${examIndex + 1}`;

        activeExamContext = { categoryKey, examIndex, examTitle };
        activeRoadmapContext = null;
        pendingTopicQuiz = null;

        const questions = Array.isArray(exam.questions) && exam.questions.length ? exam.questions : [];
        if (!questions.length) return showAppNotice('Đề thi này chưa có câu hỏi, bé chọn đề khác nhé!');

        updateNavTabs(examTitle, '🏆', null);
        startTopicQuiz(0, examTitle, shuffleArray(questions), null);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice(`Không thể tải đề thi: ${err.message}`);
    }
}

function startExamCountdown() {
    quizRemainingSeconds = 40 * 60;
    updateExamTimerDisplay();
    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        quizRemainingSeconds--;
        updateExamTimerDisplay();
        if (quizRemainingSeconds <= 0) {
            clearInterval(quizTimerInterval);
            showAppNotice('Đã hết giờ làm bài! Bài thi sẽ được nộp lại nhé bé.');
            showResultScreen();
        }
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('quiz-timer-display');
    if (!el) return;
    const m = Math.floor(Math.max(0, quizRemainingSeconds) / 60);
    const s = Math.max(0, quizRemainingSeconds) % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function openExamHub() {
    setAppShellRootMode_(true);
    stopSpeaking();
    if (!isPremiumUser()) { showPremiumAccessModal('Đấu trường đề thi'); return; }
    setMainTabActive_('exams');
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs(null, null, null);
    switchAppView('view-exam-hub');
    showLoadingOverlay("Đang tải kho đề thi...");
    renderExamHubGrid().finally(() => hideLoadingOverlay());
}

async function renderExamHubGrid() {
    const container = document.getElementById('exam-categories-grid');
    if (!container) return;

    let examData = null;
    try { examData = await loadExamDataFile('de_thi_toan_2.json'); } catch (e) {}

    const getCountForPrefix = (idPrefix) => {
        if (!examData || !examData.exams) return 3;
        return examData.exams.filter(e => String(e.exam_id || '').startsWith(idPrefix)).length || 0;
    };

    const countHK1 = getCountForPrefix(examFileMap.hocky1.idPrefix);
    const countHK2 = getCountForPrefix(examFileMap.hocky2.idPrefix);
    const countHSG = getCountForPrefix(examFileMap.hsg.idPrefix);

    let html = `
        <div class="bg-pink-50/70 p-5 rounded-3xl border-2 border-pink-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🔢</div>
                <h3 class="font-extrabold text-pink-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK1</p>
                <span class="inline-block bg-pink-100 text-pink-700 px-3 py-0.5 rounded-full text-sm md:text-base font-black mb-3">${countHK1} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky1')" class="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HK1')" class="w-full py-2 bg-white text-pink-700 border border-pink-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-pink-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-purple-50/70 p-5 rounded-3xl border-2 border-purple-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">⭐</div>
                <h3 class="font-extrabold text-purple-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK2</p>
                <span class="inline-block bg-purple-100 text-purple-700 px-3 py-0.5 rounded-full text-sm md:text-base font-black mb-3">${countHK2} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky2')" class="w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HK2')" class="w-full py-2 bg-white text-purple-700 border border-purple-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-purple-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-amber-50/70 p-5 rounded-3xl border-2 border-amber-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🏆</div>
                <h3 class="font-extrabold text-amber-600 text-lg mb-1">Học sinh giỏi</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Thử thách nâng cao IQ</p>
                <span class="inline-block bg-amber-100 text-amber-700 px-3 py-0.5 rounded-full text-sm md:text-base font-black mb-3">${countHSG} đề thi tuyển chọn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hsg')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThi_HSG')" class="w-full py-2 bg-white text-amber-700 border border-amber-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-amber-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// MINI GAME TOÁN 2 — HUB 12 GAME + LAZY LOAD
// ==========================================
const MINIGAME_LIST = [
    { id: 'balance-scale', title: '1. Balance Scale', desc: 'Cân bằng hai vế bằng tư duy phép tính', icon: '⚖️', ready: true },
    { id: 'number-hunt', title: '2. Number Hunt', desc: 'Săn con số đúng theo yêu cầu', icon: '🔎', ready: false },
    { id: 'math-train', title: '3. Math Train', desc: 'Ghép toa để hoàn thành phép tính', icon: '🚂', ready: false },
    { id: 'target-number', title: '4. Target Number', desc: 'Tính nhanh để chạm số mục tiêu', icon: '🎯', ready: false },
    { id: 'number-river', title: '5. Number River', desc: 'Nhảy qua đúng kết quả để qua sông', icon: '🐸', ready: false },
    { id: 'missing-number', title: '6. Missing Number', desc: 'Tìm số còn thiếu trong phép tính', icon: '🧩', ready: false },
    { id: 'pattern-detective', title: '7. Pattern Detective', desc: 'Phá án quy luật dãy số', icon: '🕵️', ready: false },
    { id: 'shape-builder', title: '8. Shape Builder', desc: 'Ghép hình và khám phá hình học', icon: '📐', ready: false },
    { id: 'time-master', title: '9. Time Master', desc: 'Chinh phục đồng hồ và thời gian', icon: '🕐', ready: false },
    { id: 'little-shop', title: '10. Little Shop', desc: 'Mua bán, tính tiền và tiền thừa', icon: '🛒', ready: false },
    { id: 'math-factory', title: '11. Math Factory', desc: 'Phân loại số và phép tính vào đúng máy', icon: '🏭', ready: false },
    { id: 'math-race', title: '12. Math Race', desc: 'Đua xe bằng phản xạ tính toán', icon: '🏎️', ready: false }
];
const MINIGAME_PALETTES = [
    ['bg-rose-50/80','border-rose-300','text-rose-600'], ['bg-sky-50/80','border-sky-300','text-sky-600'],
    ['bg-violet-50/80','border-violet-300','text-violet-600'], ['bg-amber-50/80','border-amber-300','text-amber-600'],
    ['bg-indigo-50/80','border-indigo-300','text-indigo-600'], ['bg-emerald-50/80','border-emerald-300','text-emerald-600'],
    ['bg-fuchsia-50/80','border-fuchsia-300','text-fuchsia-600'], ['bg-orange-50/80','border-orange-300','text-orange-600'],
    ['bg-cyan-50/80','border-cyan-300','text-cyan-600'], ['bg-lime-50/80','border-lime-300','text-lime-700'],
    ['bg-purple-50/80','border-purple-300','text-purple-600'], ['bg-teal-50/80','border-teal-300','text-teal-600']
];
const GAME_SCRIPT_MAP = {
    'balance-scale': 'assets/js/games/balance-scale.js', 'number-hunt': 'assets/js/games/number-hunt.js',
    'math-train': 'assets/js/games/math-train.js', 'target-number': 'assets/js/games/target-number.js',
    'number-river': 'assets/js/games/number-river.js', 'missing-number': 'assets/js/games/missing-number.js',
    'pattern-detective': 'assets/js/games/pattern-detective.js', 'shape-builder': 'assets/js/games/shape-builder.js',
    'time-master': 'assets/js/games/time-master.js', 'little-shop': 'assets/js/games/little-shop.js',
    'math-factory': 'assets/js/games/math-factory.js', 'math-race': 'assets/js/games/math-race.js'
};
const loadedGameScripts = {};
function openMiniGameHub() {
    setAppShellRootMode_(true);
    if (!isPremiumUser()) { showPremiumAccessModal('Mini Game'); return; }
    setMainTabActive_('games');
    stopSpeaking(); inMiniGameFlow = true; activeExamContext = null; activeRoadmapContext = null; activeTopicId = null; pendingTopicQuiz = null;
    updateNavTabs(null, null, null);
    const grid = document.getElementById('minigame-grid'); if (!grid) return;
    grid.innerHTML = MINIGAME_LIST.map((g, idx) => { const p = MINIGAME_PALETTES[idx % MINIGAME_PALETTES.length]; return `
        <div onclick="openGamePlay('${g.id}')" class="${p[0]} ${p[1]} border-2 rounded-[26px] p-3.5 md:p-4 min-h-[132px] flex flex-col items-center justify-between text-center cursor-pointer relative shadow-sm pastel-btn group">
            ${!g.ready ? '<span class="absolute top-2 right-2 bg-slate-100 text-slate-500 text-[10px] font-black px-2 py-0.5 rounded-full border border-slate-200">Sắp ra mắt</span>' : '<span class="absolute top-2 right-2 bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-200">Chơi ngay</span>'}
            <div class="text-4xl group-hover:scale-110 transition-transform mt-1">${g.icon}</div><div class="w-full"><h3 class="font-extrabold ${p[2]} text-base leading-tight">${g.title}</h3><p class="text-sm text-gray-700 font-bold mt-1 leading-snug">${g.desc}</p></div>
        </div>`; }).join('');
    switchAppView('view-minigame-hub');
}
function loadGameScript(src) {
    if (loadedGameScripts[src]) return Promise.resolve();
    return new Promise((resolve, reject) => { const script = document.createElement('script'); script.src = src; script.onload = () => { loadedGameScripts[src] = true; resolve(); }; script.onerror = () => reject(new Error(`Không tải được file game: ${src}`)); document.body.appendChild(script); });
}
async function openGamePlay(gameId) {
    setAppShellRootMode_(false);
    if (!isPremiumUser()) { showPremiumAccessModal('Mini Game'); return; }
    stopSpeaking(); inMiniGameFlow = true; const game = MINIGAME_LIST.find(g => g.id === gameId); if (!game) return;
    if (!game.ready) { showAppNotice(`Game "${game.title}" đang được xây dựng. Cô Thỏ Ngọc sẽ mở game này ở bản cập nhật sau nhé!`); return; }
    const title = document.getElementById('game-play-title'); if (title) title.innerHTML = `<span>${game.icon}</span><span class="truncate">${game.title}</span>`;
    updateNavTabs(game.title, '🎮', null); switchAppView('view-game-play');
    const container = document.getElementById('game-play-container'); if (container) container.innerHTML = '<p class="text-center text-gray-400 font-bold py-8"><i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang tải game...</p>';
    try { await loadGameScript(GAME_SCRIPT_MAP[gameId]); } catch (e) { if (container) container.innerHTML = '<p class="text-center text-rose-500 font-bold py-8">Không tải được game, bé thử lại nhé!</p>'; return; }
    if (gameId === 'balance-scale' && typeof startBalanceScaleGame === 'function') startBalanceScaleGame();
}

// ============================================================
// TOAN 2 APP SHELL 2026 - banner chinh o root tab, banner phu + breadcrumb khi vao noi dung.
// Chi dieu khien presentation, khong thay doi nghiep vu/du lieu.
// ============================================================
let appShellRootMode_ = true;
function setAppShellRootMode_(isRoot) {
    appShellRootMode_ = !!isRoot;
    const mainBanner = document.getElementById('app-main-banner');
    const contextBanner = document.getElementById('app-context-banner');
    if (mainBanner) mainBanner.classList.toggle('hidden', !appShellRootMode_);
    if (contextBanner) contextBanner.classList.toggle('hidden', appShellRootMode_);
}

// ==========================================
// ĐIỀU HƯỚNG VIEW & BREADCRUMB
// ==========================================
function getActiveMainModuleMeta_() {
    const active = document.querySelector('.main-module-tab.is-active')?.dataset?.tab || 'discover';
    const map = {
        discover:  { label: 'Khám phá',   icon: '🧭', target: 'discover' },
        lessons:   { label: 'Bài học',    icon: '📖', target: 'lessons' },
        exercises: { label: 'Bài tập',    icon: '✏️', target: 'exercises' },
        review:    { label: 'Ôn tập',     icon: '🧠', target: 'review' },
        exams:     { label: 'Đề thi',     icon: '🏆', target: 'exams' },
        games:     { label: 'Mini games', icon: '🎮', target: 'games' }
    };
    return map[active] || map.discover;
}

// Breadcrumb chỉ dùng khi đi sâu vào nội dung.
// Nút đầu tiên luôn bám theo module đang active, tránh bị sót "Khám phá"
// khi người dùng đã chuyển sang Bài học/Bài tập/Đề thi/Mini games.
function updateNavTabs(level2Title, level2Icon, level3Title, level4Title) {
    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');
    const tab4 = document.getElementById('header-level4-tab');
    const homeBtn = document.getElementById('btn-header-home');

    if (!level2Title) {
        if (tab2) { tab2.classList.add('hidden'); tab2.classList.remove('flex'); }
        if (tab3) { tab3.classList.add('hidden'); tab3.classList.remove('flex'); }
        if (tab4) { tab4.classList.add('hidden'); tab4.classList.remove('flex'); }
        if (homeBtn) homeBtn.classList.remove('opacity-80');
        return;
    }

    if (tab2) {
        const t2 = document.getElementById('header-level2-title');
        const i2 = document.getElementById('header-level2-icon');
        const btn2 = tab2.querySelector('button');
        if (t2) t2.textContent = level2Title;
        if (i2) i2.textContent = level2Icon || getActiveMainModuleMeta_().icon;
        if (btn2) btn2.setAttribute('onclick', Number(activeTopicId) === 12 ? 'openPoetryGarden()' : 'returnToTopicLecture()');
        tab2.classList.remove('hidden'); tab2.classList.add('flex');
    }
    if (homeBtn) homeBtn.classList.add('opacity-80', 'hover:opacity-100');

    if (level3Title && tab3) {
        const t3 = document.getElementById('header-level3-title');
        if (t3) t3.textContent = level3Title;
        tab3.classList.remove('hidden'); tab3.classList.add('flex');
    } else if (tab3) { tab3.classList.add('hidden'); tab3.classList.remove('flex'); }

    if (level4Title && tab4) {
        const t4 = document.getElementById('header-level4-title');
        if (t4) t4.textContent = level4Title;
        tab4.classList.remove('hidden'); tab4.classList.add('flex');
    } else if (tab4) { tab4.classList.add('hidden'); tab4.classList.remove('flex'); }
}

function returnToLevel3FromHeader() {
    stopSpeaking();
    if (Number(activeTopicId) === 12 && poetryGardenState.category !== null) return renderPoetryCategory(poetryGardenState.category);
    if (pendingTopicQuiz) {
        if (Number(pendingTopicQuiz.topicNum) === 1 && pendingTopicQuiz.selectedNumberScope && pendingTopicQuiz.selectedNumberScopePool) {
            return renderExploreNumberActivities(pendingTopicQuiz.selectedNumberScopeLabel, pendingTopicQuiz.selectedNumberScopePool);
        }
        if (Number(pendingTopicQuiz.topicNum) === 2) {
            return renderExploreComparisonBranches(2, pendingTopicQuiz.topicName, pendingTopicQuiz.questions || []);
        }
        const label = document.getElementById('header-level3-title')?.textContent || '';
        const idx = (pendingTopicQuiz.groups || []).findIndex(k => beautifySubtopicName(pendingTopicQuiz.groupLabels?.[k] || k) === label);
        if (idx >= 0) return selectSubtopic(idx);
        return returnToTopicLecture();
    }
    if (activeRoadmapContext) return openRoadmap(activeRoadmapContext.semester || 1);
    return returnToTopicLecture();
}

function returnToLevel4FromHeader() {
    stopSpeaking();
    if (activeRoadmapContext) return openRoadmap(activeRoadmapContext.semester || 1);
    return returnToLevel3FromHeader();
}

function returnToTopicLecture() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    if (Number(activeTopicId) === 12) {
        if (poetryGardenState.category !== null) return renderPoetryCategory(poetryGardenState.category);
        return openPoetryGarden();
    }
    if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap();
    } else if (pendingTopicQuiz) {
        if (Number(pendingTopicQuiz.topicNum) === 1) {
            renderExploreNumberScopes(pendingTopicQuiz.topicNum, pendingTopicQuiz.topicName, pendingTopicQuiz.questions || []);
        } else if (Number(pendingTopicQuiz.topicNum) === 2) {
            renderExploreComparisonBranches(2, pendingTopicQuiz.topicName, pendingTopicQuiz.questions || []);
        } else if (pendingTopicQuiz.selectedExploreGroup) {
            const pool = pendingTopicQuiz.groupMap?.[pendingTopicQuiz.selectedExploreGroup] || [];
            renderExploreLevelsForGroup(pendingTopicQuiz.selectedExploreGroup, pendingTopicQuiz.selectedExploreGroupLabel, pool);
        } else if (pendingTopicQuiz.directLevelPool) {
            renderExploreLevelsForTopic(pendingTopicQuiz.topicNum, pendingTopicQuiz.topicName, pendingTopicQuiz.directLevelPool);
        } else {
            renderExploreSubtopics(pendingTopicQuiz.topicNum, pendingTopicQuiz.topicName, pendingTopicQuiz);
        }
    } else if (inMiniGameFlow) {
        openMiniGameHub();
    }
}

function switchAppView(viewId) {
    stopSpeaking();
    ['view-dashboard-grid', 'view-quiz', 'view-roadmap', 'view-bai-hoc-detail', 'view-minigame-hub', 'view-game-play', 'view-exam-hub', 'view-result'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === viewId) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
}

function setMainTabActive_(tabName) {
    document.querySelectorAll('.main-module-tab').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.tab === tabName);
    });
}

function openMainTab(tabName) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    switch (tabName) {
        case 'discover':
            goHome();
            break;
        case 'lessons':
            if (!isPremiumUser()) { showPremiumAccessModal('Bài học'); return; }
            openBaiHocHub(1);
            break;
        case 'exercises':
            openRoadmap(1);
            break;
        case 'review':
            if (!isPremiumUser()) { showPremiumAccessModal('Ôn tập'); return; }
            openReviewHubFromQuestionBank();
            break;
        case 'exams':
            openExamHub();
            break;
        case 'games':
            openMiniGameHub();
            break;
        default:
            goHome();
    }
}

async function openReviewHubFromQuestionBank() {
    setAppShellRootMode_(true);
    stopSpeaking();
    setMainTabActive_('review');
    activeTopicId = 'review'; activeExamContext = null; activeRoadmapContext = null;
    updateNavTabs('Ôn tập', '📚', null);
    showLoadingOverlay('Đang tải nội dung Ôn tập...');
    try {
        const flat = await fetchAllQuestionsFlat();
        const reviewQuestions = flat.filter(q => String(q.sub_topic || '').startsWith('11.'));
        hideLoadingOverlay();
        if (!reviewQuestions.length) throw new Error('Chưa có câu hỏi Ôn tập');
        renderExploreSubtopics('review', 'Ôn tập', { questions: reviewQuestions });
        setMainTabActive_('review');
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice(`Không thể tải Ôn tập: ${err.message}`);
    }
}

function goHome() {
    setAppShellRootMode_(true);
    stopSpeaking();
    clearInterval(quizTimerInterval);
    inMiniGameFlow = false;
    activeTopicId = null;
    activeExamContext = null;
    activeRoadmapContext = null;
    pendingTopicQuiz = null;
    setMainTabActive_('discover');
    updateNavTabs(null, null, null);
    renderDashboardGrid();
    switchAppView('view-dashboard-grid');
}

// ==========================================
// HỆ THỐNG XÁC THỰC TÀI KHOẢN & LỜI CHÀO ĐÓN
// ==========================================
function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('form-login').classList.toggle('hidden', !isLogin);
    document.getElementById('form-register').classList.toggle('hidden', isLogin);
    document.getElementById('tab-btn-login').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${!isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    hideAuthError();
}

function updateMaHSPreview() {
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const stt = document.getElementById('reg-stt').value.trim();
    document.getElementById('mahs-preview').textContent = (lop && stt) ? `${lop}-${stt.padStart(2, '0')}` : '--';
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error-msg');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
}
function hideAuthError() { 
    const el = document.getElementById('auth-error-msg');
    if (el) el.classList.add('hidden'); 
}

async function callAppsScript(action, payload) {
    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, payload })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawText = await res.text();
    try {
        return JSON.parse(rawText);
    } catch (e) {
        throw new Error('Google Apps Script trả về dữ liệu không hợp lệ (không phải JSON) — thường do link Apps Script chưa được Deploy đúng cách (cần đặt quyền truy cập là "Anyone"/"Bất kỳ ai") hoặc đã hết hạn uỷ quyền. Anh vui lòng kiểm tra lại bước Deploy > Manage deployments trên Apps Script nhé.');
    }
}

async function doLogin() {
    hideAuthError();
    const maHSInput = document.getElementById('login-mahs');
    const maPinInput = document.getElementById('login-mapin');
    const maHS = (maHSInput?.value || '').trim().toUpperCase();
    const maPin = (maPinInput?.value || '').trim();

    if (!maHS || !maPin) {
        const msg = 'Bé nhập đủ mã ID và mã PIN nhé!';
        showAuthError(msg);
        showAppNotice(msg);
        return;
    }

    const btn = document.getElementById('btn-do-login');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng nhập...';

    try {
        const result = await callAppsScript('login', { maHS, maPin });
        if (!result.ok) {
            const errMsg = result.error || 'Mã ID thẻ học sinh hoặc mã PIN không đúng!';
            showAuthError(errMsg);
            showAppNotice(errMsg);
            return;
        }
        const sessionToken = result.sessionToken || result.token;
        if (!sessionToken) throw new Error('Máy chủ không trả về session token.');
        currentUser = hydrateAccountFields({ ...result.student, isGuest: false, token: sessionToken });
        // Persistent session: client CHỈ lưu token; role/tier luôn lấy từ backend khi login/restoreSession.
        localStorage.setItem('toan2_token', sessionToken);
        localStorage.removeItem('toan2_pending_logout_token');
        enterDashboard();
    } catch (err) {
        const connErr = 'Lỗi kết nối máy chủ: ' + err.message;
        showAuthError(connErr);
        showAppNotice(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';
    }
}

async function doRegister() {
    hideAuthError();
    const hoTen = document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw = document.getElementById('reg-ngaysinh').value;
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const soThuTu = document.getElementById('reg-stt').value.trim();
    const maPin = document.getElementById('reg-mapin').value.trim();

    if (!hoTen || !ngaySinhRaw || !lop || !soThuTu || !maPin) {
        const msg = 'Bé điền đủ tất cả các ô có dấu * nhé!';
        showAuthError(msg);
        showAppNotice(msg);
        return;
    }
    if (!/^\d{6}$/.test(maPin)) {
        const msg = 'Mã PIN phải gồm đúng 6 chữ số!';
        showAuthError(msg);
        showAppNotice(msg);
        return;
    }

    const [y, m, d] = ngaySinhRaw.split('-');
    const ngaySinh = `${d}-${m}-${y.slice(2)}`;
    const btn = document.getElementById('btn-do-register');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng ký...';

    try {
        const result = await callAppsScript('register', { hoTen, ngaySinh, lop, soThuTu, maPin });
        if (!result.ok) {
            showAuthError(result.error);
            showAppNotice(result.error);
            return;
        }
        showAppNotice(`Đã gửi đăng ký thành công, vui lòng chờ Admin duyệt! Mã ID của bé là: ${result.student.maHS}`);
        document.getElementById('login-mahs').value = result.student.maHS;
        switchAuthTab('login');
    } catch (err) {
        const connErr = 'Lỗi kết nối: ' + err.message;
        showAuthError(connErr);
        showAppNotice(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';
    }
}

let sessionRestoreRetryTimer = null;
let sessionRestoreInFlight = false;

function showSessionRestorePending(message) {
    // Có token nhưng mạng tạm thời lỗi: GIỮ NGUYÊN token, không chuyển sang Khách và không tự đăng xuất.
    // Vì client không được phép tin role/tier lưu cục bộ, app chờ backend xác thực lại rồi mới vào dashboard.
    document.getElementById('screen-dashboard')?.classList.add('hidden');
    document.getElementById('screen-login')?.classList.remove('hidden');
    showAuthError(message || 'Chưa kết nối được máy chủ. Phiên đăng nhập của bé vẫn được giữ và app sẽ tự thử lại.');
}

function scheduleSessionRestoreRetry(delayMs = 5000) {
    clearTimeout(sessionRestoreRetryTimer);
    sessionRestoreRetryTimer = setTimeout(() => tryAutoLogin(true), delayMs);
}

async function tryAutoLogin(isRetry = false) {
    // Client chỉ lưu SESSION TOKEN. Tuyệt đối không lưu PIN/mật khẩu hay object quyền Admin/Trial/VIP.
    localStorage.removeItem('tv1_mahs');
    localStorage.removeItem('tv1_mapin');
    localStorage.removeItem('toan2_current_user');

    const token = localStorage.getItem('toan2_token');
    if (!token) {
        clearTimeout(sessionRestoreRetryTimer);
        handleGuestMode(true);
        return;
    }
    if (sessionRestoreInFlight) return;
    sessionRestoreInFlight = true;

    try {
        const res = await callAppsScript('restoreSession', { token });
        if (res.ok && res.student) {
            clearTimeout(sessionRestoreRetryTimer);
            hideAuthError();
            currentUser = hydrateAccountFields({ ...res.student, isGuest: false, token });
            enterDashboard(true);
            return;
        }

        // Backend đã trả lời rõ token không còn hợp lệ (ví dụ token bị thu hồi/tài khoản bị xóa).
        // Chỉ trường hợp xác thực thất bại rõ ràng này mới bỏ token; lỗi mạng KHÔNG đi vào nhánh này.
        if (res && (res.code === 'SESSION_INVALID' || res.code === 'ACCOUNT_NOT_FOUND')) {
            localStorage.removeItem('toan2_token');
            currentUser = null;
            document.getElementById('screen-dashboard')?.classList.add('hidden');
            document.getElementById('screen-login')?.classList.remove('hidden');
            showAuthError('Phiên đăng nhập không còn hợp lệ. Bé đăng nhập lại nhé!');
            return;
        }

        showSessionRestorePending(res?.error || 'Chưa xác thực được phiên. Phiên vẫn được giữ và app sẽ tự thử lại.');
        scheduleSessionRestoreRetry();
    } catch (err) {
        // Lỗi mạng/HTTP tạm thời: giữ token, giữ trạng thái "đang chờ restore", tuyệt đối không về Khách.
        showSessionRestorePending('Mạng đang gián đoạn. Phiên đăng nhập vẫn được giữ; app sẽ tự kết nối lại.');
        scheduleSessionRestoreRetry(isRetry ? 7000 : 5000);
    } finally {
        sessionRestoreInFlight = false;
    }
}

async function flushPendingLogout() {
    const pendingToken = localStorage.getItem('toan2_pending_logout_token');
    if (!pendingToken) return;
    try {
        const res = await callAppsScript('logout', { token: pendingToken });
        if (res?.ok) localStorage.removeItem('toan2_pending_logout_token');
    } catch (e) {
        // Giữ token thu hồi chờ lần có mạng tiếp theo; KHÔNG dùng token này để restore session.
    }
}

async function logout() {
    stopSpeaking();
    clearTimeout(sessionRestoreRetryTimer);
    clearInterval(adminRegistrationPollTimer);
    adminRegistrationPollTimer = null;
    adminNewRegistrationCount = 0;
    const tokenToRevoke = currentUser?.token || localStorage.getItem('toan2_token');

    // Người dùng đã chủ động bấm Đăng xuất: xóa token phiên hoạt động trên client ngay lập tức.
    localStorage.removeItem('toan2_token');
    if (tokenToRevoke) localStorage.setItem('toan2_pending_logout_token', tokenToRevoke);

    currentUser = { name: "Khách (Guest)", isGuest: true, tuanHienTai: 1, hoTen: "Bé Khách", lop: "", maHS: "KHACH" };
    enterDashboard(true);

    // Thu hồi token trên backend. Nếu đang mất mạng, flushPendingLogout() sẽ thử lại khi app chạy lần sau.
    await flushPendingLogout();
}

function handleGuestMode(isSilent = false) {
    currentUser = { name: "Khách (Guest)", isGuest: true, tuanHienTai: 1, hoTen: "Bé Khách", lop: "", maHS: "KHACH" };
    enterDashboard(isSilent);
}

function enterDashboard(isSilent = false) {
    document.getElementById('screen-login').classList.add('hidden');
    document.getElementById('screen-dashboard').classList.remove('hidden');
    updateUserInfoBox();
    refreshAccessUI();
    resetStars();
    renderDashboardGrid();
    renderExamHubGrid();
    goHome();
    startAdminRegistrationPolling();

    // Phát ngẫu nhiên lời chào sư phạm (Không nhạc)
    if (!isSilent) {
        setTimeout(() => {
            if (currentUser && !currentUser.isGuest) {
                const template = GREETINGS_STUDENT[Math.floor(Math.random() * GREETINGS_STUDENT.length)];
                const msg = template.replace('{name}', currentUser.hoTen);
                speakVietnamese(msg, 0.96);
            } else {
                const msg = GREETINGS_GUEST[Math.floor(Math.random() * GREETINGS_GUEST.length)];
                speakVietnamese(msg, 0.96);
            }
        }, 450);
    }
}

let adminNewRegistrationCount = 0;
let adminRegistrationPollTimer = null;

function renderAdminRegistrationBadge() {
    const badge = document.getElementById('admin-new-registration-badge');
    if (!badge) return;
    const count = Math.max(0, Number(adminNewRegistrationCount) || 0);
    badge.textContent = count > 99 ? '99+' : String(count);
    badge.classList.toggle('hidden', count <= 0);
}

async function refreshAdminRegistrationBadge() {
    if (!isAdminUser() || !currentUser?.token) return;
    try {
        const res = await callAppsScript('getNewRegistrationsCount', { token: currentUser.token });
        if (!res?.ok) return;
        adminNewRegistrationCount = Number(res.count) || 0;
        renderAdminRegistrationBadge();
    } catch (e) {
        // Badge là thông tin phụ, không làm gián đoạn ứng dụng khi mạng tạm thời lỗi.
    }
}

function startAdminRegistrationPolling() {
    clearInterval(adminRegistrationPollTimer);
    adminRegistrationPollTimer = null;
    if (!isAdminUser()) {
        adminNewRegistrationCount = 0;
        return;
    }
    refreshAdminRegistrationBadge();
    adminRegistrationPollTimer = setInterval(refreshAdminRegistrationBadge, 15000);
}

async function markAdminRegistrationsSeen() {
    if (!isAdminUser() || !currentUser?.token) return;
    try {
        const res = await callAppsScript('markRegistrationsSeen', { token: currentUser.token });
        if (res?.ok) {
            adminNewRegistrationCount = 0;
            renderAdminRegistrationBadge();
        }
    } catch (e) {}
}

window.addEventListener('focus', () => { if (isAdminUser()) refreshAdminRegistrationBadge(); });
document.addEventListener('visibilitychange', () => { if (!document.hidden && isAdminUser()) refreshAdminRegistrationBadge(); });

function updateUserInfoBox() {
    const box = document.getElementById('user-info-box');
    if (!box) return;
    if (currentUser && !currentUser.isGuest) {
        const adminBtn = isAdminUser()
            ? `<button onclick="openAdminAccountManager()" class="relative h-8 px-3 flex items-center justify-center gap-1 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-xl border border-amber-200 text-sm md:text-base font-black"><i class="fa-solid fa-users-gear"></i><span class="admin-manage-label">Quản lý</span><span id="admin-new-registration-badge" class="hidden absolute -top-2 -right-2 min-w-[19px] h-[19px] px-1 rounded-full bg-rose-500 text-white text-[10px] leading-[19px] text-center font-black border-2 border-white shadow-md">0</span></button>`
            : '';
        box.innerHTML = `
            <div class="flex items-center space-x-2">
                <div class="text-right">
                    <div class="text-pink-600 font-extrabold text-xs md:text-sm leading-tight">${escapeHtml(currentUser.hoTen || '')}</div>
                    <div class="text-gray-500 font-semibold text-[10px]">${escapeHtml(formatAccountTierLabel())} · ID: ${escapeHtml(currentUser.maHS || '')}</div>
                </div>
                ${adminBtn}
                <button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-rose-100 hover:bg-rose-200 text-rose-500 rounded-xl border border-rose-200 text-xs"><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>`;
    } else {
        box.innerHTML = `
            <div class="flex items-center gap-1.5">
                <span class="text-amber-600 font-black text-xs mr-1">Khách</span>
                <button onclick="openAuthFromGuest('login')" class="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm md:text-base font-black">Sign in</button>
                <button onclick="openAuthFromGuest('register')" class="px-3 py-2 bg-white text-purple-600 border border-purple-200 rounded-xl text-sm md:text-base font-black">Sign up</button>
            </div>`;
    }
}

async function openAdminAccountManager() {
    if (!isAdminUser()) return;
    let modal = document.getElementById('admin-account-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'admin-account-modal';
        modal.className = 'hidden fixed inset-0 z-[80] bg-slate-900/55 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4';
        modal.innerHTML = `
          <div class="w-full max-w-6xl max-h-[94vh] bg-white rounded-3xl border-2 border-fuchsia-100 shadow-2xl overflow-hidden flex flex-col">
            <div class="px-5 py-4 bg-fuchsia-50/70 border-b border-fuchsia-100 flex items-start justify-between gap-3">
              <div><h3 class="text-lg font-black text-fuchsia-700">👥 Quản lý tài khoản <span id="admin-account-count" class="ml-1 px-2 py-1 rounded-full bg-white border border-fuchsia-200 text-xs">0 tài khoản</span></h3><p class="text-xs font-bold text-slate-500 mt-1">Chuyển hạng tài khoản Regular / Trial / VIP. Trial có hạn 1 tháng, VIP có hạn 1 năm.</p></div>
              <button onclick="closeAdminAccountManager()" class="w-8 h-8 rounded-xl bg-white border border-fuchsia-200 text-fuchsia-500"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-4 border-b border-slate-100"><input id="admin-account-search" oninput="filterAdminAccountRows()" placeholder="Tìm theo ID, họ tên, lớp hoặc loại tài khoản..." class="w-full px-4 py-2.5 rounded-xl border-2 border-fuchsia-100 focus:border-fuchsia-300 outline-none text-sm font-bold"></div>
            <div class="overflow-auto flex-1 p-3"><table class="w-full text-sm"><thead class="sticky top-0 bg-fuchsia-50 text-fuchsia-700"><tr><th class="p-3 text-left">Mã HS</th><th class="p-3 text-left">Họ tên</th><th class="p-3">Lớp</th><th class="p-3">Loại tài khoản</th><th class="p-3">Hạn dùng thử</th><th class="p-3">Hạn VIP</th></tr></thead><tbody id="admin-account-body"></tbody></table></div>
            <div class="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 text-[11px] font-bold text-slate-500"><span>Regular: miễn phí • Trial: Premium 1 tháng • VIP: Premium 1 năm.</span><button onclick="loadAdminAccounts()" class="px-4 py-2 rounded-xl bg-white border border-fuchsia-200 text-fuchsia-600 font-black">⟳ Làm mới</button></div>
          </div>`;
        document.body.appendChild(modal);
    }
    modal.classList.remove('hidden');
    await loadAdminAccounts();
    await markAdminRegistrationsSeen();
}

function closeAdminAccountManager() { document.getElementById('admin-account-modal')?.classList.add('hidden'); }
let adminAccountCache = [];
async function loadAdminAccounts() {
    const body = document.getElementById('admin-account-body');
    if (body) body.innerHTML = '<tr><td colspan="6" class="p-6 text-center text-slate-400 font-bold">Đang tải...</td></tr>';
    try {
        const res = await callAppsScript('adminListAccounts', { token: currentUser?.token });
        if (!res?.ok) throw new Error(res?.error || 'Không tải được danh sách tài khoản');
        adminAccountCache = res.accounts || res.students || res.data || [];
        renderAdminAccounts(adminAccountCache);
    } catch (err) {
        if (body) body.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-rose-500 font-bold">${escapeHtml(err.message)}</td></tr>`;
    }
}
let adminSortState = { key: 'maHS', dir: 'asc' };

function normalizeAdminSortValue(row, key) {
    if (key === 'maHS') return String(row.maHS ?? row.MaHS ?? '').toLowerCase();
    if (key === 'hoTen') return String(row.hoTen ?? row.HoTen ?? '').toLowerCase();
    if (key === 'lop') return String(row.lop ?? row.Lop ?? '').toLowerCase();
    if (key === 'loaiTaiKhoan') return String(row.loaiTaiKhoan ?? row.LoaiTaiKhoan ?? 'regular').toLowerCase();
    if (key === 'hanDungThu') return String(row.hanDungThu ?? row.HanDungThu ?? '');
    if (key === 'hanVIP') return String(row.hanVIP ?? row.HanVIP ?? '');
    return '';
}

function sortAdminAccounts(key) {
    if (adminSortState.key === key) adminSortState.dir = adminSortState.dir === 'asc' ? 'desc' : 'asc';
    else adminSortState = { key, dir: 'asc' };
    renderAdminAccounts(adminAccountCache);
}

function adminSortIcon(key) {
    if (adminSortState.key !== key) return '<i class="fa-solid fa-sort ml-1 text-fuchsia-200"></i>';
    return adminSortState.dir === 'asc'
        ? '<i class="fa-solid fa-sort-up ml-1 text-fuchsia-500"></i>'
        : '<i class="fa-solid fa-sort-down ml-1 text-fuchsia-500"></i>';
}

function getTierSelectClass(tier) {
    if (tier === 'vip') return 'border-purple-300 text-purple-700 bg-purple-50';
    if (tier === 'trial') return 'border-amber-300 text-amber-700 bg-amber-50';
    return 'border-slate-300 text-slate-600 bg-slate-50';
}

function updateTierSelectStyle(selectEl) {
    if (!selectEl) return;
    selectEl.classList.remove('border-purple-300','text-purple-700','bg-purple-50','border-amber-300','text-amber-700','bg-amber-50','border-slate-300','text-slate-600','bg-slate-50');
    getTierSelectClass(selectEl.value).split(' ').forEach(c => selectEl.classList.add(c));
}

function renderAdminAccounts(rows) {
    const body = document.getElementById('admin-account-body');
    if (!body) return;
    document.getElementById('admin-account-count').textContent = `${rows.length} tài khoản`;

    const head = document.querySelector('#admin-account-modal thead tr');
    if (head) {
        head.innerHTML = `
            <th onclick="sortAdminAccounts('maHS')" class="p-3 text-left cursor-pointer select-none">Mã HS ${adminSortIcon('maHS')}</th>
            <th onclick="sortAdminAccounts('hoTen')" class="p-3 text-left cursor-pointer select-none">Họ tên ${adminSortIcon('hoTen')}</th>
            <th onclick="sortAdminAccounts('lop')" class="p-3 text-center cursor-pointer select-none">Lớp ${adminSortIcon('lop')}</th>
            <th onclick="sortAdminAccounts('loaiTaiKhoan')" class="p-3 text-center cursor-pointer select-none">Loại tài khoản ${adminSortIcon('loaiTaiKhoan')}</th>
            <th onclick="sortAdminAccounts('hanDungThu')" class="p-3 text-center cursor-pointer select-none">Hạn dùng thử ${adminSortIcon('hanDungThu')}</th>
            <th onclick="sortAdminAccounts('hanVIP')" class="p-3 text-center cursor-pointer select-none">Hạn VIP ${adminSortIcon('hanVIP')}</th>`;
    }

    const sortedRows = [...rows].sort((a, b) => {
        const av = normalizeAdminSortValue(a, adminSortState.key);
        const bv = normalizeAdminSortValue(b, adminSortState.key);
        const cmp = av.localeCompare(bv, 'vi', { numeric: true, sensitivity: 'base' });
        return adminSortState.dir === 'asc' ? cmp : -cmp;
    });

    body.innerHTML = sortedRows.map(r => {
        const id = r.maHS ?? r.MaHS ?? '';
        const name = r.hoTen ?? r.HoTen ?? '';
        const lop = r.lop ?? r.Lop ?? '';
        const tierRaw = String(r.loaiTaiKhoan ?? r.LoaiTaiKhoan ?? 'regular').toLowerCase();
        const tier = ['regular','trial','vip'].includes(tierRaw) ? tierRaw : 'regular';
        const trial = r.hanDungThu ?? r.HanDungThu ?? '—';
        const vip = r.hanVIP ?? r.HanVIP ?? '—';
        return `<tr class="border-b border-slate-100 admin-account-row" data-search="${escapeHtml(`${id} ${name} ${lop} ${tier}`.toLowerCase())}"><td class="p-3 font-black text-slate-700">${escapeHtml(id)}</td><td class="p-3 font-bold text-slate-700">${escapeHtml(name)}</td><td class="p-3 text-center font-bold">${escapeHtml(lop)}</td><td class="p-3 text-center"><select onchange="updateTierSelectStyle(this); changeAdminAccountType('${String(id).replace(/'/g,"\\'")}', this.value, this)" class="min-w-[102px] px-3 py-2 rounded-xl border-2 font-black text-center ${getTierSelectClass(tier)}"><option class="text-slate-600" value="regular" ${tier==='regular'?'selected':''}>Regular</option><option class="text-amber-700" value="trial" ${tier==='trial'?'selected':''}>Trial</option><option class="text-purple-700" value="vip" ${tier==='vip'?'selected':''}>VIP</option></select></td><td class="p-3 text-center font-bold text-slate-500">${escapeHtml(trial || '—')}</td><td class="p-3 text-center font-bold text-purple-600">${escapeHtml(vip || '—')}</td></tr>`;
    }).join('') || '<tr><td colspan="6" class="p-6 text-center text-slate-400">Chưa có tài khoản học sinh.</td></tr>';
}

function filterAdminAccountRows() {
    const q = (document.getElementById('admin-account-search')?.value || '').trim().toLowerCase();
    document.querySelectorAll('.admin-account-row').forEach(tr => tr.classList.toggle('hidden', q && !tr.dataset.search.includes(q)));
}
async function changeAdminAccountType(maHS, loaiTaiKhoan, selectEl) {
    selectEl.disabled = true;
    try {
        const res = await callAppsScript('adminSetAccountType', { token: currentUser?.token, maHS, loaiTaiKhoan });
        if (!res?.ok) throw new Error(res?.error || 'Không cập nhật được tài khoản');
        await loadAdminAccounts();
    } catch (err) { showAppNotice(err.message); await loadAdminAccounts(); }
    finally { selectEl.disabled = false; }
}

function resetStars() {
    starGreenCount = 0; starRedCount = 0;
    const greenEl = document.getElementById('star-green-count');
    const redEl = document.getElementById('star-red-count');
    if (greenEl) greenEl.textContent = 0;
    if (redEl) redEl.textContent = 0;
}

function clickProgressOrExam(type) {
    if (type === 'progress') return ensurePremiumAccess('Bài tập', () => openRoadmap());
    if (type === 'exam') return ensurePremiumAccess('Đấu trường đề thi', () => openExamHub());
}

// ==========================================
// CHỦ ĐỀ 1: BẢNG CHỮ CÁI TƯƠNG TÁC (1.1 ĐẾN 1.4)
// ==========================================
function openTopic(topicNum, topicName, icon) {
    setAppShellRootMode_(false);
    stopSpeaking();
    if (Number(topicNum) === 12) return openPoetryGarden();
    setMainTabActive_('discover');
    if (PREMIUM_TOPIC_IDS.has(Number(topicNum)) && !isPremiumUser()) {
        showPremiumAccessModal(topicName || 'Nội dung Premium');
        return;
    }
    activeTopicId = topicNum; activeExamContext = null; activeRoadmapContext = null;
    updateNavTabs(topicName, icon || '🐰', null);

    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics => {
        hideLoadingOverlay();
        const topicObj = topics.find(t => Number(t.topic_id) === Number(topicNum));
        if (!topicObj || !topicObj.questions || !topicObj.questions.length) throw new Error("Chủ đề không có câu hỏi nào");
        if (Number(topicNum) === 1) {
            // Cấu tạo số: chọn phạm vi trước, sau đó vào các hoạt động phù hợp từng phạm vi.
            renderExploreNumberScopes(Number(topicNum), topicName, topicObj.questions);
        } else if (Number(topicNum) === 2) {
            // Mục 2 dùng 4 nhánh: liền trước/sau, so sánh, sắp xếp dãy số, dãy số quy luật.
            renderExploreComparisonBranches(Number(topicNum), topicName, topicObj.questions);
        } else {
            renderExploreSubtopics(topicNum, topicName, topicObj);
        }
    }).catch(err => {
        hideLoadingOverlay();
        // Tải lỗi thì đưa header về đúng trạng thái trang chủ (không để lại tab/gạch breadcrumb thừa)
        activeTopicId = null;
        updateNavTabs(null, null, null);
        showAppNotice(`Không thể tải chủ đề: ${err.message}`);
    });
}


const EXPLORE_COMPARE_BRANCHES = [
    {
        key: 'neighbors',
        label: '2.1 Số liền trước, số liền sau',
        icon: '🚂',
        desc: 'Nhận biết số đứng ngay trước, ngay sau và các số liên tiếp.',
        types: ['number_line_neighbor']
    },
    {
        key: 'compare',
        label: '2.2 Phép so sánh',
        icon: '⚖️',
        desc: 'So sánh hai số, chọn >, <, = và nhận biết số lớn hơn, bé hơn.',
        types: ['compare_pair']
    },
    {
        key: 'order',
        label: '2.3 Sắp xếp dãy số',
        icon: '🧩',
        desc: 'Sắp xếp các số theo thứ tự từ bé đến lớn hoặc từ lớn đến bé.',
        types: ['order_numbers', 'between_number', 'range_reasoning']
    },
    {
        key: 'pattern',
        label: '2.4 Điền theo quy luật',
        icon: '🔗',
        desc: 'Khởi động với dãy số tăng/giảm đều và dãy emoji lặp lại.',
        types: ['sequence_missing']
    }
];

function getTopic2BranchPool_(pool, key) {
    const branchMap = { neighbors: '2.1', compare: '2.2', order: '2.3', pattern: '2.4' };
    const branchId = branchMap[key] || '';
    if (!branchId) return [];
    // Kiến trúc mới hoàn toàn data-driven: mỗi câu trong JSON tự khai báo explore_branch.
    // Không còn sinh câu, không còn tách 100/1000 bằng logic trong JS.
    return (pool || []).filter(q => String(q.explore_branch || '').trim() === branchId);
}

function renderExploreComparisonBranches(topicNum, topicName, pool) {
    const allPool = Array.isArray(pool) ? pool : [];
    pendingTopicQuiz = {
        topicNum,
        topicName,
        questions: allPool,
        selectedCompareBranch: null,
        selectedCompareBranchLabel: null
    };

    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5';

    container.innerHTML = EXPLORE_COMPARE_BRANCHES.map((item, idx) => {
        const palette = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        const count = getTopic2BranchPool_(allPool, item.key).length;
        return `
            <button onclick="selectExploreComparisonBranch('${item.key}')" class="p-4 ${palette.card} border-2 rounded-2xl text-left shadow-sm pastel-btn min-h-[118px] flex flex-col justify-between">
                <div class="flex items-start justify-between gap-3">
                    <span class="text-lg md:text-xl font-black leading-snug"><span class="mr-2">${item.icon}</span>${escapeHtml(item.label)}</span>
                    <span class="text-xs font-extrabold ${palette.badge} px-2.5 py-0.5 rounded-full border shrink-0">${count} câu</span>
                </div>
                <span class="mt-2 text-xs md:text-sm font-bold text-slate-500 leading-snug">${escapeHtml(item.desc)}</span>
            </button>`;
    }).join('');

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', null);
    switchAppView('view-dashboard-grid');
}

function selectExploreComparisonBranch(key) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const meta = EXPLORE_COMPARE_BRANCHES.find(x => x.key === key);
    if (!meta) return;

    const pool = getTopic2BranchPool_(pendingTopicQuiz.questions || [], key);
    if (!pool.length) return showAppNotice('Mục này đang được cập nhật thêm câu hỏi nhé bé!');

    pendingTopicQuiz.selectedCompareBranch = key;
    pendingTopicQuiz.selectedCompareBranchLabel = meta.label;
    practiceCycleRawPool = [...pool];
    const firstCycleQuestions = shuffleArray([...pool]);
    const { topicNum, topicName } = pendingTopicQuiz;
    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', meta.label);
    startTopicQuiz(topicNum, `${topicName} - ${meta.label}`, firstCycleQuestions, `topic2-${key}`);
}

function renderExploreSubtopics(topicNum, topicName, topicObj) {
    const sourceQuestions = topicObj?.questions || pendingTopicQuiz?.questions || [];
    // Mục 2 đã có kiến trúc 4 nhánh riêng. Chặn tuyệt đối luồng cũ
    // (gom 1.2/1.4 thành các thẻ phạm vi) để không thể xuất hiện lại.
    if (Number(topicNum) === 2) {
        return renderExploreComparisonBranches(Number(topicNum), topicName, sourceQuestions);
    }
    pendingTopicQuiz = { topicNum, topicName, questions: sourceQuestions };

    const groups = [], groupMap = {}, groupLabels = {};
    sourceQuestions.forEach(q => {
        const k = (q.sub_topic || 'Câu hỏi chung').trim();
        if (!groupMap[k]) {
            groups.push(k);
            groupMap[k] = [];
            groupLabels[k] = q.sub_topic_label || k;
        }
        groupMap[k].push(q);
    });
    // Mục 3 · Phép cộng và trừ: cho "Tên gọi thành phần phép cộng và phép trừ" lên đầu.
    // Dữ liệu gốc vẫn giữ sub_code 2.6 để không làm vỡ roadmap/bài tập cũ; chỉ đổi thứ tự hiển thị Khám phá.
    if (Number(topicNum) === 3) {
        const preferredOrder = ['2.6', '2.1', '2.2', '2.3', '2.4', '2.5'];
        groups.sort((a, b) => {
            const ai = preferredOrder.indexOf(String(a));
            const bi = preferredOrder.indexOf(String(b));
            const ar = ai === -1 ? 999 : ai;
            const br = bi === -1 ? 999 : bi;
            return ar - br;
        });
    }

    pendingTopicQuiz.groups = groups;
    pendingTopicQuiz.groupMap = groupMap;
    pendingTopicQuiz.groupLabels = groupLabels;

    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    container.className = `w-full grid grid-cols-1 sm:grid-cols-2 ${groups.length > 6 ? 'lg:grid-cols-3' : ''} gap-2.5`;

    let subHtml = '';
    groups.forEach((subName, idx) => {
        const style = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        const displayTitle = beautifySubtopicName(groupLabels[subName]);
        const count = groupMap[subName].length;
        const desc = Number(topicNum) === 1
            ? (subName === '1A'
                ? 'Đọc – viết – tách gộp – giá trị hàng – ước lượng'
                : 'Liền trước/sau – vị trí trên tia số – so sánh – sắp xếp')
            : '';
        subHtml += `
            <button onclick="selectSubtopic(${idx})" class="p-4 ${style.card} border-2 rounded-2xl font-bold text-left transition-all flex flex-col justify-between shadow-sm pastel-btn min-h-[96px]">
                <div class="flex items-start justify-between gap-3 w-full">
                    <span class="text-base md:text-lg leading-snug"><strong class="${style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(displayTitle)}</span>
                    <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 shadow-inner">${count} câu</span>
                </div>
                ${desc ? `<span class="mt-2 text-xs md:text-sm font-bold text-slate-500 leading-snug">${escapeHtml(desc)}</span>` : ''}
            </button>`;
    });
    container.innerHTML = subHtml;
    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '', null);
    switchAppView('view-dashboard-grid');
}


function getExploreNumberScopePool_(pool, scope) {
    const wanted = String(scope) === '1000' ? new Set(['1.3']) : new Set(['1.1', '1.5']);
    return (pool || []).filter(q => wanted.has(String(q.sub_id || q.sub_topic || q.sub_code || '').trim()));
}

function renderExploreNumberScopes(topicNum, topicName, pool) {
    pendingTopicQuiz = {
        topicNum,
        topicName,
        questions: pool,
        selectedNumberScope: null,
        selectedNumberScopeLabel: null,
        selectedNumberScopePool: null
    };

    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5';

    const scopes = [
        { key: '100', label: 'Phạm vi 100', icon: '🔢', desc: 'Số có hai chữ số · chục và đơn vị · tách gộp · ước lượng.' },
        { key: '1000', label: 'Phạm vi 1000', icon: '💯', desc: 'Số có ba chữ số · trăm, chục và đơn vị · giá trị hàng.' }
    ];

    container.innerHTML = scopes.map((item, idx) => {
        const palette = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        const count = getExploreNumberScopePool_(pool, item.key).length;
        return `
            <button onclick="selectExploreNumberScope('${item.key}')" class="p-4 ${palette.card} border-2 rounded-2xl text-left shadow-sm pastel-btn min-h-[112px] flex flex-col justify-between ${count ? '' : 'opacity-50 cursor-not-allowed'}" ${count ? '' : 'disabled'}>
                <div class="flex items-center justify-between gap-3">
                    <span class="text-lg md:text-xl font-black"><span class="mr-2">${item.icon}</span>${escapeHtml(item.label)}</span>
                    <span class="text-xs font-extrabold ${palette.badge} px-2.5 py-0.5 rounded-full border shrink-0">${count} câu</span>
                </div>
                <span class="mt-2 text-xs md:text-sm font-bold text-slate-500 leading-snug">${escapeHtml(item.desc)}</span>
            </button>`;
    }).join('');

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', null);
    switchAppView('view-dashboard-grid');
}

function selectExploreNumberScope(scope) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const pool = getExploreNumberScopePool_(pendingTopicQuiz.questions || [], scope);
    if (!pool.length) return showAppNotice('Phạm vi này đang được cập nhật thêm câu hỏi nhé bé!');

    const label = String(scope) === '1000' ? 'Phạm vi 1000' : 'Phạm vi 100';
    pendingTopicQuiz.selectedNumberScope = String(scope);
    pendingTopicQuiz.selectedNumberScopeLabel = label;
    pendingTopicQuiz.selectedNumberScopePool = pool;
    renderExploreNumberActivities(label, pool);
}

function getNumberComposePool_(scope, pool) {
    const targetSub = String(scope) === '1000' ? '1.3' : '1.1';
    return (pool || []).filter(q =>
        String(q.sub_id || q.sub_topic || '').trim() === targetSub &&
        q.explore_type === 'compose_words'
    );
}

function getNumberEstimatePool_(scope, pool) {
    if (String(scope) === '1000') return [];
    return (pool || []).filter(q => q.explore_type === 'quantity_estimate');
}

function getFindNumberPool_(scope, pool) {
    if (String(scope) !== '100') return [];
    return (pool || []).filter(q => q.explore_type === 'find_number');
}

function renderExploreNumberActivities(scopeLabel, pool) {
    if (!pendingTopicQuiz) return;
    const scope = pendingTopicQuiz.selectedNumberScope || (String(scopeLabel).includes('1000') ? '1000' : '100');
    const composeCount = getNumberComposePool_(scope, pool).length;
    const estimateCount = getNumberEstimatePool_(scope, pool).length;
    const findNumberCount = getFindNumberPool_(scope, pool).length;
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5';

    const cards = [
        { key:'lecture', icon:'📖', title:'1. Bài giảng', desc: scope === '1000' ? 'Hiểu hàng trăm, hàng chục, hàng đơn vị và cách tách số.' : 'Hiểu hàng chục, hàng đơn vị và cách tách số.', count:'' },
        { key:'compose', icon:'🧩', title:'2. Ghép số', desc:'Đọc giá trị từng hàng rồi ghép thành số đúng.', count: composeCount ? `${composeCount} câu` : '' },
        ...(scope === '100' ? [
            { key:'estimate', icon:'🎯', title:'3. Ước lượng số lượng', desc:'Nhìn nhanh theo nhóm chục rồi ước lượng số lượng gần đúng.', count:`${estimateCount} câu` },
            { key:'find-number', icon:'🔎', title:'4. Tìm số', desc:'Nhận biết số lớn nhất, bé nhất, chẵn, lẻ, tròn chục và các số đặc biệt.', count:`${findNumberCount} câu` }
        ] : [])
    ];
    container.innerHTML = cards.map((item, idx) => {
        const palette = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        return `<button onclick="selectExploreNumberActivity('${item.key}')" class="p-4 ${palette.card} border-2 rounded-2xl text-left shadow-sm pastel-btn min-h-[126px] flex flex-col justify-between">
            <div class="flex items-start justify-between gap-3">
                <span class="text-lg md:text-xl font-black"><span class="mr-2">${item.icon}</span>${item.title}</span>
                ${item.count ? `<span class="text-xs font-extrabold ${palette.badge} px-2.5 py-0.5 rounded-full border shrink-0">${item.count}</span>` : ''}
            </div>
            <span class="mt-2 text-sm md:text-base font-bold text-slate-500 leading-snug">${item.desc}</span>
        </button>`;
    }).join('');

    const { topicName, topicNum } = pendingTopicQuiz;
    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', scopeLabel);
    switchAppView('view-dashboard-grid');
}

function selectExploreNumberActivity(activity) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    pendingTopicQuiz.selectedNumberActivity = activity;
    const scope = pendingTopicQuiz.selectedNumberScope || '100';
    const scopeLabel = pendingTopicQuiz.selectedNumberScopeLabel || (scope === '1000' ? 'Phạm vi 1000' : 'Phạm vi 100');
    const pool = pendingTopicQuiz.selectedNumberScopePool || [];
    if (activity === 'lecture') return renderNumberPlaceValueLecture_(scope, scopeLabel);

    let questions = [];
    let label = '';
    if (activity === 'compose') {
        label = 'Ghép số';
        questions = getNumberComposePool_(scope, pool);
    } else if (activity === 'estimate') {
        label = 'Ước lượng số lượng';
        questions = getNumberEstimatePool_(scope, pool);
    } else if (activity === 'find-number') {
        label = 'Tìm số';
        questions = getFindNumberPool_(scope, pool);
    }
    if (!questions.length) return showAppNotice('Phần này đang được cập nhật thêm câu hỏi nhé bé!');
    practiceCycleRawPool = [...questions];
    const firstCycleQuestions = shuffleArray([...questions]);
    const { topicName, topicNum } = pendingTopicQuiz;
    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', scopeLabel, label);
    startTopicQuiz(topicNum, `${topicName} - ${scopeLabel} - ${label}`, firstCycleQuestions, `number-${scope}-${activity}`);
}

function renderNumberPlaceValueLecture_(scope, scopeLabel) {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    const is1000 = String(scope) === '1000';
    container.className = 'w-full';

    const exampleCards = is1000 ? `
        <div class="grid grid-cols-4 gap-2.5 mt-4">
            ${[['365','300 + 60 + 5','pink'],['420','400 + 20 + 0','purple'],['708','700 + 0 + 8','amber'],['900','900 + 0 + 0','emerald']].map(([n,split,c]) => `<div class="rounded-2xl bg-${c}-50 border-2 border-${c}-200 p-3 text-center"><div class="text-2xl md:text-3xl font-black text-${c}-600">${n}</div><div class="mt-1 text-base md:text-lg font-black text-slate-700">= ${split}</div></div>`).join('')}
        </div>` : `
        <div class="grid grid-cols-4 gap-2.5 mt-4">
            ${[['10','10 + 0','pink'],['80','80 + 0','purple'],['36','30 + 6','amber'],['92','90 + 2','emerald']].map(([n,split,c]) => `<div class="rounded-2xl bg-${c}-50 border-2 border-${c}-200 p-3 text-center"><div class="text-3xl md:text-4xl font-black text-${c}-600">${n}</div><div class="mt-1 text-base md:text-lg font-black text-slate-700">= ${split}</div></div>`).join('')}
        </div>`;

    const placeGrid = is1000 ? `
        <div class="grid grid-cols-3 gap-2 max-w-xl mx-auto mt-4">
            <div class="rounded-2xl border-2 border-amber-200 bg-amber-50 p-3 text-center"><div class="text-xs md:text-sm font-black text-amber-700">HÀNG TRĂM</div><div class="text-4xl md:text-5xl font-black text-amber-600 mt-1">3</div><div class="text-xs md:text-sm font-bold text-slate-500">3 trăm = 300</div></div>
            <div class="rounded-2xl border-2 border-pink-200 bg-pink-50 p-3 text-center"><div class="text-xs md:text-sm font-black text-pink-700">HÀNG CHỤC</div><div class="text-4xl md:text-5xl font-black text-pink-600 mt-1">6</div><div class="text-xs md:text-sm font-bold text-slate-500">6 chục = 60</div></div>
            <div class="rounded-2xl border-2 border-purple-200 bg-purple-50 p-3 text-center"><div class="text-xs md:text-sm font-black text-purple-700">HÀNG ĐƠN VỊ</div><div class="text-4xl md:text-5xl font-black text-purple-600 mt-1">5</div><div class="text-xs md:text-sm font-bold text-slate-500">5 đơn vị = 5</div></div>
        </div>` : `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-4">
            ${[{n:'10',t:'1',o:'0'},{n:'80',t:'8',o:'0'},{n:'36',t:'3',o:'6'},{n:'92',t:'9',o:'2'}].map((x,i) => `
                <div class="rounded-2xl border-2 ${i%2===0?'border-pink-200 bg-pink-50/60':'border-purple-200 bg-purple-50/60'} p-3">
                    <div class="text-center text-2xl md:text-3xl font-black text-slate-700 mb-2">Số ${x.n}</div>
                    <div class="grid grid-cols-2 gap-1.5">
                        <div class="rounded-xl border border-pink-200 bg-white/80 p-2 text-center"><div class="text-sm md:text-base font-black text-pink-700">HÀNG CHỤC</div><div class="text-3xl md:text-4xl font-black text-pink-600">${x.t}</div><div class="text-sm md:text-base font-bold text-slate-500">${x.t} chục = ${Number(x.t)*10}</div></div>
                        <div class="rounded-xl border border-purple-200 bg-white/80 p-2 text-center"><div class="text-sm md:text-base font-black text-purple-700">HÀNG ĐƠN VỊ</div><div class="text-3xl md:text-4xl font-black text-purple-600">${x.o}</div><div class="text-sm md:text-base font-bold text-slate-500">${x.o} đơn vị = ${x.o}</div></div>
                    </div>
                </div>`).join('')}
        </div>`;

    const speech = is1000
        ? 'Bé ơi, một số có ba chữ số gồm hàng trăm, hàng chục và hàng đơn vị. Chữ số đứng bên trái là hàng trăm, chữ số ở giữa là hàng chục, chữ số đứng bên phải là hàng đơn vị. Ví dụ số ba trăm sáu mươi lăm có 3 ở hàng trăm, 6 ở hàng chục và 5 ở hàng đơn vị. Giá trị của 3 trăm là 300, của 6 chục là 60 và của 5 đơn vị là 5. Vì vậy 365 bằng 300 cộng 60 cộng 5. Nếu một hàng có chữ số 0 thì hàng đó vẫn giữ vị trí nhưng có giá trị bằng 0.'
        : 'Bé ơi, một số có hai chữ số gồm hàng chục và hàng đơn vị. Chữ số đứng bên trái là hàng chục, chữ số đứng bên phải là hàng đơn vị. Ví dụ số ba mươi sáu có 3 ở hàng chục và 6 ở hàng đơn vị. Ba chục có giá trị là 30, sáu đơn vị có giá trị là 6, nên 36 bằng 30 cộng 6. Với số tròn chục như 10 hoặc 80, chữ số hàng đơn vị là 0. Vì vậy 10 bằng 10 cộng 0, còn 80 bằng 80 cộng 0. Bé nhớ nhé, mỗi chữ số vừa có vị trí, vừa có giá trị theo hàng của nó.';

    const visibleLesson = is1000
        ? `Bé ơi, một số có <b>3 chữ số</b> gồm <b>hàng trăm – hàng chục – hàng đơn vị</b>. Chữ số bên trái cho biết số trăm, chữ số ở giữa cho biết số chục, chữ số bên phải cho biết số đơn vị. Mỗi chữ số mang giá trị theo hàng của mình. Ví dụ: <b>365 = 300 + 60 + 5</b>. Nếu một hàng có chữ số <b>0</b>, hàng đó vẫn giữ vị trí nhưng có giá trị bằng 0.`
        : `Bé ơi, một số có <b>2 chữ số</b> gồm <b>hàng chục</b> và <b>hàng đơn vị</b>. Chữ số bên trái là hàng chục, chữ số bên phải là hàng đơn vị. Mỗi chữ số mang giá trị theo hàng của mình. Ví dụ: <b>36 = 30 + 6</b>. Với số tròn chục như <b>10</b> hay <b>80</b>, hàng đơn vị là <b>0</b>, nên <b>10 = 10 + 0</b> và <b>80 = 80 + 0</b>.`;

    container.innerHTML = `<div class="w-full pastel-card p-4 md:p-6">
        <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div class="hidden md:block"></div>
            <div class="text-center"><div class="text-4xl mb-1">🧮</div><h2 class="text-2xl md:text-3xl font-black text-purple-700">Bài giảng · ${scopeLabel}</h2></div>
            <div class="flex justify-center md:justify-end">
                <button onclick="speakVietnamese(${JSON.stringify(speech)})" class="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm md:text-base font-black shadow-md pastel-btn whitespace-nowrap">🔊 Nghe Cô Thỏ Ngọc đọc</button>
            </div>
        </div>
        <div class="mt-4 rounded-2xl border-2 border-pink-200 bg-gradient-to-r from-pink-50/80 to-purple-50/80 p-4 md:p-5">
            <div class="flex items-start gap-3 max-w-4xl mx-auto"><div class="text-3xl shrink-0">🐰</div><div><div class="text-base md:text-lg font-black text-pink-600 mb-1">Cô Thỏ Ngọc giảng bài</div><p class="text-base md:text-lg font-bold leading-relaxed text-slate-600">${visibleLesson}</p></div></div>
        </div>
        <div class="mt-4 rounded-3xl border-2 border-pink-200 bg-white/80 p-4 md:p-5">
            <div class="text-center text-lg md:text-xl font-black text-slate-700">Quan sát vị trí các chữ số</div>
            ${placeGrid}
            <div class="mt-4 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-purple-200 p-4 text-center"><div class="text-base md:text-lg font-black text-slate-600">Tách số theo giá trị hàng</div><div class="mt-1 text-3xl md:text-4xl font-black text-purple-700">${is1000 ? '365 = 300 + 60 + 5' : '36 = 30 + 6'}</div></div>
            ${exampleCards}
            <div class="mt-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-3 text-center text-base md:text-lg font-black text-emerald-700">💡 ${is1000 ? 'Chữ số 0 vẫn giữ chỗ cho hàng của nó.' : 'Số tròn chục có hàng đơn vị bằng 0.'}</div>
        </div>
    </div>`;

    const { topicName, topicNum } = pendingTopicQuiz;
    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', scopeLabel, 'Bài giảng');
    switchAppView('view-dashboard-grid');

    // Mở bài giảng là Cô Thỏ Ngọc đọc luôn. Lệnh này chạy ngay trong thao tác bấm mở bài
    // để trình duyệt vẫn coi đây là phát âm thanh do người dùng khởi tạo.
    speakVietnamese(speech, 0.96);
}

const EXPLORE_LEVELS = {
    1: { label: 'Cấp 1 · Mắt tinh Toán học', icon: '👀', desc: 'Nhìn trực quan, nhận biết và chọn đáp án.' },
    2: { label: 'Cấp 2 · Hiểu số thật chắc', icon: '💡', desc: 'Hiểu quan hệ giữa số, vị trí và giá trị hàng.' },
    3: { label: 'Cấp 3 · Biến hóa con số', icon: '🔄', desc: 'Đảo thứ tự, ẩn dữ kiện và đổi cách biểu diễn.' },
    4: { label: 'Cấp 4 · Thám tử suy luận', icon: '🧠', desc: 'Kết hợp điều kiện, so sánh và suy luận nhiều bước.' }
};

function renderExploreLevelsForTopic(topicNum, topicName, pool) {
    pendingTopicQuiz = { topicNum, topicName, questions: pool, directLevelPool: pool };
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5';
    let html = '';
    [1,2,3,4].forEach(level => {
        const meta = EXPLORE_LEVELS[level];
        const count = pool.filter(q => Number(q.explore_level) === level).length;
        const palette = SUBTOPIC_PALETTES[(level - 1) % SUBTOPIC_PALETTES.length];
        html += `
            <button onclick="selectExploreLevel(${level})" class="p-4 ${palette.card} border-2 rounded-2xl text-left shadow-sm pastel-btn min-h-[112px] flex flex-col justify-between ${count ? '' : 'opacity-50 cursor-not-allowed'}" ${count ? '' : 'disabled'}>
                <div class="flex items-center justify-between gap-3">
                    <span class="text-lg md:text-xl font-black"><span class="mr-2">${meta.icon}</span>${escapeHtml(meta.label)}</span>
                    <span class="text-xs font-extrabold ${palette.badge} px-2.5 py-0.5 rounded-full border shrink-0">${count} câu</span>
                </div>
                <span class="mt-2 text-xs md:text-sm font-bold text-slate-500 leading-snug">${escapeHtml(meta.desc)}</span>
            </button>`;
    });
    container.innerHTML = html;
    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', null);
    switchAppView('view-dashboard-grid');
}

function renderExploreLevelsForGroup(groupKey, groupLabel, pool) {
    if (!pendingTopicQuiz) return;
    pendingTopicQuiz.selectedExploreGroup = groupKey;
    pendingTopicQuiz.selectedExploreGroupLabel = groupLabel;

    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5';

    let html = '';
    [1,2,3,4].forEach(level => {
        const meta = EXPLORE_LEVELS[level];
        const count = pool.filter(q => Number(q.explore_level) === level).length;
        const palette = SUBTOPIC_PALETTES[(level - 1) % SUBTOPIC_PALETTES.length];
        html += `
            <button onclick="selectExploreLevel(${level})" class="p-4 ${palette.card} border-2 rounded-2xl text-left shadow-sm pastel-btn min-h-[112px] flex flex-col justify-between ${count ? '' : 'opacity-50 cursor-not-allowed'}" ${count ? '' : 'disabled'}>
                <div class="flex items-center justify-between gap-3">
                    <span class="text-lg md:text-xl font-black"><span class="mr-2">${meta.icon}</span>${escapeHtml(meta.label)}</span>
                    <span class="text-xs font-extrabold ${palette.badge} px-2.5 py-0.5 rounded-full border shrink-0">${count} câu</span>
                </div>
                <span class="mt-2 text-xs md:text-sm font-bold text-slate-500 leading-snug">${escapeHtml(meta.desc)}</span>
            </button>`;
    });
    container.innerHTML = html;
    const { topicName, topicNum } = pendingTopicQuiz;
    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', groupLabel);
    switchAppView('view-dashboard-grid');
}

function selectExploreLevel(level) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const { topicNum, topicName, groupMap, selectedExploreGroup, selectedExploreGroupLabel, directLevelPool, selectedNumberScopePool, selectedNumberScopeLabel } = pendingTopicQuiz;
    const sourcePool = selectedNumberScopePool || directLevelPool || groupMap?.[selectedExploreGroup] || [];
    const pool = sourcePool.filter(q => Number(q.explore_level) === Number(level));
    if (!pool.length) return showAppNotice('Level này đang được cập nhật thêm câu hỏi nhé bé!');

    practiceCycleRawPool = [...pool];
    const levelMeta = EXPLORE_LEVELS[level];
    const firstCycleQuestions = shuffleArray([...pool]);
    const contextLabel = selectedNumberScopeLabel || selectedExploreGroupLabel || '';
    const levelContext = contextLabel ? `${contextLabel} · ${levelMeta.label}` : levelMeta.label;
    const title = contextLabel ? `${topicName} - ${contextLabel} - ${levelMeta.label}` : `${topicName} - ${levelMeta.label}`;
    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', levelContext);
    startTopicQuiz(topicNum, title, firstCycleQuestions, selectedNumberScopeLabel || selectedExploreGroup || `topic-${topicNum}`);
}

function selectSubtopic(idx) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    if (Number(pendingTopicQuiz.topicNum) === 2) {
        return renderExploreComparisonBranches(2, pendingTopicQuiz.topicName, pendingTopicQuiz.questions || []);
    }
    const { topicNum, topicName, questions, groups, groupMap, groupLabels } = pendingTopicQuiz;
    const subLabel = idx !== null ? groups[idx] : null;
    const pool = idx !== null ? groupMap[subLabel] : questions;
    const displayLabel = subLabel ? beautifySubtopicName(groupLabels[subLabel]) : null;

    const finalTitle = displayLabel ? `${topicName} - ${displayLabel}` : topicName;
    practiceCycleRawPool = [...pool];
    const firstCycleQuestions = shuffleArray([...pool]);

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', displayLabel || 'Tất cả các mục');
    startTopicQuiz(topicNum, finalTitle, firstCycleQuestions, subLabel);
}


// ==========================================
// 12. VƯỜN THƠ TOÁN HỌC
// 50 bài thơ ngắn bao quát các mảng kiến thức Toán 2.
// Đây là nội dung đọc – nghe – ghi nhớ, không chấm điểm.
// ==========================================
function poetrySentenceCase_(text) {
    const s = String(text || '').trim().toLocaleLowerCase('vi-VN');
    return s ? s.charAt(0).toLocaleUpperCase('vi-VN') + s.slice(1) : '';
}

async function loadPoetryGardenData() {
    if (poetryGardenCache) return poetryGardenCache;
    const res = await fetch('assets/data/vuon_tho_toan_hoc.json');
    if (!res.ok) throw new Error('Không thể tải Vườn thơ Toán học');
    poetryGardenCache = await res.json();
    return poetryGardenCache;
}

async function openPoetryGarden() {
    setAppShellRootMode_(false);
    stopSpeaking();
    activeTopicId = 12;
    activeExamContext = null;
    activeRoadmapContext = null;
    pendingTopicQuiz = null;
    poetryGardenState = { category: null, poemIndex: null };
    setMainTabActive_('discover');
    updateNavTabs('12. Vườn thơ toán học', '', null);
    showLoadingOverlay('Cô Thỏ Ngọc đang mở Vườn thơ toán học...');
    try {
        const data = await loadPoetryGardenData();
        hideLoadingOverlay();
        renderPoetryCategories(data);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice(err.message || 'Không tải được Vườn thơ toán học');
    }
}

function getPoetryCategoryList_(data) {
    const map = new Map();
    (data?.poems || []).forEach(p => {
        if (!map.has(p.category)) map.set(p.category, { name: p.category, icon: p.category_icon || '🌷', poems: [] });
        map.get(p.category).poems.push(p);
    });
    return [...map.values()];
}

function renderPoetryCategories(data) {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    const cats = getPoetryCategoryList_(data || poetryGardenCache);
    poetryGardenState = { category: null, poemIndex: null };
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5';
    container.innerHTML = cats.map((c, idx) => {
        const p = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        return `<button onclick="renderPoetryCategory(${idx})" class="p-4 ${p.card} border-2 rounded-2xl text-left shadow-sm pastel-btn min-h-[112px] flex flex-col justify-between">
            <div class="flex items-start justify-between gap-3">
                <span class="text-base md:text-lg font-black leading-snug"><span class="mr-2 text-xl">${c.icon}</span>${escapeHtml(poetrySentenceCase_(c.name))}</span>
                <span class="text-xs font-extrabold ${p.badge} px-2.5 py-0.5 rounded-full border shrink-0">${c.poems.length} bài</span>
            </div>
            <span class="mt-2 text-xs md:text-sm font-bold text-slate-500">Đọc vui – nghe thơ – nhớ Toán thật tự nhiên.</span>
        </button>`;
    }).join('');
    updateNavTabs('12. Vườn thơ toán học', '', null);
    switchAppView('view-dashboard-grid');
}

function ensurePoetryGardenStyles_() {
    if (document.getElementById('poetry-garden-effects-style')) return;
    const style = document.createElement('style');
    style.id = 'poetry-garden-effects-style';
    style.textContent = `
        .poetry-scene { position: relative; overflow: hidden; isolation: isolate; }
        .poetry-scene > .poetry-content { position: relative; z-index: 5; }
        .poetry-cloud { position:absolute; z-index:1; opacity:.72; filter:drop-shadow(0 4px 8px rgba(148,163,184,.12)); animation:poetryCloud linear infinite; pointer-events:none; }
        .poetry-cloud.c1 { top:8%; left:-16%; font-size:3.2rem; animation-duration:24s; }
        .poetry-cloud.c2 { top:24%; left:-24%; font-size:2.5rem; animation-duration:31s; animation-delay:-8s; opacity:.5; }
        .poetry-cloud.c3 { top:54%; left:-18%; font-size:2rem; animation-duration:27s; animation-delay:-15s; opacity:.38; }
        @keyframes poetryCloud { from{transform:translateX(0)} to{transform:translateX(120vw)} }
        .poetry-bird { position:absolute; z-index:2; pointer-events:none; animation:poetryBird linear infinite; opacity:.78; }
        .poetry-bird.b1 { top:15%; left:-8%; font-size:1.6rem; animation-duration:15s; }
        .poetry-bird.b2 { top:34%; left:-10%; font-size:1.25rem; animation-duration:20s; animation-delay:-7s; }
        @keyframes poetryBird { 0%{transform:translate(0,0) rotate(-4deg)} 50%{transform:translate(55vw,-18px) rotate(4deg)} 100%{transform:translate(112vw,7px) rotate(-3deg)} }
        .poetry-wind { position:absolute; z-index:2; pointer-events:none; opacity:.20; animation:poetryWind 5s ease-in-out infinite; }
        .poetry-wind.w1 { top:38%; left:5%; font-size:2.2rem; }
        .poetry-wind.w2 { top:67%; right:7%; font-size:1.9rem; animation-delay:-2s; }
        @keyframes poetryWind { 0%,100%{transform:translateX(0) scaleX(1)} 50%{transform:translateX(18px) scaleX(1.08)} }
        .poetry-leaf { position:absolute; top:-12%; z-index:3; pointer-events:none; animation:poetryLeaf linear infinite; opacity:.78; }
        @keyframes poetryLeaf { 0%{transform:translate3d(0,-10vh,0) rotate(0deg)} 50%{transform:translate3d(38px,52vh,0) rotate(190deg)} 100%{transform:translate3d(-18px,112vh,0) rotate(380deg)} }
        .poetry-deco { position:absolute; z-index:2; pointer-events:none; opacity:.82; animation:poetryFloat 4s ease-in-out infinite; }
        @keyframes poetryFloat { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-8px) rotate(3deg)} }
        @media (prefers-reduced-motion: reduce) {
            .poetry-cloud,.poetry-bird,.poetry-wind,.poetry-leaf,.poetry-deco { animation:none !important; }
        }
    `;
    document.head.appendChild(style);
}

async function renderPoetryCategory(categoryIndex) {
    const data = poetryGardenCache || await loadPoetryGardenData();
    const cats = getPoetryCategoryList_(data);
    const cat = cats[categoryIndex];
    if (!cat) return openPoetryGarden();
    poetryGardenState = { category: categoryIndex, poemIndex: null };
    const container = document.getElementById('view-dashboard-grid');
    container.className = 'w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5';
    container.innerHTML = cat.poems.map((p, idx) => `
        <button onclick="openMathPoem(${categoryIndex}, ${idx})" class="pastel-card px-4 py-3 text-left hover:border-rose-400 transition-all pastel-btn flex items-center min-h-[58px]">
            <div class="text-base md:text-lg font-black text-purple-700 leading-snug">Bài ${Number(p.no || idx + 1)}. ${escapeHtml(poetrySentenceCase_(p.title))}</div>
        </button>`).join('');
    updateNavTabs('12. Vườn thơ toán học', '', poetrySentenceCase_(cat.name));
    switchAppView('view-dashboard-grid');
}

async function openMathPoem(categoryIndex, poemIndex) {
    setAppShellRootMode_(false);
    stopSpeaking();
    ensurePoetryGardenStyles_();
    const data = poetryGardenCache || await loadPoetryGardenData();
    const cats = getPoetryCategoryList_(data);
    const cat = cats[categoryIndex];
    const poem = cat?.poems?.[poemIndex];
    if (!poem) return renderPoetryCategory(categoryIndex);
    poetryGardenState = { category: categoryIndex, poemIndex };
    const container = document.getElementById('view-dashboard-grid');
    container.className = 'w-full flex justify-center';
    const lines = (poem.lines || []).map((line, i) => `<div class="text-lg md:text-2xl font-extrabold text-slate-700 leading-[1.65] ${i % 2 ? 'md:translate-x-2' : 'md:-translate-x-2'}">${escapeHtml(line)}</div>`).join('');
    const leaves = ['🍂','🍁','🍃','🍂','🍁','🍃','🍂','🍁'].map((x,i) => `<span class="poetry-leaf" style="left:${8+i*12}%;font-size:${1.0+(i%3)*0.28}rem;animation-duration:${8+(i%4)*2}s;animation-delay:-${i*1.15}s">${x}</span>`).join('');
    const decoByCat = [
        ['🔢','⭐','➕','🌼'],
        ['📐','🔺','🟦','🧩'],
        ['📏','⏰','⚖️','💧'],
        ['✖️','➗','🍓','🖐️'],
        ['🧠','📊','🍎','✨']
    ];
    const d = decoByCat[categoryIndex % decoByCat.length];
    container.innerHTML = `
        <div class="w-full max-w-3xl pastel-card poetry-scene border-2 border-rose-200 min-h-[560px] bg-gradient-to-b from-sky-50 via-white to-amber-50">
            <span class="poetry-cloud c1">☁️</span><span class="poetry-cloud c2">☁️</span><span class="poetry-cloud c3">☁️</span>
            <span class="poetry-bird b1">🕊️</span><span class="poetry-bird b2">🐦</span>
            <span class="poetry-wind w1">〰️</span><span class="poetry-wind w2">〰️</span>${leaves}
            <span class="poetry-deco" style="left:5%;bottom:10%;font-size:2rem">${d[0]}</span>
            <span class="poetry-deco" style="right:6%;bottom:14%;font-size:2rem;animation-delay:-1.3s">${d[1]}</span>
            <span class="poetry-deco" style="left:8%;top:31%;font-size:1.7rem;animation-delay:-2.1s">${d[2]}</span>
            <span class="poetry-deco" style="right:8%;top:34%;font-size:1.8rem;animation-delay:-.7s">${d[3]}</span>
            <div class="poetry-content">
                <div class="px-5 md:px-8 py-5 text-center border-b border-pink-100 bg-white/65 backdrop-blur-[2px]">
                    <div class="text-4xl mb-2">${cat.icon}</div>
                    <div class="text-xs md:text-sm font-black text-rose-500 uppercase tracking-wide">Vườn thơ toán học</div>
                    <h2 class="text-2xl md:text-3xl font-black text-purple-700 mt-1">Bài ${Number(poem.no || poemIndex + 1)}. ${escapeHtml(poetrySentenceCase_(poem.title))}</h2>
                </div>
                <div class="px-5 md:px-10 py-7 md:py-9 text-center bg-white/62 backdrop-blur-[1.5px] mx-3 md:mx-6 my-4 rounded-[28px] border border-white/80 shadow-sm">${lines}</div>
                <div class="px-4 md:px-6 py-4 border-t border-pink-100 bg-white/70 backdrop-blur-[2px] grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <div class="flex justify-start">
                        <button onclick="openMathPoem(${categoryIndex}, ${poemIndex - 1})" ${poemIndex <= 0 ? 'disabled' : ''} class="px-4 py-2.5 rounded-xl bg-white border-2 border-purple-200 text-purple-700 font-black pastel-btn disabled:opacity-35 disabled:cursor-not-allowed">← Bài trước</button>
                    </div>
                    <div class="flex flex-col items-center justify-center gap-2">
                        <div class="px-4 py-1.5 rounded-full bg-white border-2 border-pink-200 text-pink-600 font-black text-sm md:text-base shadow-sm">${poemIndex + 1}/${cat.poems.length}</div>
                        <button onclick="speakMathPoem(${categoryIndex}, ${poemIndex})" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black pastel-btn whitespace-nowrap">🔊 Nghe Cô Thỏ Ngọc đọc</button>
                    </div>
                    <div class="flex justify-end">
                        <button onclick="openMathPoem(${categoryIndex}, ${poemIndex + 1})" ${poemIndex >= cat.poems.length - 1 ? 'disabled' : ''} class="px-4 py-2.5 rounded-xl bg-white border-2 border-purple-200 text-purple-700 font-black pastel-btn disabled:opacity-35 disabled:cursor-not-allowed">Bài tiếp theo →</button>
                    </div>
                </div>
            </div>
        </div>`;
    updateNavTabs('12. Vườn thơ toán học', '', poetrySentenceCase_(cat.name), `Bài ${Number(poem.no || poemIndex + 1)}. ${poetrySentenceCase_(poem.title)}`);
    switchAppView('view-dashboard-grid');
}

async function speakMathPoem(categoryIndex, poemIndex) {
    const data = poetryGardenCache || await loadPoetryGardenData();
    const cats = getPoetryCategoryList_(data);
    const poem = cats[categoryIndex]?.poems?.[poemIndex];
    if (!poem) return;
    speakVietnamese(`${poem.title}. ${(poem.lines || []).join('. ')}`, 0.90);
}

// ==========================================
// TIẾN TRÌNH TUẦN: BẢN ĐỒ SVG
// ==========================================
function handleNextExamFromReport() {
    stopSpeaking();
    if (activeRoadmapContext) {
        activeRoadmapContext = null;
        openRoadmap();
    } else if (activeExamContext) {
        activeExamContext = null;
        openExamHub();
    } else {
        goHome();
    }
}

function openRoadmap() {
    stopSpeaking();
    updateNavTabs("Bản đồ tiến trình tuần", "🗺️", null);
    renderRoadmapSVG();
    switchAppView('view-roadmap');
}

function wrapCaptionLines(text, maxLen = 24, maxLines = 3) {
    const words = String(text || '').split(' ');
    const lines = [''];
    for (const w of words) {
        const cur = lines[lines.length - 1];
        const candidate = (cur + ' ' + w).trim();
        if (candidate.length <= maxLen) {
            lines[lines.length - 1] = candidate;
        } else if (lines.length < maxLines) {
            lines.push(w);
        } else {
            lines[lines.length - 1] = candidate;
        }
    }
    while (lines.length < maxLines) lines.push('');
    if (lines[maxLines - 1].length > maxLen) {
        lines[maxLines - 1] = lines[maxLines - 1].slice(0, maxLen - 1) + '…';
    }
    return lines.slice(0, maxLines);
}

function renderRoadmapSVG() {
    const container = document.getElementById('roadmap-svg-container');
    if (!container) return;
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;

    let nodesHtml = '';
    for (let w = 1; w <= TOTAL_ROADMAP_WEEKS; w++) {
        const item = roadmapConfig[w];
        const coord = getRoadmapCoord(w);
        const isDone = w < tuanHienTai;
        const isCurrent = w === tuanHienTai;
        const isLocked = w > tuanHienTai;

        let nodeColor = isDone ? "#10b981" : (isCurrent ? "#ec4899" : "#cbd5e1");
        let strokeColor = isDone ? "#34d399" : (isCurrent ? "#f43f5e" : "#94a3b8");
        let badgeHtml = '';

        if (isDone) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="16" fill="#f59e0b">⭐⭐⭐</text>`;
        } else if (isCurrent) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="12" font-weight="900" fill="#ec4899">Đang học</text>`;
        } else {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 38}" text-anchor="middle" font-size="14" fill="#94a3b8">🔒 Khóa</text>`;
        }

        const cursorCls = isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:scale-105 transition-transform";
        const animCls = isCurrent ? "node-current" : "";

        nodesHtml += `
            <g class="${cursorCls} ${animCls}" onclick="selectRoadmapWeek(${w})" id="svg-node-week-${w}">
                <circle cx="${coord.x}" cy="${coord.y}" r="40" fill="#ffffff" stroke="${strokeColor}" stroke-width="4" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
                <circle cx="${coord.x}" cy="${coord.y}" r="34" fill="${nodeColor}" opacity="${isLocked ? '0.25' : '0.15'}"/>
                <text x="${coord.x}" y="${coord.y - 4}" text-anchor="middle" font-size="24">${item.icon || '🔢'}</text>
                <text x="${coord.x}" y="${coord.y + 18}" text-anchor="middle" font-size="13" font-weight="800" fill="${isLocked ? '#64748b' : '#1e293b'}">Tuần ${w}</text>
                ${badgeHtml}
            </g>
        `;
    }

    const pathD = buildRoadmapPathD(TOTAL_ROADMAP_WEEKS);
    const svgHtml = `
        <svg viewBox="0 0 900 490" class="w-full max-h-[74vh] select-none" xmlns="http://www.w3.org/2000/svg">
            <path d="${pathD}" fill="none" stroke="#fbcfe8" stroke-width="12" stroke-dasharray="14,14" stroke-linecap="round"/>
            <path d="${pathD}" fill="none" stroke="#f472b6" stroke-width="4" stroke-dasharray="14,14" stroke-linecap="round"/>
            ${nodesHtml}
        </svg>
    `;
    container.innerHTML = svgHtml;
}

async function selectRoadmapWeek(weekNum) {
    stopSpeaking();
    const config = roadmapConfig[weekNum];
    if (!config) return;
    
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;
    if (weekNum > tuanHienTai) {
        return showAppNotice(`Tuần ${weekNum} đang bị khóa. Bé hãy hoàn thành Tuần ${tuanHienTai} đạt từ 80% trở lên để mở khóa nhé!`);
    }

    if (config.isExam) return openExamHub();

    activeRoadmapContext = { week: weekNum, topicId: config.subIds[0] || '1.1', chuDe: config.name };
    pendingTopicQuiz = null; activeExamContext = null;
    const topicLabel = config.name.replace(/^Tuần\s*\d+:\s*/i, '');
    updateNavTabs("Tiến trình tuần", "📅", `Tuần ${weekNum}`, topicLabel);

    showLoadingOverlay(`Đang bốc 30 câu hỏi Tuần ${weekNum} (tỷ lệ 3:4:3)...`);
    try {
        await fetchAllTopicsData();
        hideLoadingOverlay();

        const weekQuestions = getQuestionsForWeek343(weekNum);
        if (!weekQuestions.length) return showAppNotice('Tuần này đang chuẩn bị thêm câu hỏi, bé quay lại sau nhé!');

        startTopicQuiz(weekNum, config.name, weekQuestions, null);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice(`Lỗi tải dữ liệu tuần: ${err.message}`);
    }
}

// ==========================================
// LOGIC CHẤM ĐIỂM & ĐIỀU KHIỂN CÂU HỎI
// ==========================================
function startTopicQuiz(topicNum, topicName, questions, subLabel) {
    setAppShellRootMode_(false);
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeQuestionsList = questions; 
    currentQIndex = 0; 
    score = 0;
    userAnswers = {};
    wrongAttemptsByQ = {};
    orderInteractionState = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();

    const topBar = document.getElementById('quiz-top-bar');
    const cardHeader = document.getElementById('quiz-card-header');
    const navPractice = document.getElementById('nav-group-practice');
    const navExam = document.getElementById('nav-group-exam');

    const submitBtn = document.getElementById('btn-submit-quiz');
    if (submitBtn) {
        if (activeRoadmapContext) submitBtn.classList.add('hidden');
        else submitBtn.classList.remove('hidden');
    }

    const roadmapHistoryBtn = document.getElementById('btn-roadmap-history');
    if (roadmapHistoryBtn) {
        if (activeRoadmapContext) { roadmapHistoryBtn.classList.remove('hidden'); roadmapHistoryBtn.classList.add('flex'); }
        else { roadmapHistoryBtn.classList.add('hidden'); roadmapHistoryBtn.classList.remove('flex'); }
    }

    if (activeRoadmapContext || activeExamContext) {
        if (topBar) {
            if (activeExamContext) topBar.classList.remove('hidden');
            else topBar.classList.add('hidden');
        }
        const timerBox = document.getElementById('quiz-timer-container');
        if (activeExamContext) {
            if (timerBox) timerBox.classList.remove('hidden');
            startExamCountdown();
        } else {
            if (timerBox) timerBox.classList.add('hidden');
        }
        if (cardHeader) { cardHeader.classList.remove('hidden'); cardHeader.classList.add('flex'); }
        if (navPractice) navPractice.classList.add('hidden');
        if (navExam) { navExam.classList.remove('hidden'); navExam.classList.add('flex'); }
        initQuizPallet();
    } else {
        if (topBar) topBar.classList.add('hidden');
        if (cardHeader) { cardHeader.classList.add('hidden'); cardHeader.classList.remove('flex'); }
        if (navPractice) { navPractice.classList.remove('hidden'); navPractice.classList.add('flex'); }
        if (navExam) { navExam.classList.add('hidden'); navExam.classList.remove('flex'); }
    }

    switchAppView('view-quiz');
    loadQuestion();
}

function getExploreMathPresentation(q) {
    const sub = String(q?.sub_topic || '');
    if (!/^[123]\./.test(sub) || activeExamContext || activeRoadmapContext) return null;
    const raw = String(q.question_text || '').replace(/×/g,'x').replace(/−/g,'-');
    const nums = (raw.match(/\d+/g)||[]).map(Number);
    const math = raw.match(/(\d+)\s*([+\-x:])\s*(\d+)\s*=\s*\?/i);
    const card = x => `<div class="w-full max-w-2xl rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-white via-pink-50/70 to-purple-50/70 shadow-sm px-4 py-4 md:px-6 md:py-5 text-center">${x}</div>`;
    const digitWords = ['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];
    const seedText = `${q?.question_id ?? q?.id ?? ''}|${q?.question_text ?? ''}|${sub}`;
    let seed = 0;
    for (let i = 0; i < seedText.length; i++) seed = ((seed << 5) - seed + seedText.charCodeAt(i)) | 0;
    const seededShuffle = arr => {
        const out = arr.slice();
        let x = Math.abs(seed) + 1;
        for (let i = out.length - 1; i > 0; i--) {
            x = (x * 1664525 + 1013904223) >>> 0;
            const j = x % (i + 1);
            [out[i], out[j]] = [out[j], out[i]];
        }
        return out;
    };
    const placePhrase = (count, place, tone) =>
        `<span class="inline-flex items-center justify-center rounded-2xl border-2 border-${tone}-200 bg-${tone}-50/85 px-3.5 py-2.5 md:px-4 md:py-3 text-lg md:text-xl font-black text-${tone}-700 whitespace-nowrap shadow-sm">${digitWords[count] || String(count)} ${place}</span>`;
    const vd = q.visual_data || {};
    let prompt = raw, visual = '';

    // ===== MỤC 1 - CẤU TẠO SỐ =====
    // Không phụ thuộc explore_group: các bản JSON mới/cũ có thể không chứa trường này.
    // Nhận diện trực tiếp bằng sub_id/sub_topic và explore_type để renderer luôn hoạt động.
    const isNumberStructureQuestion = ['1.1','1.3','1.5'].includes(String(q.sub_id || q.sub_topic || '').trim()) && !!q.explore_type;
    if (isNumberStructureQuestion) {
        switch (q.explore_type) {
            case 'compose_words': {
                prompt = 'Bé hãy chọn đáp án đúng bên dưới nhé!';
                let parts = Array.isArray(vd.parts) ? vd.parts.map((p) => {
                    const tone = p.place === 'trăm' ? 'amber' : (p.place === 'chục' ? 'pink' : 'purple');
                    return { html: placePhrase(Number(p.count), p.place, tone), place: p.place };
                }) : [];
                if (vd.shuffle) parts = seededShuffle(parts);
                // Hai chữ số và ba chữ số dùng cùng một bố cục. Nút loa nằm ngay trong
                // thẻ Ghép số để không tạo thêm một hàng trống phía trên.
                visual = `<div class="relative w-full max-w-2xl rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-white via-pink-50/70 to-purple-50/70 shadow-sm px-4 py-4 md:px-6 md:py-5 text-center">
                    <button onclick="speakCurrentQuestion()" class="absolute top-3 right-3 w-9 h-9 md:w-10 md:h-10 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-xl flex items-center justify-center pastel-btn shadow-xs" title="Nghe phép ghép số" aria-label="Nghe phép ghép số">
                        <i class="fa-solid fa-volume-high text-pink-600 text-sm md:text-base"></i>
                    </button>
                    <div class="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-2.5 pr-10 md:pr-11">${parts.map((part,i)=>`${i?'<span class="text-xl md:text-2xl font-black text-fuchsia-400 shrink-0">+</span>':''}${part.html}`).join('')}<span class="text-xl md:text-2xl font-black text-slate-500 ml-1 shrink-0">=</span><span class="inline-flex min-w-[58px] items-center justify-center rounded-2xl border-2 border-dashed border-fuchsia-300 bg-white px-3 py-2.5 text-xl md:text-2xl font-black text-fuchsia-500 shrink-0">?</span></div>
                </div>`;
                break;
            }
            case 'expanded_form_missing': {
                prompt = raw;
                visual = card(`<div class="text-4xl md:text-5xl font-black text-slate-800"><span class="text-purple-700">${vd.number}</span> = ${vd.left} + <span class="inline-flex min-w-[70px] justify-center border-b-4 border-pink-400 text-pink-500">?</span></div>`);
                break;
            }
            case 'place_value_focus': {
                prompt = raw;
                const n = String(vd.number || '').padStart(3,'0').split('');
                const places = ['trăm','chục','đơn vị'];
                visual = card(`<div class="grid grid-cols-3 gap-2 max-w-md mx-auto">${places.map((pl,i)=>`<div class="rounded-2xl border-2 ${pl===vd.focus_place?'border-pink-400 bg-pink-100':'border-purple-200 bg-white'} p-3"><div class="text-xs md:text-sm font-black uppercase text-slate-500">${pl}</div><div class="text-4xl md:text-5xl font-black ${pl===vd.focus_place?'text-pink-600':'text-purple-700'}">${n[i]}</div></div>`).join('')}</div>`);
                break;
            }
            case 'estimate_groups':
            case 'estimate_reasoning': {
                prompt = raw;
                const emoji = vd.emoji || '🍎';
                const g = Math.min(Number(vd.groups)||1, 8), per = Math.min(Number(vd.per_group)||5, 10);
                visual = card(`<div class="text-lg md:text-xl font-black text-purple-600 mb-3">${g} nhóm · khoảng ${per} đồ vật mỗi nhóm</div><div class="flex flex-wrap justify-center gap-2.5">${Array.from({length:g},()=>`<div class="min-w-[72px] min-h-[64px] px-2 py-2 rounded-2xl bg-amber-50 border-2 border-amber-200 flex flex-wrap content-center justify-center gap-0.5 text-xl">${Array.from({length:per},()=>`<span>${emoji}</span>`).join('')}</div>`).join('')}</div>`);
                break;
            }
            case 'find_number': {
                prompt = 'Bé hãy tìm số phù hợp với câu đố nhé!';
                const clue = vd.clue || raw.replace(/^🔎\s*/, '');
                // Nút loa nằm ngay trong thẻ câu đố để tiết kiệm chiều cao và tạo bố cục gọn hơn.
                visual = `<div class="relative w-full max-w-2xl rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-white via-pink-50/70 to-purple-50/70 shadow-sm px-4 py-4 md:px-6 md:py-5 text-center">
                    <button onclick="speakCurrentQuestion()" class="absolute top-3 right-3 w-9 h-9 md:w-10 md:h-10 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-xl flex items-center justify-center pastel-btn shadow-xs" title="Nghe nội dung câu đố" aria-label="Nghe nội dung câu đố">
                        <i class="fa-solid fa-volume-high text-pink-600 text-sm md:text-base"></i>
                    </button>
                    <div class="inline-flex items-center gap-2 rounded-full bg-amber-100 border-2 border-amber-200 px-3 py-1 text-xs md:text-sm font-black text-amber-700">🔎 THÁM TỬ SỐ</div>
                    <div class="mt-3 px-7 md:px-10 text-lg md:text-xl lg:text-2xl font-black leading-snug text-slate-800">${escapeHtml(clue)}</div>
                    <div class="mt-2 text-xs md:text-sm font-bold text-purple-500">Đọc thật kỹ từng điều kiện rồi chọn số đúng nhé!</div>
                </div>`;
                break;
            }
            case 'quantity_estimate': {
                prompt = raw;
                const total = Number(vd.total || 0);
                const emoji = vd.emoji || '🍎';
                const label = vd.label || 'đồ vật';
                const fullRows = Math.floor(total / 10);
                const remain = total % 10;
                const rows = [];
                for (let r = 0; r < fullRows; r++) rows.push(10);
                if (remain) rows.push(remain);
                // Chỉ dựng phần minh hoạ bên trái. loadQuestion() sẽ ghép minh hoạ,
                // câu hỏi và đáp án vào cùng một khung hai cột trên desktop.
                visual = `<div class="w-full"><div class="text-base md:text-lg font-black text-purple-700 mb-3 text-center">Nhìn nhanh rồi ước lượng nhé!</div><div class="mx-auto space-y-1.5 md:space-y-2">${rows.map((count,ri)=>`<div class="flex justify-center gap-1.5 flex-wrap" aria-label="hàng ${ri+1}">${Array.from({length:count},()=>`<span class="text-xl md:text-2xl">${emoji}</span>`).join('')}</div>`).join('')}</div><div class="mt-3 text-xs md:text-sm font-bold leading-snug text-slate-500 text-center">Nhìn theo từng nhóm chục, chưa cần đếm từng ${label}.</div></div>`;
                return { prompt, visual, layout: 'estimate_split' };
            }
            case 'round_estimate': {
                prompt = raw;
                const n = Number(vd.number || 0);
                const unit = vd.unit || 'chục';
                const step = Number(vd.step || (unit === 'trăm' ? 100 : 10));
                const low = Math.floor(n / step) * step;
                const high = low + step;
                visual = card(`<div class="text-sm md:text-base font-black text-slate-500 mb-2">Số cần ước lượng</div><div class="text-6xl md:text-7xl font-black text-purple-700">${n}</div><div class="mt-4 flex items-center justify-center gap-3"><span class="px-4 py-2 rounded-2xl bg-pink-50 border-2 border-pink-200 text-xl font-black text-pink-700">${low}</span><span class="text-xl font-black text-slate-400">← gần số tròn ${unit} nào? →</span><span class="px-4 py-2 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-xl font-black text-emerald-700">${high}</span></div>`);
                break;
            }
            case 'reverse_decompose': {
                prompt = raw;
                visual = card(`<div class="text-6xl md:text-7xl font-black text-purple-700">${vd.number}</div><div class="mt-2 text-sm md:text-base font-black text-pink-500">Con hãy tách số theo đúng giá trị hàng</div>`);
                break;
            }
            case 'constraint_number': {
                prompt = raw;
                const chips=[];
                if (vd.hundreds !== undefined) chips.push(placePhrase(Number(vd.hundreds),'trăm','amber'));
                if (vd.tens !== undefined) chips.push(placePhrase(Number(vd.tens),'chục','pink'));
                if (vd.ones !== undefined) chips.push(placePhrase(Number(vd.ones),'đơn vị','purple'));
                visual = chips.length ? card(`<div class="flex flex-wrap items-center justify-center gap-3">${seededShuffle(chips).join('')}</div>`) : '';
                break;
            }
        }
        return {prompt, visual};
    }

    const isTopic2Explore = Number(q.explore_topic_id) === 2 || String(q.sub_id || q.sub_topic || '').trim() === '1.2';
    if (isTopic2Explore && q.explore_type) {
        switch (q.explore_type) {
            case 'number_line_neighbor': {
                prompt = raw;
                const min = Number(vd.min ?? 0), max = Number(vd.max ?? min+6), focus=Number(vd.focus);
                const vals=[]; for(let n=min;n<=max;n++) vals.push(n);
                visual = card(`<div class="flex items-center justify-center overflow-hidden">${vals.map((x,i)=>`<span class="w-11 h-11 rounded-full flex items-center justify-center font-black text-base md:text-lg ${x===focus?'bg-pink-500 text-white ring-4 ring-pink-100':'bg-white border-2 border-purple-200 text-purple-700'}">${x}</span>${i<vals.length-1?'<i class="w-5 md:w-8 h-[3px] bg-purple-200"></i>':''}`).join('')}</div>`);
                break;
            }
            case 'compare_pair': {
                prompt = raw;
                visual = card(`<div class="flex items-center justify-center gap-4 md:gap-8"><span class="px-6 py-4 rounded-3xl bg-pink-50 border-2 border-pink-200 text-5xl font-black text-pink-700">${vd.left}</span><span class="text-5xl font-black text-purple-400">?</span><span class="px-6 py-4 rounded-3xl bg-purple-50 border-2 border-purple-200 text-5xl font-black text-purple-700">${vd.right}</span></div><div class="mt-3 text-sm md:text-base font-black text-slate-500">Nhớ nhé: trên tia số, số ở bên phải lớn hơn.</div>`);
                break;
            }
            case 'between_number': {
                prompt = raw;
                visual = card(`<div class="flex items-center justify-center gap-2"><span class="w-14 h-14 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center text-2xl font-black">${vd.left}</span><span class="w-10 h-[3px] bg-purple-200"></span><span class="w-14 h-14 rounded-full bg-pink-50 border-2 border-dashed border-pink-400 flex items-center justify-center text-3xl font-black text-pink-500">?</span><span class="w-10 h-[3px] bg-purple-200"></span><span class="w-14 h-14 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center text-2xl font-black">${vd.right}</span></div>`);
                break;
            }
            case 'sequence_missing': {
                prompt = raw;
                const seq = Array.isArray(vd.sequence) ? vd.sequence : [];
                const isEmojiPattern = String(vd.kind || '') === 'emoji';
                if (isEmojiPattern) {
                    visual = card(`<div class="flex flex-wrap items-center justify-center gap-2 md:gap-3">${seq.map((x)=>`<span class="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${x===null?'bg-pink-50 border-2 border-dashed border-pink-400 text-pink-500 text-2xl':'bg-white border-2 border-purple-200 text-3xl md:text-4xl'}">${x===null?'?':x}</span>`).join('')}</div><div class="mt-3 text-xs md:text-sm font-bold text-slate-500">Nhìn mẫu lặp lại rồi chọn emoji còn thiếu nhé!</div>`);
                } else {
                    const dir = String(vd.direction || 'asc') === 'desc' ? 'giảm' : 'tăng';
                    visual = card(`<div class="flex flex-wrap items-center justify-center gap-2 md:gap-3">${seq.map((x,i)=>`<span class="min-w-[58px] h-14 px-3 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl ${x===null?'bg-pink-50 border-2 border-dashed border-pink-400 text-pink-500':'bg-white border-2 border-purple-200 text-purple-700'}">${x===null?'?':x}</span>${i<seq.length-1?'<span class="text-xl font-black text-purple-300">→</span>':''}`).join('')}</div><div class="mt-3 text-xs md:text-sm font-bold text-slate-500">Dãy số ${dir} theo một quy luật đều. Con hãy tìm số còn thiếu nhé!</div>`);
                }
                break;
            }
            case 'number_line_missing': {
                prompt = raw;
                const seq=Array.isArray(vd.sequence)?vd.sequence:[];
                visual = card(`<div class="flex items-center justify-center overflow-hidden">${seq.map((x,i)=>`<span class="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${x===null?'bg-pink-50 border-2 border-dashed border-pink-400 text-pink-500':'bg-white border-2 border-purple-200 text-purple-700'}">${x===null?'?':x}</span>${i<seq.length-1?'<i class="w-6 md:w-9 h-[3px] bg-purple-200"></i>':''}`).join('')}</div>`);
                break;
            }
            case 'order_numbers': {
                prompt = raw;
                const vals=Array.isArray(vd.numbers)?vd.numbers:[];
                visual = card(`<div class="flex flex-wrap justify-center gap-3">${seededShuffle(vals).map(n=>`<span class="px-5 py-3 rounded-2xl bg-white border-2 border-purple-200 text-3xl font-black text-purple-700">${n}</span>`).join('')}</div><div class="mt-3 text-sm md:text-base font-black text-slate-500">Con hãy so sánh từ hàng lớn nhất trước nhé!</div>`);
                break;
            }
            case 'range_reasoning': {
                prompt = raw;
                const vals=[]; for(let n=Number(vd.low);n<=Number(vd.high);n++) vals.push(n);
                visual = card(`<div class="flex items-center justify-center overflow-hidden">${vals.map((n,i)=>`<span class="w-11 h-11 rounded-full flex items-center justify-center font-black ${i===0||i===vals.length-1?'bg-slate-100 text-slate-500':'bg-white border-2 border-purple-200 text-purple-700'}">${n}</span>${i<vals.length-1?'<i class="w-4 md:w-7 h-[3px] bg-purple-200"></i>':''}`).join('')}</div>`);
                break;
            }
            case 'place_value_compare': {
                prompt = raw;
                const vals=Array.isArray(vd.numbers)?vd.numbers:[];
                visual = card(`<div class="flex flex-wrap justify-center gap-3">${vals.map(n=>`<span class="px-5 py-3 rounded-2xl bg-white border-2 border-purple-200 text-3xl font-black text-purple-700">${n}</span>`).join('')}</div><div class="mt-3 text-sm md:text-base font-black text-pink-500">Mẹo: so sánh hàng trăm → hàng chục → hàng đơn vị.</div>`);
                break;
            }
        }
        return {prompt, visual};
    }

    // ===== MỤC 2–3: giữ renderer trực quan đã làm =====
    if(/^2\.[12]$/.test(sub)&&math){prompt='Bé ơi, hãy tính nhẩm nhé!';visual=card(`<div class="text-5xl md:text-6xl font-black">${math[1]} <span class="text-pink-500">${math[2]}</span> ${math[3]} <span class="text-purple-400">= ?</span></div>`)}
    else if(/^2\.[345]$/.test(sub)&&(math||nums.length>=2)){const a=math?math[1]:nums[0],op=math?math[2]:(/trừ/i.test(raw)?'-':'+'),b=math?math[3]:nums[1];prompt='Bé ơi, hãy đặt tính rồi tính nhé!';visual=card(`<div class="inline-grid grid-cols-[32px_auto] text-right text-5xl font-black leading-tight"><span></span><span>${a}</span><span class="text-pink-500">${op}</span><span>${b}</span><span class="col-span-2 border-t-4 border-slate-700 mt-1 pt-2 text-purple-400">?</span></div>`)}
    else if(sub==='2.6'&&nums.length>=3){const op=raw.includes('-')?'-':'+';const target=(raw.match(/Số\s*(\d+)\s*gọi là gì/i)||raw.match(/thành phần số\s*(\d+)/i)||[])[1]||nums[0];prompt=`Bé ơi, số ${target} trong phép tính trên gọi là gì?`;visual=card(`<div class="text-5xl font-black">${nums[0]} <span class="text-pink-500">${op}</span> ${nums[1]} <span class="text-purple-400">=</span> ${nums[2]}</div>`)}
    else if(sub==='3.1'){const m=raw.match(/((?:\d+\s*\+\s*)+\d+)/);const ts=m?m[1].match(/\d+/g):[];prompt='Bé ơi, hãy viết tổng trên thành phép nhân nhé!';if(ts.length)visual=card(`<div class="text-4xl md:text-5xl font-black">${ts.join(' + ')}</div><div class="mt-3 text-2xl font-black text-purple-500">= ? × ?</div>`)}
    else if(/^3\.[23]$/.test(sub)&&math){prompt='Bé ơi, hãy tính nhẩm nhé!';visual=card(`<div class="text-5xl md:text-6xl font-black">${math[1]} <span class="text-pink-500">${math[2]==='x'?'×':'÷'}</span> ${math[3]} <span class="text-purple-400">= ?</span></div>`)}
    return {prompt,visual};
}

function getComposeSpeechText(q) {
    if (!q || q.explore_type !== 'compose_words') return '';
    const vd = q.visual_data || {};
    const digitWords = ['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];
    let parts = Array.isArray(vd.parts) ? vd.parts.map(p => ({ count: Number(p.count), place: String(p.place || '') })) : [];
    if (!parts.length) return '';
    if (vd.shuffle) {
        const sub = String(q?.sub_topic || q?.sub_id || '');
        const seedText = `${q?.question_id ?? q?.id ?? ''}|${q?.question_text ?? ''}|${sub}`;
        let seed = 0;
        for (let i = 0; i < seedText.length; i++) seed = ((seed << 5) - seed + seedText.charCodeAt(i)) | 0;
        let x = Math.abs(seed) + 1;
        const out = parts.slice();
        for (let i = out.length - 1; i > 0; i--) {
            x = (x * 1664525 + 1013904223) >>> 0;
            const j = x % (i + 1);
            [out[i], out[j]] = [out[j], out[i]];
        }
        parts = out;
    }
    return parts.map(p => `${digitWords[p.count] || p.count} ${p.place}`).join(' cộng ');
}


function isTopic2Practice_() {
    return !activeExamContext && !activeRoadmapContext && Number(pendingTopicQuiz?.topicNum) === 2;
}

function isTopic2OrderInteractive_(q) {
    return isTopic2Practice_()
        && pendingTopicQuiz?.selectedCompareBranch === 'order'
        && q?.explore_type === 'order_numbers_interactive';
}

function getOrderInteractiveState_(q) {
    const key = currentQIndex;
    const nums = Array.isArray(q?.visual_data?.numbers)
        ? q.visual_data.numbers.map(Number).filter(Number.isFinite)
        : [];
    const qid = String(q?.question_id ?? q?.id ?? key);
    let state = orderInteractionState[key];
    if (!state || state.questionId !== qid) {
        state = {
            questionId: qid,
            selected: [],
            remaining: shuffleArray(nums),
            locked: false,
            feedback: ''
        };
        orderInteractionState[key] = state;
    }
    return state;
}

function getOrderDirection_(q) {
    return String(q?.visual_data?.direction || 'asc').toLowerCase() === 'desc' ? 'desc' : 'asc';
}

function renderOrderInteractiveQuestion_(q) {
    const dir = getOrderDirection_(q);
    const dirLabel = dir === 'desc' ? 'từ lớn đến bé' : 'từ bé đến lớn';
    return `
        <div class="w-full max-w-4xl rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-white via-pink-50/65 to-purple-50/65 shadow-sm px-4 py-4 md:px-6 md:py-5">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="text-left">
                    <div class="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs md:text-sm font-black text-amber-700">🧩 SẮP XẾP DÃY SỐ</div>
                    <h3 class="mt-2 text-lg md:text-xl font-black text-purple-800 leading-snug">Bé hãy chọn lần lượt để xếp ${dirLabel} nhé!</h3>
                </div>
                <button onclick="speakCurrentQuestion()" class="shrink-0 w-9 h-9 md:w-10 md:h-10 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-xl flex items-center justify-center pastel-btn shadow-xs" title="Nghe câu hỏi" aria-label="Nghe câu hỏi">
                    <i class="fa-solid fa-volume-high text-pink-600 text-sm md:text-base"></i>
                </button>
            </div>

            <div class="mt-3 rounded-2xl border-2 border-purple-100 bg-white/75 p-3 md:p-4">
                <div class="text-xs md:text-sm font-black text-slate-500 mb-2">Dãy số bé đang xếp</div>
                <div id="order-selected-row" class="flex items-center justify-center gap-1.5 md:gap-2 min-h-[62px]"></div>
            </div>

            <div class="mt-3 text-sm md:text-base font-extrabold text-slate-500">Chạm vào từng số. Số được chọn sẽ nhảy lên trên.</div>
            <div id="order-available-row" class="grid grid-cols-5 gap-2 md:gap-3 mt-3"></div>

            <div class="mt-3 min-h-[34px] flex items-center justify-center gap-3">
                <button onclick="resetOrderInteractiveCurrent_()" class="px-3 py-1.5 rounded-xl border border-purple-200 bg-white text-purple-700 text-xs md:text-sm font-black pastel-btn">↶ Làm lại</button>
                <span id="order-feedback" class="text-sm md:text-base font-black"></span>
            </div>
        </div>`;
}

function renderOrderInteractiveState_() {
    const q = activeQuestionsList[currentQIndex];
    if (!q || !isTopic2OrderInteractive_(q)) return;
    const state = getOrderInteractiveState_(q);
    const dir = getOrderDirection_(q);
    const symbol = dir === 'desc' ? '>' : '<';
    const total = Array.isArray(q?.visual_data?.numbers) ? q.visual_data.numbers.length : 5;
    const selectedRow = document.getElementById('order-selected-row');
    const availableRow = document.getElementById('order-available-row');
    const feedback = document.getElementById('order-feedback');
    if (!selectedRow || !availableRow) return;

    const slots = [];
    for (let i = 0; i < total; i++) {
        const value = state.selected[i];
        slots.push(`<span class="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border-2 ${value !== undefined ? 'border-fuchsia-300 bg-fuchsia-50 text-fuchsia-700' : 'border-dashed border-purple-200 bg-white text-purple-200'} text-xl md:text-2xl font-black shadow-xs">${value !== undefined ? value : '•'}</span>`);
        if (i < total - 1) slots.push(`<span class="text-lg md:text-xl font-black text-purple-300">${symbol}</span>`);
    }
    selectedRow.innerHTML = slots.join('');

    availableRow.innerHTML = state.remaining.map(n => `
        <button onclick="handleOrderNumberPick_(${Number(n)})" ${state.locked ? 'disabled' : ''}
            class="min-h-[58px] md:min-h-[64px] rounded-2xl border-2 border-purple-200 bg-white hover:bg-purple-50 text-purple-800 text-xl md:text-2xl font-black shadow-xs pastel-btn disabled:opacity-50">
            ${Number(n)}
        </button>`).join('');

    if (feedback) {
        feedback.className = `text-sm md:text-base font-black ${state.feedback?.type === 'ok' ? 'text-emerald-600' : state.feedback?.type === 'bad' ? 'text-rose-600' : 'text-slate-500'}`;
        feedback.textContent = state.feedback?.text || '';
    }
}

function resetOrderInteractiveCurrent_() {
    const q = activeQuestionsList[currentQIndex];
    if (!q || !isTopic2OrderInteractive_(q)) return;
    const nums = Array.isArray(q?.visual_data?.numbers) ? q.visual_data.numbers.map(Number) : [];
    orderInteractionState[currentQIndex] = {
        questionId: String(q?.question_id ?? q?.id ?? currentQIndex),
        selected: [],
        remaining: shuffleArray(nums),
        locked: false,
        feedback: ''
    };
    renderOrderInteractiveState_();
}

function handleOrderNumberPick_(value) {
    const q = activeQuestionsList[currentQIndex];
    if (!q || !isTopic2OrderInteractive_(q)) return;
    const state = getOrderInteractiveState_(q);
    if (state.locked) return;
    const idx = state.remaining.indexOf(Number(value));
    if (idx < 0) return;

    state.selected.push(Number(value));
    state.remaining.splice(idx, 1);
    renderOrderInteractiveState_();

    const nums = Array.isArray(q?.visual_data?.numbers) ? q.visual_data.numbers.map(Number) : [];
    if (state.selected.length !== nums.length) return;

    const dir = getOrderDirection_(q);
    const expected = [...nums].sort((a, b) => dir === 'desc' ? b - a : a - b);
    const isCorrect = expected.every((n, i) => n === state.selected[i]);
    state.locked = true;

    if (isCorrect) {
        userAnswers[currentQIndex] = q.answer || expected.join(dir === 'desc' ? ' > ' : ' < ');
        score += (q.diem ?? 0.5);
        starGreenCount++;
        const greenEl = document.getElementById('star-green-count');
        if (greenEl) greenEl.textContent = starGreenCount;
        state.feedback = { type: 'ok', text: '🎉 Chính xác! Bé xếp dãy số rất giỏi!' };
        renderOrderInteractiveState_();
        playAudio('correct');
        confetti({ particleCount: 45, spread: 65, origin: { y: 0.68 } });
        setTimeout(() => speakVietnamese('Giỏi lắm! Dãy số đã được sắp xếp chính xác.'), 120);
        updateQuizPalletUI();
        setTimeout(() => {
            if (userAnswers[currentQIndex] !== undefined) nextQuestion();
        }, 1050);
    } else {
        starRedCount++;
        const redEl = document.getElementById('star-red-count');
        if (redEl) redEl.textContent = starRedCount;
        state.feedback = { type: 'bad', text: 'Chưa đúng rồi. Bé thử xếp lại nhé!' };
        renderOrderInteractiveState_();
        playAudio('wrong');
        setTimeout(() => resetOrderInteractiveCurrent_(), 900);
    }
}

function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const exploreMath = !isEvaluationMode ? getExploreMathPresentation(q) : null;
    const isNumberCompose = !isEvaluationMode && q.explore_type === 'compose_words';
    const isFindNumber = !isEvaluationMode && q.explore_type === 'find_number';
    // Mục 3 (Cộng - trừ) và Mục 4 (Nhân - chia) có đáp án ngắn,
    // nên dùng bố cục gọn: 4 đáp án trên một hàng ở desktop.
    const isCompactTopic34 = !isEvaluationMode && [3, 4].includes(Number(pendingTopicQuiz?.topicNum));
    const isOrderInteractive = isTopic2OrderInteractive_(q);

    if (isEvaluationMode) {
        document.getElementById('q-badge-index').textContent = `CÂU ${currentQIndex + 1} / ${activeQuestionsList.length}`;
        const isRoadmap = !!activeRoadmapContext;
        const skillName = isRoadmap
            ? (beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp')
            : (SKILL_TAXONOMY[q.skill_tag]?.name || beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp');
        document.getElementById('q-skill-text').textContent = skillName;

        const scoreBadge = document.getElementById('q-badge-score');
        if (scoreBadge) {
            if (isRoadmap) {
                scoreBadge.classList.add('hidden');
            } else {
                scoreBadge.classList.remove('hidden');
                scoreBadge.textContent = `(${q.diem ?? 0.5} điểm)`;
            }
        }
    } else {
        const stepEl = document.getElementById('practice-step-text');
        if (stepEl) stepEl.textContent = `Câu ${currentQIndex + 1} / ${activeQuestionsList.length}`;
    }

    let mediaHtml = '';
    if (q.image_url && !activeExamContext) {
        mediaHtml = `<img src="${q.image_url}" alt="minh họa" class="w-14 h-14 md:w-16 md:h-16 object-contain mb-1 floating" onerror="this.remove()">`;
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageLines = pText ? pText.split('\n').map(l => l.trim()).filter(Boolean) : [];
    const avgLineLen = passageLines.length ? passageLines.reduce((a, l) => a + l.length, 0) / passageLines.length : 0;
    const isPoemLike = passageLines.length >= 4 && avgLineLen > 0 && avgLineLen < 35;
    const useTwoColumns = isPoemLike;
    const passageHtml = pText ? `
        <div class="w-full max-w-3xl bg-pink-50/70 border-2 border-pink-200 rounded-2xl p-3 mb-1.5 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-pink-700 text-sm md:text-base mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-base md:text-lg font-bold whitespace-pre-line leading-relaxed ${useTwoColumns ? 'md:columns-2 md:gap-6' : ''}">${escapeHtml(pText)}</p>
        </div>` : '';

    const practiceSpeakerBtnHtml = !isEvaluationMode && !isNumberCompose && !isFindNumber ? `
        <div class="flex items-center justify-center mt-1 mb-1">
            <button onclick="speakCurrentQuestion()" class="px-4 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-2xl text-xs md:text-sm font-extrabold flex items-center space-x-1.5 pastel-btn shadow-xs">
                <i class="fa-solid fa-volume-high text-pink-600"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
    ` : '';
    // Riêng Ghép số, nút loa đã nằm bên trong thẻ biểu thức.
    const composeSpeakerBtnHtml = '';
    // Riêng Tìm số, nút loa đã được đặt bên trong thẻ câu đố.
    const findNumberSpeakerBtnHtml = '';

    const isLetterListen = q.render_style === 'letter_listen';

    if (isOrderInteractive) {
        document.getElementById('question-box').innerHTML = renderOrderInteractiveQuestion_(q);
        renderOrderInteractiveState_();
        const practiceNav = document.getElementById('nav-group-practice');
        if (practiceNav) practiceNav.style.marginTop = '0.75rem';
        updateNavButtons();
        updateQuizPalletUI();
        if (autoSpeechEnabled) speakCurrentQuestion();
        return;
    }

    let html;
    if (isLetterListen) {
        html = `
            ${mediaHtml}
            <div class="w-full max-w-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 rounded-3xl px-4 py-4 md:py-5 flex flex-col items-center text-center mb-3">
                <div class="text-3xl md:text-4xl mb-1.5 space-x-2">
                    <span>🎧</span><span>👂</span><span>🔢</span>
                </div>
                <p class="text-sm md:text-base lg:text-lg font-black text-rose-600 leading-snug">${escapeHtml(q.question_text)}</p>
                ${practiceSpeakerBtnHtml}
            </div>

            <div class="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 mt-1">
        `;
        q.options.forEach(opt => {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn min-w-[140px] px-6 py-3 bg-white hover:bg-emerald-50 border-2 border-emerald-400 rounded-full font-black text-emerald-700 text-base md:text-lg transition-all pastel-btn shadow-xs">
                    ${escapeHtml(opt)}
                </button>`;
        });
        html += `</div>`;
        if (q.mascot_text) {
            html += `
                <div class="mt-4 inline-flex items-center space-x-1.5 bg-pink-50 border border-pink-200 rounded-full px-3.5 py-1.5">
                    <span>🐰</span>
                    <span class="text-xs md:text-sm font-extrabold text-rose-600">${escapeHtml(q.mascot_text)}</span>
                </div>`;
        }
    } else if (exploreMath?.layout === 'estimate_split') {
        // Ước lượng số lượng: toàn bộ hình + câu hỏi + đáp án nằm trong một khung.
        html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="w-full max-w-5xl rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-white via-pink-50/65 to-purple-50/65 shadow-sm p-4 md:p-5">
            <div class="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-4 md:gap-6 items-stretch">
                <div class="rounded-2xl border border-pink-100 bg-white/70 px-3 py-3 md:px-4 md:py-4 flex items-center justify-center min-h-[250px]">
                    ${exploreMath.visual || ''}
                </div>
                <div class="flex flex-col justify-center rounded-2xl border border-purple-100 bg-white/70 px-3 py-4 md:px-5 md:py-5">
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <h3 class="text-lg md:text-xl font-black leading-snug text-purple-700 text-left">${escapeHtml(exploreMath.prompt || q.question_text)}</h3>
                        <button onclick="speakCurrentQuestion()" class="shrink-0 px-2.5 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-xl text-xs font-extrabold flex items-center gap-1 pastel-btn shadow-xs" title="Nghe câu hỏi">
                            <i class="fa-solid fa-volume-high text-pink-600"></i><span class="hidden lg:inline">Nghe</span>
                        </button>
                    </div>
                    <div class="grid grid-cols-2 gap-2.5 md:gap-3 mt-1" id="estimate-options-grid">`;

        q.options.forEach((opt) => {
            const formattedOpt = capitalizeFirstLetter(opt);
            html += `
                        <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-white hover:bg-purple-50 border-2 border-purple-200 rounded-2xl font-black text-purple-800 text-center text-base md:text-lg transition-all flex items-center justify-center shadow-xs pastel-btn">
                            <span>${escapeHtml(formattedOpt)}</span><span class="option-icon text-pink-500 text-base md:text-lg"></span>
                        </button>`;
        });
        html += `</div></div></div></div>`;
    } else {
        html = `
        ${mediaHtml}
        ${passageHtml}
        ${composeSpeakerBtnHtml}
        ${findNumberSpeakerBtnHtml}
        ${exploreMath?.visual || ''}
        <div class="flex flex-col items-center justify-center max-w-3xl text-center px-2 mt-2 mb-0.5">
            <h3 class="${isFindNumber ? 'text-base md:text-lg text-purple-700' : (exploreMath ? (isCompactTopic34 ? 'text-lg md:text-xl text-purple-700' : 'text-xl md:text-2xl lg:text-2xl text-purple-700') : 'text-sm md:text-base lg:text-lg text-slate-900')} font-black leading-snug">
                ${escapeHtml(exploreMath?.prompt || q.question_text)}
            </h3>
            ${practiceSpeakerBtnHtml}
        </div>
        
        <div class="w-full ${isCompactTopic34 ? 'max-w-5xl' : 'max-w-3xl'} grid ${isFindNumber ? 'grid-cols-2 md:grid-cols-4 gap-2 md:gap-2.5' : (isCompactTopic34 ? 'grid-cols-2 md:grid-cols-4 gap-2 md:gap-2.5' : 'grid-cols-1 md:grid-cols-2 gap-2.5')} mt-1">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);

        if (activeExamContext) {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs">
                    <div class="flex items-center space-x-2.5">
                        <span class="opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0">${letter}</span>
                        <span class="opt-text">${escapeHtml(formattedOpt)}</span>
                    </div>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        } else {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full ${exploreMath ? (isNumberCompose ? 'p-3 md:p-3.5 bg-white hover:bg-purple-50 border-purple-200 font-black text-purple-800 text-center justify-center text-base md:text-lg' : (isFindNumber ? 'p-3 md:p-3.5 bg-white hover:bg-purple-50 border-purple-200 font-black text-purple-800 text-center justify-center text-base md:text-lg' : (isCompactTopic34 ? 'p-2.5 md:p-3 bg-white hover:bg-purple-50 border-purple-200 font-black text-purple-800 text-center justify-center text-sm md:text-base' : 'p-3.5 md:p-4 bg-white hover:bg-purple-50 border-purple-200 font-black text-purple-800 text-center justify-center text-lg md:text-xl'))) : 'p-3 md:p-3.5 bg-pink-50/40 hover:bg-pink-100/70 border-pink-200 font-extrabold text-gray-800 text-left justify-between text-sm md:text-base'} border-2 rounded-2xl transition-all flex items-center shadow-xs pastel-btn">
                    <span>${exploreMath ? '' : `<strong class="text-pink-600 mr-2 text-base md:text-lg">${letter}.</strong>`} ${escapeHtml(formattedOpt)}</span>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        }
    });
        html += `</div>`;
    }

    document.getElementById('question-box').innerHTML = html;

    // Riêng phần Ghép số: tách thanh điều hướng khỏi khối đáp án để giao diện thoáng hơn.
    const practiceNav = document.getElementById('nav-group-practice');
    if (practiceNav) {
        const isComposeNav = !activeExamContext && !activeRoadmapContext && (pendingTopicQuiz?.selectedNumberActivity === 'compose' || q.explore_type === 'compose_words');
        practiceNav.style.marginTop = isComposeNav ? '1rem' : '';
    }

    restoreQuestionState(q);
    updateNavButtons();
    updateQuizPalletUI();

    if (autoSpeechEnabled) speakCurrentQuestion();
}

function restoreQuestionState(q) {
    const isExam = !!activeExamContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (isExam) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (completedAnswer !== undefined && bOpt === completedAnswer) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });
        return;
    }

    if (!!activeRoadmapContext) {
        if (completedAnswer === undefined) return;
        const isCorrect = completedAnswer === q.answer;
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (!isCorrect && bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        return;
    }

    if (wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                b.disabled = true;
            }
        });
    }
}

function updateNavButtons() {
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const btnPrev = isEvaluationMode ? document.getElementById('btn-prev-q-exam') : document.getElementById('btn-prev-q-prac');
    const nextText = isEvaluationMode ? document.getElementById('btn-next-text-exam') : document.getElementById('btn-next-text-prac');
    const nextIcon = isEvaluationMode ? document.getElementById('btn-next-icon-exam') : document.getElementById('btn-next-icon-prac');

    if (!btnPrev) return;

    if (currentQIndex === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }

    if (currentQIndex === activeQuestionsList.length - 1) {
        if (isEvaluationMode) {
            nextText.textContent = "Hoàn thành";
            nextIcon.className = "fa-solid fa-trophy ml-1.5";
        } else {
            nextText.textContent = "Vòng tiếp theo";
            nextIcon.className = "fa-solid fa-rotate-right ml-1.5";
        }
    } else {
        nextText.textContent = "Câu tiếp theo";
        nextIcon.className = "fa-solid fa-chevron-right ml-1.5";
    }
}

function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isExam = !!activeExamContext;
    const isRoadmap = !!activeRoadmapContext;

    // RIÊNG ĐỀ THI: YÊN TĨNH TUYỆT ĐỐI, SÁNG VIỀN HỒNG, KHÔNG PHÁT ÂM THANH
    if (isExam) {
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (bOpt === selectedOpt) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });

        updateQuizPalletUI();
        return;
    }

    // RIÊNG TIẾN TRÌNH TUẦN: CHỈ ĐƯỢC CHỌN 1 LẦN DUY NHẤT ĐỂ GHI NHẬN ĐÚNG/SAI CHÍNH XÁC
    if (isRoadmap) {
        if (userAnswers[currentQIndex] !== undefined) return;

        const isCorrect = selectedOpt === q.answer;
        userAnswers[currentQIndex] = selectedOpt;

        if (isCorrect) {
            score += (q.diem ?? 0.5);
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;
        } else {
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (bOpt === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });

        if (isCorrect) {
            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => speakVietnamese(`${q.answer}`), 180);
        } else {
            playAudio('wrong');
        }

        updateQuizPalletUI();
        return;
    }

    // CHẾ ĐỘ LUYỆN TẬP TỰ DO
    const isCorrect = selectedOpt === q.answer;
    if (userAnswers[currentQIndex] !== undefined) return;

    if (isCorrect) {
        userAnswers[currentQIndex] = selectedOpt;
        score += (q.diem ?? 0.5);
        starGreenCount++;
        document.getElementById('star-green-count').textContent = starGreenCount;

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            if (b.getAttribute('data-opt') === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            }
        });

        playAudio('correct');
        confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
        setTimeout(() => speakVietnamese(`${q.answer}`), 180);

        // Toàn bộ Mục 1-4 là các hoạt động phản xạ ngắn:
        // khi bé chọn đúng, giữ phản hồi xanh trong chốc lát rồi tự chuyển câu sau.
        // Chọn sai vẫn đứng ở câu hiện tại để bé tiếp tục thử.
        const currentTopicNum = Number(pendingTopicQuiz?.topicNum);
        const shouldAutoAdvance = currentTopicNum >= 1 && currentTopicNum <= 4;
        if (shouldAutoAdvance) {
            setTimeout(() => {
                if (userAnswers[currentQIndex] !== undefined) nextQuestion();
            }, 850);
        }
    } else {
        if (!wrongAttemptsByQ[currentQIndex]) wrongAttemptsByQ[currentQIndex] = [];
        if (!wrongAttemptsByQ[currentQIndex].includes(selectedOpt)) {
            wrongAttemptsByQ[currentQIndex].push(selectedOpt);
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.getAttribute('data-opt') === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });

        playAudio('wrong');
    }

    updateQuizPalletUI();
}

function prevQuestion() {
    stopSpeaking();
    if (currentQIndex > 0) {
        currentQIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    stopSpeaking();
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (!isEvaluationMode && userAnswers[currentQIndex] === undefined) {
        showAppNotice('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!');
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        if (isEvaluationMode) {
            showResultScreen();
        } else {
            confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
            playAudio('win');
            showAppNotice(`🎉 Chúc mừng bé đã hoàn thành trọn vẹn 1 vòng luyện tập (${activeQuestionsList.length} câu)!\nBây giờ cô giáo Thỏ Ngọc sẽ xáo trộn ngẫu nhiên để con bước vào vòng luyện tập tiếp theo nhé!`);

            const basePool = practiceCycleRawPool.length ? practiceCycleRawPool : activeQuestionsList;
            activeQuestionsList = shuffleArray([...basePool]);
            currentQIndex = 0;
            userAnswers = {};
            wrongAttemptsByQ = {};
            loadQuestion();
        }
    }
}

function triggerSubmitQuizPrompt() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = activeQuestionsList.length;
    showAppConfirm(`Bé đã làm ${answeredCount}/${total} câu. Bé có chắc chắn muốn nộp bài thi ngay không?`, showResultScreen, {
        icon: '📝', title: 'Xác nhận nộp bài', cancelText: 'Làm tiếp', confirmText: 'Nộp bài'
    });
}

function showResultScreen() {
    stopSpeaking();
    clearInterval(quizTimerInterval);

    let correctCount = 0;
    score = 0;
    quizAnsweredLog = [];
    quizWrongAnswers = [];

    activeQuestionsList.forEach((q, idx) => {
        const studentAns = userAnswers[idx];
        const isCorrect = studentAns === q.answer;
        if (isCorrect) {
            correctCount++;
            score += (q.diem ?? 0.5);
        } else {
            quizWrongAnswers.push({
                question_id: q.question_id,
                question_number: idx + 1,
                question_text: q.question_text,
                sub_topic: q.sub_topic || 'Chủ đề tổng hợp',
                skill_tag: q.skill_tag || 'C1',
                dap_an_chon: studentAns || 'Chưa trả lời',
                dap_an_dung: q.answer,
                explanation: q.explanation || 'Không có giải thích chi tiết.'
            });
        }
        quizAnsweredLog.push({
            question_id: q.question_id,
            question_text: q.question_text,
            skill_tag: q.skill_tag || 'C1',
            source_topic_id: q.source_topic_id,
            diem: q.diem ?? 0.5,
            isCorrect,
            dap_an_chon: studentAns || '',
            dap_an_dung: q.answer
        });
    });

    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((correctCount / totalQ) * 100);

    // Bài tập: điểm tính riêng theo công thức 10/tổng số câu (không dùng điểm từng câu để tránh lệch)
    const displayScore = activeRoadmapContext
        ? Math.round((correctCount * 10 / totalQ) * 10) / 10
        : score;

    const examBadgeText = activeExamContext ? activeExamContext.examTitle : (activeRoadmapContext ? activeRoadmapContext.chuDe : 'Bài luyện tập chủ đề');
    document.getElementById('report-exam-badge').textContent = examBadgeText;
    document.getElementById('report-student-display').textContent = `Học sinh: ${currentUser?.hoTen || 'Khách'}`;
    const durationStr = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '35 phút';
    document.getElementById('report-meta-display').textContent = `Lớp: ${currentUser?.lop || '1A'} | Mã số: ${currentUser?.maHS || 'KHACH'} | Thời gian: ${durationStr}`;
    document.getElementById('report-total-score-val').textContent = displayScore.toFixed(1);
    document.getElementById('report-correct-ratio-val').textContent = `${correctCount}/${totalQ}`;

    renderReportTopicsBreakdown();

    const nextActionLabel = document.getElementById('report-next-action-label');
    if (nextActionLabel) {
        nextActionLabel.textContent = activeRoadmapContext ? '🔙 Quay lại Bài tập' : '🚀 Làm đề thi tiếp theo';
    }

    const historyBtn = document.getElementById('report-history-btn');
    if (historyBtn) {
        const targetSheet = activeRoadmapContext
            ? 'LichSuTienTrinhTuan'
            : (examFileMap[activeExamContext?.categoryKey]?.sheet || 'LichSuBaiThi_HK1');
        historyBtn.setAttribute('onclick', `openHistoryModal('${targetSheet}')`);
    }

    if (percent >= 80) {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCountFromPercent(percent), displayScore);
    }
}

function starCountFromPercent(percent) {
    if (percent === 100) return 3;
    if (percent >= 85) return 2;
    if (percent >= 80) return 1;
    return 0;
}

function renderReportTopicsBreakdown() {
    const container = document.getElementById('report-topics-list');
    if (!container) return;

    const isRoadmap = !!activeRoadmapContext;
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        let rawTag = String(q.skill_tag || 'TOAN_C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (!skillStats[tag]) skillStats[tag] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
        skillStats[tag].total++;
        skillStats[tag].maxScore += (q.diem ?? 0.5);
        if (userAnswers[idx] === q.answer) {
            skillStats[tag].correct++;
            skillStats[tag].earnedScore += (q.diem ?? 0.5);
        }
    });

    let html = '';
    skillKeys.forEach(k => {
        const data = skillStats[k];
        const pct = isRoadmap
            ? (data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0)
            : (data.maxScore > 0 ? Math.round((data.earnedScore / data.maxScore) * 100) : 0);
        const isPassed = pct >= 50;
        const badgeClass = isPassed ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-rose-50 text-rose-700 border border-rose-200';
        const badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
        const barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-400 to-rose-400';
        const scoreLine = isRoadmap
            ? `<span>Số câu đúng: <strong class="text-pink-600">${data.correct}/${data.total} câu</strong></span>`
            : `<span>Điểm đạt: <strong class="text-pink-600">${data.earnedScore.toFixed(1)} / ${data.maxScore.toFixed(1)}đ</strong></span>`;

        html += `
            <div class="bg-pink-50/40 border border-pink-100 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                    ${scoreLine}
                    <span class="font-math font-black">${pct}%</span>
                </div>
                <div class="w-full bg-pink-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function openReviewWrongModal() {
    const modal = document.getElementById('modal-review-wrong');
    const content = document.getElementById('review-wrong-content');
    if (!modal || !content) return;

    if (!quizWrongAnswers.length) {
        content.innerHTML = `<div class="text-center py-8 text-emerald-600 font-extrabold text-base"><i class="fa-solid fa-circle-check text-3xl mb-2 block"></i>Tuyệt vời! Bé không làm sai câu nào trong bài thi này!</div>`;
    } else {
        let html = '';
        quizWrongAnswers.forEach((item, idx) => {
            html += `
                <div class="bg-rose-50/40 border border-rose-200 rounded-2xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 bg-rose-100 text-rose-800 font-black text-xs rounded-lg">CÂU ${item.question_number || (idx + 1)}</span>
                        <span class="text-xs font-bold text-slate-500">${escapeHtml(beautifySubtopicName(item.sub_topic_label) || 'Chủ đề tổng hợp')}</span>
                    </div>
                    <p class="font-extrabold text-slate-800 text-sm">${escapeHtml(item.question_text)}</p>
                    <div class="text-xs space-y-1 font-semibold">
                        <p class="text-rose-600"><i class="fa-solid fa-xmark mr-1"></i> Đáp án con chọn: <strong>${escapeHtml(item.dap_an_chon)}</strong></p>
                        <p class="text-emerald-700"><i class="fa-solid fa-check mr-1"></i> Đáp án đúng chuẩn: <strong>${escapeHtml(item.dap_an_dung)}</strong></p>
                    </div>
                    <div class="p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-start gap-2">
                        <i class="fa-solid fa-lightbulb text-amber-600 mt-0.5"></i>
                        <span><strong>Lời giải sư phạm:</strong> ${escapeHtml(item.explanation)}</span>
                    </div>
                </div>
            `;
        });
        content.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeReviewWrongModal() {
    document.getElementById('modal-review-wrong').classList.add('hidden');
}

// ==========================================
// LƯU KẾT QUẢ & ĐỒNG BỘ ĐIỂM C1-C6 LÊN GOOGLE SHEETS
// ==========================================
async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    
    const skillScores = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (item.isCorrect && skillScores[tag] !== undefined) {
            skillScores[tag] += (item.diem || 0.5);
        }
    });

    const payload = {
        maHS: currentUser.maHS,
        token: currentUser.token, // bắt buộc để server xác nhận đúng chủ tài khoản mới cho ghi điểm
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        examCategory: categoryKey,
        sheetName: examFileMap[categoryKey]?.sheet || 'LichSuBaiThi_HK1',
        deSo: examIndex + 1,
        thoiGianLamBai,
        tongDiem: score.toFixed(1),
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        tongCauHoi: activeQuestionsList.length,
        diemC1: skillScores.C1.toFixed(1),
        diemC2: skillScores.C2.toFixed(1),
        diemC3: skillScores.C3.toFixed(1),
        diemC4: skillScores.C4.toFixed(1),
        diemC5: skillScores.C5.toFixed(1),
        diemC6: skillScores.C6.toFixed(1),
        wrongQuestions: quizWrongAnswers
    };
    // Ghi điểm từng nhóm năng lực vào ĐÚNG tên cột khai báo trong SKILL_TAXONOMY (C1_NhanBiet, C2_PhepTinh...)
    // — không hard-code tên cột, tránh lệch dữ liệu nếu sau này đổi lại taxonomy.
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillScores[k].toFixed(1);
    });
    try { await callAppsScript('saveExamResult', payload); } catch (e) {}
}

async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    const { week, topicId, chuDe } = activeRoadmapContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = (scoreVal ?? ((score / activeQuestionsList.length) * 10)).toFixed(1);

    // Đếm CHÍNH XÁC số câu đúng / tổng số câu của từng nhóm năng lực, dựa theo skill_tag
    // (TOAN_C1-C6) mà mỗi câu tự mang sẵn — không ước lượng chia đều, không suy luận gián tiếp qua chủ đề Mục lớn.
    const skillCorrect = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const skillTotal = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'TOAN_C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        const tag = m ? 'C' + m[1] : 'C1';
        if (skillTotal[tag] === undefined) return;
        skillTotal[tag]++;
        if (item.isCorrect) skillCorrect[tag]++;
    });
    const payload = {
        student_id: currentUser.maHS,
        maHS: currentUser.maHS,
        token: currentUser.token, // bắt buộc để server xác nhận đúng chủ tài khoản mới cho ghi điểm
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        sheetName: 'LichSuTienTrinhTuan',
        week_completed: week,
        tuan: week,
        chuDe,
        topicId,
        score: scoreThang10,
        stars_earned: starCount,
        tongCauHoi: activeQuestionsList.length,
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        percent,
        thoiGianLamBai,
        wrongQuestions: quizWrongAnswers
    };
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillCorrect[k];
        payload[SKILL_TAXONOMY[k].totalCol] = skillTotal[k];
    });

    try {
        await callAppsScript('saveWeeklyProgress', payload);
        if (percent >= 80) {
            const nextWeek = week + 1;
            if (nextWeek > (Number(currentUser.tuanHienTai) || 1) && nextWeek <= TOTAL_ROADMAP_WEEKS) {
                currentUser.tuanHienTai = nextWeek;
                setTimeout(() => showAppNotice(`🎉 Chúc mừng bé đạt ${percent}% điểm! Tuần ${nextWeek} đã được mở khóa trên bản đồ!`), 500);
            }
        }
    } catch (e) {}
}

async function openHistoryModal(sheetName = 'LichSuTienTrinhTuan') {
    if (!currentUser || currentUser.isGuest) {
        return showAppNotice('Bé vui lòng đăng nhập để xem lịch sử tiến trình nhé!');
    }

    const modal = document.getElementById('modal-history-progress');
    modal.classList.remove('hidden');

    document.getElementById('hist-info-name').textContent = currentUser.hoTen || '--';
    document.getElementById('hist-info-class').textContent = currentUser.lop || '--';
    document.getElementById('hist-info-code').textContent = currentUser.maHS || '--';
    document.getElementById('hist-info-dob').textContent = formatDateOnly(currentUser.ngaySinh) !== '--' ? formatDateOnly(currentUser.ngaySinh) : (currentUser.ngaySinh || '03/09/2019');
    document.getElementById('hist-report-date').textContent = new Date().toLocaleDateString('vi-VN');

    const titleMap = {
        LichSuTienTrinhTuan: "Báo cáo Bài tập theo bài học",
        LichSuBaiThi_HK1: "Báo cáo kết quả đấu trường — Học kỳ 1",
        LichSuBaiThi_HK2: "Báo cáo kết quả đấu trường — Học kỳ 2",
        LichSuBaiThi_HSG: "Báo cáo kết quả đấu trường — Học sinh giỏi"
    };
    document.getElementById('hist-modal-title').textContent = titleMap[sheetName] || "Kết quả tiến trình học tập";

    showLoadingOverlay('Đang trích xuất dữ liệu và vẽ biểu đồ năng lực...');
    try {
        const res = await callAppsScript('getHistory', { maHS: currentUser.maHS, sheetName, token: currentUser.token });
        hideLoadingOverlay();
        if (res && res.ok === false) {
            // Token hết hạn/không hợp lệ hoặc không đúng chủ - đóng modal, báo rõ thay vì âm thầm
            // hiện báo cáo trống (dễ gây hiểu lầm là bé chưa học gì).
            closeHistoryModal();
            showAppNotice(res.error || 'Không thể tải lịch sử - bé đăng nhập lại nhé!');
            return;
        }
        const rows = (res && res.history) ? res.history : [];
        renderHistoryReport(rows, sheetName);
    } catch (err) {
        hideLoadingOverlay();
        showAppNotice('Không thể tải lịch sử: ' + err.message);
    }
}

function closeHistoryModal() {
    document.getElementById('modal-history-progress').classList.add('hidden');
    if (histLineChartInstance) { histLineChartInstance.destroy(); histLineChartInstance = null; }
    if (histBarChartInstance) { histBarChartInstance.destroy(); histBarChartInstance = null; }
}

// ==========================================
// BIỂU ĐỒ THANH NGANG & BẢNG KÈM HÀNG TRUNG BÌNH
// ==========================================
function getSkillCell(row, skillKey) {
    const taxo = SKILL_TAXONOMY[skillKey];
    const correct = Number(row[taxo.sheetCol]);
    const total = Number(row[taxo.totalCol]);
    if (!row[taxo.totalCol] || isNaN(total) || total <= 0) return null;
    return { correct: isNaN(correct) ? 0 : correct, total };
}

function formatDateOnly(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value).split('T')[0] || String(value);
    return d.toLocaleDateString('vi-VN');
}

function formatDateShort(value) {
    const d = value ? new Date(value) : null;
    if (!d || isNaN(d.getTime())) return '';
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function renderHistoryReport(rows, sheetName) {
    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const labels = rows.map((r, i) => {
        const dm = formatDateShort(r.Timestamp || r.ngayLam);
        const label = isWeekly ? `Tuần ${r.tuan || i + 1}` : (r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || i + 1}`);
        return dm ? `${dm} ${label}` : label;
    });
    const scores = rows.map(r => Number(r.score || r.tongDiem || ((r.soCauDung / (r.tongCauHoi || 30)) * 10).toFixed(1)));

    const ctxLine = document.getElementById('progressChartCanvas').getContext('2d');
    if (histLineChartInstance) histLineChartInstance.destroy();

    histLineChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Chưa có bài thi'],
            datasets: [{
                label: 'Điểm số (/10)',
                data: scores.length ? scores : [0],
                borderColor: '#e11d48',
                backgroundColor: 'rgba(254, 226, 226, 0.5)',
                borderWidth: 3.5,
                pointBackgroundColor: '#be123c',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0, max: 10.5,
                    ticks: { stepSize: 2, color: '#000000', font: { family: 'Quicksand', weight: 'bold' } }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#000000',
                        font: { family: 'Quicksand', weight: 'bold', size: 11 },
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillAverages = isWeekly
        ? { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 }
        : { C1: 85, C2: 78, C3: 92, C4: 70, C5: 80, C6: 75 };
    const touchedSkills = [];

    if (rows.length && isWeekly) {
        // Tiến trình tuần: % = tổng số câu đúng / tổng số câu đã làm THẬT của nhóm kỹ năng đó
        skillKeys.forEach((k) => {
            let sumCorrect = 0, sumTotal = 0;
            rows.forEach(r => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                sumCorrect += cell.correct;
                sumTotal += cell.total;
            });
            if (sumTotal > 0) {
                skillAverages[k] = Math.min(100, Math.round((sumCorrect / sumTotal) * 100));
                touchedSkills.push(k);
            }
        });
    } else if (rows.length) {
        skillKeys.forEach((k) => {
            const colName = SKILL_TAXONOMY[k].sheetCol;
            const vals = rows.map(r => {
                const val = r[`diem${k}`] ?? r[colName] ?? r[`diem_${k.toLowerCase()}`] ?? r[k];
                return (val !== undefined && val !== null && val !== '--') ? Number(val) : 0;
            });
            const sum = vals.reduce((a, b) => a + b, 0);
            if (vals.length > 0) {
                skillAverages[k] = Math.min(100, Math.round((sum / (vals.length * 1.5)) * 100)) || 75;
                touchedSkills.push(k);
            }
        });
    }

    const ctxBar = document.getElementById('topicRadarChartCanvas').getContext('2d');
    if (histBarChartInstance) histBarChartInstance.destroy();

    histBarChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: skillKeys.map(k => SKILL_TAXONOMY[k].name),
            datasets: [{
                label: 'Độ thành thạo (%)',
                data: skillKeys.map(k => skillAverages[k]),
                backgroundColor: ['#f472b6', '#fb7185', '#f59e0b', '#a855f7', '#ec4899', '#e11d48'],
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, callback: (v) => v + '%', color: '#000000', font: { family: 'Quicksand', weight: 'bold' } },
                    grid: { color: 'rgba(251, 207, 232, 0.3)' }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { family: 'Quicksand', weight: 'bold', size: 14 }, color: '#000000' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (ctx) => ` Độ thành thạo: ${ctx.raw}%` } }
            }
        },
        plugins: [{
            id: 'barValueLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets[0].data.forEach((val, i) => {
                    const meta = chart.getDatasetMeta(0).data[i];
                    if (!meta) return;
                    ctx.save();
                    ctx.font = 'bold 12px Quicksand, sans-serif';
                    ctx.fillStyle = '#1e293b';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`${val}%`, meta.x + 6, meta.y);
                    ctx.restore();
                });
            }
        }]
    });

    renderPedagogicalEvaluation(rows, skillAverages, touchedSkills);
    renderHistoryTable(rows, sheetName);
}

function renderPedagogicalEvaluation(rows, skillAverages, touchedSkills) {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;

    const studentName = getStudentFirstName();
    const count = rows.length;
    const avgScore = count ? (rows.reduce((acc, r) => acc + Number(r.score || r.tongDiem || 0), 0) / count) : 0;
    const avgScoreStr = avgScore.toFixed(1);

    // 1. Đánh giá tổng quan — phải khớp thật với điểm số, không khen chung chung bất kể kết quả
    let overviewText;
    if (avgScore >= 8) {
        overviewText = `Con nắm rất vững kiến thức trọng tâm, làm bài nghiêm túc và đạt kết quả xuất sắc.`;
    } else if (avgScore >= 6.5) {
        overviewText = `Con nắm khá tốt kiến thức trọng tâm, tuy nhiên vẫn còn một vài chỗ cần luyện thêm để đạt kết quả cao hơn.`;
    } else if (avgScore >= 5) {
        overviewText = `Con đã nắm được kiến thức cơ bản nhưng chưa thật chắc, cần ôn luyện thêm để tiến bộ hơn.`;
    } else {
        overviewText = `Con còn gặp khó khăn với nội dung này, ba mẹ nên đồng hành ôn luyện thêm cùng con nhé.`;
    }

    // 2 & 3. Thế mạnh / điểm cần khắc phục — CHỈ lấy từ những nhóm bé đã thực sự luyện tập,
    // tuyệt đối không nhận xét về nhóm bé chưa hề động tới (tránh nói sai với thực tế).
    const validSkills = (touchedSkills && touchedSkills.length) ? touchedSkills : [];
    const sortedValid = [...validSkills].sort((a, b) => skillAverages[b] - skillAverages[a]);

    let strengthHtml, weaknessHtml;
    if (sortedValid.length >= 2) {
        const top1 = SKILL_TAXONOMY[sortedValid[0]].name;
        const top2 = SKILL_TAXONOMY[sortedValid[1]].name;
        strengthHtml = `Con đạt độ thành thạo tốt ở các nhóm: <strong>${escapeHtml(top1)}</strong> (${skillAverages[sortedValid[0]]}%) và <strong>${escapeHtml(top2)}</strong> (${skillAverages[sortedValid[1]]}%).`;

        const weak1 = sortedValid[sortedValid.length - 1];
        weaknessHtml = `Con cần luyện thêm ở mảng: <strong>${escapeHtml(SKILL_TAXONOMY[weak1].name)}</strong> (${skillAverages[weak1]}%). ${escapeHtml(SKILL_TAXONOMY[weak1].advice)}`;
    } else if (sortedValid.length === 1) {
        const only1 = sortedValid[0];
        strengthHtml = `Con đạt ${skillAverages[only1]}% ở nhóm <strong>${escapeHtml(SKILL_TAXONOMY[only1].name)}</strong> — mảng duy nhất bé đã luyện tập tới thời điểm này.`;
        weaknessHtml = `Bé mới luyện tập 1 nhóm kỹ năng, cô chưa đủ dữ liệu để đánh giá toàn diện. Ba mẹ khuyến khích con hoàn thành thêm các tuần khác nhé!`;
    } else {
        strengthHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá thế mạnh.`;
        weaknessHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá điểm cần khắc phục.`;
    }

    box.innerHTML = `
        <div class="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span class="text-amber-700 font-extrabold block mb-0.5">🌟 1. Đánh giá tổng quan năng lực & xu hướng tiến bộ:</span>
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-pink-600">${avgScoreStr}/10 điểm</strong>. ${overviewText}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & thế mạnh nổi trội:</span>
                <p class="text-gray-700">${strengthHtml}</p>
            </div>

            <div class="bg-rose-50/70 p-3 rounded-xl border border-rose-200">
                <span class="text-rose-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & khắc phục:</span>
                <p class="text-gray-700">${weaknessHtml}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-purple-200">
            <span class="text-purple-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & hướng dẫn phụ huynh:</span>
            <p class="text-gray-700">Ba mẹ nên dành 15 phút mỗi tối cùng con ôn lại các phép tính, đặt câu hỏi gợi mở và khen ngợi kịp thời để giúp ${studentName} giữ vững niềm yêu thích môn Toán nhé!</p>
        </div>
    `;
}

function renderHistoryTable(rows, sheetName) {
    const tbody = document.getElementById('hist-table-body');
    if (!tbody) return;

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-4 text-gray-400">Chưa ghi nhận lịch sử bài làm nào</td></tr>`;
        return;
    }

    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];

    const getScoreVal = (r, num, colName) => {
        const val = r[`diemC${num}`] ?? r[colName] ?? r[`diem_c${num}`] ?? r[`C${num}`];
        return (val !== undefined && val !== null && val !== '') ? Number(val) : 0;
    };

    const totalRows = rows.length;
    let sumTongDiem = 0;
    rows.forEach(r => { sumTongDiem += Number(r.tongDiem || r.score || 0); });
    const avgTong = (sumTongDiem / totalRows).toFixed(1);

    let summaryCells = '';
    let bodyRows = '';

    if (isWeekly) {
        // Tổng hợp: % = tổng câu đúng / tổng câu đã làm THẬT của đúng nhóm kỹ năng đó
        const agg = {};
        skillKeys.forEach(k => { agg[k] = { correct: 0, total: 0 }; });
        rows.forEach(r => {
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                agg[k].correct += cell.correct;
                agg[k].total += cell.total;
            });
        });
        skillKeys.forEach(k => {
            const a = agg[k];
            summaryCells += `<td class="py-2 px-1">${a.total > 0 ? Math.round((a.correct / a.total) * 100) + '%' : '--'}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let skillCells = '';
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) { skillCells += `<td class="py-2 px-1 text-gray-300">--</td>`; return; }
                const pct = cell.total > 0 ? Math.round((cell.correct / cell.total) * 100) : 0;
                skillCells += `<td class="py-2 px-1">${cell.correct}/${cell.total} <span class="text-gray-400">(${pct}%)</span></td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">Tuần ${r.tuan || (idx + 1)}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${skillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    } else {
        skillKeys.forEach((k, i) => {
            const sum = rows.reduce((acc, r) => acc + getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol), 0);
            summaryCells += `<td class="py-2 px-1">${(sum / totalRows).toFixed(1)}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let examSkillCells = '';
            skillKeys.forEach((k, i) => {
                examSkillCells += `<td class="py-2 px-1">${getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol)}</td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || (idx + 1)}`}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${examSkillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    }

    const html = `
        <tr class="bg-amber-100/90 text-amber-950 font-black border-b-2 border-amber-200">
            <td class="py-2.5 px-2" colspan="2">Điểm trung bình</td>
            <td class="py-2.5 px-2 text-rose-600">${avgTong}</td>
            ${summaryCells}
            <td class="py-2.5 px-2" colspan="2">--</td>
        </tr>
        ${bodyRows}
    `;
    tbody.innerHTML = html;
}

function exportReportToPDF() {
    const area = document.getElementById('printable-report-area');
    if (!area) return;
    showLoadingOverlay('Đang khởi tạo file PDF chuẩn in ấn...');
    
    const opt = {
        margin: [5, 5, 5, 5],
        filename: `Bao_Cao_Tien_Trinh_${currentUser?.maHS || 'HocSinh'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(area).save().then(() => {
        hideLoadingOverlay();
    }).catch(err => {
        hideLoadingOverlay();
        window.print();
    });
}

// ==========================================
// ĐỘNG CƠ ÂM THANH: GOOGLE TTS CHỊ BAN MAI
// ==========================================
function speakPedagogicalEvaluation() {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;
    const text = box.innerText || box.textContent || '';
    if (!text.trim()) return showAppNotice('Chưa có dữ liệu nhận xét để đọc, bé làm bài rồi quay lại xem nhé!');
    speakVietnamese(text, 0.96);
}

function stopSpeaking() {
    try {
        if (banMaiAudio) {
            banMaiAudio.pause();
            banMaiAudio.currentTime = 0;
            banMaiAudio.onended = null;
        }
    } catch (e) {}
}

function speakVietnamese(text, rate = 0.96) {
    if (!text) return;
    try {
        stopSpeaking();

        let cleanText = String(text)
            .replace(/<[^>]*>/g, '')
            .replace(/b-a/g, 'bờ a ba')
            .replace(/c\/k/g, 'cờ hoặc ca')
            .replace(/g\/gh/g, 'gờ đơn hoặc gờ kép')
            .replace(/ng\/ngh/g, 'ngờ đơn hoặc ngờ kép')
            .trim();

        if (!cleanText) return;

        if (cleanText.length <= 180) {
            const encoded = encodeURIComponent(cleanText);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
            return;
        }

        const sentences = cleanText.match(/[^.!?\n]+[.!?\n]*/g) || [cleanText];
        let sIdx = 0;
        function playSentence() {
            if (sIdx >= sentences.length) return;
            const s = sentences[sIdx++].trim();
            if (!s) { playSentence(); return; }
            const encoded = encodeURIComponent(s);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            banMaiAudio.onended = playSentence;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
        playSentence();
    } catch (err) {}
}

function speakCurrentQuestion() {
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;
    if (q.explore_type === 'find_number') {
        const clue = q.visual_data?.clue || String(q.question_text || '').replace(/^🔎\s*/, '');
        speakVietnamese(clue, 0.96);
        return;
    }
    const composeSpeech = getComposeSpeechText(q);
    if (composeSpeech) {
        speakVietnamese(composeSpeech, 0.94);
        return;
    }
    const exploreMath = (!activeExamContext && !activeRoadmapContext) ? getExploreMathPresentation(q) : null;
    const textToRead = q.audio_text || exploreMath?.prompt || q.reading_passage || q.question_text;
    speakVietnamese(textToRead, 0.96);
}

function playAudio(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        if (!audioCtx) return;

        const now = audioCtx.currentTime;

        if (type === 'correct') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(300, now);
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.01);
            gain.gain.setValueAtTime(0.22, now + 0.09);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
            gain.gain.setValueAtTime(0.001, now + 0.14);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.15);
            gain.gain.setValueAtTime(0.22, now + 0.23);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.24);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'win') {
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
                    o.connect(g); g.connect(audioCtx.destination);
                    o.frequency.value = freq; g.gain.setValueAtTime(0.2, audioCtx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                    o.start(); o.stop(audioCtx.currentTime + 0.3);
                }, i * 150);
            });
        }
    } catch (e) {}
}

function initQuizPallet() {
    updateQuizPalletUI();
}

function updateQuizPalletUI() {
    const container = document.getElementById('quiz-pallet-container');
    if (!container) return;
    if (!activeQuestionsList || !activeQuestionsList.length) { container.innerHTML = ''; return; }

    const isRoadmap = !!activeRoadmapContext;
    const isExam = !!activeExamContext;
    const total = activeQuestionsList.length;

    if (isExam) {
        container.className = `grid gap-1 max-w-xl mx-2`;
        container.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
    } else {
        container.className = 'grid grid-cols-10 gap-1.5 max-w-xl mx-2';
        container.style.gridTemplateColumns = '';
    }

    const btnSize = isExam ? 'w-6 h-6 md:w-7 md:h-7 text-[10px] md:text-xs' : 'w-8 h-8 text-xs';

    let html = '';
    activeQuestionsList.forEach((q, idx) => {
        const answer = userAnswers[idx];
        const isAnswered = answer !== undefined;
        const isCurrent = idx === currentQIndex;
        let cls = 'bg-white text-pink-400 border-pink-200 hover:bg-pink-50';

        if (isAnswered) {
            if (isRoadmap) {
                const isCorrect = answer === q.answer;
                cls = isCorrect
                    ? 'bg-emerald-400 text-white border-emerald-500 hover:bg-emerald-500'
                    : 'bg-red-200 text-red-800 border-red-400 hover:bg-red-300';
            } else {
                // Chế độ thi: không lộ đúng/sai, nhưng câu ĐÃ TRẢ LỜI phải đổi màu KHÁC HẲN
                // với câu ĐANG LÀM (đang dùng gradient pink->purple) để không bị lẫn khi nhìn nhanh.
                cls = 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600';
            }
        }
        if (isCurrent) cls = 'bg-gradient-to-br from-pink-500 to-purple-500 text-white border-pink-500 shadow-md';
        html += `<button onclick="jumpToQuestion(${idx})" class="${btnSize} shrink-0 rounded-xl border-2 font-black flex items-center justify-center transition-colors duration-150 ${cls}">${idx + 1}</button>`;
    });
    container.innerHTML = html;
}

function jumpToQuestion(idx) {
    stopSpeaking();
    if (idx < 0 || idx >= activeQuestionsList.length) return;
    currentQIndex = idx;
    loadQuestion();
}

function formatDuration(ms) {
    const s = Math.round(ms / 1000);
    return `${Math.floor(s / 60)} phút ${s % 60} giây`;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showLoadingOverlay(msg) {
    let el = document.getElementById('loading-overlay');
    if (!el) {
        el = document.createElement('div');
        el.id = 'loading-overlay';
        el.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
        el.innerHTML = `<div class="bg-white px-6 py-4 rounded-2xl shadow-xl font-extrabold text-pink-600 flex items-center space-x-3"><i class="fa-solid fa-spinner fa-spin"></i><span id="loading-overlay-text"></span></div>`;
        document.body.appendChild(el);
    }
    document.getElementById('loading-overlay-text').textContent = msg;
    el.classList.remove('hidden');
}
function hideLoadingOverlay() { document.getElementById('loading-overlay')?.classList.add('hidden'); }

function toggleAutoSpeech() {
    autoSpeechEnabled = !autoSpeechEnabled;
    localStorage.setItem('autoSpeechEnabled', autoSpeechEnabled ? 'true' : 'false');
    if (!autoSpeechEnabled) stopSpeaking();
    updateAutoSpeechButtonUI();
}

function updateAutoSpeechButtonUI() {
    const btn = document.getElementById('btn-toggle-autospeech');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (autoSpeechEnabled) {
        icon.className = 'fa-solid fa-volume-high';
        btn.title = 'Đang BẬT tự động đọc câu hỏi — bấm để tắt';
        btn.classList.remove('bg-gray-100', 'text-gray-400', 'border-gray-200');
        btn.classList.add('bg-pink-50', 'text-pink-600', 'border-pink-200');
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        btn.title = 'Đang TẮT tự động đọc câu hỏi — bấm để bật';
        btn.classList.remove('bg-pink-50', 'text-pink-600', 'border-pink-200');
        btn.classList.add('bg-gray-100', 'text-gray-400', 'border-gray-200');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-mapin')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('login-mahs')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });

    window.addEventListener('click', () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }, { once: true });

    updateAutoSpeechButtonUI();
});

flushPendingLogout();
tryAutoLogin();

// ============================================================
// TOÁN 2 V2 - BÀI TẬP BÁM TRỰC TIẾP 48 BÀI HỌC CHÍNH SGK
// Không còn roadmap tuần trong trải nghiệm người dùng.
// TOAN_C1-C6 tiếp tục là trục đánh giá xuyên suốt.
// ============================================================
function getBaiTapUnlockKeyToan2_() {
    const id = currentUser?.maHS || 'KHACH';
    return `toan2_bai_tap_unlocked_v1_${String(id).toUpperCase()}`;
}
function getUnlockedBaiTapToan2_() {
    try { return Math.max(1, Number(localStorage.getItem(getBaiTapUnlockKeyToan2_()) || 1)); }
    catch (e) { return 1; }
}
function saveUnlockedBaiTapToan2_(n) {
    try { localStorage.setItem(getBaiTapUnlockKeyToan2_(), String(Math.max(1, Number(n) || 1))); }
    catch (e) {}
}
function getNextBaiTapToan2_(data, bai) {
    return (data?.bai_tap || []).map(x => Number(x.bai)).sort((a,b)=>a-b).find(x => x > Number(bai)) || null;
}
function isBaiTapUnlockedToan2_(data, bai) {
    return Number(bai) <= getUnlockedBaiTapToan2_();
}

function clickProgressOrExam(type) {
    if (type === 'progress') return ensurePremiumAccess('Bài tập', () => openRoadmap(1));
    if (type === 'exam') return ensurePremiumAccess('Đấu trường đề thi', () => openExamHub());
}

async function openBaiHocHub(semesterNumber = 1) {
    setAppShellRootMode_(true);
    stopSpeaking();
    if (!isPremiumUser()) { showPremiumAccessModal('Bài học'); return; }
    setMainTabActive_('lessons');
    activeExamContext = null; activeRoadmapContext = null; activeTopicId = null; pendingTopicQuiz = null;
    updateNavTabs(null, null, null);
    switchAppView('view-roadmap');
    showLoadingOverlay('Đang mở Bài học...');
    try {
        const data = await loadBaiHocData();
        renderBaiHocGridToan2_(data, semesterNumber);
    } catch (err) {
        showAppNotice(`Không thể mở Bài học: ${err.message}`);
    } finally { hideLoadingOverlay(); }
}

let activeBaiHocToan2_ = { data: null, lesson: null, pageIndex: 0 };

function renderBaiHocGridToan2_(data, semesterNumber) {
    const view = document.getElementById('view-roadmap');
    const container = document.getElementById('roadmap-svg-container');
    if (!view || !container) return;

    // Hub Bài học chỉ giữ bộ lọc Học kỳ + lưới bài. Không lặp tiêu đề/mô tả dài phía trên.
    const h2 = view.querySelector('h2');
    const p = view.querySelector('h2 + p');
    if (h2) h2.classList.add('hidden');
    if (p) p.classList.add('hidden');
    const historyBtn = view.querySelector('button[onclick*="LichSuTienTrinhTuan"]');
    if (historyBtn) historyBtn.classList.add('hidden');

    const arr = (data?.bai_hoc || []).filter(x => Number(x.semester) === Number(semesterNumber));
    const tabHost = document.getElementById('roadmap-semester-tabs');
    if (tabHost) tabHost.innerHTML = [1,2].map(s => `<button onclick="openBaiHocHub(${s})" class="semester-switch-btn ${Number(s)===Number(semesterNumber)?'is-active':'is-inactive'}">Học kỳ ${s}</button>`).join('');

    const palette = [
        {bg:'linear-gradient(145deg,#fff1f7 0%,#fdf4ff 100%)', border:'#f9a8d4', title:'#be185d'},
        {bg:'linear-gradient(145deg,#faf5ff 0%,#f5f3ff 100%)', border:'#d8b4fe', title:'#7e22ce'},
        {bg:'linear-gradient(145deg,#fdf2f8 0%,#fff7ed 100%)', border:'#fbcfe8', title:'#db2777'},
        {bg:'linear-gradient(145deg,#f5f3ff 0%,#fdf2f8 100%)', border:'#c4b5fd', title:'#6d28d9'},
        {bg:'linear-gradient(145deg,#fff7fb 0%,#fce7f3 100%)', border:'#f9a8d4', title:'#c026d3'},
        {bg:'linear-gradient(145deg,#faf5ff 0%,#fff1f7 100%)', border:'#e9d5ff', title:'#9333ea'}
    ];

    container.className = 'w-full rounded-3xl border-2 p-3 md:p-4 shadow-sm';
    container.style.background = 'linear-gradient(135deg,#fff7fb 0%,#faf5ff 50%,#fdf2f8 100%)';
    container.style.borderColor = '#f0abfc';
    container.innerHTML = `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-3">${arr.map((bh,idx)=>{
        const c = palette[idx % palette.length];
        return `<button onclick="selectBaiHocToan2_(${bh.bai})" class="text-left min-h-[96px] md:min-h-[104px] rounded-2xl border-2 p-3 md:p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg flex flex-col items-start justify-start" style="background:${c.bg};border-color:${c.border};box-shadow:0 4px 12px rgba(168,85,247,.08)"><div class="font-black text-base md:text-[17px] leading-tight" style="color:${c.title}">Bài ${bh.bai}</div><div class="text-[13px] md:text-[14px] font-extrabold text-slate-700 mt-2 leading-snug text-left w-full">${escapeHtml(bh.source_title||bh.title||'')}</div></button>`;
    }).join('')}</div>`;
}

async function selectBaiHocToan2_(bai) {
    if (!isPremiumUser()) { showPremiumAccessModal('Bài học'); return; }
    try {
        const data = await loadBaiHocData();
        const lesson = (data?.bai_hoc || []).find(x => Number(x.bai) === Number(bai));
        if (!lesson) throw new Error(`Không tìm thấy dữ liệu Bài ${bai}`);
        activeBaiHocToan2_ = { data, lesson, pageIndex: 0 };
        renderBaiHocDetailToan2_();
    } catch (err) {
        showAppNotice(`Không thể mở Bài học: ${err.message}`);
    }
}

function renderBaiHocDetailToan2_() {
    setAppShellRootMode_(false);
    const ctx = activeBaiHocToan2_;
    const lesson = ctx.lesson;
    if (!lesson) return;
    switchAppView('view-bai-hoc-detail');
    setMainTabActive_('lessons');
    updateNavTabs(`Bài ${lesson.bai}`, '📖', null);

    const meta = document.getElementById('bai-hoc-detail-meta');
    const title = document.getElementById('bai-hoc-detail-title');
    const tabs = document.getElementById('bai-hoc-detail-tabs');
    const body = document.getElementById('bai-hoc-detail-body');
    if (meta) meta.textContent = `Bài ${lesson.bai} · ${lesson.theme || 'Toán 2'}`;
    if (title) title.textContent = lesson.source_title || lesson.title || `Bài ${lesson.bai}`;

    const pages = Array.isArray(lesson.pages) ? lesson.pages : [];
    if (tabs) tabs.innerHTML = pages.map((pg, idx) => `<button onclick="openBaiHocPageToan2_(${idx})" class="px-3 py-2 rounded-xl border font-black text-sm md:text-base ${idx===ctx.pageIndex?'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-purple-400 shadow-sm':'bg-white text-purple-700 border-purple-200 hover:bg-purple-50'}">${escapeHtml(pg.title || `Trang ${idx+1}`)}</button>`).join('');
    if (body) {
        const pageBody = renderBaiHocPageBodyToan2_(pages[ctx.pageIndex] || {});
        body.innerHTML = `${pageBody}${renderBaiHocBottomNavToan2_(lesson, ctx.pageIndex, pages.length)}`;
    }
}

function renderBaiHocBottomNavToan2_(lesson, pageIndex, pageCount) {
    const count = Math.max(1, Number(pageCount) || 3);
    const idx = Math.max(0, Math.min(count - 1, Number(pageIndex) || 0));
    const prev = idx > 0
        ? `<button onclick="openBaiHocPageToan2_(${idx-1})" class="px-4 md:px-5 py-2.5 rounded-xl bg-white border border-purple-200 text-purple-700 font-black text-sm md:text-base shadow-sm hover:bg-purple-50">← Trang trước</button>`
        : '<span></span>';
    const next = idx < count - 1
        ? `<button onclick="openBaiHocPageToan2_(${idx+1})" class="px-5 md:px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-black text-sm md:text-base shadow-md hover:brightness-105">Trang tiếp →</button>`
        : `<button onclick="openBaiHocPageToan2_(0)" class="px-4 md:px-5 py-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 font-black text-sm md:text-base">↺ Xem lại bài</button>`;
    return `<div class="flex items-center justify-between gap-3 pt-4 mt-4 border-t border-pink-100">${prev}<div class="text-sm md:text-base font-black text-slate-400">${idx+1}/${count}</div>${next}</div>`;
}

function openBaiHocPageToan2_(pageIndex) {
    activeBaiHocToan2_.pageIndex = Math.max(0, Number(pageIndex) || 0);
    renderBaiHocDetailToan2_();
}

function speakLessonTeacherToan2_() {
    const lesson = activeBaiHocToan2_?.lesson;
    const idx = Number(activeBaiHocToan2_?.pageIndex || 0);
    const page = lesson?.pages?.[idx];
    const text = String(page?.teacher_script || page?.intro || '').trim();
    if (text) speakVietnamese(text, 0.92);
}

function renderLessonPedagogyPanelToan2_(page) {
    const safe = escapeHtml;
    const scene = String(page?.visual_scene || '').trim();
    const steps = Array.isArray(page?.micro_steps) ? page.micro_steps : [];
    if (!scene && !steps.length) return '';
    return `<div class="rounded-3xl border-2 border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-white to-sky-50 p-4 md:p-5">
      <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-4 items-stretch">
        <div class="rounded-2xl bg-white border-2 border-pink-100 min-h-[126px] p-4 flex items-center justify-center text-center">
          <div class="whitespace-pre-line text-lg md:text-xl font-black text-slate-700 leading-relaxed">${safe(scene)}</div>
        </div>
        <div class="grid grid-cols-1 gap-2">${steps.slice(0,3).map((x,i)=>`<div class="rounded-2xl border border-violet-100 bg-white px-3.5 py-3 flex gap-3 items-start"><span class="shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-black">${i+1}</span><div><div class="text-[11px] uppercase tracking-wide font-black text-violet-500">${['Nhìn','Hiểu','Làm'][i]||'Bước'}</div><div class="text-sm md:text-base font-extrabold text-slate-700 leading-snug">${safe(x)}</div></div></div>`).join('')}</div>
      </div>
    </div>`;
}

function renderBaiHocPageBodyToan2_(page) {
    const safe = escapeHtml;
    const lesson = activeBaiHocToan2_?.lesson || {};
    if (page.page_type === 'explore') {
        const questions = page.discover_questions || [];
        const cards = page.knowledge_cards || [];
        const worked = page.worked_examples || [];
        let visual = '';
        if (page.activity_type === 'number_line' && page.number_line) {
            const n = page.number_line; const nums=[];
            for(let i=Number(n.min||0); i<=Number(n.max||10); i++) nums.push(i);
            visual = `<div class="rounded-3xl border-2 border-sky-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-4 md:p-5">
              <div class="flex items-center gap-2 font-black text-sky-700 mb-3"><span class="text-xl">🐰</span><span>Thỏ Ngọc đi trên tia số</span></div>
              <div class="relative px-2 pt-8 pb-3"><div class="absolute left-3 right-1 top-[52px] h-1 bg-sky-400 rounded-full"></div><div class="absolute right-0 top-[45px] text-sky-500 text-xl">▶</div>
              <div class="relative grid gap-1" style="grid-template-columns:repeat(${nums.length},minmax(0,1fr))">${nums.map(v=>`<button onclick="lessonNumberPick_(${v},${Number(n.focus||5)})" class="h-11 rounded-xl border-2 ${v===Number(n.focus||5)?'bg-pink-500 text-white border-pink-500 scale-110 shadow-md':'bg-white text-sky-700 border-sky-200'} font-black hover:bg-sky-100 transition-all">${v}</button>`).join('')}</div></div>
              <div id="lesson-interactive-feedback" class="mt-3 min-h-[42px] rounded-xl bg-white border border-sky-100 px-3 py-2 text-center text-base md:text-lg font-bold text-slate-600">Bấm vào một số để xem quan hệ với số ${Number(n.focus||5)}.</div></div>`;
        } else if (page.activity_type === 'operation_parts') {
            const add=page.addition||{}, sub=page.subtraction||{};
            const eq=(o,op,theme)=>`<div class="rounded-3xl border-2 border-${theme}-200 bg-${theme}-50/50 p-4"><div class="flex justify-center items-end gap-2 md:gap-4 text-center">${[o.a,op,o.b,'=',o.result].map((v,i)=> i%2===0?`<button onclick="lessonPartPick_('${safe((o.labels||[])[i/2]||'')}')" class="min-w-[62px] rounded-2xl bg-white border-2 border-${theme}-200 px-3 py-3 text-xl md:text-2xl font-black text-slate-800 hover:shadow-md">${v}<span class="block text-[10px] md:text-xs mt-1 text-${theme}-600">${safe((o.labels||[])[i/2]||'')}</span></button>`:`<span class="pb-5 text-xl font-black text-${theme}-500">${v}</span>`).join('')}</div></div>`;
            visual=`<div class="grid grid-cols-1 md:grid-cols-2 gap-3">${eq(add,'+','pink')}${eq(sub,'−','sky')}</div><div id="lesson-interactive-feedback" class="mt-3 rounded-xl bg-purple-50 border border-purple-100 px-3 py-2 text-center text-base md:text-lg font-bold text-purple-700">Bấm vào một số để gọi tên thành phần của phép tính.</div>`;
        }
        return `<div class="space-y-4">
          ${page.intro?`<div class="rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50 p-4 text-base md:text-lg font-extrabold text-pink-700">${safe(page.intro)}</div>`:''}
          ${page.teacher_script?`<div class="rounded-2xl border border-purple-200 bg-white p-3 flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><span class="text-2xl">🐰</span><div><div class="font-black text-purple-700">Cô Thỏ Ngọc giảng bài</div><div class="text-xs md:text-sm font-semibold text-slate-500">Phần nghe được giảng kỹ hơn phần chữ hiển thị.</div></div></div><button onclick="speakLessonTeacherToan2_()" class="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md font-black" title="Nghe Cô Thỏ Ngọc giảng">🔊</button></div>`:''}
          ${renderLessonPedagogyPanelToan2_(page)}
          ${page.story?`<div class="rounded-2xl border border-amber-200 bg-amber-50/70 p-4"><div class="font-black text-amber-700 mb-1">🌟 Câu chuyện mở đầu</div><div class="text-base md:text-lg font-semibold text-slate-700 leading-relaxed">${safe(page.story)}</div></div>`:''}
          ${visual}
          ${questions.length?`<div class="rounded-2xl border border-violet-200 bg-violet-50/50 p-4"><div class="font-black text-violet-700 mb-2">🤔 Con thử nghĩ xem</div><div class="grid grid-cols-1 md:grid-cols-3 gap-2">${questions.map((q,i)=>`<div class="rounded-xl bg-white border border-violet-100 p-3 text-base md:text-lg font-bold text-slate-700"><span class="text-violet-500">${i+1}.</span> ${safe(q)}</div>`).join('')}</div></div>`:''}
          ${cards.length?`<div><div class="font-black text-emerald-700 mb-2">📚 Kiến thức mới</div><div class="grid grid-cols-1 md:grid-cols-${Math.min(cards.length,3)} gap-2">${cards.map(c=>`<div class="rounded-2xl border-2 border-emerald-200 bg-emerald-50/60 p-4"><div class="font-black text-emerald-700 mb-1">${safe(c.title)}</div><div class="text-base md:text-lg font-semibold text-slate-700">${safe(c.text)}</div></div>`).join('')}</div></div>`:''}
          ${worked.length?`<div class="rounded-2xl border border-orange-200 bg-orange-50/60 p-4"><div class="font-black text-orange-700 mb-2">✏️ Cô làm mẫu</div><div class="space-y-2">${worked.map(x=>`<div class="rounded-xl bg-white border border-orange-100 px-3 py-2 text-base md:text-lg font-bold text-slate-700">${safe(x)}</div>`).join('')}</div></div>`:''}
          ${(page.common_mistake||page.self_check)?`<div class="grid grid-cols-1 md:grid-cols-2 gap-3">${page.common_mistake?`<div class="rounded-2xl border-2 border-rose-200 bg-rose-50/70 p-4"><div class="font-black text-rose-700 mb-1">⚠️ Bé hay nhầm ở đâu?</div><div class="text-sm md:text-base font-bold text-slate-700 leading-relaxed">${safe(page.common_mistake)}</div></div>`:''}${page.self_check?`<div class="rounded-2xl border-2 border-emerald-200 bg-emerald-50/70 p-4"><div class="font-black text-emerald-700 mb-1">✅ Tự kiểm trước khi sang trang</div><div class="text-sm md:text-base font-bold text-slate-700 leading-relaxed">${safe(page.self_check)}</div></div>`:''}</div>`:''}
        </div>`;
    }
    if (page.page_type === 'practice') {
        const items=page.items||[], extra=page.extra_examples||[];
        const strategy=Array.isArray(page.practice_strategy)?page.practice_strategy:[];
        return `<div class="space-y-4"><div class="rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-3 text-center font-black text-purple-700">🎯 Làm từng thử thách rồi bấm “Xem đáp án” để tự kiểm tra</div>${strategy.length?`<div class="grid grid-cols-1 md:grid-cols-3 gap-2">${strategy.slice(0,3).map((x,i)=>`<div class="rounded-xl border border-purple-100 bg-white p-3"><div class="text-[11px] uppercase font-black text-purple-500">Bước ${i+1}</div><div class="text-sm md:text-base font-extrabold text-slate-700">${safe(x)}</div></div>`).join('')}</div>`:''}<div class="grid grid-cols-1 md:grid-cols-2 gap-3">${items.map((it,i)=>`<div class="rounded-2xl border-2 border-purple-200 bg-white p-4"><div class="flex items-center gap-2 mb-2"><span class="w-7 h-7 rounded-full bg-purple-500 text-white flex items-center justify-center font-black">${i+1}</span><span class="font-black text-purple-700">Thử thách ${i+1}</span></div><div class="text-base md:text-lg font-semibold text-slate-700 leading-relaxed min-h-[48px]">${safe(it.prompt||'')}</div>${it.answer?`<button onclick="this.nextElementSibling.classList.toggle('hidden')" class="mt-3 px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-sm md:text-base font-black">👀 Xem đáp án</button><div class="hidden mt-2 rounded-xl bg-emerald-50 border border-emerald-200 p-2 text-base md:text-lg font-black text-emerald-700">✓ ${safe(it.answer)}</div>`:''}</div>`).join('')}</div>${page.feedback_on_wrong?`<div class="rounded-2xl border border-amber-200 bg-amber-50/70 p-4"><div class="font-black text-amber-700 mb-1">🧭 Nếu con chưa đúng</div><div class="text-sm md:text-base font-bold text-slate-700">${safe(page.feedback_on_wrong)}</div></div>`:''}${extra.length?`<div class="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4"><div class="font-black text-emerald-700 mb-2">🌱 Mẹo của Cô Thỏ Ngọc</div><ul class="list-disc pl-5 space-y-1 text-base md:text-lg font-semibold text-slate-700">${extra.map(x=>`<li>${safe(x)}</li>`).join('')}</ul></div>`:''}</div>`;
    }
    if (page.page_type === 'summary') {
        const points=page.key_points||[], connections=page.connections||[];
        return `<div class="space-y-4"><div class="rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4 md:p-5"><div class="text-center font-black text-emerald-700 text-lg mb-3">⭐ Ghi nhớ thật nhanh</div><div class="grid grid-cols-1 md:grid-cols-${Math.min(points.length,3)} gap-2">${points.map((x,i)=>`<div class="rounded-2xl bg-white border border-emerald-200 p-3 text-center"><div class="text-2xl mb-1">${['①','②','③'][i]||'✓'}</div><div class="text-base md:text-lg font-bold text-slate-700">${safe(x)}</div></div>`).join('')}</div></div>${connections.length?`<div class="rounded-2xl border border-sky-200 bg-sky-50/60 p-4"><div class="font-black text-sky-700 mb-2">🔗 Nhìn là nhớ</div>${connections.map(x=>`<div class="rounded-xl bg-white border border-sky-100 px-3 py-2 mb-2 last:mb-0 text-base md:text-lg font-bold text-slate-700">${safe(x)}</div>`).join('')}</div>`:''}${Array.isArray(page.quick_check)&&page.quick_check.length?`<div class="rounded-2xl border border-violet-200 bg-violet-50/60 p-4"><div class="font-black text-violet-700 mb-2">🧠 Con tự kiểm nhé</div><div class="grid grid-cols-1 md:grid-cols-2 gap-2">${page.quick_check.map(x=>`<div class="rounded-xl bg-white border border-violet-100 p-3 text-sm md:text-base font-bold text-slate-700">${safe(x)}</div>`).join('')}</div></div>`:''}${page.finish_prompt?`<div class="rounded-2xl border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50 p-4 text-center"><div class="text-2xl mb-1">🐰</div><div class="font-black text-pink-700">${safe(page.finish_prompt)}</div></div>`:''}</div>`;
    }
    return `<div class="text-sm font-bold text-slate-500">Chưa có nội dung cho trang này.</div>`;
}

function lessonNumberPick_(value, focus) {
    const el=document.getElementById('lesson-interactive-feedback'); if(!el)return;
    const v=Number(value), f=Number(focus);
    el.innerHTML = v===f ? `🐰 Thỏ Ngọc đang đứng ở <b>${f}</b>.` : v===f-1 ? `⬅️ <b>${v}</b> đứng ngay trước ${f}, nên ${v} là <b>số liền trước</b> của ${f}.` : v===f+1 ? `➡️ <b>${v}</b> đứng ngay sau ${f}, nên ${v} là <b>số liền sau</b> của ${f}.` : v<f ? `${v} nằm bên trái ${f}, nên <b>${v} &lt; ${f}</b>.` : `${v} nằm bên phải ${f}, nên <b>${v} &gt; ${f}</b>.`;
}
function lessonPartPick_(label) { const el=document.getElementById('lesson-interactive-feedback'); if(el) el.innerHTML=`✨ Thành phần này được gọi là <b>${escapeHtml(label)}</b>.`; }

function backToBaiHocHubToan2_() {
    const sem = Number(activeBaiHocToan2_.lesson?.semester || 1);
    openBaiHocHub(sem);
}

async function openRoadmap(semesterNumber = 1) {
    setAppShellRootMode_(true);
    stopSpeaking();
    if (!isPremiumUser()) { showPremiumAccessModal('Bài tập'); return; }
    setMainTabActive_('exercises');
    activeExamContext = null; activeRoadmapContext = null; activeTopicId = null; pendingTopicQuiz = null;
    updateNavTabs(null, null, null);
    switchAppView('view-roadmap');
    showLoadingOverlay('Đang mở Bài tập...');
    try {
        const data = await loadBaiHocData();
        renderBaiTapGridToan2_(data, semesterNumber);
    } catch (err) {
        showAppNotice(`Không thể mở Bài tập: ${err.message}`);
    } finally { hideLoadingOverlay(); }
}

function renderBaiTapGridToan2_(data, semesterNumber) {
    const view = document.getElementById('view-roadmap');
    const container = document.getElementById('roadmap-svg-container');
    if (!view || !container) return;
    const h2 = view.querySelector('h2');
    const p0 = view.querySelector('h2 + p');
    if (h2) h2.classList.remove('hidden');
    if (p0) p0.classList.remove('hidden');
    if (h2) h2.innerHTML = '<span>✏️</span><span>Bài tập</span>';
    const p = view.querySelector('h2 + p');
    if (p) p.textContent = '20 câu mỗi bài · đạt từ 80% để mở Bài tập tiếp theo · đánh giá theo 6 năng lực.';
    const historyBtn = view.querySelector('button[onclick*="LichSuTienTrinhTuan"]');
    if (historyBtn) historyBtn.classList.remove('hidden');
    const history = view.querySelector('button[onclick*="LichSuTienTrinhTuan"] span');
    if (history) history.textContent = '📊 Lịch sử Bài tập';

    const arr = (data?.bai_tap || []).filter(x => Number(x.semester) === Number(semesterNumber));
    const unlocked = getUnlockedBaiTapToan2_();
    const tabHost = document.getElementById('roadmap-semester-tabs');
    if (tabHost) tabHost.innerHTML = [1,2].map(s => `<button onclick="openRoadmap(${s})" class="semester-switch-btn ${Number(s)===Number(semesterNumber)?'is-active':'is-inactive'}">Học kỳ ${s}</button>`).join('');

    const palette = [
        {bg:'linear-gradient(145deg,#fff1f7 0%,#fdf4ff 100%)', border:'#f9a8d4', title:'#be185d'},
        {bg:'linear-gradient(145deg,#faf5ff 0%,#f5f3ff 100%)', border:'#d8b4fe', title:'#7e22ce'},
        {bg:'linear-gradient(145deg,#fdf2f8 0%,#fff7ed 100%)', border:'#fbcfe8', title:'#db2777'},
        {bg:'linear-gradient(145deg,#f5f3ff 0%,#fdf2f8 100%)', border:'#c4b5fd', title:'#6d28d9'},
        {bg:'linear-gradient(145deg,#fff7fb 0%,#fce7f3 100%)', border:'#f9a8d4', title:'#c026d3'},
        {bg:'linear-gradient(145deg,#faf5ff 0%,#fff1f7 100%)', border:'#e9d5ff', title:'#9333ea'}
    ];

    container.className = 'w-full rounded-3xl border-2 p-3 md:p-4 shadow-sm';
    container.style.background = 'linear-gradient(135deg,#fff7fb 0%,#faf5ff 50%,#fdf2f8 100%)';
    container.style.borderColor = '#f0abfc';
    container.innerHTML = `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-3">${arr.map((bt,idx)=>{
        const open = Number(bt.bai) <= unlocked;
        const c = palette[idx % palette.length];
        const bg = open ? c.bg : 'linear-gradient(145deg,#f8fafc 0%,#faf5ff 100%)';
        const border = open ? c.border : '#e2e8f0';
        const title = open ? c.title : '#94a3b8';
        return `<button onclick="${open?`selectBaiTapToan2_(${bt.bai})`:`showLockedBaiTapToan2_(${bt.bai})`}" class="relative text-left min-h-[108px] md:min-h-[116px] rounded-2xl border-2 p-3 md:p-3.5 transition-all ${open?'hover:-translate-y-0.5 hover:shadow-lg':'opacity-65'} flex flex-col items-start justify-start" style="background:${bg};border-color:${border};box-shadow:${open?'0 4px 12px rgba(168,85,247,.08)':'none'}"><span class="absolute top-2.5 right-2.5 text-[12px]">${open?'':'🔒'}</span><div class="font-black text-base md:text-[17px] leading-tight pr-5" style="color:${title}">Bài ${bt.bai}</div><div class="text-[13px] md:text-[14px] font-extrabold ${open?'text-slate-700':'text-slate-400'} mt-2 pr-5 leading-snug text-left w-full">${escapeHtml(bt.title||'')}</div><div class="text-[11px] md:text-[12px] mt-auto pt-2 ${open?'text-emerald-600':'text-slate-400'} font-black">${open?'20 câu':'Cần ≥80% bài trước'}</div></button>`;
    }).join('')}</div>`;
}
function showLockedBaiTapToan2_(bai) {
    showAppNotice(`🔒 Bài tập ${bai} chưa mở. Bé cần đạt từ 80% ở Bài tập trước để mở khóa nhé!`);
}
function getQuestionsForBaiTapToan2_(bt) {
    if (!bt || !allQuestionsFlatCache) return [];
    const lessonId = String(bt.lesson_id || '').trim();
    const subIds = (bt.sub_ids || []).map(String);
    // Kiến trúc mới: câu hỏi tự khai báo lesson_refs. Nhờ vậy một sub_code có thể dùng cho nhiều bài
    // mà không kéo nhầm phép cộng sang phép trừ, hay câu 2 chữ số sang bài 3 chữ số.
    let scoped = lessonId
        ? allQuestionsFlatCache.filter(q => Array.isArray(q.lesson_refs) && q.lesson_refs.includes(lessonId))
        : [];
    // Fallback chỉ để tương thích kho dữ liệu cũ chưa migrate lesson_refs.
    if (!scoped.length) {
        scoped = allQuestionsFlatCache.filter(q => subIds.length && subIds.includes(String(q.sub_id || q.sub_topic || '')));
    }
    if (!scoped.length) return [];
    const candidateTarget = Math.max(20, Number(bt.candidate_pool_target || 30));
    const candidate = shuffleArray(scoped).slice(0, Math.min(candidateTarget, scoped.length));
    const by = {};
    candidate.forEach(q => {
        const m = String(q.skill_tag || q.tag || 'TOAN_C1').match(/C([1-6])/i);
        const k = m ? `C${m[1]}` : 'C1';
        (by[k] ||= []).push(q);
    });
    const out = [], used = new Set();
    let go = true;
    while (out.length < 20 && go) {
        go = false;
        for (const k of ['C1','C2','C3','C4','C5','C6']) {
            const a = by[k] || [];
            while (a.length && used.has(a[0].question_id)) a.shift();
            if (a.length && out.length < 20) {
                const q = a.shift(); used.add(q.question_id); out.push(q); go = true;
            }
        }
    }
    for (const q of candidate) {
        if (out.length >= 20) break;
        if (!used.has(q.question_id)) { used.add(q.question_id); out.push(q); }
    }
    return shuffleArray(out.slice(0,20));
}
async function selectBaiTapToan2_(bai) {
    stopSpeaking();
    showLoadingOverlay(`Đang chuẩn bị Bài tập ${bai}...`);
    try {
        const data = await loadBaiHocData();
        const bt = (data?.bai_tap || []).find(x => Number(x.bai) === Number(bai));
        if (!bt) throw new Error('Không tìm thấy Bài tập');
        if (!isBaiTapUnlockedToan2_(data, bai)) { showLockedBaiTapToan2_(bai); return; }
        await fetchAllTopicsData();
        const qs = getQuestionsForBaiTapToan2_(bt);
        if (qs.length < 20) throw new Error(`Kho câu hỏi phù hợp hiện chỉ có ${qs.length} câu; cần tối thiểu 20 câu.`);
        activeRoadmapContext = { week:Number(bai), bai:Number(bai), topicId:`BT${bai}`, chuDe:`Bài tập ${bai} · ${bt.title||''}` };
        pendingTopicQuiz = null; activeExamContext = null;
        updateNavTabs(`Bài ${bai}`, '✏️', bt.title || '');
        startTopicQuiz(bai, activeRoadmapContext.chuDe, qs, null);
    } catch (err) { showAppNotice(`Không thể mở Bài tập: ${err.message}`); }
    finally { hideLoadingOverlay(); }
}

// Giữ API/sheet cũ để không phải đổi Apps Script ở bước này; trường "Tuan" được dùng như số Bài tập.
async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    const { week, bai, topicId, chuDe } = activeRoadmapContext;
    const baiSo = Number(bai || week);
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = Number(scoreVal ?? 0).toFixed(1);
    const skillCorrect = { C1:0,C2:0,C3:0,C4:0,C5:0,C6:0 };
    const skillTotal = { C1:0,C2:0,C3:0,C4:0,C5:0,C6:0 };
    quizAnsweredLog.forEach(item => {
        const m = String(item.skill_tag || 'TOAN_C1').toUpperCase().match(/C([1-6])/);
        const tag = m ? `C${m[1]}` : 'C1';
        if (skillTotal[tag] === undefined) return;
        skillTotal[tag]++; if (item.isCorrect) skillCorrect[tag]++;
    });
    const payload = {
        student_id: currentUser.maHS, maHS: currentUser.maHS, token: currentUser.token,
        hoTen: currentUser.hoTen, lop: currentUser.lop, sheetName:'LichSuTienTrinhTuan',
        week_completed:baiSo, tuan:baiSo, chuDe, topicId, score:scoreThang10,
        stars_earned:starCount, tongCauHoi:activeQuestionsList.length,
        soCauDung:quizAnsweredLog.filter(x=>x.isCorrect).length, percent, thoiGianLamBai,
        wrongQuestions:quizWrongAnswers
    };
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillCorrect[k];
        payload[SKILL_TAXONOMY[k].totalCol] = skillTotal[k];
    });
    try {
        await callAppsScript('saveWeeklyProgress', payload);
        if (percent >= 80) {
            const data = await loadBaiHocData();
            const nextBai = getNextBaiTapToan2_(data, baiSo);
            if (nextBai && nextBai > getUnlockedBaiTapToan2_()) {
                saveUnlockedBaiTapToan2_(nextBai);
                setTimeout(()=>showAppNotice(`🎉 Chúc mừng bé đạt ${percent}%! Bài tập ${nextBai} đã được mở khóa.`),500);
            }
        }
    } catch (e) {}
}
