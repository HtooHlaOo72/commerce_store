import React from 'react';
import {theme} from '../utils/styles';
import { ThemeProvider } from '@mui/styles';

const TProvider = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
 
export default TProvider;