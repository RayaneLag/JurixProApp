import React, { useState } from "react";
import "./SettingsPage.css";
import {
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
} from "../../app/Slices/apislice";

const SettingsPage = () => {
  const [profileData, setProfileData] = useState({ username: "", email: "" });
  const [securityData, setSecurityData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [updateProfile] = useUpdateProfileMutation();
  const [updatePassword] = useUpdatePasswordMutation();

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSecurityChange = (e) => {
    setSecurityData({ ...securityData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({
        userId: "user_id",
        ...profileData,
      }).unwrap();
      alert(response.message);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    }
  };

  const handleSecuritySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updatePassword({
        userId: "user_id",
        ...securityData,
      }).unwrap();
      alert(response.message);
    } catch (error) {
      console.error("Error updating password:", error);
      alert("Error updating password");
    }
  };

  return (
    <div className="settings-page-container">
      <div className="settings-page">
        <h1>⚙️ paramètres</h1>
        <div className="settings-container">
          <div className="settings-section">
            <h2>👤 paramètress de profil</h2>
            <form onSubmit={handleProfileSubmit}>
              <div className="form-group">
                <label htmlFor="username">nouveau nom</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={profileData.username}
                  onChange={handleProfileChange}
                  placeholder="nouveau nom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  placeholder="email"
                />
              </div>
              <button type="submit">Save</button>
            </form>
          </div>

          <div className="settings-section">
            <h2>🔒 paramètres de sécurité</h2>
            <form onSubmit={handleSecuritySubmit}>
              <div className="form-group">
                <label htmlFor="password"> Nouveau mot de passe</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={securityData.password}
                  onChange={handleSecurityChange}
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
                  value={securityData.confirmPassword}
                  onChange={handleSecurityChange}
                  placeholder="Confirmer le mot de passe"
                />
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

// import React from "react";
// import "./SettingsPage.css";

// const SettingsPage = () => {
//   return (
//     <>
//       <div className="settings-page-container">
//         <div className="settings-page">
//           <h1>⚙️ paramètres</h1>
//           <div className="settings-container">
//             <div className="settings-section">
//               <h2>👤 paramètress de profil</h2>
//               <form>
//                 <div className="form-group">
//                   <label htmlFor="username">nouveau nom</label>
//                   <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     placeholder="nouveau nom"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="email"
//                   />
//                 </div>
//                 <button type="submit">Save</button>
//               </form>
//             </div>

//             <div className="settings-section">
//               <h2>🔒 paramètres de sécurité</h2>
//               <form>
//                 <div className="form-group">
//                   <label htmlFor="password"> Nouveau mot de passe</label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="Nouveau mot de passe"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="confirmPassword">
//                     Confirmer le mot de passe
//                   </label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     placeholder="Confirmer le mot de passe"
//                   />
//                 </div>
//                 <button type="submit">Save</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SettingsPage;
