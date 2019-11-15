import React, {Component} from 'react';
import axios from 'axios'


class SummaryTable extends Component {

    constructor(props) {
        super(props);
        this.state = {}

        this.getCentralMenu = this.getCentralMenu.bind(this)
    }

    async getCentralMenu(){
        axios.get(`https://dcpg2gtwapp1.compass-group.digital:8024/sap/opu/odata/sap/ZCM_CENTRALMENU_SRV/ZA_CentralMenu?$format=json`)
            .then(response => {
                const centralMenus = response.data.d.results;
                console.log('centralMenuscentralMenuscentralMenus', centralMenus);
            })
            .catch(error => {
                return { data: [], error };
            });
    }

    componentDidMount() {
        this.getCentralMenu();
    }


    render() {
        return (
            <div className='menuTable' style={{width: '85%', margin: 'auto'}}>
                <div>
                    <h1 className='text-center text-capitalize py-5'>Print Plan</h1>
                    <h2 className='text-capitalize pl-3'>Menu Details</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Menu Name:</th>
                            <td scope="col">pa</td>
                            <th scope="col">Source:</th>
                            <td scope="col">MEC</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Menu ID:</th>
                            <td>5d132145699+865fv432f144</td>
                            <th>Condition Set ID:</th>
                            <td>915654164</td>
                        </tr>
                        <tr>
                            <th scope="row">Day Part:</th>
                            <td>Launch</td>
                            <th>Cycle</th>
                            <td>1 week</td>
                        </tr>
                        <tr>
                            <th scope="row">Sector:</th>
                            <td>LVR-LEVY RESTAURANTS</td>
                            <th>Selected Dishes</th>
                            <td>@Main Dish</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='py-5'>

                    <h2 className='text-capitalize pl-3'>Menu Condeitions</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Menu Name:</th>
                            <td scope="col">pa</td>
                            <th scope="col">Source:</th>
                            <td scope="col">MEC</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Menu ID:</th>
                            <td>5d132145699+865fv432f144</td>
                            <th>Condition Set ID:</th>
                            <td>915654164</td>
                        </tr>
                        <tr>
                            <th scope="row">Day Part:</th>
                            <td>Launch</td>
                            <th>Cycle</th>
                            <td>1 week</td>
                        </tr>
                        <tr>
                            <th scope="row">Sector:</th>
                            <td>LVR-LEVY RESTAURANTS</td>
                            <th>Selected Dishes</th>
                            <td>@Main Dish</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='py-5'>

                    <h2 className='text-capitalize pl-3'>Menu Structure</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Menu Name:</th>
                            <td scope="col">pa</td>
                            <th scope="col">Source:</th>
                            <td scope="col">MEC</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Menu ID:</th>
                            <td>5d132145699+865fv432f144</td>
                            <th>Condition Set ID:</th>
                            <td>915654164</td>
                        </tr>
                        <tr>
                            <th scope="row">Day Part:</th>
                            <td>Launch</td>
                            <th>Cycle</th>
                            <td>1 week</td>
                        </tr>
                        <tr>
                            <th scope="row">Sector:</th>
                            <td>LVR-LEVY RESTAURANTS</td>
                            <th>Selected Dishes</th>
                            <td>@Main Dish</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default SummaryTable;