import { useState } from 'react';
import TablaEmpleados from './TablaEmpleados';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState('');

  const listaEmpleados = [
    { id: 1, nombre: 'Marc', apellido: 'Schaub', puesto: 'Desarrollador', departamento: 'IT' },
    { id: 2, nombre: 'Juan', apellido: 'Perez', puesto: 'Contador', departamento: 'Finanzas' },
    { id: 3, nombre: 'Ana', apellido: 'Gomez', puesto: 'Gerente', departamento: 'RRHH' },
    { id: 4, nombre: 'Luis', apellido: 'Martinez', puesto: 'Soporte', departamento: 'IT' }
  ];

  const empleadosFiltrados = listaEmpleados.filter((emp) =>
    emp.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    emp.puesto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor-principal">
      <h1 className="encabezado-basico">SISTEMA DE REGISTRO DE EMPLEADOS</h1>
      
      <div className="caja-busqueda">
        <label>Buscar empleado: </label>
        <input 
          type="text" 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          placeholder="Escriba nombre o puesto..."
        />
      </div>

      <TablaEmpleados empleados={empleadosFiltrados} />
    </div>
  );
}

export default App;