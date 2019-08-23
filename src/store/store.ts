export class Store{
  private subscribers: Function[];
  private state: {[key: string]: any};
  private reducers: {[key: string]: Function};

  constructor(reducers = {}, initialState = {}){
    this.subscribers = [];
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value(){
    return this.state;
  }

  subscribe(fn){
    console.log(fn, 'fn');
    this.subscribers = [...this.subscribers, fn];
    this.notify();
    return ()=>{
      this.subscribers = this.subscribers.filter((subscriber)=> fn!==subscriber)
    };
  }

  dispatch(action){
    this.state = this.reduce(this.state, action);
    this.notify();
    console.log(this.state);
  }

  private notify(){
    this.subscribers.forEach(fn => fn(this.value));
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
