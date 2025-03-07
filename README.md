# Access-Static-Resources-Labels-User-IDs-Third-Party-JS-and-CSS-LWC

**Access Static Resources**
1. Upload the resource in Salesforce org.
2. Import static resources from the @salesforce/resourceUrl scoped module.
3. Static resources can be archives (such as .zip and .jar files), images, stylesheets, JavaScript and other files.

![image](https://github.com/user-attachments/assets/eb04e7c2-4223-4270-b1ea-b62b8f0801d0)

**Access Content Asset Files**
1. Import content asset files from the @salesforce/contentAssetUrl scoped module.

![image](https://github.com/user-attachments/assets/5ec127a1-3928-4749-9933-968221b036d3)

**Access Labels**
1. Import labels from the @salesforce/label scope module.
2. Use custom labels to create multilingual applications that present information (help text or error messages) in users native language.

![image](https://github.com/user-attachments/assets/234b3dd8-7cd5-4f53-817a-65d8ef305772)

**Access Current User**
1. To get information about the current user, use the @salesforce/user scoped module.

 ![image](https://github.com/user-attachments/assets/bcfc8f5e-24d2-47e1-a796-103316f2f5c1)

**Check Permissions**
1. Import Salesforce permission from the @salesforce/userPermission and @salesforce/customPermission scoped modules.
2. Customize a component's behaviour based on the permissions of the context user.

![image](https://github.com/user-attachments/assets/858ca8c6-f391-47a7-8659-cb7cbc3ba057)
   
**Platform Resource Loader**
1. To import a 3rd party JS or CSS library, use the platformResourceLoader module.
2. Download the JS or CSS files from the 3rd party library's site.
3. Upload the library to your Salesforce organization as a static resource, which is a Lightning Security requirement.
4. In a component's JS file:
   i. Import the static resource
       import myResourceName from '@salesforce/resourceUrl/myResourceName';
   ii. Import methods, from the platformResourceLoader module.
        import {loadStyle, loadScrit} from 'lightning/platformResourceLoader';
6. Load the library and call its functions in a promise then() method.
