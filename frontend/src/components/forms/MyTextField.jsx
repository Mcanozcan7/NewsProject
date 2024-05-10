import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../App.css';
import {Controller} from 'react-hook-form';

export default function MyTextFields(props) {
    const {label, name, control} =props
  return (
      <Controller
        name={name}
        control={control}
        render={({
          field:{onChange, value},
          fieldState:{error},
          formState,
        })=>(
          <TextField 
          id="standard-basic" 
          onChange={onChange}
          value={value}
          label={label} 
          variant="standard" 
          className={"myForm"}
          error={!!error}
          helperText={error?.message}
          />
        )}
      />


      
  );
}