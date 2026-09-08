const translateButton =
    document.getElementById("translateBtn");

let isTongan = false;


translateButton.addEventListener("click", function () {

    if (isTongan === false) {


        document.getElementById("storiesTitle").textContent =
            "Talanoa Faka-Tonga";



        document.getElementById("storiesDescription").textContent =
            "Ako ki he ngaahi talanoa mei Tonga mo hotau anga fakafonua.";



        document.getElementById("story1Title").textContent =
            "Ko e Afí ʻo Tonga";

        document.getElementById("story1Description").textContent =
            "Ako ki he founga naʻe ʻomi ai ʻe Maui ʻa e meʻaʻofa ʻo e afi ki he kakai ʻo Tonga.";

        document.getElementById("story1Button").textContent =
            "Lau ʻa e Talanoá";



        document.getElementById("story2Title").textContent =
            "Ko e Ongo Mahanga Fetāulaki ʻo Tonga";

        document.getElementById("story2Description").textContent =
            "Ako fekauʻaki mo ha ongo tuongaʻane naʻe hoko ko ha ongo fetāulaki ngingila ʻi he langí.";

        document.getElementById("story2Button").textContent =
            "Lau ʻa e Talanoá";



        document.getElementById("story3Title").textContent =
            "Ko e Fonua Moana mo e Taha Toutai";

        document.getElementById("story3Description").textContent =
            "Ko ha talanoa fekauʻaki mo e angaʻofa, kaumeʻa mo e tokanga ki he tahí.";

        document.getElementById("story3Button").textContent =
            "Lau ʻa e Talanoá";


        translateButton.textContent =
            "Translate to English";


        isTongan = true;

    }

    else {

        location.reload();

    }

});