window.TS = window.TS || {};

TS.esc = function (s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

TS.avatar = function (a, lg) {
  return '<div class="avatar' + (lg ? " lg" : "") + '" style="background:' + a.color + '">' + a.emoji + "</div>";
};

TS.hitBadge = function (a) {
  var h = TS.hitRate(a);
  var warn = h.pct < 50 ? " warn" : "";
  if (!h.n) return '<div class="hit warn"><strong>新锐</strong><em>暂无实盘</em></div>';
  var label = h.n < a.x ? ("近" + h.n + "场") : ("近" + a.x + "场");
  return '<div class="hit' + warn + '"><strong>' + h.pct + '%</strong><em>' + label + " " + h.w + "/" + h.n + "</em></div>";
};

TS.ugcHitBadge = function (user) {
  var cfg = TS.shareCfg();
  var h = TS.userHitRate(user, cfg.n);
  var warn = h.pct < 50 ? " warn" : "";
  if (!h.n) return '<div class="hit warn"><strong>—</strong><em>暂无注单</em></div>';
  return '<div class="hit' + warn + '"><strong>' + h.pct + '%</strong><em>近' + h.n + "场注单 " + h.w + "/" + h.n + "</em></div>";
};

TS.authorLine = function (a) {
  var s = TS.strategies[a.strategyId];
  return TS.esc(s.userLine);
};

TS.legsHtml = function (plan) {
  return plan.legs.map(function (leg) {
    return '<div class="leg"><span class="m">' + TS.esc(leg.match) + '</span><span class="p">' +
      TS.esc(leg.pick) + '</span><span class="od">' + leg.odd.toFixed(2) + "</span></div>";
  }).join("");
};

TS.card = function (plan, opts) {
  opts = opts || {};
  var ugc = TS.isUgc(plan);
  var a = TS.owner(plan);
  if (!a) return "";
  var odd = TS.totalOdd(plan);
  var canFollow = plan.status === "open" || plan.status === "live";
  var followBtn = canFollow
    ? '<button class="btn" data-follow="' + plan.id + '">一键跟单</button>'
    : '<button class="btn" disabled>已截止</button>';
  var profile = ugc ? ("user.html?id=" + encodeURIComponent(a.id)) : ("author.html?id=" + encodeURIComponent(a.id));
  var badge = ugc
    ? '<span class="ugc-badge">用户晒单</span>'
    : '<span class="ai-badge">AI 策略号</span>';
  var sub = ugc ? "晒自己的实盘注单" : TS.authorLine(a);
  var hit = ugc ? TS.ugcHitBadge(a) : TS.hitBadge(a);
  return (
    '<article class="copy-card' + (ugc ? " is-ugc" : "") + '" data-href="plan-detail.html?id=' + plan.id + '">' +
      '<div class="author-row">' +
        '<a href="' + profile + '" onclick="event.stopPropagation()">' + TS.avatar(a) + "</a>" +
        '<div class="who"><b>' + TS.esc(a.name) + badge + "</b>" +
        "<span>" + TS.esc(sub) + "</span></div>" +
        hit +
      "</div>" +
      '<div class="plan-title">' + TS.esc(plan.title) + "<span>" + plan.combo + "</span></div>" +
      TS.legsHtml(plan) +
      '<div class="copy-foot"><div class="total-odd"><small>总赔率</small><b>' + odd.toFixed(2) +
      '</b></div><div class="people">' + plan.follows + " 人已跟</div>" + followBtn + "</div>" +
    "</article>"
  );
};

TS.openSheet = function (planId) {
  var plan = TS.plans[planId];
  if (!plan || (plan.status !== "open" && plan.status !== "live")) return;
  var a = TS.owner(plan);
  if (!a) return;
  var odd = TS.totalOdd(plan);
  var ugc = TS.isUgc(plan);
  var mask = document.getElementById("sheet");
  var notice = ugc
    ? "本方案由用户分享，不是官方或 AI 策略号。过往命中不代表未来。确认即按该方案全部注项下单。"
    : "AI 推荐不保证盈利。过往命中率不代表未来结果。确认即按该方案全部注项下单。";
  mask.innerHTML =
    '<div class="sheet" onclick="event.stopPropagation()">' +
      '<div class="grab"></div>' +
      "<h3>跟 " + TS.esc(a.name) + " 的方案</h3>" +
      '<div class="people" style="margin-bottom:8px">' + TS.esc(plan.title) + " · " + plan.combo +
      " · 当前总赔 " + odd.toFixed(2) + (ugc ? ' · <span class="ugc-badge">用户晒单</span>' : "") + "</div>" +
      '<input class="field" id="stake" type="number" value="100" min="10" max="5000">' +
      '<div class="amt">' +
        '<button data-amt="20">20</button><button data-amt="50">50</button>' +
        '<button data-amt="100" class="on">100</button><button data-amt="200">200</button>' +
      "</div>" +
      '<div class="preview"><span>预计可赢</span><b id="win">+' + (100 * odd).toFixed(2) + "</b></div>" +
      '<button class="btn block" id="confirmFollow">确认跟单</button>' +
      '<div class="notice" style="padding:10px 0 0">' + notice + "</div>" +
    "</div>";
  mask.classList.add("show");
  var input = document.getElementById("stake");
  var win = document.getElementById("win");
  function refresh() {
    var v = parseFloat(input.value) || 0;
    win.textContent = "+" + (v * odd).toFixed(2);
  }
  input.addEventListener("input", refresh);
  mask.querySelectorAll("[data-amt]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      mask.querySelectorAll("[data-amt]").forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
      input.value = btn.getAttribute("data-amt");
      refresh();
    });
  });
  document.getElementById("confirmFollow").addEventListener("click", function () {
    var v = parseFloat(input.value) || 0;
    var res = TS.applyFollow(plan.id, v, odd);
    if (!res.ok) return TS.toast(res.msg);
    mask.classList.remove("show");
    TS.toast("跟单成功 · 本金 " + v + " · 可赢 " + (v * odd).toFixed(2));
    TS.refreshBell();
    if (typeof TS.onFollowed === "function") TS.onFollowed(res.plan);
  });
};

TS.openShareSheet = function (betId, onDone) {
  var user = TS.currentUser();
  var bet = (TS.myBets || []).filter(function (b) { return b.id === betId; })[0];
  var mask = document.getElementById("sheet");
  if (!mask || !bet) return;
  var state = TS.shareState(bet, user);
  if (!state.can) {
    TS.toast(state.why);
    return;
  }
  var odd = TS.totalOdd(bet);
  var cfg = TS.shareCfg();
  var h = TS.userHitRate(user, cfg.n);
  var auto = TS.autoTitle(bet);
  mask.innerHTML =
    '<div class="sheet" onclick="event.stopPropagation()">' +
      '<div class="grab"></div>' +
      "<h3>分享到广场</h3>" +
      '<div class="people" style="margin-bottom:8px">' + TS.esc(TS.comboLabel(bet)) +
      " · 总赔 " + odd.toFixed(2) + "</div>" +
      TS.legsHtml(bet) +
      '<div class="auto-title"><small>系统标题（未改则免审，立刻上广场）</small><b id="shareTitlePreview">' +
        TS.esc(auto) + "</b></div>" +
      '<button type="button" class="linkish" id="toggleTitle">修改标题</button>' +
      '<div class="title-box" id="titleBox">' +
        '<input class="field" id="shareTitle" maxlength="24" placeholder="自定义标题">' +
        '<div class="people" style="margin-top:6px">改标题后需运营审核，通过才上广场。含「必中 / 内幕 / 稳赚」会直接拦截。</div>' +
      "</div>" +
      '<div class="preview"><span>将以真实昵称展示</span><b>' + TS.esc(user.name) +
      ' <span class="ugc-badge">用户晒单</span></b></div>' +
      '<div class="notice" style="padding:0 0 10px">不会创建可运营的 AI 作者档案，也不会把这单写进任何策略号的近 X 场。</div>' +
      '<div class="people" style="margin-bottom:12px">门槛：近' + cfg.n + "场 " + h.w + "/" + h.n +
      "，已达标。全中后平台另发跟单本金 × " + cfg.rewardPct + "% 奖励给你。</div>" +
      '<button class="btn gold block" id="confirmShare">确认分享</button>' +
      '<div class="notice" style="padding:10px 0 0">服务端仍校验门槛、未开赛、未重复分享、盘口可售。过往命中不代表未来。</div>' +
    "</div>";
  mask.classList.add("show");
  var box = document.getElementById("titleBox");
  var input = document.getElementById("shareTitle");
  var tog = document.getElementById("toggleTitle");
  var preview = document.getElementById("shareTitlePreview");
  tog.addEventListener("click", function () {
    var open = box.classList.toggle("show");
    tog.textContent = open ? "使用系统标题" : "修改标题";
    if (open) {
      input.value = input.value || auto;
      input.focus();
    } else {
      input.value = "";
      preview.textContent = auto;
    }
  });
  input.addEventListener("input", function () {
    preview.textContent = (input.value || "").trim() || auto;
  });
  document.getElementById("confirmShare").addEventListener("click", function () {
    var edited = box.classList.contains("show");
    var res = TS.submitShare(betId, { titleEdited: edited, title: input.value });
    if (!res.ok) return TS.toast(res.msg);
    mask.classList.remove("show");
    TS.toast(res.msg);
    if (onDone) onDone();
  });
};

TS.ownerStatsHtml = function (plan) {
  if (!TS.isPublisher(plan)) return "";
  var r = TS.rewardOf(plan);
  var figure = r.settled ? (r.win ? TS.money(r.paid) : "0.00") : TS.money(r.estimate);
  var figureNote = r.settled
    ? (r.win ? "已发放 " + TS.money(r.paid) : "未发放（未全中）")
    : "若全中预估，未结算";
  return (
    '<div class="owner-box" id="owner-stats">' +
      '<div class="owner-kicker">发布人数据 · 仅你可见</div>' +
      '<div class="stats">' +
        '<div class="stat"><b id="own-follows">' + (plan.follows || 0) + "</b><span>跟单人数</span></div>" +
        '<div class="stat"><b id="own-amount">' + TS.money(plan.amount) + "</b><span>总下注额</span></div>" +
        '<div class="stat"><b id="own-reward">' + figure + "</b><span>" + (r.settled && r.win ? "已发奖励" : "预期额外奖励") + "</span></div>" +
      "</div>" +
      '<div class="owner-note">' + figureNote + " · 比例 " + r.rate +
      "%（跟单本金 × 比例，平台发放，不从跟单人本金抽）</div>" +
    "</div>"
  );
};

TS.bellHtml = function () {
  var n = TS.unreadCount();
  return '<a class="icon-btn bell" href="messages.html" title="消息">讯' +
    (n ? '<i class="n-badge">' + (n > 9 ? "9+" : n) + "</i>" : "") + "</a>";
};

TS.mountBell = function (host) {
  if (!host) return;
  var wrap = document.createElement("div");
  wrap.className = "nav-extra";
  wrap.innerHTML = TS.bellHtml();
  host.appendChild(wrap);
};

TS.refreshBell = function () {
  var slot = document.getElementById("bell-slot");
  if (slot) slot.innerHTML = TS.bellHtml();
  document.querySelectorAll(".nav-extra").forEach(function (el) {
    el.innerHTML = TS.bellHtml();
  });
};

TS.toast = function (msg) {
  var el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.querySelector(".phone").appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(function () { el.classList.remove("show"); }, 2200);
};

TS.bindCards = function (root) {
  root = root || document;
  root.querySelectorAll("[data-href]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (e.target.closest("button, a")) return;
      location.href = el.getAttribute("data-href");
    });
  });
  root.querySelectorAll("[data-follow]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      TS.openSheet(btn.getAttribute("data-follow"));
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  var sheet = document.getElementById("sheet");
  if (sheet) sheet.addEventListener("click", function () { sheet.classList.remove("show"); });
});
