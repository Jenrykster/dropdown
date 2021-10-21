const dropDown = document.querySelector('.drop-down')
let isOpen = dropDown.querySelector('.options-container').style.width > 0

dropDown.querySelector('.title').addEventListener('click', toggleState)

function toggleState () {
  if (isOpen) {
    dropDown.querySelector('.options-container').style.height = '0px'
    isOpen = false
  } else {
    dropDown.querySelector('.options-container').style.height = '300px'
    isOpen = true
  }
}
