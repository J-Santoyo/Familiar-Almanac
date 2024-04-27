//Tarot JS Function

document.addEventListener('DOMContentLoaded' , function() {
    document.getElementById('drawCard').addEventListener('click', drawRandomCard);
});

// Array with cards data
const tarotCards = [
    { image: 'https://github.com/J-Santoyo/Familiar-Almanac/blob/7c0ec4ad1ef03120325f3618a3037dc63dafb39a/img/TheFool.png?raw=true', keyword: 'Beginnings'}, //The Fool
    { image: 'https://github.com/J-Santoyo/Familiar-Almanac/blob/7c0ec4ad1ef03120325f3618a3037dc63dafb39a/img/TheMagician.png?raw=true', keyword: 'Conscious Awareness'}, //The Magician
    { image: 'https://github.com/J-Santoyo/Familiar-Almanac/blob/7c0ec4ad1ef03120325f3618a3037dc63dafb39a/img/TheHighPriestess.png?raw=true', keyword: 'Potential'}, //High Priestess
    { image: 'https://github.com/J-Santoyo/Familiar-Almanac/blob/7c0ec4ad1ef03120325f3618a3037dc63dafb39a/img/TheEmpress.png?raw=true', keyword: 'Abundance'}, //The Empress
    { image: 'https://github.com/J-Santoyo/Familiar-Almanac/blob/7c0ec4ad1ef03120325f3618a3037dc63dafb39a/img/TheEmperor.png?raw=true', keyword: 'Structure'}, //The Emperor
    { image: 'https://github.com/J-Santoyo/Familiar-Almanac/blob/7c0ec4ad1ef03120325f3618a3037dc63dafb39a/img/TheWorld.png?raw=true', keyword: 'Accomplishments'}, //The World
]

function drawRandomCard() {
    // Get a random card from the tarotCards array
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];

    document.getElementById('cardImage').src = card.image;
    document.getElementById('cardImage').alt = 'Tarot Card: ' + card.keyword;
    document.getElementById('cardKeyword').textContent = card.keyword;  
}

