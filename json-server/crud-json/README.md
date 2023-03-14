```console
yarn init -y
yarn add json-server
touch db.json
```

then with is script in package.json

```json
"server":"json-server --watch db.json --port 5000"
```

we can visit www.localhost:5000/data

now we can start sever with **yarn server**
then we create react app for client-side and name the app as client

```console
yarn crate vite
yarn add react-router-dom react-icons axios react-toastify
```
