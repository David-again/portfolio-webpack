class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".navbar__menu-icon");
        this.menuContent = document.querySelector(".navbar__menu-content");
        this.menuItems = document.querySelectorAll(".nav-link");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());

        // Add event listener to all the menu items
        this.menuItems.forEach(menuItem => menuItem.addEventListener("click", () => this.closeTheMenu()));
    }

    toggleTheMenu(){
        // console.log("Menu icon was clicked");
        this.menuContent.classList.toggle("navbar__menu-content--is-visible");
        this.menuIcon.classList.toggle("navbar__menu-icon--close-x");
    }

    closeTheMenu() {
        // console.log("Menu item clicked");
        this.menuContent.classList.remove("navbar__menu-content--is-visible");
        this.menuIcon.classList.remove("navbar__menu-icon--close-x");
    }
}

export default MobileMenu;