public with sharing class TodoSearch {

    @AuraEnabled(cacheable=true)
    public static List<todo_item__c> findTodos(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Name, Description__c, Category__c, Priority__c, Status__c
            FROM todo_item__c
            WHERE Name LIKE :key OR Description__c LIKE :key 
            LIMIT 5
        ];
    }
}