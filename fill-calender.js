function createDayDivs(year, month) {
  month -= 1;
  let date = new Date(year, month + 1, 1);
  while (date.getDay() !== 1) {
    date = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  }
  let divs = [];
  console.log(date.getMonth(), month);
  while (date.getMonth() === month) {
    divs.push(`<div>${date.getDate()}</div>`);
    data
  }
  console.log(divs);
}

createDayDivs(2026, 10);