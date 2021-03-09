import Header from "./Component/Header/header"
import Footer from "./Component/Footer/footer"
import Users from "./Component/users/users"
import Userlist from './Component/userlist/userlist'
import Contacts from "./Component/Contacts/contacts"
import Contact from "./Component/Contact/contact";
import ClickCounter from "./Component/Click-Counter/click-counter";
import ContactsTable from "./Component/Contact-Table/contact-table";
import { contactList } from "./data/contactlist";
import Parent from "./Component/Parent/parent";
import Form from "./Component/form/form"
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"

let App = () => {
  return(
    <BrowserRouter>
      <Header></Header>
      <Link to = "/">Home</Link> |
      <Link to = "/form"> Form</Link> | 
      <Link to = "/users"> Users</Link> 
      <hr/>      

      <Switch>
      <Route exact path = "/" component = { Contacts } ></Route>
      <Route path ="/form" component ={ Form }></Route>
      <Route exact path = "/users" component ={ Users } ></Route>
      <Route path = "/users/:id" component ={Userlist} ></Route>
      </Switch>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;