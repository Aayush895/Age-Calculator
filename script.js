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
  if (
    dayInput.value == '' ||
    dayInput.value <= '00' ||
    dayInput.value > '31' ||
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
  } else {
    document.querySelector('.day').querySelector('p').innerText = ``
  }
  if (
    monthInput.value == '' ||
    monthInput.value <= '00' ||
    monthInput.value > '12' ||
    Number(monthInput.value) > d.getUTCMonth()
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
  } else {
    document.querySelector('.month').querySelector('p').innerText = ``
  }
  if (
    yearInput.value == '' ||
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
  } else {
    document.querySelector('.year').querySelector('p').innerText = ``
  }
}

submitBtn.addEventListener('click', calcAge)
