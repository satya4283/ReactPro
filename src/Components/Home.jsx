import { keyboard } from '@testing-library/user-event/dist/keyboard';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const[data,setData] = useState([])
    const navigate = useNavigate();
    useEffect( ()=>{
        axios.get('http://localhost:3004/laptops')
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
    },[] )

    const handleDelete = (id)=>{
        const confirm = window.confirm("would you like to delete.?")
        if(confirm){
            axios.delete("http://localhost:3004/laptops/"+id)
            .then((res)=>{
                navigate('/')
            }).catch((err)=>console.log(err))
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
           <h1>List of Laptops</h1>
           <div className='w-75 rounded bg-white border shadow p-4'>
           <div className='d-flex  justify-content-end'>
            <Link to ="/create" className='btn btn-success'>Add ++</Link>
           </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i)=> (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.pprice}</td>
                            <td>{d.cname}</td>
                            <td>{d.specifications}</td>
                            <td>
                            
                            <Link to ={`/read/${d.id}`} className='btn tbn-sm btn-info'> Read</Link>  &nbsp;
                             <Link to ={`/update/${d.id}`} className='btn tbn-sm btn-primary'>Edit</Link>  &nbsp;
                             <buttton onClick={()=>handleDelete(d.id)} className='btn tbn-sm btn-danger'> Delete</buttton>
                            </td>

                        </tr>

                        ))
                    }
                </tbody>
            </table>
           </div>
        </div>
    )
    

}

export default Home
