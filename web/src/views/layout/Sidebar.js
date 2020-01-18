import React from 'react';

export default function Sidebar () {
    return (
        <aside id="sidebar">
            <strong>Cadastrar</strong>
            <form id="register-form">
                <label className="input-block">
                    <strong className="input-text">Usuário do github</strong>
                    <input className="input-element" name="github_username" type="text" required />
                </label>
                <label className="input-block">
                    <strong className="input-text">Tecnologias</strong>
                    <input className="input-element" name="skills" type="text" required />
                </label>
                <div className="input-group">
                    <label className="input-block">
                        <strong className="input-text">Latitude</strong>
                        <input className="input-element" name="latitude" type="text" required />
                    </label>
                    <label className="input-block">
                        <strong className="input-text">Longitude</strong>
                        <input className="input-element" name="longitude" type="text" required />
                    </label>
                </div>
                <button id="register-form-submit" type="submit">Salvar</button>
            </form>
        </aside>
    );
}
