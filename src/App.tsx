
import './App.css';
import { Layout } from './components/layout';
import { createTheme, ThemeProvider } from '@mui/material';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Daily, Historical, Marine } from './page';

const extraBold = 800;
const bold = 700;
const medium = 500;
const regular = 400;

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
    h1: {
      fontWeight: extraBold,
    },
    h2: {
      fontWeight: extraBold,
    },
    h3: {
      fontWeight: extraBold,
    },
    h4: {
      fontWeight: extraBold,
    },
    h5: {
      fontWeight: extraBold,
    },
    h6: {
      fontWeight: extraBold,
    },
    subtitle1: {
      fontWeight: medium,
    },
    subtitle2: {
      fontWeight: medium,
    },
    body1: {
      fontWeight: regular,
    },
    body2: {
      fontWeight: bold,
    },
    button: {
      fontWeight: bold,
      textTransform: 'none'
    },
    caption:{
      fontWeight: bold
    }
    
    
  },
})

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Daily />,
    },
    {
      path: "/marine",
      element: <Marine />,
    },
    {
      path: "/historical",
      element: <Historical />,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
   <Layout><RouterProvider router={router} /></Layout>
   </ThemeProvider>
  );
}

export default App;
