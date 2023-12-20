"use client"
import CategoryList from './components/Home/CategoryList'
import AnioSelect from './components/Home/RadioSelect'
import SeleccionarAnio from './components/Home/SeleccionarAnio'
import GoogleMapView from './components/Home/GoogleMapView'
import { useEffect, useState, useContext } from 'react'
import GlobalApi from '@/Shared/GlobalApi'
import { useRouter } from 'next/router'
import { UserLocationContext } from '@/context/UserLocationContext'

export default function Home() {

  const [category, setCategory]=useState();
  const [radius, setRadius]=useState(2500);
  const [obrasList, setObrasList]=useState([]);
  const {userLocation,setUserLocation}=useContext(UserLocationContext)

  useEffect(()=>{
    getGooglePlace();
  },[category, radius])


 
  const getGooglePlace=()=>{
    GlobalApi.getGooglePlace(category, radius, userLocation.lat, userLocation.lng).then(resp=> {
      console.log(resp.data.product.results)
      setObrasList(resp.data.product.results)
    })
  }
  
  return (
    <div className='grid 
    grid-cols-1
    md:grid-cols-4 h-screen'>
      <div className='p-3'>
        <CategoryList onCategoryChange={(value)=>setCategory(value)}/>
        <AnioSelect onRadiusChange={(value)=>setRadius(value)}/> 
        <SeleccionarAnio/>
      </div> 
      <div className='col-span-3'>
        <GoogleMapView/>
        <obrasList obrasList={obrasList}/>
        </div> 

    </div>
  )
}
