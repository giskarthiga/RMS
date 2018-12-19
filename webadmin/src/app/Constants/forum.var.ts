import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ForumVar{

    ForumFormLabels = {
        forumName        : 'Forum Name',
        empCount         : 'Employee Count',
        activeInActive   : 'Active/Inactive',
        action           : 'Action'
    };
    forumList: any =[];
    createForum = {
        editForum   : 'Edit Forum',
        createForum : 'Create Forum',
        forumName   : 'Forum Name',
        topics      : 'Topics',
        empName     : 'Enter Employee Name',
        noData      : 'No data'
    };
    btns ={
        create : 'Create',
        cancel : 'Cancel',
        save   : 'Save'
    };
    mandatoryLabels ={
        forumName   :  'Forum Name is required',
        topic       :  'Topic is required',
        empName     :  'Employee Name is required',       
    };
    title = 'Forum';
    addSuccessMsg = 'Forum Added Successfully';
    employeeItems;
    forumName;
    topics;
    autocompleteItemsAsEmpObjects;
    url;
}