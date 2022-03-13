import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import '../styles/main.scss';
// import { Router } from './router/router.component';

// import './shared/mocks/mock';
import { todoStore } from './shared/mob-x/todos';
// import './shared/mob-x/todos';


export const AppComponent = observer(() => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const saveTodo = () => {
    if (title && description)
      todoStore.addTodo(title, description);
  }

  return (
    <>
      <div>this is header in app component!</div>
      <div className="title">enter title</div>
      <input type="text" onChange={event => setTitle(event.target.value)}/>
      <div className="description">enter description</div>
      <input type="text" onChange={event => setDescription(event.target.value)}/>
      <button onClick={saveTodo}>save</button>
      {todoStore.todos.map(todo => (
        <div key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.description}</div>
          <button onClick={() => todoStore.removeTodo(todo.id)}>remove todo</button>
        </div>
      ))}
      {/* <Router></Router> */}
    </>
  )
});
