import { LightningElement } from "lwc";



export default class PreviewModal extends LightningElement {
 
    handleShowModal() {
    const modal = this.template.querySelector("c-modal-Pop-Up");
    modal.show();
  }


}

