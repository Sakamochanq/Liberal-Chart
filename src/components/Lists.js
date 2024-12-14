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
          <img className="thumb-image" src="https://www.edarabia.com/wp-content/uploads/2018/05/kanazawa-institute-technology-nonoichi-japan.png"></img>
          {/* <p style={{marginBottom: "10px"}} class="id">ID：{subject['id']}</p> */}
          <h3 style={{marginTop: "10px", marginBottom:"20px"}} className="name">{subject.name}</h3>
          <p style={{marginBottom: "10px"}} className="examination">試験：<b>{subject['examination'] ? '有' : '無'}</b></p>
          <p style={{marginBottom: "10px"}} className="degree">難易度：{degreeRange(subject['degree'])}</p>
          <p style={{marginTop: "20px", marginBottom: "7px"}} className="description"><b>概要：</b></p>
          <p className="description">{subject.description}</p>
          <br />
          <a href={subject['link']} target="_blank">過去問</a>
        </div>
      ))}
    </div>
  );
}

export default Lists;