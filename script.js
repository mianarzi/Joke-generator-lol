const btnEl = document.getElementById('btn')
const jokeEl = document.getElementById('joke')

const apiKey = 'ExQiIdafJPONFMbuYVKsTw==1qf5xOu4FjlBaCVG'

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'


const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey
    }
}
async function getJoke() {
    try {
        jokeEl.innerText = 'updating....'

        const response = await fetch(apiURL, options)
        const data = await response.json()



        // console.log(data[0].joke)
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = 'ar error happened '
    }

}