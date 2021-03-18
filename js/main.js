window.addEventListener("load", init);

//Variables
const buttons = document.querySelectorAll(".show");
const description = document.querySelector("#description");
const tags = document.querySelector("#tags");
const favoriteButtons = document.querySelectorAll(".favorite");
const shows = [
    {description: "The real life of one of America's foremost founding " +
            "fathers and first Secretary of the Treasury, Alexander Hamilton.",
    tags: 'Rap, History, Presidents'},
    {description: "A kind-hearted street urchin and a power-hungry Grand Vizier " +
            "vie for a magic lamp that has the power to make their deepest wishes come true.",
        tags: 'Hero, Monkey, Genie'},
    {description: "The spirits of a deceased couple are harassed by an unbearable family that has moved " +
            "into their home, and hire a malicious spirit to drive them out.",
        tags: 'Ghost, Haunting'},
    {description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, " +
            "until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
        tags: 'High school, Popularity '},
    {description: "Jenna is a pregnant, unhappily married waitress in the deep south. " +
            "She meets a newcomer to her town and falls into an unlikely relationship as a last attempt at happiness.",
        tags: 'Pregnancy, Waitress, Abusive husband'},
    {description: "TA drag queen comes to the rescue of a man who, after inheriting his father's shoe factory, " +
            "needs to diversify his product if he wants to keep the business afloat.",
        tags: 'Shoes, Boots, Drag'},
    {description: "In 19th-century France, Jean Valjean, " +
            "who for decades has been hunted by the ruthless policeman Javert after breaking parole, " +
            "agrees to care for a factory worker's daughter. The decision changes their lives forever.",
        tags: 'France, Poor, Revolution'},
    {description: "When young newspaper sellers are exploited beyond reason " +
            "by their bosses they set out to enact change and are met by the ruthlessness of big business.",
        tags: 'Orphan, Paperboy'},
    {description: "Bohemians in the East Village of New York City struggling with life, " +
            "love and AIDS, and the impacts they have on America.",
        tags: 'Drugs, Aids, New York City'},
    {description: "The story of how a green-skinned woman framed by the Wizard of Oz " +
            "becomes the Wicked Witch of the West",
        tags: 'Witches, Oz'}
];
let favorites = [];

function init (){
    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    for (let button of buttons){
        button.addEventListener('click', addHTML)
    }

    //fillFieldsFromLocalStorage();
    for (let favoriteButton of favoriteButtons ){
        favoriteButton.addEventListener("click", addToFavorite);
    }

}

function addHTML(e){
    description.innerText = shows[e.target.dataset.index].description;
    tags.innerText = shows[e.target.dataset.index].tags;
}

function fillFieldsFromLocalStorage() {
    if (localStorage.getItem('favorite') !== null) {
        $favorites.value = localStorage.getItem('favorite');
    }
}

function addToFavorite(e){
    let showDiv = e.target.parentNode;
    showDiv.classList.add("selected");
    favorites.push(e.target.dataset.id);
    console.log(favorites);
    localStorage.setItem('favorites', favorites);
}

function deleteFavorite(e) {
    localStorage.removeItem('favorite');
    console.log("Deleted something from favorite");
}
