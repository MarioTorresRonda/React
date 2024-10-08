import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import RootLayout from './pages/Root';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  { 
    path: '/',  
    element: <RootLayout />,
    errorElement : <Error />,
    children: [
      { index: true,  element: <HomePage /> },
      { path: 'products', element: <ProductPage /> },
      { path: 'products/:productId', element: <ProductDetail /> },
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
