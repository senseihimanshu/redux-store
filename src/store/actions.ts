// Action Constants
export const ADD_TODO = '[Type] Add Todo'
export const REMOVE_TODO = '[Type] Remove Todo'

// Action Creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any){}
}
export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any){}
}
