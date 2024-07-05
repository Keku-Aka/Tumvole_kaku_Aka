document.getElementById('search').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var documents = document.getElementsByClassName('document');

    for (var i = 0; i < documents.length; i++) {
        var description = documents[i].getElementsByTagName('p')[0].innerText.toLowerCase();
        if (description.includes(searchValue)) {
            documents[i].style.display = '';
        } else {
            documents[i].style.display = 'none';
        }
    }
});

function showModal(documentElement) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImage');
    var captionText = document.getElementById('modalCaption');

    modal.style.display = 'flex';
    modalImg.src = documentElement.getElementsByTagName('img')[0].src;
    captionText.innerHTML = documentElement.getElementsByTagName('p')[0].innerHTML;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}