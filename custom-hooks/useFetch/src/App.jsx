import useFetch from "./useFetch";

function App() {
  const { error, loading, users } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      <div className="App">Users</div>
      {loading && <p>Loading</p>}
      {error && <p>{error.message}</p>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default App;
