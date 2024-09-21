import React, { useState, useEffect } from 'react';

const ServiceForm = ({ addService, updateService, editingService }) => {
  const [service, setService] = useState({
    name: '',
    description: '',
    price: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingService) {
      setService(editingService);
      setIsEditing(true);
    } 
    else {
      setService({ name: '', description: '', price: '' });
      setIsEditing(false);
    }
  }, [editingService]);

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!service.name || !service.description || !service.price) {
      alert('Please fill all fields');

      return;
    }

    if (isEditing) {
      updateService(editingService.id, service);
    }
     else {
      addService(service);
    }

    setService({ name: '', description: '', price: '' });
  };

  return (

    <form onSubmit={handleSubmit} className="service-form">
      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={service.name}
        onChange={handleChange}/>


      <textarea
        name="description"
        placeholder="Service Description"
        value={service.description}
        onChange={handleChange} />


      <input
        type="number"
        name="price"
        placeholder="Service Price"
        value={service.price}
        onChange={handleChange}/>

        
      <button type="submit">{isEditing ? 'Update' : 'Add'} Service</button>
    </form>
  );
};

export default ServiceForm;
