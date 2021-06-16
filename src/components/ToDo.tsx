import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createActions } from '../redux/actions';
import { Todo } from '../redux/types';
import './ToDo.css';

type TodoProps = {
  toDo: Todo;
};

function ToDo({ toDo }: TodoProps) {
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

  const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setToDoState(value);
  };

  const handleEditButton = () => {
    const id = toDo.id;
    setIsEdit(false);
    dispatch(createActions.editToDo(id, toDoState));
  };

  const handleDone = () => {
    const id = toDo.id;
    const done = toDo.done;
    dispatch(createActions.doneToDo(id, done));
  };

  return (
    <li>
      {isEdit ? (
        <form className='todo-contents' onSubmit={handleEditButton}>
          <input
            className='todo-contents-editinput'
            type='text'
            value={toDoState}
            onChange={handleEditInput}
          />
          <button className='todo-contents-edit-button' type='submit'>
            Edit
          </button>
        </form>
      ) : (
        <>
          <div className={toDo.done ? 'done' : 'todo-contents'}>
            <div className='todo-contents-container'>
              <input
                className='todo-contents-checkbox'
                type='checkbox'
                onChange={handleDone}
                checked={toDo.done}
              />
              <span>{toDo.text}</span>
            </div>
            <div>
              <button className='todo-contents-button' onClick={handleEdit}>
                🖍
              </button>
              <button className='todo-contents-button' onClick={handleDelete}>
                ❌
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDo;
