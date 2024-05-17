import React from "react";
import "./SettingsPage.css";

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <h1>⚙️ Settings</h1>
      <div className="settings-container">
        <div className="settings-section">
          <h2>👤 Profile Settings</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">New username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Confirm Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>

        <div className="settings-section">
          <h2>🔒 Security Settings</h2>
          <form>
            <div className="form-group">
              <label htmlFor="password"> New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
