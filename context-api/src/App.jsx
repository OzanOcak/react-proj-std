export default function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

const LoogedInUser = () => {
  return (
    <p>
      Hello <span className="username"></span>
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
  return (
    <div>
      <h2>What is Lorem Ipsum ?</h2>
      <p>
        this is a website of nothing out of nothing consinst of nothing and is
        called nill this is a website of nothing out of nothing consinst of
        nothing and is called nill{" "}
      </p>
      <p>Written by </p>
    </div>
  );
};
