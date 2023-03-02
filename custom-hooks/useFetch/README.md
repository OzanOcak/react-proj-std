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
