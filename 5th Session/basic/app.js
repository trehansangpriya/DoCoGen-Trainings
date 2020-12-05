const heading = document.getElementById('heading')
const heading2 = document.querySelector('#heading2')
const btn = document.getElementById('btn')

// function changeColor() {
//     // Inner HTML and Inner Text
//     // heading.innerText = '<<ul><li>List Item 1</li>/ul>'
//     // heading2.innerHTML = '<ul><li>List Item 1</li></ul>'

//     heading.style.color = 'red'

// }

// function dblClickColor() {
//     heading.style.color = 'blue'
// }

// function hideElement() {
//     heading.style.display = 'none'
// }

// function showElement() {
//     heading.style.display = 'block'
// }

btn.addEventListener('click', () => {
    heading.style.display = 'none'
})

btn.addEventListener('dblclick', () => {
    heading.style.display = 'block'
})