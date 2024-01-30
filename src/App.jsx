import { useEffect } from 'react';
import Login from './components/Auth/Login';
import HomePage from './components/HomePages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './redux/slice/authSlice';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = window.location.hash;
    const access_token = token.split("=")[1];
    dispatch(setToken(access_token));
  });
  const {access_token} = useSelector(state => state.auth);
  
  return (
    <>
        {access_token ? <HomePage /> : <Login /> }
    </>
  )
}
export default App