import * as React from 'react';
import PropTypes from 'prop-types'; // Import edildi
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../../App.css'
import { FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

// MyPassField bileşeni
export default function MyPassField(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { label, name, control } = props;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl variant="standard" className='myForm'>
          <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={onChange}
            value={value}
            error={!!error}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText sx={{ color: "#d32f2f" }}>
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}

// props doğrulaması
MyPassField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
};
