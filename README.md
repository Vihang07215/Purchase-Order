# Purchase-Order
<h2 align="left"> Introduction:</h2>

Users of this Purchase Order Management System can handle purchase orders and the related items. The system logs pertinent purchase order information including related items, pricing, and vendors.

<h2 align="left"> Purpose and Overview:</h2>

This system aims to give companies a centralized venue where they may make, change, and oversee purchase orders. It helps to automate procurement, so increasing productivity and lowering hand-made mistakes. Every purchase order includes thorough details on the items being bought as well as the suppliers of them. The system also logs inventory levels, pricing, and product availability so that companies may make informed purchases.

Small businesses, medium-sized companies, and large companies looking for a quick and orderly way to manage their purchase orders may find the very scalable and configurable **Purchase Order Management System**  appropriate.

The **Purchase Order Management System** is highly scalable and customizable, making it suitable for small businesses, medium-sized enterprises, and large organizations that need an efficient and organized approach to handling their purchase orders.

<h2 align="left"> Key Features :</h2>

- **Create and manage purchase orders:** Every purchase order you create and oversee provides pertinent information including the order number, date, party name, and remarks.
- **Itemized purchase order tracking:** Every purchase order includes several products, each linked with comprehensive information including product ID, category, price, quantity, and supplier.
- **Provider and Category integration:** Purchasing order items are categorized and connected to particular providers, therefore improving the structure and management of the product data.

<h2 align="left">AVAILABLE API:</h2>

| **Name** | **HTTP Method** | **Endpoint** | **Requirements** |
| --- | --- | --- | --- |
| **Create a PO**  | POST | http://localhost:2031/po/poin | Request Body: `date: date, party: string,pono:number,remarks:string` |
| **Get PO** | GET | http://localhost:2031/po/poget/id/:id | Request Params: `id:string` |
| **Update PO** | PUT | http://localhost:2031/po/poput/id/:id | Request Params: `id:string`                           Request Body : `date: date`,`party: string,pono:string,remarks:string` |
| **Delete PO** | DELETE | http://localhost:2031/po/podel/id/:id | Request Params: `id:string` |
| **Create a PoItem** | POST | http://localhost:2031/poitem/inPoItem |  Request Body:  `poid: string, item: string,description:string,rate:number,dod:date,remarks_detail:string` |
| **Get PoItem** | Get | http://localhost:2031/poitem/poitemget/idd/:idd | Request Params:  `id:string`        |
| **Update POItem** | PUT | http://localhost:2031/poitem/poitemput/poid/:poid | Request Params:  `poid:string`                                         Request Body: `poid: string, item: string,description:string,rate:number,dod:date,remarks_detail:string` |
| **Delete PoItem** | DELETE | http://localhost:2031/poitem/poitemdel | Request Params:  `id:string`   |

<h2 align="left">Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)


<h2 align="left">Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)


<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- jsonwebtoken
- moment
- mongoose
- nodemon
- validator

<h2 align="left"> Database Structure</h2>

The platform will require a relational database to manage Purchase Order and Items . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) Purchase_Order

| **Field Name** | **Type** |
| --- | --- |
| pono | String |
|  date | Date |
| party | String |
| remarks | String |

### b) PurchaseOrder_Item(change)

| **Field Name** | **Type** |
| --- | --- |
| srno | Number |
| item | String |
| description | String |
| name | String |
| poid | Ref. Object → Po |
| rate | Number |
| dod | Date |
| remarks_detail | String |

<h2 align="left"> Use Cases</h2>

## Use Cases

- **Inventory Management**: Track the state and inventory levels of several products while controlling procurement procedures.
- **Supplier Management**: Easily link purchase orders to particular vendors to effectively handle supplier relationships.
- **Business Intelligence**: Create reports and insights depending on product categories, pricing, and supplier data to guide your purchases.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>



<h2 align="left">🐦 Connect with me:</h2>
         
 
<p align="left">

<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>
</p>
I hope you like the project. Thanks for reading :)
