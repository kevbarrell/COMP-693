const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <div>
      <h1>Employee Management App</h1>
      <ul>
        <li>Din Djarin</li>
        <li>Bo Katan</li>
        <li>Jango Fett</li>
        <li>Paz Vizla</li>
      </ul>
    </div>
  );
};

root.render(<App />);
