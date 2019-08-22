export class Store{
  private subscribers: Function[];
  private state: {[key: string]: any};
  private reducers: {[key: string]: Function};

  constructor(reducers = {}, initialState = {}){
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value(){
    return this.state;
  }

  dispatch(action){
    this.state = this.reduce(this.state, action);

    console.log(this.state);
  }

  private reduce(state, action){
    const newState = {};
    for(const prop in this.reducers){
      newState[prop] = this.reducers[prop](state[prop], action);
      console.log(state[prop], 'state[prop]', prop, 'prop');
    }
    return newState;
  }
}
