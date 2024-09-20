import { Box } from "@chakra-ui/react"
import {Route, Routes} from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"

function App() {
 

  return (
    <>
    <Box minH={"100vh"} >
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
      
    </>
  )
}

export default App
