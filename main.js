let searchInput = document.querySelector("#search");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;
    if (input != "" && input != null) {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(input);
    }
}

document.getElementById("search-btn").onclick = function () {
    search();
};