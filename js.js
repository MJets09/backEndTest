let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes'

// https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes

fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
    //URL is stored with the API link
    .then(res => res.json())
    //res is the data that is being sent back, could be named anything. Res is turned into json
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.data[6].card_images[0].image_url
        console.log(data.data[0].card_images[0].image_url)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })