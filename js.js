// https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes


document.querySelector("#button").addEventListener('click', getMon)
document.querySelector("#buttonArch").addEventListener('click', getArch)

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

            data.forEach(obj => {

                //Create new elements
                let newLi = document.createElement('li');
                let newImg = document.createElement('img');
                //Append elements with our data source that came from the fetch
                newImg.src = obj.data[0].image_url;
                //Append images to created li
                newLi.appendChild(newImg)
                    //Append new lines with images and attach to ul
                document.querySelector('ul').appendChild(newLi)
            })


            // document.querySelector('h1').innerHTML = data.data[0].name
            // document.querySelector('img').src = data.data[0].card_images[1].image_url
            // console.log(data.data[0].card_images[0].image_url)
            // document.querySelector('p').innerHTML = data.data[0].desc
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function getArch() {
    let userArch = document.querySelector('#archetype').value.toLowerCase()
    console.log(userArch)
        //Search function works
    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${userArch}`

    fetch(url)
        //URL is stored with the API link
        .then(res => res.json())
        //res is the data that is being sent back, could be named anything. Res is turned into json
        .then(data => {

            console.log(data)

            //Have to figure out how to use without hardcode
            document.querySelector('#archeName').innerHTML = data.data[0].name
            document.querySelector('#archeImage').src = data.data[0].card_images[0].image_url
            document.querySelector('#arche').innerHTML = data.data[0].desc
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}