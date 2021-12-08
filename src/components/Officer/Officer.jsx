import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import './Officer.scss';
import { withRouter } from "react-router-dom";
import DailyReport from './DailyReport'


const OfficerView = (props) => {
    const [ dailyreport, setDailyReport] = useState([])

    async function addToDailyReport(officerId){
        let token = localStorage.getItem('token')
     
        let newDailyReport={
            officerId: parseInt(officerId),
            reportId: "",
            quantity: 1
        }
        let res = await axios.post('https://localhost:44394/api/DailyReport', newDailyReport, { headers: {Authorization: 'Bearer ' + token}})
        return res.data
      }
    const getdailyreport = async () => {

        try {
            let res = await axios.get('https://localhost:44394/api/DailyReport');
            setDailyReport(res.data)
            console.log("All officers response: ",res.data)
            
        } catch (err) {
            console.log("An API error occured with dailyreports: ", err)
            console.log(dailyreport)
        }
    }

    useEffect(() => {
        getdailyreport()
    },[])

    return(
        <Fragment>
         <div className="DailyReports">
            <h1 className='dailyreportMargin'>Browse Dailyreports</h1>
            {dailyreport.map((dailyreport)=> (
                <div className='dailyreport'>
                    <h2>{dailyreport.title}</h2>
                    <h3>{dailyreport.title}</h3>
                    <h3>{dailyreport.title}</h3>
                    <div>
                        <h3>{dailyreport.title}</h3>
                        <h3>{dailyreport.title}</h3>
                    </div>    
                    <div className='dailyreportname'><h3>$ {dailyreport.title}</h3></div>
                    <button onClick={()=>addToDailyReport(dailyreport.DailyreportId)}>Submit To Supervisor</button>
                    <button onClick={()=>addToDailyReport(dailyreport.OfficerId)}>Add Daily Report</button>

                </div>
                )
                

                
                )
            }
          </div>
        </Fragment>
    )
}

export default withRouter(OfficerView); 