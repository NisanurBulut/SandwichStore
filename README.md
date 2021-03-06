## Give a Star! :star:
If you like or are using this project to learn or start your solution, please give it a star. Thanks!
<hr>

### Sandwich Store
- The props type control is done
- Adding and removing materials into the sandwich
- The total cost is recalculated whenever material additions and removals occur
- Prepared sandwich is to be ordered
- The order summary is shown on the modal
- The order can be canceled
- The orders are listed.
- Using the Redux pattern is done.
- Sandwich price is calculated using Redux pattern.
- The user can register and log in to the application.
- If the user is logged in, he / she displays the Logout link on toobar.
- User has token information after login.With this token, you can make transactions in the application.
- If the user is not logged in, they cannot view the order list and purchase screens.
- If the user is not logged in, she has her order prepared and when she wants to place an order, she is directed to the login page.
- User-specific order list is created.
The user cannot view the order list of other users.

![Sandwich Store](https://github.com/NisanurBulut/SandwichBuilder/blob/master/Trailers/Trailer_SandwichStore.gif)

### API

| Method   | Url                               | Parameters                                                                                              |
|----------|-----------------------------------|---------------------------------------------------------------------------------------------------------|
| login    | POST localhost:3001/login         | { email:"", password:"" }                                                                               |
| register | POST localhost:3001/login         | { email:"", password:"" }                                                                               |
| orders   | GET localhost:3001/orders?userId= | { token:"", userId:""}                                                                                  |
| order    | POST localhost:3001/orders        | { deliveryMethod:"fastest", userId:"", ingredients:[], price:0, customer:{name:"",address:"",email:""}} |


### Installations

- npm install json-server json-server-auth
- npm install --save axios
- npm install --save react-router-dom
- npm install semantic-ui-react semantic-ui-css
- npm install --save redux react-redux
- npm install --save redux-thunk
- npm install redux-devtools
- npm i axios-delay

### HelpFull Websites
[cheeseburger-css-div](https://github.com/lesscake/cheeseburger-css-div) [Single component css](https://projects.lukehaas.me/css-loaders/)