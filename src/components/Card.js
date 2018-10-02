import React, { Component} from 'react'
import Listing from "./Listing";

class Card extends Component{

    render(){
       const list = this.props.array.map((user)=>{
           return <Listing key={user.cell} firstname={user.name.first} lastname={user.name.last} location={user.location.city} />
       });

        return(
            <div>
                {console.log('Card: ', list)}
                <Listing prop={list}/>
            </div>
        )
    }
}
    export default Card