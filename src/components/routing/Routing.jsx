import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Boy from "../boy/Boy";
import HomePage from "../homePage/HomePage";
import KindergartenTeacher from "../KindergartenTeacher/KindergartenTeacher";
import Parent from "../parent/Parent";


const Routing = () => {

    return (
        <BrowserRouter>
       
            <Link to="/"> home page</Link>
            <Link to="/child"> child page</Link>
            <Link to="/teacher"> teacher page</Link>
            <Link to="/parent"> parent page</Link>

            <Routes>
             <Route exact path ="/" elemen = {<HomePage/>}/>
             <Route  path ="/child" elemen = {<Boy/>}/>
             <Route  path ="/teacher" elemen = {<KindergartenTeacher/>}/>
             <Route  path ="/parent" elemen = {<Parent/>}/>




            </Routes>
           
        </BrowserRouter>

    )
};

export default Routing;