import {
  Todo,
  LOAD,
  ADD,
  EDIT,
  DONE,
  DELETE,
  DELETE_PROGRESS,
  DELETE_DONE,
  DELETE_ALL,
  TodoDispatch,
} from './types';

const setPersist = (toDos: Todo[]) => {
  window.localStorage.setItem('toDos', JSON.stringify(toDos));
};

export const reducer = (state: Todo[] = [], action: TodoDispatch): Todo[] => {
  switch (action.type) {
    case LOAD:
      return JSON.parse(localStorage.getItem('toDos') || '') || [];

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
      const delAll: [] = [];
      setPersist(delAll);
      return delAll;

    default:
      return state;
  }
};
