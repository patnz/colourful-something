// Function to create and add an empty div element with the class 'empty-block' to the #page-container element

// function createEmptyBlock() {
//   const emptyBlock = document.createElement('div')
//   emptyBlock.classList.add('empty-block')
//   console.log(emptyBlock)
//   document.getElementById('page-wrapper').appendChild(emptyBlock)
// }

const pageWrapper = document.getElementById('page-wrapper')
console.log(pageWrapper)

let pickedColor1
let pickedColor2

function createEmptyBlock() {
  const emptyBlock = document.createElement('div')
  emptyBlock.classList.add('empty-block')
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  emptyBlock.style.backgroundColor = '#' + randomColor
  emptyBlock.addEventListener('mousedown', (e) => {
    if (pickedColor1 != null && pickedColor2 != null) {
      // IF BOTH COLOURS HAVE BEEN SELECTED...
      document.getElementById('pop-up-alert-1').style.visibility = 'hidden'
      document.getElementById('pop-up-alert-2').style.visibility = 'hidden'
      e.target.style.backgroundColor = pickedColor1
      e.target.style.border = '0px'
      emptyBlock.style.backgroundColor = pickedColor2
      console.log(pickedColor1)
      console.log(pickedColor2)
    } else if (pickedColor1 == null) {
      // IF FIRST COLOUR HAS NOT BEEN SELECTED...
      document.getElementById('pop-up-alert-0').style.visibility = 'hidden'
      document.getElementById('selection-text-1').innerHTML =
        'YOU HAVE SELECTED'
      document.getElementById('instructions-1').innerHTML =
        'PLEASE SELECTION ANOTHER COLOUR'
      pageWrapper.style.backgroundColor = e.target.style.backgroundColor
      pickedColor1 = e.target.style.backgroundColor
      document.getElementById('alert1-color1-box').style.backgroundColor =
        pickedColor1
      document.getElementById('pop-up-alert-1').style.visibility = 'visible'
    } else if (pickedColor1 != null) {
      // IF THE FIRST COLOUR HAS BEEN SELECTED...
      document.getElementById('selection-text-2').innerHTML =
        'YOU HAVE SELECTED'
      document.getElementById('instructions-2').innerHTML =
        'CLICK ANYWHERE TO CONTINUE'
      pickedColor2 = e.target.style.backgroundColor
      emptyBlock.style.backgroundColor = pickedColor2
      pageWrapper.style.backgroundColor = pickedColor2
      document.getElementById('alert2-color1-box').style.backgroundColor =
        pickedColor1
      document.getElementById('alert2-color2-box').style.backgroundColor =
        pickedColor2
      document.getElementById('pop-up-alert-1').style.visibility = 'hidden'
      document.getElementById('pop-up-alert-2').style.visibility = 'visible'
    }
  })
  document.getElementById('page-wrapper').appendChild(emptyBlock)
}

// Random colour variable

// For loop to

for (i = 0; i < 3000; i++) {
  createEmptyBlock()
}

// setTimeout(() => {
//   for (i = 0; i < 2000; i++) {
//     createEmptyBlock()
//   }
// }, '1000')
