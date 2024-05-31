import React, { useState } from "react";
import { Button, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@nextui-org/react";

const Tabla = () => {
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

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
            <tr>
              <td>123459</td>
              <td>18/04/2023</td>
              <td>T6</td>
              <td>DAW1</td>
              <td>PC3</td>
              <td>Error de impresora</td>
              <td>Ana Martínez</td>
              <td>
                <div className="d-flex space-x-2">
                  <Tooltip content="Resolver">
                    <Button color="success" auto>Resolver</Button>
                  </Tooltip>
                  <Tooltip content="Editar">
                    <Button color="warning" auto>Editar</Button>
                  </Tooltip>
                  <Tooltip content="Ver comentarios">
                    <Button color="success" auto>Ver comentarios</Button>
                  </Tooltip>
                  <Tooltip color="error" content="Eliminar">
                    <Button color="warning" auto>Borrar</Button>
                  </Tooltip>
                </div>
              </td>
            </tr>
            {/* Repetir filas según sea necesario */}
          </tbody>
        </table>

        <h2 className="mt-5">Tickets resueltos</h2>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Fecha Resuelto</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123457</td>
              <td>16/04/2023</td>
              <td>15/05/2023</td>
              <td>T7</td>
              <td>DAW2</td>
              <td>PC1</td>
              <td>Problema de conexión a Internet</td>
              <td>Maria López</td>
            </tr>
            {/* Repetir filas según sea necesario */}
          </tbody>
        </table>
      </main>

     
    </>
  );
};

export default Tabla;
