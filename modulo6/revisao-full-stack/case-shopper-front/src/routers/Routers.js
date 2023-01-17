import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EndPage from '../pages/EndPage/index.js'
import HomePage from '../pages/HomePage/index.js'

const Routers = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route index element = { <HomePage/> } />
            <Route path ="/endpage" element= { <EndPage/> }/>
        </Routes>
    </BrowserRouter>
    )
}

export default Routers