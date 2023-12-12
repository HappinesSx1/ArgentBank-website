import Axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserEdit } from "../reducers/user.reducer";

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useSelector((state) => state.user);
  const [userName, setUserName] = useState(data.userName);
  const token = useSelector((state) => state.log.token);
  const dispatch = useDispatch();

  const toggleForm = (etat) => {
    setIsOpen(etat);
  };

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await Axios.put(
      "http://localhost:3001/api/v1/user/profile",
      {
        userName: userName,
      },
      {
        "Content-Type": "application/json",
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      },
      dispatch(setUserEdit({ userName }))
    );
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {data.firstName + " " + data.lastName}
      </h1>
      <button className="edit-button" onClick={() => toggleForm(true)}>
        Edit Name
      </button>
      {isOpen && (
        <form
          className="form-change-name"
          // onSubmit={handleSubmit}
          onSubmit={(e) => {
            handleSubmit(e); // Appeler votre fonction de gestion de la soumission ici
            toggleForm(false); // Fermer le formulaire
          }}
        >
          <div className="champs">
            <label htmlFor="">Nouveau pseudo :</label>
            <input type="text" value={userName} onChange={changeUserName} />
          </div>
          <div className="btns-form-change-name">
            <button type="submit" className="edit-button">
              Confirmer
            </button>
            <button
              className="edit-button"
              onClick={() => {
                toggleForm(false);
              }}
            >
              Annuler
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Welcome;
