const inputForm = document.querySelector('.age-input-form')
const submitBtn = document.querySelector('img')
const dayInput = document.querySelector('.day').querySelector('input')
const monthInput = document.querySelector('.month').querySelector('input')
const yearInput = document.querySelector('.year').querySelector('input')
const displayYears = document.querySelector('.calc-year')
const displayMonths = document.querySelector('.calc-month')
const displayDays = document.querySelector('.calc-days')

let d = new Date()

function calcAge() {
  const checkInput = {
    day: true,
    month: true,
    year: true,
  }
  let calcYear = 0
  let calcMonth = 0
  let calcDay = 0

  if (
    dayInput.value == '' ||
    dayInput.value.length != 2 ||
    dayInput.value <= '00' ||
    dayInput.value > '31' ||
    Number(dayInput.value) > d.getUTCDate() ||
    dayInput.value >
      new Date(Number(yearInput.value), Number(monthInput.value), 0).getDate()
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
    document
      .querySelector('.day')
      .querySelector('h6').classList.add('error')
    checkInput.day = false
  } else {
    document.querySelector('.day').querySelector('p').innerText = ``
    document.querySelector('.day').querySelector('h6').classList.remove('error')
    checkInput.day = true
  }
  if (
    monthInput.value == '' ||
    monthInput.value.length != 2 ||
    monthInput.value <= '00' ||
    monthInput.value > '12' ||
    Number(monthInput.value) > d.getUTCMonth() + 1
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
    checkInput.month = false
  } else {
    document.querySelector('.month').querySelector('p').innerText = ``
    document.querySelector('.month').querySelector('h6').classList.remove('error')
    checkInput.month = true
  }
  if (
    yearInput.value == '' ||
    yearInput.value.length != 4 ||
    Number(yearInput.value) > d.getUTCFullYear() ||
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
    checkInput.year = false
  } else {
    document.querySelector('.year').querySelector('p').innerText = ``
    document.querySelector('.year').querySelector('h6').classList.remove('error')
    checkInput.year = true
  }

  if (checkInput.day && checkInput.month && checkInput.year) {
    calcDay = d.getUTCDate() - Number(dayInput.value)
    calcMonth = d.getUTCMonth() + 1 - Number(monthInput.value)
    calcYear = d.getUTCFullYear() - Number(yearInput.value)

    displayYears.innerText = `${calcYear}`
    displayMonths.innerText = `${calcMonth}`
    displayDays.innerText = `${calcDay}`
  } else {
    displayYears.innerText = `--`
    displayMonths.innerText = `--`
    displayDays.innerText = `--`
  }
}

submitBtn.addEventListener('click', calcAge)
