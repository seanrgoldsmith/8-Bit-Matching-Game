const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;
let dis_Deck = false;
let matchedCards = 0;

function flipCard(e) {
    let clickedCard = e.target;
    
    if (clickedCard !== cardOne && !dis_Deck) {
        clickedCard.classList.add('flip');
    
        if(!cardOne) {
            return cardOne = clickedCard;
    }   
        cardTwo = clickedCard; 
        dis_Deck = true 

        let cardOneImage = cardOne.querySelector('img').src;
        let cardTwoImage = cardTwo.querySelector('img').src;
        cardsMatch(cardOneImage, cardTwoImage)
    }

}

function cardsMatch (image1, image2) {
    if (image1 === image2) {
        matchedCards++;
        if(matchedCards === 8) {
            setTimeout(() => {
                return shuffleCards();
            }, 1200);
        }
        cardOne.removeEventListener('click', flipCard)
        cardTwo.removeEventListener('click', flipCard)
        cardOne = '';
        cardTwo = '';
        return dis_Deck = false;
    } else {
        setTimeout(() => {
            cardOne.classList.add('shake');
            cardTwo.classList.add('shake');
        }, 400);
        setTimeout(() => {
            cardOne.classList.remove('shake', 'flip');
            cardTwo.classList.remove('shake', 'flip');
            cardOne = '';
            cardTwo = '';
            dis_Deck = false;
        }, 1200);
    }
}

function shuffleCards() {
    matchedCards = 0;
    cardOne = '';
    cardTwo = '';

    let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    cardArray.sort(() => Math.random() > 0.5 ? 1 : -1);
    
    cards.forEach((card, index) => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);

        let imageNumber = card.querySelector('img');
        imageNumber.src = `Match Game Art/image${cardArray[index]}.png`;
    })
}
shuffleCards();

cards.forEach(card => {
    card.addEventListener('click', flipCard);
})