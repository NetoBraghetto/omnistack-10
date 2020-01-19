import React, { useState, useEffect } from 'react';
import './../styles/bootstrap.scss'
import Sidebar from './layout/Sidebar';
import DevCard from './components/DevCard';
import api from '../services/api';

export default function App () {
    const [devs, updateDevs] = useState([]);

    const [state, setState] = useState({
        github_username: '',
        skills: '',
        latitude: '',
        longitude: '',
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setState(Object.assign({}, state, {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }));
            async function fetchDevs() {
                const devsResponse = await api.get('devs');
                updateDevs(devsResponse.data);
            }
            fetchDevs();
        }, console.error, {
            timeout: 30000
        });
    }, []);

    function onChange(field, e) {
        const nState = Object.assign({}, state, {
            [field]: e.target.value
        });
        setState(nState);
    }

    async function onSubmit(e) {
        e.preventDefault();
        const res = await api.post('devs', state);
        setState({
            github_username: '',
            skills: '',
            latitude: '',
            longitude: '',
        });
        updateDevs(devs.concat([res.data]));
    }

    return (
        <div id="app">
            <Sidebar
                state={ state }
                onChange={ onChange }
                onSubmit={ onSubmit }
            />
            <main id="main">
                <ul id="dev-list">
                    { devs.map((dev, i) => {
                        return (
                            <li className="dev-li" key={ dev._id }>
                                <DevCard dev={ dev } />
                            </li>
                        );
                    }) }
                </ul>
            </main>
        </div>
    );
}
