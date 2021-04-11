// Removes the number in skills
const skillsRanks = document.querySelectorAll('.value.circles');
skillsRanks.forEach((el) => {
    el.lastChild.remove();
});