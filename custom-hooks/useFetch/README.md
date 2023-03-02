## Creating Custom Hook with Axios API

Fetching data is the most fundamental part of web development, we will fetch data with **useEffect** because it requires side effect by downloading data and creating new dom elements then store the fetched data in users array by using **useState**

```javascript
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch((error) => setError(error.message))
    .finally(() => setLoading(false));
}, []);
```

We use axios instead of fetch because we can cancel call with axios, it also performs
automatic transform of json data.

```js
{
  users && (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Later we can map users array and show every user in the unordered list. We can also create a logical gate with **&&**

Creating a custom hook will clear the code base and increase readability, it will also allow us reuse the custom hook, all thanks to modular approach of react.

```js
export default function useFetch(url) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { users, error, loading };
}
```

Custom hook returns states and recieve url. All we need to call cusom hook by supplying url.

```js
const { error, loading, users } = useFetch(
  "https://jsonplaceholder.typicode.com/users"
);
```

You can find the source code in [link](https://codesandbox.io/s/usefetch-ps0pno?file=/src/useFetch.js)
