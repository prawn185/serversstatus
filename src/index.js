import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ServerBox from './Server';
import './tailwind.output.css';
import Websocket from 'react-websocket';

import reportWebVitals from './reportWebVitals';

const servers = [{name:"Tech", status:"green"},
    {name:"Project", status:"red"},
    {name:"Product", status:"green"},
    {name:"CRO", status:"red"}];

const listItems = servers.map((server) => <ServerBox name={server.name} color={server.status}/>);


function Server() {
    return (
        <section className="text-gray-200 body-font">
            <div className="container px-4 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {listItems}
                    {/*<ServerBox name="Tech" color="red"/>*/}
                </div>
            </div>
        </section>
    );
}


class Echo extends React.Component {
    constructor(props){
        super(props);
        this.state = { messages : [] }
    }

    componentDidMount(){

        // this is an "echo" websocket service
        this.connection = new WebSocket('wss://localhost/servers');
        // listen to onmessage event
        this.connection.onmessage = evt => {
            // add the new message to state
            this.setState({
                messages : this.state.messages.concat([ evt.data ])
            })
        };

        // for testing purposes: sending to the echo service which will send it back back
        setInterval( _ =>{
            this.connection.send( Math.random() )
        }, 2000 )
    }

    render() {
        // slice(-5) gives us the five most recent messages
        return <ul>{ this.state.messages.slice(-5).map( (msg, idx) => <li key={'msg-' + idx }>{ msg }</li> )}</ul>;
    }
};






ReactDOM.render(
    <Echo />,
    document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
