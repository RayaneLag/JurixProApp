import React, { useState } from "react";
import {
  useFetchClientsQuery,
  useAddClientMutation,
} from "../../app/Slices/apislice";
import styles from "./clients.module.css";

const Clients = () => {
  const {
    data: clients = [],
    error,
    isLoading,
    refetch,
  } = useFetchClientsQuery();

  const [addClient] = useAddClientMutation();

  const [newClient, setNewClient] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleAddClient = async () => {
    if (newClient.name && newClient.phone && newClient.email) {
      try {
        await addClient(newClient).unwrap();
        setNewClient({ name: "", phone: "", email: "" });
        refetch();
      } catch (error) {
        console.error("Error adding client:", error);
      }
    }
  };

  return (
    <div className={styles.clientsContainer}>
      <h1>Visualisez et gérez vos clients</h1>

      <div className={styles.addClientContainer}>
        <h2>Ajouter un Nouveau Client</h2>
        <input
          type="text"
          name="name"
          value={newClient.name}
          onChange={handleInputChange}
          placeholder="Nom du Client"
          className={styles.inputField}
        />
        <input
          type="text"
          name="phone"
          value={newClient.phone}
          onChange={handleInputChange}
          placeholder="Numéro de Téléphone"
          className={styles.inputField}
        />
        <input
          type="email"
          name="email"
          value={newClient.email}
          onChange={handleInputChange}
          placeholder="Email"
          className={styles.inputField}
        />
        <button onClick={handleAddClient} className={styles.addButton}>
          Ajouter
        </button>
      </div>

      <div className={styles.clientListContainer}>
        <h2>Liste des Clients</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading clients: {error.message}</p>}
        {clients.map((client, index) => (
          <div key={index} className={styles.clientItem}>
            <h3>{client.name}</h3>
            <p>
              <strong>Téléphone :</strong> {client.phone}
            </p>
            <p>
              <strong>Email :</strong> {client.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

// import React, { useState } from "react";
// import {
//   useFetchClientsQuery,
//   useAddClientMutation,
// } from "../../app/Slices/apislice";
// import styles from "./clients.module.css";

// const Clients = () => {
//   const { data: clients = [], error, isLoading } = useFetchClientsQuery();
//   const [addClient] = useAddClientMutation();

//   const [newClient, setNewClient] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewClient({ ...newClient, [name]: value });
//   };

//   const handleAddClient = async () => {
//     if (newClient.name && newClient.phone && newClient.email) {
//       try {
//         await addClient(newClient).unwrap();
//         setNewClient({ name: "", phone: "", email: "" });
//       } catch (error) {
//         console.error("Error adding client:", error);
//       }
//     }
//   };

//   return (
//     <div className={styles.clientsContainer}>
//       <h1>Visualisez et gérez vos clients</h1>

//       <div className={styles.addClientContainer}>
//         <h2>Ajouter un Nouveau Client</h2>
//         <input
//           type="text"
//           name="name"
//           value={newClient.name}
//           onChange={handleInputChange}
//           placeholder="Nom du Client"
//           className={styles.inputField}
//         />
//         <input
//           type="text"
//           name="phone"
//           value={newClient.phone}
//           onChange={handleInputChange}
//           placeholder="Numéro de Téléphone"
//           className={styles.inputField}
//         />
//         <input
//           type="email"
//           name="email"
//           value={newClient.email}
//           onChange={handleInputChange}
//           placeholder="Email"
//           className={styles.inputField}
//         />
//         <button onClick={handleAddClient} className={styles.addButton}>
//           Ajouter
//         </button>
//       </div>

//       <div className={styles.clientListContainer}>
//         <h2>Liste des Clients</h2>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error loading clients: {error.message}</p>}
//         {clients.map((client, index) => (
//           <div key={index} className={styles.clientItem}>
//             <h3>{client.name}</h3>
//             <p>
//               <strong>Téléphone :</strong> {client.phone}
//             </p>
//             <p>
//               <strong>Email :</strong> {client.email}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Clients;
