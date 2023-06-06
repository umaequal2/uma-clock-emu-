const {
  SurfaceLimit,
  StyleLimit,
  DistanceLimit,
  SURFACE,
  STYLE,
  DISTANCE,
} = require("./constants");

function normalSkillData(thiz) {
  return {
    passive: [
      {
        rare: { id: 202051, name: "大逃げ", value: 0 },
        status: [],
        styleLimit: StyleLimit.Nige,
        check: function () {
          return thiz.isRunningStyle(STYLE.NIGE);
        },
        trigger: function () {
          thiz.oonige = true;
        },
      },
      {
        normal: { id: 200022, name: "左回り○", value: 40 },
        rare: { id: 200021, name: "左回り◎", value: 60 },
        status: ["speed"],
        courseLimit: {
          turn: [2],
        },
      },
      {
        normal: { id: 200012, name: "右回り○", value: 40 },
        rare: { id: 200011, name: "右回り◎", value: 60 },
        status: ["speed"],
        courseLimit: {
          turn: [1],
        },
      },
      {
        normal: { name: "季節ウマ娘○", value: 40 },
        rare: { name: "季節ウマ娘◎", value: 60 },
        status: ["speed"],
        emulatorTypeLimit: ["cm"],
        check: function () {
          return thiz.emulatorType === "cm";
        },
      },
      {
        normal: { id: 200272, name: "おひとり様○", value: 60 },
        rare: { id: 200271, name: "おひとり様◎", value: 80 },
        status: ["speed"],
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 200302, name: "伏兵○", value: 40 },
        rare: { id: 200301, name: "伏兵◎", value: 60 },
        status: ["speed"],
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 200262, name: "外枠得意○", value: 40 },
        rare: { id: 200261, name: "外枠得意◎", value: 60 },
        status: ["speed"],
        tooltip: "発動率44%として扱う(チャンピオンズミーティング基準)",
        triggerRate: 4.0 / 9,
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 201631, name: "シンパシー", value: 40 },
        status: ["speed"],
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 201641, name: "一匹狼", value: 40 },
        status: ["speed"],
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 200082, name: "札幌レース場○", value: 40 },
        rare: { id: 200081, name: "札幌レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10001],
        },
      },
      {
        normal: { id: 200092, name: "函館レース場○", value: 40 },
        rare: { id: 200091, name: "函館レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10002],
        },
      },
      {
        normal: { id: 200112, name: "新潟レース場○", value: 40 },
        rare: { id: 200111, name: "新潟レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10003],
        },
      },
      {
        normal: { id: 200102, name: "福島レース場○", value: 40 },
        rare: { id: 200101, name: "福島レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10004],
        },
      },
      {
        normal: { id: 200042, name: "中山レース場○", value: 40 },
        rare: { id: 200041, name: "中山レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10005],
        },
      },
      {
        normal: { id: 200032, name: "東京レース場○", value: 40 },
        rare: { id: 200031, name: "東京レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10006],
        },
      },
      {
        normal: { id: 200072, name: "中京レース場○", value: 40 },
        rare: { id: 200071, name: "中京レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10007],
        },
      },
      {
        normal: { id: 200062, name: "京都レース場○", value: 40 },
        rare: { id: 200061, name: "京都レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10008],
        },
      },
      {
        normal: { id: 200052, name: "阪神レース場○", value: 40 },
        rare: { id: 200051, name: "阪神レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10009],
        },
      },
      {
        normal: { id: 200122, name: "小倉レース場○", value: 40 },
        rare: { id: 200121, name: "小倉レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10010],
        },
      },
      {
        normal: { id: 200952, name: "大井レース場○", value: 40 },
        rare: { id: 200951, name: "大井レース場◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10101],
        },
      },
      {
        normal: { id: 200132, name: "根幹距離○", value: 40 },
        rare: { id: 200131, name: "根幹距離◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          distance: [1200, 1600, 2000, 2400, 2800, 3200, 3600],
        },
      },
      {
        normal: { id: 200142, name: "非根幹距離○", value: 40 },
        rare: { id: 200141, name: "非根幹距離◎", value: 60 },
        status: ["stamina"],
        courseLimit: {
          distance: [
            1000, 1100, 1300, 1400, 1500, 1700, 1800, 1900, 2100, 2200, 2300,
            2500, 2600, 2700, 2900, 3000, 3100, 3300, 3400, 3500,
          ],
        },
      },
      {
        normal: { id: 200152, name: "良バ場○", value: 40 },
        rare: { id: 200151, name: "良バ場◎", value: 60 },
        surfaceConditionLimit: ["0"],
        status: ["power"],
        check: function () {
          return thiz.track.surfaceCondition === "0";
        },
      },
      {
        normal: { id: 200162, name: "道悪○", value: 40 },
        rare: { id: 200161, name: "道悪◎", value: 60 },
        surfaceConditionLimit: ["1", "2", "3"],
        status: ["power"],
        check: function () {
          return thiz.track.surfaceCondition !== "0";
        },
      },
      {
        normal: { id: 200282, name: "対抗意識○", value: 40 },
        rare: { id: 200281, name: "対抗意識◎", value: 60 },
        status: ["power"],
        check: function () {
          return true;
        },
      },
      {
        normal: { name: "天気の日○", value: 40 },
        rare: { name: "天気の日◎", value: 60 },
        status: ["guts"],
        emulatorTypeLimit: ["cm"],
        check: function () {
          return thiz.emulatorType === "cm";
        },
      },
      {
        normal: { id: 200292, name: "徹底マーク○", value: 40 },
        rare: { id: 200291, name: "徹底マーク◎", value: 60 },
        status: ["guts"],
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 200252, name: "内枠得意○", value: 40 },
        rare: { id: 200251, name: "内枠得意◎", value: 60 },
        status: ["wisdom"],
        tooltip: "発動率33%として扱う(チャンピオンズミーティング基準)",
        triggerRate: 3.0 / 9,
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 201522, name: "逃げのコツ○", value: 40 },
        rare: { id: 201521, name: "逃げのコツ◎", value: 60 },
        status: ["wisdom"],
        styleLimit: [1],
        check: function () {
          return thiz.isRunningStyle(STYLE.NIGE);
        },
      },
      {
        normal: { id: 201532, name: "先行のコツ○", value: 40 },
        rare: { id: 201531, name: "先行のコツ◎", value: 60 },
        status: ["wisdom"],
        styleLimit: [2],
        check: function () {
          return thiz.isRunningStyle(2);
        },
      },
      {
        normal: { id: 201542, name: "差しのコツ○", value: 40 },
        rare: { id: 201541, name: "差しのコツ◎", value: 60 },
        status: ["wisdom"],
        styleLimit: [3],
        check: function () {
          return thiz.isRunningStyle(3);
        },
      },
      {
        normal: { id: 201552, name: "追込のコツ○", value: 40 },
        rare: { id: 201551, name: "追込のコツ◎", value: 60 },
        status: ["wisdom"],
        styleLimit: [4],
        check: function () {
          return thiz.isRunningStyle(4);
        },
      },
      {
        normal: { id: 201562, name: "ラッキーセブン", value: 40 },
        rare: { id: 201561, name: "スーパーラッキーセブン", value: 60 },
        status: ["speed", "stamina", "power"],
        tooltip: "発動率1/18として扱う(チャンピオンズミーティング基準)",
        triggerRate: 1.0 / 18,
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 200172, name: "春ウマ娘○", value: 40 },
        rare: { id: 200171, name: "春ウマ娘◎", value: 60 },
        status: ["speed"],
        tooltip: "発動率40%として扱う。",
        emulatorTypeLimit: ["team"],
        check: function () {
          return thiz.season === 0;
        },
      },
      {
        normal: { id: 200182, name: "夏ウマ娘○", value: 40 },
        rare: { id: 200181, name: "夏ウマ娘◎", value: 60 },
        status: ["speed"],
        tooltip: "発動率20%として扱う。",
        emulatorTypeLimit: ["team"],
        check: function () {
          return thiz.season === 1;
        },
      },
      {
        normal: { id: 200192, name: "秋ウマ娘○", value: 40 },
        rare: { id: 200191, name: "秋ウマ娘◎", value: 60 },
        status: ["speed"],
        tooltip: "発動率20%として扱う。",
        emulatorTypeLimit: ["team"],
        check: function () {
          return thiz.season === 2;
        },
      },
      {
        normal: { id: 200202, name: "冬ウマ娘○", value: 40 },
        rare: { id: 200201, name: "冬ウマ娘◎", value: 60 },
        status: ["speed"],
        tooltip: "発動率20%として扱う。",
        emulatorTypeLimit: ["team"],
        check: function () {
          return thiz.season === 3;
        },
      },
      {
        normal: { id: 200212, name: "晴れの日○", value: 40 },
        rare: { id: 200211, name: "晴れの日◎", value: 60 },
        status: ["guts"],
        tooltip: "発動率57.5%として扱う。",
        emulatorTypeLimit: ["team"],
        check: function () {
          return thiz.weather === 0;
        },
      },
      {
        normal: { id: 200222, name: "曇りの日○", value: 40 },
        rare: { id: 200221, name: "曇りの日◎", value: 60 },
        status: ["guts"],
        tooltip: "発動率30%として扱う。",
        emulatorTypeLimit: ["team"],
        check: function () {
          return thiz.weather === 1;
        },
      },
      {
        normal: { id: 200232, name: "雨の日○", value: 40 },
        rare: { id: 200231, name: "雨の日◎", value: 60 },
        status: ["guts"],
        tooltip: "発動率11%として扱う。",
        emulatorTypeLimit: ["team"],
        check: function () {
          return thiz.weather === 2;
        },
      },
      {
        normal: { id: 200242, name: "雪の日○", value: 40 },
        rare: { id: 200241, name: "雪の日◎", value: 60 },
        status: ["guts"],
        tooltip: "発動率1.5%として扱う。",
        emulatorTypeLimit: ["team"],
        check: function () {
          return thiz.weather === 3;
        },
      },
      {
        rare: { id: 200194, name: "初嵐", value: 60 },
        status: ["speed", "power"],
        check: function () {
          return true;
        },
      },
      {
        rare: { id: 200174, name: "春一番", value: 60 },
        status: ["speed", "power"],
        check: function () {
          return true;
        },
      },
      {
        rare: { id: 200154, name: "良バ場の鬼", value: 60 },
        surfaceConditionLimit: ["1"],
        status: ["speed", "power"],
        check: function () {
          return thiz.track.surfaceCondition === "1";
        },
      },
      {
        rare: { id: 200014, name: "右回りの鬼", value: 60 },
        courseLimit: {
          turn: [1],
        },
        status: ["speed", "power"],
        check: function () {
          return thiz.track.turn === "1";
        },
      },
      {
        normal: {
          id: 202161,
          name: "自制心",
          passiveBonus: { wisdom: 60, temptationRate: -3 },
        },
        tooltip: "掛かり率は固定で-3%として処理",
        check: () => true,
      },
      {
        rare: { id: 202251, name: "交流重賞◎", value: 60 },
        normal: { id: 202252, name: "交流重賞○", value: 40 },
        status: ["speed"],
        courseLimit: {
          surface: [SURFACE.DIRT],
        },
      },
      {
        rare: { id: 202331, name: "抜群の踏み込み", value: 80 },
        normal: { id: 202332, name: "踏み込み上手", value: 60 },
        surfaceLimit: SurfaceLimit.Dirt,
        status: ["speed"],
        check: function () {
          return thiz.isSurfaceType(SURFACE.DIRT);
        },
        trigger: function (skill) {
          if (skill.id === 202331) {
            if (thiz.umaStatus.power >= 1200) {
              thiz.passiveBonus.speed += 80;
            } else if (thiz.umaStatus.power >= 1000) {
              thiz.passiveBonus.speed += 60;
            }
          } else {
            if (thiz.umaStatus.power >= 1200) {
              thiz.passiveBonus.speed += 40;
            } else if (thiz.umaStatus.power >= 1000) {
              thiz.passiveBonus.speed += 20;
            }
          }
        },
      },
      {
        rare: { id: 202201, name: "川崎レース場◎", value: 60 },
        normal: { id: 202202, name: "川崎レース場○", value: 40 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10103],
        },
      },
      {
        rare: { id: 202211, name: "船橋レース場◎", value: 60 },
        normal: { id: 202212, name: "船橋レース場○", value: 40 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10104],
        },
      },
      {
        rare: { id: 202221, name: "盛岡レース場◎", value: 60 },
        normal: { id: 202222, name: "盛岡レース場○", value: 40 },
        status: ["stamina"],
        courseLimit: {
          raceTrackId: [10105],
        },
      },
      {
        rare: { id: 202231, name: "ナイター◎", value: 60 },
        normal: { id: 202232, name: "ナイター○", value: 40 },
        status: ["wisdom"],
        check: function () {
          return true;
        },
      },
      {
        rare: { id: 202241, name: "小回り◎", value: 60 },
        normal: { id: 202242, name: "小回り○", value: 40 },
        status: ["wisdom"],
        courseLimit: {
          raceTrackId: [10001, 10002, 10004, 10010, 10103, 10104],
        },
      },
      {
        rare: { id: 202342, name: "泥遊び◎", value: 60 },
        normal: { id: 202343, name: "泥遊び○", value: 40 },
        surfaceLimit: SurfaceLimit.Dirt,
        surfaceConditionLimit: ["2", "3"],
        status: ["speed"],
        check: function () {
          return (
            (thiz.isSurfaceType(SURFACE.DIRT) &&
              thiz.track.surfaceCondition === "2") ||
            thiz.track.surfaceCondition === "3"
          );
        },
      },
      {
        rare: { id: 202341, name: "泥んこマイスター", value: 60 },
        surfaceLimit: SurfaceLimit.Dirt,
        surfaceConditionLimit: ["2", "3"],
        status: ["speed", "power"],
        check: function () {
          return (
            (thiz.isSurfaceType(SURFACE.DIRT) &&
              thiz.track.surfaceCondition === "2") ||
            thiz.track.surfaceCondition === "3"
          );
        },
      },
      {
        rare: { id: 202441, name: "勝負師", value: 80 },
        normal: { id: 202442, name: "やまっけ", value: 40 },
        status: ["speed", "guts", "power"],
        tooltip: "発動率60%として扱う",
        triggerRate: 0.6,
        check: function () {
          return true;
        },
      },
    ],
    // End of passive skills
    heal: [
      {
        normal: { id: 200352, name: "コーナー回復○", value: 150 },
        rare: { id: 200351, name: "円弧のマエストロ", value: 550 },
        init: function () {
          this.randoms = thiz.initCornerRandom();
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 200382, name: "直線回復", value: 150 },
        rare: { id: 200381, name: "好転一息", value: 550 },
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 200742, name: "深呼吸", value: 150 },
        rare: { id: 200741, name: "クールダウン", value: 550 },
        distanceLimit: DistanceLimit.Long,
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(DISTANCE.LONG) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201571, name: "スリーセブン", value: 150 },
        check: function (startPosition) {
          return thiz.isContainsRemainingDistance(777, startPosition);
        },
      },
      {
        normal: { id: 201621, name: "ふり絞り", value: 150 },
        check: function () {
          return thiz.skillTriggerCount[2] + thiz.skillTriggerCount[3] >= 3;
        },
      },
      {
        normal: { id: 201482, name: "下校の楽しみ", value: 150 },
        rare: { id: 201481, name: "下校後のスペシャリスト", value: 550 },
        styleLimit: [4],
        check: function () {
          return (
            thiz.accTimePassed(10) &&
            thiz.isRunningStyle(4) &&
            thiz.isInSlope("down")
          );
        },
      },
      {
        normal: { id: 201282, name: "勢い任せ", value: 150 },
        rare: { id: 201281, name: "じゃじゃウマ娘", value: 550 },
        styleLimit: [1],
        check: function () {
          return (
            thiz.accTimePassed(10) &&
            thiz.isRunningStyle(1) &&
            thiz.isInSlope("up")
          );
        },
      },
      {
        normal: { id: 201352, name: "栄養補給", value: 150 },
        rare: { id: 201351, name: "食いしん坊", value: 550 },
        styleLimit: [2],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200572, name: "好位追走", value: 150 },
        rare: { id: 200571, name: "レースプランナー", value: 550 },
        styleLimit: [2],
        tooltip: "順位<=50%は満たしていると見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200662, name: "様子見", heal: 150, acceleration: 0.1 },
        styleLimit: [3, 4],
        distanceLimit: [1],
        tooltip: "順位>50%は満たしていると見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201222, name: "スタミナイーター", value: 150 },
        rare: { id: 201221, name: "スタミナグリード", value: 350 },
        styleLimit: [2, 3, 4],
        distanceLimit: [4],
        tooltip: "5番手かそれ以降満たしていると見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200712, name: "前途洋々", value: 150 },
        rare: { id: 200711, name: "切り開く者", value: 550 },
        styleLimit: [1, 2],
        distanceLimit: [3],
        tooltip:
          "ランダム発動地点で1番手限定なので見た目以上に発動が厳しい。これを満たしていると見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200622, name: "後方待機", value: 150 },
        rare: { id: 200621, name: "眠れる獅子", value: 550 },
        styleLimit: [4],
        tooltip:
          "位置>=75%は満たしていると見なす。先行勢より条件が難しいので注意すべし。特にゴルシ。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 201201, name: "VIP顔パス", value: 550 },
        normal: { id: 201202, name: "パス上手", value: 150 },
        distanceLimit: [4],
        tooltip: "「序盤か中盤のどこかで発動」として扱う。適当実装注意。",
        init: function () {
          if (Math.random() < 0.333) {
            this.randoms = thiz.initPhaseRandom(0);
          } else {
            this.randoms = thiz.initPhaseRandom(1);
          }
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.accTimePassed(5) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201142, name: "軽やかステップ", value: 150 },
        rare: { id: 201141, name: "神業ステップ", value: 550 },
        distanceLimit: [3],
        tooltip:
          "「スタート後20秒で発動」として扱う。大体そこら辺で内コースを取り始めるため。多分（ガバ）",
        check: function () {
          return thiz.isDistanceType(3) && thiz.accTimePassed(20);
        },
      },
      {
        normal: { id: 200562, name: "スタミナキープ", value: 150 },
        rare: { id: 200561, name: "余裕綽々", value: 550 },
        styleLimit: [2],
        init: function () {
          this.randoms = thiz.initIntervalRandom(1.0 / 12, 1.0 / 6);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200692, name: "展開窺い", value: 150 },
        rare: { id: 200691, name: "慧眼", value: 550 },
        distanceLimit: [2],
        styleLimit: [3, 4],
        tooltip: "順位>50%は満たしていると見なす。実質差し追込限定。",
        init: function () {
          this.randoms = thiz.initIntervalRandom(1.0 / 12, 1.0 / 6);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201422, name: "小休憩", value: 150 },
        rare: { id: 201421, name: "リラックス", value: 550 },
        styleLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200442, name: "隠れ蓑", value: 150 },
        rare: { id: 200441, name: "鋼の意志", value: 550 },
        init: function () {
          this.randoms = thiz.initIntervalRandom(0, 0.666);
        },
        check: function (startPosition) {
          thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 201492, name: "冷静", value: 150 },
        rare: { id: 201491, name: "冷静沈着", value: 550 },
        styleLimit: [4],
        tooltip: "「中盤のどこかで発動」として扱う。適当実装注意。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.accTimePassed(10) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200472, name: "ペースキープ", value: 150 },
        rare: { id: 200471, name: "不屈の心", value: 550 },
        tooltip:
          "「中盤のどこか」として扱う。実戦で発動できるかどうかは各自判断すべし。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 200482, name: "ウマ込み冷静", value: 150 },
        rare: { id: 200481, name: "どこ吹く風", value: 550 },
        tooltip:
          "「中盤のどこか」として扱う。実戦で発動できるかどうかは各自判断すべし。ていうかあまり発動しないんじゃね？",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 200762, name: "別腹タンク", value: 150 },
        rare: { id: 200761, name: "火事場のバ鹿力", value: 550 },
        distanceLimit: [4],
        check: function () {
          return thiz.isDistanceType(4) && thiz.sp <= thiz.spMax * 0.3;
        },
      },
      {
        normal: { id: 210022, name: "アオハル点火・体", value: 165 },
        rare: { id: 210021, name: "アオハル燃焼・体", value: 605 },
        tooltip: "効果1.1倍として扱う",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 201692, name: "静かな呼吸", value: 150 },
        rare: { id: 201691, name: "潜伏態勢", value: 550 },
        styleLimit: StyleLimit.Sasi,
        init: function () {
          this.randoms = thiz.initPhaseRandom(0, { startRate: 0.5 });
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(STYLE.SASI) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202001, name: "砂の玄人", heal: 550 },
        normal: { id: 202002, name: "砂塵慣れ", heal: 150 },
        styleLimit: StyleLimit.Behind,
        surfaceLimit: SurfaceLimit.Dirt,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202071, name: "泰然自若", heal: 750, speed: -0.15 },
        normal: { id: 202072, name: "マイペース", heal: 350, speed: -0.15 },
        duration: 1.2,
        distanceLimit: DistanceLimit.Long,
        tooltip: "4-7位",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1, { endRate: 0.5 });
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(DISTANCE.LONG) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202191, name: "一意専心", heal: 750 },
        normal: { id: 202192, name: "抜かりなし", heal: 350 },
        styleLimit: StyleLimit.Sen,
        distanceLimit: DistanceLimit.Long,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1, { endRate: 0.5 });
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(DISTANCE.LONG) &&
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition) &&
            thiz.startDelay < 0.08
          );
        },
      },
      // End of heal skills
    ],
    targetSpeed: [
      {
        normal: { id: 200332, name: "コーナー巧者○", value: 0.15 },
        rare: { id: 200331, name: "弧線のプロフェッサー", value: 0.35 },
        duration: 2.4,
        cd: 30,
        conditions: {
          all_corner_random: 1,
        },
      },
      {
        normal: { id: 200972, name: "短距離コーナー○", value: 0.15 },
        rare: { id: 200971, name: "短距離コーナー◎", value: 0.25 },
        duration: 3,
        distanceLimit: [1],
        conditions: {
          all_corner_random: 1,
          distance_type: 1,
        },
      },
      {
        normal: { id: 201042, name: "マイルコーナー○", value: 0.15 },
        rare: { id: 201041, name: "マイルコーナー◎", value: 0.25 },
        duration: 3,
        distanceLimit: [2],
        conditions: {
          all_corner_random: 1,
          distance_type: 2,
        },
      },
      {
        normal: { id: 201112, name: "中距離コーナー○", value: 0.15 },
        rare: { id: 201111, name: "中距離コーナー◎", value: 0.25 },
        duration: 3,
        distanceLimit: [3],
        conditions: {
          all_corner_random: 1,
          distance_type: 3,
        },
      },
      {
        normal: { id: 201182, name: "長距離コーナー○", value: 0.15 },
        rare: { id: 201181, name: "長距離コーナー◎", value: 0.25 },
        duration: 3,
        distanceLimit: [4],
        conditions: {
          all_corner_random: 1,
          distance_type: 4,
        },
      },
      {
        normal: { id: 201252, name: "逃げコーナー○", value: 0.15 },
        rare: { id: 201251, name: "逃げコーナー◎", value: 0.25 },
        duration: 3,
        styleLimit: [1],
        conditions: {
          all_corner_random: 1,
          running_style: 1,
        },
      },
      {
        normal: { id: 201322, name: "先行コーナー○", value: 0.15 },
        rare: { id: 201321, name: "先行コーナー◎", value: 0.25 },
        duration: 3,
        styleLimit: [2],
        conditions: {
          all_corner_random: 1,
          running_style: 2,
        },
      },
      {
        normal: { id: 201392, name: "差しコーナー○", value: 0.15 },
        rare: { id: 201391, name: "差しコーナー◎", value: 0.25 },
        duration: 3,
        styleLimit: [3],
        conditions: {
          all_corner_random: 1,
          running_style: 3,
        },
      },
      {
        normal: { id: 201462, name: "追込コーナー○", value: 0.15 },
        rare: { id: 201461, name: "追込コーナー◎", value: 0.25 },
        duration: 3,
        styleLimit: [4],
        conditions: {
          all_corner_random: 1,
          running_style: 4,
        },
      },
      {
        normal: { id: 200362, name: "直線巧者", value: 0.15 },
        rare: { id: 200361, name: "ハヤテ一文字", value: 0.35 },
        duration: 2.4,
        cd: 30,
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 200962, name: "短距離直線○", value: 0.15 },
        rare: { id: 200961, name: "短距離直線◎", value: 0.25 },
        duration: 3,
        distanceLimit: [1],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201032, name: "マイル直線○", value: 0.15 },
        rare: { id: 201031, name: "マイル直線◎", value: 0.25 },
        duration: 3,
        distanceLimit: [2],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201102, name: "中距離直線○", value: 0.15 },
        rare: { id: 201101, name: "中距離直線◎", value: 0.25 },
        duration: 3,
        distanceLimit: [3],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201172, name: "長距離直線○", value: 0.15 },
        rare: { id: 201171, name: "長距離直線◎", value: 0.25 },
        duration: 3,
        distanceLimit: [4],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201242, name: "逃げ直線○", value: 0.15 },
        rare: { id: 201241, name: "逃げ直線◎", value: 0.25 },
        duration: 3,
        styleLimit: [1],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201312, name: "先行直線○", value: 0.15 },
        rare: { id: 201311, name: "先行直線◎", value: 0.25 },
        duration: 3,
        styleLimit: [2],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201382, name: "差し直線○", value: 0.15 },
        rare: { id: 201381, name: "差し直線◎", value: 0.25 },
        duration: 3,
        styleLimit: [3],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201452, name: "追込直線○", value: 0.15 },
        rare: { id: 201451, name: "追込直線◎", value: 0.25 },
        duration: 3,
        styleLimit: [4],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200542, name: "急ぎ足", value: 0.15 },
        rare: { id: 200541, name: "脱出術", value: 0.35 },
        duration: 3,
        styleLimit: [1],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200592, name: "位置取り押し上げ", value: 0.15 },
        rare: { id: 200591, name: "迅速果断", value: 0.35 },
        duration: 2.4,
        styleLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200582, name: "抜け出し準備", value: 0.15 },
        rare: { id: 200581, name: "スピードスター", value: 0.35 },
        duration: 1.8,
        styleLimit: [2],
        tooltip: "順位条件の<=50%は満たしていると見なす",
        init: function () {
          this.randoms = thiz.initFinalCornerRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200612, name: "外差し準備", value: 0.15 },
        rare: { id: 200611, name: "昇り龍", value: 0.35 },
        duration: 3,
        styleLimit: [3],
        tooltip: "「最終コーナーのどこか」として扱う。当てにならない。",
        init: function () {
          this.randoms = thiz.initFinalCornerRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201412, name: "十万バリキ", value: 0.15 },
        rare: { id: 201411, name: "百万バリキ", value: 0.35 },
        duration: 2.4,
        styleLimit: [3],
        conditions: {
          up_slope_random: 1,
          running_style: 3,
        },
      },
      {
        normal: { id: 200982, name: "大きなリード", value: 0.15 },
        rare: { id: 200981, name: "圧倒的リード", value: 0.35 },
        duration: 3,
        distanceLimit: [1],
        tooltip:
          "中盤に入った瞬間に1位で5馬身リードしていると見なす。見なすな。",
        check: function () {
          return thiz.isDistanceType(1) && thiz.isPhase(1);
        },
      },
      {
        normal: { id: 200682, name: "積極策", value: 0.15 },
        rare: { id: 200681, name: "マイルの支配者", value: 0.35 },
        duration: 3,
        distanceLimit: [2],
        styleLimit: [1, 2],
        tooltip: "順位1位を満たしたと見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition) &&
            thiz.accTimePassed(5)
          );
        },
      },
      {
        normal: { id: 201052, name: "ギアシフト", value: 0.15 },
        rare: { id: 201051, name: "ギアチェンジ", value: 0.35 },
        duration: 2.4,
        distanceLimit: [2],
        styleLimit: [1, 2],
        tooltip: "順位<=50%を満たしたと見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201072, name: "負けん気", value: 0.15 },
        rare: { id: 201071, name: "姉御肌", value: 0.35 },
        duration: 2.4,
        distanceLimit: [2],
        tooltip: "「中盤のどこか」として扱う。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition) &&
            thiz.accTimePassed(5)
          );
        },
      },
      {
        normal: { id: 200722, name: "テンポアップ", value: 0.15 },
        rare: { id: 200721, name: "キラーチューン", value: 0.35 },
        duration: 2.4,
        distanceLimit: [3],
        styleLimit: [1, 2],
        tooltip: "順位<=50%を満たしたと見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200752, name: "内弁慶", value: 0.15 },
        rare: { id: 200751, name: "内的体験", value: 0.35 },
        duration: 3,
        distanceLimit: [4],
        tooltip: "内ラチ側にいると見なす。実質逃げ馬用かな？知らないけど。",
        init: function () {
          this.randoms = thiz.initFinalCornerRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201192, name: "リードキープ", value: 0.15 },
        rare: { id: 201191, name: "先陣の心得", value: 0.35 },
        duration: 3,
        distanceLimit: [4],
        tooltip: "「中盤のどこか」の時に1馬身リードしていると見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 201662, name: "お先に失礼っ！", value: 0.35 },
        normal: { id: 201661, name: "遊びはおしまいっ！", value: 0.15 },
        duration: 3,
        tooltip: "「中盤のどこかで発動」として扱う。ガバガバ実装。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.accTimePassed(10) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 201652, name: "いいとこ入った！", value: 0.35 },
        normal: { id: 201651, name: "スリップストリーム", value: 0.15 },
        duration: 3,
        tooltip: "「中盤のどこかで発動」として扱う。ガバガバ実装。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.accTimePassed(10) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200632, name: "仕掛け抜群", value: 0.15 },
        rare: { id: 200631, name: "疾風怒濤", value: 0.35 },
        duration: 3,
        styleLimit: [4],
        tooltip: "位置>75%を満たしたと見なす。実戦は条件を注意すべし。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 201211, name: "怒涛の追い上げ", value: 0.35 },
        normal: { id: 201212, name: "追い上げ", value: 0.15 },
        duration: 3,
        distanceLimit: [4],
        tooltip:
          "「終盤のどこか」として扱う。実際は加速中に消化されるのが大半。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201082, name: "スピードイーター", value: 0.15 },
        duration: 3,
        styleLimit: [1, 2],
        distanceLimit: [2],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200462, name: "ペースアップ", value: 0.15 },
        rare: { id: 200461, name: "アガッてきた！", value: 0.35 },
        duration: 1.8,
        tooltip: "「中盤のどこかで発動」として扱う。ガバガバ実装。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function す(startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 201672, name: "レコメンド", value: 0.15 },
        rare: { id: 201671, name: "チャート急上昇！", value: 0.35 },
        duration: 2.4,
        surfaceLimit: SurfaceLimit.Dirt,
        tooltip: "「中盤のどこか」として扱う。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200512, name: "末脚", value: 0.15 },
        rare: { id: 200511, name: "全身全霊", value: 0.35 },
        duration: 2.4,
        init: function () {
          this.randoms = thiz.initPhaseRandom(3);
        },
        check: function (startPosition) {
          return thiz.isInSpurt && thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 201611, name: "尻尾上がり", value: 0.15 },
        rare: { id: 201612, name: "尻尾の滝登り", value: 0.35 },
        duration: 3,
        check: function () {
          return thiz.skillTriggerCount[1] >= 3;
        },
      },
      {
        normal: { id: 210012, name: "アオハル点火・速", value: 0.1725 },
        rare: { id: 210011, name: "アオハル燃焼・速", value: 0.4025 },
        duration: 1.8,
        tooltip: "効果1.15倍として扱う",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 201702, name: "ありったけ", value: 0.15 },
        rare: { id: 201701, name: "決死の覚悟", value: 0.35 },
        duration: 2.4,
        check: function () {
          return thiz.isInStraight() && thiz.isInSpurt;
        },
      },
      {
        normal: { id: 202012, name: "影打", value: 0.15 },
        rare: { id: 202011, name: "真打", value: 0.35 },
        duration: 2.4,
        distanceLimit: DistanceLimit.Long,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1, {
            startRate: 0.5,
            endRate: 1,
          });
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 202021, name: "早仕掛け", value: 0.05 },
        rare: { id: 202022, name: "強攻策", value: 0.25 },
        duration: 4,
        styleLimit: StyleLimit.Oi,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 201103, name: "光芒一閃", value: 0.35 },
        duration: 3,
        distanceLimit: [3],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 201173, name: "烈風一閃", value: 0.35 },
        duration: 3,
        distanceLimit: [4],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 201453, name: "月影一閃", value: 0.35 },
        duration: 3,
        styleLimit: StyleLimit.Oi,
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 200963, name: "紫電一閃", value: 0.35 },
        duration: 3,
        distanceLimit: [1],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202061, name: "日本一のウマ娘", value: 0.35 },
        duration: 3,
        distanceLimit: [4],
        init: function () {
          this.randoms = thiz.initFinalCornerRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201591, name: "ウマ好み", value: 0.15 },
        rare: { id: 201592, name: "ウママニア", value: 0.35 },
        duration: 3,
        tooltip: "開始5秒で即発動扱い",
        check: function () {
          return thiz.accTimePassed(5);
        },
      },
      {
        rare: { id: 201271, name: "トップランナー", value: 0.35 },
        normal: { id: 201272, name: "先頭プライド", value: 0.15 },
        duration: 3,
        styleLimit: StyleLimit.Nige,
        tooltip: "9%～25%の間のランダム位置で発動として扱う",
        init: function () {
          this.randoms = thiz.initIntervalRandom(0.09, 0.25);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        rare: { id: 202101, name: "高揚感", value: 0.35 },
        normal: { id: 202102, name: "前のめり", value: 0.15 },
        duration: 2.4,
        styleLimit: StyleLimit.Behind,
        distanceLimit: DistanceLimit.Middle,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202111, name: "破竹の勢い", value: 0.35 },
        normal: { id: 202112, name: "気合十分", value: 0.15 },
        duration: 1.8,
        distanceLimit: DistanceLimit.Mile,
        tooltip: ">=50%(5～9位)",
        init: function () {
          this.randoms = thiz.initFinalCornerRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202131, name: "荒ぶる旋風", value: 0.35 },
        normal: { id: 202132, name: "気迫を込めて", value: 0.15 },
        duration: 1.8,
        styleLimit: [1, 2],
        distanceLimit: [3],
        tooltip: "1～3位。デバフは金0.15/白0.035。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202171, name: "至高のダウンヒラー", value: 0.35 },
        normal: { id: 202172, name: "下り坂巧者", value: 0.15 },
        duration: 2.4,
        conditions: {
          down_slope_random: 1,
        },
      },
      {
        rare: { id: 202041, name: "意気衝天", value: 0.35 },
        normal: { id: 202042, name: "軽い足取り", value: 0.15 },
        duration: 2.4,
        distanceLimit: [1],
        tooltip: "1～5位",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1, { startRate: 0.5 });
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202261, name: "勝利の機運", value: 0.35 },
        normal: { id: 202262, name: "明るい兆し", value: 0.15 },
        duration: 2.4,
        surfaceLimit: SurfaceLimit.Dirt,
        tooltip: "1～5位",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1, { startRate: 0.5 });
        },
        check: function (startPosition) {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202271, name: "捲土重来", value: 0.35 },
        normal: { id: 202272, name: "盛り返し", value: 0.15 },
        duration: 2.4,
        surfaceLimit: SurfaceLimit.Dirt,
        tooltip: "6～9位。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202281, name: "全速前進！", value: 0.35 },
        normal: { id: 202282, name: "まっしぐら", value: 0.15 },
        duration: 3,
        surfaceLimit: SurfaceLimit.Dirt,
        tooltip: "1～5位。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(3);
        },
        check: function (startPosition) {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isInRandom(this.randoms, startPosition) &&
            thiz.isInSpurt
          );
        },
      },
      {
        rare: { id: 202291, name: "明鏡止水", value: 0.35 },
        normal: { id: 202292, name: "冴える思考", value: 0.15 },
        duration: 1.8,
        surfaceLimit: SurfaceLimit.Dirt,
        tooltip: "6～9位。",
        check: function () {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isPhase(1) &&
            thiz.healTriggerCount > 0 &&
            thiz.isInDistanceRate(0, 0.42)
          );
        },
      },
      {
        rare: { id: 202301, name: "優雅な砂浴び", value: 0.35 },
        normal: { id: 202302, name: "砂浴び○", value: 0.15 },
        duration: 3,
        surfaceLimit: SurfaceLimit.Dirt,
        tooltip: "開始5秒で即発動扱い。逃げで使う場合は自己責任で。",
        check: function () {
          return thiz.isSurfaceType(SURFACE.DIRT) && thiz.accTimePassed(5);
        },
      },
      {
        rare: { id: 200591, name: "アンストッパブル", value: 0.35 },
        normal: { id: 200592, name: "攻めの姿勢", value: 0.15 },
        duration: 2.4,
        styleLimit: StyleLimit.Sen,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(STYLE.SEN) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202381, name: "ブレイクスルー", value: 0.35 },
        normal: { id: 202382, name: "打開策", value: 0.15 },
        duration: 2.4,
        styleLimit: StyleLimit.Oi,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202411, name: "風雲の志", value: 0.25 },
        normal: { id: 202412, name: "向上心", value: 0.05 },
        duration: 4,
        tooltip: "60%～66%のランダム区間発動扱い",
        init: function () {
          this.randoms = thiz.initIntervalRandom(0.6, 2.0 / 3);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        rare: { id: 201383, name: "鋭脚一閃", value: 0.35 },
        duration: 3,
        styleLimit: StyleLimit.Sasi,
        conditions: {
          running_style: 3,
          straight_random: 1,
        },
      },
      {
        rare: { id: 202461, name: "踏ませぬ影", value: 0.45 },
        normal: { id: 202462, name: "粘り腰", value: 0.25 },
        duration: 2.4,
        styleLimit: StyleLimit.Nige,
        conditions: {
          running_style: 1,
          is_finalcorner: 1,
          corner: 0,
        },
      },
      {
        rare: { id: 202451, name: "トップギア", value: 0.45 },
        normal: { id: 202452, name: "キレる脚", value: 0.25 },
        duration: 2.4,
        styleLimit: StyleLimit.Sasi,
        conditions: {
          running_style: 3,
          is_finalcorner: 1,
          corner: 0,
        },
      },
      {
        rare: { id: 202471, name: "猛追", value: 0.35 },
        normal: { id: 202472, name: "食らいつき", value: 0.15 },
        duration: 2.4,
        styleLimit: [2, 3],
        conditions: {
          running_style: [2, 3],
          distance_rate: ">=50",
        },
      },
      {
        rare: { id: 202501, name: "遮二無二", value: 0.35 },
        normal: { id: 202502, name: "向こう見ず", value: 0.15 },
        duration: 2.4,
        tooltip: "順位<=50%",
        conditions: {
          distance_type: 2,
          phase_laterhalf_random: 1,
        },
      },
      {
        rare: { id: 201113, name: "光芒円刃", value: 0.35 },
        duration: 3,
        conditions: {
          all_corner_random: 1,
          distance_type: 3,
        },
      },
      {
        rare: { id: 201253, name: "陣風円刃", value: 0.35 },
        duration: 3,
        conditions: {
          all_corner_random: 1,
          running_style: 1,
        },
      },
      {
        rare: { id: 201393, name: "鋭脚円刃", value: 0.35 },
        duration: 3,
        conditions: {
          all_corner_random: 1,
          running_style: 3,
        },
      },
      {
        rare: { id: 202031, name: "博打うち", value: 0.45 },
        normal: { id: 202032, name: "あやしげな作戦", value: 0.25 },
        duration: 1.8,
        init: function () {
          this.randoms = thiz.initIntervalRandom(0.5, 1);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
        trigger: function () {
          const dice = Math.random();
          if (dice < 0.1) {
            thiz.sp -= 0.04 * thiz.spMax;
          } else if (dice < 0.4) {
            thiz.sp -= 0.02 * thiz.spMax;
          }
        },
      },
      // End of target speed skills
    ],
    acceleration: [
      {
        normal: { id: 200342, name: "コーナー加速○", value: 0.2 },
        rare: { id: 200341, name: "曲線のソムリエ", value: 0.4 },
        duration: 3,
        cd: 30,
        conditions: {
          all_corner_random: 1,
        },
      },
      {
        normal: { id: 200372, name: "直線加速", value: 0.2 },
        rare: { id: 200371, name: "一陣の風", value: 0.4 },
        duration: 3,
        cd: 30,
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 200532, name: "先駆け", value: 0.2 },
        rare: { id: 200531, name: "先手必勝", value: 0.4 },
        styleLimit: [1],
        duration: 1.2,
        check: function () {
          return thiz.isRunningStyle(1) && thiz.currentPhase === 0;
        },
      },
      {
        normal: { id: 200552, name: "押し切り準備", value: 0.2 },
        rare: { id: 200551, name: "逃亡者", value: 0.4 },
        styleLimit: [1],
        duration: 3,
        tooltip: "1位は満たしていると見なす",
        init: function () {
          this.randoms = thiz.initFinalCornerRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 200601, name: "乗り換え上手", value: 0.4 },
        normal: { id: 200602, name: "差し切り体勢", value: 0.2 },
        styleLimit: [3],
        duration: 1.8,
        tooltip: "順位>=50%は満たしていると見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 200641, name: "迫る影", value: 0.4 },
        normal: { id: 200642, name: "直線一気", value: 0.2 },
        duration: 0.9,
        styleLimit: [4],
        check: function () {
          return thiz.isRunningStyle(4) && thiz.isInSpurt && !thiz.isInCorner();
        },
      },
      {
        normal: { id: 200652, name: "スプリントギア", value: 0.2 },
        rare: { id: 200651, name: "スプリントターボ", value: 0.4 },
        duration: 3,
        distanceLimit: [1],
        init: function () {
          this.randoms = thiz.initStraightRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200702, name: "上昇気流", value: 0.2 },
        rare: { id: 200701, name: "豪脚", value: 0.4 },
        duration: 3,
        styleLimit: StyleLimit.Behind,
        distanceLimit: DistanceLimit.Mile,
        tooltip: "順位>50%は満たしていると見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201002, name: "仕掛け準備", value: 0.2 },
        rare: { id: 201001, name: "準備万全！", value: 0.3 },
        duration: 3,
        distanceLimit: DistanceLimit.Short,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
        conditions: {
          distance_type: 1,
        },
      },
      {
        normal: { id: 201132, name: "イナズマステップ", value: 0.2 },
        rare: { id: 201131, name: "ライトニングステップ", value: 0.3 },
        duration: 3,
        distanceLimit: DistanceLimit.Middle,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
        conditions: {
          distance_type: 3,
        },
      },
      {
        normal: { id: 200992, name: "善後策", value: 0.2 },
        rare: { id: 200991, name: "プランX", value: 0.4 },
        duration: 3,
        styleLimit: [1, 2],
        distanceLimit: [1],
        init: function () {
          this.randoms = thiz.initIntervalRandom(5.0 / 12, 2.0 / 3);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201062, name: "アクセラレーション", value: 0.2 },
        rare: { id: 201061, name: "アクセル全開！", value: 0.4 },
        duration: 3,
        distanceLimit: [2],
        tooltip: "「中盤のどこかで発動」として扱う。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201292, name: "二の矢", value: 0.2 },
        duration: 3,
        styleLimit: [1],
        tooltip: "「中盤のどこかで発動」として扱う。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201332, name: "巧みなステップ", value: 0.2 },
        rare: { id: 201331, name: "技巧派", value: 0.3 },
        duration: 3,
        styleLimit: [2],
        tooltip: "「スタート後20秒で発動」として扱う。ガバガバ実装。",
        check: function () {
          return thiz.isRunningStyle(2) && thiz.accTimePassed(20);
        },
      },
      {
        normal: { id: 201342, name: "直滑降", value: 0.2 },
        rare: { id: 201341, name: "決意の直滑降", value: 0.3 },
        duration: 3,
        styleLimit: [2],
        conditions: {
          down_slope_random: 1,
          running_style: 2,
        },
      },
      {
        normal: { id: 201581, name: "登山家", value: 0.2 },
        duration: 3,
        conditions: {
          up_slope_random: 1,
        },
      },
      {
        rare: { id: 201361, name: "くじけぬ精神", value: 0.3 },
        normal: { id: 201362, name: "まき直し", value: 0.2 },
        duration: 3,
        styleLimit: [2],
        tooltip: "順位>50%は満たしていると見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201402, name: "がんばり屋", value: 0.2 },
        rare: { id: 201401, name: "努力家", value: 0.3 },
        duration: 4,
        styleLimit: [3],
        tooltip: "「中盤のどこか」として扱う。はいはいガバ実装ガバ実装。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 200492, name: "垂れウマ回避", value: 0.2 },
        rare: { id: 200491, name: "ノンストップガール", value: 0.4 },
        duration: 3,
        tooltip:
          "「終盤のどこか」として扱う。実際に発動するかどうかは自己判断で。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 201601, name: "地固め", value: 0.2 },
        duration: 3,
        tooltip: "「緑スキルや集中力系でスタートと同時に発動」として扱う",
        check: function () {
          return true;
        },
      },
      {
        normal: { id: 210032, name: "アオハル点火・力", value: 0.22 },
        rare: { id: 210031, name: "アオハル燃焼・力", value: 0.44 },
        duration: 1.2,
        tooltip: "効果1.1倍として扱う",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        normal: { id: 201682, name: "前列狙い", value: 0.2 },
        rare: { id: 201681, name: "狙うは最前列！", value: 0.3 },
        duration: 3,
        surfaceLimit: SurfaceLimit.Dirt,
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: { id: 201902, name: "真っ向勝負", value: 0.2 },
        rare: { id: 201901, name: "鍔迫り合い", value: 0.4 },
        styleLimit: [2],
        duration: 1.8,
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202081, name: "起死回生", value: 0.4 },
        normal: { id: 202082, name: "ワンチャンス", value: 0.2 },
        styleLimit: StyleLimit.Behind,
        distanceLimit: DistanceLimit.Middle,
        duration: 1.2,
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(DISTANCE.MIDDLE) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202311, name: "目指せセンター！", value: 0.4 },
        normal: { id: 202312, name: "意気込み十分", value: 0.2 },
        duration: 3,
        surfaceLimit: SurfaceLimit.Dirt,
        tooltip: "1～5位。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202321, name: "爆走モード！", value: 0.4 },
        normal: { id: 202322, name: "急浮上", value: 0.2 },
        duration: 3,
        surfaceLimit: SurfaceLimit.Dirt,
        tooltip: "5～9位。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isSurfaceType(SURFACE.DIRT) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202401, name: "電光石火", value: 0.4 },
        normal: { id: 202402, name: "一足飛び", value: 0.2 },
        duration: 2,
        distanceLimit: DistanceLimit.ShortAndMile,
        tooltip: "5～9位、即発動扱い",
        check: function () {
          return (
            (thiz.isDistanceType(1) || thiz.isDistanceType(2)) &&
            thiz.currentPhase >= 2
          );
        },
      },
      {
        rare: { id: 202481, name: "怪物", value: 0.4 },
        normal: { id: 202482, name: "本領発揮", value: 0.2 },
        duration: 1.2,
        distanceLimit: DistanceLimit.Long,
        styleLimit: StyleLimit.Sen,
        conditions: {
          distance_type: 4,
          running_style: 2,
          phase: 2,
        },
      },
      {
        rare: { id: 202491, name: "抜群の切れ味", value: 0.4 },
        normal: { id: 202492, name: "切れ味", value: 0.2 },
        duration: 1.2,
        styleLimit: StyleLimit.Oi,
        conditions: {
          running_style: 4,
          phase_firsthalf_random: 2,
        },
      },
    ],
    // End of acc skills
    boost: [
      {
        normal: {
          id: 210042,
          name: "アオハル点火・根",
          targetSpeed: 0.055,
          acceleration: 0.11,
        },
        rare: {
          id: 210041,
          name: "アオハル燃焼・根",
          targetSpeed: 0.275,
          acceleration: 0.33,
        },
        duration: 1.8,
        tooltip: "効果1.1倍として扱う",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        rare: {
          id: 210061,
          name: "一番星",
          targetSpeed: 0.3,
          acceleration: 0.36,
          heal: 420,
        },
        normal: {
          id: 210062,
          name: "綺羅星",
          targetSpeed: 0.06,
          acceleration: 0.12,
          heal: 60,
        },
        duration: 1.2,
        tooltip: "効果1.2倍(25戦↑)として扱う",
        conditions: {
          distance_rate_after_random: 50,
        },
      },
      {
        rare: { id: 202091, name: "気炎万丈", targetSpeed: 0.25, heal: 350 },
        normal: { id: 202092, name: "闘争心", targetSpeed: 0.15, heal: 50 },
        duration: 1.8,
        distanceLimit: DistanceLimit.Middle,
        tooltip: "中盤ランダム発動扱い",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: {
          id: 202121,
          name: "大胆不敵",
          targetSpeed: 0.35,
          acceleration: 0.1,
        },
        normal: {
          id: 202122,
          name: "恐れぬ心",
          targetSpeed: 0.15,
          acceleration: 0.05,
        },
        styleLimit: [3],
        duration: 1.8,
        tooltip: ">=40% <=70%(4～6位)",
        init: function () {
          this.randoms = thiz.initIntervalRandom(0.5, 1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202151, name: "勇往邁進", targetSpeed: 0.45, heal: -400 },
        normal: {
          id: 202152,
          name: "フルスロットル",
          targetSpeed: 0.25,
          heal: -400,
        },
        styleLimit: [3],
        duration: 2.4,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: {
          id: 210071,
          name: "キミと勝ちたい",
          targetSpeed: 0.42,
          acceleration: 0.24,
        },
        normal: {
          id: 210072,
          name: "夢の途中",
          targetSpeed: 0.18,
          acceleration: 0.084,
        },
        duration: 1.2,
        tooltip: "1～6位。ファン数16万以上の場合。",
        conditions: {
          distance_rate_after_random: 50,
        },
      },
      {
        rare: {
          id: 202391,
          name: "出力1000％！",
          targetSpeed: 0.45,
          heal: -400,
        },
        normal: {
          id: 202392,
          name: "しゃかりき",
          targetSpeed: 0.25,
          heal: -400,
        },
        duration: 2.7,
        styleLimit: StyleLimit.Nige,
        init: function () {
          this.randoms = thiz.initPhaseRandom(1, { endRate: 0.5 });
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(STYLE.NIGE) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        rare: { id: 202421, name: "無我夢中", acceleration: 0.4, heal: -200 },
        normal: {
          id: 202422,
          name: "がむしゃら",
          acceleration: 0.2,
          heal: -200,
        },
        duration: 1.5,
        distanceLimit: DistanceLimit.Long,
        styleLimit: StyleLimit.Sasi,
        check: function () {
          return (
            thiz.isRunningStyle(STYLE.SASI) &&
            thiz.isDistanceType(4) &&
            thiz.isInSpurt
          );
        },
      },
      {
        rare: {
          id: 202431,
          name: "快進撃",
          targetSpeed: 0.25,
          acceleration: 0.3,
        },
        normal: {
          id: 202432,
          name: "確かな足取り",
          targetSpeed: 0.05,
          acceleration: 0.1,
        },
        duration: 3,
        tooltip: "発動地点に先頭から４馬身以内にいる必要がある",
        distanceLimit: DistanceLimit.Middle,
        styleLimit: StyleLimit.Sen,
        conditions: {
          distance_type: 3,
          running_style: 2,
          phase_laterhalf_random: 1,
        },
      },
      {
        normal: {
          id: 200732,
          name: "食い下がり",
          targetSpeed: 0.15,
          acceleration: 0.05,
        },
        rare: {
          id: 200731,
          name: "勝利への執念",
          targetSpeed: 0.35,
          acceleration: 0.1,
        },
        duration: 3,
        distanceLimit: [3],
        tooltip: "「最終コーナーのどこか」として扱う。当てにならない。",
        init: function () {
          this.randoms = thiz.initFinalCornerRandom();
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        normal: {
          id: 200672,
          name: "詰め寄り",
          targetSpeed: 0.15,
          acceleration: 0.05,
        },
        rare: {
          id: 200671,
          name: "電撃の煌めき",
          targetSpeed: 0.35,
          acceleration: 0.1,
        },
        duration: 3,
        distanceLimit: [1],
        styleLimit: [3, 4],
        tooltip: "順位>50%を満たしたと見なす",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
    ],
    // End of boost skills
    gate: [
      {
        normal: { id: 200432, name: "集中力", value: 0.9 },
        rare: { id: 200431, name: "コンセントレーション", value: 0.4 },
        inherit: { id: 200433, name: "ゲート難", value: 1.5 },
      },
    ],
    speed: [
      {
        all: { id: 200851, name: "逃げためらい", value: -0.15 },
        duration: 3,
        styleLimit: [1],
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200851, name: "逃げためらいx2", value: -0.3 },
        duration: 3,
        styleLimit: [1],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200881, name: "先行ためらい", value: -0.15 },
        duration: 3,
        styleLimit: [2],
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200881, name: "先行ためらいx2", value: -0.3 },
        duration: 3,
        styleLimit: [2],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200911, name: "差しためらい", value: -0.15 },
        duration: 3,
        styleLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200911, name: "差しためらいx2", value: -0.3 },
        duration: 3,
        styleLimit: [3],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200941, name: "追込ためらい", value: -0.15 },
        duration: 3,
        styleLimit: [4],
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200941, name: "追込ためらいx2", value: -0.3 },
        duration: 3,
        styleLimit: [4],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 201012, name: "後方釘付", value: -0.2 },
        duration: 3,
        distanceLimit: [1],
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition) &&
            thiz.accTimePassed(5)
          );
        },
      },
      {
        all: { d: 201011, name: "悩殺術", value: -0.25 },
        duration: 3,
        distanceLimit: [1],
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition) &&
            thiz.accTimePassed(5)
          );
        },
      },
      {
        all: { id: -201082, name: "スピードイーター", value: -0.15 },
        duration: 3,
        distanceLimit: [2],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 201152, name: "束縛", value: -0.15 },
        duration: 3,
        distanceLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 201151, name: "独占力", value: -0.25 },
        duration: 3,
        distanceLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 201512, name: "まなざし", value: -0.15 },
        duration: 3,
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        all: { id: 201511, name: "熱いまなざし", value: -0.25 },
        duration: 3,
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        all: { id: -900251, name: "アナタヲ・オイカケテ", value: -0.05 },
        duration: 6,
        check: function () {
          return thiz.position >= thiz.courseLength * 0.5;
        },
      },
      {
        all: {
          id: -9002512,
          name: "アナタヲ・オイカケテ(継承)",
          value: -0.025,
        },
        duration: 3.6,
        check: function () {
          return thiz.position >= thiz.courseLength * 0.5;
        },
      },
    ],
    fatigue: [
      {
        all: { d: -201222, name: "スタミナイーター", value: 50 },
        distanceLimit: [4],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -2012222, name: "スタミナイーターx2", value: 100 },
        distanceLimit: [4],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200831, name: "逃げけん制", value: 100 },
        styleLimit: [1],
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200831, name: "逃げけん制x2", value: 200 },
        styleLimit: [1],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200861, name: "先行けん制", value: 100 },
        styleLimit: [2],
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200861, name: "先行けん制x2", value: 200 },
        styleLimit: [2],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200891, name: "差しけん制", value: 100 },
        styleLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200891, name: "差しけん制x2", value: 200 },
        styleLimit: [3],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200921, name: "追込けん制", value: 100 },
        styleLimit: [4],
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200921, name: "追込けん制x2", value: 200 },
        styleLimit: [4],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200841, name: "逃げ焦り", value: 100 },
        styleLimit: [1],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200841, name: "逃げ焦りx2", value: 200 },
        styleLimit: [1],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(1) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200861, name: "先行焦り", value: 100 },
        styleLimit: [2],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200861, name: "先行焦りx2", value: 200 },
        styleLimit: [2],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(2) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200901, name: "差し焦り", value: 100 },
        styleLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200901, name: "差し焦りx2", value: 200 },
        styleLimit: [3],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 200931, name: "追込焦り", value: 100 },
        styleLimit: [4],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -200931, name: "追込焦りx2", value: 200 },
        styleLimit: [4],
        tooltip: "2回同時に喰らう。通常のと加算できる。",
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isRunningStyle(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 201021, name: "逃亡禁止令", value: 300 },
        distanceLimit: [1],
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition) &&
            thiz.accTimePassed(5)
          );
        },
      },
      {
        all: { id: 201022, name: "抜け駆け禁止", value: 100 },
        distanceLimit: [1],
        init: function () {
          this.randoms = thiz.initPhaseRandom(0);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(1) &&
            thiz.isInRandom(this.randoms, startPosition) &&
            thiz.accTimePassed(5)
          );
        },
      },
      {
        all: { id: 201162, name: "ささやき", value: 100 },
        distanceLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -201162, name: "ささやきx2", value: 200 },
        distanceLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 201161, name: "魅惑のささやき", value: 300 },
        distanceLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: -201161, name: "魅惑のささやきx2", value: 600 },
        distanceLimit: [3],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(3) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
      {
        all: { id: 201442, name: "鋭い眼光", value: 100 },
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        all: { id: -201442, name: "鋭い眼光x2", value: 200 },
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        all: { id: 201441, name: "八方にらみ", value: 300 },
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        all: { id: -201441, name: "八方にらみx2", value: 600 },
        init: function () {
          this.randoms = thiz.initPhaseRandom(2);
        },
        check: function (startPosition) {
          return thiz.isInRandom(this.randoms, startPosition);
        },
      },
      {
        all: { id: -201221, name: "スタミナグリード", value: 100 },
        distanceLimit: [4],
        init: function () {
          this.randoms = thiz.initPhaseRandom(1);
        },
        check: function (startPosition) {
          return (
            thiz.isDistanceType(4) &&
            thiz.isInRandom(this.randoms, startPosition)
          );
        },
      },
    ],
  };
}

const uniqueSkillData = (thiz) => [
  {
    name: "  なし／発動しない",
    noInherit: true,
    check: function () {
      return false;
    },
  },
  // {
  //   id: 10321,
  //   name: "introduction：My body",
  //   noInherit: true,
  //   heal: 350,
  //   duration: 4,
  //   targetSpeed: 0.15,
  //   tooltip: "3～4位(<=40%)",
  //   check: function () {
  //     return (
  //       thiz.position >= thiz.courseLength / 2.0 &&
  //       thiz.isInCorner(thiz.position)
  //     );
  //   },
  // },
  {
    id: 100321,
    name: "U=ma2",
    heal: 550,
    duration: 4,
    targetSpeed: 0.25,
    tooltip: "3～4位(<=40%)",
    check: function () {
      return (
        thiz.position >= thiz.courseLength / 2.0 &&
        thiz.isInCorner(thiz.position)
      );
    },
  },
  // {
  //   id: 10451,
  //   name: "クリアハート",
  //   noInherit: true,
  //   heal: 550,
  //   tooltip: "順位条件の>=2＆<=40%は満たしていると見なす",
  //   init: function () {
  //     this.randoms = thiz.initPhaseRandom(1);
  //   },
  //   check: function (startPosition) {
  //     return thiz.isInRandom(this.randoms, startPosition);
  //   },
  // },
  {
    id: 100451,
    name: "ピュリティオブハート",
    heal: 750,
    tooltip: "2～4位(<=40%)",
    init: function () {
      this.randoms = thiz.initPhaseRandom(1);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10521,
  //   name: "ワクワクよーいドン",
  //   noInherit: true,
  //   heal: 350,
  //   tooltip: "近くにウマ娘がいる＆順位<=50%は満たしていると見なす",
  //   check: function () {
  //     return thiz.isInFinalCorner();
  //   },
  // },
  {
    id: 100521,
    name: "ワクワククライマックス",
    heal: 550,
    tooltip: "近くにウマ娘がいる＆順位<=50%は満たしていると見なす",
    check: function () {
      return thiz.isInFinalCorner();
    },
  },
  {
    id: 110111,
    name: "ゲインヒール・スペリアー",
    heal: 750,
    tooltip: "中盤のどこかで発動として見なす。",
    init: function () {
      this.randoms = thiz.initPhaseRandom(1);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 110011,
    name: "わやかわ♪マリンダイヴ",
    heal: 550,
    check: function () {
      return thiz.skillTriggerCount[1] >= 2;
    },
  },
  {
    id: 110301,
    name: "Drain for rose",
    heal: 550,
    tooltip: "50%地点で即発動として扱う。",
    check: function (startPosition) {
      return thiz.isContainsRemainingDistance(
        thiz.courseLength * 0.5,
        startPosition
      );
    },
  },
  // {
  //   id: 10071,
  //   name: "波乱注意砲！",
  //   noInherit: true,
  //   targetSpeed: 0.15,
  //   duration: 6,
  //   tooltip: "順位条件の<=50%は満たしていると見なす",
  //   check: function () {
  //     return (
  //       thiz.position >= thiz.courseLength * 0.5 &&
  //       thiz.position <= thiz.courseLength * 0.6
  //     );
  //   },
  // },
  {
    id: 100071,
    name: "不沈艦、抜錨ォッ！",
    targetSpeed: 0.25,
    duration: 6,
    tooltip: "順位条件の<=50%は満たしていると見なす",
    check: function () {
      return (
        thiz.position >= thiz.courseLength * 0.5 &&
        thiz.position <= thiz.courseLength * 0.6
      );
    },
  },
  {
    id: 100131,
    name: "貴顕の使命を果たすべく",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "位置<=30%は満たしていると見なす。",
    check: function () {
      return thiz.isInFinalCorner() || thiz.isInFinalStraight();
    },
  },
  {
    id: 100261,
    name: "G00 1st．F∞;",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return (
        thiz.temptationModeStart == null &&
        thiz.startDelay < 0.08 &&
        thiz.isInFinalStraight()
      );
    },
  },
  {
    id: 110131,
    name: "最強の名を懸けて",
    targetSpeed: 0.35,
    duration: 6,
    tooltip: "「最終直線のどこか」として扱う。",
    init: function () {
      this.randoms = thiz.initFinalStraightRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10081,
  //   name: "アクセルX",
  //   noInherit: true,
  //   targetSpeed: 0.25,
  //   duration: 5,
  //   tooltip:
  //     "「他面倒くさいの全部満たしたと見なして200mで発動する」として扱う。",
  //   check: function (startPosition) {
  //     return (
  //       startPosition <= thiz.toPosition(200) &&
  //       thiz.position >= thiz.toPosition(200)
  //     );
  //   },
  // },
  {
    id: 100081,
    name: "カッティング×DRIVE！",
    targetSpeed: 0.35,
    duration: 5,
    tooltip:
      "「他面倒くさいの全部満たしたと見なして200mで発動する」として扱う。",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(200) &&
        thiz.position >= thiz.toPosition(200)
      );
    },
  },
  {
    id: 100061,
    name: "勝利の鼓動",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "順位条件は満たしてると見なす",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(200) &&
        thiz.position >= thiz.toPosition(200)
      );
    },
  },
  {
    id: 100171,
    name: "汝、皇帝の神威を見よ",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "最終コーナーで3人追い抜きは満たしたと見なす",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  // {
  //   id: 10181,
  //   name: "エンプレス・プライド",
  //   noInherit: true,
  //   targetSpeed: 0.25,
  //   duration: 5,
  //   tooltip:
  //     "他面倒くさいの全部満たしたと見なし「最終コーナーのどこかで発動する」として扱う。",
  //   init: function () {
  //     this.randoms = thiz.initFinalCornerRandom();
  //   },
  //   check: function (startPosition) {
  //     return thiz.isInRandom(this.randoms, startPosition);
  //   },
  // },
  {
    id: 100181,
    name: "ブレイズ・オブ・プライド",
    targetSpeed: 0.35,
    duration: 5,
    tooltip:
      "他面倒くさいの全部満たしたと見なし「最終コーナーのどこかで発動する」として扱う。",
    init: function () {
      this.randoms = thiz.initFinalCornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10351,
  //   name: "全力Vサインッ！",
  //   noInherit: true,
  //   targetSpeed: 0.25,
  //   duration: 5,
  //   tooltip:
  //     "他面倒くさいの全部満たしたと見なし「最終直線のどこかで発動する」として扱う。",
  //   init: function () {
  //     this.randoms = thiz.initFinalStraightRandom();
  //   },
  //   check: function (startPosition) {
  //     return thiz.isInRandom(this.randoms, startPosition);
  //   },
  // },
  {
    id: 100351,
    name: "勝利のチケットを、君にッ！",
    targetSpeed: 0.35,
    duration: 5,
    tooltip:
      "他面倒くさいの全部満たしたと見なし「最終直線のどこかで発動する」として扱う。",
    init: function () {
      this.randoms = thiz.initFinalStraightRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10411,
  //   name: "学級委員長+速さ＝バクシン",
  //   noInherit: true,
  //   targetSpeed: 0.25,
  //   duration: 5,
  //   tooltip: "「レース1/2～5/6のどこかで発動する」として扱う。",
  //   init: function () {
  //     this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6);
  //   },
  //   check: function (startPosition) {
  //     return thiz.isInRandom(this.randoms, startPosition);
  //   },
  // },
  {
    id: 100411,
    name: "優等生×バクシン＝大勝利ッ",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「レース1/2～5/6のどこかで発動する」として扱う。",
    init: function () {
      this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10561,
  //   name: "来てください来てください！",
  //   noInherit: true,
  //   targetSpeed: 0.25,
  //   acceleration: 0.1,
  //   duration: 5,
  //   tooltip: "「終盤のどこかで発動する」として扱う。",
  //   init: function () {
  //     this.randoms = thiz.initPhaseRandom(2);
  //   },
  //   check: function (startPosition) {
  //     return thiz.isInRandom(this.randoms, startPosition);
  //   },
  // },
  {
    id: 100561,
    name: "来ます来てます来させます！",
    targetSpeed: 0.35,
    acceleration: 0.1,
    duration: 5,
    tooltip: "「終盤のどこかで発動する」として扱う。",
    init: function () {
      this.randoms = thiz.initPhaseRandom(2);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10601,
  //   name: "アタシもたまには、ね？",
  //   noInherit: true,
  //   targetSpeed: 0.25,
  //   duration: 5,
  //   tooltip: "「ラストスパートのどこかで発動する」として扱う。",
  //   init: function () {
  //     this.randoms = thiz.initPhaseRandom(3);
  //   },
  //   check: function (startPosition) {
  //     return thiz.isInRandom(this.randoms, startPosition);
  //   },
  // },
  {
    id: 100601,
    name: "きっとその先へ…！",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「ラストスパートのどこかで発動する」として扱う。",
    init: function () {
      this.randoms = thiz.initPhaseRandom(3);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10111,
  //   name: "精神一到",
  //   noInherit: true,
  //   targetSpeed: 0.25,
  //   duration: 5,
  //   tooltip: "「最終直線のどこかで発動する」として扱う。",
  //   init: function () {
  //     this.randoms = thiz.initFinalStraightRandom();
  //   },
  //   check: function (startPosition) {
  //     return thiz.isInRandom(this.randoms, startPosition);
  //   },
  // },
  {
    id: 100111,
    name: "精神一到何事か成らざらん",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「最終直線のどこかで発動する」として扱う。",
    init: function () {
      this.randoms = thiz.initFinalStraightRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10611,
  //   name: "Call me KING",
  //   noInherit: true,
  //   targetSpeed: 0.35,
  //   duration: 5,
  //   tooltip: "4～6位(<=70%)",
  //   check: function (startPosition) {
  //     return (
  //       startPosition <= thiz.toPosition(200) &&
  //       thiz.position >= thiz.toPosition(200) &&
  //       thiz.temptationModeStart == null &&
  //       thiz.startDelay < 0.08
  //     );
  //   },
  // },
  {
    id: 100611,
    name: "Pride of KING",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "4～6位(<=70%)",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(200) &&
        thiz.position >= thiz.toPosition(200) &&
        thiz.temptationModeStart == null &&
        thiz.startDelay < 0.08
      );
    },
  },
  {
    id: 100011,
    name: "シューティングスター",
    targetSpeed: 0.35,
    duration: 5,
    acceleration: 0.1,
    init: function () {
      this.randoms = thiz.initPhaseRandom(2);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100021,
    name: "先頭の景色は譲らない…！",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return thiz.isInInterval(0.5, 1);
    },
  },
  {
    id: 100031,
    name: "究極テイオーステップ",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "他の条件は無視して「最終直線であれば発動する」として扱う",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100151,
    name: "ヴィットーリアに捧ぐ舞踏",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「最終コーナーのどこかで発動」として扱う。まぁ発動しないけど。",
    init: function () {
      this.randoms = thiz.initFinalCornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100161,
    name: "Shadow Break",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "競合あり、2～7位(<=75%)",
    init: function () {
      this.randoms = thiz.initFinalCornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100231,
    name: "∴win Q．E．D．",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「最終コーナーのどこかで発動」として扱う",
    init: function () {
      this.randoms = thiz.initFinalCornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100301,
    name: "ブルーローズチェイサー",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「最終直線のどこかで発動」として扱う",
    init: function () {
      this.randoms = thiz.initFinalStraightRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100501,
    name: "Nemesis",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「最終コーナーのどこかで発動」として扱う",
    init: function () {
      this.randoms = thiz.initFinalCornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 110031,
    name: "絶対は、ボクだ",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "「最終直線のどこかで発動」として扱う",
    init: function () {
      this.randoms = thiz.initFinalStraightRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 110241,
    name: "フラワリー☆マニューバ(前)",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「最終コーナーのどこかで発動」として扱う。こちらは前の方。",
    init: function () {
      this.randoms = thiz.initFinalCornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 110181,
    name: "薫風、永遠なる瞬間を",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「中盤のどこかで発動」として扱うが、基本的には発動しない。",
    init: function () {
      this.randoms = thiz.initPhaseRandom(1);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100121,
    name: "タイマン！デッドヒート！",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「最終直線のどこかで発動」として扱う。",
    init: function () {
      this.randoms = thiz.initFinalStraightRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 110041,
    name: "グッときて♪Chu",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return (
        thiz.position >= thiz.courseLength * 0.5 && thiz.healTriggerCount > 0
      );
    },
  },
  {
    id: 100371,
    name: "Schwarzes Schwert",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return (
        thiz.isInFinalStraight() &&
        thiz.temptationModeStart == null &&
        thiz.startDelay < 0.08
      );
    },
  },
  {
    id: 110561,
    name: "禾スナハチ登ル",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "50%-60%地点のどこかで発動として扱う",
    init: function () {
      this.randoms = thiz.initIntervalRandom(0.5, 0.6);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100191,
    name: "尊み☆ﾗｽﾄｽﾊﾟ━━(ﾟ∀ﾟ)━━ﾄ!",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "フェイズ2のどこか発動として扱う",
    init: function () {
      this.randoms = thiz.initPhaseRandom(2);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100391,
    name: "姫たるもの、勝利をこの手に",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "最終直線に入ってすぐ発動として扱う",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100251,
    name: "アナタヲ・オイカケテ",
    targetSpeed: 0.25,
    duration: 6,
    tooltip: "順位条件は満たしていると見なす",
    check: function () {
      return thiz.position >= thiz.courseLength * 0.5;
    },
  },
  {
    id: 100171,
    name: "翳り退く、さざめきの矢",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return thiz.isInFinalCorner();
    },
  },
  {
    id: 100481,
    name: "YEAH☆VIVID TIME!",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100231,
    name: "Presents from X",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return thiz.position >= thiz.courseLength * 0.5;
    },
  },
  {
    id: 100041,
    name: "紅焔ギア/LP1211-M",
    acceleration: 0.4,
    duration: 4,
    tooltip:
      "順位<=5及び<=50%は満たしていると見なす。どの脚質でも最速発動扱い。",
    check: function () {
      return thiz.isInFinalCorner() || thiz.isInFinalStraight();
    },
  },
  {
    id: 100101,
    name: "ヴィクトリーショット！",
    acceleration: 0.4,
    duration: 4,
    tooltip: "順位>=3及び<=50%は満たしていると見なす",
    check: function () {
      return thiz.isInFinalCorner(thiz.position, { start: 0.5, end: 1 });
    },
  },
  // {
  //   id: 10271,
  //   name: "燃えろ筋肉！",
  //   noInherit: true,
  //   acceleration: 0.3,
  //   duration: 4,
  //   styleLimit: [3, 4],
  //   tooltip:
  //     "常に順位>=65%及び<=70%は満たしていると見なす。実戦は発動がより遅くなる。",
  //   check: function () {
  //     return thiz.currentPhase >= 2 && thiz.isInCorner();
  //   },
  // },
  {
    id: 100271,
    name: "レッツ・アナボリック！",
    acceleration: 0.4,
    duration: 4,
    tooltip:
      "常に順位>=65%及び<=70%は満たしていると見なす。実戦は発動がより遅くなる。",
    check: function () {
      return thiz.currentPhase >= 2 && thiz.isInCorner();
    },
  },
  {
    id: 100201,
    name: "アングリング×スキーミング",
    acceleration: 0.4,
    duration: 4,
    styleLimit: [1, 2],
    tooltip: "順位1位は満たしたと見なす",
    check: function () {
      return thiz.currentPhase >= 2 && thiz.isInCorner();
    },
  },
  {
    id: 110241,
    name: "フラワリー☆マニューバ(後)",
    acceleration: 0.4,
    duration: 4,
    tooltip: "「最終コーナーのどこかで発動」として扱う。こちらは後の方。",
    init: function () {
      this.randoms = thiz.initFinalCornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100131,
    name: "コンドル猛撃波",
    acceleration: 0.4,
    duration: 4,
    init: function () {
      this.randoms = thiz.initFinalCornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100401,
    name: "KEEP IT REAL．",
    acceleration: 0.3,
    duration: 6,
    tooltip: "50%地点で即発動として扱う",
    check: function () {
      return thiz.position >= thiz.courseLength / 2.0;
    },
  },
  {
    id: 100591,
    name: "彼方、その先へ…",
    acceleration: 0.4,
    duration: 4,
    tooltip: "常に順位>=50%及び<=70%は満たしていると見なす。",
    check: function (startPosition) {
      return (
        thiz.temptationModeStart == null &&
        ((thiz.currentPhase >= 2 &&
          !thiz.isInFinalCorner(startPosition) &&
          thiz.isInCorner(startPosition)) ||
          (thiz.currentPhase === 1 && thiz.isInFinalCorner(startPosition)))
      );
    },
  },
  // {
  //   id: 10091,
  //   name: "レッドエース",
  //   noInherit: true,
  //   boost: {
  //     targetSpeed: 0.15,
  //     acceleration: 0.2,
  //   },
  //   duration: 5,
  //   tooltip: "「レース1/2～5/6のどこかで発動する」として扱う。",
  //   init: function () {
  //     this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6);
  //   },
  //   check: function (startPosition) {
  //     return thiz.isInRandom(this.randoms, startPosition);
  //   },
  // },
  {
    id: 100091,
    name: "ブリリアント・レッドエース",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip: "「レース1/2～5/6のどこかで発動する」として扱う。",
    init: function () {
      this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  // {
  //   id: 10141,
  //   name: "熱血☆アミーゴ",
  //   noInherit: true,
  //   boost: {
  //     targetSpeed: 0.15,
  //     acceleration: 0.2,
  //   },
  //   duration: 5,
  //   tooltip: "順位2位以内は満たしていると見なす",
  //   check: function () {
  //     return thiz.isInFinalStraight() && thiz.sp >= 0.3 * thiz.spMax;
  //   },
  // },
  {
    id: 100141,
    name: "プランチャ☆ガナドール",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip:
      "順位2位以内は満たしていると見なす。最終直線に入った瞬間に発動として扱う。",
    check: function () {
      return thiz.isInFinalStraight() && thiz.sp >= 0.3 * thiz.spMax;
    },
  },
  // {
  //   id: 10241,
  //   name: "勝利のキッス☆",
  //   noInherit: true,
  //   boost: {
  //     targetSpeed: 0.15,
  //     acceleration: 0.2,
  //   },
  //   duration: 5,
  //   tooltip: "最終コーナーで発動として扱う",
  //   check: function () {
  //     return thiz.isInFinalCorner();
  //   },
  // },
  {
    id: 100241,
    name: "ひらめき☆ランディング",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip: "最終コーナーで発動として扱う",
    check: function () {
      return thiz.isInFinalCorner();
    },
  },
  {
    id: 100381,
    name: "#LookatCurren",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip: "2～4位(<=40%)。レース50%-65%のどこかで発動。",
    init: function () {
      this.randoms = thiz.initIntervalRandom(0.5, 0.65);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100461,
    name: "キラキラ☆STARDOM",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip: "中盤のコーナーではない地点と即発動としてみなす",
    check: function (startPosition) {
      return (
        !thiz.isInCorner(startPosition) && thiz.getPhase(startPosition) === 1
      );
    },
  },
  {
    id: 100581,
    name: "I Never Goof Up!",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip: "「終盤のコーナーのどこかで発動」として扱う",
    init: function () {
      this.randoms = thiz.initPhase2CornerRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100281,
    name: "I’M☆FULL☆SPEED!!",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip: "順位条件は満たしてると見なす",
    check: function () {
      return thiz.isInDistanceRate(0.45, 0.6) && thiz.isSPInRange(0, 0.7);
    },
  },
  {
    id: 110451,
    name: "ぐるぐるマミートリック♡",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip:
      "最終直線に入った瞬間に発動として扱う。順位条件は満たしてると見なす。",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 110401,
    name: "GET DOWN",
    boost: {
      targetSpeed: 0.25,
      acceleration: 0.3,
    },
    duration: 5,
    tooltip:
      "最終コーナーに入った瞬間に発動として扱う。順位条件は満たしてると見なす。",
    check: function () {
      return thiz.isInFinalCorner();
    },
  },
  {
    id: 110061,
    name: "聖夜のミラクルラン！",
    targetSpeed: 0.25,
    acceleration: 0.3,
    heal: 350,
    duration: 5,
    check: function () {
      return (
        thiz.position >= thiz.courseLength * 0.5 && thiz.healTriggerCount >= 3
      );
    },
  },
  {
    id: 100221,
    name: "Fairy tale",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "「レース1/2～5/6のどこかで発動する」として扱う。",
    init: function () {
      this.randoms = thiz.initIntervalRandom(0.5, 5.0 / 6);
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 100211,
    name: "白い稲妻、見せたるで！",
    targetSpeed: 0.35,
    acceleration: 0.1,
    duration: 5,
    check: function () {
      return thiz.isInStraight() && thiz.position >= thiz.courseLength * 0.5;
    },
  },
  {
    id: 110521,
    name: "113転び114起き",
    targetSpeed: 0.25,
    duration: 6,
    tooltip: "6秒持続として扱う",
    check: function () {
      return thiz.isInFinalCorner();
    },
  },
  {
    id: 110151,
    name: "恵福バルカローレ",
    targetSpeed: 0.45,
    duration: 4,
    tooltip: "7回発動したとして扱う。じゃないと弱すぎる。",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(400) &&
        thiz.position >= thiz.toPosition(400)
      );
    },
  },
  {
    id: 100691,
    hid: 900691,
    name: "憧れは桜を越える！",
    targetSpeed: 0.35,
    duration: 5,
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(300) &&
        thiz.position >= thiz.toPosition(300)
      );
    },
  },
  {
    id: 110261,
    name: "オペレーション・Cacao",
    targetSpeed: 0.35,
    heal: 150,
    duration: 5,
    check: function () {
      return thiz.currentPhase === 1 && thiz.isInCorner();
    },
  },
  {
    id: 110371,
    name: "Guten Appetit♪",
    targetSpeed: 0.35,
    duration: 6,
    tooltip: "最終コーナー以降で3人追い抜きは満たしたと見なす",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100331,
    name: "ディオスクロイの流星",
    targetSpeed: 0.45,
    duration: 5,
    tooltip:
      "7～9位(>=80%)の場合。他の場合は他の最終直線0.35固有で代用して下さい。",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100681,
    name: "勝ち鬨ワッショイ！",
    targetSpeed: 0.25,
    acceleration: 0.3,
    duration: 5,
    tooltip: "1～2位",
    check: function () {
      return (
        (thiz.isPhase(2) && thiz.isStraightFrontType(2)) ||
        (thiz.isInInterval(0.5, 1) && thiz.isInCorner(null, 3))
      );
    },
  },
  // {
  //   id: 10621,
  //   name: "レディー、どんっ！",
  //   noInherit: true,
  //   targetSpeed: 0.15,
  //   heal: 350,
  //   duration: 5,
  //   tooltip: "3～6位(<=70%)",
  //   check: function () {
  //     return thiz.isInInterval(0.5, 1) && thiz.isPhase(1);
  //   },
  // },
  {
    id: 100621,
    name: "どんっ、パッ、むんっ",
    targetSpeed: 0.25,
    heal: 550,
    duration: 5,
    tooltip: "3～6位(<=70%)",
    check: function () {
      return thiz.isInInterval(0.5, 1) && thiz.isPhase(1);
    },
  },
  {
    id: 100051,
    name: "煌星のヴォードヴィル",
    targetSpeed: 0.45,
    duration: 5,
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100671,
    name: "晦冥を照らせ永遠の耀き",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "2～5位。発動時先頭から5m以内の場合。",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100711,
    name: "一期の夢、刹那の飛翔",
    targetSpeed: 0.45,
    heal: -100,
    duration: 4,
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100741,
    name: "麗しき花信風",
    targetSpeed: 0.15,
    duration: 5,
    tooltip: "4～7位",
    conditions: {
      distance_rate: ">=50",
    },
    trigger: function (skill) {
      const map = {
        2000: 1,
        2400: 1.5,
        2600: 2,
        2800: 2.2,
        3000: 2.5,
        3200: 3,
        3500: 3.5,
        99999999: 4,
      };
      for (const key in map) {
        if (thiz.sp < key) {
          skill.durationOverwrite = skill.duration * map[key];
          return {
            extended: map[key].toString(),
          };
        }
      }
    },
  },
  {
    id: 110051,
    name: "Ravissant",
    targetSpeed: 0.45,
    duration: 4,
    check: function () {
      return thiz.isInFinalCorner() || thiz.isInFinalStraight();
    },
  },
  {
    id: 110201,
    name: "Do Ya Breakin!",
    targetSpeed: 0.35,
    acceleration: 0.1,
    duration: 5,
    tooltip: "向正面発動扱い。",
    check: function () {
      return (thiz.isPhase(2) || thiz.isPhase(3)) && thiz.isInStraight();
    },
  },
  {
    id: 110511,
    name: "つぼみ、ほころぶ時",
    acceleration: 0.4,
    duration: 4,
    check: function () {
      return (
        (thiz.isPhase(2) || thiz.isPhase(3)) &&
        (thiz.isInFinalStraight() ||
          thiz.isInFinalCorner(thiz.position, { start: 0.5, end: 1 }))
      );
    },
  },
  {
    id: 100721,
    name: "烈火繚乱、無敵之舞",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "<=40%(1～4位)",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(300) &&
        thiz.position >= thiz.toPosition(300)
      );
    },
  },
  {
    id: 110601,
    name: "Go☆Go☆for it!",
    targetSpeed: 0.35,
    duration: 6,
    tooltip: ">=40% <=70%(4～6位)、4人気以下",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 110611,
    name: "轟！トレセン応援団！！",
    acceleration: 0.4,
    duration: 4,
    tooltip: "距離50%まで6～9位",
    check: function () {
      return thiz.isInFinalStraight() && thiz.temptationModeStart == null;
    },
  },
  {
    id: 100311,
    name: "チャージ完了！全速前進！",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "東京時、1～2位",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(300) &&
        thiz.position >= thiz.toPosition(300)
      );
    },
  },
  {
    id: 100641,
    name: "ぶっちぎりロード",
    heal: 550,
    targetSpeed: 0.25,
    duration: 6,
    tooltip: "距離50%までずっと1～2位",
    check: function () {
      return thiz.position >= thiz.courseLength * 0.5;
    },
  },
  {
    id: 110221,
    name: "Best day ever",
    targetSpeed: 0.35,
    acceleration: 0.1,
    duration: 5,
    tooltip: "2～4位。加速力は残り401m以上がある場合（自動で判断していない）",
    check: function () {
      return thiz.currentPhase >= 2 && thiz.isInFinalCorner();
    },
  },
  {
    id: 110381,
    name: "One True Color",
    targetSpeed: 0.25,
    acceleration: 0.3,
    duration: 5,
    tooltip: "2～4位、後ろ１馬身。",
    check: function (startPosition) {
      return thiz.isContainsRemainingDistance(350, startPosition);
    },
  },
  {
    id: 100341,
    name: "快走かな、快走かな！",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "最終直線ランダム発動として扱う",
    init: function () {
      this.randoms = thiz.initFinalStraightRandom();
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
  },
  {
    id: 110101,
    name: "Joyful Voyage!",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "2～4位。",
    check: function (startPosition) {
      return thiz.isContainsRemainingDistance(200, startPosition);
    },
    trigger: function () {
      thiz.currentSpeed += 0.35;
    },
  },
  {
    id: 110591,
    name: "ときめきが呼ぶほうへ",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "4～7位。",
    check: function () {
      return (
        thiz.isPhase(1) &&
        thiz.position >= thiz.courseLength * 0.6 &&
        thiz.courseLength - thiz.position >= 500 &&
        thiz.isInSlope("down")
      );
    },
  },
  {
    id: 100361,
    hid: 900361,
    name: "trigger:BEAT",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "4～7位。",
    check: function (startPosition) {
      return thiz.isInFinalStraight(startPosition);
    },
  },
  {
    id: 120131,
    hid: 920131,
    name: "きらめくは海、まばゆきは君",
    targetSpeed: 0.15,
    duration: 5,
    tooltip: "1～4位",
    conditions: {
      distance_rate: ">=50",
    },
    trigger: function (skill) {
      const map = {
        2000: 1,
        2400: 1.5,
        2600: 2,
        2800: 2.2,
        3000: 2.5,
        3200: 3,
        3500: 3.5,
        99999999: 4,
      };
      for (const key in map) {
        if (thiz.sp < key) {
          skill.durationOverwrite = skill.duration * map[key];
          return {
            extended: map[key].toString(),
          };
        }
      }
    },
  },
  {
    id: 100441,
    hid: 900441,
    name: "いただき☆ストレリチア！",
    targetSpeed: 0.35,
    duration: 6,
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(300) &&
        thiz.position >= thiz.toPosition(300) &&
        thiz.temptationModeStart == null
      );
    },
  },
  {
    id: 100981,
    hid: 900981,
    name: "理運開かりて翔る",
    targetSpeed: 0.25,
    acceleration: 0,
    duration: 5,
    init: function () {
      this.randoms = thiz.initPhaseRandom(1, { startRate: 0.5 });
    },
    check: function (startPosition) {
      return thiz.isInRandom(this.randoms, startPosition);
    },
    trigger: function (skill) {
      if (skill.id === 900981) {
        skill.targetSpeed = 0.05;
        skill.acceleration = 0;
        return;
      }
      const rate = [0, 0, 0, 1, 1, 2];
      skill.targetSpeed =
        0.25 +
        (thiz.passiveTriggered > 5 ? 3 : rate[thiz.passiveTriggered]) * 0.05;
      skill.acceleration =
        (thiz.passiveTriggered > 5 ? 3 : rate[thiz.passiveTriggered]) * 0.05;
    },
  },
  {
    id: 110461,
    hid: 910461,
    name: "α-star*",
    surfaceLimit: SurfaceLimit.Dirt,
    targetSpeed: 0.25,
    heal: 350,
    duration: 6,
    tooltip: "MAX発動時",
    check: function () {
      return (
        thiz.position >= thiz.courseLength * 0.4 &&
        thiz.position <= thiz.courseLength * 0.5
      );
    },
  },
  {
    id: 110351,
    hid: 910351,
    name: "夢の先へ、届け！",
    targetSpeed: 0.35,
    duration: 6,
    tooltip: "面倒なので0.35として計算。",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 110501,
    hid: 910501,
    name: "Hephaistos",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return (
        thiz.isInFinalCorner(thiz.position, { start: 0.5, end: 1 }) &&
        (thiz.isPhase(2) || thiz.isPhase(3))
      );
    },
  },
  {
    id: 100291,
    hid: 900291,
    name: "ゆきあかり、おいかけて",
    targetSpeed: 0.35,
    duration: 5,
    tooltip: "300m即発動として扱う。実際は先頭か先頭と5m以内の差で1～4位。",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(300) &&
        thiz.position >= thiz.toPosition(300)
      );
    },
  },
  {
    id: 100421,
    hid: 900421,
    name: "『I’m possible』",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "2～9位、先頭と5m以内扱い",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(200) &&
        thiz.position >= thiz.toPosition(200)
      );
    },
  },
  {
    id: 110191,
    hid: 900441,
    name: "萌到讓我活過來了！",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return thiz.isInCorner() && thiz.isPhase(1);
    },
  },
  {
    id: 110581,
    hid: 910581,
    name: "Spooky-Scary-Happy",
    targetSpeed: 0.35,
    duration: 5,
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100871,
    hid: 900781,
    name: "silent letter",
    targetSpeed: 0.25,
    acceleration: 0.3,
    duration: 5,
    tooltip: "400m即発動として扱う",
    check: function (startPosition) {
      return (
        startPosition <= thiz.toPosition(400) &&
        thiz.position >= thiz.toPosition(400)
      );
    },
  },
  {
    id: 100781,
    hid: 900781,
    name: "風光る",
    acceleration: 0.2,
    duration: 8,
    tooltip: "2位時",
    check: function () {
      return thiz.isInFinalCorner(thiz.position, { start: 0.5, end: 1 });
    },
  },
  {
    id: 110211,
    hid: 910211,
    name: "火神鳴",
    targetSpeed: 0.3,
    duration: 6,
    tooltip: "2スキルで発動の即0.3として扱う",
    check: function () {
      return thiz.skillTriggerCount[1] >= 2;
    },
  },
  {
    id: 110341,
    hid: 910341,
    name: "灯穂",
    targetSpeed: 0.385,
    duration: 5,
    tooltip: "0.385として扱う",
    check: function () {
      return thiz.isInFinalStraight();
    },
  },
  {
    id: 100491,
    hid: 900491,
    name: "剣ヶ峰より、狂気に嗤え",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "0.45として扱う",
    check: function () {
      return thiz.remainDistance <= 400;
    },
  },
  {
    id: 101001,
    hid: 901001,
    name: "Never Say Never",
    targetSpeed: 0.25,
    duration: 5,
    check: function () {
      return (
        thiz.remainDistance <= 301 &&
        thiz.remainDistance >= 299 &&
        thiz.groundType === 2
      );
    },
    trigger: function () {
      thiz.currentSpeed += 0.25;
    },
  },
  {
    id: 120011,
    hid: 920011,
    name: "威風堂々、夢錦！",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "中山の0.45として扱う",
    courseLimit: {
      raceTrackId: [10005],
    },
    conditions: {
      phase: ">=2",
      is_finalcorner: 1,
      corner: 1,
      is_activate_any_skill: 1,
    },
  },
  {
    id: 110091,
    hid: 910091,
    name: "Queen’s Lumination",
    targetSpeed: 0.35,
    duration: 6,
    tooltip: "0.35のみ",
    conditions: {
      distance_rate: ">=50",
      corner: 0,
    },
  },
  {
    id: 110081,
    hid: 910081,
    name: "Into High Gear!",
    targetSpeed: 0.35,
    acceleration: 0.1,
    duration: 5,
    tooltip: "常に東京として扱う。分ける実装面倒すぎぃ！",
    check: function (startPosition) {
      return (
        thiz.isInSlope("down", startPosition) &&
        !thiz.isInSlope("down") &&
        thiz.phase >= 1
      );
    },
  },
  {
    id: 100471,
    hid: 900471,
    name: "掲げよ、己が魂の剣を！",
    targetSpeed: 0.45,
    duration: 5,
    tooltip: "0.45のみ",
    conditions: {
      remain_distance: 400,
    },
  },
  {
    id: 110161,
    hid: 910161,
    name: "灰色の臨界点",
    targetSpeed: 0.55,
    duration: 5,
    tooltip: "0.55のみ",
    conditions: {
      distance_type: 4,
      phase: ">=2",
      is_finalcorner_laterhalf: 1,
    },
  },
  {
    id: 110671,
    hid: 910671,
    name: "玄雲散らす、黄金甲矢",
    targetSpeed: 0.35,
    heal: 350,
    duration: 5,
    conditions: {
      distance_rate: [">=40", "<=50"],
    },
  },
  {
    id: 110681,
    hid: 910681,
    name: "あっぱれ大盤振る舞い！",
    targetSpeed: 0.35,
    acceleration: 0.1,
    duration: 4,
    conditions: {
      phase: ">=2",
      corner: 1,
      remain_distance: ">=600",
    },
    trigger: function () {
      thiz.currentSpeed += 0.35;
    },
  },
  {
    id: 100991,
    hid: 900991,
    name: "かがやけ☆とまこまい",
    acceleration: 0.4,
    surfaceLimit: SurfaceLimit.Dirt,
    duration: 4,
    tooltip: "最大スパート時のみ、3～4位＆中盤コーナーで競り合い",
    conditions: {
      ground_type: 2,
      lastspurt: 2,
      is_lastspurt: 1,
    },
  },
  {
    id: 100651,
    hid: 900651,
    name: "アゲてアゲてぷちょへんざ！",
    targetSpeed: 0.25,
    duration: 6,
    tooltip: "短距離/マイルのみ、順位<=50%",
    conditions: {
      distance_type: [1, 2],
      phase_laterhalf_random: 1,
    },
  },
  {
    id: 110271,
    hid: 910271,
    name: "あなたに捧げるフリーポア",
    targetSpeed: 0.35,
    acceleration: 0.1,
    duration: 4,
    tooltip: "中距離のみ、>=2位",
    conditions: {
      distance_rate: ">=60",
      slope: 2,
      phase: 1,
      distance_type: 3,
    },
  },
  {
    id: 110311,
    hid: 910311,
    name: "フレッシュ☆パーラー",
    targetSpeed: 0.25,
    heal: 350,
    duration: 6,
    tooltip: "順位<=30%",
    conditions: {
      phase_firsthalf_random: 1,
    },
  },
  {
    id: 100431,
    hid: 900431,
    name: "Ding Dong Boo",
    surfaceLimit: SurfaceLimit.Dirt,
    targetSpeed: 0.25,
    acceleration: 0.4,
    duration: 5,
    tooltip: "ダートのみ、最終直線ランダム発動として扱う",
    conditions: {
      ground_type: 2,
      is_finalstraight_random: 1,
    },
  },

  // End of unique skills
];

export { normalSkillData, uniqueSkillData };
