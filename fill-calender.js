function createDayDivs(year, month) {
  month -= 1;
  // start on the first day of the month, step back to Monday
  let date = new Date(year, month, 1);
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() - 1);
  }
  let divs = [];
  // keep going until we have passed the month AND reached a new Monday
  // (this fills the last week with next month's dates)
  while (
    date.getMonth() === month ||
    date < new Date(year, month, 1) ||
    date.getDay() !== 1
  ) {
    let otherMonth = date.getMonth() !== month ? ' class="other-month"' : '';
    divs.push(`<div${otherMonth}>${date.getDate()}</div>`);
    date.setDate(date.getDate() + 1);
  }
  return divs;
}

document.querySelector('.calender').innerHTML +=
  createDayDivs(2026, 10).join('');
