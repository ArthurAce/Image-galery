const url = 'https://api.unsplash.com'
const API_KEY = '-_nSsQBd8if2S53dp_1p1Cm0HBv3t00wcNuv7SHw7uE'
const API_POPULAR = 'https://api.unsplash.com/search/photos?query=random&per_page=30&client_id=-_nSsQBd8if2S53dp_1p1Cm0HBv3t00wcNuv7SHw7uE'
const API_SEARCH = 'https://api.unsplash.com/search/photos?query='

getImage(API_POPULAR)

async function getImage(url) {
    const resp = await fetch(url)
    const respData = await resp.json()
    console.log(respData)
    allImages(respData)
}


/* function allImages(data) {
const images  = document.querySelector('.images')
document.querySelector('.images').innerHTML = ''

    data.results.forEach((image) => {
        const imageCard = document.createElement('div')
        imageCard.classList.add('card')
        imageCard.innerHTML = `
                    <div class="card__image">
                        <img class="card__image_img" src="${image.urls.regular}" 
                             alt="${image.title}">
                    </div>
        `
        images.appendChild(imageCard)
    })   
} */

    function allImages(data) {
        const images  = document.querySelector('.images')
        document.querySelector('.images').innerHTML = ''
        
            data.results.forEach((image) => {
                const imageCard = document.createElement('div')
                imageCard.classList.add('card')
                imageCard.innerHTML = `
                            <div class="card__image">
                                <a href="${image.urls.full}">
                                    <img class="card__image_img" src="${image.urls.regular}" 
                                        alt="${image.title}">
                                </a>
                            </div>
                `
                images.appendChild(imageCard)
            })   
        }

const form = document.querySelector('form')
const search = document.querySelector('input')
const searchIcon = document.querySelector('.search-icon')

window.onload = function() {
    search.focus();
};

function clearInput() {
    search.value = "";
    search.focus();
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchResult = `${API_SEARCH}${search.value}&per_page=30&client_id=-_nSsQBd8if2S53dp_1p1Cm0HBv3t00wcNuv7SHw7uE`
    if (search.value) {
        getImage(searchResult)
    }
})
