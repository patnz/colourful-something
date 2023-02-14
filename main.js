// Function to create and add an empty div element with the class 'empty-block' to the #page-container element

// function createEmptyBlock() {
//   const emptyBlock = document.createElement('div')
//   emptyBlock.classList.add('empty-block')
//   console.log(emptyBlock)
//   document.getElementById('page-wrapper').appendChild(emptyBlock)
// }

const pageWrapper = document.getElementById('page-wrapper')
const firstSelectionBox = document.getElementById('selector-box-1')
const secondSelectionBox = document.getElementById('selector-box-2')
const selectionText = document.getElementById('select-text')
const closeWindowText = document.getElementById('close-window-text')
let pickedColor1
let pickedColor2
let welcomeClickCount = 6

// THIS CODE DECLARES VARIABLE 'firstPopUp' FOR FIRST POP UP
// IT THEN GIVES IT SOME TEXT
// IT ALSO ADDS AN EVENT LISTENER FOR CLICKS

const firstPopUp = document.getElementById('first-pop-up')
firstPopUp.innerHTML = `CLICK HERE<br>TO GENERATE<br>ALL THE COLOURS<br>OF THE RAINBOW`
firstPopUp.addEventListener('click', (e) => welcomeClick(e.target))

// Adding text to selector pop up

const selectorPopUp = document.getElementById('selector-pop-up')

// THIS FUNCTION IS CALLED EVERY TIME THE FIRST POP UP IS CLICKED.
// IT COUNTS THE CLICKS, ADDS COLOURED BLOCKS,
// RANDOMISES THEM AND THEN DISAPPEARS AFTER THE COUNTER REACHES 0.
// IT THEN MAKES THE SECOND POP UP APPEAR, AND ADDS TEXT.

function welcomeClick(x) {
  if (welcomeClickCount >= 5) {
    welcomeClickCount--
    firstPopUp.innerHTML = welcomeClickCount
    firstPopUp.style.lineHeight = '100px'
    firstPopUp.style.color =
      '#' + Math.floor(Math.random() * 16777215).toString(16)
    createEmptyBlocks()
  } else if (welcomeClickCount > 1) {
    welcomeClickCount--
    firstPopUp.innerHTML = welcomeClickCount
    firstPopUp.style.color =
      '#' + Math.floor(Math.random() * 16777215).toString(16)
    reCreateEmptyBlocks()
  } else {
    firstPopUp.style.visibility = 'hidden'
    selectionText.innerHTML = 'SELECT TWO COLOURS'
    closeWindowText.innerHTML = 'THEN CLICK HERE'
    selectorPopUp.style.visibility = 'visible'
  }
}

// this function populates the page with random coloured blocks with each click

function createEmptyBlocks() {
  for (i = 0; i < 1200; i++) {
    const emptyBlock = document.createElement('div')
    document.getElementById('page-wrapper').appendChild(emptyBlock)
    emptyBlock.classList.add('empty-block')
    emptyBlock.style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
}

// this function then deletes and replaces all blocks with more random ones

function reCreateEmptyBlocks() {
  const coloredBlocks = document.querySelectorAll('.empty-block')
  coloredBlocks.forEach((x) => {
    x.remove()
  })
  for (i = 0; i < 3200; i++) {
    const emptyBlock = document.createElement('div')
    document.getElementById('page-wrapper').appendChild(emptyBlock)
    emptyBlock.classList.add('empty-block')
    emptyBlock.addEventListener('click', (e) => selectColourClick(e.target))
    emptyBlock.style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16)
  }
}

// this function checks whether first colour selection is made then assigns it to a variable
// if first colour has been selected, it selects the second one
// then it makes the text clickable to close the window

function selectColourClick(x) {
  if (pickedColor1 != null && pickedColor2 == null) {
    pickedColor2 = x.style.backgroundColor
    secondSelectionBox.style.backgroundColor = pickedColor2
    reCreateEmptyBlocks()
    closeWindowText.addEventListener('click', (e) => prepareCanvas())
  } else if (pickedColor1 == null) {
    pickedColor1 = x.style.backgroundColor
    firstSelectionBox.style.backgroundColor = pickedColor1
    reCreateEmptyBlocks()
  }
}

// function to randomise existing blocks

function reColourBlocks() {
  document.getElementsByClassName('empty-block').backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16)
}

// function to recolour canvas ready to paint
// it hides the selection pop up
// it called 'paintblock' function each time a block is clicked
// it re-colours each block with the first colour selection

function prepareCanvas() {
  const coloredBlocks = document.querySelectorAll('.empty-block')
  coloredBlocks.forEach((x) => {
    x.remove()
  })
  for (i = 0; i < 3100; i++) {
    const emptyBlock = document.createElement('div')
    document.getElementById('page-wrapper').appendChild(emptyBlock)
    emptyBlock.classList.add('empty-block')
    emptyBlock.addEventListener('click', (e) => paintBlock(e.target))
    emptyBlock.style.backgroundColor = pickedColor1
    selectorPopUp.style.visibility = 'hidden'
  }
}

// This function paints each block with the second colour selection when clicked
// It also randomises the page background with each click

function paintBlock(x) {
  x.style.backgroundColor = pickedColor2
  document.getElementById('page-wrapper').style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16)
}
