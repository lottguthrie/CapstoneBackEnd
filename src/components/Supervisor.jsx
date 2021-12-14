import React, { Fragment, useEffect, useState, Component } from 'react';
import axios from 'axios';
import DailyReport from './DailyReport';




class Supervisor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        officersearch: "",
        search: "",
        search: "",
      };
    }            
  
      handleSubmit = (event) => {
          event.preventDefault();
          this.props.officerSearch(this.state.search);
        };
  
      handleSubmit = (event) => {
          event.preventDefault();
          this.props.supervisorSearch(this.state.search);
        };
  
      handleSubmit = (event) => {
          event.preventDefault();
          this.props.dailyReportSearch(this.state.search);
        };}

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

    const SupervisorReportView = async(props) => {
        const [ supervisorReport, setSupervisorReport] = useState([])
    
        async function addSupervisorReport(supervisor_reportId){
            let token = localStorage.getItem('token')
         
            let newSupervisorReport={
                Supervisor_reportId: parseInt(supervisor_reportId),
                SupervisorId: "",
                supervisor_reportId: "",
                quantity: 1
            }
            let res = await axios.post('https://localhost:44394/api/SupervisorReport', newSupervisorReport, { headers: {Authorization: 'Bearer ' + token}})
            return res.data
          }
        const getSupervisorReport = async () => {
    
            try {
                let res = await axios.get('https://localhost:44394/api/SupervisorReport');
                setSupervisorReport(res.data)
                console.log("All supervisorreport response: ",res.data)
                
            } catch (err) {
                console.log("An API error occured with supervisorreport: ", err)
                console.log(supervisorReport)
            }
        }
    


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
                getDailyReport(DailyReportView)
                getSupervisors(SupervisorView)
                getSupervisorReport(SupervisorReportView)
            },[])


    return(
        <Fragment>
         <div className="Supervisor">
            <h1 className='SupervisorMargin'>Supervisor Homepage</h1>
            {supervisors.map((supervisor)=> (
                <div className='supervisor'>
                    <h2>Supervisor{supervisor.last_name}</h2>
                    <h3>{supervisor.first_name}</h3>
                    <h3>{supervisor.middle_name}</h3>
                    <div>
                        <h3>{supervisor.badge_number}</h3>
                        <h3>{supervisor.supervisor_id}</h3>
                        <h3>{supervisor.officer_id}</h3>
                    </div>               
                <h1 className='officerSearch'>Search Officers</h1>
                <div class="search-container">
                    <form>
                      <input type="text" placeholder="Search for officer.." name="officerSearch" />
                      <button type="submit">
                        <i class="fa fa-searchengin"></i>
                      </button>
                      <h3>{supervisor.OfficerView}</h3>
                    </form>
                </div>
                <h1 className='supervisorReportSearch'>Search Supervisor Reports</h1>
                <div class="search-container">
                    <form>
                      <input type="text" placeholder="Search for supervisor report.." name="supervisorReportSearch" />
                      <button type="submit">
                        <i class="fa fa-searchengin"></i>
                      </button>
                      <h3>{supervisor.SupervisorReportView}</h3>
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
                    <button onClick={()=>addSupervisor(supervisor.supervisor_id)}>Add Supervisor</button>
                    <button onClick={()=>addSupervisorReport(supervisor.supervisor_Id)}>Add Supervisor Report</button>
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
}

export default Supervisor; 
