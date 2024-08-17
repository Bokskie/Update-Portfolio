document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.about-works_box');
    const totalBoxes = boxes.length;
    let currentIndex = 0;

    function showBox(index) {
        boxes.forEach((box, i) => {
            box.style.display = i === index ? 'block' : 'none'; // Show only the current box
        });
    }

    function showPrevBox() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalBoxes - 1; // Loop back to the last box
        }
        showBox(currentIndex);
    }

    function showNextBox() {
        if (currentIndex < totalBoxes - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first box
        }
        showBox(currentIndex);
    }

    // Initial setup
    showBox(currentIndex); // Show the first box initially

    // Attach functions to buttons
    document.querySelector('.prev').addEventListener('click', showPrevBox);
    document.querySelector('.next').addEventListener('click', showNextBox);
});
