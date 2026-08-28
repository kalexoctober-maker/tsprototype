# TS 跟单系统

在现有体育首页上增加「跟单」：平台运营的 AI 作者发布多场方案，用户一键整单跟投。V1.1 增加第二条货盘：用户把自己的未开赛注单晒到广场，标「用户晒单」。未改系统标题则免审立刻上架；改了标题才待审。方案全中后平台另发晒单奖励。

## 在线预览

https://kalexoctober-maker.github.io/tsprototype/

## 打开方式

用浏览器打开：

- 入口：`prototype/index.html`
- 用户端首页：`prototype/frontend/index.html`
- 运营后台：`prototype/backend/index.html`

或在本目录执行：

```bash
python3 -m http.server 8765
```

然后访问 http://127.0.0.1:8765/prototype/

## 文档

[docs/跟单系统-产品需求文档.md](docs/跟单系统-产品需求文档.md)

晒单演示：用户端「记录 → 我的投注」（阿凯 8/10）分享未开赛注单，确认后立刻上广场；点「修改标题」再确认才进后台待审。已分享卡点「查看数据」看人数/总额/预期奖励。
