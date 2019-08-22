<div id="OAuthWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="OAuthWidget.instance()">

	<form role="form" id="editForm_${instanceId}" name="editForm_${instanceId}" class="fs-sm-space">
		
		<div class="panel panel-default">
		  <div class="panel-heading">Configuração OAuth</div>
		  <div class="panel-body">
		    
			<div class="form-group">
	            <label for="publicTokenEdit">${i18n.getTranslation('OAuthWidget.edit.publicToken')}</label>
	            <input type="text" class="form-control" id="publicTokenEdit_${instanceId}" value="${publicToken!}"/>
	        </div>
	        <div class="form-group">
	            <label for="secretToken">${i18n.getTranslation('OAuthWidget.edit.secretToken')}</label>
	            <input type="text" class="form-control" id="secretTokenEdit_${instanceId}" value="${secretToken!}"/>
	        </div>
	        <div class="form-group">
	            <label for="publicOAuth">${i18n.getTranslation('OAuthWidget.edit.publicOAuth')}</label>
	            <input type="text" class="form-control" id="publicOAuthEdit_${instanceId}" value="${publicOAuth!}"/>
	        </div>
	        <div class="form-group">
	            <label for="secretOAuth">${i18n.getTranslation('OAuthWidget.edit.secretOAuth')}</label>
	            <input type="text" class="form-control" id="secretOAuthEdit_${instanceId}" value="${secretOAuth!}"/>
	        </div>
	        
			<div class="form-group">
			    <button class="btn btn-primary" data-save-preferences>${i18n.getTranslation('OAuthWidget.edit.savepref')}</button>
			</div>
			
		  </div>
		  
		</div>
	
	</form>

</div>

