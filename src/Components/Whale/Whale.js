import React from 'react';
import {useLocation, useParams} from 'react-router-dom';
import Beluga from "./Beluga";
import Blue from "./Blue";



function Whale() {
    const { type } = useParams();
    //const {search} = useLocation();
    //const match = search.match(/type=(.*)/);
    //const type = match?.[1];
    return (
        <div className="whale">
            <h2>Whale</h2>
            {type == 'beluga' && <Beluga />}
            {type == 'blue' && <Blue />}
        </div>
    )
}

export default Whale;