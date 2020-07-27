const popBtn = document.getElementById("pfBtn");
const modal = document.querySelector(".modal") ;
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector(".closeBtn");


const openModal = () => {
    modal.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
}

overlay.addEventListener("click",closeModal);
closeBtn.addEventListener("click", closeModal);
popBtn.addEventListener("click",openModal);  