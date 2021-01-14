({
	doInit : function(cmp,event,helper){
        cmp.set('v.selectedNavItem', 'topResult');
        helper.setColumns(cmp);
        var dataList = cmp.get('v.searchResult');
        cmp.set('v.accountList', dataList[0]);
        cmp.set('v.contactList', dataList[1]);
        cmp.set('v.leadList', dataList[2]);
        cmp.set('v.oppList', dataList[3]);
        
        //setting total number of records related to search term.
        var totalRes = Object.keys(dataList[0]).length + Object.keys(dataList[1]).length + Object.keys(dataList[2]).length + Object.keys(dataList[3]).length;
        if(totalRes > 0){
            cmp.set('v.totalResults', totalRes);
            cmp.set('v.showAllResults', true);
        }else{
            cmp.set('v.totalResults', 0);
            cmp.set('v.showAllResults', false);
        }
        
        //Showing particular section if it has some record related to search term.
        helper.showDataSection(cmp);
    },
    
    handleSelectOption : function(cmp,event,helper){
        //get the selected Item from left panel
        var selectedNav = event.getParam('name');
        cmp.set('v.selectedNavItem', selectedNav);
        if(selectedNav == 'account'){
            cmp.set('v.showAccounts', true);
            cmp.set('v.showContacts', false);
            cmp.set('v.showLeads', false);
            cmp.set('v.showOppos', false);
        }
        else if(selectedNav == 'contact'){
            cmp.set('v.showAccounts', false);
            cmp.set('v.showContacts', true);
            cmp.set('v.showLeads', false);
            cmp.set('v.showOppos', false);
        }
        else if(selectedNav == 'opportunity'){
            cmp.set('v.showAccounts', false);
            cmp.set('v.showContacts', false);
            cmp.set('v.showLeads', false);
            cmp.set('v.showOppos', true);
        }
        else if(selectedNav == 'lead'){
            cmp.set('v.showAccounts', false);
            cmp.set('v.showContacts', false);
            cmp.set('v.showLeads', true);
            cmp.set('v.showOppos', false);
        }
        else if(selectedNav == 'topResult'){
            helper.showDataSection(cmp);
        }
    },
    
    handleRowAction : function(cmp,event){
        var navEvnt = $A.get('e.force:navigateToSObject');
        navEvnt.setParams({
            recordId :  event.getParam('row').Id
        });
        navEvnt.fire();
    }
})
