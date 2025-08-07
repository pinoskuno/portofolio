// assets/js/include.js
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', 'includes/header.html');
    loadHTML('footer', 'includes/footer.html');
});