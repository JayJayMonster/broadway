window.addEventListener("load", init);

//Variables
const shows = document.querySelector("#shows");
const buttons = document.querySelectorAll(".show");
const description = document.querySelector("#description");
const tags = document.querySelector("#tags");
const favoriteButtons = document.querySelectorAll(".favorite");
console.log(buttons);
// const showDescription = [
//     {description: "The real life of one of America's foremost founding " +
//             "fathers and first Secretary of the Treasury, Alexander Hamilton.",
//     tags: 'Rap, History, Presidents'},
//     {description: "A kind-hearted street urchin and a power-hungry Grand Vizier " +
//             "vie for a magic lamp that has the power to make their deepest wishes come true.",
//         tags: 'Hero, Monkey, Genie'},
//     {description: "The spirits of a deceased couple are harassed by an unbearable family that has moved " +
//             "into their home, and hire a malicious spirit to drive them out.",
//         tags: 'Ghost, Haunting'},
//     {description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, " +
//             "until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
//         tags: 'High school, Popularity '},
//     {description: "Jenna is a pregnant, unhappily married waitress in the deep south. " +
//             "She meets a newcomer to her town and falls into an unlikely relationship as a last attempt at happiness.",
//         tags: 'Pregnancy, Waitress, Abusive husband'},
//     {description: "TA drag queen comes to the rescue of a man who, after inheriting his father's shoe factory, " +
//             "needs to diversify his product if he wants to keep the business afloat.",
//         tags: 'Shoes, Boots, Drag'},
//     {description: "In 19th-century France, Jean Valjean, " +
//             "who for decades has been hunted by the ruthless policeman Javert after breaking parole, " +
//             "agrees to care for a factory worker's daughter. The decision changes their lives forever.",
//         tags: 'France, Poor, Revolution'},
//     {description: "When young newspaper sellers are exploited beyond reason " +
//             "by their bosses they set out to enact change and are met by the ruthlessness of big business.",
//         tags: 'Orphan, Paperboy'},
//     {description: "Bohemians in the East Village of New York City struggling with life, " +
//             "love and AIDS, and the impacts they have on America.",
//         tags: 'Drugs, Aids, New York City'},
//     {description: "The story of how a green-skinned woman framed by the Wizard of Oz " +
//             "becomes the Wicked Witch of the West",
//         tags: 'Witches, Oz'}
// ];
let favorites = [];
let webserviceURL;

function init (){
    webserviceURL = 'webservice/index.php';
    getWebserviceItems();

    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    for (let button of buttons){
        button.addEventListener('click', addDescription())
    }

    fillFieldsFromLocalStorage();

    for (let favoriteButton of favoriteButtons ) {
        favoriteButton.addEventListener("click", addFieldsToLocalStorage);
    }


}

function getWebserviceItems(){
    fetch(webserviceURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(addHTML)
        .catch(errors);
}

function addHTML(data){
    for(let item of data){
        createDivItem(
            item.name,
            item.img,
            item.favorite,
            item.id,
            item.description,
        );
    }
}

function addDescription(data){
    console.log(data);
}

function createDivItem(itemName, itemImg, itemButton, itemId, itemDescription
){
    const itemElement = document.createElement('div');

    // tag name h2 for title
    createItem('h2', itemName, itemElement);
    // tag name img for img
    createImgItem('img', itemImg, itemElement);
    // tag name button for favorite button
    createFavoriteButton('button', itemButton, itemId, itemElement);
    //tag name button for show button
    createDescriptionButton('button', itemDescription, itemId, itemElement);

    shows.appendChild(itemElement);

}

function fillFieldsFromLocalStorage() {
    let favorite= localStorage.getItem("favorites");
    favorite = JSON.parse(favorite);

        if(favorite != undefined) {
            for(let item of favorite){
                favorites.push(item);
                let div = document.querySelector("[data-id='"+item+"']");
                div.parentNode.classList.add("selected");
                div.textContent = 'Delete favorite';
            }
    }

}
function addFieldsToLocalStorage(e){
    addToFavorite(e);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function errors(){
    console.log("something went wrong");
}

function addToFavorite(e){
    let showDiv = e.target.parentNode;
    showDiv.classList.add("selected");
    favorites.push(e.target.dataset.id);
    e.target.textContent = 'Delete favorite';
}

function deleteFavorite(e) {
    localStorage.removeItem('favorite');
    console.log("Deleted something from favorite");
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

function createFavoriteButton(tagName, innerText, id, parent){
    const element = document.createElement(tagName);
    element.classList.add("favorite");
    element.dataset.id = id;
    element.innerText = innerText;
    parent.appendChild(element);
    return element;
}

function createDescriptionButton(tagName, innerText, id, parent){
    const element = document.createElement(tagName);
    element.classList.add("show");
    element.dataset.index = id;
    element.innerText = innerText;
    parent.appendChild(element);
    return element;
}
