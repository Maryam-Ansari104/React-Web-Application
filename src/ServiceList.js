import React from 'react';

const ServiceList = ({ services, deleteService, editService }) => {
  return (
    <div className="service-list">

      <h2>Available Services</h2>

      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (

        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-item">

                <h3>{service.name}</h3>

                <p>{service.description}</p>

                <p>Price: $ {service.price}</p>

                <button onClick={() => editService(index)}> Edit </button>


                <button onClick={() => deleteService(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceList;
