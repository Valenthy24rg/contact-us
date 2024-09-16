import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowForm from "./Components/ShowForm/ShowForm";
import CreateForm from "./Components/CreateForm/CreateForm";
import EditForm from "./Components/EditForm/EditForm";


const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={ <ShowForm/> } />
          <Route path="/contact-us/create" element={ <CreateForm/> } />
          <Route path="/contact-us/edit/:id" element={ <EditForm/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
