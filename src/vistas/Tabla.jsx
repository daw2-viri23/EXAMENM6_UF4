import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Tabla = () => {
  const { ticketsPendientes, ticketsResueltos } = useContext(GlobalContext);

  return (
    <>
      <main className="container mt-5">
        <h1>Administración de incidencias</h1>
        <h2 className="mt-5">Tickets pendientes</h2>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ticketsPendientes.map((ticket) => (
              <tr key={ticket.codigo}>
                <td>{ticket.codigo}</td>
                <td>{ticket.fecha}</td>
                <td>{ticket.aula}</td>
                <td>{ticket.grupo}</td>
                <td>{ticket.ordenador}</td>
                <td>{ticket.descripcion}</td>
                <td>{ticket.alumno}</td>
                <td>
                  <div className="d-flex space-x-2">
                    <button className="btn btn-success" title="Resolver ticket">Resolver</button>
                    <button className="btn btn-warning" title="Añadir comentario">Añadir comentario</button>
                    <button className="btn btn-info" title="Ver comentarios">Ver comentarios</button>
                    <button className="btn btn-danger" title="Eliminar ticket">Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-5">Tickets resueltos</h2>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Fecha resuelto</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ticketsResueltos.map((ticket) => (
              <tr key={ticket.codigo}>
                <td>{ticket.codigo}</td>
                <td>{ticket.fecha}</td>
                <td>{ticket.fecha_resuelto}</td>
                <td>{ticket.aula}</td>
                <td>{ticket.grupo}</td>
                <td>{ticket.ordenador}</td>
                <td>{ticket.descripcion}</td>
                <td>{ticket.alumno}</td>
                <td>
                  <div className="d-flex space-x-2">
                    <button className="btn btn-info" title="Ver comentarios">Ver comentarios</button>
                    <button className="btn btn-danger" title="Eliminar ticket">Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Tabla;
