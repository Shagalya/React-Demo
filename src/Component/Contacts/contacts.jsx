import { contactList } from "../../data/contactlist"
import Contact from "../Contact/contact"
const Contacts = () =>{
    let contacts = contactList.map(c => <Contact key = {c.id}
                                  name = {c.name}
                                  mobile = {c.mobile}
                                  email = {c.email}
                                  gender = {c.gender}
                                  contacted = {c.contacted}>
                                  </Contact>
        );
        return(
            <div>
                {contacts}
            </div>
            
        );

}
export default Contacts;
