import React, { useEffect } from 'react';
import Sidebar from './layout/Sidebar';

import './../styles/bootstrap.scss'
import DevCard from './components/DevCard';

export default function App () {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        }, console.error, {
            timeout: 30000
        });
    }, []);
    return (
        <div id="app">
            <Sidebar />
            <main id="main">
                <ul id="dev-list">
                    { [1, 2, 3, 4, 5, 6].map((dev, i) => {
                        return (
                            <li className="dev-li" key={ i }>
                                <DevCard />
                            </li>
                        );
                    }) }
                </ul>
            </main>
        </div>
    );
}
