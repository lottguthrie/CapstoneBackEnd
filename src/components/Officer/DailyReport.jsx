import React, {useState} from 'react';
import axios from 'axios';

import { withRouter } from "react-router-dom";

function DailyReport() {
    async function handleSubmitClick(event){
        event.preventDefault();
        console.log("report generated")
        let _calls_for_service= document.getElementById("calls_for_service").value
        let _case_numbers = document.getElementById("case_numbers").value
        let _hours_worked = document.getElementById("hours_worked").value
        let _reports = document.getElementById("reports").value
        let _supplements = document.getElementById("supplements").value
        let _assigned_vehicle = document.getElementById("assigned_vehicle").value
        let _miles_driven = document.getElementById("miles_driven").value
        let _assigned_area = document.getElementById("assigned_area").value
        let _citations_issued = document.getElementById("citations_issued").value
        let _warnings_issued = document.getElementById("warnings_issued").value
        let _traffic_stops = document.getElementById("traffic_stops").value
        let _citizen_contacts = document.getElementById("citizen_contacts").value
        let _juvenile_contacts = document.getElementById("juvenile_contacts").value

    
        let payload =  { 
            "CallsForService": parseInt(_calls_for_service),
            "CaseNumbers": parseInt(_case_numbers),
            "HoursWorked": parseInt(_hours_worked),
            "Reports": parseInt(_reports),
            "Supplements": parseInt(_supplements),
            "assigned_vehicle": _assigned_vehicle,
            "miles_driven": parseInt(_miles_driven),
            "assigned_area": _assigned_area,
            "citations_issued": parseInt(_citations_issued),
            "warnings_issued": parseInt(_warnings_issued),
            "citizen_contacts": parseInt(_citizen_contacts),
            "traffic_stops": parseInt(_traffic_stops),
            "juvenile_contacts": parseInt(_juvenile_contacts),
         };
        console.log(payload)
        let res = await axios.post('https://localhost:44394/api/Officer/DailyReport', payload);
        console.log(res)
        return res.data
        
        
    }
   
    return(
        <div className="reportCreator">
            <form>
                <input type="number" id="calls_for_service"  placeholder="Enter the total calls for service" />
                <input type="number" id="case_numbers"  placeholder ="Enter the total case numbers pulled" />
                <input type="number" id="hours_worked"  placeholder ="Enter the total hours worked" />
                <input type="number" id="reports"  placeholder ="Enter the total number of reports taken" />
                <input type="number" id="supplements"  placeholder ="Enter the total number of supplements completed" />
                <input type="text" id="assigned_vehicle"  placeholder ="Enter your assigned vehicle number" />
                <input type="number" id="miles_driven"  placeholder="Enter the total number of miles driven" />
                <input type="text" id="assigned_area"  placeholder ="Enter your assigned area" />
                <input type="number" id="citations_issued"  placeholder ="Enter the total number of citations issued" />
                <input type="number" id="warnings_issued" placeholder="Enter the total number of warnings issed" />
                <input type="number" id="citizen_contacts"  placeholder ="Enter the total number of citizen contacts" />
                <input type="number" id="juvenile_contacts"  placeholder ="Enter the number of juvenile contacts made" />
                <button type="submit" onClick={handleSubmitClick}>Submit Report</button>


            </form>
        </div>
    )
}

export default withRouter(DailyReport);