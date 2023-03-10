// This code stops context menu from appearing on right-click

window.addEventListener('contextmenu', (e) => e.preventDefault())

const pageWrapper = document.getElementById('page-wrapper')
const firstSelectionBox = document.getElementById('selector-box-1')
const secondSelectionBox = document.getElementById('selector-box-2')
const selectionText = document.getElementById('select-text')
const closeWindowText = document.getElementById('close-window-text')
let pickedColor1
let pickedColor2
let welcomeClickCount = 11

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
  if (welcomeClickCount >= 10) {
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
  for (i = 0; i < 1500; i++) {
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
  for (i = 0; i < 4000; i++) {
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
  selectorPopUp.style.visibility = 'hidden'
  pageWrapper.style.background =
    `linear-gradient(-180deg, ` +
    pickedColor2.toString() +
    ', ' +
    pickedColor1.toString() +
    ', ' +
    pickedColor2.toString() +
    ')'
  pageWrapper.style.zIndex = '4'
  pageWrapper.style.animation = 'gradient 15s ease infinite;'
  for (i = 0; i < 4000; i++) {
    const emptyBlock = document.createElement('div')
    document.getElementById('page-wrapper').appendChild(emptyBlock)
    emptyBlock.classList.add('empty-block')
    emptyBlock.addEventListener('mouseover', (e) => deleteBlock(e.target))
    emptyBlock.addEventListener('contextmenu', (e) => paintBlock2(e.target))
    emptyBlock.style.backgroundColor = '#F7F5F3'
    emptyBlock.style.border = '1px solid #D6CCC2'
  }
  ///
}

// This function paints each block with the second colour selection when clicked
// It also randomises the page background with each click

// function paintBlock1(x) {
//   x.style.backgroundColor = pickedColor1
//   // document.getElementById('page-wrapper').style.backgroundColor =
//   //   '#' + Math.floor(Math.random() * 16777215).toString(16)
// }

function paintBlock2(x) {
  x.style.backgroundColor = pickedColor2
  // document.getElementById('page-wrapper').style.backgroundColor =
  //   '#' + Math.floor(Math.random() * 16777215).toString(16)
}

// this function deletes the target block

function deleteBlock(x) {
  x.style.visibility = 'hidden'
}
