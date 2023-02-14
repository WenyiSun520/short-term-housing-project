import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const RentList = ()=>{
    const rentinfo = useSelector((state)=>state.rentsInfo);
    const renderRentInfo = rentinfo.map((item)=>(
        <tr className='rent-info' key={item.id}>
            <td><Link to={`/rentInfo/${item.id}`}>{item.title}</Link></td>
            <td>{item.creater}</td>
            <td>{item.create_date}</td>
        </tr>
    ))

    return(
        <section className='rent-list'>
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Creater</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>               
                {renderRentInfo}
                </tbody>
            </table>
        </section>
    )
}

export default RentList;

