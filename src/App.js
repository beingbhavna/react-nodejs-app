import './App.css';
import Nav from './components/navbar'
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/signup';
import PrivateComponent from './components/private-component'
import Login from './components/login'
import AddProduct from './components/add-product';
import ProductList from './components/product-list';
import UpdateProduct from './components/update-product';
function App() {
  return (
    <div className="App">
      {/* <h1>E-Dashboard</h1> */}
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="" element={<ProductList />} ></Route>
            <Route path="/add" element={<AddProduct />} ></Route>
            <Route path="/update/:id" element={<UpdateProduct/>}></Route>
            <Route path="/logout" element={<h1>Logout</h1>} ></Route>
            <Route path="/profile" element={<h1>Profile</h1>} ></Route>

          </Route>
          <Route path="/signup" element={<SignUp />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
        </Routes>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
