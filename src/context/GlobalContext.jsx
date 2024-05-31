import React, { createContext, useState, useEffect } from 'react';
import db from '../db/db.json';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [ticketsPendientes, setTicketsPendientes] = useState([]);
  const [ticketsResueltos, setTicketsResueltos] = useState([]);

  useEffect(() => {
    setTicketsPendientes(db.ticketsPendientes);
    setTicketsResueltos(db.ticketsResueltos);
  }, []);

  return (
    <GlobalContext.Provider value={{ ticketsPendientes, ticketsResueltos }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
