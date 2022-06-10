import React from 'react';
import { TodoContext } from '../todoContext';



function TodoForm(){

    const [newTodoValue,setNewTodoValue] = React.useState('');


    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext); 

    const onCancel =  ()  =>  {
        setOpenModal(false);
    };
    const onSubmit = () => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form  onSubmit={onSubmit} >
            <label></label>
        <textarea  
        value = {newTodoValue}
        onChange = {onChange}
        placeholder='Write your TODO' />

        <div>
            <button 
            type='button'
            onClick={onCancel}
            >Cancel
        </button>
            
            <button
         type='submit'
         >
             Add
        </button>
        </div>
        </form>

    )
}




export { TodoForm };


