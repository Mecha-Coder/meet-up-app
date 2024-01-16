import { Routes, Route } from "react-router-dom"
import All from "./All"
import Favourite from "./Favourite"
import New from "./New"
import Error from "./Error"
import Header from "../layout/Header"
import "../style/Main.css"
import List from "../design/List"

function App() {
  return (
    <>
      <Header />
      <List>
      <Routes>
        <Route path="/" element={<All/>} />
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/new" element={<New/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </List>
    </>
  );
}

export default App;
