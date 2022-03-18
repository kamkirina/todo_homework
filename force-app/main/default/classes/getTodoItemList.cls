
public with sharing class getTodoItemList {
    

    @AuraEnabled(cacheable=true)
    public static List<todo_item__c> getTodoList() {
        
        return[SELECT Name, Description__c, Category__c, Priority__c, Status__c 
        FROM todo_item__c ORDER BY CreatedDate DESC LIMIT 5];
    } 
    
}
