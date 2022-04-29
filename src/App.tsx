
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//@ts-ignore
import UsersContainer from "./components/UsersPage/UsersContainer.tsx"
//@ts-ignore
import PostsContainer from "./components/PostsPage/PostsContainer.tsx"
//@ts-ignore
import FAQ from "./components/FAQPage/FAQ.tsx"
//@ts-ignore
import Navbar from "./components/Navbar/Navbar.tsx"

function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/*' element={<UsersContainer />} />
            <Route path='/posts' element={<PostsContainer />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
