import React, { Component } from "react";
import Officer from "./Officer";


class FilterSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
         searchWord:'',
         searchDate: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.first_name]: event.target.value,
            [event.target.badge_number]: event.target.value,
            [event.target.last_name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let results = this.props.search.filter(officer => {
            if (Officer.last_name.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return Officer
            }
            if (Officer.badge_number.toLowerCase().includes(this.state.searchInteger.toLowerCase())){
                return Officer
            }
            if (Officer.first_name.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return Officer
            }

            else{
                return false
            }
        });
        this.setState({
            searchWord:'',
            searchDate:'',
        })
        this.props.filterAction(results)
    };


    handleChange = (event) => {
        this.setState({
            [event.target.report_id]: event.target.value,
            [event.target.date]: event.target.date,

        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let results = this.props.search.filter(DailyReport => {
            if (DailyReport.report_id.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return DailyReport
            }
            if (DailyReport.date.DateTimeField().includes(this.state.searchDate.DateTimeField())){
                return DailyReport
            }
            else{
                return false
            }
        });
        this.setState({
            searchDate:'',
            searchWord:''
        })
        this.props.filterAction(results)
    };

    handleChange = (event) => {
        this.setState({
            [event.target.last_name]: event.target.value,
            [event.target.badge_number]: event.target.value,
            [event.target.first_name]: event.target.value

        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let results = this.props.search.filter(Supervisor => {
            if (Officer.last_name.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return Officer
            }
            if (Officer.badge_number.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return Officer
            }
            if (Officer.first_name.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return Officer
            }

            else{
                return false
            }
        });
        this.setState({
            searchWord:'',
        })
        this.props.filterAction(results)
    };



    handleSubmit = (event) => {
        event.preventDefault();
        let results = this.props.search.filter(DailyReport => {
            if (DailyReport.supervisor_report_id.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return DailyReport
            }
            if (DailyReport.date.DateTimeField().includes(this.state.searchDate.DateTimeField())){
                return DailyReport
            }
            else{
                return false
            }
        });
        this.setState({
            searchInteger: '',
            searchDate:''
        })
        this.props.filterAction(results)
    };
    
    render () {
      return (
        <div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Search" name="searchWord" title="search" type="text" value={this.state.searchWord} onChange={this.handleChange} />
                    <input placeholder="Search" name="searchWord" title="search" type="integer" value={this.state.searchWord} onChange={this.handleChange} />
                    <button className="button1" type='submit' value="search">Submit</button>
                </form>
                <button className='button' onClick={this.props.refresh}>Refresh List</button>
            </div>
         </div>
      );
    }
}

  export default FilterSearch;