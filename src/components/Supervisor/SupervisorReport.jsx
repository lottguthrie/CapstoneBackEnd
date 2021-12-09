import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

function SupervisorReport() {
    async function handleSubmitClick(event){
        event.preventDefault();
        console.log("report generated")
        let _total_calls_for_service= document.getElementById("total_calls_for_service").value
        let _total_case_numbers_pulled = document.getElementById("total_case_numbers_pulled").value
        let _total_case_numbers_completed = document.getElementById("total_case_numbers_completed").value
        let _total_reports = document.getElementById("total_reports").value
        let _total_supplements = document.getElementById("total_supplements").value
        let _total_vehicles_assigned = document.getElementById("total_vehicles_assigned").value
        let _total_miles_driven = document.getElementById("total_miles_driven").value
        let _officers_on_road = document.getElementById("officers_on_road").value
        let _officers_on_desk = document.getElementById("officers_on_desk").value
        let _officers_on_jail_duty = document.getElementById("officers_on_jail_duty").value
        let _officers_on_light_duty = document.getElementById("officers_on_light_duty").value
        let _officers_out_sick = document.getElementById("officers_out_sick").value
        let _officers_in_training = document.getElementById("officers_in_training").value
        let _officers_on_vacation = document.getElementById("officers_on_vacation").value
        let _officers_assigned_elswhere = document.getElementById("officers_assigned_elswhere").value
        let _total_citations_issued = document.getElementById("total_citations_issued").value
        let _total_warnings_issued = document.getElementById("total_warnings_issued").value
        let _total_citizen_contacts = document.getElementById("total_citizen_contacts").value
        let _total_traffic_stops = document.getElementById("total_traffic_stops").value
        let _total_arrest_made = document.getElementById("total_arrest_made").value
        let _total_juvenile_contacts = document.getElementById("total_juvenile_contacts").value

    
        let payload =  { 
            "total_calls_for_service": parseInt(_total_calls_for_service),
            "total_case_numbers_pulled": parseInt(_total_case_numbers_pulled),
            "total_case_numbers_completed": parseInt(_total_case_numbers_completed),
            "total_reports": parseInt(_total_reports),
            "total_supplements": parseInt(_total_supplements),
            "total_vehicles_assigned": parseInt(_total_vehicles_assigned),
            "total_miles_driven": parseInt(_total_miles_driven),
            "officers_on_road": parseInt(_officers_on_road),
            "officers_on_desk": parseInt(_officers_on_desk),
            "officers_on_jail_duty": parseInt(_officers_on_jail_duty),
            "officers_on_light_duty": parseInt(_officers_on_light_duty),
            "officers_out_sick": parseInt(_officers_out_sick),
            "officers_in_training": parseInt(_officers_in_training),
            "officers_on_vacation": parseInt(_officers_on_vacation),
            "officers_assigned_elswhere": parseInt(_officers_assigned_elswhere),
            "total_citations_issued": parseInt(_total_citations_issued),
            "total_warnings_issued": parseInt(_total_warnings_issued),
            "total_citizen_contacts": parseInt(_total_citizen_contacts),
            "total_traffic_stops": parseInt(_total_traffic_stops),
            "total_arrest_made": parseInt(_total_arrest_made),
            "total_juvenile_contacts": parseInt(_total_juvenile_contacts),
         };
        console.log(payload)
        let res = await axios.post('https://localhost:44394/api/Supervisor/SupervisorReport', payload);
        console.log(res)
        return res.data
        
        
    }
   
    return(
        <div className="supervisorReport">
            <form>
                <input type="number" id="total_calls_for_service"  placeholder="Enter the total calls for service" />
                <input type="number" id="total_case_numbers_pulled"  placeholder ="Enter the total case numbers pulled" />
                <input type="number" id="total_case_numbers_completed"  placeholder ="Enter the total case numbers completed" />
                <input type="number" id="total_reports"  placeholder ="Enter the total number of reports taken" />
                <input type="number" id="total_supplements"  placeholder ="Enter the total number of supplements completed" />
                <input type="number" id="total_vehicles_assigned"  placeholder ="Enter the total number of assigned vehicles" />
                <input type="number" id="total_miles_driven"  placeholder="Enter the total number of miles driven" />
                <input type="number" id="officers_on_road"  placeholder ="Enter the number of officers on the road" />
                <input type="number" id="officers_on_desk"  placeholder ="Enter the number of officers on the desk" />
                <input type="number" id="officers_on_jail_duty"  placeholder ="Enter the number of officers of jail duty" />
                <input type="number" id="officers_on_light_duty"  placeholder ="Enter the number of officers on light duty" />
                <input type="number" id="officers_out_sick" placeholder="Enter the number of officers out sick" />
                <input type="number" id="officers_in_training"  placeholder ="Enter the number of officers in training" />
                <input type="number" id="officers_on_vacation"  placeholder ="Enter the number of officers on vacation" />
                <input type="number" id="officers_assigned_elswhere"  placeholder ="Enter the number of officers assigned to other divisions" />
                <input type="number" id="total_citations_issued"  placeholder ="Enter the total number of citations issued" />
                <input type="number" id="total_warnings_issued" placeholder="Enter the total number of warnings issed" />
                <input type="number" id="total_citizen_contacts"  placeholder ="Enter the total number of citizen contacts" />
                <input type="number" id="total_traffic_stops"  placeholder ="Enter the total number of traffic stops" />
                <input type="number" id="total_arrest_made"  placeholder ="Enter the number of arest made" />
                <input type="number" id="total_juvenile_contacts"  placeholder ="Enter the number of juvenile contacts made" />
                <button type="submit" onClick={handleSubmitClick}>Submit Report</button>
            </form>
            </div>
            
            
        
      )
}

export default withRouter(SupervisorReport);