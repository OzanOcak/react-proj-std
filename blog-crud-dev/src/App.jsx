import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Route, Routes } from "react-router-dom";
import EditPost from "./pages/EditPost";
import { DataProvider } from "./context/DataContext";
import FilteredArticles from "./components/FilteredArticles";

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Header title="My Blog" />
      <DataProvider>
        <FilteredArticles />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<NewPost />} />
            <Route path="/list/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </div>
      </DataProvider>

      <Footer />
    </div>
  );
}

export default App;
