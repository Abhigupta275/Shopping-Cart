import { Counter } from './features/counter/Counter';
import Home from './pages/Home';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/login",
    element: (<LoginPage />),
  },
  {
    path: "/signup",
    element: (<SignupPage />),
  },
  {
    path: "/cart",
    element: (<CartPage />),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
