import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts'
import { ContactsList } from 'components/ContactsList/ContactsList'
// import { nanoid } from 'nanoid'
// import { useState,useEffect } from 'react'
// useDispatch -для вызова actions;
// useSelector - для доступа к store;
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/Contacts/contactsSelectors';
import { getFilter } from 'redux/Filter/filterSelectors'
import { addContact, removeContact} from 'redux/Contacts/contactsSlice';
import { setFilter } from 'redux/Filter/filterSlice';

export function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);  
  const dispatch = useDispatch(); 
  // const [contacts, setContacts] = useState(()=> {
  //   const value = JSON.parse(localStorage.getItem("contacts"));
  //   return value ?? [];
  // })
  // const [filter, setFilter] = useState('');

// useEffect(()=> {
//   console.log("useEffect run");
//   localStorage.setItem("contacts", JSON.stringify(contacts))
//   }, [contacts]);

  const onAddContact = (contact) => {
    if (isDuplicate(contact)) {
        return alert(`${contact.name} has already added`)
    }
    const action = addContact(contact);
    dispatch(action);
    // setContacts((prev)=> {
    //     const contactsId = {
    //         id: nanoid(), 
    //         ...contact}
    //   return [...prev, contactsId]
    // })
  }
  const onRemoveContact =(id)=> {
    const action = removeContact(id);
    dispatch(action);
    // const newContacts = contacts.filter((item)=> item.id !== id);
    // return  setContacts(newContacts);
  }
  const handleChange = (e) => {
    const { value} = e.target;
    dispatch(setFilter(value))
    // setFilter(value);
  }
  const isDuplicate = ({name})=> {
    const result = contacts.find((dropItem) => dropItem.name === name);
    return result;
  }

  const getFilteredContacts = () => {
    if(!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({name}) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter)
        return result;
    })
    return filteredContacts;
  }
  const filteredContacts = getFilteredContacts();
  return (
    <div>
        <div>
            <FormAddContacts onSubmit={onAddContact} />
        </div>
        <div>
            <h2>Contacts</h2>
            <label htmlFor="">Find contacts by name</label>
            <input 
                onChange={handleChange} 
                value={filter}  
                type="text" 
                name='filter' 
            />
            <ContactsList items= {filteredContacts} removeContact={onRemoveContact}/>
            
        </div>
    </div>
        
    )
}


// export class Contacts extends Component {
//     state = { 
//         contacts: [],
//         filter: ''
//     }

    // componentDidUpdate(prevState) {
    //   const {contacts} = this.state;
    //   if(prevState !== contacts) {
    //     localStorage.setItem("contacts", JSON.stringify(contacts))
    //   }
    // }

    // componentDidMount(){
    //   const newContacts = JSON.parse(localStorage.getItem("contacts"))

    //   if(newContacts && newContacts.length) {
    //     this.setState({
    //       contacts: newContacts
    //     }) 
    //   }
    // }

//   addContact = (contact) => {
//     if (this.isDuplicate(contact)) {
//         return alert(`${contact.name}has already added`)
//     }
//     this.setState((prev)=>{
//         const contactsId = {
//             id: nanoid(), 
//             ...contact}
//       return {
//         contacts: [...prev.contacts, contactsId]
//       }
//     })
//   }
//   removeContact =(id)=> {
//     this.setState((prev) => {
//         const newContacts = prev.contacts.filter((item)=> item.id !== id);
//         return  {
//             contacts: newContacts
//         }
//     })
//   }

//   isDuplicate({name}) {
//     const { contacts } = this.state;
//     const result = contacts.find((item) => item.name === name);
//     return result;
//   }
//   handleChange = (e) => {
//     const {name, value} = e.target
//     this.setState ({[name]: value }) 
//   }
//   getFilteredContacts() {
//     const {contacts, filter} = this.state;

//     if(!filter) {
//         return contacts;
//     }
//     const normalizedFilter = filter.toLocaleLowerCase();
//     const filteredContacts = contacts.filter(({name}) => {
//         const normalizedName = name.toLocaleLowerCase();
//         const result = normalizedName.includes(normalizedFilter)
//         return result;
//     })
//     return filteredContacts;
//   }
//   render() {
    
//     const {addContact, handleChange, removeContact} = this;
//     const { filter} = this.state;
//     const contacts = this.getFilteredContacts()
//   return (
//     <div>
//         <div>
//             <FormAddContacts onSubmit={addContact} />
//         </div>
//         <div>
//             <h2>Contacts</h2>
//             <label htmlFor="">Find contacts by name</label>
//             <input 
//                 onChange={handleChange} 
//                 value={filter}  
//                 type="text" 
//                 name='filter' 
//             />
//             <ContactsList items= {contacts} removeContact={removeContact}/>
//         </div>
//     </div>
        
//     )
//   }
// }

