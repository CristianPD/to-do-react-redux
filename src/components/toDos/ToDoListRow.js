/**
 * Created by Cristian on 4/16/2017.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ToDoListRow = ({toDoItem}) => {
  return (
    <tr>
      <td><Link to={'/item/' + toDoItem.id}>{toDoItem.title}</Link></td>
      <td>{toDoItem.authorId}</td>
      <td>{toDoItem.category}</td>
    </tr>
  );
};

ToDoListRow.propTypes = {
    toDoItem: PropTypes.object.isRequired
};

export default ToDoListRow;
