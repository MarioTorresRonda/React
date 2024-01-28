import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  { 
    path: '/',  
    element: <RootLayout />,
    children: [
      { path: '/',  element: <HomePage /> },
      { path: '/products', element: <ProductPage /> }
    ]
 }
])

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage /> } />
//     <Route path='/products' element={<ProductPage /> } />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />
}

export default App;
