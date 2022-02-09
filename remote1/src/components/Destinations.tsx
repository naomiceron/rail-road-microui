import React, { useState, useEffect } from 'react';
import { List, arrayMove } from 'react-movable';
import { getDestinations } from '../api/TrainService';
import { updateDestination } from '../api/TrainService';

const Destinations = () => {
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetchTrain().catch((error) => console.log(error));
    } else {
      for (var i = 0; i < result.length; i++) {
        result[i].priority = i + 1;
        updateDestination(result[i], result[i].name, result[i].priority);
      }
    }
  }, [loading, result]);

  const fetchTrain = async () => {
    const response = await getDestinations();
    const data = response.data;
    setResult(data);
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '10px ',
        backgroundColor: '#F7F7F7',
        padding: '3em',
        display: 'inline-block',
      }}
    >
      {' '}
      <h3>Destination</h3>
      {!loading ? (
        <List
          lockVertically
          values={result.map((a: any) => a.name)}
          onChange={({ oldIndex, newIndex }) =>
            setResult(arrayMove(result, oldIndex, newIndex))
          }
          renderList={({ children, props, isDragged }) => (
            <ul
              {...props}
              style={{ padding: 0, cursor: isDragged ? 'grabbing' : undefined }}
            >
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected }) => (
            <li
              {...props}
              style={{
                ...props.style,
                padding: '1.5em',
                margin: '0.5em 0em',
                listStyleType: 'none',
                cursor: isDragged ? 'grabbing' : 'grab',
                border: '2px solid #CCC',
                boxShadow: '3px 3px #AAA',
                color: '#333',
                borderRadius: '5px',
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                backgroundColor: isDragged || isSelected ? '#EEE' : '#FFF',
                width: 250,
              }}
            >
              {value}
            </li>
          )}
        />
      ) : null}
    </div>
  );
};

export default Destinations;
