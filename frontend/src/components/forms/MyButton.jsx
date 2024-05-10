import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton(props) {
    const {label, type} = props
  return (
      <Button type={type} variant="outlined" className='myButton'>{label}</Button>
  );
}