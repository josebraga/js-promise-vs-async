const axiosRequest = require('axios')

// Resolving Promises
function requestWithPromises(text) {
    console.log(`Make request to "${text}" using promises`)

    axiosRequest
        .get(text)
        .then(response => {
            console.log(`You could: ${response.data.activity}`)
        })
        .catch(error => {
            console.error(`${error}`)
        })
}

// Using Async Await
async function requestWithAsync(text) {
    console.log(`Make request to "${text}" using async await`)

    try {
        let response = await axiosRequest.get(text)
        console.log(`You could: ${response.data.activity}`)
    } catch (error) {
        console.error(`${error}`)
    }
}
        
requestWithPromises('https://www.boredapi.com/api/activity')
requestWithPromises('https://httpstat.us/404')

console.log('Processing...')


requestWithAsync('https://www.boredapi.com/api/activity')
requestWithAsync('https://httpstat.us/500')
