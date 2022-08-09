import React ,{Component} from 'react';
import ReguCompo from './ReguCompo';
import PureCompo from './PureCompo'

class ParentComp extends Component {
    constructor (props){
        super(props)
        this.state = {
            name:'maria'
        }
    }
    componentDidMount (){
        setInterval(()=>{
            this.setState ( {
                name:'maria'
            })
        } ,2000)
    }

    render() {
        console.log('----------Parent component render-----------')
        return <div>
            Parent Component
            <ReguCompo name = {this.state.name}></ReguCompo>
            <PureCompo name = {this.state.name}></PureCompo>
        </div>;
    }
}


export default ParentComp;