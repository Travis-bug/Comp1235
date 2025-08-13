/* lab11_fetch_api.js 
* purpose 
* we are acting as a webdeveloper that simply wants some data 
 */

let apiURL = 'https:///official-joke-api.appspot.com/random_joke'
fetch(apiURL)
    .then(response => response.json )
    
    .then((data) => {
        console.log(data)
        console.log(data.punchline)
        /*
        data.forEach((currentElement) => {
            console.log(currentElement)
        })
        
         */
    })
    .catch((error) => {console.log(error)});
 