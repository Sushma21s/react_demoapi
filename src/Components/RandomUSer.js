import React from 'react';


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
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
                <div>{this.state.person.dob.age}</div>
                <img src={this.state.person.picture.large}/>
            </div>}
        </div>;
    }
}


export default RandomUSer;