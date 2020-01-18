import React from 'react';

export default function DevCard () {
    return (
        <div className="dev-card">
            <header className="dev-card-header">
                <img className="dev-card-img" src="https://avatars3.githubusercontent.com/u/6883793?s=460&v=4" alt="Neto Braghetto" />
                <div className="dev-card-info">
                    <strong className="dev-card-info-name">Neto Braghetto</strong>
                    <span className="dev-card-info-skills">NetoBraghetto</span>
                </div>
            </header>
            <p className="dev-card-bio">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro voluptatum fugiat.</p>
            <a href="#" className="dev-card-link">Acessar perfil</a>
        </div>
    );
}
