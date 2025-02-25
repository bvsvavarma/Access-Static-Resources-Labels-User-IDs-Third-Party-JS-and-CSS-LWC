import { LightningElement, wire } from 'lwc';
import LOGO from '@salesforce/resourceUrl/MySFLogo';
import myContentAsset from "@salesforce/contentAssetUrl/imagespng";
import SALESFORCE_PLATFORM from '@salesforce/label/c.salesforcePlatform';
import GREETING from '@salesforce/label/c.greeting';
import USER_ID from '@salesforce/user/Id';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import DISPLAY_TEXT from '@salesforce/customPermission/Display_Text';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import THIRD_PARTY_CSS from '@salesforce/resourceUrl/ThirdPartyCSS';
import THIRD_PARTY_JS from '@salesforce/resourceUrl/ThirdPartyJS';


export default class StaticResourcesLWC extends LightningElement {
    //we can't directly access imports
    mySalesForceLogo = LOGO;
    myContentAssetLogo = myContentAsset;
    labels = {
        greeting : GREETING, 
        platform : SALESFORCE_PLATFORM
    };
    userName = "";
    isFirstLoad = true;
    displayDate = "";


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

    renderedCallback(){
        if(this.isFirstLoad){
            this.isFirstLoad = false;
            Promise.all([loadScript(this, THIRD_PARTY_JS),
                loadStyle(this, THIRD_PARTY_CSS)])
            .then(() => {
                console.log('File Load Successfully');   
                this.fetchDate();
            })
            .catch((error) => {
                console.log('Files Load Failure', error);
            })
        }
    }

    fetchDate(){
        this.displayDate = moment().format("LLLL");
    }
}