// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
    "./images/dongsh-WjVYzNmQlLc-unsplash.jpg",
    "./images/kelly-sikkema-GmEhQaTMYXw-unsplash.jpg",
    "./images/musa-ortac-5RtXHUQ06is-unsplash.jpg",
    "./images/neom-Goe4Q0xwvwc-unsplash.jpg",
    "./images/pavlo-t-YpNVjLSqOMo-unsplash.jpg",
    "./images/ryan-geller-TRquyIT7OLQ-unsplash.jpg",
    "./images/uran-wang-2Hg97W9rveI-unsplash.jpg",
    "./images/vasilis-karkalas-UcolR9oIJ_c-unsplash.jpg"
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
    const card = new Card({
        imageUrl: urls[cardCount % 5],
        onDismiss: appendNewCard,
        onLike: () => {
            like.style.animationPlayState = 'running';
            // always trigger animation when toggling class
            like.classList.toggle('trigger');
        },
        onDislike: () => {
            dislike.style.animationPlayState = 'running';
            // always trigger animation when toggling class
            dislike.classList.toggle('trigger');
        },
    });
    card.element.style.setProperty('--i', cardCount % 5)
    swiper.append(card.element);
    cardCount++;

    const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => { card.style.setProperty('--i', index) });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
    appendNewCard();
}