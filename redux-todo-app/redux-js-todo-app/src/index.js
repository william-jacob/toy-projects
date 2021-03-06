//createStore
import { createStore } from 'redux';


const formToDo = document.querySelector('#formToDo');
const inputToDo = document.querySelector('input');
const ulToDo = document.querySelector('#ulToDo');




//type
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

//action
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
    id: Date.now(),
  };
}
const deleteToDo = (deleteId) => {
  return {
    type: DELETE_TODO,
    id: deleteId,
  }
}


//reducer
const reducer = (state=[], action) => {
  switch(action.type) {
    case ADD_TODO :
      return [...state, {text: action.text, id: action.id}];
    case DELETE_TODO :
      return state.filter(v => v.id !== action.id);
      // mutate를 하지 못해서 새로운 배열을 반환해주는 filter메소드를 씀
    default :
      return state;
  }

}

//store
const store = createStore(reducer);


//dispatch: reducer 실행
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}
const dispatchDeleteToDo = (e) => {
  const targetId = parseInt(e.currentTarget.parentNode.id);
  store.dispatch(deleteToDo(targetId));
}


const createToDo = (arrToDos) => {//arrToDos: 요소가 객체인 array
  ulToDo.textContent = '';
  arrToDos.forEach((toDo) => {
    const liToDo = document.createElement('li');//생성
    const delbtn = document.createElement('button');

    liToDo.textContent = toDo.text;//내용
    delbtn.textContent = '❌';
    delbtn.addEventListener('click', dispatchDeleteToDo);
    liToDo.id = toDo.id;
    inputToDo.value = '';

    liToDo.append(delbtn);//위치
    ulToDo.append(liToDo);
  });
  
}


//subscribe(onChange)
const onChange = () => {
  const arrayToDos = store.getState();//reducer 현재상태 가져오기
  createToDo(arrayToDos);
}
//subscribe
//dispatch > reducer > subscribe > onChange 실행
store.subscribe(onChange);




const handleToDoSubmit = (e) => {
  e.preventDefault();
  const inputToDoValue = inputToDo.value;
  dispatchAddToDo(inputToDoValue);
}

formToDo.addEventListener('submit', handleToDoSubmit);


