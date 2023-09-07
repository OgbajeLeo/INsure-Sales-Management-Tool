const heroImg = document.querySelector('#hero-section')

// Define variables
let index = 0;
const backgroundData = [
    {
        coverImg: "assets/bg-one.svg"
    },
    {
        coverImg: "assets/bg-two.svg"
    },
    {
        coverImg: "assets/bg-three.svg"
    }
];

// Function to update the background
function updateBackground() {
    const currentBackground = backgroundData[index];
    heroImg.style.backgroundImage = `url('${currentBackground.coverImg}')`;
}

// Interval to change the background

const intervalId = setInterval(() => {
    index = (index + 1) % backgroundData.length;
    updateBackground();
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll("[aria-controls]");

    accordionItems.forEach((item) => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("aria-controls");
            const target = document.getElementById(targetId);

            if (target.style.display === "block") {
                target.style.display = "none";
                item.setAttribute("aria-expanded", "false");
            } else {
                target.style.display = "block";
                item.setAttribute("aria-expanded", "true");
            }
        });
    });
});
