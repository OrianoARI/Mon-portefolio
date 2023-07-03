const carousel = document.querySelector('.carousel__list');
const cells = carousel.querySelectorAll('.carousel__cell');

const cellWidth = carousel.offsetWidth;
const cellHeight = carousel.offsetHeight;
const cellSize = cellHeight;
const cellCount = document.querySelectorAll('.carousel__cell').length;

const radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
const theta = 360 / cellCount;

var selectedIndex = 0;

function rotateCarousel() {
    const angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 'rotateX(' + -angle + 'deg)';

    const cellIndex = selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) : (selectedIndex % cellCount);

    const cells = document.querySelectorAll('.carousel__cell');
    cells.forEach((cell, index) => {
        if (cellIndex === index) {
            if (!cell.classList.contains('selected'))
                cell.classList.add('selected');
        }
        else {
            if (cell.classList.contains('selected')) {
                cell.classList.remove('selected');
            }
        }
    });
}

function selectPrev() {
    selectedIndex--;
    rotateCarousel();
}

function selectNext() {
    selectedIndex++;
    rotateCarousel();
}


function initCarousel() {
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const cellAngle = theta * i;
        cell.style.transform = 'rotateX(' + -cellAngle + 'deg) translateZ(' + radius + 'px)';
    }

    rotateCarousel();
}

initCarousel();

carousel.addEventListener('wheel', function (event) {
    event.preventDefault();

    if (event.deltaY < 0) {
        // Scroll up
        selectPrev();
    } else {
        // Scroll down
        selectNext();
    }
});

carousel.addEventListener('touchstart', function (event) {
    touchStartY = event.touches[0].clientY;
});

carousel.addEventListener('touchmove', function (event) {
    event.preventDefault();
    touchEndY = event.touches[0].clientY;
});

carousel.addEventListener('touchend', function (event) {
    if (touchEndY < touchStartY) {
        // Scroll up
        selectNext();
    } else {
        // Scroll down
        selectPrev();
    }
});

window.addEventListener('DOMContentLoaded', function() {
    var carouselCell = document.querySelector('.carousel__cell');
    
    if (carouselCell) {
        var rect = carouselCell.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var scrollPosition = rect.top + window.pageYOffset - (windowHeight / 2);
        
        if (scrollPosition > 0) {
            window.scrollTo({
                top: scrollPosition + rect.height + rect.height,
                behavior: 'smooth'
            });
        }
    }
});


// function replace() {
//     let techElements = document.querySelectorAll('.tech');
//     techElements.forEach(element => {
//         if (element.innerHTML === "html") {      
//             console.log("gogo");
//             element.innerHTML = "";
//             element.innerHTML = '<i class="fa-thin fa-code"></i>'
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     replace();
// });