const translateButton = document.getElementById("translateBtn");

const title = document.getElementById("title");

const description = document.getElementById("description");

let isTongan = false;

translateButton.addEventListener("click", function () {


    if (isTongan === false) {

        title.innerHTML = `
            Lau
            
            <span>mei Tonga</span>
        `;

                description.textContent =
            "Ko e talanoa kotoa pē ko ha fononga fakafiefia ia ʻoku tatali ke kamata.";

         translateButton.textContent =
            "🇬🇧 Translate to English";

            isTongan = true;
    }

});

