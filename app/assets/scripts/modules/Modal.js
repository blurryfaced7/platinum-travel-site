class Modal {
    constructor() {
        this.injectHTML();
        this.modal = document.querySelector(".modal");
        this.closeIcon = document.querySelector(".modal__close");
        this.events();
    }

    events() {
        // Haah tovchluur daragdsan esehig ajiglah
        this.closeIcon.addEventListener("click", () => this.closeModal());
        // Keyboard deeres ymar neg tovch daragdsan esehiig shalgana
        document.addEventListener("keyup", (e) => this.keyPressHandler(e));
    }

    openModal() {
        this.modal.classList.add("modal--is-visible");
    }

    closeModal() {
        // e.preventDefault();
        this.modal.classList.remove("modal--is-visible");
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="modal">
            <div class="modal__inner">
            <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Хамт <strong>Аялах</strong></h2>
            <div class="wrapper wrapper--narrow">
                <p class="modal__description">Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох боломжтой!</p>
            </div>

            <div class="social-icons">
                <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
                <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
                <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
                <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
            </div>
            </div>
            <div class="modal__close">X</div>
        </div>`);
    }
}


export default Modal;