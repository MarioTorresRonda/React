import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import EventsPage,  { loader as EventsLoader } from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Error from './pages/Error';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  { 
    path: '/',  
    element: <RootLayout/>,
    errorElement : <Error />,
    children: [
      { index: true,  element: <HomePage/> },
      { 
        path: 'events', 
        element: <EventsRoot />, 
        children: [
          { index: true,  element: <EventsPage/>, loader:  EventsLoader },
          { path: ':eventId',  element: <EventDetailPage/> },
          { path: 'new',  element: <NewEventPage/> },
          { path: ':eventId/edit',  element: <EditEventPage /> }
      ] },
    ]
 }
])

function App() {
  return ( <RouterProvider router={router} /> )
}

export default App;
