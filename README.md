<div align="center">

<img src="LoGORMUTI.png" width="110" alt="RMUTI logo">

# RMUTI Dormitory System

### ระบบรับแจ้งซ่อมและติดตามงานซ่อมหอพักนักศึกษา

Interactive Frontend Showcase สำหรับมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน<br>
ทดลองกระบวนการทำงานครบทั้งนักศึกษา ช่างซ่อม เจ้าหน้าที่ และผู้ใช้งานทั่วไป

**[เปิด Live Demo](https://painter121.github.io/rmuti-dormitory-demo/)** · **[ชมภาพหน้าจอเว็บไซต์](#ภาพหน้าจอเว็บไซต์)** · **[ดูความสามารถ](#ความสามารถของระบบ)** · **[ผู้พัฒนา](#ผู้พัฒนา)**

`React 19` · `Vite 8` · `Tailwind CSS 4` · `Mock Data แยกจากระบบจริง`

</div>

[![RMUTI Dormitory System](screenshots/landing-page-new.png)](https://painter121.github.io/rmuti-dormitory-demo/)

## เกี่ยวกับโปรเจกต์

RMUTI Dormitory System คือเดโมระบบบริหารงานซ่อมหอพักแบบโต้ตอบ ตั้งแต่การแจ้งปัญหา การตรวจสอบและมอบหมายงาน การนัดหมายช่าง การอัปเดตสถานะ ไปจนถึงการดูประวัติและรายงานผล โดยออกแบบหน้าจอและเมนูให้เหมาะกับสิทธิ์ของผู้ใช้งานแต่ละบทบาท

> [!NOTE]
> เว็บไซต์นี้เป็น Portfolio Demo ที่ใช้ข้อมูลจำลองทั้งหมด ไม่เชื่อมต่อฐานข้อมูลหรือระบบงานจริง และไม่มีข้อมูลส่วนบุคคลของผู้ใช้งานจริง

## Workflow หลัก

<div align="center">

**แจ้งปัญหา**　→　**ตรวจสอบคำขอ**　→　**มอบหมายช่าง**　→　**นัดหมาย**　→　**ดำเนินการซ่อม**　→　**ติดตามและปิดงาน**

</div>

## ความสามารถของระบบ

| บทบาท | ความสามารถหลัก |
|---|---|
| **นักศึกษา (Student)** | ดู Dashboard, แจ้งซ่อมพร้อมแนบภาพ, ติดตาม Timeline, นัดหมายช่าง และค้นหาประวัติงานซ่อม |
| **ช่างซ่อม (Technician)** | รับงานที่ได้รับมอบหมาย, วางแผนผ่านปฏิทิน, บันทึกความคืบหน้าและวัสดุที่ใช้ และสรุปผลการปฏิบัติงาน |
| **ผู้ดูแลระบบ (Admin / Staff)** | ตรวจสอบและมอบหมายงาน, จัดการห้องพักและผู้ใช้งาน, ดูรายงาน, ส่งออกข้อมูล และตรวจสอบประสิทธิภาพระบบ |
| **ผู้ใช้งานทั่วไป (Public)** | ดูข่าวสารและข้อมูลติดต่อ, แจ้งซ่อมพื้นที่ส่วนกลาง และติดตามสถานะคำขอ |

### จุดเด่น

- แยก Dashboard, navigation และสิทธิ์การใช้งานตามบทบาท
- แสดงสถานะงานซ่อมด้วย card, badge และ timeline ที่อ่านง่าย
- รองรับการค้นหา ตัวกรอง การแบ่งหน้า และสถานะ Loading / Empty / Error
- มีระบบนัดหมาย ปฏิทินงานซ่อม คลังวัสดุ รายงาน และ Performance Monitoring
- รองรับ Responsive Layout, Light/Dark Theme และภาษาไทย
- ทดลอง workflow ได้ทันทีด้วยข้อมูลจำลองโดยไม่กระทบระบบจริง

## ภาพหน้าจอเว็บไซต์

ภาพด้านล่างเป็น UI ที่รันจริงจาก Live Demo ส่วนรายชื่อ รายการงาน และสถิติภายในหน้าจอเป็นข้อมูลจำลองเพื่อความปลอดภัย

<table>
  <tr>
    <td width="50%"><img src="screenshots/student-dashboard.png" alt="Student dashboard website page"></td>
    <td width="50%"><img src="screenshots/repair-request-form.png" alt="Repair request website page"></td>
  </tr>
  <tr>
    <td align="center"><strong>Student Dashboard</strong><br>ภาพรวมคำขอ ห้องพัก และการนัดหมาย</td>
    <td align="center"><strong>Repair Request</strong><br>แบบฟอร์มแจ้งซ่อมพร้อมรายละเอียดและรูปภาพ</td>
  </tr>
  <tr>
    <td width="50%"><img src="screenshots/repair-history.png" alt="Repair history website page"></td>
    <td width="50%"><img src="screenshots/admin-dashboard.png" alt="Admin dashboard website page"></td>
  </tr>
  <tr>
    <td align="center"><strong>Repair History</strong><br>ค้นหา กรอง และตรวจสอบงานซ่อมย้อนหลัง</td>
    <td align="center"><strong>Admin Dashboard</strong><br>สรุปสถานะ แนวโน้ม และประสิทธิภาพการดำเนินงาน</td>
  </tr>
  <tr>
    <td width="50%"><img src="screenshots/performance-monitoring.png" alt="Performance monitoring website page"></td>
    <td width="50%"><img src="screenshots/contact-map.png" alt="Contact and location website page"></td>
  </tr>
  <tr>
    <td align="center"><strong>Performance Monitoring</strong><br>ติดตาม Requests, Latency และ Event Loop</td>
    <td align="center"><strong>Contact &amp; Location</strong><br>ข้อมูลติดต่อและแผนที่ตั้งหอพัก</td>
  </tr>
</table>

> [!NOTE]
> หน้าเว็บและองค์ประกอบ UI เป็นผลงานจริงของโปรเจกต์ ข้อมูลที่แสดงภายในเป็นเพียง Mock Data ซึ่งแยกจากข้อมูลและระบบงานจริงทั้งหมด

## โครงสร้างการทำงาน

```mermaid
flowchart LR
    A[Public User] --> E[React Application]
    B[Student] --> E
    C[Technician] --> E
    D[Admin / Staff] --> E
    E --> F[Role-based Interface]
    F --> G[Mock API Layer]
    G --> H[Synthetic Demo Data]
```

เดโมแยกประสบการณ์ใช้งานตามบทบาท โดย UI ติดต่อกับ Mock API ภายในเบราว์เซอร์ จึงสาธิตขั้นตอนหลักได้โดยไม่ต้องใช้ backend หรือฐานข้อมูลจริง

## เทคโนโลยี

| กลุ่ม | เครื่องมือ |
|---|---|
| **Frontend** | React 19, JavaScript, Vite 8 |
| **Styling & UI** | Tailwind CSS 4, Radix UI, Lucide React, Framer Motion |
| **Data & Routing** | TanStack Query, React Router |
| **Deployment** | GitHub Pages |
| **Demo Data** | In-browser Mock API และข้อมูลสังเคราะห์ |

## ทดลองใช้งาน

เปิดเว็บไซต์ได้ที่ **[painter121.github.io/rmuti-dormitory-demo](https://painter121.github.io/rmuti-dormitory-demo/)**

ภายในหน้าเดโมสามารถสลับบทบาทจากแถบ **Live Showcase** เพื่อสำรวจหน้าจอและ workflow ของแต่ละกลุ่มผู้ใช้งานได้ทันที

<div align="center">

## ผู้พัฒนา

<table>
  <tr>
    <td align="center" valign="top" width="240">
      <a href="https://github.com/Painter121">
        <img src="https://github.com/Painter121.png?size=120" width="110" height="110" alt="Painter121 avatar"><br>
        <strong>@Painter121</strong>
      </a>
    </td>
    <td align="center" valign="top" width="240">
      <a href="https://github.com/firstphethay11">
        <img src="https://github.com/firstphethay11.png?size=120" width="110" height="110" alt="firstphethay11 avatar"><br>
        <strong>@firstphethay11</strong>
      </a>
    </td>
  </tr>
</table>

โปรเจกต์นี้ร่วมกันพัฒนาและดูแลโดยผู้พัฒนาทั้งสองคน

</div>

---

<div align="center">

**RMUTI Dormitory System — Interactive Frontend Showcase**

</div>
