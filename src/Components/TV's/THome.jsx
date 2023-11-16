import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function THome() {
    const[data,setData] = useState([])
    const navigate = useNavigate();
    useEffect( ()=>{
        axios.get("http://localhost:3004/tv's")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
    },[] )

    const handleDelete = (id)=>{
        const confirm = window.confirm("would you like to delete.?")
        if(confirm){
            axios.delete("http://localhost:3004/tv's/"+id)
            .then((res)=>{
                navigate('/')
            }).catch((err)=>console.log(err))
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
           <h1>List of TV's</h1>
           <div className='w-75 rounded bg-white border shadow p-4'>
           <div className='d-flex  justify-content-end'>
            <Link to ="/create" className='btn btn-success'>Add ++</Link>
           </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Company Name</th>
                        <th>Details</th>
                        <th>Height</th>
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
                            <td>{d.height}</td>
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

export default THome
