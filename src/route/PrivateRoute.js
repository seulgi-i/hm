import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ProductDetail from '../page/ProductDetail'
const PrivateRoute = ({ authenticate }) => {
  const auth = useSelector(state => state.auth.authenticate)
  return auth == true ? <ProductDetail /> : <Navigate to="/login" />;
}

export default PrivateRoute
