import React, { useEffect, useState } from 'react';
import { rootReducerType } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { createActions } from './redux/actions';
import ToDo from './components/ToDo';
import './App.css';
import './reset.css';

function App() {
  const toDos = useSelector((state: rootReducerType) => state);
  const progressToDos = useSelector((todo: rootReducerType) =>
    todo.filter((todo) => todo.done === false)
  );
  const doneToDos = useSelector((todo: rootReducerType) =>
    todo.filter((todo) => todo.done === true)
  );
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [toggleAll, setToggleAll] = useState(true);
  const [toggleProgress, setToggleProgress] = useState(false);
  const [toggleDone, setToggleDone] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length === 0) {
      alert('Error');
    } else {
      dispatch(createActions.addToDo(text));
      setText('');
    }
  };

  useEffect(() => {
    dispatch(createActions.loadToDos());
  }, []);

  const handleDeleteAll = () => {
    dispatch(createActions.deleteAll());
  };

  const handleDeleteProgress = () => {
    dispatch(createActions.deleteProgress());
  };

  const handleDeleteDone = () => {
    dispatch(createActions.deleteDone());
  };

  const toggleAllList = () => {
    setToggleAll(true);
    setToggleProgress(false);
    setToggleDone(false);
  };

  const toggleProgressList = () => {
    setToggleAll(false);
    setToggleDone(false);
    setToggleProgress(true);
  };

  const toggleDoneList = () => {
    setToggleAll(false);
    setToggleProgress(false);
    setToggleDone(true);
  };

  return (
    <div className='tooapp'>
      <div className='todo-container'>
        <h1 className='todo-header'>To Do App</h1>
        <form className='todo-form' onSubmit={handleSubmit}>
          <input
            className='todo-input'
            type='text'
            value={text}
            onChange={onChange}
            placeholder='Add your new todo'
          />
          <button className='todo-button' type='submit'>
            Add
          </button>
        </form>
        <br />
        <div className='todo-filter-button-container'>
          <button className='todo-filter-button' onClick={toggleAllList}>
            All
          </button>
          <button className='todo-filter-button' onClick={toggleProgressList}>
            Progress
          </button>
          <button className='todo-filter-button' onClick={toggleDoneList}>
            Done
          </button>
        </div>
        <ul>
          {toggleAll && toDos.map((toDo) => <ToDo key={toDo.id} toDo={toDo} />)}
          {toggleProgress &&
            progressToDos.map((toDo) => <ToDo key={toDo.id} toDo={toDo} />)}
          {toggleDone &&
            doneToDos.map((toDo) => <ToDo key={toDo.id} toDo={toDo} />)}
        </ul>
      </div>
      {toDos.length === 0 ? null : toggleAll ? (
        <div className='todo-bottom-container'>
          <span>{`All : ${toDos.length} tasks`}</span>&nbsp;
          <button className='todo-bottom-button' onClick={handleDeleteAll}>
            Clear All
          </button>
        </div>
      ) : toggleProgress ? (
        <div className='todo-bottom-container'>
          <span>{`In Progress: ${progressToDos.length} tasks`}</span>&nbsp;
          <button className='todo-bottom-button' onClick={handleDeleteProgress}>
            Clear
          </button>
        </div>
      ) : (
        toggleDone && (
          <div className='todo-bottom-container'>
            <span>{`Done: ${doneToDos.length} tasks`}</span>&nbsp;
            <button className='todo-bottom-button' onClick={handleDeleteDone}>
              Clear
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default App;
