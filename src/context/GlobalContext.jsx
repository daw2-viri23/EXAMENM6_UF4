import React, { createContext, useState, useEffect } from 'react';

//creamos el contexto.
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // GlobalProvider da los datos a los componentes "hijo"

  const [array, setDades] = useState({
    ticketsPendientes: [],
    ticketsResueltos: []
  });
  // useState crea un estado con dos listas vacías donde se guardaran los datos del api rest subido en vercel

  useEffect(() => {
    const funcionFetch = async () => {
      // Definimos una función funcionFetch que obtendrá datos desde internet.
      
      try {
        const EnlaceApi1 = await fetch('https://json-server-vercel-examenm6.vercel.app/ticketsPendientes');
        // fetch es una función que obtiene datos desde una URL de la api rest subida al vercel previamente, usamos un await para esperar a q se reciban los datos para continuar

        const guardaTicketspendientes = await EnlaceApi1.json();
        // convertimos el EnlaceApi1 en un objeto de JS igual se hace con guardaTicketsResueltos

        const EnlaceApi2 = await fetch('https://json-server-vercel-examenm6.vercel.app/ticketsResueltos');
        const guardaTicketsResueltos = await EnlaceApi2.json();

        // Ordenar los tickets por fecha de más antiguo a más nuevo
        const ticketsPendientesOrdenados = guardaTicketspendientes.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        const ticketsResueltosOrdenados = guardaTicketsResueltos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

        setDades({
          ticketsPendientes: ticketsPendientesOrdenados,
          ticketsResueltos: ticketsResueltosOrdenados
        });
        //hacemos un set de los datos recibidos del api rest en la lista que previamente estaba vacia.

      } catch (error) {
        console.error('Error');
        // si algo falla con el catch mostramos por consola que ha sucedido un error.
      }
    };
    funcionFetch();
    // Llamamos a la funcion funcionFetch para entregar los datos
  }, []);

  return (
    <GlobalContext.Provider value={{ array }}>
      {children}
    </GlobalContext.Provider>
  );
};
