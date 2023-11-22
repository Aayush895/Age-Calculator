# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- See the age numbers animate to their final number when the form is submitted

### Screenshot

![Desktop](/Screenshots/desktop.png)
![Mobile](/Screenshots/mobile.png)
![Tablet](/Screenshots/tablet.png)
![Preview](/Screenshots/submit.png)
![Error State](/Screenshots/error.png)
![Missing State](/Screenshots/missing-field.png)

### Links

- Solution URL: [Source Code](https://github.com/Aayush895/Age-Calculator)
- Live Site URL: [Deployed Site](https://responsive-age-calculator.netlify.app/)

## My process

### Built with

- HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

Through this project, I learned how to use the Date() constructor in javascript on a very basic level and how to write a basic validation for input fields. I also learned how to create an animated counter through vanilla javascript.

To see how I created the validation for the input fields, refer the code below:

```js
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
```

To see how I created the animation counter for the 3 input fields, refer to the javascript code below:

```js
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
```

### Continued development

While building this project, I realised the importance of the Date() constructor and also the necessary validation steps that one has to perform whenever a form component or multiple input fields in general is encountered. Through this projec, I realised that I still have to refine my knowledge on the Date() constructor so that I can get comfortable in using it whenever the need arises for it.

### Useful resources

- [Animated Counter](https://www.youtube.com/watch?v=a6XIMIKmj9k) - This youtube video helped me to understand the underlying concept of how to create an animated counter with pure javascript.
- [Date Constructor](https://javascript.plainenglish.io/how-to-determine-the-number-of-days-in-a-month-with-javascript-3d837575a398) - This resource helped me to get a clear picture on how I can use the `Date` constructor in javascript to calculate number of days in a month. Another article that helped me to do the same is [this](https://bobbyhadz.com/blog/javascript-get-number-of-days-in-month)

## Author

- Frontend Mentor - [@Aayush895](https://www.frontendmentor.io/profile/Aayush895)
- Twitter - [@JhaAayush895](https://www.twitter.com/JhaAayush895)

## Acknowledgments

I would like to thank the entire frontend-mentor team for providing such interesting challenges to test and improve my skills in the domain of frontend web development.