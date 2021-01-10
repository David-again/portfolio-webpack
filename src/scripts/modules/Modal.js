class Modal {
    constructor() {
        this.injectHTML();
        this.modal = document.querySelector(".modal");
        this.closeIcon = document.querySelector(".modal__close");
        this.events();

    }

    events() {
        // Listen for the close button being clicked
        this.closeIcon.addEventListener("click", () => this.closeTheModal())

        // Listen for the selection of the Esc key (ASCII code #27)
        document.addEventListener("keyup", e => this.keyPressHandler(e));

    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal();
        }
    }

    openTheModal() {
        this.modal.classList.add("modal--is-visible");
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible");
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
        <div class="modal__inner">
            <img class="modal__construction-image" src="images/under-construction/construction-triangle-3.png" alt="">
            <h2> Project Under Construction </h2>
            <p> The selected project is still under development. <br> Please check back again soon! </p>

            <div class="main-doc-contact">
                <a href="mailto:d.ogunbanjo@yahoo.com?Enquiry from your Online Portfolio">
                    <i class="main-doc-contact__icon fas fa-envelope"></i>
                </a>
                <a href="https://github.com/David-again" target="_blank">
                    <i class="main-doc-contact__icon fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/seyiogunbanjo/" target="_blank">
                    <i class="main-doc-contact__icon fab fa-linkedin-in"></i>
                </a>
                <p class="main-doc-contact__copyright"> © 2020 Copyright <em>CodeDemon </em> </p>
            </div>

            <div class="modal__close">X</div>
        </div>
    </div>
        `)
    }
}

export default Modal;