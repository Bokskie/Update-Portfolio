function showPage(pageId) {
    
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active'));
    
    document.querySelector(`button[onclick="showPage('${pageId}')"]`).classList.add('active');
}
