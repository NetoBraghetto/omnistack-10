import React from 'react';

export default function DevCard ({ dev }) {
    return (
        <div className="dev-card">
            <header className="dev-card-header">
                <img className="dev-card-img" src={ dev.avatar_url } alt={ dev.name } />
                <div className="dev-card-info">
                    <strong className="dev-card-info-name">{ dev.name }</strong>
                    <span className="dev-card-info-skills">{ dev.skills.join(', ') }</span>
                </div>
            </header>
            <p className="dev-card-bio">{ dev.bio }</p>
            <a href={ `https://github.com/${dev.github_username}` } className="dev-card-link">Acessar perfil</a>
        </div>
    );
}
