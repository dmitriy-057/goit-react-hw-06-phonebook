import { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './FormAddContacts.module.css'
import PropTypes from "prop-types";

export function FormAddContacts({onSubmit}) {
  const [state, setState] = useState({
    name: '',
    number: ''
  })
  const nameId = nanoid()
  const numberId = nanoid()

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prev)=> {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const {name,number} = state;
    onSubmit({name,number})
    console.log(onSubmit)
    setState({
      name: '',
      number: ''
      })
      console.log(name,number);
  }

  return (
    <form onSubmit={handleSubmit}>
     <div className={css.formContainer}>
       <label htmlFor={nameId}>Name</label>
       <input
           onChange={handleChange}
           value={state.name}
           id ={nameId}
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
       />
       <label htmlFor={numberId}>Number</label>
       <input
           onChange={handleChange}
           value={state.number}
           id={numberId}
           type="tel"
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
       />
      
       <button className={css.formBtn}>Add contact</button>
     </div>
   </form>
   )
}
FormAddContacts.propTypes = {
  FormAddContacts:PropTypes.func
  }