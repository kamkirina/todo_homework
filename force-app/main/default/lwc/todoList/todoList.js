import { LightningElement, wire } from 'lwc';
import getTodoList from '@salesforce/apex/getTodoItemList.getTodoList';


export default class TodoList extends LightningElement {
    selectedItem;

    @wire(getTodoList) todos;

    handleSelect(event) {
        const todoId = event.detail;
        this.selectedItem = this.todos.data.find(
            (todo) => todo.Id === todoId
        );
    }

    handleShowModal() {
        const modal = this.template.querySelector("c-modal-Pop-Up");
        modal.show();
    }    

    
}