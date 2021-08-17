import React from 'react'
import { Todo } from './Todo';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

export const Main = () => {
     const  [inputList , setinputList] = React.useState("");
     const [items , setItems] = React.useState([]);
    //  console.log(items); 

     const itemEvent = (event) =>{
         setinputList(event.target.value);
        };

         const listitems = () =>{
             setItems((oldItems) =>{
                //  console.log(oldItems);
                 return[...oldItems , inputList];
             });
             setinputList('');

         };
        //  for deleteing items  code

         const deleteItems = (id) =>{
             console.log("deleted");

             setItems((oldItems) => {
                 return oldItems.filter((arry , index) => {
                    return index !== id;

                 })


             })
         }
    
    return (
        <>
        <div className="main-todo">
            <div className="to-do">
            <div className="span">
                <span>To do list</span>
                </div>
                <div className="todo-input">
                    <input type="text" placeholder="Add items" onChange={itemEvent}  value={inputList}/>
                    {/* <i onClick={listitems} className='bx bx-message-rounded-add'></i> */}
                    <AddCircleIcon  onClick={listitems} className="add-item"/>
                 </div>
                 <div className="list">
                     <ol>
                       
                         {items.map((itemvalue , index) => {
                            return <Todo
                              id = {index}
                              key = {index}
                              text = {itemvalue}
                              onSelect = {deleteItems}
                              />
                            
                         })}
                     </ol>
                 </div>
                 
                </div>
            </div>
       </>
    )
}
