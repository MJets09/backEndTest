let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes'

// https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.data[6].card_images[0].image_url
        console.log(data.data[0].card_images[0].image_url)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })