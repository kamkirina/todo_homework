import { LightningElement, api } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { reduceErrors } from 'c/ldsUtils';
import todo_item__c_OBJECT from '@salesforce/schema/todo_item__c';
import NAME_FIELD from '@salesforce/schema/todo_item__c.Name';
import DESCRIPTION_FIELD from '@salesforce/schema/todo_item__c.Description__c';
import CATEGORY_FIELD from '@salesforce/schema/todo_item__c.Category__c'
import PRIORITY_FIELD from '@salesforce/schema/todo_item__c.Priority__c';
import STATUS_FIELD from '@salesforce/schema/todo_item__c.Status__c';



export default class Modal extends LightningElement {
  showModal = false;
  itemId;

  todoItemObject = todo_item__c_OBJECT;
    fields = [NAME_FIELD, DESCRIPTION_FIELD, CATEGORY_FIELD, PRIORITY_FIELD, STATUS_FIELD];

  @api show() {
    this.showModal = true;
  }
  handleDialogClose() {
    this.showModal = false;
  }

  handleTodoItemCreated(){

    this.showModal = false;
  //  .then((item) => {
  //    this.iemId = item.id;
       this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Todo created',
                variant: 'success'
            })
        )
 //   })
 /*   .catch((error) => {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: reduceErrors(error).join(', '),
                variant: 'error'
            })
        )
    };*/
  }
}