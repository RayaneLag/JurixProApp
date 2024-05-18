import React from "react";
import "./SettingsPage.css";

const SettingsPage = () => {
  return (
    <>
      <div className="settings-page-container">
        <div className="settings-page">
          <h1>⚙️ paramètres</h1>
          <div className="settings-container">
            <div className="settings-section">
              <h2>👤 paramètress de profil</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="username">nouveau nom</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="nouveau nom"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                  />
                </div>
                <button type="submit">Save</button>
              </form>
            </div>

            <div className="settings-section">
              <h2>🔒 paramètres de sécurité</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="password"> Nouveau mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Nouveau mot de passe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirmer le mot de passe"
                  />
                </div>
                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
