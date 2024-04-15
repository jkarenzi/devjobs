import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Detail from './Detail';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>}/>
      </Route>
    )
  )
  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
