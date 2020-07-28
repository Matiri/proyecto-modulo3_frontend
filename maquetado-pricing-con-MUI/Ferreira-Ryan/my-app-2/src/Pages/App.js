import React from 'react';
import ReactDOM from 'react-dom';

// Components import

import ButtonAppBar from '../Components/Navbar.jsx';


function App() {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <ButtonAppBar />
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}
export default App;