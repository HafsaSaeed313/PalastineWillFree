import Home from './assets/Home'
import Contact from './assets/Contact'
import Compaigns from './assets/Compaigns'
import About from './assets/About' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './assets/Components/Header'
import Footer from './assets/Components/Footer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './assets/Components/Global'

const App = () => {
  
  const theme ={
      colors: {
        primary: '#3498db', 
        secondary: '#2ecc71', 
        accent: '#e74c3c', 
        background: '#ecf0f1', 
        text: '#34495e', 
        link: '#2980b9', 
        fontSize: '2em',
        fontWeight: 'bold',
        color: '#2c3e50',    
        default: '1px solid #bdc3c7', 
        radius: '4px',
        backgroundColor: '#3498db', 
        color: '#ffffff', 
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
        },
     
    media: { mobile: "768px", tab: "998px"},
    
}

  return (
    <div>
      
      <ThemeProvider theme={theme}>
        <GlobalStyle/>

     <BrowserRouter>
  
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/compaigns' element={<Compaigns />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
     </BrowserRouter>
     </ThemeProvider>
    </div>
  )
}

export default App