import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../services/TimeCrudServices";
import WorksTable from "../worksTable/WorksTable";
const Works = ()=>{
    const [works, setWorks] = useState([]);

    useEffect(()=>{
        service.getAllWorks(works=>{
            setWorks(works)
        })
    },[])

    console.log(works)
    return(
        <div className="container">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page"to="/add-work">Pridėti atliktą darbą</Link>
                </li>
            </ul>
            <h2>Works</h2>
            <WorksTable data={works} />
        </div>
    )
}

export default Works