import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Button } from "@nextui-org/react";
import { EditIcon } from "lucide-react";
import { DeleteIcon } from "lucide-react";
import { EyeIcon } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";

const columns = [
  { name: "Título", uid: "titulo" },
  { name: "Fecha", uid: "fecha" },
  { name: "Experiencia", uid: "experiencia" },
  { name: "Acciones", uid: "actions" },
];

const Tabla = () => {
  const { historias, setDataHistoria, updateHistoria, deleteHistoria } = useGlobalContext();
  const [selectedHistoria, setSelectedHistoria] = useState(null);
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  const handleDetails = (historia) => {
    setSelectedHistoria(historia);
    setDetailsOpen(true);
  };

  const handleEdit = (historia) => {
    setSelectedHistoria(historia);
    setEditOpen(true);
  };

  const handleDelete = (id) => {
    deleteHistoria(id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedHistoria((prev) => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    updateHistoria(selectedHistoria);
    setEditOpen(false);
  };

  const renderCell = (historia, columnKey) => {
    const cellValue = historia[columnKey];

    switch (columnKey) {
      case "titulo":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "fecha":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm">{cellValue}</p>
          </div>
        );
      case "experiencia":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm">{cellValue}</p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalles">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleDetails(historia)}>
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar historia">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleEdit(historia)}>
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar historia">
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleDelete(historia.id)}>
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  return (
    <>
      <Table aria-label="Tabla de Historias" className="w-full">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={historias}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Modal para Detalles */}
      <Modal isOpen={isDetailsOpen} onOpenChange={() => setDetailsOpen(false)} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Detalles de la Historia</ModalHeader>
          <ModalBody>
            {selectedHistoria && (
              <>
                <p><strong>Título:</strong> {selectedHistoria.titulo}</p>
                <p><strong>Fecha:</strong> {selectedHistoria.fecha}</p>
                <p><strong>Experiencia:</strong> {selectedHistoria.experiencia}</p>
                <p><strong>Comentarios:</strong> {selectedHistoria.comentarios}</p>
                <p><strong>Imagen:</strong> <img src={selectedHistoria.imagen} alt={selectedHistoria.titulo} /></p>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={() => setDetailsOpen(false)}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal para Editar */}
      <Modal isOpen={isEditOpen} onOpenChange={() => setEditOpen(false)} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Editar Historia</ModalHeader>
          <ModalBody>
            {selectedHistoria && (
              <>
                <Input
                  autoFocus
                  label="Título"
                  placeholder="Introduce el título"
                  variant="bordered"
                  name="titulo"
                  value={selectedHistoria.titulo}
                  onChange={handleInputChange}
                />
                <Input
                  label="Fecha"
                  placeholder="Introduce la fecha"
                  type="date"
                  variant="bordered"
                  name="fecha"
                  value={selectedHistoria.fecha}
                  onChange={handleInputChange}
                />
                <Input
                  label="Experiencia"
                  placeholder="Introduce la experiencia"
                  variant="bordered"
                  name="experiencia"
                  value={selectedHistoria.experiencia}
                  onChange={handleInputChange}
                />
                <Input
                  label="Comentarios"
                  placeholder="Introduce los comentarios"
                  variant="bordered"
                  name="comentarios"
                  value={selectedHistoria.comentarios}
                  onChange={handleInputChange}
                />
                <Input
                  label="Imagen"
                  placeholder="Introduce la URL de la imagen"
                  variant="bordered"
                  name="imagen"
                  value={selectedHistoria.imagen}
                  onChange={handleInputChange}
                />
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={() => setEditOpen(false)}>
              Cancelar
            </Button>
            <Button color="primary" onPress={saveChanges}>
              Guardar Cambios
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Tabla;
