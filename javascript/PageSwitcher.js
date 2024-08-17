function showPage(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    var pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }

    var buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    
    var activeButton = document.querySelector(`button[onclick="showPage('${pageId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showPage('about_works');
});
