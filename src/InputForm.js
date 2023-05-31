import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/app/add', { num1, num2 });
    //   console.log('Response:', response);
      if (response.data && response.data.result !== undefined) {
        setResult(response.data.result);
      } else {
        console.error('Unexpected response format:', response);
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Num1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
        <label>
          Num2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default InputForm;