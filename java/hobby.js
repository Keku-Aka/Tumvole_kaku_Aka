function showModal(hobby) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("modalCaption");

    modal.style.display = "flex";
    modalImg.src = hobby.getElementsByTagName("img")[0].src;
    captionText.innerHTML = hobby.getElementsByClassName("details")[0].innerHTML;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}