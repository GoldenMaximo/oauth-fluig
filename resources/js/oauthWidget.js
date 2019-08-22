var OAuthWidget = SuperWidget.extend({
	DOCTYPE_DIRECTORY: '1',
    publicToken: null,
    secretToken: null,
    publicOAuth: null,
    secretOAuth: null,
    

    //método iniciado quando a widget é carregada
    init: function() {
    	
    	var _this = this;
    	this.updateParametersFromScreen();
        
    },
  
    bindings: {
        local: {
        	'find-fluigdir': ['click_openECMFileLocator'],
        	'save-preferences': ['click_savePreferences']
        },
        global: {}
    },
    
    getSufixIDOAuth: function () {
    	var instanceId = $('#instanceIdOAuth').val();
        return ((this.isEditMode) ? "Edit" : "View") + "_" + instanceId;
    },
    
    getSufixID: function () {
        return ((this.isEditMode) ? "Edit" : "View") + "_" + this.instanceId;
    },
    
    savePreferences: function () {
    	console.log('### SAVE PREFERENCES ###');
        this.updateParametersFromScreen();
        this.saveData(this.getPreferencesVO());
    },
    
    updateParametersFromScreen: function () {
    	var sufixID = this.getSufixID();
    	this.publicToken = $("#publicToken" + sufixID).val();
        this.secretToken = $("#secretToken" + sufixID).val();
        this.publicOAuth = $("#publicOAuth" + sufixID).val();
        this.secretOAuth = $("#secretOAuth" + sufixID).val();
    },
    
    getPreferencesVO: function () {
        return {
            publicToken: this.publicToken,
	        secretToken: this.secretToken,
	        publicOAuth: this.publicOAuth,
	        secretOAuth: this.secretOAuth,
        };
    },
    
    saveData: function (preferences) {
        if(preferences.publicToken == "" || preferences.secretToken == "" || preferences.publicOAuth == "" || preferences.secretOAuth == "") {
            this.displayErrorMessage('${i18n.getTranslation("OAuthWidget.edit.error.atleastone")}');
        } else {
            WCMSpaceAPI.PageService.UPDATEPREFERENCES(
                {
                    async: true,
                    success: function (data) {
                        FLUIGC.toast({
                            title: data.message,
                            message: '',
                            type: 'success'
                        });
                    },
                    fail: function (xhr, message, errorData) {
                        _this.showError(xhr, message, errorData);
                    }
                }, this.instanceId, preferences
            );
        }
    },
    
    displayErrorMessage: function (message) {
        FLUIGC.toast({
            title: '${i18n.getTranslation("OAuthWidget.edit.save.error")}',
            message: '\n' + message,
            type: 'danger'
        });
    },
    
    showError: function (xhr, message, errorData) {
        this.displayErrorMessage(errorData.message);
    }
    
});


var Passport = {
		
	HbToken: function (publicToken, secretToken){
	    var token = {
	    		'public': publicToken,
	    		'secret': secretToken
	    };
	    return token;
	},

	HbOAuth: function (publicOAuth, secretOAuth){
	    var oauth = OAuth({
	        consumer: {
	        	'public': publicOAuth,
	        	'secret': secretOAuth 
	        },
	        signature_method: 'HMAC-SHA1'
	    });

	    return oauth;
	},

	getToken: function (){
		
		var sufixIDOAuth = this.sufixIDOAuth();
    	
    	var publicToken = $("#publicToken" + sufixIDOAuth).val();
    	var secretToken = $("#secretToken" + sufixIDOAuth).val();
    	
    	return this.HbToken(publicToken, secretToken);
    	
		
	},
	
	getOAuth: function (){
		
		var sufixIDOAuth = this.sufixIDOAuth();
    	
    	var publicOAuth = $("#publicOAuth" + sufixIDOAuth).val();
    	var secretOAuth = $("#secretOAuth" + sufixIDOAuth).val();
    	
    	return this.HbOAuth(publicOAuth, secretOAuth);
		
	},
	
	sufixIDOAuth: function () {
    	var instanceId = $('#instanceIdOAuth').val();
        return "View" + "_" + instanceId;
    }
		
};





