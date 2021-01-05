class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".navbar__menu-icon");
        this.menuContent = document.querySelector(".navbar__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu(){
        // console.log("Menu icon was clicked");
        this.menuContent.classList.toggle("navbar__menu-content--is-visible");
    }

}

export default MobileMenu;