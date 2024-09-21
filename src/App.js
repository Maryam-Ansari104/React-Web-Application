import React, { useState, useEffect } from 'react';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';
import './App.css';

const App = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);


  // Add new service
  const addService = (service) => {
    setServices([...services, service]);
  };


  // Delete service
  const deleteService = (id) => {
    setServices(services.filter((service, index) => index !== id));
  };

  // Update existing service
  const updateService = (id, updatedService) => {
    const updatedServices = services.map((service, index) =>
      index === id ?
     updatedService : service
    );

    setServices(updatedServices);
    setEditingService(null);
  };


  // Edit service
  const editService = (id) => {
    setEditingService({ ...services[id], id });
  };

  return (
    <div className="app">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        editingService={editingService} />

      <ServiceList
        services={services}
        deleteService={deleteService}
        editService={editService}  />
    </div>
    
  );
};

export default App;
