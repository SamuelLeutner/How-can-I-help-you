const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')
const paragraphs = document.querySelectorAll('.cards p')

filterElement.addEventListener('input', filterCards)

function filterCards () {
    if(filterElement.value != ''){
        for (let card of cards){
            let title = card.querySelector('h2')
            let paragraph = card.querySelector('p')
            title = title.textContent.toLowerCase()
            paragraph = paragraph.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if(!title.includes(filterText) && !paragraph.includes(filterText)) {
                card.style.display = "none"
            }
            else {
                card.style.display = "block"
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = "block"
        }
    }
}

