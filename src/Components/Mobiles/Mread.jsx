import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Mread() {
    const[data,setData] = useState([])
    const { id } =useParams()

    useEffect( ()=>{
        axios.get('http://localhost:3004/mobiles/'+ id )
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
    },[] )

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 w-100'>
            <div className='w-50 border bg-white shadow px-5 pb-5 rounded'>
                <h3>Details of Mobiles</h3>
                <div className='mb-2'>
                   Name :  <strong> {data.pprice}</strong>
                </div>
                <div className='mb-2'>
                   Company Name:  <strong>{data.cname}</strong>
                </div>
                <div className='mb-2'>
                    Specifications: <strong> {data.specifications}</strong>
                </div>
                <Link to ={`/update/${id}`} className='btn btn-success'>Edit</Link>
                <Link to ="/" className='btn btn-primary ms-3'>Back</Link>
            </div>
        </div>
    )
}

export default Mread
