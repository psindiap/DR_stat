// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



import React, { useState, useEffect } from "react";

// const App = () => {
//   const [result, setResult] = useState("");

//   const handleClick = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/predict");
//       const data = await response.json();
//       setResult(data.result);
//       console.log(data.result);
//     } catch (error) {
//       console.error(error);
//       console.log(error);

//     }
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Predict</button>
//       <p>Result: {result}</p>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    age: '',
    gender: '',
    dm_dur_cat: '',
    insulin: '',
    htn: '',
    bmi: '',
    hba1c: '',
    fbs_cat_new: '',
    sbp_cat: ''
  });

  const handleInputChange = event => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const [result, setResult] = useState(null);

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   const response = await fetch(`http://localhost:5000/predict?age=${inputs.age}&gender=${inputs.gender}&dm_dur_cat=${inputs.dm_dur_cat}&insulin=${inputs.insulin}&htn=${inputs.htn}&bmi=${inputs.bmi}&hba1c=${inputs.hba1c}&fbs_cat_new=${inputs.fbs_cat_new}&sbp_cat=${inputs.sbp_cat}`);
  //   const result = await response.json();
  //   console.log(result);
  // };

  const handleSubmit = async event => {
    event.preventDefault();
    // console.log(parseInt(inputs.age));
    // console.log(parseInt(inputs.gender));
    // console.log(parseInt(inputs.dm_dur_cat));
    // console.log(parseInt(inputs.insulin));
    // console.log(parseInt(inputs.htn));
    // console.log(parseInt(inputs.bmi));
    // console.log(parseInt(inputs.hba1c));
    // console.log(parseInt(inputs.fbs_cat_new));
    // console.log(parseInt(inputs.sbp_cat));
    if(Number.isNaN(parseInt(inputs.age))){
      alert("Age should be a number");
      return;
    }

    if(parseInt(inputs.age)<0 || parseInt(inputs.age)>100){
      alert("Age should be between 0 and 100");
      return;
    }

    if(Number.isNaN(parseInt(inputs.gender))){
      alert("Gender should be either 0 or 1");
      return;
    }
    
    if(!Number.isInteger(parseFloat(inputs.gender))){
      alert("Gender should be an Integer, not a Float.")
      return;
    }

    if(parseInt(inputs.gender)<0 || parseInt(inputs.gender)>1){
      alert("Gender should be 0 or 1");
      return;
    }

    if(Number.isNaN(parseInt(inputs.dm_dur_cat))){
      alert("DM Duration Category should be a number");
      return;
    }
    if(!Number.isInteger(parseFloat(inputs.dm_dur_cat))){
      alert("DM Duration Category should be an Integer, not a Float.")
      return;
    }
    if(inputs.dm_dur_cat<0 || inputs.dm_dur_cat>3){
      alert("DM Duration Category should be between 0 and 3");
      return;
    }
    if(Number.isNaN(parseInt(inputs.insulin))){
      alert("Insulin should be a number");
      return;
    }
    
    if(Number.isNaN(parseInt(inputs.htn))){
      alert("Hypertension should be a number");
      return;
    }

    if(!Number.isInteger(parseFloat(inputs.htn))){
      alert("Hypertension should be an Integer, not a Float.")
      return;
    }

    if(inputs.htn<0||inputs.htn>2){
      alert("Hypertension should be between 0 and 2");
      return;
    }

    if(Number.isNaN(parseInt(inputs.bmi))){
      alert("BMI should be a number");
      return;
    }

    if(inputs.bmi<0||inputs.bmi>100){
      alert("BMI should be between 0 and 100");
      return;
    }

    if(Number.isNaN(parseInt(inputs.hba1c))){
      alert("HBA1C should be a number");
      return;
    }
    
    if(Number.isNaN(parseInt(inputs.fbs_cat_new))){
      alert("FBS Category should be a number");
      return;
    }
    if(!Number.isInteger(parseFloat(inputs.fbs_cat_new))){
      alert("FBS Category should be an Integer, not a Float.")
      return;
    }

    if(inputs.fbs_cat_new<0||inputs.fbs_cat_new>3){
      alert("FBS Category should be between 0 and 3");
      return;
    }
    if(Number.isNaN(parseInt(inputs.sbp_cat))){
      alert("SBP Category should be a number");
      return;
    }
    if(!Number.isInteger(parseFloat(inputs.sbp_cat))){
      alert("SBP Category should be an Integer, not a Float.")
      return;
    }

    if(inputs.sbp_cat<0||inputs.sbp_cat>5){
      alert("SBP Category should be between 0 and 5");
      return;
    }

    // console.log(JSON.stringify({
    //   age: inputs.age,
    //   gender: inputs.gender,
    //   dm_dur_cat: inputs.dm_dur_cat,
    //   insulin: inputs.insulin,
    //   htn: inputs.htn,
    //   bmi: inputs.bmi,
    //   hba1c: inputs.hba1c,
    //   fbs_cat_new: inputs.fbs_cat_new,
    //   sbp_cat: inputs.sbp_cat
    // }));
    const response = await fetch(`https://rapp-qw2lesomka-em.a.run.app/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        age: inputs.age,
        gender: inputs.gender,
        dm_dur_cat: inputs.dm_dur_cat,
        insulin: inputs.insulin,
        htn: inputs.htn,
        bmi: inputs.bmi,
        hba1c: inputs.hba1c,
        fbs_cat_new: inputs.fbs_cat_new,
        sbp_cat: inputs.sbp_cat
      })
    });
    const res = await response.json();
    // setResult(res[0]);
    // console.log(res['prediction'][0]);
    setResult(res['prediction'][0]);
    // console.log(result);
  };
  

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>DR Detection</h2>
    <form className="form" onSubmit={handleSubmit}>
      <div>
      <label>
        Age :&nbsp;
        <input type="text" style={{margin:"10px"}} name="age" value={inputs.age} onChange={handleInputChange} />
      </label>
      </div>
      <div><label>
        Gender :&nbsp;
        <input type="text" style={{margin:"10px"}} name="gender" value={inputs.gender} onChange={handleInputChange} />
      </label></div>
      <div><label>
        DM Duration Category :&nbsp;
        <input type="text" style={{margin:"10px"}} name="dm_dur_cat" value={inputs.dm_dur_cat} onChange={handleInputChange} />
      </label></div>
      <div><label>
        Insulin :&nbsp;
        <input type="text" style={{margin:"10px"}} name="insulin" value={inputs.insulin} onChange={handleInputChange} />
      </label></div>
      <div><label>
        Hypertension :&nbsp;
        <input type="text" style={{margin:"10px"}} name="htn" value={inputs.htn} onChange={handleInputChange} />
      </label></div>
      <div><label>
        BMI :&nbsp;
        <input type="text" style={{margin:"10px"}} name="bmi" value={inputs.bmi} onChange={handleInputChange} />
      </label></div>
      <div><label>
        HbA1c :&nbsp;
        <input type="text" style={{margin:"10px"}} name="hba1c" value={inputs.hba1c} onChange={handleInputChange} />
      </label></div>
      <div><label>
        FBS Category New :&nbsp;
        <input type="text" style={{margin:"10px"}} name="fbs_cat_new" value={inputs.fbs_cat_new} onChange={handleInputChange} />
      </label></div>
      <div><label>
        SBP Category :&nbsp;
        <input type="text" style={{margin:"10px"}} name="sbp_cat" value={inputs.sbp_cat} onChange={handleInputChange} />
      </label></div>
      <button type="submit" style={{margin:"10px", border:"1px solid white"}}>Submit</button>
      <h3>Result : {result === 0 ? "DR Negative" : (result===1)?"DR Positive":""}</h3>
    </form>
    </div>
);
};

export default App;





