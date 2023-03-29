import React, { useState } from 'react';

function TaskItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.task);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setEditedText(props.task);
  }

  function handleSaveClick() {
    props.onEdit(editedText);
    setIsEditing(false);
  }

  function handleTextChange(e) {
    setEditedText(e.target.value);
  }

  return (
    <li>
      {isEditing ?
        <div>
          <input type="text" value={editedText} onChange={handleTextChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
        :
        <div>
          <input type="checkbox" checked={props.completed} onChange={props.onCompletion} />
          <span className={props.completed ? 'completed' : ''}>{props.task}</span>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={props.onDelete}>Delete</button>
        </div>
      }
    </li>
  );
}

export default TaskItem;
