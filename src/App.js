import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createActions } from 'redux/actions';
import ToDo from 'components/ToDo';

function App() {
  const toDos = useSelector((state) => state);
  const progressToDos = useSelector((todo) =>
    todo.filter((todo) => todo.done === false)
  );
  const doneToDos = useSelector((todo) =>
    todo.filter((todo) => todo.done === true)
  );
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [toggleAll, setToggleAll] = useState(true);
  const [toggleProgress, setToggleProgress] = useState(false);
  const [toggleDone, setToggleDone] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0, auto',
      }}
    >
      <h1>To Do App</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button type='submit'>Add</button>
      </form>
      <br />
      <div>
        <button onClick={toggleAllList}>All</button>
        <button onClick={toggleProgressList}>Progress</button>
        <button onClick={toggleDoneList}>Done</button>
      </div>
      <ul>
        {toggleAll && toDos.map((toDo) => <ToDo key={toDo.id} toDo={toDo} />)}
        {toggleProgress &&
          progressToDos.map((toDo) => <ToDo key={toDo.id} toDo={toDo} />)}
        {toggleDone &&
          doneToDos.map((toDo) => <ToDo key={toDo.id} toDo={toDo} />)}
      </ul>
      {toDos.length === 0 ? null : toggleAll ? (
        <div>
          <span>{`총: ${toDos.length}개`}</span>&nbsp;
          <button onClick={handleDeleteAll}>Delete All</button>
        </div>
      ) : toggleProgress ? (
        <div>
          <span>{`진행중: ${progressToDos.length}개`}</span>&nbsp;
          <button onClick={handleDeleteProgress}>Delete Progress</button>
        </div>
      ) : (
        toggleDone && (
          <div>
            <span>{`완료: ${doneToDos.length}개`}</span>&nbsp;
            <button onClick={handleDeleteDone}>Delete Done</button>
          </div>
        )
      )}
    </div>
  );
}

export default App;
