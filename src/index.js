import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ServerBox from './Server';
import Firebase from './Firebase';
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

ReactDOM.render(
    <Server />,
    document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
