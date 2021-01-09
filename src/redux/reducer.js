const LOAD = 'LOAD';
const ADD = 'ADD';
const EDIT = 'EDIT';
const DONE = 'DONE';
const DELETE = 'DELETE';
const DELETE_PROGRESS = 'DELETE_PROGRESS';
const DELETE_DONE = 'DELETE_DONE';
const DELETE_ALL = 'DELETE_ALL';

const setPersist = (toDos) => {
  window.localStorage.setItem('toDos', JSON.stringify(toDos));
};

export const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return JSON.parse(localStorage.getItem('toDos')) || [];

    case ADD:
      const toDoObj = {
        id: Date.now().toString(),
        text: action.text,
        done: false,
      };
      setPersist([...state, toDoObj]);
      return [...state, toDoObj];

    case EDIT:
      const editArr = state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
      setPersist(editArr);
      return editArr;

    case DONE:
      const doneArr = state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !action.done } : todo
      );
      setPersist(doneArr);
      return doneArr;

    case DELETE:
      const delArr = state.filter((todo) => todo.id !== action.id);
      setPersist(delArr);
      return delArr;

    case DELETE_PROGRESS:
      const delProgress = state.filter((todo) => todo.done !== false);
      setPersist(delProgress);
      return delProgress;

    case DELETE_DONE:
      const delDone = state.filter((todo) => todo.done !== true);
      setPersist(delDone);
      return delDone;

    case DELETE_ALL:
      const delAll = [];
      setPersist(delAll);
      return delAll;

    default:
      return state;
  }
};
