import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserHome from './pages/user/UserHome'
import AdminHome from './pages/admin/AdminHome'
import Layout from './pages/layout/Layout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
              <Route index element={<Layout>
                <UserHome/>
              </Layout>}/>
            </Route>
          <Route path='/admin'>
            <Route index  element={<AdminHome/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App