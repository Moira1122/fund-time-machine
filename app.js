let funds = [
  { id:"hs300", name:"沪深300指数训练基金", code:"T-300", category:"宽基指数", risk:"中风险", tone:"blue", desc:"覆盖大盘核心公司，波动相对均衡。", lesson:"练习长期持有与分散", change:-1.4, baseNav:1.20, returns:[-1.4,1.1,2.4,-.7,.5] },
  { id:"csi500", name:"中证500指数训练基金", code:"T-500", category:"宽基指数", risk:"中高风险", tone:"mint", desc:"偏中小盘成长，弹性更明显。", lesson:"练习承受中等波动", change:-2.1, baseNav:1.08, returns:[-2.1,1.8,3.2,-1.4,.9] },
  { id:"csi1000", name:"中证1000指数训练基金", code:"T-1000", category:"宽基指数", risk:"中高风险", tone:"lilac", desc:"覆盖更多小市值公司，波动通常更高。", lesson:"练习小盘波动", change:-2.8, baseNav:.96, returns:[-2.8,2.4,4.1,-2.0,1.2] },
  { id:"gem", name:"创业板指数训练基金", code:"T-GEM", category:"宽基指数", risk:"高风险", tone:"peach", desc:"成长行业权重较高，行情变化更明显。", lesson:"练习成长风格轮动", change:-3.2, baseNav:1.35, returns:[-3.2,2.9,4.8,-2.3,1.7] },
  { id:"dividend", name:"红利低波训练基金", code:"T-DIV", category:"宽基指数", risk:"中风险", tone:"sand", desc:"偏向分红与相对低波动风格。", lesson:"练习风格分散", change:-.6, baseNav:1.12, returns:[-.6,.5,1.0,-.2,.4] },
  { id:"health", name:"医药健康主题训练基金", code:"T-MED", category:"行业主题", risk:"高风险", tone:"rose", desc:"行业集中度较高，容易受到政策与情绪影响。", lesson:"练习避免行业重仓", change:-3.7, baseNav:.88, returns:[-3.7,1.5,3.8,-1.1,2.0] },
  { id:"tech", name:"科技创新主题训练基金", code:"T-TEC", category:"行业主题", risk:"高风险", tone:"lilac", desc:"高成长也高波动，热门时容易引发追涨。", lesson:"练习识别追涨情绪", change:-4.2, baseNav:1.42, returns:[-4.2,3.6,6.2,-3.5,2.4] },
  { id:"newenergy", name:"新能源主题训练基金", code:"T-ENE", category:"行业主题", risk:"高风险", tone:"mint", desc:"行业周期明显，可能经历快速上涨与深度回撤。", lesson:"练习行业周期", change:-4.8, baseNav:1.16, returns:[-4.8,4.1,7.0,-4.2,3.1] },
  { id:"consumer", name:"消费主题训练基金", code:"T-CON", category:"行业主题", risk:"中高风险", tone:"peach", desc:"受消费景气、估值和市场偏好共同影响。", lesson:"练习估值与耐心", change:-1.9, baseNav:1.28, returns:[-1.9,.8,2.7,-1.0,.7] },
  { id:"semi", name:"半导体主题训练基金", code:"T-CHIP", category:"行业主题", risk:"高风险", tone:"blue", desc:"产业周期和市场热度会放大涨跌。", lesson:"练习热门赛道纪律", change:-5.1, baseNav:1.03, returns:[-5.1,4.8,7.5,-4.8,3.5] },
  { id:"bond", name:"稳健纯债训练基金", code:"T-BND", category:"固收类", risk:"低风险", tone:"sand", desc:"波动较低，可用于理解组合缓冲作用。", lesson:"练习股债配置", change:.05, baseNav:1.06, returns:[.05,.08,.06,.04,.07] },
  { id:"shortbond", name:"短债训练基金", code:"T-SBD", category:"固收类", risk:"低风险", tone:"mint", desc:"期限相对较短，波动通常较低。", lesson:"练习现金管理边界", change:.03, baseNav:1.02, returns:[.03,.04,.03,.02,.04] },
  { id:"convertible", name:"可转债训练基金", code:"T-CVB", category:"固收类", risk:"中风险", tone:"peach", desc:"兼具债券与权益特征，波动高于普通纯债。", lesson:"练习混合风险识别", change:-1.2, baseNav:1.18, returns:[-1.2,1.0,1.8,-.6,.8] },
  { id:"gold", name:"黄金资产训练基金", code:"T-GLD", category:"另类资产", risk:"中风险", tone:"peach", desc:"与股票市场不总是同涨同跌。", lesson:"练习跨资产配置", change:.7, baseNav:1.31, returns:[.7,-.2,.5,1.1,-.3] },
  { id:"sp500", name:"标普500海外训练基金", code:"T-SPX", category:"另类资产", risk:"中高风险", tone:"blue", desc:"用于认识海外市场和汇率影响。", lesson:"练习地域分散", change:-.9, baseNav:1.52, returns:[-.9,1.3,2.0,-.5,1.1] }
];

const scenarios = [
  {
    id:"valuation-shock",
    name:"未知剧本 A · 高位震荡",
    reveal:"参考 2015 年高估值与快速调整环境",
    copy:"市场在乐观、高波动和流动性变化之间快速切换，重点训练仓位纪律。",
    days:[
      [-1.1,64,"分化","指数高位震荡，热门板块继续活跃","上涨惯性仍在，但部分高估值方向开始出现分化。"],
      [2.4,78,"乐观","成交放大，热门主题再度领涨","赚钱效应扩散，社交讨论明显升温。"],
      [1.6,86,"兴奋","连续上涨吸引更多资金入场","越来越多人认为短期调整只是买入机会。"],
      [-3.8,55,"担心","市场突然回落，高波动基金跌幅扩大","此前被忽略的仓位风险开始影响账户。"],
      [-5.2,31,"恐慌","主要指数继续下跌，赎回情绪增加","坏消息集中出现，但此刻没人知道下跌何时结束。"],
      [2.1,46,"观望","政策信号带来快速反弹","一次反弹可能修复情绪，也可能诱发新的追涨。"],
      [-2.6,38,"谨慎","反弹后再度分化，成交缩量","市场方向仍不清楚，规则比预测更重要。"],
      [.8,45,"平静","市场波动收窄，投资者重新评估风险","结束前请检查：你的操作来自计划还是情绪。"]
    ]
  },
  {
    id:"slow-bear",
    name:"未知剧本 B · 漫长调整",
    reveal:"参考 2018 年震荡下行与反复修复环境",
    copy:"没有一次决定性暴跌，而是持续消耗耐心，重点训练长期计划与再平衡。",
    days:[
      [-1.5,43,"谨慎","外部不确定性升高，市场普遍回落","短期信息变多，但长期结论还没有改变。"],
      [.6,48,"观望","市场小幅反弹，成交依然低迷","反弹带来的信心有限。"],
      [-1.2,39,"担心","周期行业走弱，成长方向继续分化","持仓之间的相关性开始显现。"],
      [-.8,34,"疲惫","市场连续缩量，投资者耐心下降","没有剧烈波动，也会让人频繁改变策略。"],
      [1.1,42,"观望","政策预期升温，指数出现修复","预期不等于已经发生的结果。"],
      [-2.3,27,"悲观","反弹未能持续，市场再创新低","此时最容易因为想尽快结束痛苦而卖出。"],
      [.4,30,"冷静","部分低估值资产企稳","低估不代表马上上涨，仍需匹配持有期限。"],
      [1.5,41,"谨慎乐观","市场出现更广泛的修复","训练结束后再揭晓环境，不用结果美化当时的决定。"]
    ]
  },
  {
    id:"sudden-crisis",
    name:"未知剧本 C · 突发冲击",
    reveal:"参考 2020 年突发公共事件与流动性修复环境",
    copy:"消息变化很快，市场先恐慌后修复，重点训练应急资金与分批决策。",
    days:[
      [-2.2,36,"担心","突发事件影响经济预期，风险资产走弱","信息仍不完整，市场开始重新定价。"],
      [-4.9,20,"恐慌","全球市场大幅波动，避险情绪升温","账户变化可能放大心理压力。"],
      [-3.1,16,"恐慌","流动性担忧加剧，多类资产同步下跌","分散不保证每一天都有效，但能改变长期风险结构。"],
      [2.7,32,"观望","稳定市场措施释放，指数快速反弹","大涨并不自动证明风险已经过去。"],
      [4.1,53,"期待","市场连续修复，成长方向表现活跃","追涨冲动可能在亏损刚修复时出现。"],
      [-1.4,47,"分化","修复后出现获利回吐","不同资产对事件的反应开始分化。"],
      [2.0,60,"乐观","经济修复预期增强，风险偏好回升","长期逻辑逐渐清晰，但估值也在变化。"],
      [.7,63,"谨慎乐观","市场进入震荡修复阶段","请比较你在恐慌与乐观时是否执行了同一套规则。"]
    ]
  },
  {
    id:"theme-boom",
    name:"未知剧本 D · 热门赛道",
    reveal:"参考 2021 年热门行业拥挤与回撤环境",
    copy:"行业基金涨幅远超宽基后迅速降温，重点训练避免把近期收益当成未来保证。",
    days:[
      [1.0,68,"乐观","热门行业继续上涨，基金排行榜高度集中","近期冠军受到大量关注。"],
      [1.8,76,"兴奋","主题基金连续创出阶段新高","越来越多买入理由只剩下“还在涨”。"],
      [2.5,89,"狂热","社交平台大量讨论高收益截图","高收益展示很少同时展示仓位和风险。"],
      [-1.6,71,"分化","热门方向冲高回落，宽基相对平稳","第一次回落常被解释为短期机会。"],
      [-4.4,42,"担心","高估值主题出现明显调整","集中持仓开始放大账户波动。"],
      [-3.0,29,"恐慌","热门基金继续回撤，赎回讨论增加","过去的高收益无法抵消当前的决策压力。"],
      [1.2,37,"观望","超跌方向反弹，但强度分化","反弹时要重新检查原始买入逻辑。"],
      [-.5,35,"谨慎","市场进入震荡，热点快速轮动","训练结束时，比较分散组合与单一热门基金的体验。"]
    ]
  }
];

function scenarioDays(scenario) {
  return scenario.days.map((item, index) => ({
    date:`未知周期 · 第 ${index + 1} 天`,
    marketReturn:item[0],
    index:`${item[0] >= 0 ? "+" : ""}${item[0].toFixed(2)}%`,
    temp:item[1],
    mood:item[2],
    title:item[3],
    detail:item[4]
  }));
}

let activeScenarioId = localStorage.getItem("ftm-preview-scenario") || scenarios[0].id;
let days = scenarioDays(scenarios.find(item => item.id === activeScenarioId) || scenarios[0]);

function stableNumber(text = "") {
  return [...String(text)].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) % 997, 17);
}

function plainText(value, maxLength = 240) {
  return String(value ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[character]);
}

function normalizedCategory(record) {
  const raw = `${record.category || ""}${record.type || ""}${(record.classificationTags || []).join("")}`;
  if (/货币|短债|纯债|债券/.test(raw)) return "固收类";
  if (/QDII|海外|黄金|另类/.test(raw)) return "另类资产";
  if (/行业|主题|医疗|消费|新能源|半导体|白酒|汽车/.test(raw)) return "行业主题";
  return "宽基指数";
}

function riskLabel(record) {
  const raw = record.risk || record.riskLevel || "";
  if (/R1|R2|低风险|中低/.test(raw)) return "低风险";
  if (/R5/.test(raw) || raw === "高风险") return "高风险";
  if (/R4|中高/.test(raw)) return "中高风险";
  return "中风险";
}

function simulatedReturnsFor(record) {
  const category = normalizedCategory(record);
  const risk = riskLabel(record);
  const beta = risk === "高风险" ? 1.55 : risk === "中高风险" ? 1.25 : risk === "低风险" ? .18 : .85;
  const seed = stableNumber(record.code || record.id || record.name);
  return days.map((day, index) => {
    if (category === "固收类") return Number((.03 + day.marketReturn * .06 + ((seed + index) % 3 - 1) * .02).toFixed(2));
    if (category === "另类资产" && /黄金/.test(record.name || "")) return Number((.18 - day.marketReturn * .18 + ((seed + index) % 5 - 2) * .08).toFixed(2));
    const themeExtra = category === "行业主题" ? day.marketReturn * .22 : 0;
    const noise = (((seed + index * 13) % 9) - 4) * .06;
    return Number(Math.max(-9.5, Math.min(9.5, day.marketReturn * beta + themeExtra + noise)).toFixed(2));
  });
}

function feeProfileFor(record) {
  const category = normalizedCategory(record);
  const typeText = `${record.type || ""}${record.category || ""}`;
  const isIndexOrBond = category === "宽基指数" || category === "固收类" || /指数|债券/.test(typeText);
  const isActiveEquity = /主动|股票/.test(typeText) && !/指数/.test(typeText);
  const aPurchaseRate = isIndexOrBond ? .003 : isActiveEquity ? .008 : .005;
  const cServiceRate = isIndexOrBond ? .002 : .004;
  return {
    A:{ purchaseRate:aPurchaseRate, serviceRate:0, label:"前端申购费型" },
    C:{ purchaseRate:0, serviceRate:cServiceRate, label:"销售服务费型" },
    redemptionBands:[
      { maxDays:7, rate:.015, label:"少于 7 日" },
      { maxDays:30, rate:.01, label:"7—29 日" },
      { maxDays:180, rate:.005, label:"30—179 日" },
      { maxDays:Infinity, rate:0, label:"180 日及以上（教学假设）" }
    ]
  };
}

function availableShareClassesFor(record, source) {
  if (Array.isArray(record.shareClasses) && record.shareClasses.length) {
    return record.shareClasses.map(item => plainText(item, 12)).filter(Boolean);
  }
  if (source === "training") return ["A", "C"];
  const name = String(record.name || "");
  const type = String(record.type || "");
  const shareIdentity = `${name}${type}`;
  if (/ETF/i.test(shareIdentity) && !/联接/.test(shareIdentity)) return ["场内"];
  const suffix = name.match(/([ABCD])(?:类)?$/i)?.[1]?.toUpperCase();
  return suffix ? [suffix] : ["未区分"];
}

function decorateFund(record, source = "sample") {
  const category = normalizedCategory(record);
  const risk = riskLabel(record);
  const rawId = record.id || `fund-${record.code || stableNumber(record.name)}`;
  const id = String(rawId).replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 80);
  const tonePalettes = {
    "宽基指数":["blue", "lilac", "sand"],
    "行业主题":["rose", "peach", "lilac", "blue"],
    "固收类":["mint", "blue", "sand", "peach"],
    "另类资产":["peach", "lilac", "blue", "rose"]
  };
  const tonePalette = tonePalettes[category] || tonePalettes["宽基指数"];
  const generatedTone = tonePalette[stableNumber(record.code || record.name || id) % tonePalette.length];
  const result = {
    ...record,
    id,
    code:plainText(record.code || id, 32),
    name:plainText(record.name || "未命名基金", 80),
    company:plainText(record.company || (source === "training" ? "训练模型" : source === "custom" ? "用户导入" : "资料待补充"), 80),
    category,
    risk,
    tone:source === "training" && record.tone ? record.tone : generatedTone,
    type:plainText(record.type || category, 40),
    desc:plainText(record.desc || record.investmentCharacteristics || `${record.type || category}训练样本，基础资料来自离线数据文件。`, 220),
    lesson:plainText(record.lesson || (category === "行业主题" ? "练习行业集中与追涨控制" : category === "固收类" ? "练习资产配置与耐心" : category === "另类资产" ? "练习跨市场分散" : "练习长期持有与分散"), 100),
    baseNav:Number(record.baseNav || (1 + stableNumber(record.code || record.name) % 60 / 100)),
    source,
    inceptionDate:plainText(record.inceptionDate || "", 20) || null,
    availableShareClasses:availableShareClassesFor(record, source),
    feeDataStatus:source === "training" ? "training" : record.feeDataStatus === "provided" && record.feeProfile ? "provided" : "missing",
    feeProfile:record.feeProfile || feeProfileFor(record)
  };
  result.returns = simulatedReturnsFor(result);
  result.change = result.returns[0] || 0;
  return result;
}

funds = funds.map(item => decorateFund(item, "training"));

const beginnerLessons = [
  {
    title:"先分清哪笔钱能投资",
    question:"如果这笔钱下个月就要交房租，它适合拿去买基金吗？",
    explain:"不适合。基金会涨也会跌，急用的钱没有时间等待市场恢复。开始之前，先留下生活费和应急资金。",
    example:"你有 2 万元，但未来三个月需要 1.2 万元生活费。真正可以考虑长期投资的，不是全部 2 万元。",
    points:["先留出日常开支","准备应急资金","只用短期不会用到的钱训练"]
  },
  {
    title:"风险不是“勇敢值”",
    question:"第一次赚了钱，就说明自己可以投入更多、承担更大风险了吗？",
    explain:"不说明。一次盈利可能来自市场上涨或运气，并不能证明你已经理解风险。风险不是“敢不敢赚大钱”，而是坏结果发生时，它会不会破坏你的生活和目标。",
    example:"先投入 300 元赚了 30 元，于是把投入放大到 5,000 元。随后下跌 15%，损失 750 元。第一次盈利没有消失，但它让后一次决定变得更大胆。",
    riskLens:[
      { label:"心理感受", title:"我愿意亏多少？", copy:"这是你面对波动时的情绪反应。" },
      { label:"现实能力", title:"我实际亏得起多少？", copy:"由收入、开支、应急金和用钱时间决定。" },
      { label:"真实行为", title:"赚钱后我做了什么？", copy:"是否突然加大金额、集中热门基金或推翻规则。" }
    ],
    points:["愿意承担和有能力承担不是一回事","更高风险只带来更高的潜在回报，不保证赚更多","盈利后放大投入，也是一种需要记录的风险行为"]
  },
  {
    title:"基金到底是什么",
    question:"买基金，等于把钱直接交给某一家公司吗？",
    explain:"不是。基金是一种集合投资工具。它按照事先说明的规则，把钱投向股票、债券或其他资产。",
    example:"一只沪深300指数基金，会按照指数规则买入很多家公司，而不是只押注其中一家。",
    points:["基金里装着资产","不同基金装的东西不同","基金不等于保本"]
  },
  {
    title:"你的钱为什么会涨跌",
    question:"为什么今天投入 1,000 元，过几天可能不是 1,000 元？",
    explain:"基金持有的资产每天在变价，基金净值也会跟着变化。净值上涨，你持有的份额更值钱；净值下跌则相反。",
    example:"净值从 1.00 元涨到 1.05 元，大致上涨 5%；跌到 0.90 元，大致下跌 10%。",
    points:["份额记录你持有多少","净值表示每份值多少钱","短期涨跌无法预先保证"]
  },
  {
    title:"先分清基金类型",
    question:"货币基金、债券基金和股票基金，风险一样吗？",
    explain:"不一样。基金投资的资产不同，波动也不同。通常货币类较低、债券类居中、股票和行业主题类更高，但没有绝对不亏的类型。",
    example:"同样投入 1 万元，行业主题基金一天的变化可能明显大于纯债基金。",
    points:["先看基金投什么","不要只看名称","高收益通常伴随更大波动"]
  },
  {
    title:"怎么读懂一只基金",
    question:"看一只基金时，最重要的是近期涨幅和排行榜吗？",
    explain:"不是。先确认它要投什么、用什么策略、主要风险、费用和持仓，再判断它是否适合你的目标。近期涨幅只能说明过去发生了什么。",
    example:"两只名字里都有“成长”的基金，可能一只跟踪宽基指数，另一只集中投资科技行业，风险完全不同。",
    points:["先看投资目标和范围","检查主要持仓与集中度","比较费用、基准和长期一致性"]
  },
  {
    title:"怎么买、卖与付费",
    question:"点击买入以后，是不是立刻按屏幕上的数字成交？",
    explain:"场外基金通常按交易日、确认规则和当日净值计算，并非像普通商品立即交付。A、C 等字母通常代表不同收费安排，不是收益高低等级；B、D 等份额也没有全市场统一含义。",
    example:"A 类常见买入时收申购费、通常不收销售服务费；C 类常见不收申购费、按年计提销售服务费。持有很短时，两类还可能都有较高赎回费，因此不能只背“长期选 A、短期选 C”。",
    points:["认识交易日与确认日","字母不是收益等级","持有多久会改变费用","真实购买以该基金产品文件和平台费率为准"]
  },
  {
    title:"仓位、分散和定投怎么用",
    question:"分批投入和多买几只基金，就一定安全了吗？",
    explain:"不一定。仓位决定波动对账户影响多大；分散要看底层资产是否真的不同；定投只是分批执行，不能消除选错资产的风险。",
    example:"1 万元里投入 3,000 元，仓位是 30%。即使买了三只基金，如果都重仓同一个行业，也没有真正分散。",
    points:["仓位决定账户受到多大影响","分散要检查底层持仓是否重复","定投降低择时压力，但不保证盈利"]
  },
  {
    title:"怎样防止赚钱后失控",
    question:"连续赚了几次以后，为什么反而可能更危险？",
    explain:"盈利容易让人把市场上涨误认为自己的能力，于是提高金额、集中热门方向、缩短判断时间。规则的作用，是在兴奋时也限制行动。",
    example:"买入前写下：单次最多投入多少、分几次投入、什么情况才允许增加金额、哪些条件出现时重新评估。",
    points:["每次加大金额都记录原因","盈利不自动提高风险能力","用复盘修正规则，而不是用结果证明自己"]
  }
];

const ACCOUNT_KEY = "ftm-preview-account-v2";
const JOURNAL_KEY = "ftm-preview-journal-v2";
const SESSION_KEY = "ftm-preview-session-v2";
const ARCHIVE_KEY = "ftm-preview-session-archive-v3";
const RULES_KEY = "ftm-preview-rules-v2";
const CUSTOM_FUNDS_KEY = "ftm-preview-custom-funds-v1";

function createSessionId() {
  return `session-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function createAccount(initial = 100000) {
  return {
    initial,
    cash:initial,
    holdings:{},
    realizedProfit:0,
    history:[{ dayIndex:0, total:initial }]
  };
}

let dayIndex = Math.max(0, Math.min(days.length - 1, Number(localStorage.getItem("ftm-preview-market-day") || 0)));
let session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null") || {
  id:createSessionId(),
  status:"active",
  startedAt:new Date().toISOString(),
  completedAt:null,
  scenarioId:activeScenarioId
};
session.scenarioId = session.scenarioId || activeScenarioId;
activeScenarioId = session.scenarioId;
days = scenarioDays(scenarios.find(item => item.id === activeScenarioId) || scenarios[0]);
funds = funds.map(item => decorateFund(item, item.source || "training"));
let account = JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "null")
  || JSON.parse(localStorage.getItem("ftm-preview-account-v1") || "null")
  || createAccount();
account.realizedProfit = Number(account.realizedProfit || 0);
account.history = Array.isArray(account.history) && account.history.length
  ? account.history
  : [{ dayIndex, total:account.initial || 100000 }];

const legacyEntries = JSON.parse(localStorage.getItem(JOURNAL_KEY) || "null")
  || JSON.parse(localStorage.getItem("ftm-preview-journal") || "null")
  || [];
let entries = legacyEntries.filter(entry => entry.fundId).map(entry => {
  const inferredDayIndex = Number.isInteger(entry.dayIndex)
    ? entry.dayIndex
    : Math.max(0, days.findIndex(day => day.date === entry.day));
  const fund = funds.find(item => item.id === entry.fundId);
  const outcomeDayIndex = Number.isInteger(entry.outcomeDayIndex)
    ? entry.outcomeDayIndex
    : inferredDayIndex < dayIndex ? inferredDayIndex + 1 : null;
  return {
    ...entry,
    source:"user",
    sessionId:entry.sessionId || session.id,
    dayIndex:inferredDayIndex,
    outcomeDayIndex,
    result:outcomeDayIndex !== null && fund ? fund.returns[outcomeDayIndex] || 0 : null
  };
}).filter(entry => entry.sessionId === session.id);
let fundFilter = "全部";
let decision = "持有";
let mood = "平静";
let journalFilter = "全部";
let activeReviewEntryId = null;
let reviewChoice = "";
let academyLessonIndex = Number(localStorage.getItem("ftm-preview-academy-v3-current") || 0);
let academyCompleted = JSON.parse(localStorage.getItem("ftm-preview-academy-v3-completed") || "[]");
let onboardingStep = 1;
const storedProfile = JSON.parse(localStorage.getItem("ftm-preview-profile") || "null") || {};
const onboardingProfile = {
  experience: "",
  goal: "",
  liquidity: "",
  lossComfort: "",
  allocation: "",
  position: 0,
  ...storedProfile
};
let investmentRules = {
  maxAmount:1000,
  maxPosition:30,
  ...JSON.parse(localStorage.getItem(RULES_KEY) || "null")
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const builtInTrainingFunds = funds.slice();

function customFundRecords() {
  return JSON.parse(localStorage.getItem(CUSTOM_FUNDS_KEY) || "[]");
}

function mergeFundCatalog(sampleRecords = []) {
  const merged = new Map();
  [...builtInTrainingFunds, ...sampleRecords.map(item => decorateFund(item, "real-sample")), ...customFundRecords().map(item => decorateFund(item, "custom"))]
    .forEach(item => merged.set(item.code || item.id, item));
  funds = [...merged.values()].map(item => decorateFund(item, item.source));
}

function refreshFundSelectors() {
  const marketSelect = $("#training-fund");
  const strategySelect = $("#strategy-fund");
  const marketValue = marketSelect?.value;
  const strategyValue = strategySelect?.value;
  const options = funds.map(f => {
    const sourceNote = f.source === "real-sample" ? ` · ${f.code}（真实资料/模拟行情）` : "";
    return `<option value="${escapeHtml(f.id)}">${escapeHtml(f.name)}${escapeHtml(sourceNote)}</option>`;
  }).join("");
  if (marketSelect) {
    marketSelect.innerHTML = options;
    if (funds.some(item => item.id === marketValue)) marketSelect.value = marketValue;
  }
  if (strategySelect) {
    strategySelect.innerHTML = options;
    if (funds.some(item => item.id === strategyValue)) strategySelect.value = strategyValue;
  }
  if ($("#fund-library-count")) $("#fund-library-count").textContent = funds.length;
}

async function loadFundCatalog() {
  try {
    const response = await fetch("data/funds.json", { cache:"no-store" });
    if (!response.ok) throw new Error("基金数据文件读取失败");
    const payload = await response.json();
    mergeFundCatalog(Array.isArray(payload) ? payload : payload.funds || []);
  } catch (error) {
    mergeFundCatalog([]);
  }
  refreshFundSelectors();
  renderFunds();
  renderDay();
  renderStrategy();
}

function go(view) {
  $$(".app-view").forEach(section => section.hidden = section.id !== `view-${view}`);
  $$("[data-go]").forEach(button => button.classList.toggle("active", button.dataset.go === view));
  window.scrollTo({ top:0, behavior:"smooth" });
  if (view === "home") renderHome();
  if (view === "journal") renderJournal();
  if (view === "review") renderReview();
  if (view === "academy") renderAcademy();
  if (view === "strategy") renderStrategy();
}

$$("[data-go]").forEach(button => button.addEventListener("click", () => go(button.dataset.go)));

function fundPrice(fund, index = dayIndex) {
  let price = fund.baseNav;
  for (let i = 0; i <= index; i += 1) price *= 1 + (fund.returns[i] || 0) / 100;
  return price;
}

function saveAccount() {
  localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  localStorage.setItem("ftm-preview-market-day", dayIndex);
}

function saveEntries() {
  localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries));
}

function accountSnapshot(index = dayIndex) {
  const holdings = Object.entries(account.holdings).map(([fundId, holding]) => {
    const fund = funds.find(item => item.id === fundId);
    if (!fund) return null;
    const price = fundPrice(fund, index);
    const value = holding.units * price;
    return { fund, holding, price, value, profit:value - holding.cost };
  }).filter(item => item && item.holding.units > .000001);
  const holdingValue = holdings.reduce((sum, item) => sum + item.value, 0);
  const total = account.cash + holdingValue;
  return { holdings, holdingValue, total, profit:total - account.initial };
}

function recordAccountHistory() {
  const total = accountSnapshot().total;
  const existing = account.history.find(item => item.dayIndex === dayIndex);
  if (existing) existing.total = total;
  else account.history.push({ dayIndex, total });
  account.history.sort((a, b) => a.dayIndex - b.dayIndex);
}

function maxDrawdown() {
  let peak = account.initial;
  let max = 0;
  account.history.forEach(point => {
    peak = Math.max(peak, point.total);
    if (peak > 0) max = Math.max(max, (peak - point.total) / peak * 100);
  });
  return max;
}

function behaviorMetrics() {
  const resolved = entries.filter(entry => typeof entry.result === "number");
  const reviewed = resolved.filter(entry => entry.review);
  const calm = entries.filter(entry => entry.mood === "平静").length;
  const chase = entries.filter(entry => /上涨|错过|热门|追/.test(entry.reason)).length;
  const reviewRate = resolved.length ? Math.round(reviewed.length / resolved.length * 100) : 0;
  const calmRate = entries.length ? Math.round(calm / entries.length * 100) : 0;
  const plannedBuys = entries.filter(entry => entry.action === "买入" && entry.holdingPeriod && entry.declineResponse).length;
  const violations = entries.filter(entry => entry.ruleWarnings?.length).length;
  const score = Math.max(35, Math.min(95, 45 + Math.min(entries.length, 5) * 3 + reviewed.length * 8 + plannedBuys * 3 - chase * 4 - violations * 6));
  return { resolved, reviewed, calm, chase, reviewRate, calmRate, score };
}

function renderHome() {
  const snapshot = accountSnapshot();
  const returnRate = account.initial ? snapshot.profit / account.initial * 100 : 0;
  const metrics = behaviorMetrics();
  const archive = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || "[]");
  const completedLessons = academyCompleted.length;
  const experience = Math.min(500, completedLessons * 8 + entries.length * 12 + metrics.reviewed.length * 18 + archive.length * 40);
  const level = Math.min(4, Math.floor(experience / 125) + 1);
  const levelNames = ["投资观察者", "市场体验者", "纪律练习者", "策略形成者"];
  const levelStart = (level - 1) * 125;
  const levelEnd = level * 125;
  const levelProgress = level === 4 ? 100 : (experience - levelStart) / 125 * 100;

  $("#home-account-total").textContent = `¥ ${snapshot.total.toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#home-account-return").textContent = `本轮 ${returnRate >= 0 ? "+" : ""}${returnRate.toFixed(2)}%`;
  $("#home-account-return").className = returnRate >= 0 ? "gain" : "loss";
  $("#home-training-days").textContent = `${dayIndex + 1} / ${days.length} 天`;
  $("#home-skill-score").textContent = metrics.score;
  $("#home-score-note").textContent = entries.length ? `来自 ${entries.length} 次训练决定，仅衡量记录与纪律` : "从第一笔训练记录开始计算";
  $("#home-round-count").textContent = archive.length;
  $("#home-round-note").textContent = session.status === "completed" ? "本轮已经完成" : `当前进行到第 ${dayIndex + 1} 天`;
  $("#home-review-rate").textContent = metrics.reviewRate;
  $("#home-review-note").textContent = metrics.resolved.length ? `${metrics.reviewed.length} / ${metrics.resolved.length} 条已复盘` : "等待产生可复盘记录";
  $("#home-task-title").textContent = session.status === "completed" ? "查看本轮训练报告" : days[dayIndex].title;
  $("#home-task-copy").textContent = session.status === "completed"
    ? "这一轮已经结束，先复盘行为，再决定下一轮要训练什么。"
    : days[dayIndex].detail;
  $("#home-task-count").textContent = `${String(dayIndex + 1).padStart(2, "0")} / ${String(days.length).padStart(2, "0")}`;
  $("#home-task-progress").style.width = `${(dayIndex + 1) / days.length * 100}%`;
  $("#home-level-title").textContent = `Lv.${level} ${levelNames[level - 1]}`;
  $("#home-level-badge").textContent = level;
  $("#home-level-copy").textContent = entries.length
    ? `你已经留下 ${entries.length} 次决定，并完成 ${metrics.reviewed.length} 次复盘。`
    : "先完成学习、决策和复盘，让每一步都有记录。";
  $("#home-exp-current").textContent = level === 4 ? `${experience} 经验` : `${experience} / ${levelEnd} 经验`;
  $("#home-exp-left").textContent = level === 4 ? "当前最高等级" : `还差 ${Math.max(0, levelEnd - experience)}`;
  $("#home-level-progress").style.width = `${Math.max(0, Math.min(100, levelProgress))}%`;
  const streakButtons = $$(".streak");
  streakButtons.forEach(button => {
    const count = Math.max(1, new Set(entries.map(entry => entry.dayIndex)).size);
    button.innerHTML = `<span>✦</span><b>${count}</b> 天训练`;
  });
}

function renderAccount() {
  const snapshot = accountSnapshot();
  const position = snapshot.total ? snapshot.holdingValue / snapshot.total * 100 : 0;
  $("#account-total").textContent = `¥${snapshot.total.toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#account-cash").textContent = `¥${account.cash.toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#account-position").textContent = `${position < 10 ? position.toFixed(1) : position.toFixed(0)}%`;
  $("#account-holding-value").textContent = `¥${snapshot.holdingValue.toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#account-profit").textContent = `${snapshot.profit >= 0 ? "+" : "-"}¥${Math.abs(snapshot.profit).toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#account-profit").className = snapshot.profit >= 0 ? "gain" : "loss";
  $("#account-donut").style.background = `conic-gradient(#97bfd9 ${position}%, rgba(255,255,255,.72) 0)`;
  $("#holdings-count").textContent = `${snapshot.holdings.length} 只基金`;
  $("#holdings-list").innerHTML = snapshot.holdings.length ? snapshot.holdings.map(item => {
    const todayReturn = item.fund.returns[dayIndex] || 0;
    const profitRate = item.holding.cost ? item.profit / item.holding.cost * 100 : 0;
    return `<article class="holding-row">
      <div class="holding-name"><span class="fund-symbol ${item.fund.tone}">${item.fund.name.slice(0,1)}</span><div><strong>${item.fund.name}</strong><small>${item.holding.shareClass ? `${item.holding.shareClass} 类份额` : "历史记录未区分份额"} · 成本 ¥${item.holding.cost.toLocaleString("zh-CN", { maximumFractionDigits:0 })}</small></div></div>
      <strong>¥${item.value.toLocaleString("zh-CN", { maximumFractionDigits:0 })}</strong>
      <span class="${todayReturn >= 0 ? "gain" : "loss"}">${todayReturn >= 0 ? "+" : ""}${todayReturn.toFixed(2)}%</span>
      <span class="${profitRate >= 0 ? "gain" : "loss"}">${profitRate >= 0 ? "+" : ""}${profitRate.toFixed(2)}%</span>
      <button data-trade-holding="${item.fund.id}">操作</button>
    </article>`;
  }).join("") : `<div class="holdings-empty"><strong>还没有持仓</strong><p>从右侧选择基金并买入后，每只基金会单独显示在这里。</p></div>`;

  $$("[data-trade-holding]").forEach(button => button.addEventListener("click", () => {
    $("#training-fund").value = button.dataset.tradeHolding;
    decision = "卖出";
    $$("[data-decision]").forEach(item => item.classList.toggle("active", item.dataset.decision === "卖出"));
    updateTradeForm();
  }));
}

function openOnboarding() {
  onboardingStep = 1;
  $("#onboarding-layer").hidden = false;
  renderOnboarding();
}

function closeOnboarding(markSeen = true) {
  $("#onboarding-layer").hidden = true;
  if (markSeen) localStorage.setItem("ftm-preview-onboarding-v5-seen", "1");
}

function renderOnboarding() {
  $$("[data-onboarding-step]").forEach(step => {
    step.hidden = Number(step.dataset.onboardingStep) !== onboardingStep;
  });
  $$("[data-step-dot]").forEach(dot => {
    dot.classList.toggle("active", Number(dot.dataset.stepDot) <= onboardingStep);
  });
  $("#onboarding-back").hidden = onboardingStep === 1;

  if (onboardingStep === 1) {
    $("#onboarding-next").textContent = "下一步 →";
    $("#onboarding-next").disabled = !(onboardingProfile.experience && onboardingProfile.goal);
    $("#onboarding-hint").textContent = $("#onboarding-next").disabled ? "完成两项选择后继续" : "选择已完成";
  } else if (onboardingStep === 2) {
    $("#onboarding-next").textContent = "我看懂了，试一次 →";
    $("#onboarding-next").disabled = false;
    $("#onboarding-hint").textContent = "不需要背下来，训练中可以随时查看解释";
  } else if (onboardingStep === 3) {
    $("#onboarding-next").textContent = "生成第一次训练方案 →";
    $("#onboarding-next").disabled = !(onboardingProfile.liquidity && onboardingProfile.lossComfort && onboardingProfile.allocation);
    $("#onboarding-hint").textContent = $("#onboarding-next").disabled ? "先回答两个问题，系统会给出小额体验起点" : "体验金额可以自由调整";
  } else {
    const needsBasics = onboardingProfile.experience === "刚开始了解" || onboardingProfile.goal === "认识基金";
    $("#onboarding-result-title").textContent = needsBasics ? "先学基础，再进入市场。" : "你的第一次训练已经准备好。";
    $("#onboarding-result-copy").textContent = needsBasics
      ? "这里只完成了入门说明，不代表已经学会基金理财。系统会先带你完成八节基础课。"
      : "这只是训练起点，不是给你贴标签。画像会随着之后的日志和复盘持续变化。";
    $("#onboarding-next").textContent = needsBasics ? "进入新手学院 →" : "进入第一次训练 →";
    $("#onboarding-next").disabled = false;
    $("#onboarding-hint").textContent = "画像会随训练持续变化";
    renderStarterProfile();
  }
}

function renderStarterProfile() {
  let profileName = "基础学习起点";
  let symbol = "学";
  let summary = "先理解基金和风险，再进入第一次市场训练。";
  let recommended = funds[0];
  let reason = "标的较分散，适合练习第一次分批买入。";

  if (onboardingProfile.lossComfort === "很难受" || onboardingProfile.liquidity !== "没有") {
    profileName = "小额体验起点";
    symbol = "小";
    summary = "先确认哪些钱能使用，再用很小的模拟金额熟悉波动。";
    recommended = funds.find(f => f.id === "bond");
    reason = "波动相对较低，适合先练习资产配置与耐心持有。";
  } else if (onboardingProfile.goal === "测试策略" && onboardingProfile.experience === "有持续投资经验") {
    profileName = "策略验证起点";
    symbol = "策";
    summary = "愿意形成明确规则，也需要检验规则在波动中能否执行。";
    recommended = funds.find(f => f.id === "csi500");
    reason = "波动更明显，适合检验仓位规则和策略执行稳定性。";
  } else if (onboardingProfile.goal === "控制情绪") {
    profileName = "行为训练起点";
    symbol = "律";
    summary = "已经意识到情绪影响，接下来重点训练计划执行。";
    recommended = funds[0];
    reason = "分散度较高，方便把注意力放在行为而不是猜板块上。";
  }

  $("#profile-symbol").textContent = symbol;
  $("#profile-name").textContent = profileName;
  $("#profile-summary").textContent = summary;
  $("#summary-position").textContent = `¥${Number(onboardingProfile.allocation || 100).toLocaleString()}`;
  $("#summary-reaction").textContent = onboardingProfile.lossComfort || "尚未选择";
  $("#recommended-symbol").textContent = recommended.name.slice(0, 1);
  $("#recommended-symbol").className = `fund-symbol ${recommended.tone}`;
  $("#recommended-fund").textContent = recommended.name;
  $("#recommended-reason").textContent = reason;
  $("#training-fund").value = recommended.id;

  localStorage.setItem("ftm-preview-profile", JSON.stringify({
    ...onboardingProfile,
    name: profileName,
    recommendedFund: recommended.name
  }));
}

$$("[data-profile-choice]").forEach(button => button.addEventListener("click", () => {
  const key = button.dataset.profileChoice;
  onboardingProfile[key] = button.dataset.value;
  $$(`[data-profile-choice="${key}"]`).forEach(item => item.classList.toggle("selected", item === button));
  if (key === "liquidity" || key === "lossComfort") updateGuidedAmount();
  renderOnboarding();
}));

function setGuidedAmount(amount) {
  const safeAmount = Math.max(50, Math.min(1000, Number(amount)));
  onboardingProfile.allocation = safeAmount;
  onboardingProfile.position = safeAmount / 100;
  $("#guided-amount-range").value = safeAmount;
  $("#guided-amount-output").textContent = safeAmount.toLocaleString();
  $("#practice-position").textContent = `${onboardingProfile.position.toFixed(onboardingProfile.position % 1 ? 1 : 0)}% 仓位`;
  $("#practice-impact").textContent = `总资金约减少 ¥${(safeAmount * 0.1).toFixed(0)}`;
}

function updateGuidedAmount() {
  if (!(onboardingProfile.liquidity && onboardingProfile.lossComfort)) return;
  let amount = 300;
  let reason = "先用几百元熟悉完整流程，注意力放在理解和记录，而不是赚钱。";
  if (onboardingProfile.liquidity !== "没有" || onboardingProfile.lossComfort === "很难受") {
    amount = 100;
    reason = "你可能有近期用钱需求，或对小额亏损比较敏感。先用很小的模拟金额体验，不急着承担更多波动。";
  } else if (onboardingProfile.lossComfort === "能接受") {
    amount = 500;
    reason = "你对小额波动相对从容，但第一次仍建议把重点放在熟悉流程，而不是放大投入。";
  }
  $("#guided-amount").hidden = false;
  $("#guided-amount-reason").textContent = reason;
  setGuidedAmount(amount);
}

$("#guided-amount-range").addEventListener("input", event => {
  setGuidedAmount(event.target.value);
  renderOnboarding();
});

$("#onboarding-next").addEventListener("click", () => {
  if (onboardingStep < 4) {
    onboardingStep += 1;
    renderOnboarding();
    return;
  }
  closeOnboarding(true);
  const needsBasics = onboardingProfile.experience === "刚开始了解" || onboardingProfile.goal === "认识基金";
  go(needsBasics ? "academy" : "market");
  showToast(needsBasics ? "先完成基础课，再开始市场训练" : "欢迎进入第一次市场训练");
});

$("#onboarding-back").addEventListener("click", () => {
  onboardingStep = Math.max(1, onboardingStep - 1);
  renderOnboarding();
});

$("#onboarding-skip").addEventListener("click", () => closeOnboarding(true));
$(".profile").addEventListener("click", openOnboarding);

function renderLessonInteraction(index) {
  const box = $("#lesson-interaction");
  const interactions = [
    `<span class="interaction-label">小任务 · 选出更适合投资训练的钱</span>
     <div class="interaction-options"><button data-mini-answer="no">下个月房租 ¥3,000</button><button data-mini-answer="no">应急备用金 ¥5,000</button><button data-mini-answer="yes">三年内不用的闲钱 ¥2,000</button></div>
     <p class="interaction-feedback">先做选择，再看解释。</p>`,
    `<span class="interaction-label">小任务 · 连续盈利后，你会把下一笔提高到多少？</span>
     <div class="profit-path"><span>第一次投入 ¥300</span><b>赚了 ¥30</b><span>第二次又赚了</span></div>
     <div class="interaction-options"><button data-risk-bet="300">保持 ¥300</button><button data-risk-bet="1000">增加到 ¥1,000</button><button data-risk-bet="5000">增加到 ¥5,000</button></div>
     <p class="interaction-feedback">选择后，市场将出现一次 15% 的下跌。</p>`,
    `<span class="interaction-label">小任务 · 组装一个基金篮子</span>
     <div class="interaction-options asset-options"><button data-asset="股票">公司股票</button><button data-asset="债券">债券</button><button data-asset="现金">短期现金工具</button></div>
     <p class="interaction-feedback">点击资产加入篮子。基金里装什么，决定了它主要面对什么风险。</p>`,
    `<span class="interaction-label">小任务 · 拖动净值，看 1,000 份基金值多少钱</span>
     <div class="mini-slider"><input id="nav-practice" type="range" min="80" max="120" value="100"><div><span>每份净值 <b id="nav-value">¥1.00</b></span><strong id="nav-total">总价值 ¥1,000</strong></div></div>`,
    `<span class="interaction-label">小任务 · 哪一种通常波动更明显？</span>
     <div class="interaction-options"><button data-mini-answer="no">纯债基金</button><button data-mini-answer="no">宽基股票基金</button><button data-mini-answer="yes">单一行业主题基金</button></div>
     <p class="interaction-feedback">先根据“它主要投什么”来判断。</p>`,
    `<span class="interaction-label">小任务 · 找出看基金时更重要的信息</span>
     <div class="info-hunt"><button data-info-useful="yes">投资目标与范围</button><button data-info-useful="no">近7天排行榜</button><button data-info-useful="yes">主要持仓</button><button data-info-useful="yes">费用</button><button data-info-useful="yes">风险与业绩基准</button></div>
     <p class="interaction-feedback">已找到 <b id="info-found">0</b> / 4 项重要信息。</p>`,
    `<span class="interaction-label">小任务 · 同样投入 ¥1,000，持有时间会怎样改变费用？</span>
     <div class="interaction-options"><button data-fee-horizon="20">约 20 天</button><button data-fee-horizon="180">约半年</button><button data-fee-horizon="540">一年以上</button></div>
     <div class="academy-fee-result">
       <article><span>A 类教学估算</span><strong id="academy-fee-a">先选择持有时间</strong></article>
       <article><span>C 类教学估算</span><strong id="academy-fee-c">先选择持有时间</strong></article>
     </div>
     <p class="interaction-feedback">这里用简化费率帮助理解：A 类示例申购费 0.3%，C 类示例销售服务费每年 0.2%；两类赎回费随持有时间变化。真实基金必须看产品文件。</p>`,
    `<span class="interaction-label">小任务 · 调整仓位，观察一次下跌的影响</span>
     <div class="mini-slider"><input id="position-practice" type="range" min="5" max="100" step="5" value="20"><div><span>基金仓位 <b id="position-practice-value">20%</b></span><strong id="position-loss">基金跌 20%，总账户约跌 4%</strong></div></div>`,
    `<span class="interaction-label">小任务 · 写下“盈利后也不能突破”的规则</span>
     <div class="rule-builder"><label>单次投入最多 <input id="rule-amount" type="number" value="300"> 元</label><label>只有当 <input id="rule-condition" value="完成复盘并仍符合长期计划"> 时，才允许增加金额</label><button id="save-first-rule">保存我的第一条规则</button></div>
     <p class="interaction-feedback" id="rule-feedback">规则应该约束兴奋时的你，而不只是安慰下跌时的你。</p>`
  ];

  box.innerHTML = interactions[index] || "";

  $$("[data-mini-answer]").forEach(button => button.addEventListener("click", () => {
    const correct = button.dataset.miniAnswer === "yes";
    box.querySelectorAll("[data-mini-answer]").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    box.querySelector(".interaction-feedback").textContent = correct
      ? "✓ 对。先看用途和时间，再谈收益。"
      : "再想想：这笔钱如果很快要用，就没有时间等待市场恢复。";
  }));

  $$("[data-risk-bet]").forEach(button => button.addEventListener("click", () => {
    const amount = Number(button.dataset.riskBet);
    box.querySelectorAll("[data-risk-bet]").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    box.querySelector(".interaction-feedback").innerHTML = `随后下跌 15%，这笔投入暂时损失 <b>¥${amount * .15}</b>。前两次盈利没有证明你能承受这次损失。`;
  }));

  $$("[data-fee-horizon]").forEach(button => button.addEventListener("click", () => {
    const days = Number(button.dataset.feeHorizon);
    const amount = 1000;
    const redemptionRate = days < 7 ? .015 : days < 30 ? .01 : days < 180 ? .005 : 0;
    const redemptionFee = amount * redemptionRate;
    const aFee = amount * .003 + redemptionFee;
    const cFee = amount * .002 * Math.min(days, 365) / 365 + redemptionFee;
    box.querySelectorAll("[data-fee-horizon]").forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    $("#academy-fee-a").textContent = `约 ¥${aFee.toFixed(2)}`;
    $("#academy-fee-c").textContent = `约 ¥${cFee.toFixed(2)}`;
    const lower = Math.abs(aFee - cFee) < .01 ? "两者接近" : aFee < cFee ? "这个示例里 A 类较低" : "这个示例里 C 类较低";
    box.querySelector(".interaction-feedback").textContent =
      `${lower}。但这不是通用选基口诀：不同基金费率、平台折扣和赎回规则不同，真实购买前要查看该基金资料。`;
  }));

  let selectedAssets = [];
  $$("[data-asset]").forEach(button => button.addEventListener("click", () => {
    button.classList.toggle("selected");
    selectedAssets = $$("[data-asset].selected").map(item => item.dataset.asset);
    box.querySelector(".interaction-feedback").textContent = selectedAssets.length
      ? `篮子里已有 ${selectedAssets.length} 类资产：${selectedAssets.join("、")}。底层资产变化会传递到基金净值。`
      : "点击资产加入篮子。基金里装什么，决定了它主要面对什么风险。";
  }));

  const navPractice = $("#nav-practice");
  if (navPractice) navPractice.addEventListener("input", event => {
    const nav = Number(event.target.value) / 100;
    $("#nav-value").textContent = `¥${nav.toFixed(2)}`;
    $("#nav-total").textContent = `总价值 ¥${(nav * 1000).toLocaleString()}`;
  });

  let usefulFound = new Set();
  $$("[data-info-useful]").forEach(button => button.addEventListener("click", () => {
    button.classList.toggle("selected");
    if (button.dataset.infoUseful === "yes") {
      button.classList.contains("selected") ? usefulFound.add(button.textContent) : usefulFound.delete(button.textContent);
    }
    $("#info-found").textContent = usefulFound.size;
    box.querySelector(".interaction-feedback").lastChild.textContent = usefulFound.size === 4 ? " / 4 项重要信息。完成！" : " / 4 项重要信息。";
  }));

  const positionPractice = $("#position-practice");
  if (positionPractice) positionPractice.addEventListener("input", event => {
    const value = Number(event.target.value);
    $("#position-practice-value").textContent = `${value}%`;
    $("#position-loss").textContent = `基金跌 20%，总账户约跌 ${(value * .2).toFixed(0)}%`;
  });

  const saveRule = $("#save-first-rule");
  if (saveRule) saveRule.addEventListener("click", () => {
    const rule = `单次最多投入 ¥${$("#rule-amount").value}；只有当${$("#rule-condition").value}时才增加金额。`;
    localStorage.setItem("ftm-preview-first-rule", rule);
    $("#rule-feedback").textContent = `✓ 已保存：${rule}`;
  });
}

function renderAcademy() {
  academyLessonIndex = Math.max(0, Math.min(beginnerLessons.length - 1, academyLessonIndex));
  const lesson = beginnerLessons[academyLessonIndex];
  const completedCount = academyCompleted.length;

  $("#academy-progress-count").textContent = `${completedCount} / ${beginnerLessons.length}`;
  $("#academy-progress-bar").style.width = `${completedCount / beginnerLessons.length * 100}%`;
  $("#academy-lesson-list").innerHTML = beginnerLessons.map((item, index) => `
    <button class="academy-lesson-link ${index === academyLessonIndex ? "active" : ""} ${academyCompleted.includes(index) ? "complete" : ""}" data-academy-lesson="${index}">
      <span>${academyCompleted.includes(index) ? "✓" : String(index + 1).padStart(2, "0")}</span>
      <div><strong>${item.title}</strong><small>${academyCompleted.includes(index) ? "已完成" : index === academyLessonIndex ? "正在学习" : "约 3 分钟"}</small></div>
    </button>`).join("");

  $("#lesson-order").textContent = `LESSON ${String(academyLessonIndex + 1).padStart(2, "0")}`;
  $("#lesson-title").textContent = lesson.title;
  $("#lesson-question").textContent = lesson.question;
  $("#lesson-explain").textContent = lesson.explain;
  $("#lesson-example").textContent = lesson.example;
  const special = $("#lesson-special");
  if (lesson.riskLens) {
    special.hidden = false;
    special.innerHTML = `<span class="lesson-special-title">风险要分开看</span><div>${lesson.riskLens.map(item => `
      <article><small>${item.label}</small><strong>${item.title}</strong><p>${item.copy}</p></article>`).join("")}</div>`;
  } else {
    special.hidden = true;
    special.innerHTML = "";
  }
  renderLessonInteraction(academyLessonIndex);
  $("#lesson-takeaways").innerHTML = `<span>这一课学会</span>${lesson.points.map(point => `<p>✓ ${point}</p>`).join("")}`;
  $("#lesson-prev").disabled = academyLessonIndex === 0;
  $("#lesson-complete").textContent = academyLessonIndex === beginnerLessons.length - 1 ? "完成基础课，开始模拟 →" : "学懂了，进入下一课 →";

  $$("[data-academy-lesson]").forEach(button => button.addEventListener("click", () => {
    academyLessonIndex = Number(button.dataset.academyLesson);
    localStorage.setItem("ftm-preview-academy-v3-current", academyLessonIndex);
    renderAcademy();
  }));
}

$("#lesson-prev").addEventListener("click", () => {
  academyLessonIndex = Math.max(0, academyLessonIndex - 1);
  localStorage.setItem("ftm-preview-academy-v3-current", academyLessonIndex);
  renderAcademy();
});

$("#lesson-complete").addEventListener("click", () => {
  if (!academyCompleted.includes(academyLessonIndex)) {
    academyCompleted.push(academyLessonIndex);
    academyCompleted.sort((a, b) => a - b);
    localStorage.setItem("ftm-preview-academy-v3-completed", JSON.stringify(academyCompleted));
  }
  if (academyLessonIndex === beginnerLessons.length - 1) {
    showToast("基础课已完成，现在进入第一次模拟训练");
    go("market");
    return;
  }
  academyLessonIndex += 1;
  localStorage.setItem("ftm-preview-academy-v3-current", academyLessonIndex);
  renderAcademy();
});

function renderFunds() {
  const query = $("#fund-search").value.trim().toLowerCase();
  const visible = funds.filter(f => (fundFilter === "全部" || f.category === fundFilter) && `${f.name}${f.code}${f.category}${f.company || ""}${f.type || ""}`.toLowerCase().includes(query));
  $("#fund-grid").innerHTML = visible.map(f => {
    const currentReturn = f.returns[dayIndex] || 0;
    const shareCopy = f.availableShareClasses.join("/");
    const feeLine = f.feeDataStatus === "training"
      ? `<div class="fund-fee-line"><span>A 类</span><b>申购费教学示例 ${(f.feeProfile.A.purchaseRate * 100).toFixed(2)}%</b><span>C 类</span><b>服务费教学示例 ${(f.feeProfile.C.serviceRate * 100).toFixed(2)}%/年</b></div>`
      : `<div class="fund-fee-line pending"><span>已收录份额</span><b>${escapeHtml(shareCopy)}</b><span>真实费用</span><b>待接产品资料，不生成其他份额</b></div>`;
    return `
    <article class="fund-card glass ${f.tone}">
      <div class="fund-top"><span class="fund-symbol ${f.tone}">${escapeHtml(f.name.slice(0,1))}</span><div><span class="tag">${escapeHtml(f.category)}</span><span class="tag ${f.risk === "高风险" ? "rose" : f.risk === "低风险" ? "mint" : "lilac"}">${escapeHtml(f.risk)}</span></div></div>
      <h3>${escapeHtml(f.name)}</h3><span class="fund-code">${escapeHtml(f.code)}${f.company ? ` · ${escapeHtml(f.company)}` : ""}</span><p>${escapeHtml(f.desc)}</p>
      <div class="fund-meta"><span>${escapeHtml(f.type || "训练标的")}</span><span>${f.inceptionDate ? `成立 ${escapeHtml(f.inceptionDate)}` : f.source === "training" ? "虚拟训练标的" : "成立日期待补充"}</span></div>
      ${f.source === "training" ? "" : `<div class="simulation-source-note">真实基金基础资料 · 当前涨跌为离线模拟，不是历史净值</div>`}
      ${feeLine}
      <div class="lesson-line"><span>本标的训练重点</span><strong>${escapeHtml(f.lesson)}</strong></div>
      <div class="fund-bottom"><span class="${currentReturn >= 0 ? "gain" : "loss"}">模拟第 ${dayIndex + 1} 天 ${currentReturn >= 0 ? "+" : ""}${currentReturn.toFixed(2)}%</span><button data-train="${escapeHtml(f.id)}">用它训练 →</button></div>
    </article>`;
  }).join("");
  if (!visible.length) $("#fund-grid").innerHTML = `<div class="journal-no-result glass"><strong>没有找到匹配基金</strong><p>换一个关键词或分类，也可以在下方导入自己的基金基础资料。</p></div>`;
  $$("[data-train]").forEach(button => button.addEventListener("click", () => {
    $("#training-fund").value = button.dataset.train;
    go("market");
    updateTradeForm();
  }));
}

$("#fund-search").addEventListener("input", renderFunds);
$$("[data-filter]").forEach(button => button.addEventListener("click", () => {
  fundFilter = button.dataset.filter;
  $$("[data-filter]").forEach(item => item.classList.toggle("active", item === button));
  renderFunds();
}));

refreshFundSelectors();
renderFunds();

function parseCsvFunds(text) {
  const parseLine = line => {
    const values = [];
    let value = "";
    let quoted = false;
    for (let index = 0; index < line.length; index += 1) {
      const character = line[index];
      if (character === '"') {
        if (quoted && line[index + 1] === '"') {
          value += '"';
          index += 1;
        } else {
          quoted = !quoted;
        }
      } else if (character === "," && !quoted) {
        values.push(value.trim());
        value = "";
      } else {
        value += character;
      }
    }
    values.push(value.trim());
    return values;
  };
  const lines = text.replace(/^\ufeff/, "").split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = parseLine(lines[0]);
  return lines.slice(1).map(line => {
    const values = parseLine(line);
    const row = {};
    headers.forEach((header, index) => row[header] = values[index] || "");
    return {
      code:row.code || row.fund_code || row.基金代码,
      name:row.name || row.fund_name || row.基金名称,
      company:row.company || row.fund_company || row.基金公司,
      type:row.type || row.fund_type || row.基金类型,
      category:row.category || row.fund_category || row.分类,
      classificationTags:(row.classificationTags || row.classification_tags || row.分类标签 || "").split("|").filter(Boolean),
      investmentDirection:row.investmentDirection || row.investment_direction || row.投资方向,
      investmentCharacteristics:row.investmentCharacteristics || row.investment_characteristics || row.投资特点,
      suitableFor:row.suitableFor || row.suitable_for || row.适合人群,
      riskLevel:row.riskLevel || row.risk_level || row.风险等级,
      riskSource:row.riskSource || row.risk_source || row.风险来源,
      inceptionDate:row.inceptionDate || row.inception_date || row.成立日期
    };
  }).filter(item => item.code && item.name);
}

$("#import-funds").addEventListener("click", async () => {
  const file = $("#fund-import-file").files?.[0];
  if (!file) return showToast("请先选择 JSON 或 CSV 文件");
  try {
    const text = await file.text();
    const parsed = file.name.toLowerCase().endsWith(".json") ? JSON.parse(text) : parseCsvFunds(text);
    const records = Array.isArray(parsed) ? parsed : parsed.funds || [];
    const valid = records.filter(item => (item.code || item.fund_code || item.基金代码) && (item.name || item.fund_name || item.基金名称)).map(item => ({
      code:item.code || item.fund_code || item.基金代码,
      name:item.name || item.fund_name || item.基金名称,
      company:item.company || item.fund_company || item.基金公司 || "用户导入",
      type:item.type || item.fund_type || item.基金类型 || "未分类",
      category:item.category || item.fund_category || item.分类 || "",
      classificationTags:item.classificationTags || item.classification_tags || item.分类标签 || [],
      investmentDirection:item.investmentDirection || item.investment_direction || item.投资方向 || "",
      investmentCharacteristics:item.investmentCharacteristics || item.investment_characteristics || item.投资特点 || "",
      suitableFor:item.suitableFor || item.suitable_for || item.适合人群 || "",
      riskLevel:item.riskLevel || item.risk_level || item.风险等级 || "中风险",
      riskSource:item.riskSource || item.risk_source || item.风险来源 || "",
      inceptionDate:item.inceptionDate || item.inception_date || item.成立日期 || null
    }));
    localStorage.setItem(CUSTOM_FUNDS_KEY, JSON.stringify(valid));
    $("#fund-import-status").textContent = `已导入 ${valid.length} 只基金`;
    await loadFundCatalog();
    showToast(`已导入 ${valid.length} 只基金基础资料`);
  } catch (error) {
    $("#fund-import-status").textContent = "导入失败，请检查文件格式";
    showToast("导入失败，请使用模板字段");
  }
});

$("#reset-imported-funds").addEventListener("click", async () => {
  localStorage.removeItem(CUSTOM_FUNDS_KEY);
  $("#fund-import-status").textContent = "自定义基金已清除";
  await loadFundCatalog();
});

function activeScenario() {
  return scenarios.find(item => item.id === activeScenarioId) || scenarios[0];
}

function applyScenario(id) {
  activeScenarioId = id;
  localStorage.setItem("ftm-preview-scenario", id);
  days = scenarioDays(activeScenario());
  funds = funds.map(item => decorateFund(item, item.source));
  dayIndex = 0;
}

$("#scenario-select").innerHTML = scenarios.map(item => `<option value="${item.id}">${item.name}</option>`).join("");
$("#scenario-select").value = activeScenarioId;
$("#scenario-copy").textContent = activeScenario().copy;
$("#scenario-select").addEventListener("change", event => {
  if (entries.length && !window.confirm("切换剧本会结束并保存当前训练轮次，再开启新剧本。确定切换吗？")) {
    event.target.value = activeScenarioId;
    return;
  }
  if (entries.length) {
    session.status = "completed";
    session.completedAt = new Date().toISOString();
    archiveCurrentSession();
  }
  applyScenario(event.target.value);
  startNewSession();
  $("#scenario-copy").textContent = activeScenario().copy;
  showToast("已切换到新的未知市场剧本");
});

function renderRules() {
  $("#rule-max-amount").value = investmentRules.maxAmount;
  $("#rule-max-position").value = investmentRules.maxPosition;
  $("#active-rule-summary").textContent = `单次投入不超过 ¥${Number(investmentRules.maxAmount).toLocaleString()}；单只基金不超过总资产 ${investmentRules.maxPosition}%`;
}

$("#edit-rules").addEventListener("click", () => {
  $("#rule-editor").hidden = !$("#rule-editor").hidden;
});

$("#save-rules").addEventListener("click", () => {
  investmentRules = {
    maxAmount:Math.max(50, Number($("#rule-max-amount").value || 1000)),
    maxPosition:Math.max(5, Math.min(100, Number($("#rule-max-position").value || 30)))
  };
  localStorage.setItem(RULES_KEY, JSON.stringify(investmentRules));
  renderRules();
  $("#rule-editor").hidden = true;
  showToast("本轮投资规则已保存");
});

function renderDay() {
  dayIndex = Math.max(0, Math.min(days.length - 1, dayIndex));
  const day = days[dayIndex];
  $("#market-progress").textContent = `训练进度 ${dayIndex + 1} / ${days.length}`;
  $("#market-date").textContent = day.date;
  $("#market-index").textContent = day.index;
  $("#market-index").className = day.index.startsWith("+") ? "gain" : "loss";
  $("#market-temp").textContent = `${day.temp}°`;
  $("#temp-bar").style.width = `${day.temp}%`;
  $("#market-mood").textContent = day.mood;
  $("#event-title").textContent = day.title;
  $("#event-detail").textContent = day.detail;
  $("#scenario-select").value = activeScenarioId;
  $("#scenario-copy").textContent = activeScenario().copy;
  $("#prev-day").disabled = true;
  $("#prev-day").title = "历史决定请到投资日志中查看，避免回到过去修改答案";
  const isFinalDay = dayIndex === days.length - 1;
  $("#next-day").disabled = isFinalDay || session.status === "completed";
  $("#finish-day").disabled = session.status === "completed";
  $("#finish-day").textContent = isFinalDay ? "结束本轮，查看训练报告 →" : "完成今天，进入下一交易日 →";
  $("#save-decision").disabled = session.status === "completed";
  $("#end-session").disabled = session.status === "completed";
  $("#session-summary").hidden = session.status !== "completed";
  $("#save-message").hidden = true;
  recordAccountHistory();
  renderAccount();
  renderFunds();
  renderHome();
  renderRules();
  if (session.status === "completed") renderSessionSummary();
  updateTradeForm();
  saveAccount();
}

function resolvePendingOutcomes(nextDayIndex) {
  entries.forEach(entry => {
    if (entry.sessionId !== session.id || entry.result !== null || entry.dayIndex >= nextDayIndex) return;
    const fund = funds.find(item => item.id === entry.fundId);
    entry.outcomeDayIndex = nextDayIndex;
    entry.result = fund ? fund.returns[nextDayIndex] || 0 : 0;
  });
  saveEntries();
}

let revealInProgress = false;
let revealTimers = [];

function revealOutcomeNow() {
  revealTimers.forEach(timer => clearTimeout(timer));
  revealTimers = [];
  $("#reveal-countdown").hidden = true;
  $("#reveal-result").hidden = false;
  $("#reveal-skip").hidden = true;
}

function closeMarketReveal() {
  revealTimers.forEach(timer => clearTimeout(timer));
  revealTimers = [];
  $("#market-reveal").classList.remove("show", "active", "gain-day", "loss-day", "flat-day");
  $("#market-reveal").hidden = true;
  document.body.classList.remove("reveal-open");
  revealInProgress = false;
  showToast("新交易日已开始，昨天的决定现在可以复盘了");
}

function showMarketReveal({ previousDayIndex, previousSnapshot, nextSnapshot }) {
  const currentDay = days[dayIndex];
  const dailyProfit = nextSnapshot.total - previousSnapshot.total;
  const dailyRate = previousSnapshot.total ? dailyProfit / previousSnapshot.total * 100 : 0;
  const direction = dailyProfit > .005 ? "gain" : dailyProfit < -.005 ? "loss" : "flat";
  const dayDecisions = entries.filter(entry => entry.sessionId === session.id && entry.dayIndex === previousDayIndex);
  const previousValues = new Map(previousSnapshot.holdings.map(item => [item.fund.id, item.value]));
  const rows = nextSnapshot.holdings.map(item => {
    const previousValue = previousValues.get(item.fund.id) || item.holding.cost;
    const changeAmount = item.value - previousValue;
    const todayReturn = item.fund.returns[dayIndex] || 0;
    return `
      <article class="reveal-fund-row" style="--reveal-order:${nextSnapshot.holdings.indexOf(item)}">
        <span class="fund-symbol ${item.fund.tone}">${item.fund.name.slice(0, 1)}</span>
        <div><strong>${item.fund.name}</strong><small>现值 ¥${item.value.toLocaleString("zh-CN", { maximumFractionDigits:0 })}</small></div>
        <span class="${todayReturn >= 0 ? "gain" : "loss"}">${todayReturn >= 0 ? "+" : ""}${todayReturn.toFixed(2)}%</span>
        <b class="${changeAmount >= 0 ? "gain" : "loss"}">${changeAmount >= 0 ? "+" : ""}¥${Math.abs(changeAmount).toLocaleString("zh-CN", { maximumFractionDigits:0 })}</b>
      </article>`;
  });

  $("#reveal-scenario").textContent = activeScenario().name;
  $("#reveal-day-label").textContent = currentDay.date;
  $("#reveal-market-index").textContent = currentDay.index;
  $("#reveal-market-index").className = `reveal-index ${currentDay.index.startsWith("+") ? "gain" : "loss"}`;
  $("#reveal-title").textContent = dailyProfit > .005 ? "今天，账户上涨了" : dailyProfit < -.005 ? "今天，账户回撤了" : "今天，账户变化不大";
  $("#reveal-total-change").textContent = `${dailyProfit >= 0 ? "+" : "-"}¥${Math.abs(dailyProfit).toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#reveal-total-change").className = direction === "gain" ? "gain" : direction === "loss" ? "loss" : "";
  $("#reveal-total-rate").textContent = `${dailyRate >= 0 ? "+" : ""}${dailyRate.toFixed(2)}%`;
  $("#reveal-total-rate").className = direction === "gain" ? "gain" : direction === "loss" ? "loss" : "";
  $("#reveal-total").textContent = `¥${nextSnapshot.total.toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#reveal-decision-count").textContent = `昨日 ${dayDecisions.length} 次决定`;
  $("#reveal-fund-list").innerHTML = rows.length
    ? rows.join("")
    : `<div class="reveal-empty"><strong>昨日保持空仓</strong><span>市场变化没有影响账户，但这也是一次主动选择。</span></div>`;
  $("#reveal-reflection").textContent = dailyProfit >= 0
    ? "上涨会带来兴奋，但一次盈利不能自动证明决策正确。先回看昨天的理由。"
    : "下跌会带来压力，但一次亏损不能自动证明决策错误。先检查原来的理由是否仍成立。";

  $("#reveal-countdown").hidden = false;
  $("#reveal-result").hidden = true;
  $("#reveal-skip").hidden = false;
  $("#reveal-count-number").textContent = "3";
  $("#market-reveal").hidden = false;
  $("#market-reveal").classList.add("show", `${direction}-day`);
  document.body.classList.add("reveal-open");
  requestAnimationFrame(() => $("#market-reveal").classList.add("active"));
  revealTimers.push(setTimeout(() => $("#reveal-count-number").textContent = "2", 420));
  revealTimers.push(setTimeout(() => $("#reveal-count-number").textContent = "1", 840));
  revealTimers.push(setTimeout(revealOutcomeNow, 1280));
}

function advanceDay() {
  if (revealInProgress) return;
  if (dayIndex >= days.length - 1) {
    showToast("本轮训练已经到最后一个交易日");
    return;
  }
  revealInProgress = true;
  const previousDayIndex = dayIndex;
  const previousSnapshot = accountSnapshot(previousDayIndex);
  dayIndex += 1;
  resolvePendingOutcomes(dayIndex);
  renderDay();
  renderJournal();
  renderReview();
  const nextSnapshot = accountSnapshot(dayIndex);
  showMarketReveal({ previousDayIndex, previousSnapshot, nextSnapshot });
}

$("#next-day").addEventListener("click", advanceDay);
$("#finish-day").addEventListener("click", () => {
  if (dayIndex === days.length - 1) endCurrentSession();
  else advanceDay();
});
$("#reveal-skip").addEventListener("click", revealOutcomeNow);
$("#reveal-continue").addEventListener("click", closeMarketReveal);
$("#prev-day").addEventListener("click", () => showToast("为避免修改过去的答案，请到投资日志查看历史决定"));

function archiveCurrentSession() {
  const snapshot = accountSnapshot();
  const archive = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || "[]");
  if (!archive.some(item => item.id === session.id)) {
    archive.unshift({
      id:session.id,
      scenarioId:activeScenarioId,
      scenarioName:activeScenario().name,
      scenarioReveal:activeScenario().reveal,
      completedAt:new Date().toISOString(),
      days:dayIndex + 1,
      initial:account.initial,
      finalTotal:snapshot.total,
      returnRate:account.initial ? snapshot.profit / account.initial * 100 : 0,
      maxDrawdown:maxDrawdown(),
      actions:entries.length,
      reviews:entries.filter(entry => entry.review).length
    });
    localStorage.setItem(ARCHIVE_KEY, JSON.stringify(archive.slice(0, 12)));
  }
}

function renderSessionSummary() {
  const snapshot = accountSnapshot();
  const returnRate = account.initial ? snapshot.profit / account.initial * 100 : 0;
  $("#summary-total").textContent = `¥${snapshot.total.toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#summary-return").textContent = `${returnRate >= 0 ? "+" : ""}${returnRate.toFixed(2)}%`;
  $("#summary-return").className = returnRate >= 0 ? "gain" : "loss";
  $("#summary-drawdown").textContent = `${maxDrawdown().toFixed(2)}%`;
  $("#summary-actions").textContent = `${entries.length} 次`;
  const reviewed = entries.filter(entry => entry.review).length;
  $("#session-summary-copy").textContent = `你完成了 ${dayIndex + 1} 个交易日、${entries.length} 次决定和 ${reviewed} 次复盘。刚刚经历的是：${activeScenario().reveal}。收益只是结果，日志才解释你如何走到这里。`;
}

function endCurrentSession() {
  if (session.status === "completed") return;
  session.status = "completed";
  session.completedAt = new Date().toISOString();
  archiveCurrentSession();
  renderDay();
  $("#session-summary").scrollIntoView({ behavior:"smooth", block:"start" });
  showToast("本轮训练已结束，报告已经生成");
}

function startNewSession() {
  session = {
    id:createSessionId(),
    status:"active",
    startedAt:new Date().toISOString(),
    completedAt:null,
    scenarioId:activeScenarioId
  };
  dayIndex = 0;
  account = createAccount(account.initial || 100000);
  entries = [];
  activeReviewEntryId = null;
  journalFilter = "全部";
  saveEntries();
  saveAccount();
  renderDay();
  renderJournal();
  renderReview();
  renderHome();
  showToast("新一轮训练已经开始");
}

$("#end-session").addEventListener("click", endCurrentSession);
$("#restart-session").addEventListener("click", () => {
  if (entries.length && !window.confirm("重新开始会清空本轮账户和日志。确定开始新一轮吗？")) return;
  startNewSession();
});
$("#summary-new-session").addEventListener("click", startNewSession);

function representativeHoldingDays(label) {
  if (label === "1个月以内") return 20;
  if (label === "3至12个月") return 180;
  if (label === "1年以上") return 540;
  return 0;
}

function estimateShareClassFees(fund, amount, holdingPeriod) {
  const daysHeld = representativeHoldingDays(holdingPeriod);
  const profile = fund?.feeProfile || feeProfileFor(fund || {});
  const redemptionRate = daysHeld
    ? profile.redemptionBands.find(band => daysHeld < band.maxDays)?.rate || 0
    : 0;
  const serviceDays = Math.min(daysHeld, 365);
  const calculate = share => {
    const settings = profile[share];
    const purchaseFee = amount * settings.purchaseRate;
    const serviceFee = amount * settings.serviceRate * serviceDays / 365;
    const redemptionFee = amount * redemptionRate;
    return { purchaseFee, serviceFee, redemptionFee, total:purchaseFee + serviceFee + redemptionFee };
  };
  return { daysHeld, redemptionRate, A:calculate("A"), C:calculate("C") };
}

function updateShareClassOptions(fund) {
  const select = $("#share-class");
  if (!select || !fund) return;
  const previous = select.value;
  const classes = fund.availableShareClasses?.length ? fund.availableShareClasses : ["未区分"];
  select.innerHTML = classes.map(share => `<option value="${escapeHtml(share)}">${escapeHtml(share === "场内" ? "场内 ETF 份额" : share === "未区分" ? "当前资料未区分份额" : `${share} 类份额`)}</option>`).join("");
  if (classes.includes(previous)) select.value = previous;
  select.disabled = classes.length === 1;
}

function updateFeePreview() {
  const fund = funds.find(item => item.id === $("#training-fund").value);
  const amount = Math.max(0, Number($("#training-amount").value) || 0);
  const holdingPeriod = $("#holding-period").value;
  const selectedShare = $("#share-class").value;
  if (fund && fund.feeDataStatus === "missing") {
    const shareLabel = fund.availableShareClasses.join("/");
    $("#fee-a-card small").textContent = "当前已收录份额";
    $("#fee-a-total").textContent = shareLabel;
    $("#fee-a-copy").textContent = "没有为这只基金生成不存在的其他份额";
    $("#fee-c-card small").textContent = "真实费用资料";
    $("#fee-c-total").textContent = "待补充";
    $("#fee-c-copy").textContent = "需读取产品资料概要或招募说明书";
    $("#fee-a-card").classList.add("selected");
    $("#fee-c-card").classList.remove("selected");
    $("#fee-recommendation").textContent = "当前不做 A/C 费用推荐";
    $("#fee-detail").textContent = "当前行情仍为离线模拟。真实申购费、销售服务费、管理费、托管费和赎回费均以该基金最新法律文件及销售平台为准。";
    return;
  }
  $("#fee-a-card small").textContent = "A 类估算";
  $("#fee-c-card small").textContent = "C 类估算";
  if (!fund || !holdingPeriod || !amount) {
    $("#fee-a-total").textContent = "—";
    $("#fee-c-total").textContent = "—";
    $("#fee-recommendation").textContent = "先填写金额和预计持有时间";
    $("#fee-detail").textContent = "赎回费还与实际持有天数有关；持有不足 7 日通常成本很高，不适合频繁进出。";
    return;
  }
  const estimate = estimateShareClassFees(fund, amount, holdingPeriod);
  const format = value => `约 ¥${value.toFixed(2)}`;
  $("#fee-a-total").textContent = format(estimate.A.total);
  $("#fee-c-total").textContent = format(estimate.C.total);
  $("#fee-a-copy").textContent = `申购 ${format(estimate.A.purchaseFee)} · 服务 ¥0`;
  $("#fee-c-copy").textContent = `申购 ¥0 · 服务 ${format(estimate.C.serviceFee)}`;
  $("#fee-a-card").classList.toggle("selected", selectedShare === "A");
  $("#fee-c-card").classList.toggle("selected", selectedShare === "C");
  const cheaper = estimate.A.total < estimate.C.total ? "A" : estimate.C.total < estimate.A.total ? "C" : "A、C";
  $("#fee-recommendation").textContent = `本次教学估算：${cheaper} 类费用较低`;
  $("#fee-detail").textContent = estimate.redemptionRate
    ? `按约 ${estimate.daysHeld} 天演示，两类还可能产生约 ${(estimate.redemptionRate * 100).toFixed(1)}% 的赎回费；它不是 A/C 的区别，而是短期卖出的共同成本。`
    : `按约 ${estimate.daysHeld} 天演示。C 类销售服务费只计算到持有满一年；管理费、托管费通常已从基金资产中计提，未在此重复估算。`;
}

function updateTradeForm() {
  const fundId = $("#training-fund").value;
  const holding = account.holdings[fundId];
  const fund = funds.find(item => item.id === fundId);
  const holdingValue = holding && fund ? holding.units * fundPrice(fund) : 0;
  updateShareClassOptions(fund);
  $("#amount-field").hidden = decision === "持有";
  $("#amount-quick").hidden = decision === "持有";
  $("#buy-plan").hidden = decision !== "买入";
  $("#amount-label").textContent = decision === "卖出" ? "卖出金额" : "买入金额";
  $("#amount-help").textContent = decision === "卖出"
    ? `当前最多可卖 ¥${holdingValue.toLocaleString("zh-CN", { maximumFractionDigits:0 })}`
    : `当前可用现金 ¥${account.cash.toLocaleString("zh-CN", { maximumFractionDigits:0 })}`;
  $("#save-decision").textContent = decision === "持有" ? "记录继续持有" : `确认${decision}这只基金`;
  const quickValues = decision === "卖出"
    ? [
      { label:"卖出 25%", value:holdingValue * .25 },
      { label:"卖出 50%", value:holdingValue * .5 },
      { label:"全部卖出", value:holdingValue }
    ]
    : [
      { label:"¥100", value:100 },
      { label:"¥300", value:300 },
      { label:"¥1,000", value:1000 }
    ];
  $("#amount-quick").innerHTML = quickValues.map(item =>
    `<button type="button" data-quick-amount="${Math.max(0, item.value)}">${item.label}</button>`
  ).join("");
  $$("[data-quick-amount]").forEach(button => button.addEventListener("click", () => {
    $("#training-amount").value = Math.max(0, Math.round(Number(button.dataset.quickAmount) * 100) / 100);
    updateFeePreview();
  }));
  updateFeePreview();
}

$$("[data-decision]").forEach(button => button.addEventListener("click", () => {
  decision = button.dataset.decision;
  $$("[data-decision]").forEach(item => item.classList.toggle("active", item === button));
  updateTradeForm();
}));
$("#training-fund").addEventListener("change", updateTradeForm);
$("#training-amount").addEventListener("input", updateFeePreview);
$("#holding-period").addEventListener("change", updateFeePreview);
$("#share-class").addEventListener("change", updateFeePreview);

$$("[data-mood]").forEach(button => button.addEventListener("click", () => {
  mood = button.dataset.mood;
  $$("[data-mood]").forEach(item => item.classList.toggle("active", item === button));
}));

$("#save-decision").addEventListener("click", () => {
  if (session.status === "completed") return showToast("本轮已经结束，请开始新一轮训练");
  const fundId = $("#training-fund").value;
  const fund = funds.find(item => item.id === fundId);
  const price = fundPrice(fund);
  const requestedAmount = Number($("#training-amount").value);
  const holdingPeriod = $("#holding-period").value;
  const declineResponse = $("#decline-response").value;
  const selectedShareClass = $("#share-class").value;
  const estimatedFees = decision === "买入" && fund && fund.feeDataStatus !== "missing" && ["A", "C"].includes(selectedShareClass) && requestedAmount && holdingPeriod
    ? estimateShareClassFees(fund, requestedAmount, holdingPeriod)
    : null;
  const tradeShareClass = decision === "买入" ? selectedShareClass : (account.holdings[fundId]?.shareClass || "");
  let executedAmount = 0;
  const ruleWarnings = [];

  if (decision === "买入") {
    if (!requestedAmount || requestedAmount <= 0) return showToast("请输入有效的买入金额");
    if (requestedAmount > account.cash) return showToast("买入金额超过当前可用现金");
    if (!holdingPeriod || !declineResponse) return showToast("买入前请先填写持有计划和下跌应对方式");
    const snapshot = accountSnapshot();
    const currentFundValue = snapshot.holdings.find(item => item.fund.id === fundId)?.value || 0;
    const projectedPosition = snapshot.total ? (currentFundValue + requestedAmount) / snapshot.total * 100 : 0;
    if (requestedAmount > investmentRules.maxAmount) ruleWarnings.push(`超过单次投入上限 ¥${investmentRules.maxAmount}`);
    if (projectedPosition > investmentRules.maxPosition) ruleWarnings.push(`预计单只基金仓位 ${projectedPosition.toFixed(1)}%，超过 ${investmentRules.maxPosition}% 上限`);
    if (ruleWarnings.length && !window.confirm(`${ruleWarnings.join("；")}。这次操作将被记录为“违反规则”，仍然执行吗？`)) return;
    const holding = account.holdings[fundId] || { units:0, cost:0, shareClasses:{} };
    holding.shareClasses = holding.shareClasses || {};
    holding.shareClasses[selectedShareClass] = (holding.shareClasses[selectedShareClass] || 0) + requestedAmount;
    holding.shareClass = Object.keys(holding.shareClasses).filter(key => holding.shareClasses[key] > .01).join("/");
    holding.units += requestedAmount / price;
    holding.cost += requestedAmount;
    account.holdings[fundId] = holding;
    account.cash -= requestedAmount;
    executedAmount = requestedAmount;
  } else if (decision === "卖出") {
    const holding = account.holdings[fundId];
    if (!holding || holding.units <= 0) return showToast("当前没有这只基金可以卖出");
    const maxValue = holding.units * price;
    if (!requestedAmount || requestedAmount <= 0) return showToast("请输入有效的卖出金额");
    if (requestedAmount > maxValue + .01) return showToast("卖出金额超过当前持有金额");
    const ratio = Math.min(1, requestedAmount / maxValue);
    const soldCost = holding.cost * ratio;
    if (holding.shareClasses) {
      Object.keys(holding.shareClasses).forEach(key => holding.shareClasses[key] *= 1 - ratio);
      holding.shareClass = Object.keys(holding.shareClasses).filter(key => holding.shareClasses[key] > .01).join("/");
    }
    holding.units *= 1 - ratio;
    holding.cost *= 1 - ratio;
    account.cash += requestedAmount;
    account.realizedProfit += requestedAmount - soldCost;
    executedAmount = requestedAmount;
    if (holding.units < .000001) delete account.holdings[fundId];
  }

  entries.unshift({
    id:Date.now(), source:"user", sessionId:session.id,
    day:days[dayIndex].date, dayIndex, action:decision, fund:fund.name, fundId,
    amount:executedAmount, unitPrice:price,
    reason:$("#training-reason").value || "未填写理由", mood,
    holdingPeriod:decision === "买入" ? holdingPeriod : "",
    declineResponse:decision === "买入" ? declineResponse : "",
    shareClass:tradeShareClass,
    feeEstimate:decision === "买入" && estimatedFees ? {
      purchaseFee:estimatedFees[selectedShareClass].purchaseFee,
      serviceFee:estimatedFees[selectedShareClass].serviceFee,
      redemptionFee:estimatedFees[selectedShareClass].redemptionFee,
      total:estimatedFees[selectedShareClass].total,
      representativeDays:estimatedFees.daysHeld
    } : null,
    ruleWarnings,
    scenarioId:activeScenarioId,
    scenarioEvent:days[dayIndex].title,
    result:null, outcomeDayIndex:null
  });
  saveEntries();
  recordAccountHistory();
  saveAccount();
  renderAccount();
  renderHome();
  updateTradeForm();
  $("#save-message").hidden = false;
  showToast(decision === "持有" ? "持有理由已写入日志" : `${decision}完成，可以继续操作其他基金`);
});

function simulateStrategy(fund, capital, contribution, dipLine, mode) {
  let cash = capital;
  let units = 0;
  let operations = 0;
  let peak = capital;
  let drawdown = 0;
  const history = [];
  days.forEach((day, index) => {
    const price = fundPrice(fund, index);
    let amount = 0;
    if (mode === "一次投入后持有" && index === 0) amount = cash;
    if (mode === "定期定额" && index % 2 === 0) amount = Math.min(contribution, cash);
    if (mode === "下跌加仓") {
      if (index === 0) amount = Math.min(contribution, cash);
      else if ((fund.returns[index] || 0) <= -dipLine) amount = Math.min(contribution * 2, cash);
      else if (index % 2 === 0) amount = Math.min(contribution * .5, cash);
    }
    if (amount > 0) {
      units += amount / price;
      cash -= amount;
      operations += 1;
    }
    const total = cash + units * price;
    peak = Math.max(peak, total);
    drawdown = Math.max(drawdown, peak ? (peak - total) / peak * 100 : 0);
    history.push(total);
  });
  const final = history.at(-1) || capital;
  return {
    name:mode,
    final,
    returnRate:(final - capital) / capital * 100,
    drawdown,
    operations,
    invested:capital - cash
  };
}

function renderStrategy(results = null) {
  refreshFundSelectors();
  const target = $("#strategy-results");
  if (!target) return;
  if (!results) {
    target.innerHTML = ["定期定额","下跌加仓","一次投入后持有"].map((name, index) => `
      <article class="strategy-card glass ${["blue","mint","lilac"][index]}">
        <span class="tag">${name}</span><h2>等待测试</h2>
        <p>${name === "定期定额" ? "按固定节奏分批投入，降低一次性择时压力。" : name === "下跌加仓" ? "仅在达到预设跌幅时提高投入，检验规则执行。" : "第一天投入全部预算，之后不进行主动操作；这里只代表短周期行为。"}</p>
      </article>`).join("");
    return;
  }
  target.innerHTML = results.map((item, index) => `
    <article class="strategy-card glass ${["blue","mint","lilac"][index]}">
      <span class="tag">${item.name}</span>
      <strong class="strategy-final">¥${item.final.toLocaleString("zh-CN", { maximumFractionDigits:0 })}</strong>
      <div class="strategy-metrics">
        <span>模拟收益 <b class="${item.returnRate >= 0 ? "gain" : "loss"}">${item.returnRate >= 0 ? "+" : ""}${item.returnRate.toFixed(2)}%</b></span>
        <span>最大回撤 <b>${item.drawdown.toFixed(2)}%</b></span>
        <span>操作次数 <b>${item.operations} 次</b></span>
        <span>实际投入 <b>¥${item.invested.toLocaleString("zh-CN", { maximumFractionDigits:0 })}</b></span>
      </div>
    </article>`).join("");
}

$("#run-strategy").addEventListener("click", () => {
  const fund = funds.find(item => item.id === $("#strategy-fund").value) || funds[0];
  const capital = Math.max(1000, Number($("#strategy-capital").value || 10000));
  const contribution = Math.max(100, Number($("#strategy-contribution").value || 1000));
  const dipLine = Number($("#strategy-dip").value || 3);
  const results = ["定期定额","下跌加仓","一次投入后持有"].map(mode => simulateStrategy(fund, capital, contribution, dipLine, mode));
  renderStrategy(results);
  localStorage.setItem("ftm-preview-strategy-runs", String(Number(localStorage.getItem("ftm-preview-strategy-runs") || 0) + 1));
  showToast("策略比较已完成，请同时观察收益和回撤");
});

function renderJournal() {
  const moodCounts = entries.reduce((counts, entry) => {
    counts[entry.mood] = (counts[entry.mood] || 0) + 1;
    return counts;
  }, {});
  const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "暂无";
  const pending = entries.filter(entry => typeof entry.result === "number" && !entry.review);
  const visibleEntries = entries.filter(entry => journalFilter === "全部"
    || entry.action === journalFilter
    || (journalFilter === "已复盘" && entry.review));

  $("#journal-count").textContent = entries.length;
  $("#journal-top-mood").textContent = topMood;
  $("#journal-pending-count").textContent = pending.length;
  renderReviewTask();
  $("#journal-list").innerHTML = visibleEntries.length ? visibleEntries.map((e) => {
    const resultReady = typeof e.result === "number";
    const resultText = resultReady
      ? `次日 ${e.result >= 0 ? "+" : ""}${e.result.toFixed(1)}%`
      : session.status === "completed" ? "本轮结束，无次日结果" : "等待下一交易日";
    return `
    <article class="timeline-entry">
      <span class="timeline-dot"></span>
      <button class="entry-summary" data-entry="${e.id}">
        <span class="entry-day">${e.day}</span>
        <div class="entry-main"><div><span class="tag ${e.action === "买入" ? "mint" : e.action === "卖出" ? "rose" : "lilac"}">${escapeHtml(e.action)}</span><h3>${escapeHtml(e.fund)}</h3></div><p>${escapeHtml(e.reason)}</p></div>
        <div class="entry-result">${e.amount ? `<strong>¥ ${e.amount.toLocaleString()}</strong>` : ""}<span class="${resultReady ? e.result >= 0 ? "gain" : "loss" : ""}">${resultText}</span></div>
        <span class="expand-icon">+</span>
      </button>
      <div class="entry-detail" hidden>
        <div><small>当时情绪</small><strong>${escapeHtml(e.mood)}</strong></div>
        <div><small>原始理由</small><strong>${escapeHtml(e.reason)}</strong></div>
        ${e.shareClass ? `<div><small>基金份额</small><strong>${escapeHtml(e.shareClass)} 类份额</strong></div>` : ""}
        ${e.feeEstimate ? `<div><small>费用学习估算</small><strong>约 ¥${Number(e.feeEstimate.total).toFixed(2)}（申购 ¥${Number(e.feeEstimate.purchaseFee).toFixed(2)}；服务 ¥${Number(e.feeEstimate.serviceFee).toFixed(2)}；赎回 ¥${Number(e.feeEstimate.redemptionFee).toFixed(2)}）</strong></div>` : ""}
        ${e.holdingPeriod ? `<div><small>买入计划</small><strong>预计持有 ${escapeHtml(e.holdingPeriod)}；下跌20%时：${escapeHtml(e.declineResponse)}</strong></div>` : ""}
        ${e.ruleWarnings?.length ? `<div><small>规则提醒</small><strong class="negative">${escapeHtml(e.ruleWarnings.join("；"))}</strong></div>` : ""}
        ${e.scenarioEvent ? `<div><small>当日情境</small><strong>${escapeHtml(e.scenarioEvent)}</strong></div>` : ""}
        <div><small>${e.review ? "后来复盘" : "复盘状态"}</small><strong>${e.review ? `${escapeHtml(e.review.choice)}：${escapeHtml(e.review.note)}` : resultReady ? "还没有回看这次决定" : "进入下一交易日后才能复盘结果"}</strong></div>
        ${e.review || !resultReady ? "" : `<button class="review-this-entry" data-review-entry="${e.id}">现在复盘这笔记录 →</button>`}
      </div>
    </article>`;
  }).join("") : `<div class="journal-no-result"><strong>这里还没有对应记录</strong><p>换一个筛选条件，或先去市场训练完成一次决定。</p></div>`;
  $$("[data-entry]").forEach(button => button.addEventListener("click", () => {
    const detail = button.nextElementSibling;
    detail.hidden = !detail.hidden;
    button.querySelector(".expand-icon").textContent = detail.hidden ? "+" : "−";
  }));
  $$("[data-review-entry]").forEach(button => button.addEventListener("click", () => {
    activeReviewEntryId = Number(button.dataset.reviewEntry);
    reviewChoice = "";
    renderReviewTask();
    window.scrollTo({ top:0, behavior:"smooth" });
  }));
}

function renderReviewTask() {
  const pending = entries.filter(entry => typeof entry.result === "number" && !entry.review);
  const waiting = entries.filter(entry => entry.result === null);
  const target = entries.find(entry => entry.id === activeReviewEntryId && !entry.review) || pending[0];
  $("#review-task-body").hidden = !target;
  $("#review-empty").hidden = Boolean(target);
  if (!target) {
    const emptyTitle = $("#review-empty strong");
    const emptyCopy = $("#review-empty p");
    if (waiting.length) {
      emptyTitle.textContent = `${waiting.length} 条决定正在等待下一交易日`;
      emptyCopy.textContent = "进入下一交易日后，系统才会显示结果并开放复盘。";
    } else {
      emptyTitle.textContent = "本轮记录都已完成复盘";
      emptyCopy.textContent = "下一次市场决定写入日志后，这里会出现新的复盘任务。";
    }
    return;
  }

  activeReviewEntryId = target.id;
  $("#review-entry-day").textContent = target.day;
  $("#review-entry-action").textContent = `${target.action} · ${target.fund}`;
  $("#review-entry-reason").textContent = target.reason;
  $("#review-result-label").textContent = `第 ${target.outcomeDayIndex + 1} 天变化`;
  $("#review-entry-result").textContent = `${target.result >= 0 ? "+" : ""}${target.result.toFixed(1)}%`;
  $("#review-entry-result").className = target.result >= 0 ? "gain" : "loss";
  $("#review-note-input").value = "";
  reviewChoice = "";
  $$("[data-review-choice]").forEach(button => button.classList.remove("active"));
  $("#save-review-note").disabled = true;
}

$$("[data-review-choice]").forEach(button => button.addEventListener("click", () => {
  reviewChoice = button.dataset.reviewChoice;
  $$("[data-review-choice]").forEach(item => item.classList.toggle("active", item === button));
  $("#save-review-note").disabled = !reviewChoice;
}));

$("#save-review-note").addEventListener("click", () => {
  const target = entries.find(entry => entry.id === activeReviewEntryId);
  if (!target || !reviewChoice) return;
  target.review = {
    choice: reviewChoice,
    note: $("#review-note-input").value.trim() || "没有补充说明",
    reviewedAt: new Date().toISOString()
  };
  saveEntries();
  activeReviewEntryId = null;
  reviewChoice = "";
  renderJournal();
  renderReview();
  renderHome();
  showToast("这次复盘已保存");
});

$$("[data-journal-filter]").forEach(button => button.addEventListener("click", () => {
  journalFilter = button.dataset.journalFilter;
  $$("[data-journal-filter]").forEach(item => item.classList.toggle("active", item === button));
  renderJournal();
}));

function renderProfileMemory() {
  const profile = JSON.parse(localStorage.getItem("ftm-preview-profile") || "null");
  $("#saved-profile-summary").innerHTML = profile ? `
    <div class="profile-facts">
      <span><small>基金经验</small><strong>${profile.experience || "未填写"}</strong></span>
      <span><small>训练目标</small><strong>${profile.goal || "未填写"}</strong></span>
      <span><small>亏损感受</small><strong>${profile.lossComfort || "未填写"}</strong></span>
      <span><small>首次模拟金额</small><strong>¥${Number(profile.allocation || 0).toLocaleString()}</strong></span>
    </div>
    <p>初始画像只记录你的起点。当前投资人格会继续根据日志、规则执行和复盘变化。</p>` :
    `<div class="journal-no-result"><strong>还没有初始画像</strong><p>点击右上角头像完成首次引导后，这里会保留你的学习起点。</p></div>`;
}

function growthState() {
  const archive = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || "[]");
  const allRoundCount = archive.length;
  const distinctFunds = new Set(entries.filter(item => item.action === "买入").map(item => item.fundId)).size;
  const buys = entries.filter(item => item.action === "买入");
  const reviewed = entries.filter(item => item.review).length;
  const ruleSafeBuys = buys.filter(item => !item.ruleWarnings?.length).length;
  const completedScenarioCount = new Set(archive.map(item => item.scenarioId).filter(Boolean)).size;
  return { archive, allRoundCount, distinctFunds, buys, reviewed, ruleSafeBuys, completedScenarioCount };
}

function renderAchievementsAndChallenges() {
  const state = growthState();
  const achievements = [
    ["第一笔决定", entries.length >= 1, "完成第一次市场操作"],
    ["学习起步", academyCompleted.length >= beginnerLessons.length, "完成9节新手课程"],
    ["第一次复盘", state.reviewed >= 1, "重新回看一次决定"],
    ["组合练习者", state.distinctFunds >= 3, "买入过3只不同基金"],
    ["完整一轮", state.allRoundCount >= 1, "完成并保存一轮训练"],
    ["规则守门员", state.ruleSafeBuys >= 5, "5次买入均未突破规则"],
    ["策略比较者", Number(localStorage.getItem("ftm-preview-strategy-runs") || 0) >= 1, "完成一次策略实验"],
    ["跨周期训练者", state.completedScenarioCount >= 3, "完成3种不同市场剧本"]
  ];
  $("#achievement-grid").innerHTML = achievements.map(([name, done, copy]) => `
    <article class="${done ? "unlocked" : ""}"><span>${done ? "✓" : "○"}</span><div><strong>${name}</strong><small>${copy}</small></div></article>`).join("");

  const challenges = [
    { name:"完成新手路线", current:academyCompleted.length, target:beginnerLessons.length, unit:"课" },
    { name:"留下5次有理由的决定", current:entries.length, target:5, unit:"次" },
    { name:"完成3次结果复盘", current:state.reviewed, target:3, unit:"次" },
    { name:"练习3只不同基金", current:state.distinctFunds, target:3, unit:"只" },
    { name:"完成2轮市场训练", current:state.allRoundCount, target:2, unit:"轮" }
  ];
  $("#challenge-grid").innerHTML = challenges.map(item => {
    const progress = Math.min(100, item.current / item.target * 100);
    return `<article><div><strong>${item.name}</strong><span>${Math.min(item.current, item.target)} / ${item.target} ${item.unit}</span></div><div class="progress-track"><i style="width:${progress}%"></i></div><small>${progress >= 100 ? "✓ 已完成" : "继续完成真实操作来推进"}</small></article>`;
  }).join("");
}

function renderRoundHistory() {
  const archive = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || "[]");
  $("#round-history").innerHTML = archive.length ? archive.map((round, index) => `
    <article class="round-card">
      <span class="round-number">${String(archive.length - index).padStart(2, "0")}</span>
      <div><strong>${round.scenarioName || "未知历史剧本"}</strong><small>${round.scenarioReveal || "早期训练记录"}</small></div>
      <span><small>最终资产</small><b>¥${Number(round.finalTotal || 0).toLocaleString("zh-CN", { maximumFractionDigits:0 })}</b></span>
      <span><small>收益</small><b class="${round.returnRate >= 0 ? "gain" : "loss"}">${round.returnRate >= 0 ? "+" : ""}${Number(round.returnRate || 0).toFixed(2)}%</b></span>
      <span><small>最大回撤</small><b>${Number(round.maxDrawdown || 0).toFixed(2)}%</b></span>
      <span><small>决定 / 复盘</small><b>${round.actions || 0} / ${round.reviews || 0}</b></span>
    </article>`).join("") :
    `<div class="journal-no-result"><strong>还没有历史训练报告</strong><p>结束当前训练轮次后，收益、回撤、决定和复盘会保存在这里。</p></div>`;
}

function renderDynamicInsights() {
  const metrics = behaviorMetrics();
  const buys = entries.filter(item => item.action === "买入");
  const violations = entries.filter(item => item.ruleWarnings?.length).length;
  const holds = entries.filter(item => item.action === "持有").length;
  const insightItems = [
    violations
      ? ["规则曾被突破", `${violations} 次操作超过了自己设置的金额或仓位上限。先把规则调到真正愿意执行的水平。`]
      : buys.length
        ? ["规则暂时守住了", `${buys.length} 次买入均未突破当前金额与仓位上限，继续在不同市场环境中检验。`]
        : ["还没有买入记录", "完成第一笔小额模拟买入后，这里会检查是否遵守了自己设置的规则。"],
    metrics.chase
      ? ["出现追涨信号", `${metrics.chase} 次理由提到上涨、热门或害怕错过。下一次可先等待一个交易日再决定。`]
      : entries.length
        ? ["暂未出现明显追涨", `目前 ${entries.length} 次决定里没有明显追涨关键词，但仍要继续记录真实理由。`]
        : ["等待真实理由", "系统不会靠固定文案判断你。写下几次真实理由后，才会识别情绪信号。"],
    metrics.resolved.length
      ? ["复盘正在形成习惯", `${metrics.reviewed.length} / ${metrics.resolved.length} 条已有结果的记录完成了复盘；持有记录 ${holds} 次。`]
      : ["结果还在路上", "进入下一交易日后，系统会把原始理由与后来结果放在一起供你复盘。"]
  ];
  insightItems.forEach(([title, copy], index) => {
    $(`#insight-title-${index + 1}`).textContent = title;
    $(`#insight-copy-${index + 1}`).textContent = copy;
  });

  let nextTitle = "先完成一笔完整记录";
  let nextCopy = "做出决定、进入下一交易日，再回看原始理由。";
  if (violations) {
    nextTitle = "把规则调到真正能执行";
    nextCopy = "你曾突破自己的投入或仓位上限。下一轮先降低单次金额，再检验能否稳定执行。";
  } else if (metrics.chase) {
    nextTitle = "给热门行情加一道冷静门槛";
    nextCopy = "当某个标的连续上涨时，先等待一个交易日并重新检查买入理由。";
  } else if (metrics.resolved.length && metrics.reviewRate < 60) {
    nextTitle = "把未完成的结果复盘补上";
    nextCopy = `当前复盘完成率为 ${metrics.reviewRate}%。先把结果与当时理由对照，再开始下一轮。`;
  } else if (entries.length) {
    nextTitle = "换一个市场环境继续验证";
    nextCopy = "当前行为相对稳定，但还需要在慢跌、突发冲击和热门赛道中重复训练。";
  }
  $("#next-advice-title").textContent = nextTitle;
  $("#next-advice-copy").textContent = nextCopy;
}

function renderReview() {
  const metrics = behaviorMetrics();
  let persona = {
    orb:"观",
    title:"等待更多记录",
    copy:"完成几次真实决定和复盘后，系统才会形成投资人格判断。"
  };
  if (entries.length >= 3) {
    if (metrics.chase >= Math.max(2, entries.length * .4)) {
      persona = {
        orb:"追",
        title:"机会追逐型",
        copy:"你对上涨和热门方向反应很快，但决定更容易受到“怕错过”影响。下一轮应先练习冷静期和分批投入。"
      };
    } else if (metrics.calmRate >= 60 && metrics.reviewRate >= 50) {
      persona = {
        orb:"稳",
        title:"纪律成长型",
        copy:"你开始把情绪和操作分开，也愿意回看自己的理由。接下来要检验这种稳定能否跨越不同市场环境。"
      };
    } else if (metrics.reviewRate >= 60) {
      persona = {
        orb:"思",
        title:"复盘学习型",
        copy:"你愿意重新检查决定，而不是只看盈亏。下一步可以把复盘结论变成更明确的操作规则。"
      };
    } else {
      persona = {
        orb:"练",
        title:"市场体验型",
        copy:"你已经开始积累市场经验，但记录和复盘还不够稳定。先完整经历一轮，再判断自己的固定模式。"
      };
    }
  }
  $("#persona-orb").textContent = persona.orb;
  $("#persona-title").textContent = persona.title;
  $("#persona-copy").textContent = persona.copy;
  $("#discipline-score").textContent = metrics.score;
  $(".score-ring").style.setProperty("--score", `${metrics.score * 3.6}deg`);
  $("#calm-rate").textContent = `${metrics.calmRate}%`;
  $("#calm-bar").style.width = `${metrics.calmRate}%`;
  $("#chase-count").textContent = `${metrics.chase} 次`;
  $("#chase-bar").style.width = `${Math.min(100, metrics.chase * 22)}%`;
  renderDynamicInsights();
  renderProfileMemory();
  renderAchievementsAndChallenges();
  renderRoundHistory();
}

function coachAnswer(question) {
  const metrics = behaviorMetrics();
  const state = growthState();
  if (!entries.length) return "目前还没有真实日志。先去市场训练完成一次买入、持有或卖出，我才能根据你的行为回答。";
  if (/追涨|上涨|热门|错过/.test(question)) {
    return metrics.chase
      ? `你当前有 ${metrics.chase} 次理由出现“上涨、热门或怕错过”的信号。建议把热门行情的买入设置为至少等待一个交易日，并检查是否超过仓位规则。`
      : "目前的日志里还没有明显追涨关键词。继续记录真实理由，不要为了得到好评分而刻意写得更理性。";
  }
  if (/规则|纪律|执行/.test(question)) {
    const violations = entries.filter(item => item.ruleWarnings?.length).length;
    return violations
      ? `你有 ${violations} 次操作突破了自己设置的金额或仓位上限。下一轮先把规则调到真正能执行的水平，而不是写一个看起来完美的数字。`
      : `目前没有记录到突破规则的操作，纪律分为 ${metrics.score}。仍需跨越更多市场剧本验证稳定性。`;
  }
  if (/亏|问题|改进|为什么/.test(question)) {
    if (metrics.chase) return `最明显的问题是追涨信号，共 ${metrics.chase} 次。其次，你完成了 ${metrics.reviewed.length}/${metrics.resolved.length} 次可复盘记录。先减少情绪驱动买入，再提高复盘完成率。`;
    if (metrics.reviewRate < 50) return `目前最大的缺口不是收益，而是复盘不足：可复盘记录完成率为 ${metrics.reviewRate}%。先把结果与原始理由对照起来。`;
    return `当前行为相对稳定：平静决策占 ${metrics.calmRate}%，复盘完成率 ${metrics.reviewRate}%。下一步应完成更多不同市场剧本，避免只在单一环境中得出结论。`;
  }
  return `根据 ${entries.length} 次决定、${state.reviewed} 次复盘和 ${state.allRoundCount} 轮历史训练，你当前的纪律分为 ${metrics.score}。我不会预测基金涨跌，但可以继续帮你检查追涨、规则执行和复盘习惯。`;
}

$$("[data-coach-prompt]").forEach(button => button.addEventListener("click", () => {
  $("#coach-question").value = button.dataset.coachPrompt;
  $("#coach-answer").textContent = coachAnswer(button.dataset.coachPrompt);
}));

$("#ask-coach").addEventListener("click", () => {
  const question = $("#coach-question").value.trim();
  if (!question) return showToast("先写下你想复盘的问题");
  $("#coach-answer").textContent = coachAnswer(question);
});

$("#export-journal").addEventListener("click", () => {
  if (!entries.length) return showToast("本轮还没有日志可以导出");
  const escapeCsv = value => {
    let text = String(value ?? "");
    if (/^[=+\-@]/.test(text)) text = `'${text}`;
    return `"${text.replaceAll('"', '""')}"`;
  };
  const rows = [
    ["训练日","操作","基金","基金份额","金额","费用学习估算","理由","情绪","预计持有","下跌20%应对","规则提醒","当日情境","下一交易日变化","复盘选择","复盘记录"],
    ...entries.slice().reverse().map(entry => [
      entry.day,
      entry.action,
      entry.fund,
      entry.shareClass || "",
      entry.amount || "",
      entry.feeEstimate ? Number(entry.feeEstimate.total).toFixed(2) : "",
      entry.reason,
      entry.mood,
      entry.holdingPeriod || "",
      entry.declineResponse || "",
      entry.ruleWarnings?.join("；") || "",
      entry.scenarioEvent || "",
      typeof entry.result === "number" ? `${entry.result.toFixed(2)}%` : "尚无次日结果",
      entry.review?.choice || "",
      entry.review?.note || ""
    ])
  ];
  const csv = "\ufeff" + rows.map(row => row.map(escapeCsv).join(",")).join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type:"text/csv;charset=utf-8" }));
  link.download = `基金时光机-本轮日志-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("本轮日志已导出");
});

$("#set-rule").addEventListener("click", () => {
  const rule = "热门标的连续上涨时，至少等待一个交易日，并重新检查仓位上限、可承受损失和买入理由。";
  localStorage.setItem("ftm-preview-next-rule", rule);
  investmentRules = { ...investmentRules, maxAmount:Math.min(investmentRules.maxAmount, 1000), maxPosition:Math.min(investmentRules.maxPosition, 30) };
  localStorage.setItem(RULES_KEY, JSON.stringify(investmentRules));
  renderRules();
  $("#set-rule").textContent = "✓ 已设为下轮规则";
  showToast("规则已保存，下轮训练仍可修改");
});

function showToast(text) {
  const toast = $("#toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

saveEntries();
saveAccount();
renderRules();
renderDay();
renderJournal();
renderReview();
renderHome();
renderStrategy();
loadFundCatalog();

if (!localStorage.getItem("ftm-preview-onboarding-v5-seen")) {
  openOnboarding();
}
