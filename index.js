const translateButton = document.getElementById("translateBtn");

const title = document.getElementById("title");

const description = document.getElementById("description");

let isTongan = false;

translateButton.addEventListener("click", function () {


    if (isTongan === false) {

        title.innerHTML = `
            Ako Fekau'aki
            
            <span>mo Tonga</span>
        `;

                description.textContent =
            "Tonga: Ko Hotau Angafakatonga, Ko Hotau Talanoa";

         translateButton.textContent =
            "Translate to English";

            isTongan = true;
    }

    else {

    title.innerHTML = `
        Learn About
        <br>
        <span>Tonga</span>
    `;

    description.textContent =
        "Tonga: Our Culture, Our Story";

    translateButton.textContent =
        "Translate to Tongan";

    isTongan = false;
}

});

