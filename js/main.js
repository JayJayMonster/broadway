window.addEventListener("load", init);

//Variables
const shows = document.querySelector("#shows");
const description = document.querySelector("#description");
const tags = document.querySelector("#tags");
let favorites = [];
let phpURL;
let showData = [];
let flickrURL;
let search;

function init (){
    phpURL = 'webservice/index.php';
    getWebserviceItems();
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }
    //flickrApi();
}

function flickrApi(){
    search = "broadway";
    flickrURL = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a22a62c14b27f07771ef92a326d06bd1&tags="+search+"&per_page=10s&format=json&nojsoncallback=1";
    fetch(flickrURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(flickrSuccessHandler)
        .catch(errors);
}

function flickrSuccessHandler(data){
    let photos = data.photos.photo;
    for(let photo of photos){
    let url = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
    let img = document.createElement("img");
    img.src = url;
    shows.appendChild(img);
    }
}

function getWebserviceItems(){
    fetch(phpURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(addHTML)
        .catch(errors);
}

function addHTML(data) {
    showData = data;
    for (let item of data) {
        createDivItem(
            item.name,
            item.img,
            item.id,
        );
    }
    fillFieldsFromLocalStorage();
}

function fillFieldsFromLocalStorage() {
    let favorite= localStorage.getItem("favorites");
    favorite = JSON.parse(favorite);

    if(favorite != undefined) {
        for (let item of favorite) {
            favorites.push(item);
            let div = document.querySelector("[data-id='" + item + "']");
            div.parentNode.classList.add("selected");
        }
    }
}

function createDivItem(itemName, itemImg, itemId){
    const itemElement = document.createElement('div');

    // tag name h2 for title
    createItem('h2', itemName, itemElement);
    // tag name img for img
    createImgItem('img', itemImg, itemElement);
    // tag name button for favorite button
    createFavoriteButton('button', itemId, itemElement);
    //tag name button for show button
    createDescriptionButton('button', itemId, itemElement);

    shows.appendChild(itemElement);

}

function addDescription(e){
    for(let item of showData){
        if (item.id == e.target.dataset.index){
            tags.innerText = item.tags;
            description.innerText = item.description;
        }
    }
}

function addLocalStorage(e){
    if(favorites.includes(e.target.dataset.id)){
        localStorage.removeItem("favorites");
        let showDiv = e.target.parentNode;
        showDiv.classList.remove("selected");
        e.target.innerText = "Add to favorite";
    }else{
        addToFavorite(e);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        e.target.innerText = "Delete favorite";
    }
}

function addToFavorite(e){
    let showDiv = e.target.parentNode;
    showDiv.classList.add("selected");
    favorites.push(e.target.dataset.id);
    e.textContent = "Delete favorite";
}

function createItem(tagName, innerText, parent){
    const element = document.createElement(tagName);
    element.innerText = innerText;
    parent.appendChild(element);
    return element;
}

function createImgItem(tagName, src, parent){
    const element = document.createElement(tagName);
    element.src = src;
    parent.appendChild(element);
    return element;
}

function createFavoriteButton(tagName, id, parent) {
    const element = document.createElement(tagName);
    element.classList.add("favorite");
    element.dataset.id = id;
    element.textContent = "Add to favorite";
    parent.appendChild(element);
    element.addEventListener('click', addLocalStorage);

}

function createDescriptionButton(tagName, id, parent){
    const element = document.createElement(tagName);
    element.classList.add("show");
    element.dataset.index = id;
    element.innerText = "Show Description";
    parent.appendChild(element);
    element.addEventListener('click', addDescription);
}

function errors(){
    console.log("something went wrong");
}
