function showPopup(title, content) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerText = content;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
