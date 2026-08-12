const translateButton = document.getElementById("translateBtn");

const title = document.getElementById("title");

const description = document.getElementById("description");

let isTongan = false;

translateButton.addEventListener("click", function () {


    if (isTongan === false) {

        title.innerHTML = `
            Lau
            <br>
            <span>mei Tonga</span>
        `;

    }

});