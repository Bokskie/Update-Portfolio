let currentIndex = 0;
const boxes = document.querySelectorAll('.about-works_box');

function showBox(index) {
    if (index >= 0 && index < boxes.length) {
        boxes.forEach((box, i) => {
            box.style.display = i === index ? 'block' : 'none';
        });
        currentIndex = index;
    }
}

function showPrevBox() {
    const newIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    showBox(newIndex);
}

function showNextBox() {
    const newIndex = (currentIndex + 1) % boxes.length;
    showBox(newIndex);
}

// Initialize
showBox(currentIndex);
