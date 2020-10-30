/* Js for the Search */


const search = document.getElementById('searth')
const searchForm = document.getElementById('searchForm')
const errorSearch = document.getElementById('errorSearch')

searchForm.addEventListener('submit', (e) => {
    let messages = []
    if (search.value === '' || search.value == null) {
    messages.push('No pot estar buit')
    }

    if (search.value.length <= 3){
        messages.push('Ha de ser més llarg de 3 caràcters')

    }

    if (messages.length > 0) {
        e.preventDefault()
        errorSearch.innerText = messages.join(', ')
    }
       
    
}) 