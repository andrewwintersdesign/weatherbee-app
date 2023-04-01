
import './App.css';
import { Layout } from './components/layout';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD500',
      contrastText: "000000"
    },
    secondary: {
      main: '#000000',
    }
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
   <Layout>Hello!</Layout>
   </ThemeProvider>
  );
}

export default App;
