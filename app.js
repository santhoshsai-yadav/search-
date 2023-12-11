const accessKey = "qbPn9TM6VhMBENK9JSkuIzkEGqdK02Fpaw-4UNmIviI";



const searchform = document.getElementById('Searchform');
const Searchbox = document.getElementById('Searchbox');
const searchresluts = document.getElementById('searchresluts');
const showmorebtn = document.getElementById('showmorebtn');

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = Searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchresluts.innerHTML = "";
    }

    const results = data.results;
    results.map((reslut) => {
        const image = document.createElement("img");
        image.src = reslut.urls.small;
        const imagelinks = document.createElement("a");
        imagelinks.href = reslut.links.html;
        imagelinks.target = "_blank";


        imagelinks.appendChild(image);
        searchresluts.appendChild(imagelinks);
    })
    showmorebtn.style.display = "block";

}

searchform.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
showmorebtn.addEventListener("click", () => {
    page++;
    searchImages()
})