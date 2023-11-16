import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Cupdate() {
    const { id } =useParams()
   const[values, setValues]= useState(
       {
           pprice:'',
           cname:'',
           specifications:''
       })
       const navigate = useNavigate();

   useEffect( ()=>{
       axios.get('http://localhost:3004/cameras/'+ id )
       .then((res)=>{
           setValues(res.data);
       })
       .catch((err)=>console.log(err));
   },[] )

   const handleUpdate =(event)=>{
       event.preventDefault();
       axios.put('http://localhost:3004/laptops/' +id, values)
               .then((res)=>{
                   console.log(res);
                   window.alert("Updated successfully")
                   navigate('/');
               })
               .catch((err)=>console.log(err));
           }

   return (
       <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 w-100'>
           <div className='w-50 border bg-white shadow px-5 pb-5 rounded'>
               <h1>Update camera</h1>
               <form onSubmit={handleUpdate}>
                   <div className='mb-2'>
                       <label htmlFor='price'>Price: </label>
                       <input type="number"  name="price" className='form-control' placeholder='Enter Price'
                       value={values.pprice} onChange={(e)=>setValues({...values, pprice: e.target.value})}/>
                   </div>
                   <div className='mb-2'>
                       <label htmlFor='cname'>Company Name: </label>
                       <input type="text"  name="cname" className='form-control' placeholder='Enter company Name'
                        value={values.cname} onChange={(e)=>setValues({...values, cname: e.target.value})}/>
                   </div>
                   <div className='mb-2'>
                       <label htmlFor='spce'>Specifications: </label>
                       <input type="text"  name="spce" className='form-control' placeholder='Enter Specifications'
                       value={values.specifications} onChange={(e)=>setValues({...values, specifications: e.target.value})}/>
                   </div>
                   <button className='btn btn-success'>Update</button>
                   <Link to ="/" className='btn btn-primary ms-3'>Back</Link>
               </form>
           </div>
       </div>
   )
}

export default Cupdate
