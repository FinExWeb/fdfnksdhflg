import {Route, Routes} from 'react-router-dom'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import AdminAdd from '../views/AdminAdd'
import FoodAdd from '../views/FoodAdd'
import ViewOrder from '../views/ViewOrder'
import Message from '../views/Message'

const Routelar = ()=>{
    return (
        <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Dashboard />} path='/dashboard'></Route>
            <Route element={<AdminAdd />} path='/admin-new'></Route>
            <Route element={<FoodAdd />} path='/add-food'></Route>
            <Route element={<ViewOrder />} path='/view-order'></Route>
            <Route element={<Message />} path='/message'></Route>
        </Routes>
    )
}

export default Routelar;