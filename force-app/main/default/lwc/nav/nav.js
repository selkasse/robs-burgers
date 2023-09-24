import { LightningElement } from "lwc";
import FORM_FACTOR from "@salesforce/client/formFactor";

export default class Nav extends LightningElement {
  connectedCallback() {
    console.log(`FORM_FACTOR: ${FORM_FACTOR}`);
  }
}
