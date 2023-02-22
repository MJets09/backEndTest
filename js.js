// https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes


document.querySelector("#button").addEventListener('click', getMon)

function getMon() {
    let userMon = document.querySelector('#user').value.toLowerCase()
    console.log(userMon)
        //Search function works
    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${userMon}`

    fetch(url)
        //URL is stored with the API link
        .then(res => res.json())
        //res is the data that is being sent back, could be named anything. Res is turned into json
        .then(data => {

            console.log(data)

            //Have to figure out how to not get set parameters

            document.querySelector('h1').innerHTML = data.data[0].name
            document.querySelector('img').src = data.data[0].card_images[0].image_url
            console.log(data.data[0].card_images[0].image_url)
            document.querySelector('p').innerHTML = data.data[0].desc
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}