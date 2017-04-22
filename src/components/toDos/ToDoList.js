/**
 * Created by Cristian on 4/16/2017.
 */
import React, {PropTypes} from 'react';
import ToDoListRow from './ToDoListRow';

const ToDoList = ({toDoItems}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {toDoItems.map(item =>
        <ToDoListRow key={item.id} toDoItem={item}/>
      )}
      </tbody>
    </table>
  );
};

ToDoList.propTypes = {
    toDoItems: PropTypes.array.isRequired
};

export default ToDoList;
