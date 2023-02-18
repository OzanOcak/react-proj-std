## context-api

- Create the context.
- Put state and dispatch into context.
- Use context anywhere in the tree.

#### Step 1: Create the context

```javascript
const [todos, dispatch] = useReducer(todosReducer, initialTodos);
```

useReducer Hook returns the current todos and the dispatch function that lets you update them

so we will create TodoContext for the same purpose to provide data child components

```javascript
import { createContext } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
```

#### Step 2: Put state and dispatch into context

Now in the App.js, we can make context availabe

```javascript
import { TasksContext, TasksDispatchContext } from "./TasksContext.js";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  // ...
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        ...
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
```
