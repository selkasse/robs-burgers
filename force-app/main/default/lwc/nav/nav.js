import { LightningElement } from "lwc";

export default class Nav extends LightningElement {
  handleHamburgerClick() {
    const nav = this.template.querySelector(`.nav`);

    nav.classList.toggle(`responsive`);
  }
}
