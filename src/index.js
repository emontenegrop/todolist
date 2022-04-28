import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';

// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOMClient.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);

// const rootElement = document.getElementById('root');
// const root = ReactDOMClient.createRoot(rootElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );