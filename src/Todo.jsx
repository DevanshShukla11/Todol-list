import React from 'react'
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

export const Todo = (props) => {
    // const deleteItems = () => {
        // console.log("deleted");
    // }
    return (
        <>
          <div className="todo-style">
          <RestoreFromTrashIcon className="delete-item"   onClick={() => 
              {
                  props.onSelect(props.id)
                  
              }
          }  />
          <li>{props.text}</li>
          
          
          </div>
        </>
    )
}
