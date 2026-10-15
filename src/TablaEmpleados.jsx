import React from 'react';

function TablaEmpleados({ empleados }) {
  return (
    <table className="tabla-fea">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Puesto</th>
          <th>Departamento</th>
        </tr>
      </thead>
      <tbody>
        {empleados.length > 0 ? (
          empleados.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nombre}</td>
              <td>{emp.apellido}</td>
              <td>{emp.puesto}</td>
              <td>{emp.departamento}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No se encontraron empleados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TablaEmpleados;