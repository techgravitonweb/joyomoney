import React, { useEffect, useState } from 'react';
import Sidebar from '../UserDashbord/Sidebar';
import { Link, useParams } from 'react-router-dom';

const FormDetailTable = () => {
    const [data, setData] = useState();
    const [heading,setHeading]=useState();
    const param = useParams();
    const { endpoint } = param;
    
    console.log(endpoint);
    useEffect(() => {
        getData();

        if(endpoint==="getAllProfessionalForms")
        {
            setHeading("Professional Forms")
        }
        if(endpoint==="getAllGoldForms")
        {
            setHeading("Gold Loan Form")
        }
        if(endpoint==="getAllPersonalForms")
        {
            setHeading("Personal Form")
        }
        if(endpoint==="getAllSchoolForms"){
            setHeading("School Form")
        }
        if(endpoint==="getAllCarLoanForms"){
            setHeading("Car Form")
        }
        if(endpoint==="getAllHomeLoanForms"){
            setHeading("Home Form")
        }
        if(endpoint==="getAllBusinessLoanForms"){
            setHeading("Business Form")
        }
    }, [endpoint])

    
    const getData = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/v1/${endpoint}`,
                // "http://localhost:8000/api/v1/getAllProfessionalForms",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setData(data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <div>
            <Sidebar>
                <div className="">
                    {/* <h2 className='mx-4'>Professional loan forms </h2> */}
                    <h2 className='mx-4'>{heading}</h2>
                    <table className="table table-striped mt-5">
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                <th>Form Id</th>
                                <th>User Name</th>
                                <th>Timestamp</th>
                                <th>Full Details</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            {
                                data && data.map((item, index) => (
                                    <tr key={item._id} >
                                        <td>{index + 1}</td>
                                        <td>{item._id.slice(-6)}</td>
                                        {/* <td>{item.userdetails.name}</td> */}
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <Link to={`/formModel/${endpoint}/${item._id}`}>
                                                <button className='btn btn-success'>Open</button>
                                            </Link>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                
            </Sidebar>


        </div>
    );
}


export default FormDetailTable;
