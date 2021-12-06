import React, {useState} from 'react';
import axios from 'axios';
import './ReportCreator.css';
import { withRouter } from "react-router-dom";

function ReportCreator() {
    async function handleSubmitClick(event){
        event.preventDefault();
        console.log("report generated")
        let _totalCallsForService= document.getElementById("TotalCallsForService").value
        let _totalCaseNumbersPulled = document.getElementById("TotalCaseNumbersPulled").value
        let _totalCAseNumbersCompleted = document.getElementById("TotalCaseNumbersCompleted").value
        let _totalReports = document.getElementById("totalReports").value
        let _totalSupplements = document.getElementById("totalSupplements").value
        let _totalVehiclesAssigned = document.getElementById("totalVehiclesAssigned").value
        let _totalMilesDriven = document.getElementById("totalMilesDriven").value
        let _officersOnRoad = document.getElementById("officersOnRoad").value
        let _officersOnDesk = document.getElementById("officersOnDesk").value
        let _officersOnJailDuty = document.getElementById("officersOnJailDuty").value
        let _officersOnLightDuty = document.getElementById("officersOnLightDuty").value
        let _officersOutSick = document.getElementById("officersOutSick").value
        let _officersInTraining = document.getElementById("officersInTraining").value
        let _officersOnVacation = document.getElementById("officersOnVacation").value
        let _officersAssignedElsewhere = document.getElementById("officersAssignedElsewhere").value
        let _totalCitationsIssued = document.getElementById("totalCitationsIssued").value
        let _totalWarningsIssued = document.getElementById("totalWarningsIssued").value
        let _totalCitizenContacts = document.getElementById("totalCitizenContacts").value
        let _totalTrafficStops = document.getElementById("totalTrafficStops").value
        let _totalArrestMade = document.getElementById("totalArrestMade").value
        let _totalJuvenileContacts = document.getElementById("totalJuvenileContacts").value

    
        let payload =  { 
            "TotalCallsForService": parseInt(_totalCallsForService),
            "TotalCaseNumbersPulled": parseInt(_totalCaseNumbersPulled),
            "TotalCaseNumbersCompleted": parseInt(_totalCAseNumbersCompleted),
            "TotalReports": parseInt(_totalReports),
            "TotalSupplements": parseInt(_totalSupplements),
            "TotalVehiclesAssigned": parseInt(_totalVehiclesAssigned),
            "TotalMilesDriven": parseInt(_totalMilesDriven),
            "OfficersOnRoad": parseInt(_officersOnRoad),
            "OfficersOnDesk": parseInt(_officersOnDesk),
            "OfficersOnJailDuty": parseInt(_officersOnJailDuty),
            "OfficersOnLightDuty": parseInt(_officersOnLightDuty),
            "OfficersOutSick": parseInt(_officersOutSick),
            "OfficersInTraining": parseInt(_officersInTraining),
            "OfficersOnVacation": parseInt(_officersOnVacation),
            "OfficersAssignedElsewhere": parseInt(_officersAssignedElsewhere),
            "TotalCitationsIssued": parseInt(_totalCitationsIssued),
            "TotalWarningsIssued": parseInt(_totalWarningsIssued),
            "TotalCitizenContacts": parseInt(_totalCitizenContacts),
            "TotalTrafficStops": parseInt(_totalTrafficStops),
            "TotalArrestMade": parseInt(_totalArrestMade),
            "TotalJuvenileContacts": parseInt(_totalJuvenileContacts),
         };
        console.log(payload)
        let res = await axios.post('https://localhost:44394/api/Supervisor/ReportCreater', payload);
        console.log(res)
        return res.data
        
        
    }
   
    return(
        <div className="reportCreator">
            <form>
                <input type="number" id="totalCallsForService"  placeholder="Enter the total calls for service" />
                <input type="number" id="totalCaseNumbersPulled"  placeholder ="Enter the total case numbers pulled" />
                <input type="number" id="totalCaseNumbersCompleted"  placeholder ="Enter the total case numbers completed" />
                <input type="number" id="totalReports"  placeholder ="Enter the total number of reports taken" />
                <input type="number" id="totalSupplements"  placeholder ="Enter the total number of supplements completed" />
                <input type="number" id="totalVehiclesAssigned"  placeholder ="Enter the total number of assigned vehicles" />
                <input type="number" id="totalMilesDriven"  placeholder="Enter the total number of miles driven" />
                <input type="number" id="officersOnRoad"  placeholder ="Enter the number of officers on the road" />
                <input type="number" id="officersOnDesk"  placeholder ="Enter the number of officers on the desk" />
                <input type="number" id="officersOnJailDuty"  placeholder ="Enter the number of officers of jail duty" />
                <input type="number" id="officersOnLightDuty"  placeholder ="Enter the number of officers on light duty" />
                <input type="number" id="officersOutSick" placeholder="Enter the number of officers out sick" />
                <input type="number" id="officersInTraining"  placeholder ="Enter the number of officers in training" />
                <input type="number" id="officersOnVacation"  placeholder ="Enter the number of officers on vacation" />
                <input type="number" id="officersAssignedElsewhere"  placeholder ="Enter the number of officers assigned to other divisions" />
                <input type="number" id="totalCitationsIssued"  placeholder ="Enter the total number of citations issued" />
                <input type="number" id="totalWarningsIssued" placeholder="Enter the total number of warnings issed" />
                <input type="number" id="totalCitizenContacts"  placeholder ="Enter the total number of citizen contacts" />
                <input type="number" id="totalArrestMade"  placeholder ="Enter the number of arest made" />
                <input type="number" id="totalJuvenileContacts"  placeholder ="Enter the number of juvenile contacts made" />
                <button type="submit" onClick={handleSubmitClick}>Submit Report</button>
            </form>
            </div>
            
            </form>
        </div>
      )
}
}
export default withRouter(ReportCreator);