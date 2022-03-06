const curriculumCards = document.querySelectorAll('.curriculum-card');

for (let x = 0; x < curriculumCards.length; x++) {
    curriculumCards[x].addEventListener('click', function (event) {
        this.classList.toggle('active');
    });
}

const faqCards = document.querySelectorAll('.faq-card');

for (let y = 0; y < faqCards.length; y++) {
    faqCards[y].addEventListener('click', function (event) {
        this.classList.toggle('active');
    });
}