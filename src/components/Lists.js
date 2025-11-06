import React, { useEffect, useState, useRef } from 'react';

const Lists = () => {
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState([]);
  const ref = useRef();

  const handleSearch = () => {
    setSearch(
      subjects.filter((subject) => subject.name.toLowerCase().includes(ref.current.value.toLowerCase()))
    );
  }

  useEffect(() => {
    fetch('./assets/table.json')
      .then(response => response.json())
      .then(data => {
        setSubjects(data);
        //初期状態では全ての科目を表示
        setSearch(data);
      })
      .catch(error => console.error('Error loading the JSON file:', error));
  }, []);

  const degreeRange = (rate) => {
    if(rate < 1 || rate > 4) {
      return 'notyet ranged.';
    }
    return '★'.repeat(rate) + '☆'.repeat(4 - rate);
  };

  return (
    <div className="list-container">
      <form className="search-form">
        <label>
          <input ref={ref} placeholder='科目名で検索' type="text" maxLength={"35px"} onChange={handleSearch} />
        </label>
      </form>
      {search.map((subject, index) => (
        <div className="list-wrapper" key={index}>
          <img className="thumb-image" src="https://www.edarabia.com/wp-content/uploads/2018/05/kanazawa-institute-technology-nonoichi-japan.png" alt="Kanazawa Institute of Technology"/>
          {/* <p className="id">ID：{subject['id']}</p> */}
          <h3 className="list-name name">{subject.name}</h3>
          <p className="list-info examination">試験：<b>{subject['examination'] ? '有' : '無'}</b></p>
          <p className="list-info degree">難易度：{degreeRange(subject['degree'])}</p>
          <p className="list-description-title description"><b>概要：</b></p>
          <p className="description">{subject.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Lists;