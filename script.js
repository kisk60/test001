const questionBank = [
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　2, 4, 8, 16, ？", answer: 32, choices: [24, 30, 32, 34, 36, 40] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　3, 6, 11, 18, ？", answer: 27, choices: [24, 25, 26, 27, 28, 30] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　81, 27, 9, 3, ？", answer: 1, choices: [0, 1, 2, 3, 6, 9] },
  { category: "CALCULATION", text: "りんご3個が240円です。8個では何円？", answer: 640, choices: [480, 560, 600, 640, 680, 720] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　1, 1, 2, 3, 5, ？", answer: 8, choices: [6, 7, 8, 9, 10, 12] },
  { category: "LOGIC", text: "AはBより背が高く、CはAより低いがBより高い。一番背が高いのは？", answer: "A", choices: ["A", "B", "C", "全員同じ", "判断できない", "AとC"] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　5, 10, 20, 40, ？", answer: 80, choices: [60, 70, 75, 80, 85, 90] },
  { category: "CALCULATION", text: "12 × 4 − 6 ÷ 2 の答えは？", answer: 45, choices: [18, 21, 42, 45, 48, 51] },
  { category: "LOGIC", text: "仲間外れはどれ？", answer: "36", choices: ["9", "16", "25", "36", "49", "64"] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　100, 95, 85, 70, ？", answer: 50, choices: [40, 45, 50, 55, 60, 65] },
  { category: "LOGIC", text: "時計の3時から90度回転した時刻は？", answer: "6時", choices: ["12時", "3時", "6時", "9時", "1時", "8時"] },
  { category: "CALCULATION", text: "ある数の半分に10を足すと25。その数は？", answer: 30, choices: [20, 25, 30, 35, 40, 45] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　2, 5, 10, 17, ？", answer: 26, choices: [22, 24, 25, 26, 27, 29] },
  { category: "LOGIC", text: "「すべての猫は動物」「ミケは猫」から必ず言えることは？", answer: "ミケは動物", choices: ["ミケは動物", "動物は猫", "猫はミケ", "ミケは犬", "猫はいない", "何も言えない"] },
  { category: "CALCULATION", text: "1辺が5cmの正方形の面積は？", answer: "25cm²", choices: ["10cm²", "15cm²", "20cm²", "25cm²", "30cm²", "50cm²"] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　64, 32, 16, 8, ？", answer: 4, choices: [1, 2, 3, 4, 5, 6] },
  { category: "LOGIC", text: "1月1日が月曜日なら、1月8日は何曜日？", answer: "月曜日", choices: ["日曜日", "月曜日", "火曜日", "水曜日", "土曜日", "祝日"] },
  { category: "CALCULATION", text: "120の25%はいくつ？", answer: 30, choices: [15, 20, 25, 30, 35, 40] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　1, 4, 9, 16, ？", answer: 25, choices: [20, 21, 24, 25, 26, 30] },
  { category: "LOGIC", text: "5人で握手を1回ずつすると、握手は全部で何回？", answer: 10, choices: [5, 8, 10, 12, 15, 20] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　7, 14, 12, 24, 22, ？", answer: 44, choices: [32, 42, 44, 46, 48, 52] },
  { category: "CALCULATION", text: "時速60kmで30分走ると、何km進む？", answer: "30km", choices: ["15km", "20km", "30km", "40km", "60km", "90km"] },
  { category: "LOGIC", text: "父は40歳、子は10歳。何年後に父は子の2倍？", answer: "20年後", choices: ["5年後", "10年後", "15年後", "20年後", "25年後", "30年後"] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　4, 7, 13, 25, ？", answer: 49, choices: [37, 43, 47, 49, 51, 53] },
  { category: "LOGIC", text: "ある月に28日あります。この条件に当てはまる月は？", answer: "すべての月", choices: ["2月だけ", "1月だけ", "2月と3月", "すべての月", "偶数月", "存在しない"] },
  { category: "CALCULATION", text: "8人の平均年齢が20歳。1人抜けると平均が19歳。抜けた人は何歳？", answer: 27, choices: [19, 20, 24, 26, 27, 28] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　1, 2, 6, 24, ？", answer: 120, choices: [48, 60, 96, 100, 120, 144] },
  { category: "LOGIC", text: "2, 3, 5, 7, 11の中で、仲間外れはどれ？", answer: "2", choices: ["2", "3", "5", "7", "11", "仲間外れなし"] },
  { category: "CALCULATION", text: "定価2,000円の商品を20%引きで買うといくら？", answer: "1,600円", choices: ["1,200円", "1,400円", "1,600円", "1,700円", "1,800円", "1,900円"] },
  { category: "NUMBER PATTERN", text: "次の数列の「？」に入る数字は？　2, 3, 5, 8, 12, ？", answer: 17, choices: [14, 15, 16, 17, 18, 20] }
];

const $ = (id) => document.getElementById(id);
let selectedCount = 20;
let questions = [];
let currentIndex = 0;
let correctAnswers = 0;
let selectedAnswer = null;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function startTest() {
  questions = shuffle(questionBank).slice(0, selectedCount).map((question) => ({
    ...question,
    choices: shuffle(question.choices)
  }));
  currentIndex = 0;
  correctAnswers = 0;
  show("quiz-panel");
  hide("intro-panel");
  hide("settings-panel");
  hide("result-panel");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentIndex];
  selectedAnswer = null;
  $("question-count").textContent = `QUESTION ${String(currentIndex + 1).padStart(2, "0")} / ${questions.length}`;
  $("progress-percent").textContent = `${Math.round((currentIndex / questions.length) * 100)}%`;
  $("progress-bar").style.width = `${(currentIndex / questions.length) * 100}%`;
  $("question-category").textContent = question.category;
  $("question-text").textContent = question.text;
  $("next-button").disabled = true;
  $("next-button").innerHTML = currentIndex === questions.length - 1 ? "結果を見る <span>→</span>" : "次の問題へ <span>→</span>";
  $("choices").innerHTML = question.choices.map((choice, index) =>
    `<button class="choice" data-index="${index}">${choice}</button>`).join("");
  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      selectedAnswer = question.choices[Number(button.dataset.index)];
      $("next-button").disabled = false;
    });
  });
}

function submitAnswer() {
  if (selectedAnswer === null) return;
  if (String(selectedAnswer) === String(questions[currentIndex].answer)) correctAnswers++;
  currentIndex++;
  if (currentIndex < questions.length) renderQuestion();
  else showResult();
}

function showResult() {
  const accuracy = correctAnswers / questions.length;
  const iq = Math.round(70 + accuracy * 60);
  $("iq-score").textContent = iq;
  $("correct-count").textContent = correctAnswers;
  $("total-count").textContent = questions.length;
  $("accuracy").textContent = `${Math.round(accuracy * 100)}%`;
  $("result-message").textContent = iq >= 115 ? "素晴らしい！あなたの論理的思考力はとても高いレベルです。" : iq >= 95 ? "いい結果です。柔軟な思考力が発揮されています。" : "おつかれさまでした。もう一度挑戦して、さらなるひらめきを試そう。";
  $("result-panel").querySelector(".score-ring").style.background = `conic-gradient(var(--blue) 0 ${accuracy * 100}%, #e9ecf5 ${accuracy * 100}% 100%)`;
  hide("quiz-panel");
  show("result-panel");
}

function show(id) { $(id).classList.remove("hidden"); }
function hide(id) { $(id).classList.add("hidden"); }

$("start-button").addEventListener("click", startTest);
$("next-button").addEventListener("click", submitAnswer);
$("restart-button").addEventListener("click", () => {
  hide("result-panel");
  show("settings-panel");
});
$("new-test-button").addEventListener("click", startTest);
document.querySelectorAll(".count-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".count-option").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    selectedCount = Number(button.dataset.count);
  });
});
