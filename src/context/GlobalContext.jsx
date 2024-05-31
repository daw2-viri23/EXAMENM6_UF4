import React, { createContext, useState, useEffect } from 'react';


//creamos el contexto contexto.

export const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {
  // GlobalProvider da los datos a los componentes "hijo"

  const [dades, setDades] = useState({
    ticketsPendientes: [],
    ticketsResueltos: []
  });
  // useState crea un estado con dos listas vacías donde se guardaran los datos del api rest subido en vercel

  useEffect(() => {

    
    const fetchData = async () => {
      // Definimos una función fetchData que obtendrá datos desde internet.
      
      try {
        const guardaTicketsPendientes = await fetch('https://json-server-vercel-examenm6.vercel.app/ticketsPendientes');
        // fetch es una función que obtiene datos desde una URL de la api rest subida al vercel previamente, usamos un await para esperar a q se reciban los datos para continuar

        
        const pendientes = await guardaTicketsPendientes.json();
        // convertimos el guardaTicketsPendientes en un objeto de JS igual se hace con guardaTicketsResueltos

        const guardaTicketsResueltos = await fetch('https://json-server-vercel-examenm6.vercel.app/ticketsResueltos');

        
        const resueltos = await guardaTicketsResueltos.json();

        setDades({
          ticketsPendientes: pendientes,
          ticketsResueltos: resueltos
        });
        //hacemos un set de los datos recibidos del api rest en la lista que previamente estaba vacia.

      } catch (error) {
        console.error('Error');
        // si algo fala con el catch mostramos por consola que ha sucedido un error.
      }
    };

    fetchData();
    // Llamamos a la funcion fetchData para entregar los datos
  }, []);
  

  return (
    <GlobalContext.Provider value={{ dades }}>
      {children}
    </GlobalContext.Provider>
  );

};



