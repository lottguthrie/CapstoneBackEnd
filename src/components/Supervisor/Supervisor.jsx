import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import './Supervisor.css';
import { withRouter } from "react-router-dom";
import dailyreport from '../Officer/DailyReport';


const SupervisorView = (props) => {
    const [ supervisors, setSupervisor] = useState([])

    async function addSupervisor(supervisorId){
        let token = localStorage.getItem('token')
     
        let newSupervisor={
            SupervisorId: parseInt(supervisorId),
            officerId: "",
            quantity: 1
        }
        let res = await axios.post('https://localhost:44394/api/Supervisor', newSupervisor, { headers: {Authorization: 'Bearer ' + token}})
        return res.data
      }
    const getSupervisors = async () => {

        try {
            let res = await axios.get('https://localhost:44394/api/Supervisor');
            setSupervisor(res.data)
            console.log("All supervisors response: ",res.data)
            
        } catch (err) {
            console.log("An API error occured with supervisors: ", err)
            console.log(supervisors)
        }
    }

    useEffect(() => {
        getSupervisors()
    },[])

    className= ReportCreatorView = (props) => {
        const [ reportcreator, setReportCreator] = useState([])
    
        async function addReportCreator(supervisorId){
            let token = localStorage.getItem('token')
         
            let newReportCreator={
                SupervisorId: parseInt(supervisorId),
                officerId: "",
                reportId: "",
                quantity: 1
            }
            let res = await axios.post('https://localhost:44394/api/ReportCreator', newReportCreator, { headers: {Authorization: 'Bearer ' + token}})
            return res.data
          }
        const getReportCreator = async () => {
    
            try {
                let res = await axios.get('https://localhost:44394/api/ReportCreator');
                setReportCreator(res.data)
                console.log("All reportcreator response: ",res.data)
                
            } catch (err) {
                console.log("An API error occured with reportcreator: ", err)
                console.log(reportcreator)
            }
        }
    
        useEffect(() => {
            getReportCreator()
        },[])

        className= DailyReportView = (props) => {
            const [ dailyreport, setDailyReport] = useState([])
        
            async function addDailyReport(officerId){
                let token = localStorage.getItem('token')
             
                let newDailyReport={
                    OfficerId: parseInt(officerId),
                    reportId: "",
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
                getDailyReport()
            },[])

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.officerSearch(this.state.search);
      };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.reportCreatorSearch(this.state.search);
      };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dailyReportSearch(this.state.search);
      };
    return(
        <Fragment>
         <div className="Supervisor">
            <h1 className='SupervisorMargin'>Supervisor Homepage</h1>
            {supervisors.map((supervisor)=> (
                <div className='supervisor'>
                    <h2>Supervisor{supervisor.lastName}</h2>
                    <h3>{supervisor.firstName}</h3>
                    <h3>{supervisor.middleName}</h3>
                    <div>
                        <h3>{supervisor.badgeNumber}</h3>
                        <h3>{supervisor.supervisorId}</h3>
                        <h3>{supervisor.officerId}</h3>
                    </div>               
                <h1 className='officerSearch'>Search Officers</h1>
                <div class="search-container">
                    <form>
                      <input type="text" placeholder="Search for officerer.." name="officerSearch" />
                      <button type="submit">
                        <i class="fa fa-searchengin"></i>
                      </button>
                    </form>
                </div>
                <h1 className='reportCreatorSearch'>Search Supervisor Reports</h1>
                <div class="search-container">
                    <form>
                      <input type="text" placeholder="Search for supervisor report.." name="reportCreatorSearch" />
                      <button type="submit">
                        <i class="fa fa-searchengin"></i>
                      </button>
                      <h3>{supervisor.ReportCreatorView}</h3>
                    </form>
                </div>
                <h1 className='dailyReportSearch'>Search Daily Reports</h1>
                <div class="search-container">
                    <form>
                      <input type="text" placeholder="Search for daily report.." name="dailyReportSearch" />
                      <button type="submit">
                        <i class="fa fa-searchengin"></i>
                      </button>
                      <h3>{supervisor.DailyReportView}</h3>
                    </form>
                </div>  
                    <button onClick={()=>addSupervisor(supervisor.SupervisorId)}>Add Supervisor</button>
                    <button onClick={()=>addReportCreator(supervisor.SupervisorId)}>Add Supervisor Report</button>
                    <button onClick={()=>addDailyReport(supervisor.SupervisorId)}>Add Supervisor Daily Report</button>
                </div>
                    /*put in shift information if possible*/
                )
                <div>
                    <li>
                        <Link to="/Dailyreport">
                            <i class="fas fa-import"></i> Daily Report
                        </Link>
                        <Link to="/Reportcreator">
                            <i class="fas fa-print"></i> Report Creator
                        </Link>
                        <Link to="/Survey">
                            <i class="fas fa-rocketchat"></i> Employee Survey
                        </Link>
                    </li>  
                    )
                 }
        
                </div>
        
                </Fragment>
            )
        }
    }
}

export default withRouter(SupervisorView); 
