import React, {Component} from 'react';
import Card from "./Card";


class ApiCall extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }

    }
    componentWillMount(){
        fetch(`https://randomuser.me/api/?results=5`)
            .then(res=> res.json())
            .then(meta=> {
                this.setState({data : meta.results})
            })

    }


    render() {

        return (
            <div>
                <Card array={this.state.data}/>
            </div>
        )


    }
}

export default ApiCall