import React, { Component} from 'react';
import './Pricing.css';
import { Summary } from './Summary';

export class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = { proposals: [], facilities: [], loading: true };
    }

    componentDidMount() {
        this.populateProposalData();
    }

    renderPricingTable(proposals) {
        return (
            <table id='pricing' className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CustomerGrpName</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {proposals.map(p =>
                        <tr key={p.proposalName}>
                            <td>{p.proposalName}</td>
                            <td>{p.customerGrpName}</td>
                            <td>{p.date}</td>
                            <td>{p.description}</td>
                            <td>{p.status}</td>
                            <td id='viewSummary' onClick={this.fetchFacilityData(p.proposalName)}>VIEW SUMMARY</td>
                        </tr>
                    )}
 
                </tbody>
            </table>
        );
    }

    async fetchFacilityData(proposalName) {
        const res = await fetch("https://localhost:44305/api/pricing/getFacilityData/" + proposalName);
        const data = await res.json();
        this.setState({ facilities: data, loading: false });
    //    this.renderFacility(this.state.facilities);
    }

    async populateProposalData() {
        const res = await fetch("https://localhost:44305/api/pricing");
        const data = await res.json();
        this.setState({ proposals: data, loading: false });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderPricingTable(this.state.proposals);

        return (
            <div>
               {contents}
            </div>
        );
    }
}