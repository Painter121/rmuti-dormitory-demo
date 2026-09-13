import { a as e } from "./rolldown-runtime-CNC7AqOf.js";
import { d as t } from "./vendor-dnd-CCxL00r4.js";
import { d as n, f as r } from "./vendor-react-BijskWJh.js";
import { a as i } from "./vendor-framer-DXE0nwZD.js";
import { h as d, m as f, p } from "./index-BrdXBQjQ.js";

var m = e(t(), 1);
var h = i();

var ICONS = {
  user: [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "12", cy: "7", r: "4" }]
  ],
  wrench: [
    ["path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" }]
  ],
  shield: [
    ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }],
    ["path", { d: "m9 12 2 2 4-4" }]
  ],
  globe: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
    ["path", { d: "M2 12h20" }]
  ],
  dashboard: [
    ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }],
    ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]
  ],
  edit: [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
    ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" }]
  ],
  layers: [
    ["path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }],
    ["path", { d: "m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5" }],
    ["path", { d: "m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5" }]
  ],
  fileText: [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M10 9H8" }],
    ["path", { d: "M16 13H8" }],
    ["path", { d: "M16 17H8" }]
  ],
  calendar: [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }]
  ],
  clipboard: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M12 11h4" }],
    ["path", { d: "M12 16h4" }],
    ["path", { d: "M8 11h.01" }],
    ["path", { d: "M8 16h.01" }]
  ],
  package: [
    ["path", { d: "m7.5 4.27 9 5.15" }],
    ["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }],
    ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
    ["path", { d: "M12 22V12" }]
  ],
  building: [
    ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }],
    ["path", { d: "M6 12H4a2 2 0 0 0-2 2v8h4" }],
    ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11h-4" }],
    ["path", { d: "M10 6h4" }],
    ["path", { d: "M10 10h4" }],
    ["path", { d: "M10 14h4" }],
    ["path", { d: "M10 18h4" }]
  ],
  users: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "9", cy: "7", r: "4" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }]
  ],
  bell: [
    ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }]
  ],
  settings: [
    ["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ],
  home: [
    ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }],
    ["polyline", { points: "9 22 9 12 15 12 15 22" }]
  ],
  search: [
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["path", { d: "m21 21-4.3-4.3" }]
  ],
  help: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["path", { d: "M12 17h.01" }]
  ],
  sparkles: [
    ["path", { d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" }]
  ],
  chevronUp: [
    ["path", { d: "m18 15-6-6-6 6" }]
  ],
  chevronDown: [
    ["path", { d: "m6 9 6 6 6-6" }]
  ]
};

function renderIcon(name, cls) {
  var p = ICONS[name] || ICONS.dashboard;
  var className = cls || "h-3.5 w-3.5";
  return (0, h.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    "aria-hidden": "true",
    children: p.map(function(item, idx) {
      return (0, h.jsx)(item[0], Object.assign({}, item[1], { key: idx }));
    })
  });
}

var CATEGORIES = [
  {
    id: d.STUDENT,
    label: "นักศึกษา",
    subLabel: "Student",
    role: d.STUDENT,
    homePath: "/student",
    icon: "user",
    activeBg: "bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400/40 font-bold",
    inactiveBg: "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/60",
    accentText: "text-emerald-400",
    screens: [
      { path: "/student", name: "Dashboard นักศึกษา", icon: "dashboard", desc: "สรุปสถานะห้องพักและงานซ่อม" },
      { path: "/student/repair", name: "แบบฟอร์มแจ้งซ่อม", icon: "edit", desc: "แจ้งซ่อมห้องพักพร้อมเลือกหมวด" },
      { path: "/student/status", name: "ติดตามสถานะ & ไทม์ไลน์", icon: "layers", desc: "ความคืบหน้างานซ่อม" },
      { path: "/student/history", name: "ประวัติการแจ้งซ่อม", icon: "fileText", desc: "งานซ่อมที่ปิดเรียบร้อย" },
      { path: "/student/appointments", name: "การนัดหมายช่าง", icon: "calendar", desc: "ยืนยันหรือเลื่อนเวลานัด" }
    ]
  },
  {
    id: d.TECHNICIAN,
    label: "ช่างซ่อม",
    subLabel: "Technician",
    role: d.TECHNICIAN,
    homePath: "/tech/jobs",
    icon: "wrench",
    activeBg: "bg-amber-600 text-white shadow-sm ring-1 ring-amber-400/40 font-bold",
    inactiveBg: "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/60",
    accentText: "text-amber-400",
    screens: [
      { path: "/tech/jobs", name: "รายการงานซ่อม (Jobs)", icon: "clipboard", desc: "งานที่รับมอบหมาย & งานเปิดรับ" },
      { path: "/tech/calendar", name: "ปฏิทินงานช่าง", icon: "calendar", desc: "ตารางงานประจำวันและสัปดาห์" },
      { path: "/tech/materials", name: "เบิก-ใช้วัสดุอะไหล่", icon: "package", desc: "รายการอะไหล่ในสต็อก" },
      { path: "/tech/reports", name: "รายงานผลงานช่าง", icon: "fileText", desc: "สถิติและประสิทธิภาพการซ่อม" }
    ]
  },
  {
    id: d.ADMIN,
    label: "ผู้ดูแลระบบ",
    subLabel: "Admin",
    role: d.ADMIN,
    homePath: "/admin/dashboard",
    icon: "shield",
    activeBg: "bg-sky-600 text-white shadow-sm ring-1 ring-sky-400/40 font-bold",
    inactiveBg: "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/60",
    accentText: "text-sky-400",
    screens: [
      { path: "/admin/dashboard", name: "Dashboard & KPI", icon: "dashboard", desc: "สถิติภาพรวม กราฟ SLA" },
      { path: "/admin/repairs", name: "จัดการงานซ่อมทั้งหมด", icon: "clipboard", desc: "คิวงานและจ่ายงานช่าง" },
      { path: "/admin/rooms", name: "ผังห้องพักและอาคาร", icon: "building", desc: "ข้อมูลห้องและสถานะ" },
      { path: "/admin/students/rooms", name: "จัดการห้องพักนักศึกษา", icon: "users", desc: "ข้อมูลผู้พักอาศัย" },
      { path: "/admin/students", name: "ข้อมูลนักศึกษา", icon: "users", desc: "รายชื่อนักศึกษาในหอ" },
      { path: "/admin/personnel", name: "ข้อมูลบุคลากร & ช่าง", icon: "users", desc: "เจ้าหน้าที่และช่าง" },
      { path: "/admin/equipments", name: "คลังวัสดุและอุปกรณ์", icon: "package", desc: "สต็อกอะไหล่" },
      { path: "/admin/announcements", name: "จัดการข่าวสาร", icon: "bell", desc: "ประกาศประชาสัมพันธ์" },
      { path: "/admin/master-data", name: "Master Data & ตั้งค่า", icon: "settings", desc: "หมวดหมู่งานซ่อมและ SLA" }
    ]
  },
  {
    id: "PUBLIC",
    label: "หน้าสาธารณะ",
    subLabel: "Public",
    role: d.STUDENT,
    homePath: "/",
    icon: "globe",
    activeBg: "bg-orange-600 text-white shadow-sm ring-1 ring-orange-400/40 font-bold",
    inactiveBg: "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/60",
    accentText: "text-orange-400",
    screens: [
      { path: "/", name: "Landing หน้าแรก", icon: "home", desc: "หน้าหลักประชาสัมพันธ์" },
      { path: "/publicRepair", name: "ติดตามสถานะสาธารณะ", icon: "search", desc: "ตรวจสถานะด้วยรหัสตั๋ว" },
      { path: "/publicRepair/new", name: "แจ้งซ่อมพื้นที่ส่วนกลาง", icon: "edit", desc: "แจ้งซ่อมสำหรับบุคคลทั่วไป" },
      { path: "/how-it-works", name: "คู่มือการใช้งาน", icon: "help", desc: "คำแนะนำการใช้งานระบบ" },
      { path: "/announcements", name: "ข่าวประชาสัมพันธ์", icon: "bell", desc: "ประกาศของหอพัก" }
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

  if (isCollapsed) {
    return (0, h.jsxs)(h.Fragment, {
      children: [
        (0, h.jsx)("aside", {
          className: "fixed top-0 left-0 right-0 z-[99999] border-b border-orange-500/30 bg-[#061423]/95 text-white shadow-xl backdrop-blur-md transition-all font-sans",
          "aria-label": "แถบควบคุม Live Demo (โหมดย่อ)",
          children: (0, h.jsxs)("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-3 py-1.5 text-xs sm:px-4 gap-2",
            children: [
              (0, h.jsxs)("div", {
                className: "flex items-center gap-2 min-w-0",
                children: [
                  (0, h.jsxs)("div", {
                    className: "flex items-center gap-1.5 rounded bg-orange-600/20 border border-orange-500/40 px-2 py-0.5 text-orange-400 font-extrabold text-[11px] tracking-wide shrink-0",
                    children: [
                      renderIcon("sparkles", "h-3.5 w-3.5 text-orange-400"),
                      (0, h.jsx)("span", { children: "LIVE DEMO" })
                    ]
                  }),
                  (0, h.jsxs)("div", {
                    className: "flex items-center gap-1.5 text-xs truncate",
                    children: [
                      (0, h.jsx)("span", {
                        className: "font-bold " + currentCat.accentText,
                        children: currentCat.label
                      }),
                      (0, h.jsx)("span", { className: "text-slate-500", children: "/" }),
                      (0, h.jsx)("span", {
                        className: "text-slate-200 font-medium truncate",
                        children: currentScreen ? currentScreen.name : "หน้าหลัก"
                      })
                    ]
                  })
                ]
              }),
              (0, h.jsxs)("div", {
                className: "flex items-center gap-1 sm:gap-1.5 shrink-0",
                children: [
                  (0, h.jsx)("div", {
                    className: "hidden sm:flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60",
                    children: CATEGORIES.map(function(cat) {
                      var isActive = currentCat.id === cat.id;
                      return (0, h.jsxs)("button", {
                        key: cat.id,
                        type: "button",
                        onClick: function() { handleCategorySelect(cat); },
                        className: "flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold transition " + (
                          isActive ? cat.activeBg : "text-slate-300 hover:text-white hover:bg-slate-700/60"
                        ),
                        title: "สลับไปยัง " + cat.label,
                        children: [
                          renderIcon(cat.icon, "h-3 w-3 shrink-0"),
                          (0, h.jsx)("span", { children: cat.label })
                        ]
                      });
                    })
                  }),
                  (0, h.jsxs)("button", {
                    type: "button",
                    onClick: function() { handleToggleCollapse(false); },
                    className: "inline-flex items-center gap-1 rounded-lg bg-orange-600 hover:bg-orange-500 px-2.5 py-1 text-xs font-bold text-white shadow transition",
                    title: "ขยายแถบเมนูนำทาง",
                    children: [
                      (0, h.jsx)("span", { children: "ขยายแถบ" }),
                      renderIcon("chevronDown", "h-3.5 w-3.5")
                    ]
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

  return (0, h.jsxs)(h.Fragment, {
    children: [
      (0, h.jsxs)("aside", {
        className: "fixed top-0 left-0 right-0 z-[99999] border-b border-orange-500/30 bg-[#061423]/98 text-white shadow-2xl backdrop-blur-md transition-all font-sans",
        "aria-label": "แถบควบคุม Live Demo Showcase",
        children: [
          (0, h.jsxs)("div", {
            className: "mx-auto flex max-w-7xl items-center justify-between px-3 py-1.5 text-xs sm:px-4 gap-2",
            children: [
              (0, h.jsxs)("div", {
                className: "flex items-center gap-2 min-w-0",
                children: [
                  (0, h.jsxs)("div", {
                    className: "flex items-center gap-1.5 rounded-md bg-orange-600/20 border border-orange-500/50 px-2 py-0.5 text-orange-400 font-extrabold tracking-wide shrink-0",
                    children: [
                      renderIcon("sparkles", "h-3.5 w-3.5 text-orange-400 animate-pulse"),
                      (0, h.jsx)("span", { className: "font-heading text-xs", children: "LIVE DEMO" })
                    ]
                  }),
                  (0, h.jsx)("span", {
                    className: "hidden lg:inline text-slate-400 font-medium truncate text-[11px]",
                    children: "จำลอง 3 บทบาทพร้อมข้อมูลเสมือนจริง 100% (เลือกหมวดด้านล่าง)"
                  })
                ]
              }),
              (0, h.jsx)("div", {
                className: "flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5",
                children: CATEGORIES.map(function(cat) {
                  var isActive = currentCat.id === cat.id;
                  return (0, h.jsxs)("button", {
                    key: cat.id,
                    type: "button",
                    onClick: function() { handleCategorySelect(cat); },
                    className: "flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-1 text-xs font-bold transition whitespace-nowrap " + (
                      isActive ? cat.activeBg : cat.inactiveBg
                    ),
                    title: "สลับไปยังหมวด " + cat.label + " (" + cat.subLabel + ")",
                    children: [
                      renderIcon(cat.icon, "h-3.5 w-3.5 shrink-0"),
                      (0, h.jsx)("span", { children: cat.label }),
                      (0, h.jsx)("span", {
                        className: "hidden sm:inline text-[10px] opacity-75 font-normal",
                        children: "(" + cat.subLabel + ")"
                      })
                    ]
                  });
                })
              }),
              (0, h.jsxs)("button", {
                type: "button",
                onClick: function() { handleToggleCollapse(true); },
                className: "inline-flex items-center gap-1 rounded-md bg-slate-800 hover:bg-slate-700 px-2 py-1 text-[11px] font-semibold text-slate-300 hover:text-white border border-slate-700 transition shrink-0",
                title: "ย่อแถบเมนูนำทาง",
                children: [
                  renderIcon("chevronUp", "h-3.5 w-3.5"),
                  (0, h.jsx)("span", { className: "hidden sm:inline", children: "ย่อแถบ" })
                ]
              })
            ]
          }),
          (0, h.jsx)("div", {
            className: "border-t border-slate-800/80 bg-[#040d17]/95 px-3 py-1.5 sm:px-4",
            children: (0, h.jsxs)("div", {
              className: "mx-auto flex max-w-7xl items-center justify-between gap-2",
              children: [
                (0, h.jsxs)("div", {
                  className: "flex items-center gap-1.5 text-[11px] text-slate-400 shrink-0 font-medium",
                  children: [
                    (0, h.jsx)("span", { className: "hidden md:inline", children: "หน้าจอ:" })
                  ]
                }),
                (0, h.jsx)("div", {
                  className: "flex flex-1 flex-wrap items-center gap-1.5 overflow-x-auto py-0.5",
                  children: currentCat.screens.map(function(screen) {
                    var isCurrent = loc.pathname === screen.path;
                    return (0, h.jsxs)("button", {
                      key: screen.path,
                      type: "button",
                      onClick: function() { handleScreenSelect(currentCat, screen.path); },
                      title: screen.desc,
                      className: "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition whitespace-nowrap " + (
                        isCurrent
                          ? "bg-white text-slate-900 shadow font-bold ring-2 ring-orange-500"
                          : "bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700/60"
                      ),
                      children: [
                        renderIcon(screen.icon, "h-3 w-3 shrink-0 " + (isCurrent ? "text-slate-900" : "text-slate-400")),
                        (0, h.jsx)("span", { children: screen.name }),
                        isCurrent && (0, h.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" })
                      ]
                    });
                  })
                })
              ]
            })
          })
        ]
      }),
      (0, h.jsx)("div", {
        className: "h-[74px] sm:h-[68px] w-full shrink-0 pointer-events-none",
        "aria-hidden": "true"
      })
    ]
  });
}

export { DemoShowcaseBar as default };
