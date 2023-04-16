## Anotomy of React Apps

Development of React Apps foundamentally consist of 3 stage

- define jsx ( designing html)
- make jsx elements functional (make it stateful via React hooks)
- modulirize the app

### useContext

We need to create a store in order to have a single source of state. We will create TodoContext,jsx file under store folder then we will fetch local storage in the file, eventually we will incejt the store in the Provider tag within main.jsx file

```jsx
import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext({
  todos: [],
  setTodos: () => {},
});

export const TodoProvider = (props) => {
  const localStorageTodos = JSON.parse(localStorage.getItem("ITEMS")) || [];
  const [todos, setTodos] = useState(localStorageTodos);

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};
```

Then provide it as a parent containe

```jsx
<TodoProvider>
  <App />
</TodoProvider>
```

Now we can stop prop drilling by exporting the TodoContext.

```jsx
const { setTodos } = useContext(TodoContext);
```
