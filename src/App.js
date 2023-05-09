import React ,{useState} from 'react';
import './index'
import { Dashboard } from './Dashboard'
import SlideBar from './SlideBar';
import { useNavigate } from 'react-router-dom';


const App = () => {
    let navigate = useNavigate()
    const ChangePage=()=>{
        console.log('work')
        navigate('/card')

    }

  return (
    <div className='d-flex'>
  <SlideBar />
  <Dashboard amount="40000" Annual="350000" pending="18" now="50"/>
  

  </div>

  )
}

export default App;



