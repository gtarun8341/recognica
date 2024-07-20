// src/components/Records.js
import React from 'react';

function Records() {
  const records = [
    { id: 1, title: 'Record 1', description: 'Description for Record 1' },
    { id: 2, title: 'Record 2', description: 'Description for Record 2' },
    { id: 3, title: 'Record 3', description: 'Description for Record 3' },
    // Add more records as needed
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4">Records</h1>
      <div className="list-group">
        {records.map(record => (
          <div key={record.id} className="list-group-item list-group-item-action">
            <h5 className="mb-1">{record.title}</h5>
            <p className="mb-1">{record.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Records;
