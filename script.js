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
    dayInput.value > new Date(Number(yearInput.value), Number(monthInput.value), 0).getDate()
  ) {
    console.log('Enter valid day')
  } 
  if (
    monthInput.value == '' ||
    monthInput.value <= '00' ||
    monthInput.value > '12'
  ) {
    console.log('Enter a valid month')
  } 
  if (
    yearInput.value == '' ||
    Number(yearInput.value) > d.getUTCFullYear() ||
    yearInput.value < '1970'
  ) {
    console.log('Enter a valid year')
  } 
  
  
}

submitBtn.addEventListener('click', calcAge)
