import React, { useState, useEffect } from 'react';

function Sample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This function will run after the component has rendered
    // and whenever the 'data' state changes
    fetchData();
  }, [data]);

  const fetchData = () => {
    // Simulating fetching data from an API and updating the 'data' state
    setTimeout(() => {
      setData([1, 2, 3, 4, 5]);
    }, 2000);
  };

  return (
    <div>
      <h2>Example Component</h2>
      <p>Data: {data.join(', ')}</p>
    </div>
  );
}

export default Sample;
