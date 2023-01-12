import React from "react"
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Container } from 'react-bootstrap'
import ProductScreen from "./screens/ProductScreen"
import HomeScreen from "./screens/HomeScreen"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
