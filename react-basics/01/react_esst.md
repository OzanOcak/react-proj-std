## Creating basic react app with CDN of React,React-Dom and babel

We will create the most basic react app with react,react-dom and babel libraries, first we will add the CDN of the libraries in to html file, Now we can create our virtual Dom tith help of React-dom librry and we can return jsx element in treact component to out virtual dom with help of babel tranpiler.

### React and React-dom libraries

We satrt crateing a html file then add reactdom and react packages

```html
<div id="root"></div>
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

within script tag, we can create React element in a javascrict function then render it and finally we can inject it into html element which has id named root.

```javascript
const Greeting = () => {
  return React.createElement(
    "h1",
    { style: { color: "blue" } },
    "Hello React!!!"
  );
};

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(Greeting());
```

note that Since Greeting is a function, it needs to be called

You can see the [code](https://github.com/OzanOcak/react-proj-std/blob/main/react-basics/01/index.html)

### JSX

We can write html like syntax within javascript file with jsx files, in oreder to do that we need to compile jsx to js with babel

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

and we can create react element without React.createElement() after adding
**<script type="text/babel">**

```javascript
const Greeting = () => <h1>Hello React with JSX!!!</h1>;
```
