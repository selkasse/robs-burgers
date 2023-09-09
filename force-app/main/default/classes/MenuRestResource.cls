@RestResource(urlMapping='/menu/*')
global with sharing class MenuRestResource {
  @HttpGet
  global static List<Menu_Category__c> getMenuCategories() {
    return [
      SELECT
        Id,
        Name,
        (SELECT Id, Name, Price__c, Description__c FROM Menu_Items__r)
      FROM Menu_Category__c
    ];
  }
}
