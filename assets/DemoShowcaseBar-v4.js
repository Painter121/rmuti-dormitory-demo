import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { d as t } from "./vendor-dnd-CCxL00r4.js";
import { d as n, f as r } from "./vendor-react-BijskWJh.js";
import { a as i } from "./vendor-framer-DXE0nwZD.js";
import { h as d, m as f, p } from "./index-BrdXBQjQ.js";

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
  var asideRef = (0, m.useRef)(null);

  var isClosedState = (0, m.useState)(function() {
    try {
      return localStorage.getItem("rmuti_demo_bar_closed") === "true";
    } catch(e) {
      return false;
    }
  });
  var isClosed = isClosedState[0];
  var setIsClosed = isClosedState[1];

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

  // ซิงค์ CSS และ layout offset แบบ Dynamic ทั้ง desktop (md:fixed) และ mobile (paddingTop)
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
          height = asideRef.current.offsetHeight || (isCollapsed ? 36 : 76);
        } else {
          height = isCollapsed ? 36 : 76;
        }
      }

      document.documentElement.style.setProperty('--demo-bar-height', height + 'px');

      styleEl.innerHTML = [
        ':root { --demo-bar-height: ' + height + 'px; }',
        '@media (min-width: 768px) {',
        '  .md\\:fixed.md\\:inset-0, [class*="md:fixed"][class*="md:inset-0"] { top: var(--demo-bar-height, 0px) !important; }',
        '}',
        '@media (max-width: 767px) {',
        '  body { padding-top: var(--demo-bar-height, 0px) !important; }',
        '}',
        'header.sticky { top: var(--demo-bar-height, 0px) !important; }'
      ].join('\n');

      var layoutNodes = document.querySelectorAll('.md\\:fixed.md\\:inset-0, [class*="md:fixed"][class*="md:inset-0"]');
      layoutNodes.forEach(function(el) {
        el.style.top = height + 'px';
      });
    };

    updateLayoutOffset();
    var timer = setTimeout(updateLayoutOffset, 60);

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
          'header.sticky { top: 0px !important; }'
        ].join('\n');

        var layoutNodes = document.querySelectorAll('.md\\:fixed.md\\:inset-0, [class*="md:fixed"][class*="md:inset-0"]');
        layoutNodes.forEach(function(el) {
          el.style.top = '0px';
        });
        document.documentElement.style.removeProperty('--demo-bar-height');
      }
    };
  }, [isClosed, isCollapsed, loc.pathname]);

  var handleToggleCollapse = function(nextVal) {
    setIsCollapsed(nextVal);
    try {
      localStorage.setItem("rmuti_demo_bar_collapsed", String(nextVal));
    } catch(e) {}
  };

  var handleToggleClosed = function(nextVal) {
    setIsClosed(nextVal);
    try {
      localStorage.setItem("rmuti_demo_bar_closed", String(nextVal));
    } catch(e) {}
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

  // กรณีผู้ใช้กดปิดแถบเดโม: แสดงปุ่มลอยขนาดกะทัดรัดที่มุมขวาล่าง
  if (isClosed) {
    return (0, h.jsxs)("button", {
      type: "button",
      onClick: function() { handleToggleClosed(false); },
      style: {
        backgroundColor: "#0f172a",
        borderColor: "#334155",
        color: "#f8fafc",
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)"
      },
      className: "fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-bold transition hover:bg-slate-800 hover:border-orange-500",
      title: "คลิกเพื่อเปิดแถบเมนู Live Demo",
      children: [
        (0, h.jsx)("span", {
          className: "w-2 h-2 rounded-full bg-orange-500",
          "aria-hidden": "true"
        }),
        (0, h.jsx)("span", {
          children: "เปิดแถบเดโม"
        })
      ]
    });
  }

  // โหมดย่อ (Collapsed) - อยู่เหนือ Navbar สะอาด กระชับ แถวเดียว ไม่เกะกะ
  if (isCollapsed) {
    return (0, h.jsx)("aside", {
      ref: asideRef,
      className: "fixed top-0 left-0 right-0 z-50 text-white shadow-md font-sans",
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
            className: "flex items-center gap-1 shrink-0 overflow-x-auto",
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
                    className: "px-2 py-0.5 rounded text-[11px] transition hover:text-white shrink-0",
                    children: cat.label
                  });
                })
              }),
              (0, h.jsx)("button", {
                type: "button",
                onClick: function() { handleToggleCollapse(false); },
                className: "px-2.5 py-1 rounded bg-orange-600 hover:bg-orange-500 text-xs font-bold text-white transition shrink-0",
                children: "ขยายแถบเมนู ▾"
              }),
              (0, h.jsx)("button", {
                type: "button",
                onClick: function() { handleToggleClosed(true); },
                style: { backgroundColor: "#1e293b", color: "#94a3b8", border: "1px solid #334155" },
                className: "px-2 py-1 rounded text-xs font-semibold hover:bg-rose-900 hover:text-white hover:border-rose-700 transition shrink-0 ml-0.5",
                title: "ปิดแถบเดโมนี้",
                children: "✕ ปิด"
              })
            ]
          })
        ]
      })
    });
  }

  // โหมดขยาย (Expanded) - อยู่เหนือ Navbar พื้นหลังทึบ 100% ไม่ทับ Navbar และปิดได้
  return (0, h.jsxs)("aside", {
    ref: asideRef,
    className: "fixed top-0 left-0 right-0 z-50 text-white shadow-xl font-sans",
    style: { backgroundColor: "#0f172a", borderBottom: "1px solid #334155" },
    "aria-label": "แถบควบคุม Live Demo Showcase",
    children: [
      // แถวที่ 1: ตราสถานะ + ปุ่มเลือกหมวดหมู่ + ปุ่มย่อแถบ + ปุ่มปิด
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
              (0, h.jsx)("button", {
                type: "button",
                onClick: function() { handleToggleCollapse(true); },
                style: { backgroundColor: "#1e293b", border: "1px solid #475569", color: "#cbd5e1" },
                className: "px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md text-xs font-semibold transition hover:text-white hover:bg-slate-700 shrink-0 ml-0.5",
                children: "ย่อแถบ ▴"
              }),
              (0, h.jsx)("button", {
                type: "button",
                onClick: function() { handleToggleClosed(true); },
                style: { backgroundColor: "#1e293b", border: "1px solid #475569", color: "#cbd5e1" },
                className: "px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md text-xs font-semibold hover:bg-rose-900 hover:text-white hover:border-rose-700 transition shrink-0 ml-0.5",
                title: "ปิดแถบเดโมนี้",
                children: "✕ ปิด"
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
