import { LightningElement, api, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
import getTodoList from '@salesforce/apex/GetTodoItemList.getTodoList';
import { reduceErrors } from 'c/ldsUtils';
import { NavigationMixin } from "lightning/navigation";

export default class TodoListItem extends NavigationMixin(LightningElement) {
    @api todo;
    @wire (getTodoList) todos;  
    @api todoId;
@track recordId;


    @api objectApiName;
    
    @track error;
    
    editRec(event) {
        this.todoId = event.target.value;
        const modal = this.template.querySelector("c-edit-Pop-Up");
    modal.show();
    }     
            





deleteRec(event){

    this.recordId = event.target.value;


    deleteRecord(this.recordId)
    .then(() =>{

    const toastEvent = new ShowToastEvent({

    title:'Record Deleted',
    message:'Record deleted successfully',
    variant:'success',

    })

    this.dispatchEvent(toastEvent);

    return refreshApex(this.todos);

    })

    .catch(error =>{

    window.console.log('Unable to delete record due to ' + error.body.message);

    });

    }



}