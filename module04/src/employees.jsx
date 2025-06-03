import React from 'react';
import ReactDOM from 'react-dom/client';
import EmployeeList from './EmployeeList.jsx';

const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>
);
