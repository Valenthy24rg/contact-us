import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowForm from "./Components/ShowForm/ShowForm";
import CreateForm from "./Components/CreateForm/CreateForm";
import EditForm from "./Components/EditForm/EditForm";


const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/contact-us" element={ <ShowForm/> } />
          <Route path="/create" element={ <CreateForm/> } />
          <Route path="/edit/:id" element={ <EditForm/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
