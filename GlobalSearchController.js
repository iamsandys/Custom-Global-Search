<!-- Parent cmp JS controller file -->

({
	handleKeyUp : function(cmp, evt, helper) {
		var isEnterKey = evt.keyCode === 13;
		if(isEnterKey){
		    helper.handleSearch_helper(cmp);
		}
	},
})
