import React from 'react';
import TablaPendientes from './TablaPendientes';
import TablaResueltos from './TablaResueltos';

const Tabla = () => {
  return (
    <>
      <main className="container mt-5">
        <h1>Administración de incidencias</h1>
        <h2 className="mt-5">Tickets pendientes</h2>
        <TablaPendientes />
        <h2 className="mt-5">Tickets resueltos</h2>
        <TablaResueltos />
      </main>
    </>
  );
};

export default Tabla;
