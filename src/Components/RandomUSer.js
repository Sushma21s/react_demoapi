import React from 'react';
import "../Styles/User.scss";


class RandomUSer extends React.Component {
    state = {
        loading: false,
        person: null
    }
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false })
        console.log(data)
    }

    render() {
        return <div>
            {this.state.loading || !this.state.person ? <div>loading</div> : <div>
                <div className="person-name-first">{this.state.person.name.first}</div>
                <div className="person-name-last">{this.state.person.name.last}</div>
                <div className="person-age">{this.state.person.dob.age}</div>
                <img   src={this.state.person.picture.large} className ="person-image" alt="image"/> 
            </div>}
        </div>;
    }
}


export default RandomUSer;