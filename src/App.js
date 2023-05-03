import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

import { 
  PageNavi,
  PageHome,
  PageInfo, 
  Pagesummary,
  PageNotice,
  PageNoticeDetail,
 } from './page/Home.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <PageNavi />
    </div>

    <Routes>
    {["/LOBOTOMY","/LOBOTOMY/HOME"].map((path)=>(
      <Route key={path} path={path} element=<PageHome /> />
    ))} 
    <Route path='/LOBOTOMY/INFO' element=<PageInfo /> />
    <Route path='/LOBOTOMY/SUMMARY' element=<Pagesummary /> />
    <Route path='/LOBOTOMY/NOTICE' element=<PageNotice /> />
    <Route path='/LOBOTOMY/NOTICE/:number' element=<PageNoticeDetail /> />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
