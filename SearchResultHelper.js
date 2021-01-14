({

   setColumns : function(cmp){
       cmp.set('v.accColumns', [
            {label:'Name', fieldName:'Name', type:'button',
             	typeAttributes: {label:{fieldName:'Name'}, variant:'base'}},
            {label:'AccountNumber', fieldName:'AccountNumber', type:'text'},
            {label:'Industry', fieldName:'Industry', type:'text'},
            {label:'Rating', fieldName:'Rating', type:'text'}
        ]);
        cmp.set('v.contColumns', [
            {label:'Name', fieldName:'Name', type:'button',
             	typeAttributes:{label : {fieldName:'Name'}, variant:'base'}},
            {label:'Email', fieldName:'Email', type:'text'},
            {label:'Phone', fieldName:'Phone', type:'text'}
        ]);
        cmp.set('v.leadColumns', [
            {label:'Name', fieldName:'Name', type:'button',
             	typeAttributes:{label:{fieldName:'Name'}, variant:'base'}},
            {label:'Status', fieldName:'Status', type:'text'},
            {label:'Company', fieldName:'Industry', type:'text'},
            {label:'Email', fieldName:'Email', type:'text'},
            {label:'Phone', fieldName:'Phone', type:'text'}
        ]);
        cmp.set('v.oppColumns', [
            {label:'Name', fieldName:'Name', type:'button',
             	typeAttributes:{label:{fieldName:'Name'}, variant:'base'}},
            {label:'Satge', fieldName:'StageName', type:'text'},
            {label:'Amount', fieldName:'Amount', type:'text'},
            {label:'Close Date', fieldName:'CloseDate', type:'text'}
        ]); 
    },
    
    showDataSection : function(cmp){
        if(cmp.get('v.accountList').length > 0){
            cmp.set('v.showAccounts', true);
        }else{
            cmp.set('v.showAccounts', false);
        }
        if(cmp.get('v.contactList').length > 0){
            cmp.set('v.showContacts', true);
        }else{
            cmp.set('v.showContacts', false);
        }
        if(cmp.get('v.leadList').length > 0){
            cmp.set('v.showLeads', true);
        }else{
            cmp.set('v.showLeads', false);
        }
        if(cmp.get('v.oppList').length > 0){
            cmp.set('v.showOppos', true);
        }else{
            cmp.set('v.showOppos', false);
        }
    }
})
