import { UserProvider, useUser } from "./UserContext";

export default function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Page />
      </div>
    </UserProvider>
  );
}

const LoogedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span className="username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoogedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is Lorem Ipsum ?</h2>
      <p>
        this is a website of nothing out of nothing consinst of nothing and is
        called nill this is a website of nothing out of nothing consinst of
        nothing and is called nill{" "}
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};
