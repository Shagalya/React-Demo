import { contactList } from "../../data/contactlist"
const ContactsTable = (props) => {
    return ( 
        <table className = "table table-stripped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>{
               contactList.map(c => <tr key={c.id}>
                                        <td>{c.id}</td>
                                        <td>{c.name}</td>
                                        <td>{c.mobile}</td>
                                        <td>{c.email}</td>
                                    </tr>)
                    }
            </tbody>
        </table>
     );
}
 
export default ContactsTable;