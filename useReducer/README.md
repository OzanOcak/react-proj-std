## UseReducer

We need to understand reducer first because useReducer has the same functionality with the javascript method.

```javascript
const totalGrade = studs.reduce((total, stud) => {
  console.log(`total: ${total}`);
  console.log(`stud grade: ${stud.grade}`);

  return total + stud.grade;
}, 0); // total is 0
```

Reducer method is just like forEach that itereates arrays and you need to assign return value.
useReducer also itarates, it takes 2 arguments; method and state while it returns
state and method

```js
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

reducer methodis just lile js reduce method

```js
function reducer(state, action) {
  return { count: state.count + 1 };
}
```

we need to call dispatch method when we click on button with in jsx

```jsx
<button onClick={increment}>+</button>
```

which will call increment function which call dispatch() method.
But this calls only one method so we can pass type in dispatch methods

```js
function increment() {
  dispatch({ type: "increment" });
}
```

and we can recieve action.type arguments then pick the right one with switch case

```js
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

```

We can finally add constant values instead of giving error probe strings

```js
const ACTIONS = {
  INCREMENT: "icrement",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:

```

and dispatch them with constant values

you can find the in the [link](https://codesandbox.io/s/usereducer-o22mqr)
