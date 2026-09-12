<div align="center">

# RMUTI Dormitory System

ระบบรับแจ้งซ่อมและติดตามสถานะงานซ่อมหอพักนักศึกษา<br>
มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน

**[เปิด Live Demo](https://painter121.github.io/rmuti-dormitory-demo/)** · **[ดูโปรไฟล์ผู้พัฒนา](#ผู้พัฒนา)**

</div>

[![RMUTI Dormitory System landing page](screenshots/landing-page-new.png)](https://painter121.github.io/rmuti-dormitory-demo/)

## ภาพรวมโปรเจกต์

RMUTI Dormitory System เป็น Interactive Frontend Showcase สำหรับระบบบริหารงานซ่อมหอพัก ออกแบบให้ผู้ใช้แต่ละบทบาทเห็นข้อมูลและขั้นตอนทำงานที่เกี่ยวข้อง ตั้งแต่การแจ้งปัญหา ติดตามความคืบหน้า นัดหมายช่าง ไปจนถึงการตรวจสอบประวัติงานซ่อม

เดโมนี้ใช้ข้อมูลจำลองทั้งหมดและไม่เชื่อมต่อฐานข้อมูลหรือระบบงานจริง ผู้เข้าชมจึงสามารถทดลองหน้าจอและ workflow ได้อย่างปลอดภัย

## UI Showcase

<table>
  <tr>
    <td width="50%">
      <img src="screenshots/admin-dashboard.png" alt="Admin repair dashboard">
    </td>
    <td width="50%">
      <img src="screenshots/performance-monitoring.png" alt="System performance monitoring">
    </td>
  </tr>
  <tr>
    <td align="center"><strong>Admin Dashboard</strong><br>สรุปสถานะงานซ่อม แนวโน้ม และอัตรางานสำเร็จ</td>
    <td align="center"><strong>Performance Monitoring</strong><br>ติดตาม Requests, Latency และ Event Loop ของระบบ</td>
  </tr>
  <tr>
    <td width="50%">
      <img src="screenshots/repair-request-form.png" alt="Student repair request form">
    </td>
    <td width="50%">
      <img src="screenshots/contact-map.png" alt="Dormitory contact map">
    </td>
  </tr>
  <tr>
    <td align="center"><strong>Repair Request</strong><br>แบบฟอร์มแจ้งซ่อมสำหรับนักศึกษาพร้อมแนบรูปภาพ</td>
    <td align="center"><strong>Contact & Location</strong><br>แผนที่ตั้งและข้อมูลติดต่อหอพักอย่างครบถ้วน</td>
  </tr>
</table>

## Workflow หลัก

**แจ้งปัญหา** → **ติดตามสถานะ** → **นัดหมายช่าง** → **ตรวจสอบประวัติ**

## ขอบเขตระบบทั้งหมด

ระบบไม่ได้มีเพียงหน้ารับแจ้งซ่อม แต่ครอบคลุมกระบวนการบริหารงานซ่อมหอพักตั้งแต่ต้นจนจบ โดยออกแบบหน้าจอและสิทธิ์การใช้งานตามบทบาทหลัก 4 กลุ่ม

### นักศึกษา (Student)

- Dashboard สรุปงานซ่อมและข้อมูลห้องพักของตนเอง
- สร้างคำขอแจ้งซ่อม เลือกประเภทงาน ระบุรายละเอียด และแนบรูปภาพ
- ตรวจสอบและแก้ไขข้อมูลก่อนส่ง พร้อมป้องกันข้อมูลในฟอร์มหายเมื่อออกจากหน้า
- ติดตามสถานะผ่าน Status Card และ Timeline ของแต่ละขั้นตอน
- ดูรายละเอียด ผู้รับผิดชอบ และประวัติการดำเนินงานของคำขอ
- นัดหมายวันและเวลากับช่าง รวมถึงตรวจสอบนัดหมายที่กำลังดำเนินการ
- ค้นหา กรอง และดูประวัติงานซ่อมย้อนหลัง

### ช่างซ่อม (Technician)

- ดูรายการงานที่ได้รับมอบหมายและรายละเอียดของแต่ละงาน
- วางแผนงานผ่านปฏิทินและตารางนัดหมาย
- บันทึกความคืบหน้าและสถานะการปฏิบัติงาน
- เลือกและบันทึกวัสดุหรืออุปกรณ์ที่ใช้ในงานซ่อม
- ตรวจสอบรายการวัสดุที่เกี่ยวข้องกับงาน
- ดูรายงานและสรุปผลการปฏิบัติงานของช่าง

### ผู้ดูแลระบบและเจ้าหน้าที่ (Admin / Staff)

- Dashboard ภาพรวมจำนวนงาน แนวโน้ม สัดส่วนสถานะ และอัตรางานสำเร็จ
- จัดการคำขอแจ้งซ่อม ค้นหา กรอง ดูรายละเอียด และมอบหมายงานให้ช่าง
- ตรวจสอบรายการแจ้งซ่อมที่อาจซ้ำกันก่อนดำเนินการ
- บริหารปฏิทินงานซ่อมและตารางปฏิบัติงาน
- จัดการอาคาร หอพัก ห้องพัก และพื้นที่ส่วนกลาง
- จัดการนักศึกษา การจัดสรรห้อง และประวัติการย้ายห้อง
- จัดการบุคลากร ช่าง และบัญชีผู้ใช้งาน รวมถึงนำเข้าข้อมูลผู้ใช้
- จัดการคลังวัสดุ อุปกรณ์ และข้อมูลหลักที่ใช้ภายในระบบ
- จัดการหน้าแรก ข่าวสาร ประกาศ และข้อมูลสถานที่สาธารณะ
- สร้างรายงาน ส่งออกข้อมูล และแสดงตัวอย่างเอกสาร PDF
- ตรวจสอบสถานะระบบ Requests, Latency และ Event Loop ผ่านหน้า Performance Monitoring
- จัดการข้อมูลระบบและหน้า System Maintenance

### ผู้ใช้งานทั่วไป (Public)

- ดูหน้า Landing Page ข่าวสาร ประกาศ วิธีการใช้งาน และข้อมูลติดต่อ
- ดูตำแหน่งหอพักผ่านหน้าแผนที่และข้อมูลช่องทางติดต่อ
- แจ้งซ่อมพื้นที่ส่วนกลางโดยไม่ต้องเข้าสู่หน้าของนักศึกษา
- ติดตามสถานะคำขอแจ้งซ่อมพื้นที่ส่วนกลาง

### ความสามารถส่วนกลาง

- แยกเมนูและหน้าจอตามบทบาทของผู้ใช้งาน
- ระบบแจ้งเตือน โปรไฟล์ผู้ใช้ และการเปลี่ยนรหัสผ่าน
- อัปโหลดและดูภาพประกอบการแจ้งซ่อม
- Search, Filter, Pagination และสถานะ Loading / Empty / Error
- รองรับ Responsive Layout, Light/Dark Theme และภาษาไทย
- ใช้ข้อมูลจำลองเพื่อให้ทดลอง Workflow ของทุกบทบาทได้โดยไม่กระทบระบบจริง

## จุดเด่นของผลงาน

- แยกหน้าจอและ navigation ตามบทบาทของผู้ใช้งาน
- แสดงสถานะงานซ่อมด้วย card, badge และ timeline ที่อ่านง่าย
- รองรับการทดลอง workflow โดยไม่ต้องเข้าสู่ระบบจริง
- ออกแบบ Responsive UI สำหรับหน้าจอ desktop และ mobile
- พัฒนาด้วย React และ Vite พร้อม component ที่นำกลับมาใช้ซ้ำได้

## เทคโนโลยี

`React` · `Vite` · `JavaScript` · `Responsive Web Design` · `GitHub Pages`

<h2 align="center">ผู้พัฒนา</h2>

<table align="center">
  <tr>
    <td align="center" valign="middle" width="220">
      <a href="https://github.com/Painter121"><img src="https://github.com/Painter121.png?size=120" width="100" height="100" alt="Painter121 avatar"><br><br><strong>@Painter121</strong></a>
    </td>
    <td align="center" valign="middle" width="220">
      <a href="https://github.com/firstphethay11"><img src="https://github.com/firstphethay11.png?size=120" width="100" height="100" alt="firstphethay11 avatar"><br><br><strong>@firstphethay11</strong></a>
    </td>
  </tr>
</table>

<p align="center">ทั้งสองบัญชีร่วมพัฒนาและดูแลโปรเจกต์นี้</p>

---

Demo: **[painter121.github.io/rmuti-dormitory-demo](https://painter121.github.io/rmuti-dormitory-demo/)**
