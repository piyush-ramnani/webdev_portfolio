const accessKey = "Ea5Pz-lT6zCmGetA2G_f_9fqynk4E1iMF48LqCiqGgw";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("load-more");

let inputData = "";
let page =1;

    /*
    Async matlab jo tasks sath me start hojayein and jo pehle output de de vo pehle
    render hojaye.
    */
async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;


    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
/*
    if(page === 1){
        searchResults.innerHTML = "";
    }
*/  

    //Clearing the input container before any search
    searchResults.innerHTML = "";

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-image");
        
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    page++
    if(page > 1){
        showMore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener("click", () => {
    searchImages();
})