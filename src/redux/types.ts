export const LOAD = 'LOAD';
export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DONE = 'DONE';
export const DELETE = 'DELETE';
export const DELETE_PROGRESS = 'DELETE_PROGRESS';
export const DELETE_DONE = 'DELETE_DONE';
export const DELETE_ALL = 'DELETE_ALL';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export interface LoadToDosAction {
  type: typeof LOAD;
}

export interface AddToDoAction {
  type: typeof ADD;
  text: string;
}

export interface EditToDoAction {
  type: typeof EDIT;
  id: string;
  text: string;
}

export interface DoneToDoAction {
  type: typeof DONE;
  id: string;
  done: boolean;
}

export interface DeleteToDoAction {
  type: typeof DELETE;
  id: string;
}

export interface DeleteProgressAction {
  type: typeof DELETE_PROGRESS;
}

export interface DeleteDoneAction {
  type: typeof DELETE_DONE;
}

export interface DeleteAllAction {
  type: typeof DELETE_ALL;
}

export type TodoDispatch =
  | LoadToDosAction
  | AddToDoAction
  | EditToDoAction
  | DoneToDoAction
  | DeleteToDoAction
  | DeleteProgressAction
  | DeleteDoneAction
  | DeleteAllAction;
