import React from 'react';

function MathPowerForm() {
  const callAPI = (base, exponent) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ "base": base, "exponent": exponent });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://cjevx0v8t2.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log('error', error));
  }

  return (
    <div>
      <h1>TO THE POWER OF MATH!</h1>
      <form>
        <label>Base number:</label>
        <input type="text" id="base" />
        <label>...to the power of:</label>
        <input type="text" id="exponent" />
        <button type="button" onClick={() => callAPI(document.getElementById('base').value, document.getElementById('exponent').value)}>CALCULATE</button>
      </form>
    </div>
  );
}

export default MathPowerForm;


ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
