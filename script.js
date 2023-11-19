const regexNum = /^\d{16}$/
const regexMonth = /^(0[1-9]|1[0-2])$/
const regexYear = /^[0-9]{2}$/
const regexCVC = /^[0-9]{3}$/

const nameIn = document.getElementById('inName')
const numIn = document.getElementById('inNum')
const monthIn = document.getElementById('inMonth')
const yearIn = document.getElementById('inYear')
const CVCIn = document.getElementById('inCVC')

const nameOut = document.getElementById('outName')
const numOut = document.getElementById('outNum')
const dateOut = document.getElementById('outDate')
const CVCOut = document.getElementById('outCVC')

const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')

const main = document.getElementById('main')
const success = document.getElementById('success')

let result1 = false
let result2 = false

const checkEmpty = () => {
  if (!nameIn.value) 
  {
    nameIn.classList.add('input-box-error')
    error1.classList.add('error')
    error1.classList.remove('hidden')
    result1 = false
  }
  else 
  {
    nameIn.classList.remove('input-box-error')
    error1.classList.remove('error')
    error1.classList.add('hidden')
  }

  if (!numIn.value) 
  {
    numIn.classList.add('input-box-error')
    error2.classList.add('error')
    error2.classList.remove('hidden')
  }
  else
  {
    numIn.classList.remove('input-box-error')
    error2.classList.remove('error')
    error2.classList.add('hidden')
  }

  if (!monthIn.value) 
  {
    monthIn.classList.add('input-box-error')
    error3.classList.add('error')
    error3.classList.remove('hidden')
  }
  else
  {
    monthIn.classList.remove('input-box-error')
    error3.classList.remove('error')
    error3.classList.add('hidden')
  }

  if (!yearIn.value) 
  {
    yearIn.classList.add('input-box-error')
    error3.classList.add('error')
    error3.classList.remove('hidden')
  }
  else
  {
    yearIn.classList.remove('input-box-error')
    error3.classList.remove('error')
    error3.classList.add('hidden')
  }

  if (!CVCIn.value) 
  {
    CVCIn.classList.add('input-box-error')
    error4.classList.add('error')
    error4.classList.remove('hidden')
  }
  else
  {
    CVCIn.classList.remove('input-box-error')
    error4.classList.remove('error')
    error4.classList.add('hidden')
  }

  if (!nameIn.value || !numIn.value || !monthIn.value || !yearIn.value || !CVCIn.value) 
  {
    result1 = false
  }
  else 
  {
    result1 = true
  }
}

const checkValid = () => {
  if(!regexNum.test(numIn.value))
  {
    numIn.classList.add('input-box-error')
    error2.classList.add('error')
    error2.classList.remove('hidden')
    result2 = false
  }
  else
  {
    numIn.classList.remove('input-box-error')
    error2.classList.remove('error')
    error2.classList.add('hidden')
    result2 = true
  }

  if(!regexMonth.test(monthIn.value))
  {
    monthIn.classList.add('input-box-error')
    error3.classList.add('error')
    error3.classList.remove('hidden')
    result2 = false
  }
  else
  {
    monthIn.classList.remove('input-box-error')
    error3.classList.remove('error')
    error3.classList.add('hidden')
    result2 = true
  }

  if(!regexYear.test(yearIn.value))
  {
    yearIn.classList.add('input-box-error')
    error3.classList.add('error')
    error3.classList.remove('hidden')
    result2 = false
  }
  else
  {
    yearIn.classList.remove('input-box-error')
    error3.classList.remove('error')
    error3.classList.add('hidden')
    result2 = true
  }

  if(!regexCVC.test(CVCIn.value))
  {
    CVCIn.classList.add('input-box-error')
    error4.classList.add('error')
    error4.classList.remove('hidden')
    result2 = false
  }
  else
  {
    CVCIn.classList.remove('input-box-error')
    error4.classList.remove('error')
    error4.classList.add('hidden')
    result2 = true
  }

  if (!regexNum.test(numIn.value) || !regexMonth.test(monthIn.value) || !regexYear.test(yearIn.value) || !regexCVC.test(CVCIn.value))
  {
    result2 = false
  }
  else{
    result2 = true
  }
}

const displayInfo = () => {
  if (nameIn.value) 
  {
    nameOut.innerHTML = nameIn.value
  }

  if (numIn.value)
  {
    numOut.innerHTML = numIn.value.substring(0, 4) + " " + numIn.value.substring(4, 8) + " " + numIn.value.substring(8, 12) + " " + numIn.value.substring(12, 16)
  }

  if (monthIn.value || yearIn.value)
  {
    dateOut.innerHTML = `${monthIn.value}/${yearIn.value}`
  }

  if (CVCIn.value)
  {
    CVCOut.innerHTML = CVCIn.value
  }
}

const displaySuccess = () => {
  main.classList.add('hidden')
  success.classList.remove('hidden')
}

const displayMain = () => {
  success.classList.add('hidden')
  main.classList.remove('hidden')

}

document.getElementById('confirm-btn').addEventListener("click", () => { 
  checkEmpty() 
  checkValid()
  if (result1 && result2) 
  {
    displaySuccess()
  }
})

document.getElementById('return-btn').addEventListener("click", () => { displayMain() })

document.body.addEventListener("keyup", () => {
  displayInfo()
})