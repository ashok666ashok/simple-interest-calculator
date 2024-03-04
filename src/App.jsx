import './App.css';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
import { useState } from 'react';


function App() {
   const [amount,setAmount]=useState(0);
   const [rate,setRate]=useState(0)
   const [year,setYear]=useState(0)
   const [result,setResult]=useState(0)
   

   const calculate=(e)=>{
    const output=((amount*rate*year)/100)
    setResult(output)

   }

   const reset=(e)=>{
    setAmount('')
    setYear('')
    setRate('')
    setResult(0)
   }

  return (
    <div className="App">
    <div className="container">
      <div className="header">
        <h1>Simple Interest Calculator</h1>
        <p>Calculate Your Simple Interest With Us.</p>
      </div>
      <div className="total">
        <h1>₹{result}</h1>
        <p>Your total interest</p>
      </div>
      <div className="form">
        <form>
        <div className="inp2">
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount" onChange={(e)=>setAmount(e.target.value)}
            value={amount||''}
          />
        </FormControl>
        </div>
<div className="inp1">
        <TextField
          id="outlined-multiline-flexible"
          label="Rate Of Interest"
          multiline
          maxRows={4}
          onChange={(e)=>setRate(e.target.value)}
          value={rate||''}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Year"
          multiline
          maxRows={4}
          onChange={(e)=>setYear(e.target.value)}
          value={year||''}

        />
        </div>
        
        </form>
        <div className="button">
        <Button variant='contained' size="medium" onClick={(e)=>calculate(e)}>Calculate</Button>
        <Button variant='contained' size="medium" onClick={(e)=>reset(e)}>Reset</Button>
        </div>
      </div>

    </div>

    </div>
  );
}

export default App;
