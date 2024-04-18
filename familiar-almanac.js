document.addEventListener('DOMContentLoaded' , function() {
    document.getElementById('drawCard').addEventListener('click', drawRandomCard);
});

// Array with cards data
const tarotCards = [
    { image: 'https://gfx.tarot.com/images/site/decks/golden-thread/full_size/0.jpg', keyword: 'Beginnings'}, //The Fool
    { image: 'https://gfx.tarot.com/images/site/decks/golden-thread/full_size/1.jpg', keyword: 'Conscious Awareness'}, //The Magician
    { image: 'https://gfx.tarot.com/images/site/decks/golden-thread/full_size/2.jpg', keyword: 'Potential'}, //High Priestess
    { image: 'https://gfx.tarot.com/images/site/decks/golden-thread/full_size/3.jpg', keyword: 'Abundance'}, //The Empress
    { image: 'https://gfx.tarot.com/images/site/decks/golden-thread/full_size/4.jpg', keyword: 'Structure'}, //The Emperor
    { image: 'https://gfx.tarot.com/images/site/decks/golden-thread/full_size/5.jpg', keyword: 'Belief Systems'}, //The Hierophant
    { image: 'https://github.com/Searge/tarot/blob/master/img/big/major_06_Lovers.jpg?raw=true', keyword: 'A Choice'}, //The Lovers
    { image: 'https://github.com/Searge/tarot/blob/master/img/big/major_07_Chariot.jpg?raw=true', keyword: 'Victory'}, //The Chariot
    { image: 'https://github.com/Searge/tarot/blob/master/img/big/major_08_Strength.jpg?raw=true'}
]

function drawRandomCard() {
    // Get a random card from the tarotCards array
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];

    document.getElementById('cardImage').src = card.image;
    document.getElementById('cardImage').alt = 'Tarot Card: ' + card.keyword;
    document.getElementById('cardKeyword').textContent = card.keyword;  
}