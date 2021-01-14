({
    
	handleSearch_helper : function(cmp) {
        cmp.set('v.searchText', cmp.find('searchKey').get('v.value'));
        var action = cmp.get('c.searchRecord_Ctrl');
        action.setParams({
            schKeyword : cmp.find('searchKey').get('v.value') 
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            //console.log('state--->'+state + 'response-->'+JSON.stringify(response.getReturnValue()));
            if(state === 'SUCCESS'){
                var dataList = response.getReturnValue();
                cmp.set('v.dataList', dataList);
                cmp.set('v.showSearchResult', true);
            }
        });
        $A.enqueueAction(action);
	}
})
