const img = document.querySelector('.container img');

const textElements = document.querySelectorAll('.container h1, .container a');

img.addEventListener('click', function () {
    textElements.forEach(function (element) {
        element.style.display = 'none';
    });
});