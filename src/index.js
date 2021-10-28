
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ServerBox from 'components/Server';
import './tailwind.output.css';

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