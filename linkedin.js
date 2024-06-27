function removedAds() {

    let spans = document.getElementsByTagName("span");

    for (let i = 0; i < spans.length; ++i) {
        if (spans[i].innerHTML === "Patrocinado") {
            let card = spans[i].closest(".feed-shared-update-v2");

            if (card === null) {
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    ++j;
                }
            }

            card.setAttribute("style", "display: none !important;");
        }
    }
}

removedAds();

setInterval(function () {
    removedAds();
}, 100)