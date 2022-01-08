const curriculumCards = document.querySelectorAll('.curriculum-card');

for (let x = 0; x < curriculumCards.length; x++) {
    curriculumCards[x].addEventListener('click', function (event) {
        this.classList.toggle('active');
    });
}