import React from 'react'
import CreateAccount from '../components/CreateAccount/CreateAccount'
import CreateStep1 from '../components/CreateAccount/CreateStep1'
import CreateStep2 from '../components/CreateAccount/CreateStep2'
import { Route, Routes } from 'react-router-dom'

export const Router=()=>{
  return (
<Routes>
<Route path="/create-account" element={<CreateAccount/>}/>
<Route path="/create-account/step1" element={<CreateStep1/>}/>
<Route path="/create-account/step1/step2" element={<CreateStep2/>}/>
</Routes>
  )
}

export default Router
