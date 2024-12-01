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
    <div class="list-container">
      {subjects.map((subject, index) => (
        <div class="list-wrapper" key={index}>
          {/* <p style={{marginBottom: "10px"}} class="rank-id">ID：{subject['rank-id']}</p> */}
          <h3 style={{marginTop: "20px", marginBottom:"20px"}} class="name">{subject.name}</h3>
          <p style={{marginBottom: "10px"}} class="inside-job">試験：<b>{subject['inside-job'] ? '有' : '無'}</b></p>
          <p style={{marginBottom: "10px"}} class="degree">難易度：{subject.degree}</p>
          <p style={{marginBottom: "10px"}} class="description">概要：{subject.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Lists;