import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {
    const[data,setData] = useState([])
    const { id } =useParams()

    useEffect( ()=>{
        axios.get('http://localhost:3004/laptops/'+ id )
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
    },[] )

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 w-100'>
            <div className='w-50 border bg-white shadow px-5 pb-5 rounded'>
                <h3>Details of laptop</h3>
                <div className='mb-2'>
                    <strong>Name:{data.pprice}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Company Name:{data.cname}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Specifications:{data.specifications}</strong>
                </div>
                <Link to ={`/update/${id}`} className='btn btn-success'>Edit</Link>
                <Link to ="/" className='btn btn-primary ms-3'>Back</Link>
            </div>
        </div>
    )
}

export default Read
