// Action -> Reducer -> New State


let state;
 
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

// it automatically has access to state.. BC we've defined it globally
function dispatch(action){
    state = reducer(state, action);
    render();
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
  }

  dispatch({type: '@@INIT'})

  let button = document.getElementById('button');

  button.addEventListener('click', () => {
      dispatch({type: 'INCREASE_COUNT'})
  })

  //BREAKDOWN:
  //click button => dispatch an action of type 'INCREASE'
  //dispatch: calls our reducer => updates our state
  //THEN dispatch: renders the updated state
