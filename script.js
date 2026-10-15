
function enroll(course) {
    alert("You selected the course: " + course);
}

function filterCourses(category) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        if (category === "All" ||
            card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
