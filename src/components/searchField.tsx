// SearchField.tsx
import React from 'react';
import { TextField, OutlinedInputProps, TextFieldProps, alpha, styled} from '@mui/material';

const StyledSearchField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true,  } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#ffffff' ,
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

interface SearchFieldProps {
    customProp?: string;
    label?: string;
    variant?: "standard" | "outlined" | "filled";
    fullWidth?: boolean;
    style?: React.CSSProperties;
  }


const SearchField: React.FC<SearchFieldProps> = (props) => {
  return (
    <StyledSearchField {...props} />
  );
};

export default SearchField;
