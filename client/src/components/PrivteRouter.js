import React from 'react'
import Profile from './Profile'
import { Navigate } from 'react-router-dom'

export default function PrivteRouter() {
    const token=localStorage.getItem("token")
  return (
    <div>{token?<Profile />: <Navigate to="/" />}</div>
  )
}

