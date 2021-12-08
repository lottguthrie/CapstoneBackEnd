import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import DailyReport from './DailyReport'


const OfficerView = (props) => {
    const [ DailyReport, setDailyReport] = useState([])

    async function addToDailyReport(officer_id){
        let token = localStorage.getItem('token')
     
        let newDailyReport={
            officer_id: parseInt(officer_id),
            report_id: "",
            quantity: 1
        }
        let res = await axios.post('https://localhost:44394/api/DailyReport', newDailyReport, { headers: {Authorization: 'Bearer ' + token}})
        return res.data
      }
    const getDailyReport = async () => {

        try {
            let res = await axios.get('https://localhost:44394/api/DailyReport');
            setDailyReport(res.data)
            console.log("All officers response: ",res.data)
            
        } catch (err) {
            console.log("An API error occured with dailyreports: ", err)
            console.log(DailyReport)
        }
    }

    useEffect(() => {
        getDailyReport()
    },[])

    return(
        <Fragment>
         <div className="DailyReports">
            <h1 className='dailyreportMargin'>Browse Dailyreports</h1>
            {DailyReport.map((DailyReport)=> (
                <div className='dailyreport'>
                   <h2>Officer{officer_id.last_name}</h2>
                    <h3>{officer_id.first_name}</h3>
                    <h3>{officer_id.middle_name}</h3>
                    <div>
                        <h3>{officer_id.badge_number}</h3>
                        <h3>{officer_id.officer_id}</h3>
                    </div>    
                    <div className='DailyReportName'><h3>$ {DailyReport.OfficerView}</h3></div>
                    <button onClick={()=>addToDailyReport(DailyReport.report_id)}>Submit To Supervisor</button>
                    <button onClick={()=>addToDailyReport(DailyReport.officer_id)}>Add Daily Report</button>

                </div>
                )
                

                
                )
            }
          </div>
        </Fragment>
    )
}

export default withRouter(OfficerView); 