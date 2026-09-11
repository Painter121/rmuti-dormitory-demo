const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeButton = document.querySelector('.modal-close');

document.querySelectorAll('.shot-card').forEach((card) => {
  card.addEventListener('click', () => {
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title || 'ภาพหน้าจอระบบ';
    modalTitle.textContent = card.dataset.title || '';
    modal.showModal();
  });
});

closeButton.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

const roleMeta = {
  student: {
    label: 'นักศึกษา',
    user: 'บัญชีตัวอย่าง · ห้อง A-301',
    short: 'STUDENT',
    screens: [
      { id: 'student-dashboard', title: 'ภาพรวมของฉัน', subtitle: 'Dashboard', kind: 'studentDashboard' },
      { id: 'student-repair', title: 'แจ้งซ่อม', subtitle: 'Create Repair', kind: 'studentRepair' },
      { id: 'student-status', title: 'ติดตามสถานะ', subtitle: 'Repair Status', kind: 'studentStatus' },
      { id: 'student-history', title: 'ประวัติการซ่อม', subtitle: 'History', kind: 'studentHistory' },
    ],
  },
  tech: {
    label: 'ช่าง',
    user: 'ช่างตัวอย่าง · ทีมอาคาร',
    short: 'TECHNICIAN',
    screens: [
      { id: 'tech-jobs', title: 'รายการงาน', subtitle: 'Work Queue', kind: 'techJobs' },
      { id: 'tech-detail', title: 'รายละเอียดงาน', subtitle: 'Job Detail', kind: 'techDetail' },
      { id: 'tech-calendar', title: 'ปฏิทินงาน', subtitle: 'Calendar', kind: 'techCalendar' },
      { id: 'tech-materials', title: 'วัสดุที่ใช้', subtitle: 'Materials', kind: 'techMaterials' },
      { id: 'tech-history', title: 'งานที่เสร็จแล้ว', subtitle: 'Completed', kind: 'techHistory' },
    ],
  },
  admin: {
    label: 'ผู้ดูแลระบบ',
    user: 'ผู้ดูแลตัวอย่าง · ระบบหอพัก',
    short: 'ADMIN',
    screens: [
      { id: 'admin-dashboard', title: 'Dashboard', subtitle: 'Overview', kind: 'adminDashboard' },
      { id: 'admin-repairs', title: 'จัดการงานซ่อม', subtitle: 'Repairs', kind: 'adminRepairs' },
      { id: 'admin-rooms', title: 'ห้องและอาคาร', subtitle: 'Rooms', kind: 'adminRooms' },
      { id: 'admin-students', title: 'นักศึกษาและห้องพัก', subtitle: 'Students', kind: 'adminStudents' },
      { id: 'admin-materials', title: 'วัสดุและประเภทงาน', subtitle: 'Inventory', kind: 'adminMaterials' },
      { id: 'admin-reports', title: 'รายงาน', subtitle: 'Reports', kind: 'adminReports' },
      { id: 'admin-maintenance', title: 'ดูแลระบบ', subtitle: 'Maintenance', kind: 'adminMaintenance' },
    ],
  },
};

const mockScreenList = document.getElementById('mockScreenList');
const mockApp = document.getElementById('mockApp');
const mockRoleLabel = document.getElementById('mockRoleLabel');
const mockScreenTitle = document.getElementById('mockScreenTitle');
const roleTabs = [...document.querySelectorAll('.mock-role-tab')];

let activeRole = 'student';
let activeScreen = roleMeta.student.screens[0].id;

const icon = (text) => `<span class="sim-icon" aria-hidden="true">${text}</span>`;
const status = (label, tone = 'neutral') => `<span class="sim-status"><i class="tone-${tone}"></i>${label}</span>`;
const pageTitle = (eyebrow, title, subtitle, action = '') => `
  <div class="sim-page-head">
    <div><p>${eyebrow}</p><h3>${title}</h3><span>${subtitle}</span></div>
    ${action ? `<button class="sim-button sim-button-primary" type="button">${action}</button>` : ''}
  </div>`;
const metric = (label, value, note, tone = '') => `
  <article class="sim-metric ${tone ? `is-${tone}` : ''}">
    <span>${label}</span><strong>${value}</strong><small>${note}</small>
  </article>`;
const simpleTable = (headers, rows) => `
  <div class="sim-table-wrap"><table class="sim-table">
    <thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;

const mockRepairs = [
  ['DEMO-2401', 'A-301', 'ไฟฟ้า', 'ปลั๊กไฟไม่มีไฟ', status('รอดำเนินการ', 'warning'), '12 ก.ย. 2569'],
  ['DEMO-2402', 'B-214', 'ประปา', 'ก๊อกน้ำรั่ว', status('รับงานแล้ว', 'info'), '12 ก.ย. 2569'],
  ['DEMO-2403', 'A-118', 'เครื่องปรับอากาศ', 'แอร์ไม่เย็น', status('กำลังซ่อม', 'active'), '11 ก.ย. 2569'],
  ['DEMO-2398', 'C-402', 'เฟอร์นิเจอร์', 'บานตู้หลวม', status('เสร็จสิ้น', 'success'), '10 ก.ย. 2569'],
];

function studentDashboard() {
  return `
    ${pageTitle('DASHBOARD', 'ภาพรวมของฉัน', 'สรุปงานซ่อมและข้อมูลห้องพักของนักศึกษา')}
    <div class="sim-metrics sim-metrics-4">
      ${metric('งานที่กำลังติดตาม', '2', 'รายการที่ยังไม่ปิดงาน')}
      ${metric('นัดหมายวันนี้', '1', 'เวลา 15:30 น.', 'primary')}
      ${metric('เสร็จแล้ว', '7', 'ภาคการศึกษานี้', 'success')}
      ${metric('ห้องพัก', 'A-301', 'อาคาร A · ชั้น 3')}
    </div>
    <div class="sim-grid sim-grid-main">
      <section class="sim-panel">
        <div class="sim-panel-head"><div><strong>งานที่กำลังติดตาม</strong><span>รายการล่าสุดของห้อง A-301</span></div><button class="sim-link">ดูทั้งหมด</button></div>
        <div class="sim-repair-list">
          <article class="sim-repair-card"><div><span class="sim-id">รหัสใบแจ้งซ่อม DEMO-2401</span><h4>ปลั๊กไฟบริเวณโต๊ะอ่านหนังสือไม่มีไฟ</h4><p>ไฟฟ้า · ห้อง A-301</p></div>${status('รอดำเนินการ', 'warning')}</article>
          <article class="sim-repair-card"><div><span class="sim-id">รหัสใบแจ้งซ่อม DEMO-2395</span><h4>เครื่องปรับอากาศมีน้ำหยด</h4><p>เครื่องปรับอากาศ · ห้อง A-301</p></div>${status('นัดหมายเข้าซ่อม', 'primary')}</article>
        </div>
      </section>
      <aside class="sim-panel">
        <div class="sim-panel-head"><div><strong>ข้อมูลห้องพัก</strong><span>ข้อมูลตัวอย่าง</span></div></div>
        <dl class="sim-kv"><div><dt>อาคาร</dt><dd>อาคาร A</dd></div><div><dt>ห้อง</dt><dd>A-301</dd></div><div><dt>เตียง</dt><dd>A</dd></div><div><dt>ผู้พักร่วม</dt><dd>1 คน</dd></div></dl>
        <div class="sim-callout"><strong>นัดหมายถัดไป</strong><span>วันนี้ · 15:30 น.</span><small>งาน DEMO-2395 · ตรวจแอร์</small></div>
      </aside>
    </div>`;
}

function studentRepair() {
  return `
    ${pageTitle('REPAIR REQUEST', 'แจ้งซ่อมห้องพัก', 'กรอกข้อมูลปัญหาให้ครบเพื่อช่วยให้ช่างประเมินงานได้เร็วขึ้น')}
    <div class="sim-form-layout">
      <section class="sim-panel sim-form-panel">
        <div class="sim-form-section"><div class="sim-step">01</div><div><strong>ประเภทงานและสถานที่</strong><span>ระบบล็อกให้แจ้งเฉพาะห้องพักของนักศึกษา</span></div></div>
        <div class="sim-fields two"><label><span>ประเภทงานซ่อม *</span><div class="sim-input">ไฟฟ้า <b>⌄</b></div></label><label><span>หัวข้อปัญหา *</span><div class="sim-input">ปลั๊กไฟ / สวิตช์</div></label></div>
        <label><span>ข้อมูลห้องพัก *</span><div class="sim-room-lock"><div><small>ห้องที่แจ้งซ่อม</small><strong>อาคาร A · ห้อง A-301</strong></div><em>ล็อกห้องตนเอง</em></div></label>
        <div class="sim-fields two"><label><span>เบอร์ติดต่อ *</span><div class="sim-input">000-000-0000</div></label><label><span>เวลาที่สะดวก</span><div class="sim-input">ช่วงบ่าย <b>⌄</b></div></label></div>
        <label><span>รายละเอียดปัญหา *</span><div class="sim-textarea">ปลั๊กไฟบริเวณโต๊ะอ่านหนังสือไม่มีไฟ ทดลองเสียบอุปกรณ์อื่นแล้วไม่ทำงาน</div></label>
        <div class="sim-upload"><span>+</span><div><strong>แนบภาพประกอบ</strong><small>ไฟล์ตัวอย่างจะไม่ถูกอัปโหลดจาก Showcase นี้</small></div></div>
        <div class="sim-form-actions"><button class="sim-button">ล้างข้อมูล</button><button class="sim-button sim-button-primary">ตรวจสอบและส่ง</button></div>
      </section>
      <aside class="sim-panel sim-help"><strong>ก่อนส่งรายการ</strong><ul><li>เลือกประเภทให้ตรงกับปัญหา</li><li>อธิบายตำแหน่งและอาการให้ชัด</li><li>ตรวจห้องและช่องทางติดต่ออีกครั้ง</li><li>หากมีรายการเดิม ให้ติดตามแทนการแจ้งซ้ำ</li></ul></aside>
    </div>`;
}

function studentStatus() {
  return `
    ${pageTitle('STATUS', 'ติดตามสถานะ', 'ติดตามรายการที่กำลังดำเนินการและนัดหมายล่าสุด')}
    <div class="sim-toolbar"><div class="sim-search">ค้นหารหัสหรือรายละเอียดปัญหา</div><button class="sim-button">ตัวกรอง</button><button class="sim-button">รีเฟรช</button></div>
    <div class="sim-status-grid">
      <article class="sim-status-card"><div class="sim-card-top"><span>รหัสใบแจ้งซ่อม DEMO-2401</span>${status('รอดำเนินการ','warning')}</div><h4>ปลั๊กไฟบริเวณโต๊ะอ่านหนังสือไม่มีไฟ</h4><p>ไฟฟ้า · อาคาร A ห้อง A-301</p><div class="sim-progress"><i class="done"></i><i></i><i></i><i></i></div><small>ส่งรายการแล้ว · รอเจ้าหน้าที่ตรวจสอบ</small></article>
      <article class="sim-status-card"><div class="sim-card-top"><span>รหัสใบแจ้งซ่อม DEMO-2395</span>${status('นัดหมายเข้าซ่อม','primary')}</div><h4>เครื่องปรับอากาศมีน้ำหยด</h4><p>เครื่องปรับอากาศ · อาคาร A ห้อง A-301</p><div class="sim-progress"><i class="done"></i><i class="done"></i><i class="done"></i><i></i></div><div class="sim-appointment-strip"><b>นัดหมาย</b><span>12 ก.ย. 2569 · 15:30 น.</span></div></article>
      <article class="sim-status-card"><div class="sim-card-top"><span>รหัสใบแจ้งซ่อม DEMO-2388</span>${status('กำลังซ่อม','active')}</div><h4>บานพับตู้เสื้อผ้าหลวม</h4><p>เฟอร์นิเจอร์ · อาคาร A ห้อง A-301</p><div class="sim-progress"><i class="done"></i><i class="done"></i><i class="done"></i><i class="done"></i></div><small>ช่างกำลังดำเนินการ</small></article>
    </div>`;
}

function studentHistory() {
  return `
    ${pageTitle('HISTORY', 'ประวัติการแจ้งซ่อม', 'ย้อนดูรายการที่เสร็จสิ้นหรือยกเลิกแล้ว')}
    <div class="sim-toolbar"><div class="sim-search">ค้นหาในประวัติ</div><button class="sim-button">ช่วงเวลา</button><button class="sim-button">ประเภทงาน</button></div>
    ${simpleTable(['รหัสใบแจ้งซ่อม','วันที่แจ้ง','ประเภท','รายละเอียด','สถานะ'],[
      ['DEMO-2380','5 ก.ย. 2569','ประปา','ฝักบัวน้ำไหลเบา',status('เสร็จสิ้น','success')],
      ['DEMO-2364','29 ส.ค. 2569','ไฟฟ้า','หลอดไฟห้องน้ำกระพริบ',status('เสร็จสิ้น','success')],
      ['DEMO-2331','18 ส.ค. 2569','เฟอร์นิเจอร์','ลิ้นชักโต๊ะติดขัด',status('เสร็จสิ้น','success')],
      ['DEMO-2318','11 ส.ค. 2569','อื่น ๆ','ตรวจสอบเสียงพัดลม',status('ยกเลิก','danger')],
    ])}
    <div class="sim-pagination"><span>แสดง 1–4 จาก 8 รายการ</span><div><button>‹</button><button class="active">1</button><button>2</button><button>›</button></div></div>`;
}

function techJobs() {
  const card = (id, room, type, title, tone, label, time) => `<article class="sim-task-card"><div class="sim-card-top"><span>${id}</span>${status(label,tone)}</div><h4>${title}</h4><p>${type} · ${room}</p><footer><span>${time}</span><button>ดูรายละเอียด</button></footer></article>`;
  return `
    ${pageTitle('WORK QUEUE', 'รายการงานซ่อม', 'จัดลำดับงานที่รอรับ งานในมือ และงานที่กำลังดำเนินการ')}
    <div class="sim-metrics sim-metrics-3">${metric('งานวันนี้','4','ตามตารางนัดหมาย')}${metric('งานรอรับ','3','ยังไม่มีผู้รับผิดชอบ','warning')}${metric('งานในมือ','5','กำลังดำเนินการ')}</div>
    <div class="sim-toolbar"><button class="sim-button">ตัวกรอง 2</button><div class="sim-segments"><button class="active">งานของฉัน</button><button>งานรอรับ</button><button>เสร็จแล้ว</button></div><div class="sim-search">ค้นหางาน ห้อง หรือรหัส</div></div>
    <div class="sim-kanban">
      <section><header><strong>รอเข้าซ่อม</strong><span>2</span></header>${card('DEMO-2402','B-214','ประปา','ก๊อกน้ำรั่ว','info','รับงานแล้ว','นัด 13:00')}${card('DEMO-2395','A-301','แอร์','เครื่องปรับอากาศมีน้ำหยด','primary','นัดหมาย','นัด 15:30')}</section>
      <section><header><strong>กำลังดำเนินการ</strong><span>2</span></header>${card('DEMO-2403','A-118','แอร์','แอร์ไม่เย็น','active','กำลังซ่อม','เริ่ม 10:45')}${card('DEMO-2399','C-107','ไฟฟ้า','สวิตช์ไฟหลวม','active','กำลังซ่อม','เริ่ม 11:20')}</section>
      <section><header><strong>รอติดตามผล</strong><span>1</span></header>${card('DEMO-2377','B-310','ประปา','น้ำซึมใต้ซิงก์','warning','รอติดตามผล','ตรวจซ้ำพรุ่งนี้')}</section>
    </div>`;
}

function techDetail() {
  return `
    ${pageTitle('JOB DETAIL', 'รหัสใบแจ้งซ่อม DEMO-2403', 'แอร์ไม่เย็น · เครื่องปรับอากาศ')}
    <div class="sim-detail-layout">
      <section class="sim-panel">
        <div class="sim-detail-header"><div><span>สถานะปัจจุบัน</span>${status('กำลังซ่อม','active')}</div><div><span>สถานที่</span><strong>อาคาร A · ห้อง A-118</strong></div></div>
        <div class="sim-info-grid"><div><span>ผู้แจ้ง</span><strong>นักศึกษาตัวอย่าง 03</strong></div><div><span>ช่องทางติดต่อ</span><strong>000-000-0000</strong></div><div><span>วันที่แจ้ง</span><strong>11 ก.ย. 2569 · 18:20</strong></div><div><span>นัดหมาย</span><strong>12 ก.ย. 2569 · 10:30</strong></div></div>
        <div class="sim-problem"><span>รายละเอียดปัญหา</span><p>เปิดเครื่องได้แต่ลมไม่เย็น มีเสียงพัดลมทำงานตามปกติ ต้องการให้ช่วยตรวจสอบระบบทำความเย็น</p></div>
        <div class="sim-timeline-list"><div><i class="tone-warning"></i><span><b>แจ้งปัญหา</b><small>11 ก.ย. · 18:20</small></span></div><div><i class="tone-info"></i><span><b>รับงานแล้ว</b><small>12 ก.ย. · 08:45</small></span></div><div><i class="tone-primary"></i><span><b>นัดหมายเข้าซ่อม</b><small>12 ก.ย. · 10:30</small></span></div><div><i class="tone-active"></i><span><b>เริ่มซ่อม</b><small>12 ก.ย. · 10:45</small></span></div></div>
      </section>
      <aside class="sim-panel sim-action-panel"><h4>ศูนย์ปฏิบัติการ</h4><p>การทำงานจำลองสำหรับแสดงโครง UI เท่านั้น</p><button class="sim-action navy">บันทึกวัสดุที่ใช้</button><button class="sim-action">แนบภาพหลังซ่อม</button><button class="sim-action">พักงาน / ติดตามผล</button><button class="sim-action primary">ปิดงานซ่อม</button><div class="sim-action-note">ข้อมูลที่กดใน Showcase นี้ไม่ถูกบันทึก</div></aside>
    </div>`;
}

function techCalendar() {
  const days = Array.from({length:35},(_,i)=>i<3?'':String(i-2)).map((d,i)=>`<div class="sim-cal-day ${[12,19,26].includes(i)?'has-job':''} ${i===14?'today':''}"><span>${d}</span>${[12,14,19,26].includes(i)?'<i></i>':''}</div>`).join('');
  return `
    ${pageTitle('CALENDAR', 'ปฏิทินงาน', 'ดูคิวนัดหมายและงานที่ต้องเข้าซ่อมในแต่ละวัน')}
    <div class="sim-calendar-layout">
      <section class="sim-panel"><div class="sim-calendar-head"><button>‹</button><strong>กันยายน 2569</strong><button>›</button></div><div class="sim-cal-week"><span>อา.</span><span>จ.</span><span>อ.</span><span>พ.</span><span>พฤ.</span><span>ศ.</span><span>ส.</span></div><div class="sim-cal-grid">${days}</div></section>
      <aside class="sim-panel sim-day-queue"><div class="sim-mini-stats"><div><span>งานวันนี้</span><b>4</b></div><div><span>งานรอรับ</span><b class="red">3</b></div><div><span>งานในมือ</span><b>5</b></div></div><h4>วันเสาร์ 12 ก.ย.</h4><article><time>09:00</time><div><strong>ตรวจไฟห้อง B-206</strong><span>DEMO-2397 · ไฟฟ้า</span></div></article><article><time>10:30</time><div><strong>แอร์ไม่เย็น A-118</strong><span>DEMO-2403 · แอร์</span></div></article><article><time>15:30</time><div><strong>แอร์มีน้ำหยด A-301</strong><span>DEMO-2395 · แอร์</span></div></article></aside>
    </div>`;
}

function techMaterials() {
  return `
    ${pageTitle('MATERIALS', 'วัสดุที่ใช้กับงาน', 'ตรวจสอบรายการวัสดุที่เบิกและบันทึกกับงานซ่อม')}
    <div class="sim-toolbar"><div class="sim-search">ค้นหาวัสดุ</div><button class="sim-button">หมวดวัสดุ</button><button class="sim-button sim-button-primary">บันทึกการใช้วัสดุ</button></div>
    ${simpleTable(['วัสดุ','หมวด','คงเหลือ','หน่วย','ใช้กับงานล่าสุด'],[
      ['หลอด LED 12W','ไฟฟ้า','24','หลอด','DEMO-2397'],['ปลั๊กไฟ 3 ช่อง','ไฟฟ้า','9','ชิ้น','DEMO-2401'],['สายฉีดชำระ','ประปา','12','ชุด','DEMO-2380'],['วาล์วน้ำ 1/2 นิ้ว','ประปา','7','ชิ้น','DEMO-2377'],['บานพับตู้','เฟอร์นิเจอร์','18','คู่','DEMO-2398'],
    ])}
    <div class="sim-callout inline"><strong>หมายเหตุ</strong><span>จำนวนคงเหลือและรายการวัสดุทั้งหมดเป็นข้อมูลจำลองสำหรับ Showcase</span></div>`;
}

function techHistory() {
  return `
    ${pageTitle('COMPLETED WORK', 'ประวัติงานที่เสร็จแล้ว', 'ค้นหาและย้อนดูผลงานซ่อมที่ปิดงานแล้ว')}
    <div class="sim-toolbar"><div class="sim-search">ค้นหาประวัติงาน</div><button class="sim-button">7 วันล่าสุด</button><button class="sim-button">ประเภทงาน</button><button class="sim-button">ส่งออกรายงาน</button></div>
    ${simpleTable(['รหัส','วันที่ปิดงาน','สถานที่','ประเภท','ผลดำเนินงาน','สถานะ'],[
      ['DEMO-2398','10 ก.ย. 2569','C-402','เฟอร์นิเจอร์','ปรับและขันบานพับใหม่',status('เสร็จสิ้น','success')],['DEMO-2380','8 ก.ย. 2569','A-301','ประปา','ทำความสะอาดหัวฝักบัว',status('เสร็จสิ้น','success')],['DEMO-2364','30 ส.ค. 2569','A-301','ไฟฟ้า','เปลี่ยนหลอด LED',status('เสร็จสิ้น','success')],['DEMO-2359','29 ส.ค. 2569','B-104','แอร์','ล้างชุดกรองและตรวจระบบ',status('เสร็จสิ้น','success')],
    ])}`;
}

function adminDashboard() {
  const bars = [45,62,38,78,57,91,68].map((v,i)=>`<div><i style="height:${v}%"></i><span>${['จ','อ','พ','พฤ','ศ','ส','อา'][i]}</span></div>`).join('');
  return `
    ${pageTitle('DASHBOARD', 'ภาพรวมระบบ', 'สถิติงานและ Production Monitoring')}
    <div class="sim-metrics sim-metrics-4">${metric('งานเปิดทั้งหมด','18','กำลังอยู่ในระบบ')}${metric('รอดำเนินการ','6','ต้องตรวจสอบ','warning')}${metric('กำลังดำเนินการ','9','ช่างรับผิดชอบแล้ว')}${metric('เสร็จวันนี้','7','ปิดงานเรียบร้อย','success')}</div>
    <div class="sim-grid sim-grid-main admin-dash-grid">
      <section class="sim-panel"><div class="sim-panel-head"><div><strong>ปริมาณงาน 7 วันล่าสุด</strong><span>จำนวนใบแจ้งซ่อมที่เข้าสู่ระบบ</span></div><span class="sim-mini-label">MOCK</span></div><div class="sim-bar-chart">${bars}</div></section>
      <aside class="sim-panel"><div class="sim-panel-head"><div><strong>สถานะระบบ</strong><span>ค่าจำลองเพื่อแสดงรูปแบบ</span></div></div><div class="sim-health"><div>${status('API ปกติ','success')}<b>42 ms</b></div><div>${status('ฐานข้อมูลปกติ','success')}<b>31%</b></div><div>${status('พื้นที่จัดเก็บปกติ','success')}<b>28%</b></div><div>${status('คิวอีเมลปกติ','success')}<b>0 ค้าง</b></div></div></aside>
    </div>
    <section class="sim-panel"><div class="sim-panel-head"><div><strong>งานซ่อมล่าสุด</strong><span>รายการตัวอย่าง</span></div><button class="sim-link">ดูทั้งหมด</button></div>${simpleTable(['รหัส','สถานที่','ประเภท','รายละเอียด','สถานะ'],mockRepairs.map(r=>r.slice(0,5)))}</section>`;
}

function adminRepairs() {
  return `
    ${pageTitle('REPAIRS', 'จัดการงานซ่อม', 'ตรวจสอบ ค้นหา มอบหมาย และติดตามใบแจ้งซ่อม', 'สร้างงานซ่อม')}
    <div class="sim-tabs"><button class="active">รอดำเนินการ <b>6</b></button><button>กำลังดำเนินการ <b>9</b></button><button>ปิดงานแล้ว</button><button>งานซ้ำ</button></div>
    <div class="sim-toolbar"><button class="sim-button">ตัวกรอง 3</button><button class="sim-button">เรียงตาม วันที่แจ้ง ↑</button><div class="sim-search">ค้นหา รหัส / ห้อง / ช่าง / ปัญหา</div><button class="sim-button">รีเฟรช</button></div>
    ${simpleTable(['รหัส','วันที่แจ้ง','สถานที่','ประเภท','รายละเอียด','ผู้รับผิดชอบ','สถานะ'],[
      ['DEMO-2401','12 ก.ย. 09:12','A-301','ไฟฟ้า','ปลั๊กไฟไม่มีไฟ','—',status('รอดำเนินการ','warning')],['DEMO-2402','12 ก.ย. 09:40','B-214','ประปา','ก๊อกน้ำรั่ว','ช่างตัวอย่าง A',status('รับงานแล้ว','info')],['DEMO-2403','11 ก.ย. 18:20','A-118','แอร์','แอร์ไม่เย็น','ช่างตัวอย่าง B',status('กำลังซ่อม','active')],['DEMO-2404','11 ก.ย. 16:04','ส่วนกลาง ชั้น 1','ไฟฟ้า','ไฟทางเดินดับ','ช่างตัวอย่าง C',status('นัดหมาย','primary')],
    ])}
    <div class="sim-pagination"><span>แสดง 1–4 จาก 18 รายการ</span><div><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>›</button></div></div>`;
}

function adminRooms() {
  const room = (name,cap,occ,repair=true)=>`<article class="sim-room-card"><div><strong>${name}</strong>${status(repair?'เปิดรับแจ้ง':'พักรับแจ้ง',repair?'success':'warning')}</div><span>ผู้พัก ${occ}/${cap} คน</span><div class="sim-bed-dots">${Array.from({length:cap},(_,i)=>`<i class="${i<occ?'filled':''}"></i>`).join('')}</div></article>`;
  return `
    ${pageTitle('ROOMS', 'จัดการห้องและอาคาร', 'ดูความจุ ผู้พัก สถานะห้อง และการเปิดรับแจ้งซ่อม')}
    <div class="sim-toolbar"><button class="sim-button">อาคาร A</button><div class="sim-segments"><button class="active">ชั้น 1</button><button>ชั้น 2</button><button>ชั้น 3</button><button>ชั้น 4</button></div><div class="sim-search">ค้นหาห้อง</div><button class="sim-button sim-button-primary">เพิ่มห้อง</button></div>
    <div class="sim-room-summary"><span>ห้องทั้งหมด <b>24</b></span><span>ผู้พัก <b>41</b></span><span>เตียงว่าง <b>7</b></span><span>ห้องปิดใช้ <b>1</b></span></div>
    <div class="sim-room-grid">${room('A-101',2,2)}${room('A-102',2,1)}${room('A-103',2,2)}${room('A-104',2,0,false)}${room('A-105',2,2)}${room('A-106',2,1)}${room('A-107',2,2)}${room('A-108',2,1)}</div>`;
}

function adminStudents() {
  return `
    ${pageTitle('STUDENTS & ROOMS', 'นักศึกษาและห้องพัก', 'ตรวจสอบสถานะการเข้าพัก ย้ายห้อง และประวัติห้องพัก')}
    <div class="sim-toolbar"><button class="sim-button">ตัวกรอง</button><div class="sim-search">ค้นหารหัสนักศึกษา ชื่อ หรือห้อง</div><button class="sim-button">นักศึกษาที่ยังไม่มีห้อง 3</button><button class="sim-button sim-button-primary">จัดห้องแบบกลุ่ม</button></div>
    ${simpleTable(['รหัสนักศึกษา','ชื่อนักศึกษา','อาคาร','ห้อง','เตียง','สถานะ'],[
      ['DEMO-STU-001','นักศึกษาตัวอย่าง 01','A','A-301','A',status('เข้าพักอยู่','success')],['DEMO-STU-002','นักศึกษาตัวอย่าง 02','A','A-301','B',status('เข้าพักอยู่','success')],['DEMO-STU-003','นักศึกษาตัวอย่าง 03','B','B-214','A',status('เข้าพักอยู่','success')],['DEMO-STU-004','นักศึกษาตัวอย่าง 04','—','—','—',status('ยังไม่มีห้อง','warning')],['DEMO-STU-005','นักศึกษาตัวอย่าง 05','C','C-402','B',status('เข้าพักอยู่','success')],
    ])}`;
}

function adminMaterials() {
  return `
    ${pageTitle('MATERIALS', 'วัสดุและประเภทงาน', 'จัดการรายการวัสดุ หมวด และสต็อกที่ใช้ประกอบงานซ่อม', 'เพิ่มวัสดุ')}
    <div class="sim-metrics sim-metrics-3">${metric('รายการวัสดุ','42','เปิดใช้งาน 40 รายการ')}${metric('ใกล้หมด','5','ต่ำกว่าจุดเตือน','warning')}${metric('ใช้เดือนนี้','86','หน่วยรวม')}</div>
    <div class="sim-toolbar"><div class="sim-search">ค้นหาวัสดุหรือประเภทงาน</div><button class="sim-button">ทุกหมวด</button><button class="sim-button">เฉพาะใกล้หมด</button></div>
    ${simpleTable(['วัสดุ','ประเภท','คงเหลือ','จุดเตือน','หน่วย','สถานะ'],[
      ['หลอด LED 12W','ไฟฟ้า','24','10','หลอด',status('พร้อมใช้','success')],['ปลั๊กไฟ 3 ช่อง','ไฟฟ้า','9','10','ชิ้น',status('ใกล้หมด','warning')],['วาล์วน้ำ 1/2 นิ้ว','ประปา','7','8','ชิ้น',status('ใกล้หมด','warning')],['สายฉีดชำระ','ประปา','12','6','ชุด',status('พร้อมใช้','success')],['บานพับตู้','เฟอร์นิเจอร์','18','8','คู่',status('พร้อมใช้','success')],
    ])}`;
}

function adminReports() {
  const reportBars=[72,54,83,61,40].map((v,i)=>`<div><span>${['ไฟฟ้า','ประปา','แอร์','เฟอร์นิเจอร์','อื่น ๆ'][i]}</span><b><i style="width:${v}%"></i></b><em>${[18,13,21,15,10][i]}</em></div>`).join('');
  return `
    ${pageTitle('REPORTS', 'รายงานงานซ่อม', 'ค้นหา กรอง และสรุปข้อมูลการซ่อมเพื่อใช้ประกอบการบริหาร')}
    <section class="sim-panel"><div class="sim-report-filter"><label><span>ช่วงวันที่</span><div class="sim-input">1 ก.ย. 2569 — 12 ก.ย. 2569</div></label><label><span>อาคาร</span><div class="sim-input">ทุกอาคาร ⌄</div></label><label><span>ประเภทงาน</span><div class="sim-input">ทุกประเภท ⌄</div></label><button class="sim-button sim-button-primary">สร้างรายงาน</button></div></section>
    <div class="sim-metrics sim-metrics-4">${metric('งานทั้งหมด','77','ในช่วงที่เลือก')}${metric('เสร็จสิ้น','54','70%','success')}${metric('กำลังทำ','17','22%')}${metric('เวลาปิดงานเฉลี่ย','1.8 วัน','ข้อมูลจำลอง')}</div>
    <div class="sim-grid sim-grid-main"><section class="sim-panel"><div class="sim-panel-head"><div><strong>งานตามประเภท</strong><span>จำนวนใบแจ้งซ่อม</span></div></div><div class="sim-hbar">${reportBars}</div></section><aside class="sim-panel"><div class="sim-panel-head"><div><strong>ส่งออก</strong><span>ตัวเลือกเอกสาร</span></div></div><div class="sim-export"><button>Excel</button><button>PDF</button><button>CSV</button></div><div class="sim-callout"><strong>ข้อมูลเก่าและคลังเอกสาร</strong><span>0 รายการรอดำเนินการ</span><small>แยกจากรายงานงานซ่อมปกติ</small></div></aside></div>`;
}

function adminMaintenance() {
  return `
    ${pageTitle('SYSTEM MAINTENANCE', 'ดูแลระบบ', 'ติดตามงานข้อมูลเก่า สำรองข้อมูล โควต้าอีเมล และสถานะระบบ')}
    <div class="sim-maint-grid">
      <section class="sim-panel sim-maint-card"><div class="sim-maint-head"><span>DATA RETENTION</span>${status('ปกติ','success')}</div><h4>วงจรข้อมูลและ Archive</h4><p>ไม่มีข้อมูลที่ครบเงื่อนไขรอส่งออกในขณะนี้</p><dl class="sim-kv compact"><div><dt>Active data</dt><dd>0–2 ปี</dd></div><div><dt>Archive window</dt><dd>2–4 ปี</dd></div><div><dt>รอตรวจ</dt><dd>0 รายการ</dd></div></dl><button class="sim-button">ตรวจสถานะ</button></section>
      <section class="sim-panel sim-maint-card"><div class="sim-maint-head"><span>BACKUP</span>${status('ล่าสุดผ่าน','success')}</div><h4>Backup & Restore Readiness</h4><p>ตัวอย่างสถานะ checksum และ restore drill</p><dl class="sim-kv compact"><div><dt>Daily</dt><dd>ผ่าน</dd></div><div><dt>Weekly</dt><dd>ผ่าน</dd></div><div><dt>Off-site</dt><dd>พร้อม</dd></div></dl><button class="sim-button">ดูรายละเอียด</button></section>
      <section class="sim-panel sim-maint-card"><div class="sim-maint-head"><span>EMAIL QUOTA</span>${status('ปกติ','success')}</div><h4>การส่งอีเมลระบบ</h4><p>ตัวเลขสมมติสำหรับแสดง layout การควบคุมโควต้า</p><div class="sim-quota"><div><span>ใช้วันนี้</span><b>18 / 100</b></div><i><em style="width:18%"></em></i></div><button class="sim-button">ตรวจเหตุการณ์ส่ง</button></section>
      <section class="sim-panel sim-maint-card"><div class="sim-maint-head"><span>SYSTEM</span>${status('Healthy','success')}</div><h4>บริการหลัก</h4><div class="sim-health"><div>${status('Database','success')}<b>Online</b></div><div>${status('Storage','success')}<b>28%</b></div><div>${status('Realtime','success')}<b>Online</b></div><div>${status('Email','success')}<b>Ready</b></div></div></section>
    </div>`;
}

const renderers = {
  studentDashboard, studentRepair, studentStatus, studentHistory,
  techJobs, techDetail, techCalendar, techMaterials, techHistory,
  adminDashboard, adminRepairs, adminRooms, adminStudents, adminMaterials, adminReports, adminMaintenance,
};

function renderAppShell(role, screen) {
  const meta = roleMeta[role];
  const content = renderers[screen.kind]();
  const nav = meta.screens.map((item, index) => `
    <button type="button" class="sim-nav-item ${item.id === screen.id ? 'active' : ''}" data-sim-screen="${item.id}">
      ${icon(String(index + 1).padStart(2, '0'))}<span><b>${item.title}</b><small>${item.subtitle}</small></span>
    </button>`).join('');
  return `
    <div class="sim-app">
      <aside class="sim-sidebar">
        <div class="sim-brand"><span>RMUTI</span><strong>DORM REPAIR</strong></div>
        <p class="sim-role-tag">${meta.short}</p>
        <nav>${nav}</nav>
        <div class="sim-sidebar-foot"><span class="sim-avatar">D</span><div><b>${meta.user.split(' · ')[0]}</b><small>${meta.user.split(' · ')[1] || 'บัญชีตัวอย่าง'}</small></div></div>
      </aside>
      <section class="sim-main">
        <header class="sim-topbar"><div><span class="sim-mobile-brand">RMUTI</span><small>Representative UI · Mock Data</small></div><div class="sim-top-actions"><span>12 ก.ย. 2569</span><button>?</button><span class="sim-avatar small">D</span></div></header>
        <main class="sim-content">${content}</main>
      </section>
    </div>`;
}

function currentScreen() {
  return roleMeta[activeRole].screens.find((item) => item.id === activeScreen) || roleMeta[activeRole].screens[0];
}

function renderScreenList() {
  const meta = roleMeta[activeRole];
  mockScreenList.innerHTML = `
    <div class="mock-list-head"><span>${meta.label}</span><small>${meta.screens.length} หน้าตัวอย่าง</small></div>
    ${meta.screens.map((screen, index) => `<button type="button" class="mock-screen-button ${screen.id === activeScreen ? 'is-active' : ''}" data-screen-id="${screen.id}"><span>${String(index + 1).padStart(2,'0')}</span><div><strong>${screen.title}</strong><small>${screen.subtitle}</small></div></button>`).join('')}`;
}

function renderMock() {
  const screen = currentScreen();
  mockRoleLabel.textContent = roleMeta[activeRole].label;
  mockScreenTitle.textContent = screen.title;
  renderScreenList();
  mockApp.innerHTML = renderAppShell(activeRole, screen);
}

roleTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activeRole = tab.dataset.mockRole;
    activeScreen = roleMeta[activeRole].screens[0].id;
    roleTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    renderMock();
  });
});

mockScreenList?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-screen-id]');
  if (!button) return;
  activeScreen = button.dataset.screenId;
  renderMock();
});

mockApp?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-sim-screen]');
  if (!button) return;
  activeScreen = button.dataset.simScreen;
  renderMock();
});

if (mockApp && mockScreenList) renderMock();
