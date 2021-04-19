// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header() {
    const div = document.createElement('div')
    div.className = "header"
    const spanA = document.createElement('span')
    spanA.className = "date"
    spanA.textContent = "March 28, 2020"
    const headO = document.createElement('h1')
    headO.textContent = "Lambda Times"
    const spanB = document.createElement('span')
    spanB.className = "temp"
    spanB.textContent = "98"
}

document.div.header-container.appendChild(Header) 
