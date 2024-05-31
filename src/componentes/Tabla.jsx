import React, { useState } from 'react';
import TablaPendientes from './TablaPendientes';
import TablaResueltos from './TablaResueltos';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, useDisclosure } from "@nextui-org/react";

const Tabla = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ticket, setTicket] = useState({});

  return (
    <>
      <main className="container mt-5">
        <h1>Administración de incidencias</h1>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mt-5">Tickets pendientes</h2>
          <Button onPress={onOpen} color="primary">Añadir Ticket</Button>
        </div>
        <TablaPendientes />
        <h2 className="mt-5">Tickets resueltos</h2>
        <TablaResueltos />
      </main>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Añadir Ticket</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Código"
                placeholder="Introduce el código"
              />
              <Input
                label="Fecha"
                placeholder="Introduce la fecha"
                type="date"
              />
              <Input
                label="Aula"
                placeholder="Introduce el aula"
              />
              <Input
                label="Grupo"
                placeholder="Introduce el grupo"
              />
              <Input
                label="Ordenador"
                placeholder="Introduce el ordenador"
              />
              <Input
                label="Descripción"
                placeholder="Introduce la descripción"
              />
              <Input
                label="Alumno"
                placeholder="Introduce el nombre del alumno"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={() => onOpenChange(false)}>
                Cerrar
              </Button>
              <Button color="primary" onPress={() => console.log(ticket)}>
                Añadir Ticket
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Tabla;
