import { LightningElement, wire } from 'lwc';
import LOGO from '@salesforce/resourceUrl/MySFLogo';
import myContentAsset from "@salesforce/contentAssetUrl/imagespng";
import SALESFORCE_PLATFORM from '@salesforce/label/c.salesforcePlatform';
import GREETING from '@salesforce/label/c.greeting';
import USER_ID from '@salesforce/user/Id';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import DISPLAY_TEXT from '@salesforce/customPermission/Display_Text';

export default class StaticResourcesLWC extends LightningElement {
    //we can't directly access imports
    mySalesForceLogo = LOGO;
    myContentAssetLogo = myContentAsset;
    labels = {
        greeting : GREETING, 
        platform : SALESFORCE_PLATFORM
    };
    userName = "";


    @wire(getRecord,{
        recordId : USER_ID,
        fields: [NAME_FIELD]
    }) wired_userDetails({data, error}){
        if(data){
            console.log('User Info Details', data);
            this.userName = getFieldValue(data, NAME_FIELD);
        }else if(error){
            console.log('User Info Details error', error);
        }
    }

    get checkPermission(){
        return DISPLAY_TEXT;
    }
}