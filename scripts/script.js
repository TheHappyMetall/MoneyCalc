const OneMonthShowResultBtn = document.querySelector(
  "#one-month-show-result-btn"
);
const RangeOfDatesResultBtn = document.querySelector(
  "#data-range-show-result-btn"
);
const ResArea = document.querySelector('#output-result-area');

OneMonthShowResultBtn.addEventListener("click", calcMoneyOneMonth);
RangeOfDatesResultBtn.addEventListener("click", calcMoneyRangeOfDates);

function calcMoneyOneMonth() {
  let oneMonthPayday = document.querySelector("#one-month-payday").value;
  oneMonthPayday = new Date(oneMonthPayday); //приведение oneMonthPayday к типу даты
  let nextMonth = new Date(oneMonthPayday);
  nextMonth.setMonth(nextMonth.getMonth() + 1); //создание переменной следующего месяца

  const OneMonthPaydayAmount = document.querySelector("#one-month-payday-amount").value;

  toggleResArea()

  setTimeout(() => {
    showResult(
      (OneMonthPaydayAmount / daysBetweenTwoDates(oneMonthPayday, nextMonth)).toFixed(2),
      "onemonth"
    );
  }, 300);
  
}

function calcMoneyRangeOfDates() {
  let rangeofdatesPayday = document.querySelector('#data-range-payday').value;
  rangeofdatesPayday = new Date(rangeofdatesPayday);
  let rangeofdatesEnd = document.querySelector('#data-range-end').value;
  rangeofdatesEnd = new Date(rangeofdatesEnd);

  const RangeOfDatesPaydayAmount = document.querySelector('#data-range-payday-amount').value;

  toggleResArea()

  setTimeout(() => {
    showResult(
      (RangeOfDatesPaydayAmount / daysBetweenTwoDates(rangeofdatesPayday, rangeofdatesEnd)).toFixed(2),
      "rangeofdates"
    )
  }, 300);
 
}

function daysBetweenTwoDates(startDate, endDate) {
  const oneDay = 1000 * 60 * 60 * 24;

  const diffInTime = endDate.getTime() - startDate.getTime();

  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

function showResult(result, typeOfOperation) {
  const ResultArea = document.querySelector("#result");
  const ResultDescriptArea = document.querySelector("#calc-description");

  if (typeOfOperation === "onemonth") {
    ResultDescriptArea.innerHTML = "При расчете на один месяц";
  } else if (typeOfOperation === "rangeofdates") {
    ResultDescriptArea.innerHTML = "При расчете на указанный диапазон дат";
  }

  ResultArea.innerHTML = `Сумма на день: ${result}р.`;
}


function toggleResArea() {
  ResArea.classList.add('shown')
  setTimeout(() => {
    ResArea.classList.remove('shown')
  }, 600);
}


