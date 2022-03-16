import React,{Component} from "react";
import "./PersonCard.css"
class PersonCard extends Component{
    render(){
        const { firstName, lastName, age, hairColor } = this.props;

        return (
            <div className="card">
                <h1>{lastName}, {firstName}</h1>
                <div className="card-body">
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
            </div>
        );
    }
}

export default PersonCard;