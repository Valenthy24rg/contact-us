import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowForm from "./Components/ShowForm/ShowForm";
import CreateForm from "./Components/CreateForm/CreateForm";
import EditForm from "./Components/EditForm/EditForm";


const App = () => {
  return (
    <div>
      <BrowserRouter basename="https://valenthy24rg.github.io/contact-us-fullstack/">
        <Routes>
          <Route path="/" element={ <ShowForm/> } />
          <Route path="/create" element={ <CreateForm/> } />
          <Route path="/edit/:id" element={ <EditForm/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
