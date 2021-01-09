import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createActions } from 'redux/actions';
import './ToDo.css';

function ToDo({ toDo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [toDoState, setToDoState] = useState(toDo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
    const id = toDo.id;
    dispatch(createActions.deleteToDo(id));
  };

  const handleEditInput = (e) => {
    const { value } = e.target;
    setToDoState(value);
  };

  const handleEditButton = () => {
    const id = toDo.id;
    setIsEdit(false);
    dispatch(createActions.editToDo(id, toDoState));
  };

  const handleDone = (e) => {
    const id = toDo.id;
    const done = toDo.done;
    dispatch(createActions.doneToDo(id, done));
  };

  return (
    <li>
      {isEdit ? (
        <form onSubmit={handleEditButton}>
          <input type='text' value={toDoState} onChange={handleEditInput} />
          <button type='submit'>수정</button>
        </form>
      ) : (
        <>
          <div className={toDo.done ? 'done' : null}>
            <input type='checkbox' onChange={handleDone} checked={toDo.done} />
            <span>{toDo.text}</span>
            &nbsp;
            <button onClick={handleEdit}>🖍</button>
            <button onClick={handleDelete}>❌</button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDo;
