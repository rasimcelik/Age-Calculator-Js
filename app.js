// TITLES
const dayTitle = document.getElementsByClassName("day-in-box")[0];
const monthTitle = document.getElementsByClassName("month-in-box")[0];
const yearTitle = document.getElementsByClassName("year-in-box")[0];
// INPUTS
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
// BUTTON
const button = document.getElementById("button");
// REQUIRED LABELS
const dayLabel = document.getElementsByClassName("dayLabel")[0];
const monthLabel = document.getElementsByClassName("monthLabel")[0];
const yearLabel = document.getElementsByClassName("yearLabel")[0];
// Displaying "none" the label required
dayLabel.style.display = "none";
monthLabel.style.display = "none";
yearLabel.style.display = "none";

// Displaying "result view" none
const resultView = document.getElementById("row-results-view");
const container = document.getElementById("containerID");
const resultViewNone = (resultView.style.display = "none");
if (resultViewNone) {
  container.style.height = "220px";
}
// Date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();
console.log(currentYear, currentMonth, currentDay);

// EVENT
button.addEventListener("click", () => {
  resultView.style.display = "flex";
  container.style.height = "480px";
  // INPUT VALUES
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  //   Here we can display the Label's if the value is empty
  if (dayInput.value === "") {
    dayLabel.style.display = "block";
    dayInput.style.border = "1px solid red";
    dayLabel.style.color = "red";
    dayTitle.style.color = "red";
    daysResult.innerHTML = "--";
  } else if (day > 32 || day < 1) {
    dayLabel.style.display = "block";
    dayInput.style.border = "1px solid red";
    dayLabel.style.color = "red";
    dayTitle.style.color = "red";
    dayLabel.innerHTML = "Must be a valid day";
    daysResult.innerHTML = "--";
  } else {
    dayLabel.style.display = "none";
    dayInput.style.border = "1px solid var(--smokeyGrey-color)";
    dayTitle.style.color = "var(--smokeyGrey-color)";
  }

  if (monthInput.value === "") {
    monthLabel.style.display = "block";
    monthLabel.style.color = "red";
    monthInput.style.border = "1px solid red";
    monthTitle.style.color = "red";
    monthsResult.innerHTML = "--";
  } else if (month > 12 || month < 1) {
    monthLabel.style.display = "block";
    monthInput.style.border = "1px solid red";
    monthLabel.style.color = "red";
    monthTitle.style.color = "red";
    monthLabel.innerHTML = "Must be a valid month";
    monthsResult.innerHTML = "--";
  } else {
    monthLabel.style.display = "none";
    monthInput.style.border = "1px solid var(--smokeyGrey-color)";
    monthTitle.style.color = "var(--smokeyGrey-color)";
  }

  if (yearInput.value === "") {
    yearLabel.style.display = "block";
    yearLabel.style.color = "red";
    yearInput.style.border = "1px solid red";
    yearTitle.style.color = "red";
    yearResult.innerHTML = "--";
  } else if (year > 2023) {
    yearLabel.style.display = "block";
    yearInput.style.border = "1px solid red";
    yearLabel.style.color = "red";
    yearTitle.style.color = "red";
    yearLabel.innerHTML = "Must be in the past";
    yearResult.innerHTML = "--";
  } else if (year < 1910) {
    yearLabel.style.display = "block";
    yearInput.style.border = "1px solid red";
    yearLabel.style.color = "red";
    yearTitle.style.color = "red";
    yearLabel.innerHTML = "Must be in the future";
    yearResult.innerHTML = "--";
  } else {
    yearLabel.style.display = "none";
    yearInput.style.border = "1px solid var(--smokeyGrey-color)";
    yearTitle.style.color = "var(--smokeyGrey-color)";
  }

  // Calculating the age
  let ageYear = currentYear - year;
  let ageMonth = currentMonth - month;
  let ageDay = currentDay - day;

  //   case if month difference less then 0
  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    ageMonth += 12;
  }

  //   last case if day difference less then 0
  if (ageDay < 0) {
    const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
    ageMonth--;
    ageDay += daysInPreviousMonth;
  }

  // Displaying the age
  const yearResult = document.getElementsByClassName("span-result-years")[0];
  const monthsResult = document.getElementsByClassName("span-result-months")[0];
  const daysResult = document.getElementsByClassName("span-result-days")[0];

  yearResult.textContent = ageYear;
  monthsResult.textContent = ageMonth;
  daysResult.textContent = ageDay;
});
