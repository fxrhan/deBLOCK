
import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('626c520f915b562beb72') // Your project ID
    // .setKey('7735c2e366ac69f3d73c6ef86d70cfb7f9b5add20d574ff5760c722041e1530454e6850c6c6adbac2ebff2287fcd46bd6779c9abc5811a6d09f6b0085e53c04e6e5ad125f1a343f93ac46a516733ee9c805b8b2ec2a61e7de8c9da1006f40547147390230fcbe9d4b560d55d5432d8a20ae5feba4349a0678810fe4c6665cb33')
;

 
 const account = sdk.account;
 export {account,sdk}
 