import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';

import DailyReport from './Officer'

const OfficerView = (props) => {
    const [ user, setUser] = useState([])

    async function addUser(officerId){
        let token = localStorage.getItem('token')
     
        let newUser={
            officerId: parseInt(officerId),
            report_id: "",
            quantity: 1
        }
        let res = await axios.post('https://localhost:44394/api/Officer', newUser, { headers: {Authorization: 'Bearer ' + token}})
        return res.data
      };
    
const getUser = async () => {

        try {
            let res = await axios.get('https://localhost:44394/api/Officer');
            setUser(res.data)
            console.log("All officer response: ",res.data)
            
        } catch (err) {
            console.log("An API error occured with officer: ", err)
            console.log(user)
        }
    };

    const DailyReportView = async(props) => {
        const [ dailyreport, setDailyReport] = useState([])
    
        async function addDailyReport(officer_Id){
            let token = localStorage.getItem('token')
         
            let newDailyReport={
                officer_id: parseInt(officer_Id),
                daily_report_id: "",
                quantity: 1
            }
            let res = await axios.post('https://localhost:44394/api/DailyReport', newDailyReport, { headers: {Authorization: 'Bearer ' + token}})
            return res.data
          }
        const getDailyReport = async () => {
    
            try {
                let res = await axios.get('https://localhost:44394/api/DailyReport');
                setDailyReport(res.data)
                console.log("All dailyreport response: ",res.data)
                
            } catch (err) {
                console.log("An API error occured with dailyreport: ", err)
                console.log(dailyreport)
            }
        }
    
        useEffect(() => {
            getUser(OfficerView)
            getDailyReport(DailyReportView)
        },[])


return(
    <Fragment>
     <div className="Officer">
        <h1 className='OfficerMargin'>Officer Homepage</h1>
        {user.map((user)=> (
            <div className='Officer'>
                <h2>Officer{user.last_name}</h2>
                <h3>{user.first_name}</h3>
                <h3>{user.middle_name}</h3>
                <div>
                    <h3>{user.badge_number}</h3>
                    <h3>{user.supervisor_id}</h3>
                </div>               
            <h1 className='dailyReportSearch'>Search Daily Reports</h1>
            <div class="search-container">
                <form>
                  <input type="text" placeholder="Search for daily report.." name="dailyReportSearch" />
                  <button type="submit">
                    <i class="fa fa-searchengin"></i>
                  </button>
                  <h3>{user.DailyReportView}</h3>
                </form> 
            </div>
            <button onClick={()=>addUser(user.officer_id)}>Add Officer</button>
            <button onClick={()=>addDailyReport(supervisor.supervisor_id)}>Add Supervisor Daily Report</button>
            </div>
            /*put in shift information if possible*/
        )
     

    )
         }

        </div>

        </Fragment>
    )
}
}


export default OfficerView; 