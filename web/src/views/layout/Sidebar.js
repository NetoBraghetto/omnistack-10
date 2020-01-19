import React from 'react';

export default function Sidebar (props) {
    return (
        <aside id="sidebar">
            <strong>Cadastrar</strong>
            <form id="register-form" onSubmit={ props.onSubmit }>
                <label className="input-block">
                    <strong className="input-text">Usuário do github</strong>
                    <input className="input-element" name="github_username" onChange={ props.onChange.bind(null, 'github_username') } type="text" value={ props.state.github_username } required />
                </label>
                <label className="input-block">
                    <strong className="input-text">Tecnologias</strong>
                    <input className="input-element" name="skills" onChange={ props.onChange.bind(null, 'skills') } type="text" value={ props.state.skills } required />
                </label>
                <div className="input-group">
                    <label className="input-block">
                        <strong className="input-text">Latitude</strong>
                        <input className="input-element" name="latitude" onChange={ props.onChange.bind(null, 'latitude') } type="number" value={ props.state.latitude } required />
                    </label>
                    <label className="input-block">
                        <strong className="input-text">Longitude</strong>
                        <input className="input-element" name="longitude" onChange={ props.onChange.bind(null, 'longitude') } type="number" value={ props.state.longitude } required />
                    </label>
                </div>
                <button id="register-form-submit" type="submit">Salvar</button>
            </form>
        </aside>
    );
}
