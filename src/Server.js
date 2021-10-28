import React, {Component} from "react";

class ServerBox  extends Component {


    constructor(props) {
        super(props);
        this.state = {color: props.color};

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

        // Changing state
        let color = "";

        if (this.state.color === 'red'){
            color = 'green'
        }else{
            color = 'red'
        }

        this.setState({color : color})
    }


    render() {
        return <button className="p-2 md:w-1/3" onClick={this.handleClick}>
            <div id={this.props.name} className={`h-full border-2 border-${this.state.color}-400 rounded-lg overflow-hidden text-center`}>
                <div className="p-6">
                    {this.props.name}
                </div>
            </div>
        </button>;
    }
}

export default ServerBox;