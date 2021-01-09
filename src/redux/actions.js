const LOAD = 'LOAD';
const ADD = 'ADD';
const EDIT = 'EDIT';
const DONE = 'DONE';
const DELETE = 'DELETE';
const DELETE_PROGRESS = 'DELETE_PROGRESS';
const DELETE_DONE = 'DELETE_DONE';
const DELETE_ALL = 'DELETE_ALL';

const loadToDos = () => {
  return {
    type: LOAD,
  };
};

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const editToDo = (id, text) => {
  return {
    type: EDIT,
    id,
    text,
  };
};

const doneToDo = (id, done) => {
  return {
    type: DONE,
    id,
    done,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const deleteProgress = () => {
  return {
    type: DELETE_PROGRESS,
  };
};

const deleteDone = () => {
  return {
    type: DELETE_DONE,
  };
};

const deleteAll = () => {
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
