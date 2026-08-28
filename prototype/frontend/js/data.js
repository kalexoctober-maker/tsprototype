window.TS = window.TS || {};

TS.strategies = {
  s1: { id: "s1", name: "集成高置信", userLine: "多模型一致才出单", algo: "ensemble" },
  s2: { id: "s2", name: "泊松 / xG", userLine: "仅使用泊松期望模型推荐", algo: "poisson" },
  s3: { id: "s3", name: "亚盘模型", userLine: "只推亚洲让球", algo: "ah" },
  s4: { id: "s4", name: "价值偏差", userLine: "找市场定价偏低的选项", algo: "value" },
  s5: { id: "s5", name: "大小球模型", userLine: "只推大小球", algo: "ou" }
};

TS.authors = {
  a1: {
    id: "a1", name: "阿尔法狮", emoji: "🦁", color: "#1d4d36",
    bio: "少而准。只有多个模型同时看多，才会出方案。适合不想折腾盘口的人。",
    tags: ["稳健", "少单"], strategyId: "s1", x: 20, risk: "稳健",
    hits: ["w","w","l","w","w","w","w","l","w","w","w","l","w","w","w","l","w","w","l","w"],
    followers: 12840
  },
  a2: {
    id: "a2", name: "泊松君", emoji: "π", color: "#2a3d5c",
    bio: "只信进球期望。不看名气，不看热度，用泊松分布算进球再映射盘口。",
    tags: ["数据", "泊松"], strategyId: "s2", x: 15, risk: "平衡",
    hits: ["w","w","l","w","w","l","w","w","w","l","w","l","w","w","w"],
    followers: 8620
  },
  a3: {
    id: "a3", name: "盘口鹰", emoji: "🦅", color: "#4a3518",
    bio: "亚洲盘是我唯一的语言。让球、半球、半球/一，不碰胜平负。",
    tags: ["亚盘"], strategyId: "s3", x: 10, risk: "平衡",
    hits: ["w","w","w","l","w","w","w","w","l","w"],
    followers: 6430
  },
  a4: {
    id: "a4", name: "冷门雷达", emoji: "📡", color: "#4a1f2a",
    bio: "专找被市场低估的选项。命中率不会很高，但中一次能盖过几次打空。",
    tags: ["冷门", "进取"], strategyId: "s4", x: 20, risk: "进取",
    hits: ["l","l","w","l","l","w","l","w","l","l","l","w","l","l","w","l","w","l","l","w"],
    followers: 3910
  },
  a5: {
    id: "a5", name: "夜鹰", emoji: "🌙", color: "#243044",
    bio: "夜间联赛和大小球。进球节奏比谁赢更稳定，所以我只做大小。",
    tags: ["大小球"], strategyId: "s5", x: 12, risk: "稳健",
    hits: ["w","w","w","l","w","w","l","w","w","w","l","w"],
    followers: 5102
  }
};

TS.plans = {
  p1: {
    id: "p1", authorId: "a1", title: "欧冠精选", combo: "3串1",
    status: "open", follows: 328, amount: 18640, featured: true,
    cutoff: "今晚 03:00 截止",
    legs: [
      { match: "马竞 vs 勒沃库森", league: "欧冠", time: "03:00", market: "胜平负", pick: "主胜", odd: 2.10 },
      { match: "曼联 vs 利物浦", league: "英超", time: "03:45", market: "让球", pick: "利物浦 -1", odd: 1.85 },
      { match: "国米 vs 米兰", league: "意甲", time: "03:45", market: "大小球", pick: "大 2.5", odd: 1.90 }
    ]
  },
  p2: {
    id: "p2", authorId: "a3", title: "亚盘夜场", combo: "2串1",
    status: "open", follows: 196, amount: 9200, featured: true,
    cutoff: "今晚 02:30 截止",
    legs: [
      { match: "皇马 vs 毕尔巴鄂", league: "西甲", time: "02:30", market: "让球", pick: "皇马 -1", odd: 1.78 },
      { match: "拜仁 vs 多特", league: "德甲", time: "02:30", market: "让球", pick: "拜仁 -0.75", odd: 1.92 }
    ]
  },
  p3: {
    id: "p3", authorId: "a2", title: "泊松进球包", combo: "3串1",
    status: "open", follows: 141, amount: 6540, featured: true,
    cutoff: "今晚 01:00 截止",
    legs: [
      { match: "阿森纳 vs 维拉", league: "英超", time: "01:00", market: "大小球", pick: "大 2.5", odd: 1.72 },
      { match: "那不勒斯 vs 罗马", league: "意甲", time: "02:45", market: "胜平负", pick: "主胜", odd: 1.95 },
      { match: "里斯本竞技 vs 波尔图", league: "葡超", time: "03:15", market: "大小球", pick: "小 2.5", odd: 1.88 }
    ]
  },
  p4: {
    id: "p4", authorId: "a4", title: "价值两场", combo: "2串1",
    status: "open", follows: 87, amount: 4100, featured: false,
    cutoff: "今晚 03:00 截止",
    legs: [
      { match: "塞维利亚 vs 赫塔菲", league: "西甲", time: "03:00", market: "胜平负", pick: "客胜", odd: 4.20 },
      { match: "狼队 vs 布伦特福德", league: "英超", time: "03:00", market: "让球", pick: "狼队 +0.25", odd: 1.95 }
    ]
  },
  p5: {
    id: "p5", authorId: "a5", title: "夜场大小", combo: "3串1",
    status: "open", follows: 112, amount: 5380, featured: false,
    cutoff: "今晚 02:00 截止",
    legs: [
      { match: "尼斯 vs 马赛", league: "法甲", time: "02:00", market: "大小球", pick: "大 2.5", odd: 1.83 },
      { match: "凯尔特人 vs 流浪者", league: "苏超", time: "02:45", market: "大小球", pick: "大 2.5", odd: 1.70 },
      { match: "本菲卡 vs 布拉加", league: "葡超", time: "03:15", market: "大小球", pick: "小 3.5", odd: 1.62 }
    ]
  },
  p6: {
    id: "p6", authorId: "a1", title: "周末稳健两场", combo: "2串1",
    status: "settled", result: "win", follows: 540, amount: 22100, featured: false,
    cutoff: "已结算",
    legs: [
      { match: "巴萨 vs 马洛卡", league: "西甲", time: "已完", market: "胜平负", pick: "主胜", odd: 1.55 },
      { match: "纽卡 vs 伯恩茅斯", league: "英超", time: "已完", market: "让球", pick: "纽卡 -0.5", odd: 1.80 }
    ]
  },
  p7: {
    id: "p7", authorId: "a2", title: "周中泊松", combo: "2串1",
    status: "settled", result: "lose", follows: 210, amount: 7800, featured: false,
    cutoff: "已结算",
    legs: [
      { match: "莱比锡 vs 霍芬海姆", league: "德甲", time: "已完", market: "大小球", pick: "大 2.5", odd: 1.66 },
      { match: "拉齐奥 vs 亚特兰大", league: "意甲", time: "已完", market: "胜平负", pick: "客胜", odd: 2.05 }
    ]
  }
};

TS.ugcUsers = {
  "u-me": {
    id: "u-me", name: "阿凯", emoji: "凯", color: "#2d4a32",
    bio: "自己买的单，觉得盘口还在才会晒。不是专家。",
    hits: ["w", "w", "l", "w", "w", "w", "w", "l", "w", "w"]
  },
  "u-low": {
    id: "u-low", name: "路人乙", emoji: "乙", color: "#4a3030",
    bio: "演示账号：近 10 场未达 70%，用来看禁用态。",
    hits: ["w", "l", "w", "l", "l", "w", "l", "w", "l", "w"]
  },
  "u-share": {
    id: "u-share", name: "夜场老王", emoji: "王", color: "#4a3518",
    bio: "爱买西甲夜场。晒单是我自己的注，不是平台写手。",
    hits: ["w", "w", "w", "l", "w", "w", "l", "w", "l", "w"]
  }
};

TS.UGC_KEY = "ts-copy-ugc";
TS.UGC_SCHEMA = 2;
TS.BAD_TITLE = /必中|内幕|稳赚|跟庄|必赢|内部消息/;

TS.ugcSeed = function () {
  return {
    schema: TS.UGC_SCHEMA,
    settings: { n: 10, hitPct: 70, rewardPct: 2 },
    account: "me",
    notifications: [
      {
        id: "n-seed", userId: "u-me", type: "follow", planId: "p8-me",
        planTitle: "英超 2串1", title: "有人跟了你的英超 2串1",
        body: "当前 21 人已跟，累计本金 860。点开可看人数、总额和预期奖励。",
        time: "今天 20:06", unread: true, count: 1, seed: true
      },
      {
        id: "n-rej", userId: "u-me", type: "reject", planId: "p-rej",
        planTitle: "意甲单关", title: "改标题未通过",
        body: "意甲单关：文案含「稳赚必中」，不予上架",
        time: "昨天 21:40", unread: false, count: 1
      }
    ],
    bets: [
      {
        id: "b1", status: "upcoming", combo: "3串1", title: "欧冠夜场",
        share: null, sharePlanId: "", rejectReason: "",
        legs: [
          { match: "里斯本竞技 vs 布鲁日", league: "欧冠", time: "03:00", market: "胜平负", pick: "主胜", odd: 1.68 },
          { match: "那不勒斯 vs 热那亚", league: "意甲", time: "02:45", market: "让球", pick: "那不勒斯 -1", odd: 1.88 },
          { match: "里尔 vs 尼斯", league: "法甲", time: "03:00", market: "大小球", pick: "大 2.5", odd: 1.80 }
        ]
      },
      {
        id: "b2", status: "upcoming", combo: "单关", title: "英超单场",
        share: null, sharePlanId: "", rejectReason: "",
        legs: [
          { match: "布莱顿 vs 水晶宫", league: "英超", time: "00:30", market: "让球", pick: "布莱顿 -0.5", odd: 1.95 }
        ]
      },
      {
        id: "b-p9", status: "upcoming", combo: "2串1", title: "德甲两场",
        share: "pending", sharePlanId: "p9", rejectReason: "", titleEdited: true,
        legs: [
          { match: "莱比锡 vs 奥格斯堡", league: "德甲", time: "01:30", market: "胜平负", pick: "主胜", odd: 1.70 },
          { match: "多特 vs 波鸿", league: "德甲", time: "01:30", market: "大小球", pick: "大 2.5", odd: 2.24 }
        ]
      },
      {
        id: "b-rej", status: "upcoming", combo: "单关", title: "意甲单关",
        share: "rejected", sharePlanId: "p-rej", rejectReason: "文案含「稳赚必中」，不予上架",
        legs: [
          { match: "拉齐奥 vs 都灵", league: "意甲", time: "02:45", market: "胜平负", pick: "主胜", odd: 1.82 }
        ]
      },
      {
        id: "b-ok", status: "upcoming", combo: "2串1", title: "英超 2串1",
        share: "approved", sharePlanId: "p8-me", rejectReason: "", titleEdited: false,
        legs: [
          { match: "维拉 vs 狼队", league: "英超", time: "03:00", market: "大小球", pick: "大 2.5", odd: 1.74 },
          { match: "布莱顿 vs 水晶宫", league: "英超", time: "00:30", market: "让球", pick: "布莱顿 -0.5", odd: 1.86 }
        ]
      },
      {
        id: "b3", status: "live", combo: "2串1", title: "进行中串关",
        share: null, sharePlanId: "", rejectReason: "",
        legs: [
          { match: "马竞 vs 勒沃库森", league: "欧冠", time: "LIVE 41'", market: "胜平负", pick: "主胜", odd: 2.10 },
          { match: "本菲卡 vs 波尔图", league: "葡超", time: "03:15", market: "大小球", pick: "小 2.5", odd: 1.88 }
        ]
      },
      {
        id: "b4", status: "settled", result: "win", combo: "2串1", title: "上周西甲",
        share: null, sharePlanId: "", rejectReason: "",
        legs: [
          { match: "巴萨 vs 马洛卡", league: "西甲", time: "已完", market: "胜平负", pick: "主胜", odd: 1.55 },
          { match: "皇社 vs 阿拉维斯", league: "西甲", time: "已完", market: "大小球", pick: "小 2.5", odd: 1.78 }
        ]
      },
      {
        id: "b5", status: "settled", result: "lose", combo: "3串1", title: "周中冷门",
        share: null, sharePlanId: "", rejectReason: "",
        legs: [
          { match: "莱比锡 vs 霍芬海姆", league: "德甲", time: "已完", market: "大小球", pick: "大 2.5", odd: 1.66 },
          { match: "拉齐奥 vs 亚特兰大", league: "意甲", time: "已完", market: "胜平负", pick: "客胜", odd: 2.05 },
          { match: "狼队 vs 布伦特福德", league: "英超", time: "已完", market: "让球", pick: "狼队 +0.25", odd: 1.95 }
        ]
      },
      {
        id: "b6", status: "cancelled", combo: "单关", title: "腰斩取消",
        share: null, sharePlanId: "", rejectReason: "",
        legs: [
          { match: "尼斯 vs 马赛", league: "法甲", time: "已取消", market: "大小球", pick: "大 2.5", odd: 1.83 }
        ]
      }
    ],
    plans: [
      {
        id: "p8", source: "ugc", userId: "u-share", userName: "夜场老王",
        title: "西甲夜场晒单", combo: "2串1", status: "live",
        follows: 64, gmv: 2180, cutoff: "今晚 02:00 截止", odd: 3.27,
        rejectReason: "", titleEdited: false, skipAudit: true, auditNote: "免审·未改标题",
        rewardPaid: null,
        legs: [
          { match: "皇马 vs 赫塔菲", league: "西甲", time: "02:00", market: "胜平负", pick: "主胜", odd: 1.72 },
          { match: "贝蒂斯 vs 巴列卡诺", league: "西甲", time: "03:00", market: "大小球", pick: "大 2.5", odd: 1.90 }
        ]
      },
      {
        id: "p9", source: "ugc", userId: "u-me", userName: "阿凯",
        title: "德甲夜场自拟标题", combo: "2串1", status: "review",
        follows: 0, gmv: 0, cutoff: "今晚 01:30 截止", odd: 3.81,
        rejectReason: "", titleEdited: true, skipAudit: false, auditNote: "改标题·待审",
        rewardPaid: null,
        legs: [
          { match: "莱比锡 vs 奥格斯堡", league: "德甲", time: "01:30", market: "胜平负", pick: "主胜", odd: 1.70 },
          { match: "多特 vs 波鸿", league: "德甲", time: "01:30", market: "大小球", pick: "大 2.5", odd: 2.24 }
        ]
      },
      {
        id: "p-rej", source: "ugc", userId: "u-me", userName: "阿凯",
        title: "意甲稳赚必中", combo: "单关", status: "rejected",
        follows: 0, gmv: 0, cutoff: "今晚 02:45 截止", odd: 1.82,
        rejectReason: "文案含「稳赚必中」，不予上架",
        titleEdited: true, skipAudit: false, auditNote: "改标题·已驳回",
        rewardPaid: null,
        legs: [
          { match: "拉齐奥 vs 都灵", league: "意甲", time: "02:45", market: "胜平负", pick: "主胜", odd: 1.82 }
        ]
      },
      {
        id: "p8-me", source: "ugc", userId: "u-me", userName: "阿凯",
        title: "英超 2串1", combo: "2串1", status: "live",
        follows: 21, gmv: 860, cutoff: "今晚 03:00 截止", odd: 3.24,
        rejectReason: "", titleEdited: false, skipAudit: true, auditNote: "免审·未改标题",
        rewardPaid: null,
        legs: [
          { match: "维拉 vs 狼队", league: "英超", time: "03:00", market: "大小球", pick: "大 2.5", odd: 1.74 },
          { match: "布莱顿 vs 水晶宫", league: "英超", time: "00:30", market: "让球", pick: "布莱顿 -0.5", odd: 1.86 }
        ]
      }
    ]
  };
};

TS.patchDemoPlan = function (store, seedPlan) {
  var found = store.plans.filter(function (p) { return p.id === seedPlan.id; })[0];
  if (!found) {
    store.plans.push(JSON.parse(JSON.stringify(seedPlan)));
    return;
  }
  ["titleEdited", "skipAudit", "auditNote", "rewardPaid"].forEach(function (k) {
    if (found[k] === undefined) found[k] = seedPlan[k];
  });
};

TS.loadUgc = function () {
  try {
    var raw = sessionStorage.getItem(TS.UGC_KEY);
    if (raw) {
      var data = JSON.parse(raw);
      var seed = TS.ugcSeed();
      if (!data.settings) data.settings = seed.settings;
      if (data.settings.n == null) data.settings.n = 10;
      if (data.settings.hitPct == null) data.settings.hitPct = 70;
      if (data.settings.rewardPct == null) data.settings.rewardPct = 2;
      if (!data.bets || !data.bets.length) data.bets = seed.bets;
      if (!data.plans) data.plans = seed.plans;
      if (!data.account) data.account = "me";
      if (!data.notifications) data.notifications = seed.notifications;
      if (!(Number(data.schema) >= TS.UGC_SCHEMA)) {
        data.schema = TS.UGC_SCHEMA;
        var replaceIds = { "p8-me": true, "p9": true, "p-rej": true };
        data.plans = data.plans.filter(function (p) { return !replaceIds[p.id]; });
        seed.plans.forEach(function (sp) {
          if (replaceIds[sp.id]) data.plans.push(JSON.parse(JSON.stringify(sp)));
        });
        var betMap = {};
        seed.bets.forEach(function (b) { betMap[b.id] = b; });
        ["b-ok", "b-p9", "b-rej"].forEach(function (id) {
          data.bets.forEach(function (b, i) {
            if (b.id === id && betMap[id]) data.bets[i] = JSON.parse(JSON.stringify(betMap[id]));
          });
        });
        if (!data.notifications.length) data.notifications = seed.notifications;
      }
      seed.plans.forEach(function (sp) { TS.patchDemoPlan(data, sp); });
      if (!(Number(data.schema) >= TS.UGC_SCHEMA)) data.schema = TS.UGC_SCHEMA;
      try { sessionStorage.setItem(TS.UGC_KEY, JSON.stringify(data)); } catch (e2) {}
      return data;
    }
  } catch (e) {}
  var fresh = TS.ugcSeed();
  try { sessionStorage.setItem(TS.UGC_KEY, JSON.stringify(fresh)); } catch (e3) {}
  return fresh;
};

TS.saveUgc = function (data) {
  sessionStorage.setItem(TS.UGC_KEY, JSON.stringify(data || TS._ugc));
};

TS.toFrontPlan = function (p) {
  var status = "open";
  if (p.status === "live" || p.status === "open") status = "open";
  else if (p.status === "win" || p.status === "lose" || p.status === "settled") status = "settled";
  else status = p.status;
  return {
    id: p.id,
    source: "ugc",
    userId: p.userId,
    userName: p.userName,
    authorId: null,
    title: p.title,
    combo: p.combo,
    status: status,
    adminStatus: p.status,
    result: p.result || (p.status === "win" ? "win" : p.status === "lose" ? "lose" : null),
    follows: p.follows || 0,
    amount: p.gmv || p.amount || 0,
    featured: false,
    cutoff: p.cutoff || "今晚 02:00 截止",
    rejectReason: p.rejectReason || "",
    titleEdited: !!p.titleEdited,
    skipAudit: !!p.skipAudit,
    auditNote: p.auditNote || "",
    rewardPaid: p.rewardPaid == null ? null : p.rewardPaid,
    legs: Array.isArray(p.legs) ? p.legs : []
  };
};

TS.hydrate = function () {
  var store = TS.loadUgc();
  TS._ugc = store;
  TS.demoAccount = store.account;
  TS.myBets = store.bets;
  TS.notifications = store.notifications || [];
  store.plans.forEach(function (p) {
    TS.plans[p.id] = TS.toFrontPlan(p);
  });
  TS.myBets.forEach(function (bet) {
    if (!bet.sharePlanId) return;
    var p = store.plans.filter(function (x) { return x.id === bet.sharePlanId; })[0];
    if (!p) return;
    if (p.status === "live" || p.status === "open") bet.share = "approved";
    if (p.status === "review") bet.share = "pending";
    if (p.status === "rejected") {
      bet.share = "rejected";
      bet.rejectReason = p.rejectReason || bet.rejectReason;
    }
  });
  TS.saveUgc(store);
};

TS.shareCfg = function () {
  var s = { n: 10, hitPct: 70, rewardPct: 2 };
  if (TS._ugc && TS._ugc.settings) {
    if (TS._ugc.settings.n != null) s.n = TS._ugc.settings.n;
    if (TS._ugc.settings.hitPct != null) s.hitPct = TS._ugc.settings.hitPct;
    if (TS._ugc.settings.rewardPct != null) s.rewardPct = TS._ugc.settings.rewardPct;
  }
  try {
    var admin = JSON.parse(sessionStorage.getItem("ts-copy-admin") || "null");
    if (admin && admin.settings) {
      if (admin.settings.shareN != null) s.n = admin.settings.shareN;
      if (admin.settings.shareHit != null) s.hitPct = admin.settings.shareHit;
      if (admin.settings.rewardPct != null) s.rewardPct = admin.settings.rewardPct;
    }
  } catch (e) {}
  return {
    n: Number(s.n) || 10,
    hitPct: Number(s.hitPct) || 70,
    rewardPct: Number(s.rewardPct) >= 0 ? Number(s.rewardPct) : 2
  };
};

TS.currentUser = function () {
  if (TS.demoAccount === "out") return null;
  if (TS.demoAccount === "low") return TS.ugcUsers["u-low"];
  return TS.ugcUsers["u-me"];
};

TS.setAccount = function (acc) {
  TS.demoAccount = acc;
  if (TS._ugc) {
    TS._ugc.account = acc;
    TS.saveUgc(TS._ugc);
  }
};

TS.isUgc = function (plan) {
  return !!(plan && plan.source === "ugc");
};

TS.owner = function (plan) {
  if (!plan) return null;
  if (TS.isUgc(plan)) return TS.ugcUsers[plan.userId] || null;
  return TS.authors[plan.authorId] || null;
};

TS.userHitRate = function (user, n) {
  n = n || TS.shareCfg().n;
  var hits = ((user && user.hits) || []).filter(function (x) { return x === "w" || x === "l"; });
  if (hits.length > n) hits = hits.slice(hits.length - n);
  var w = hits.filter(function (x) { return x === "w"; }).length;
  var m = hits.length;
  return { n: m, w: w, pct: m ? Math.round((w / m) * 100) : 0, x: n };
};

TS.thresholdCopy = function (cfg) {
  cfg = cfg || TS.shareCfg();
  if (cfg.n === 10 && Number(cfg.hitPct) === 70) return "近10场需猜中7成";
  return "近" + cfg.n + "场需命中 " + cfg.hitPct + "%";
};

TS.shareGate = function (user, cfg) {
  cfg = cfg || TS.shareCfg();
  var need = Math.ceil(cfg.n * cfg.hitPct / 100);
  if (!user) return { ok: false, why: "登录后才能分享到广场" };
  var h = TS.userHitRate(user, cfg.n);
  if (h.n < cfg.n) {
    return { ok: false, why: TS.thresholdCopy(cfg) + "，还差 " + (cfg.n - h.n) + " 场已结算注单" };
  }
  if (h.pct < cfg.hitPct) {
    return { ok: false, why: TS.thresholdCopy(cfg) + "，当前 " + h.w + "/" + h.n };
  }
  return { ok: true, why: "近" + cfg.n + "场 " + h.w + "/" + h.n + "，已达门槛", need: need, hit: h };
};

TS.shareState = function (bet, user) {
  if (!user) return { can: false, why: "登录后才能分享到广场", kind: "login" };
  if (bet.share === "pending") return { can: false, why: "已提交，等待审核", kind: "pending" };
  if (bet.share === "approved") return { can: false, why: "已在广场展示", kind: "ok" };
  if (bet.share === "rejected") return { can: false, why: "已驳回：" + (bet.rejectReason || "未通过审核"), kind: "rej" };
  if (bet.status === "live") return { can: false, why: "已开赛，不能分享", kind: "live" };
  if (bet.status === "settled") return { can: false, why: "已结算，不能分享", kind: "done" };
  if (bet.status === "cancelled") return { can: false, why: "已取消，不能分享", kind: "void" };
  if (bet.status !== "upcoming") return { can: false, why: "仅未开赛注单可分享", kind: "block" };
  var gate = TS.shareGate(user);
  if (!gate.ok) return { can: false, why: gate.why, kind: "gate" };
  return { can: true, why: gate.why, kind: "ok" };
};

TS.comboLabel = function (item) {
  if (item && item.combo) return item.combo;
  var n = item && item.legs ? item.legs.length : 0;
  return n <= 1 ? "单关" : n + "串1";
};

TS.autoTitle = function (bet) {
  var combo = TS.comboLabel(bet);
  var legs = (bet && bet.legs) || [];
  if (!legs.length) return combo;
  var leagues = [];
  legs.forEach(function (leg) {
    if (leg.league && leagues.indexOf(leg.league) < 0) leagues.push(leg.league);
  });
  if (leagues.length === 1) return leagues[0] + " " + combo;
  return (legs[0].match || leagues[0] || "串关") + " " + combo;
};

TS.titleBlocked = function (title) {
  return TS.BAD_TITLE.test(String(title || ""));
};

TS.nowLabel = function () {
  var d = new Date();
  var p = function (n) { return (n < 10 ? "0" : "") + n; };
  return "今天 " + p(d.getHours()) + ":" + p(d.getMinutes());
};

TS.money = function (n) {
  return (Math.round((Number(n) || 0) * 100) / 100).toFixed(2);
};

TS.rewardOf = function (plan) {
  var rate = TS.shareCfg().rewardPct;
  var amount = Number(plan && (plan.amount != null ? plan.amount : plan.gmv)) || 0;
  var est = Math.round(amount * rate) / 100;
  var admin = plan && plan.adminStatus;
  var settledWin = !!(plan && (plan.result === "win" || admin === "win"));
  var settledLose = !!(plan && (plan.result === "lose" || admin === "lose"));
  var voided = !!(plan && (plan.result === "void" || admin === "void"));
  var settled = settledWin || settledLose || voided || (plan && plan.status === "settled");
  var paid = plan && plan.rewardPaid != null ? Number(plan.rewardPaid) : (settledWin ? est : 0);
  return {
    rate: rate,
    amount: amount,
    estimate: est,
    settled: settled,
    win: settledWin,
    paid: settledWin ? paid : 0,
    label: !settled
      ? "若全中预估，未结算"
      : (settledWin ? "已发放" : "未发放（未全中）")
  };
};

TS.isPublisher = function (plan) {
  var me = TS.currentUser();
  return !!(plan && TS.isUgc(plan) && me && plan.userId === me.id);
};

TS.unreadCount = function () {
  var me = TS.currentUser();
  if (!me) return 0;
  return (TS.notifications || []).filter(function (n) {
    return n.userId === me.id && n.unread;
  }).length;
};

TS.myNotices = function () {
  var me = TS.currentUser();
  if (!me) return [];
  return (TS.notifications || []).filter(function (n) { return n.userId === me.id; });
};

TS.pushNotice = function (notice) {
  var store = TS.loadUgc();
  store.notifications = store.notifications || [];
  if (notice.type === "follow") {
    var recent = store.notifications.filter(function (x) {
      return x.userId === notice.userId && x.type === "follow" && x.planId === notice.planId && x.unread && !x.seed;
    })[0];
    if (recent) {
      recent.count = (recent.count || 1) + 1;
      recent.title = "又有 " + recent.count + " 人跟了你的" + (notice.planTitle || "");
      recent.body = notice.body;
      recent.time = notice.time || TS.nowLabel();
      TS._ugc = store;
      TS.saveUgc(store);
      TS.hydrate();
      return recent;
    }
  }
  notice.id = notice.id || ("n" + Date.now());
  notice.time = notice.time || TS.nowLabel();
  notice.unread = notice.unread !== false;
  notice.count = notice.count || 1;
  store.notifications.unshift(notice);
  TS._ugc = store;
  TS.saveUgc(store);
  TS.hydrate();
  return notice;
};

TS.markNoticeRead = function (id) {
  var store = TS.loadUgc();
  (store.notifications || []).forEach(function (n) {
    if (n.id === id) n.unread = false;
  });
  TS.saveUgc(store);
  TS.hydrate();
};

TS.notifyFollow = function (plan) {
  if (!plan || !TS.isUgc(plan) || !plan.userId) return;
  var reward = TS.rewardOf(plan);
  TS.pushNotice({
    userId: plan.userId,
    type: "follow",
    planId: plan.id,
    planTitle: plan.title,
    title: "有人跟了你的" + plan.title,
    body: "当前 " + (plan.follows || 0) + " 人已跟，累计本金 " + TS.money(plan.amount) +
      "，若全中预估奖励 " + TS.money(reward.estimate) + "。"
  });
};

TS.applyFollow = function (planId, stake, odd) {
  TS.hydrate();
  var plan = TS.plans[planId];
  if (!plan) return { ok: false, msg: "方案不存在" };
  if (plan.status !== "open" && plan.status !== "live") return { ok: false, msg: "已截止" };
  stake = Number(stake) || 0;
  if (stake < 10) return { ok: false, msg: "最低跟单 10" };
  plan.follows = (plan.follows || 0) + 1;
  plan.amount = (Number(plan.amount) || 0) + stake;
  TS.myFollows.unshift({
    id: "f" + Date.now(),
    planId: plan.id,
    stake: stake,
    odd: odd || TS.totalOdd(plan),
    status: "ing",
    pnl: null
  });
  if (TS.isUgc(plan)) {
    var store = TS.loadUgc();
    var up = store.plans.filter(function (p) { return p.id === plan.id; })[0];
    if (up) {
      up.follows = plan.follows;
      up.gmv = plan.amount;
    }
    TS._ugc = store;
    TS.saveUgc(store);
    TS.notifyFollow(plan);
  }
  return { ok: true, plan: plan };
};

TS.submitShare = function (betId, opts) {
  opts = opts || {};
  var user = TS.currentUser();
  var store = TS.loadUgc();
  TS._ugc = store;
  var bet = store.bets.filter(function (b) { return b.id === betId; })[0];
  if (!bet) return { ok: false, msg: "注单不存在" };
  var state = TS.shareState(bet, user);
  if (!state.can) return { ok: false, msg: state.why };
  var gate = TS.shareGate(user);
  if (!gate.ok) return { ok: false, msg: gate.why };
  var auto = TS.autoTitle(bet);
  var edited = !!opts.titleEdited;
  var title = edited ? String(opts.title || "").trim() : auto;
  if (edited && !title) return { ok: false, msg: "请填写标题，或收起修改使用系统标题" };
  if (edited && title === auto) edited = false;
  if (edited && TS.titleBlocked(title)) {
    return { ok: false, msg: "标题含「必中 / 内幕 / 稳赚」等违禁词，请修改后再提交" };
  }
  var live = !edited;
  var plan = {
    id: "p" + Date.now(),
    source: "ugc",
    userId: user.id,
    userName: user.name,
    title: title,
    combo: TS.comboLabel(bet),
    status: live ? "live" : "review",
    follows: 0,
    gmv: 0,
    cutoff: "今晚 " + (bet.legs[0] && bet.legs[0].time ? bet.legs[0].time : "开赛前") + " 截止",
    odd: TS.totalOdd(bet),
    rejectReason: "",
    titleEdited: edited,
    skipAudit: live,
    auditNote: live ? "免审·未改标题" : "改标题·待审",
    rewardPaid: null,
    legs: bet.legs.map(function (leg) {
      return {
        match: leg.match, league: leg.league, time: leg.time,
        market: leg.market, pick: leg.pick, odd: leg.odd
      };
    })
  };
  bet.share = live ? "approved" : "pending";
  bet.sharePlanId = plan.id;
  bet.titleEdited = edited;
  store.plans.unshift(plan);
  TS.saveUgc(store);
  TS.hydrate();
  return {
    ok: true,
    planId: plan.id,
    live: live,
    title: title,
    msg: live ? "已发布到广场" : "已提交审核"
  };
};

TS.myFollows = [
  { id: "f1", planId: "p1", stake: 100, odd: 7.38, status: "ing", pnl: null },
  { id: "f2", planId: "p6", stake: 80, odd: 2.79, status: "win", pnl: 143.2 },
  { id: "f3", planId: "p7", stake: 50, odd: 3.40, status: "lose", pnl: -50 },
  { id: "f4", planId: "p8", stake: 40, odd: 3.27, status: "ing", pnl: null }
];

TS.hydrate();

TS.hitRate = function (author) {
  var hits = author.hits.filter(function (x) { return x === "w" || x === "l"; });
  var n = hits.length;
  var w = hits.filter(function (x) { return x === "w"; }).length;
  var pct = n ? Math.round((w / n) * 100) : 0;
  return { n: n, w: w, pct: pct, x: author.x };
};

TS.totalOdd = function (plan) {
  var t = plan.legs.reduce(function (acc, leg) { return acc * leg.odd; }, 1);
  return Math.round(t * 100) / 100;
};

TS.qs = function (key) {
  var m = new URLSearchParams(location.search);
  return m.get(key);
};
