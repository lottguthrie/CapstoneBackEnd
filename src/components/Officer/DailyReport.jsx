import React, {useState} from 'react';
import axios from 'axios';
import './DailyReport.css';
import { withRouter } from "react-router-dom";

function DailyReport() {
    async function handleSubmitClick(event){
        event.preventDefault();
        console.log("report generated")
        let _callsForService= document.getElementById("CallsForService").value
        let _caseNumbers = document.getElementById("CaseNumbers").value
        let _hoursWorked = document.getElementById("HoursWorked").value
        let _reports = document.getElementById("Reports").value
        let _supplements = document.getElementById("Supplements").value
        let _assignedVehicle = document.getElementById("AssignedVehicle").value
        let _milesDriven = document.getElementById("MilesDriven").value
        let _assignedArea = document.getElementById("AssignedArea").value
        let _citationsIssued = document.getElementById("CitationsIssued").value
        let _warningsIssued = document.getElementById("WarningsIssued").value
        let _trafficStops = document.getElementById("TrafficStops").value
        let _citizenContacts = document.getElementById("CitizenContacts").value
        let _juvenileContacts = document.getElementById("JuvenileContacts").value

    
        let payload =  { 
            "CallsForService": parseInt(_callsForService),
            "CaseNumbers": parseInt(_caseNumbersPulled),
            "HoursWorked": parseInt(_hoursWorked),
            "Reports": parseInt(_reports),
            "Supplements": parseInt(_supplements),
            "AssignedVehicle": _assignedVehicle,
            "MilesDriven": parseInt(_milesDriven),
            "AssignedArea": _assignedArea,
            "CitationsIssued": parseInt(_citationsIssued),
            "WarningsIssued": parseInt(_warningsIssued),
            "CitizenContacts": parseInt(_citizenContacts),
            "TrafficStops": parseInt(_trafficStops),
            "JuvenileContacts": parseInt(_juvenileContacts),
         };
        console.log(payload)
        let res = await axios.post('https://localhost:44394/api/Officer/DailyReport', payload);
        console.log(res)
        return res.data
        
        
    }
   
    return(
        <div className="reportCreator">
            <form>
                <input type="number" id="callsForService"  placeholder="Enter the total calls for service" />
                <input type="number" id="caseNumbersPulled"  placeholder ="Enter the total case numbers pulled" />
                <input type="number" id="hoursWorked"  placeholder ="Enter the total hours worked" />
                <input type="number" id="reports"  placeholder ="Enter the total number of reports taken" />
                <input type="number" id="supplements"  placeholder ="Enter the total number of supplements completed" />
                <input type="text" id="assignedVehicle"  placeholder ="Enter your assigned vehicle number" />
                <input type="number" id="milesDriven"  placeholder="Enter the total number of miles driven" />
                <input type="text" id="assignedArea"  placeholder ="Enter your assigned area" />
                <input type="number" id="citationsIssued"  placeholder ="Enter the total number of citations issued" />
                <input type="number" id="warningsIssued" placeholder="Enter the total number of warnings issed" />
                <input type="number" id="citizenContacts"  placeholder ="Enter the total number of citizen contacts" />
                <input type="number" id="juvenileContacts"  placeholder ="Enter the number of juvenile contacts made" />
                <button type="submit" onClick={handleSubmitClick}>Submit Report</button>


            </form>
        </div>
    )
}

export default withRouter(DailyReport);