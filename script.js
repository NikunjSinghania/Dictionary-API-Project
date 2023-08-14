async function getData(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json()
        
        for(let i=0;i<data[0].phonetics.length;i++) {
            if(data[0].phonetics[i].audio !== "") {
                document.querySelector('audio').setAttribute('src', data[0].phonetics[i].audio)
                document.querySelector('audio').play()
                break
            }
        }

        
    } catch (err) {
        console.log('Error :', err);
    }

}

document.querySelector('#search').addEventListener('click',(e) => {
    getData(document.querySelector('#word').value)
})
