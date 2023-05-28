import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout/Layout';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Rsvp from './component/Rsvp/Rsvp';
import RsvpDate from './component/RsvpDate/RsvpDate';
import Invites from './component/Invites/Invites';
import Users from './component/Users/Users';
import NotFound from './component/NotFound/NotFound';


function App() {
  let Routing = createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'register', element:<Register />},
      {path:'login', element:<Login />},
      {path:'invites', element:<Invites />},
      {path:'users', element:<Users />},
      {path:'rsvp', element:<Rsvp />},
      {path:'rsvpdate', element:<RsvpDate />},
      {path:'*', element:<NotFound />},


 
      
    ]},

  ])
  return <>
        <RouterProvider router={Routing} />
  </>
}

export default App;
