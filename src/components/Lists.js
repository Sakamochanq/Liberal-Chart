import React, { useEffect, useState } from 'react';

const Lists = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('./assets/table.json')
      .then(response => response.json())
      .then(data => setSubjects(data))
      .catch(error => console.error('Error loading the JSON file:', error));
  }, []);

  return (
    <div className="list-container">
      {subjects.map((subject, index) => (
        <div className="list-wrapper" key={index}>
          {/* <p style={{marginBottom: "10px"}} class="rank-id">ID：{subject['rank-id']}</p> */}
          <h3 style={{marginTop: "10px", marginBottom:"20px"}} className="name">{subject.name}</h3>
          <p style={{marginBottom: "10px"}} className="inside-job">試験：<b>{subject['inside-job'] ? '有' : '無'}</b></p>
          <p style={{marginBottom: "10px"}} className="degree">難易度：{subject.degree}</p>
          <p style={{marginBottom: "10px"}} className="description">概要：{subject.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Lists;