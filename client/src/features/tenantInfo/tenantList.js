import React from 'react'
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import TimeStamp from '../../util/timestamp';

const TenantList = ()=>{
    const tenantsinfo = useSelector((state)=>state.tenantsInfo);
    const renderTenantsInfo = tenantsinfo.map((item) => (
      <tr className="tenant-info" key={item.id}>
        <td>
          <Link to={`/tenants/${item.id}`}>{item.title}</Link>
        </td>
        <td>{item.creater}</td>
        <td>
          <TimeStamp date={item.create_date} />
        </td>
      </tr>
    ));

    return (
      <section className="rent-list">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Creater</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{renderTenantsInfo}</tbody>
        </table>
      </section>
    );
}

export default TenantList;

