import {
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

const loadToDos = (): TodoDispatch => {
  return {
    type: LOAD,
  };
};

const addToDo = (text: string): TodoDispatch => {
  return {
    type: ADD,
    text,
  };
};

const editToDo = (id: string, text: string): TodoDispatch => {
  return {
    type: EDIT,
    id,
    text,
  };
};

const doneToDo = (id: string, done: boolean): TodoDispatch => {
  return {
    type: DONE,
    id,
    done,
  };
};

const deleteToDo = (id: string): TodoDispatch => {
  return {
    type: DELETE,
    id,
  };
};

const deleteProgress = (): TodoDispatch => {
  return {
    type: DELETE_PROGRESS,
  };
};

const deleteDone = (): TodoDispatch => {
  return {
    type: DELETE_DONE,
  };
};

const deleteAll = (): TodoDispatch => {
  return {
    type: DELETE_ALL,
  };
};

export const createActions = {
  loadToDos,
  addToDo,
  editToDo,
  doneToDo,
  deleteToDo,
  deleteProgress,
  deleteDone,
  deleteAll,
};
