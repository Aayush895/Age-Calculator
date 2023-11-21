const inputForm = document.querySelector('.age-input-form')
const submitBtn = document.querySelector('img')
const dayInput = document.querySelector('.day').querySelector('input')
const monthInput = document.querySelector('.month').querySelector('input')
const yearInput = document.querySelector('.year').querySelector('input')
const displayYears = document.querySelector('.calc-year')
const displayMonths = document.querySelector('.calc-month')
const displayDays = document.querySelector('.calc-days')

let d = new Date()

function animateCounterDay(day) {
  let count
  if (displayDays.innerText == `--`) {
    count = 0
  } else {
    count = +displayDays.innerText
  }
  if (count < day) {
    displayDays.innerText = count + 1
    setTimeout(() => animateCounterDay(day), 50)
  } else {
    displayDays.innerText = day
  }
}

function animateCounterMonth(month) {
  let count
  if (displayMonths.innerText == `--`) {
    count = 0
  } else {
    count = +displayMonths.innerText
  }
  if (count < month) {
    displayMonths.innerText = count + 1
    setTimeout(() => animateCounterMonth(month), 50)
  } else {
    displayMonths.innerText = month
  }
}

function animateCounterYear(year) {
  let count
  if (displayYears.innerText == `--`) {
    count = 0
  } else {
    count = +displayYears.innerText
  }
  if (count < year) {
    displayYears.innerText = count + 1
    setTimeout(() => animateCounterYear(year), 50)
  } else {
    displayYears.innerText = year
  }
}

function validateInput() {
  let validInput = {
    day: true,
    month: true,
    year: true,
  }

  if (
    dayInput.value == '' ||
    dayInput.value.length != 2 ||
    dayInput.value <= '00' ||
    dayInput.value > '31' ||
    dayInput.value > new Date(+yearInput.value, +monthInput.value, 0).getDate()
  ) {
    if (dayInput.value == '') {
      document
        .querySelector('.day')
        .querySelector('p').innerText = `This field is required`
    } else {
      document
        .querySelector('.day')
        .querySelector('p').innerText = `Must be a valid day`
    }
    document.querySelector('.day').querySelector('h6').classList.add('error')
    validInput.day = false
  } else {
    document.querySelector('.day').querySelector('p').innerText = ``
    document.querySelector('.day').querySelector('h6').classList.remove('error')
    validInput.day = true
  }
  if (
    monthInput.value == '' ||
    monthInput.value.length != 2 ||
    monthInput.value <= '00' ||
    monthInput.value > '12' ||
    +monthInput.value > d.getUTCMonth() + 1
  ) {
    if (monthInput.value == '') {
      document
        .querySelector('.month')
        .querySelector('p').innerText = `This field is required`
    } else {
      document
        .querySelector('.month')
        .querySelector('p').innerText = `Must be a valid month`
    }
    document.querySelector('.month').querySelector('h6').classList.add('error')
    validInput.month = false
  } else {
    document.querySelector('.month').querySelector('p').innerText = ``
    document
      .querySelector('.month')
      .querySelector('h6')
      .classList.remove('error')
    validInput.month = true
  }
  if (
    yearInput.value == '' ||
    yearInput.value.length != 4 ||
    +yearInput.value > d.getUTCFullYear() ||
    yearInput.value < '1970'
  ) {
    if (yearInput.value == '') {
      document
        .querySelector('.year')
        .querySelector('p').innerText = `This field is required`
    } else {
      document
        .querySelector('.year')
        .querySelector('p').innerText = `Must be a valid year`
    }
    document.querySelector('.year').querySelector('h6').classList.add('error')
    validInput.year = false
  } else {
    document.querySelector('.year').querySelector('p').innerText = ``
    document
      .querySelector('.year')
      .querySelector('h6')
      .classList.remove('error')
    validInput.year = true
  }

  return validInput
}

function calcAge() {
  let checkInput = {}
  let calcYear = 0
  let calcMonth = 0
  let calcDay = 0

  checkInput = validateInput()

  displayYears.innerText = `--`
  displayMonths.innerText = `--`
  displayDays.innerText = `--`

  if (checkInput.day && checkInput.month && checkInput.year) {
    calcDay = Math.abs(d.getUTCDate() - Number(dayInput.value))
    calcMonth = d.getUTCMonth() + 1 - Number(monthInput.value)
    calcYear = d.getUTCFullYear() - Number(yearInput.value)

    animateCounterDay(calcDay)
    animateCounterMonth(calcMonth)
    animateCounterYear(calcYear)
  } else {
    displayYears.innerText = `--`
    displayMonths.innerText = `--`
    displayDays.innerText = `--`
  }
}

submitBtn.addEventListener('click', calcAge)
