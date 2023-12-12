import "./App.css";
// import CurrencyConvertor from './component/CurrencyConvertor';
// import SideNav from "./component/SideNav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
// import AboutPage from "./pages/AboutPage";
import PortFolioPage from "./pages/PortFolioPage";
import ToDoList from "./component/ToDoList";
import ProjectHome from "./component/ProjectHome";
import StopWatch from "./component/StopWatch";
import MultiForm from "./component/gymForm/MultiForm";
import CarouselComp from "./component/Carousel/Carousel";
import User from "./component/users/User";
import AddUsers from "./component/users/AddUsers";
import Currancyconvertor from "./component/CurrancyConvertor/Currancyconvertor";
import EmployeeMangement from "./component/Employee mangement/EmployeeMangement";
import Events from "./component/Event/Events";
import Category from "./component/Category/Category";
import AddCategory from "./component/Category/AddCategory";
import ContactPage from "./pages/ContactPage";
import AddEvents from "./component/Event/AddEvents";
import EditEvents from "./component/Event/EditEvents";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}>
            <Route path="/" exact element={<h1>This is Home Page</h1>}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/portfolio" element={<PortFolioPage />}></Route>
            <Route path="/project" element={<ProjectPage />}>
              <Route path="/project/" element={<ProjectHome />}></Route>
              <Route path="/project/todolist" element={<ToDoList />}></Route>
              <Route path="/project/stopwatch" element={<StopWatch />}></Route>
              <Route path="/project/gymform" element={<MultiForm />}></Route>
              <Route
                path="/project/carousel"
                element={<CarouselComp />}
              ></Route>
              <Route
                path="/project/currancy"
                element={<Currancyconvertor />}
              ></Route>
              <Route
                path="/project/employee-management"
                element={<EmployeeMangement />}
              ></Route>
            </Route>
            <Route path="/users" element={<User />}>
              <Route path="/users/addusers" element={<AddUsers />}></Route>
            </Route>
            <Route path="/events" element={<Events />}>
              {/* <Route path="/events/addevent" element={<AddEvents/>}></Route> */}
            </Route>
            <Route path="/events/addevent" element={<AddEvents />}></Route>
            <Route path="/events/edit/:eventId" element={<EditEvents/>} />

            <Route path="/category" element={<Category />}>
              <Route path="/category/addcategory" element={<AddCategory />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
