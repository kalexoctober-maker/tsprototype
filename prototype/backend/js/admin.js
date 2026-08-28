window.ADM = window.ADM || {};

ADM.seed = {
  strategies: [
    { id: "s1", name: "集成高置信", userLine: "多模型一致才出单", algos: ["ensemble", "poisson", "elo", "value"], markets: ["1x2", "ah", "ou"], conf: 0.72, legs: "2-3", odd: "3-8", auto: false, on: true },
    { id: "s2", name: "泊松 / xG", userLine: "仅使用泊松期望模型推荐", algos: ["poisson"], markets: ["1x2", "ou"], conf: 0.64, legs: "2-4", odd: "3-10", auto: false, on: true },
    { id: "s3", name: "亚盘模型", userLine: "只推亚洲让球", algos: ["ah"], markets: ["ah"], conf: 0.60, legs: "2-3", odd: "2.8-6", auto: true, on: true },
    { id: "s4", name: "价值偏差", userLine: "找市场定价偏低的选项", algos: ["value"], markets: ["1x2", "ah"], conf: 0.55, legs: "2-2", odd: "6-15", auto: false, on: true },
    { id: "s5", name: "大小球模型", userLine: "只推大小球", algos: ["ou"], markets: ["ou"], conf: 0.66, legs: "2-4", odd: "3-8", auto: false, on: true }
  ],
  authors: [
    { id: "a1", name: "阿尔法狮", emoji: "🦁", color: "#1d4d36", bio: "少而准。只有多个模型同时看多，才会出方案。", tags: "稳健,少单", sid: "s1", x: 20, risk: "稳健", status: "on", w: 15, n: 20, follows: 12840 },
    { id: "a2", name: "泊松君", emoji: "π", color: "#2a3d5c", bio: "只信进球期望，用泊松分布映射盘口。", tags: "数据,泊松", sid: "s2", x: 15, risk: "平衡", status: "on", w: 11, n: 15, follows: 8620 },
    { id: "a3", name: "盘口鹰", emoji: "🦅", color: "#4a3518", bio: "亚洲盘是唯一语言，不碰胜平负。", tags: "亚盘", sid: "s3", x: 10, risk: "平衡", status: "on", w: 8, n: 10, follows: 6430 },
    { id: "a4", name: "冷门雷达", emoji: "📡", color: "#4a1f2a", bio: "找被市场低估的选项。", tags: "冷门,进取", sid: "s4", x: 20, risk: "进取", status: "on", w: 9, n: 20, follows: 3910 },
    { id: "a5", name: "夜鹰", emoji: "🌙", color: "#243044", bio: "只做大小球。", tags: "大小球", sid: "s5", x: 12, risk: "稳健", status: "draft", w: 9, n: 12, follows: 5102 }
  ],
  plans: [
    { id: "p1", aid: "a1", title: "欧冠精选 3串1", status: "live", odd: 7.38, follows: 328, gmv: 18640, legs: "马竞主胜 / 利物浦-1 / 国米米兰大2.5", source: "algo" },
    { id: "p2", aid: "a3", title: "亚盘夜场 2串1", status: "live", odd: 3.42, follows: 196, gmv: 9200, legs: "皇马-1 / 拜仁-0.75", source: "algo" },
    { id: "p3", aid: "a2", title: "泊松进球包 3串1", status: "review", odd: 6.31, follows: 0, gmv: 0, legs: "阿森纳大2.5 / 那不勒斯主胜 / 波尔图战小2.5", source: "algo" },
    { id: "p4", aid: "a4", title: "价值两场 2串1", status: "review", odd: 8.19, follows: 0, gmv: 0, legs: "赫塔菲客胜 / 狼队+0.25", source: "algo" },
    { id: "p5", aid: "a5", title: "夜场大小 3串1", status: "draft", odd: 5.04, follows: 0, gmv: 0, legs: "尼斯大2.5 / 旧敌大战大2.5 / 本菲卡小3.5", source: "algo" },
    { id: "p6", aid: "a1", title: "周末稳健两场", status: "win", odd: 2.79, follows: 540, gmv: 22100, legs: "巴萨主胜 / 纽卡-0.5", source: "algo" },
    { id: "p7", aid: "a2", title: "周中泊松", status: "lose", odd: 3.40, follows: 210, gmv: 7800, legs: "莱比锡大2.5 / 亚特兰大客胜", source: "algo" },
    { id: "p8", aid: "", uid: "u-share", userName: "夜场老王", title: "西甲 2串1", status: "live", odd: 3.27, follows: 64, gmv: 2180, legs: "皇马主胜 / 贝蒂斯大2.5", source: "ugc", combo: "2串1", titleEdited: false, skipAudit: true, auditNote: "免审·未改标题" },
    { id: "p9", aid: "", uid: "u-me", userName: "阿凯", title: "德甲夜场自拟标题", status: "review", odd: 3.81, follows: 0, gmv: 0, legs: "莱比锡主胜 / 多特大2.5", source: "ugc", combo: "2串1", titleEdited: true, skipAudit: false, auditNote: "改标题·待审" },
    { id: "p-rej", aid: "", uid: "u-me", userName: "阿凯", title: "意甲稳赚必中", status: "rejected", odd: 1.82, follows: 0, gmv: 0, legs: "拉齐奥主胜", source: "ugc", combo: "单关", rejectReason: "文案含「稳赚必中」，不予上架", titleEdited: true, skipAudit: false, auditNote: "改标题·已驳回" },
    { id: "p8-me", aid: "", uid: "u-me", userName: "阿凯", title: "英超 2串1", status: "live", odd: 3.24, follows: 21, gmv: 860, legs: "维拉大2.5 / 布莱顿-0.5", source: "ugc", combo: "2串1", titleEdited: false, skipAudit: true, auditNote: "免审·未改标题" }
  ],
  follows: [
    { id: "F10281", user: "u1882", plan: "p1", author: "阿尔法狮", stake: 100, odd: 7.38, status: "ing", time: "今天 19:12" },
    { id: "F10280", user: "u9031", plan: "p1", author: "阿尔法狮", stake: 50, odd: 7.38, status: "ing", time: "今天 18:58" },
    { id: "F10211", user: "u2201", plan: "p2", author: "盘口鹰", stake: 200, odd: 3.42, status: "ing", time: "今天 18:20" },
    { id: "F09810", user: "u1882", plan: "p6", author: "阿尔法狮", stake: 80, odd: 2.79, status: "win", time: "昨天 21:04" },
    { id: "F09702", user: "u5510", plan: "p7", author: "泊松君", stake: 50, odd: 3.40, status: "lose", time: "昨天 20:11" },
    { id: "F10300", user: "u4402", plan: "p8", author: "夜场老王", stake: 40, odd: 3.27, status: "ing", time: "今天 20:01" }
  ],
  settings: { x: 20, xmin: 5, xmax: 50, featured: 3, drift: 10, cutoff: 5, once: true, showAmt: true, shareN: 10, shareHit: 70, rewardPct: 2 }
};

ADM.ALGO_LABELS = {
  ensemble: "集成模型",
  poisson: "泊松 / xG",
  elo: "Elo 实力",
  ah: "亚盘模型",
  value: "价值偏差",
  ou: "大小球模型"
};

ADM.algosOf = function (s) {
  if (!s) return [];
  if (Array.isArray(s.algos) && s.algos.length) return s.algos;
  if (s.algo) return [s.algo];
  return [];
};

ADM.algoText = function (s) {
  return ADM.algosOf(s).map(function (k) { return ADM.ALGO_LABELS[k] || k; }).join("、") || "—";
};

ADM.UGC_KEY = "ts-copy-ugc";

ADM.loadUgc = function () {
  try {
    var raw = sessionStorage.getItem(ADM.UGC_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
};

ADM.saveUgc = function (data) {
  sessionStorage.setItem(ADM.UGC_KEY, JSON.stringify(data));
};

ADM.legsText = function (p) {
  if (!p) return "";
  if (Array.isArray(p.legs)) {
    return p.legs.map(function (l) {
      return (l.match || "") + " " + (l.pick || "");
    }).join(" / ");
  }
  return p.legs || "";
};

ADM.fromUgc = function (p) {
  return {
    id: p.id,
    aid: "",
    uid: p.userId,
    userName: p.userName,
    title: p.title,
    combo: p.combo || "",
    status: p.status === "open" ? "live" : p.status,
    odd: p.odd || 1,
    follows: p.follows || 0,
    gmv: p.gmv || 0,
    legs: ADM.legsText(p),
    source: "ugc",
    rejectReason: p.rejectReason || "",
    titleEdited: !!p.titleEdited,
    skipAudit: !!p.skipAudit,
    auditNote: p.auditNote || "",
    rewardPaid: p.rewardPaid == null ? null : p.rewardPaid
  };
};

ADM.writeUgcPlan = function (adminPlan) {
  var store = ADM.loadUgc();
  if (!store) {
    store = { schema: 2, settings: { n: 10, hitPct: 70, rewardPct: 2 }, account: "me", bets: [], plans: [], notifications: [] };
  }
  if (!store.plans) store.plans = [];
  var found = null;
  store.plans.forEach(function (p) { if (p.id === adminPlan.id) found = p; });
  if (found) {
    found.status = adminPlan.status;
    found.rejectReason = adminPlan.rejectReason || "";
    found.follows = adminPlan.follows;
    found.gmv = adminPlan.gmv;
    found.titleEdited = adminPlan.titleEdited;
    found.skipAudit = adminPlan.skipAudit;
    found.auditNote = adminPlan.auditNote || found.auditNote;
    found.rewardPaid = adminPlan.rewardPaid;
  } else {
    store.plans.unshift({
      id: adminPlan.id,
      source: "ugc",
      userId: adminPlan.uid,
      userName: adminPlan.userName,
      title: adminPlan.title,
      combo: adminPlan.combo || "",
      status: adminPlan.status,
      odd: adminPlan.odd,
      follows: adminPlan.follows,
      gmv: adminPlan.gmv,
      cutoff: "今晚 02:00 截止",
      legs: [],
      rejectReason: adminPlan.rejectReason || "",
      titleEdited: !!adminPlan.titleEdited,
      skipAudit: !!adminPlan.skipAudit,
      auditNote: adminPlan.auditNote || "",
      rewardPaid: adminPlan.rewardPaid
    });
  }
  ADM.saveUgc(store);
};

ADM.nowLabel = function () {
  var d = new Date();
  var p = function (n) { return (n < 10 ? "0" : "") + n; };
  return "今天 " + p(d.getHours()) + ":" + p(d.getMinutes());
};

ADM.pushNotice = function (notice) {
  var store = ADM.loadUgc();
  if (!store) return;
  store.notifications = store.notifications || [];
  notice.id = notice.id || ("n" + Date.now());
  notice.time = notice.time || ADM.nowLabel();
  notice.unread = notice.unread !== false;
  notice.count = notice.count || 1;
  store.notifications.unshift(notice);
  ADM.saveUgc(store);
};

ADM.rewardPct = function () {
  var n = ADM.db && ADM.db.settings ? Number(ADM.db.settings.rewardPct) : 2;
  return n >= 0 ? n : 2;
};

ADM.syncUgc = function () {
  var store = ADM.loadUgc();
  if (!store || !store.plans) return;
  if (store.settings) {
    if (store.settings.n != null) ADM.db.settings.shareN = store.settings.n;
    if (store.settings.hitPct != null) ADM.db.settings.shareHit = store.settings.hitPct;
    if (store.settings.rewardPct != null) ADM.db.settings.rewardPct = store.settings.rewardPct;
  }
  store.plans.forEach(function (up) {
    var mapped = ADM.fromUgc(up);
    var existing = ADM.db.plans.filter(function (p) { return p.id === up.id; })[0];
    if (existing) {
      existing.status = mapped.status;
      existing.rejectReason = mapped.rejectReason;
      existing.userName = mapped.userName;
      existing.uid = mapped.uid;
      existing.source = "ugc";
      existing.legs = mapped.legs;
      existing.odd = mapped.odd;
      existing.follows = mapped.follows;
      existing.gmv = mapped.gmv;
      existing.titleEdited = mapped.titleEdited;
      existing.skipAudit = mapped.skipAudit;
      existing.auditNote = mapped.auditNote;
      existing.rewardPaid = mapped.rewardPaid;
    } else {
      ADM.db.plans.unshift(mapped);
    }
  });
};

ADM.load = function () {
  try {
    var raw = sessionStorage.getItem("ts-copy-admin");
    ADM.db = raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(ADM.seed));
  } catch (e) {
    ADM.db = JSON.parse(JSON.stringify(ADM.seed));
  }
  ADM.db.strategies.forEach(function (s) {
    s.algos = ADM.algosOf(s);
  });
  if (!ADM.db.settings) ADM.db.settings = {};
  if (ADM.db.settings.shareN == null) ADM.db.settings.shareN = 10;
  if (ADM.db.settings.shareHit == null) ADM.db.settings.shareHit = 70;
  if (ADM.db.settings.rewardPct == null) ADM.db.settings.rewardPct = 2;
  ADM.db.plans.forEach(function (p) {
    if (!p.source) p.source = "algo";
  });
  ADM.seed.plans.forEach(function (sp) {
    if (sp.source === "ugc" && !ADM.db.plans.some(function (p) { return p.id === sp.id; })) {
      ADM.db.plans.push(JSON.parse(JSON.stringify(sp)));
    }
  });
  ADM.db.plans.forEach(function (p) {
    if (p.source !== "ugc") return;
    var sp = ADM.seed.plans.filter(function (x) { return x.id === p.id; })[0];
    if (!sp) return;
    if (p.titleEdited == null) p.titleEdited = !!sp.titleEdited;
    if (p.skipAudit == null) p.skipAudit = !!sp.skipAudit;
    if (!p.auditNote) p.auditNote = sp.auditNote || "";
    if (p.id === "p8-me" && p.title && p.title.indexOf("已上广场") >= 0) {
      p.title = sp.title;
      p.legs = sp.legs;
    }
    if (p.id === "p9" && p.title === "德甲两场") p.title = sp.title;
  });
  ADM.syncUgc();
};

ADM.save = function () {
  sessionStorage.setItem("ts-copy-admin", JSON.stringify(ADM.db));
};

ADM.reset = function () {
  sessionStorage.removeItem("ts-copy-admin");
  sessionStorage.removeItem(ADM.UGC_KEY);
  ADM.load();
  location.reload();
};

ADM.esc = function (s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

ADM.author = function (id) {
  return ADM.db.authors.filter(function (a) { return a.id === id; })[0];
};

ADM.strategy = function (id) {
  return ADM.db.strategies.filter(function (s) { return s.id === id; })[0];
};

ADM.hit = function (a) {
  if (!a.n) return "新锐";
  return Math.round(a.w / a.n * 100) + "% · " + a.w + "/" + a.n;
};

ADM.statusLabel = {
  live: '<span class="badge on">招募中</span>',
  review: '<span class="badge wait">待审核</span>',
  draft: '<span class="badge off">候选</span>',
  win: '<span class="badge win">全中</span>',
  lose: '<span class="badge lose">未中</span>',
  void: '<span class="badge">走水</span>',
  rejected: '<span class="badge off">已驳回</span>',
  on: '<span class="badge on">上架</span>',
  off: '<span class="badge off">下架</span>',
  ing: '<span class="badge ing">进行中</span>'
};

ADM.sidebar = function (active) {
  var items = [
    ["index.html", "概览"],
    ["authors.html", "作者"],
    ["strategies.html", "策略"],
    ["plans.html", "方案"],
    ["follows.html", "跟单订单"],
    ["settings.html", "配置"]
  ];
  return (
    '<aside class="side"><div class="brand"><div class="mark">TS</div><div><b>跟单运营台</b><span>内部 · 非 C 端</span></div></div>' +
    '<nav class="nav"><small>运营</small>' +
    items.map(function (it) {
      return '<a class="' + (it[0] === active ? "on" : "") + '" href="' + it[0] + '">' + it[1] + "</a>";
    }).join("") +
    '<small>工具</small><a href="#" onclick="ADM.reset();return false;">重置演示数据</a>' +
    '<a href="../frontend/index.html">打开用户端</a></nav></aside>'
  );
};

ADM.top = function (title) {
  return '<div class="top"><h1>' + title + '</h1><div class="who">运营演示账号 · 数据存在本机 session</div></div>';
};

ADM.openDrawer = function (html) {
  var mask = document.getElementById("drawer");
  mask.innerHTML = '<div class="drawer">' + html + "</div>";
  mask.classList.add("show");
};

document.addEventListener("DOMContentLoaded", function () {
  ADM.load();
  var mount = document.getElementById("app");
  if (mount) {
    mount.insertAdjacentHTML("afterbegin", ADM.sidebar(document.body.getAttribute("data-page")));
    var main = mount.querySelector(".main");
    if (main) main.insertAdjacentHTML("afterbegin", ADM.top(document.body.getAttribute("data-title") || ""));
  }
  var drawer = document.getElementById("drawer");
  if (drawer) drawer.addEventListener("click", function (e) {
    if (e.target === drawer) drawer.classList.remove("show");
  });
});
