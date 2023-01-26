## react foundation

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
    "hello world!!!"
  );
};

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(Greeting());
```
