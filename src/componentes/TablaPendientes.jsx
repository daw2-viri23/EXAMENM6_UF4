import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TablaPendientes = () => {
  const { dades } = useContext(GlobalContext);
  const { ticketsPendientes } = dades;

  return (
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
        {ticketsPendientes.map(ticket => (
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
  );
};

export default TablaPendientes;
