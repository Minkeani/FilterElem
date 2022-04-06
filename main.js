let box = document.querySelectorAll('.box')

document.querySelector('nav').addEventListener('click', event => {
    let data = event.target.dataset['f']

    box.forEach(item => {
        item.classList.remove('hide')
        if(!item.classList.contains(data) && data !== 'all') {
            item.classList.add('hide')
        }
    })
})