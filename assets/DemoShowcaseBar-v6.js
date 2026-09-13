import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { d as t } from "./vendor-dnd-CCxL00r4.js";
import { d as n, f as r } from "./vendor-react-BijskWJh.js";
import { a as i } from "./vendor-framer-DXE0nwZD.js";
import { h as d, m as f, p } from "./index-v7.js";

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

function IconChevronUp(props) {
  return (0, h.jsx)("svg", {
    className: props.className || "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: (0, h.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.5",
      d: "M5 15l7-7 7 7"
    })
  });
}

function IconChevronDown(props) {
  return (0, h.jsx)("svg", {
    className: props.className || "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: (0, h.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.5",
      d: "M19 9l-7 7-7-7"
    })
  });
}

function DemoShowcaseBar() {
  var nav = r();
  var loc = n();
  var asideRef = (0, m.useRef)(null);

  // ค่าเริ่มต้นเป็น false เสมอ เพื่อให้ผู้ใช้เปิดเข้ามาแล้วเห็นแถบและปุ่มลูกศรทันที
  var isClosedState = (0, m.useState)(false);
  var isClosed = isClosedState[0];
  var setIsClosed = isClosedState[1];

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

  // ซิงค์ CSS และ layout offset แบบ Dynamic ดัน Navbar ลงมาให้พอดีเป๊ะ ไม่ทับ Navbar
  (0, m.useEffect)(function() {
    var styleId = "rmuti-demo-bar-style-fix";
    var styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    var updateLayoutOffset = function() {
      var height = 0;
      if (!isClosed) {
        if (asideRef.current) {
          height = asideRef.current.offsetHeight || 86;
        } else {
          height = 86;
        }
      }

      document.documentElement.style.setProperty('--demo-bar-height', height + 'px');

      styleEl.innerHTML = [
        ':root { --demo-bar-height: ' + height + 'px; }',
        '@media (min-width: 768px) {',
        '  .md\\:fixed.md\\:inset-0, [class*="md:fixed"][class*="md:inset-0"] { top: var(--demo-bar-height, 0px) !important; transition: top 0.25s ease-out; }',
        '}',
        '@media (max-width: 767px) {',
        '  body { padding-top: var(--demo-bar-height, 0px) !important; transition: padding-top 0.25s ease-out; }',
        '}',
        'header.sticky, header.absolute, header { top: 0px !important; }'
      ].join('\n');

      var layoutNodes = document.querySelectorAll('.md\\:fixed.md\\:inset-0, [class*="md:fixed"][class*="md:inset-0"]');
      layoutNodes.forEach(function(el) {
        el.style.top = height + 'px';
      });
    };

    updateLayoutOffset();
    var timer = setTimeout(updateLayoutOffset, 50);

    var observer = null;
    if (typeof ResizeObserver !== "undefined" && asideRef.current) {
      observer = new ResizeObserver(updateLayoutOffset);
      observer.observe(asideRef.current);
    }
    window.addEventListener('resize', updateLayoutOffset);

    return function() {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      window.removeEventListener('resize', updateLayoutOffset);
      if (isClosed) {
        styleEl.innerHTML = [
          ':root { --demo-bar-height: 0px; }',
          '@media (min-width: 768px) {',
          '  .md\\:fixed.md\\:inset-0, [class*="md:fixed"][class*="md:inset-0"] { top: 0px !important; }',
          '}',
          '@media (max-width: 767px) {',
          '  body { padding-top: 0px !important; }',
          '}',
          'header.sticky, header.absolute, header { top: 0px !important; }'
        ].join('\n');

        var layoutNodes = document.querySelectorAll('.md\\:fixed.md\\:inset-0, [class*="md:fixed"][class*="md:inset-0"]');
        layoutNodes.forEach(function(el) {
          el.style.top = '0px';
        });
        document.documentElement.style.removeProperty('--demo-bar-height');
      }
    };
  }, [isClosed, loc.pathname]);

  var handleToggleClosed = function(nextVal) {
    setIsClosed(nextVal);
    if (!nextVal) {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch(e) {}
    }
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

  // กรณีผู้ใช้กดปิดแถบเดโม: แสดงปุ่มแท็บลูกศรลง [▼] ที่มุมขวาบนและกึ่งกลาง เพื่อให้กดเลื่อนเปิดลงมาได้ง่ายๆ
  if (isClosed) {
    return (0, h.jsxs)("div", {
      children: [
        // ปุ่มแท็บมุมขวาบน (ตำแหน่งเดิมที่กดปิด)
        (0, h.jsx)("button", {
          type: "button",
          onClick: function() { handleToggleClosed(false); },
          style: {
            backgroundColor: "#0f172a",
            borderColor: "#334155",
            color: "#f97316",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.45)"
          },
          className: "fixed top-0 right-4 z-50 flex items-center justify-center w-9 h-7 sm:w-10 sm:h-8 rounded-b-lg border border-t-0 hover:bg-slate-800 hover:text-orange-300 transition cursor-pointer group",
          title: "เลื่อนเปิดแถบเดโม (Slide Down)",
          "aria-label": "เลื่อนเปิดแถบเดโม",
          children: (0, h.jsx)(IconChevronDown, {
            className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform"
          })
        }),
        // แท็บกึ่งกลางด้านบน [DEMO ▼]
        (0, h.jsxs)("button", {
          type: "button",
          onClick: function() { handleToggleClosed(false); },
          style: {
            backgroundColor: "#0f172a",
            borderColor: "#334155",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.45)"
          },
          className: "fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-b-lg border border-t-0 hover:bg-slate-800 transition cursor-pointer group",
          title: "เลื่อนเปิดแถบเดโม (Slide Down)",
          "aria-label": "เลื่อนเปิดแถบเดโม",
          children: [
            (0, h.jsx)("span", {
              className: "text-[10px] sm:text-xs font-bold text-slate-400 group-hover:text-slate-200",
              children: "DEMO"
            }),
            (0, h.jsx)(IconChevronDown, {
              className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 group-hover:translate-y-0.5 transition-transform"
            })
          ]
        })
      ]
    });
  }

  // โหมดเปิด (Open) - พื้นหลังทึบ 100% ดัน Navbar ลงมา และมีไอคอนลูกศรขึ้น [▲] เลื่อนปิด
  return (0, h.jsxs)("aside", {
    ref: asideRef,
    className: "fixed top-0 left-0 right-0 z-50 text-white shadow-xl font-sans",
    style: { backgroundColor: "#0f172a", borderBottom: "1px solid #334155" },
    "aria-label": "แถบควบคุม Live Demo Showcase",
    children: [
      // แถวที่ 1: ตราสถานะ + ปุ่มเลือกหมวดหมู่ + ไอคอนลูกศรขึ้น [▲] เลื่อนปิด
      (0, h.jsxs)("div", {
        className: "mx-auto flex max-w-7xl items-center justify-between px-3 py-1.5 sm:py-2 text-xs sm:px-4 gap-2",
        children: [
          (0, h.jsxs)("div", {
            className: "flex items-center gap-2 min-w-0",
            children: [
              (0, h.jsx)("span", {
                className: "px-2 py-0.5 sm:py-1 rounded text-xs font-bold text-orange-400 bg-orange-950 border border-orange-600 shrink-0",
                children: "LIVE DEMO"
              }),
              (0, h.jsx)("span", {
                className: "hidden md:inline text-slate-400 text-xs truncate",
                children: "จำลอง 3 บทบาทพร้อมข้อมูลเสมือนจริง (เลือกหมวดด้านขวา)"
              })
            ]
          }),
          (0, h.jsxs)("div", {
            className: "flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 shrink-0",
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
                  className: "px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs transition hover:text-white whitespace-nowrap shrink-0",
                  children: cat.label
                });
              }),
              // ไอคอนลูกศรขึ้น [▲] เลื่อนเปิด/ปิด
              (0, h.jsx)("button", {
                type: "button",
                onClick: function() { handleToggleClosed(true); },
                style: { backgroundColor: "#1e293b", border: "1px solid #475569", color: "#cbd5e1" },
                className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md text-xs transition hover:text-white hover:bg-slate-700 hover:border-slate-500 shrink-0 ml-1 cursor-pointer group",
                title: "เลื่อนปิดแถบเดโม (Slide Up)",
                "aria-label": "เลื่อนปิดแถบเดโม",
                children: (0, h.jsx)(IconChevronUp, {
                  className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform"
                })
              })
            ]
          })
        ]
      }),

      // แถวที่ 2: เมนูหน้าจอในหมวดที่เลือก แถวนอนเลื่อนได้แบบ Single Row
      (0, h.jsx)("div", {
        style: { backgroundColor: "#020617", borderTop: "1px solid #1e293b" },
        className: "px-3 py-1.5 sm:px-4",
        children: (0, h.jsxs)("div", {
          className: "mx-auto flex max-w-7xl items-center gap-2",
          children: [
            (0, h.jsx)("span", {
              className: "text-[11px] text-slate-400 font-semibold shrink-0",
              children: "หน้าจอ:"
            }),
            (0, h.jsx)("div", {
              className: "flex flex-1 items-center gap-1.5 overflow-x-auto py-0.5",
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
                  className: "px-2.5 sm:px-3 py-1 rounded text-xs transition hover:bg-slate-700 hover:text-white whitespace-nowrap shrink-0 shadow-sm",
                  children: screen.name
                });
              })
            })
          ]
        })
      })
    ]
  });
}

export { DemoShowcaseBar as default };
