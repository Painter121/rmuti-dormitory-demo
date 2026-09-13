import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { d as t } from "./vendor-dnd-CCxL00r4.js";
import { d as n, f as r } from "./vendor-react-BijskWJh.js";
import { a as i } from "./vendor-framer-DXE0nwZD.js";
import { h as d, m as f, p } from "./index-v3.js";

var m = e(t(), 1);
var h = i();

var CATEGORIES = [
  {
    id: d.STUDENT,
    label: "นักศึกษา",
    role: d.STUDENT,
    homePath: "/student",
    activeColor: "#10b981",
    screens: [
      { path: "/student", name: "Dashboard นักศึกษา" },
      { path: "/student/repair", name: "แบบฟอร์มแจ้งซ่อม" },
      { path: "/student/status", name: "ติดตามสถานะ & ไทม์ไลน์" },
      { path: "/student/history", name: "ประวัติการแจ้งซ่อม" },
      { path: "/student/appointments", name: "การนัดหมายช่าง" }
    ]
  },
  {
    id: d.TECHNICIAN,
    label: "ช่างซ่อม",
    role: d.TECHNICIAN,
    homePath: "/tech/jobs",
    activeColor: "#d97706",
    screens: [
      { path: "/tech/jobs", name: "รายการงานซ่อม (Jobs)" },
      { path: "/tech/calendar", name: "ปฏิทินงานช่าง" },
      { path: "/tech/materials", name: "เบิก-ใช้วัสดุอะไหล่" },
      { path: "/tech/reports", name: "รายงานผลงานช่าง" }
    ]
  },
  {
    id: d.ADMIN,
    label: "ผู้ดูแลระบบ",
    role: d.ADMIN,
    homePath: "/admin/dashboard",
    activeColor: "#0284c7",
    screens: [
      { path: "/admin/dashboard", name: "Dashboard & KPI" },
      { path: "/admin/repairs", name: "จัดการงานซ่อมทั้งหมด" },
      { path: "/admin/rooms", name: "ผังห้องพักและอาคาร" },
      { path: "/admin/students/rooms", name: "จัดการห้องพักนักศึกษา" },
      { path: "/admin/students", name: "ข้อมูลนักศึกษา" },
      { path: "/admin/personnel", name: "ข้อมูลบุคลากร & ช่าง" },
      { path: "/admin/equipments", name: "คลังวัสดุและอุปกรณ์" },
      { path: "/admin/announcements", name: "จัดการข่าวสาร" },
      { path: "/admin/master-data", name: "Master Data & ตั้งค่า" }
    ]
  },
  {
    id: "PUBLIC",
    label: "หน้าสาธารณะ",
    role: d.STUDENT,
    homePath: "/",
    activeColor: "#ea580c",
    screens: [
      { path: "/", name: "Landing หน้าแรก" },
      { path: "/publicRepair", name: "ติดตามสถานะสาธารณะ" },
      { path: "/publicRepair/new", name: "แจ้งซ่อมพื้นที่ส่วนกลาง" },
      { path: "/how-it-works", name: "คู่มือการใช้งาน" },
      { path: "/announcements", name: "ข่าวประชาสัมพันธ์" }
    ]
  }
];

function DemoShowcaseBar() {
  var nav = r();
  var loc = n();

  var isCollapsedState = (0, m.useState)(function() {
    try {
      return localStorage.getItem("rmuti_demo_bar_collapsed") === "true";
    } catch(e) {
      return false;
    }
  });
  var isCollapsed = isCollapsedState[0];
  var setIsCollapsed = isCollapsedState[1];

  var activeCatState = (0, m.useState)(d.STUDENT);
  var activeCatId = activeCatState[0];
  var setActiveCatId = activeCatState[1];

  (0, m.useEffect)(function() {
    var p = loc.pathname;
    if (p.startsWith("/tech")) {
      setActiveCatId(d.TECHNICIAN);
    } else if (p.startsWith("/admin")) {
      setActiveCatId(d.ADMIN);
    } else if (p.startsWith("/student")) {
      setActiveCatId(d.STUDENT);
    } else if (p === "/" || p.startsWith("/publicRepair") || p.startsWith("/how") || p.startsWith("/announcements")) {
      setActiveCatId("PUBLIC");
    }
  }, [loc.pathname]);

  var handleToggleCollapse = function(nextVal) {
    setIsCollapsed(nextVal);
    try {
      localStorage.setItem("rmuti_demo_bar_collapsed", String(nextVal));
    } catch(e) {}
  };

  var handleCategorySelect = function(cat) {
    setActiveCatId(cat.id);
    if (cat.id !== "PUBLIC" && cat.role) {
      f(cat.role);
    }
    if (!loc.pathname.startsWith(cat.homePath)) {
      nav(cat.homePath);
    }
  };

  var handleScreenSelect = function(cat, targetPath) {
    if (cat.id !== "PUBLIC" && cat.role) {
      f(cat.role);
    }
    nav(targetPath);
  };

  var currentCat = CATEGORIES.find(function(c) { return c.id === activeCatId; }) || CATEGORIES[0];
  var currentScreen = currentCat.screens.find(function(s) { return s.path === loc.pathname; }) || currentCat.screens[0];

  // โหมดย่อ (Collapsed) - แถบเส้นเดียว สะอาด แน่นหนา ไม่โปร่งใส
  if (isCollapsed) {
    return (0, h.jsxs)(h.Fragment, {
      children: [
        (0, h.jsx)("aside", {
          className: "fixed top-0 left-0 right-0 z-[99999] text-white shadow-lg font-sans",
          style: { backgroundColor: "#0f172a", borderBottom: "1px solid #334155" },
          "aria-label": "แถบควบคุม Live Demo (โหมดย่อ)",
          children: (0, h.jsxs)("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-3 py-1.5 text-xs sm:px-4 gap-2",
            children: [
              (0, h.jsxs)("div", {
                className: "flex items-center gap-2 min-w-0",
                children: [
                  (0, h.jsx)("span", {
                    className: "px-2 py-0.5 rounded text-[11px] font-bold text-orange-400 bg-orange-950 border border-orange-600 shrink-0",
                    children: "LIVE DEMO"
                  }),
                  (0, h.jsxs)("div", {
                    className: "flex items-center gap-1.5 text-xs truncate text-slate-200",
                    children: [
                      (0, h.jsx)("span", {
                        style: { color: currentCat.activeColor, fontWeight: "bold" },
                        children: currentCat.label
                      }),
                      (0, h.jsx)("span", { className: "text-slate-500", children: "/" }),
                      (0, h.jsx)("span", {
                        className: "text-slate-300 truncate",
                        children: currentScreen ? currentScreen.name : "หน้าหลัก"
                      })
                    ]
                  })
                ]
              }),
              (0, h.jsxs)("div", {
                className: "flex items-center gap-1.5 shrink-0",
                children: [
                  (0, h.jsx)("div", {
                    className: "hidden sm:flex items-center gap-1",
                    children: CATEGORIES.map(function(cat) {
                      var isActive = currentCat.id === cat.id;
                      return (0, h.jsx)("button", {
                        key: cat.id,
                        type: "button",
                        onClick: function() { handleCategorySelect(cat); },
                        style: isActive ? {
                          backgroundColor: cat.activeColor,
                          color: "#ffffff",
                          fontWeight: "bold"
                        } : {
                          backgroundColor: "#1e293b",
                          color: "#94a3b8",
                          border: "1px solid #334155"
                        },
                        className: "px-2 py-0.5 rounded text-[11px] transition hover:text-white",
                        children: cat.label
                      });
                    })
                  }),
                  (0, h.jsx)("button", {
                    type: "button",
                    onClick: function() { handleToggleCollapse(false); },
                    className: "px-2.5 py-1 rounded bg-orange-600 hover:bg-orange-500 text-xs font-bold text-white transition",
                    children: "ขยายแถบเมนู ▾"
                  })
                ]
              })
            ]
          })
        }),
        (0, h.jsx)("div", {
          className: "h-[36px] w-full shrink-0 pointer-events-none",
          "aria-hidden": "true"
        })
      ]
    });
  }

  // โหมดขยาย (Expanded) - พื้นหลังทึบ 100% แยกแถวชัดเจน ไม่มีไอคอน ไม่มีสติกเกอร์
  return (0, h.jsxs)(h.Fragment, {
    children: [
      (0, h.jsxs)("aside", {
        className: "fixed top-0 left-0 right-0 z-[99999] text-white shadow-2xl font-sans",
        style: { backgroundColor: "#0f172a", borderBottom: "1px solid #334155" },
        "aria-label": "แถบควบคุม Live Demo Showcase",
        children: [
          // แถวที่ 1: ตราสถานะ + ปุ่มเลือกหมวดหมู่ + ปุ่มย่อแถบ
          (0, h.jsxs)("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-3 py-2 text-xs sm:px-4 gap-2",
            children: [
              (0, h.jsxs)("div", {
                className: "flex items-center gap-2 min-w-0",
                children: [
                  (0, h.jsx)("span", {
                    className: "px-2 py-1 rounded text-xs font-bold text-orange-400 bg-orange-950 border border-orange-600 shrink-0",
                    children: "LIVE DEMO"
                  }),
                  (0, h.jsx)("span", {
                    className: "hidden md:inline text-slate-400 text-xs truncate",
                    children: "จำลอง 3 บทบาทพร้อมข้อมูลเสมือนจริง (เลือกหมวดด้านขวา)"
                  })
                ]
              }),
              (0, h.jsxs)("div", {
                className: "flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5",
                children: [
                  CATEGORIES.map(function(cat) {
                    var isActive = currentCat.id === cat.id;
                    return (0, h.jsx)("button", {
                      key: cat.id,
                      type: "button",
                      onClick: function() { handleCategorySelect(cat); },
                      style: isActive ? {
                        backgroundColor: cat.activeColor,
                        color: "#ffffff",
                        fontWeight: "bold",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.3)"
                      } : {
                        backgroundColor: "#1e293b",
                        color: "#cbd5e1",
                        border: "1px solid #334155"
                      },
                      className: "px-3 py-1.5 rounded-md text-xs transition hover:text-white whitespace-nowrap",
                      children: cat.label
                    });
                  }),
                  (0, h.jsx)("button", {
                    type: "button",
                    onClick: function() { handleToggleCollapse(true); },
                    style: { backgroundColor: "#1e293b", border: "1px solid #475569", color: "#cbd5e1" },
                    className: "px-2.5 py-1.5 rounded-md text-xs font-semibold transition hover:text-white hover:bg-slate-700 shrink-0 ml-1",
                    children: "ย่อแถบ ▴"
                  })
                ]
              })
            ]
          }),

          // แถวที่ 2: เมนูหน้าจอในหมวดที่เลือก พื้นหลังทึบตัดกันชัดเจน
          (0, h.jsx)("div", {
            style: { backgroundColor: "#020617", borderTop: "1px solid #1e293b" },
            className: "px-3 py-2 sm:px-4",
            children: (0, h.jsxs)("div", {
              className: "mx-auto flex max-w-7xl items-center gap-2",
              children: [
                (0, h.jsx)("span", {
                  className: "text-[11px] text-slate-400 font-semibold shrink-0",
                  children: "หน้าจอ:"
                }),
                (0, h.jsx)("div", {
                  className: "flex flex-1 flex-wrap items-center gap-1.5 overflow-x-auto",
                  children: currentCat.screens.map(function(screen) {
                    var isCurrent = loc.pathname === screen.path;
                    return (0, h.jsx)("button", {
                      key: screen.path,
                      type: "button",
                      onClick: function() { handleScreenSelect(currentCat, screen.path); },
                      style: isCurrent ? {
                        backgroundColor: "#ffffff",
                        color: "#0f172a",
                        fontWeight: "bold",
                        outline: "2px solid #ea580c"
                      } : {
                        backgroundColor: "#1e293b",
                        color: "#e2e8f0",
                        border: "1px solid #334155"
                      },
                      className: "px-3 py-1 rounded text-xs transition hover:bg-slate-700 hover:text-white whitespace-nowrap shadow-sm",
                      children: screen.name
                    });
                  })
                })
              ]
            })
          })
        ]
      }),
      (0, h.jsx)("div", {
        className: "h-[76px] w-full shrink-0 pointer-events-none",
        "aria-hidden": "true"
      })
    ]
  });
}

export { DemoShowcaseBar as default };
