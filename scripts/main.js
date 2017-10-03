var pageCounter = 1;
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

btn.addEventListener('click', function() {
    var http = new XMLHttpRequest();
    http.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    http.onload = function() {
        var data = JSON.parse(http.responseText);
        renderHTML(data);
    }
    http.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var HTMLString = "";

    for (var i = 0; i < data.length; i++) {
        HTMLString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        for (var j = 0; j < data[i].foods.likes.length; j++) {
            if (j === 0) {
                HTMLString += data[i].foods.likes[j];
            } else {
                HTMLString += " and " + data[i].foods.likes[j];
            }
        }
        HTMLString += " and dislikes ";

        for (var j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j === 0) {
                HTMLString += data[i].foods.dislikes[j];
            } else {
                HTMLString += " and " + data[i].foods.dislikes[j];
            }
        }
        HTMLString += ".<p>";
    }
    animalContainer.insertAdjacentHTML("beforeend", HTMLString);
}