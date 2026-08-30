let progress = 0;

const progressBar = document.getElementById("progress");
const percentText = document.getElementById("percent");
const opening = document.getElementById("opening");


// Kecepatan loading
const loading = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    percentText.textContent = progress + "%";


    // Sampai 100%
    if (progress >= 100) {

        clearInterval(loading);

        percentText.textContent = "100%";


        // Tunggu sebentar setelah 100%
        setTimeout(() => {

            opening.classList.add("hide");

            // Biar halaman bisa di-scroll
            document.body.style.overflow = "auto";

        }, 700);
    }

}, 1);