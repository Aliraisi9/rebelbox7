/*
  Rebel Box static website
  برای تغییر برنامه‌ها، داده‌های trainingDays را ویرایش کنید.
*/

const trainingDays = [
  {
    day: "شنبه",
    warmup: ["Dynamic Stretching", "Spider-Man Lunge", "۱۰ Air Squat"],
    strength: { title: "Front Squat", detail: "۴ ست × ۶ تکرار — ۷۰٪" },
    wod: { title: "NEON IGNITION", detail: "۱۲ Dumbbell Thruster · ۱۵ Kettlebell Swing · ۲۰۰ متر دو", rounds: "AMRAP · ۱۶ دقیقه" },
    note: "تمرکز روی عمق اسکوات و حفظ ریتم تنفس است."
  },
  {
    day: "یکشنبه",
    warmup: ["۲۰۰ متر دو آرام", "Scapular Mobility", "۱۰ Push-up"],
    strength: { title: "Bench Press", detail: "۴ ست × ۸ تکرار" },
    wod: { title: "MIDNIGHT PUSH", detail: "۱۰ Dumbbell Push Press · ۱۵ Ring Row · ۲۰ Sit-up", rounds: "۴ راند · For Time" },
    note: "وزنه دمبل‌ها را طوری انتخاب کنید که ست‌ها قطع نشوند."
  },
  {
    day: "دوشنبه",
    warmup: ["۵ دقیقه دو در درجا / High Knees", "Hip Mobility Flow", "۱۰ Good Morning (Barbell)"],
    strength: { title: "Romanian Deadlift", detail: "۴ ست × ۸ تکرار — تمرکز روی کنترل" },
    wod: { title: "CYBER PULSE", detail: "۱۰ Kettlebell Sumo Deadlift High Pull · ۱۵ Box Step-up · ۲۰۰ متر دو", rounds: "AMRAP · ۱۵ دقیقه" },
    note: "حفظ قوس طبیعی کمر در تمام تکرارها الزامی است."
  },
  {
    day: "سه‌شنبه",
    warmup: ["Wrist & Shoulder Mobility", "Cat-Cow Flow", "تمرین تکنیک اسنچ با PVC"],
    strength: { title: "Jump Rope Skill & Snatch", detail: "۱۰ دقیقه تمرین طناب‌زنی (Single/Double Under) + EMOM 12 Hang Power Snatch" },
    wod: { title: "OVERDRIVE", detail: "۱۰ Hang Power Snatch · ۱۲ Burpee · ۲۰ Sit-up", rounds: "۴ راند · Cap 16'" },
    note: "سرعت جابه‌جایی زیر میله مهم‌تر از سنگینی وزنه است."
  },
  {
    day: "چهارشنبه",
    warmup: ["۵ دقیقه دو آرام", "Core Activation", "تمرین بارفیکس و دیپ"],
    strength: { title: "Gymnastics Skill", detail: "Strict Pull-up / Pull-up Progression · ۱۵ دقیقه" },
    wod: { title: "STATIC SHOCK", detail: "۶ Pull-up (یا Ring Row) · ۱۲ Push-up · ۲۴ Air Squat", rounds: "۵ راند · For Time" },
    note: "امروز روی دامنه حرکتی کامل در تمام بخش‌ها تمرکز کنید."
  },
  {
    day: "پنجشنبه",
    warmup: ["دو گروهی آرام", "Partner Mobility Flow", "۱۰ Synchronized Air Squat"],
    strength: { title: "Team Conditioning", detail: "هماهنگی و تقسیم تکرارها" },
    wod: { title: "REBEL SYNDICATE", detail: "۱۰۰ Wall Ball · ۸0 Dumbbell Snatch · ۶۰ Burpee Over Bar", rounds: "Partner WOD · ۲۲ دقیقه (تقسیم دلخواه)" },
    note: "تقسیم انرژی و ارتباط مداوم با پارتنر کلید موفقیت امروز است."
  }
];

const tabs = document.querySelectorAll(".day-tabs button");
const warmupList = document.querySelector("#warmup-list");
const wodDay = document.querySelector("#wod-day");
const strengthTitle = document.querySelector("#strength-title");
const strengthDetail = document.querySelector("#strength-detail");
const wodRounds = document.querySelector("#wod-rounds");
const wodTitle = document.querySelector("#wod-title");
const wodDetail = document.querySelector("#wod-detail");
const coachNote = document.querySelector("#coach-note");

function renderWorkout(dayIndex) {
  const workout = trainingDays[dayIndex];

  wodDay.textContent = workout.day;
  warmupList.innerHTML = workout.warmup.map(item => `<li>${item}</li>`).join("");
  strengthTitle.textContent = workout.strength.title;
  strengthDetail.textContent = workout.strength.detail;
  wodRounds.textContent = workout.wod.rounds;
  wodTitle.textContent = workout.wod.title;
  wodDetail.textContent = workout.wod.detail;
  coachNote.textContent = workout.note;

  tabs.forEach((tab, index) => {
    const isActive = index === dayIndex;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => renderWorkout(Number(tab.dataset.day)));
});

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

renderWorkout(0);
