import React, { Component, Dropdown } from 'react';
//import { Modal } from 'react-bootstrap';
//import './Summary.css';

export class Summary extends Component {
 
    constructor(props) {
        super(props);
        this.state = { proposalName : this.props.proposalName, facility: null, loading: true };
    }

    componentDidMount() {
        this.fetchFacilityData();
    }

    renderFacility(facility) {
        //var options = this.state.facility.map(x => x.facilityName);
        //return (
        //    <div>
        //        <Dropdown
        //            label="facility"
        //            options={options}
        //        />
        //    </div>
        //)

        return (
            <p>Akila</p>
            
            )
    };

    async fetchFacilityData() {
        const res = await fetch("https://localhost:44305/api/Summary/getFacilityData/" + this.props.proposalName);
        const data = await res.json();
        this.setState({ facility: data, loading: false });
     }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderFacility(this.state.facility);

        return (
            <div>
                <h1 id="tabelLabel">Institutional Summarys</h1>
                {contents}
            </div>
        );
    }
}