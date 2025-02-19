import { useState } from 'react';
import './index.css';

function App() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    
    const fetchGreeting = async () => {
        if (!name) {
            setGreeting('Name is required.');
            return;
        }
        try {
            const response = await fetch(`https://greating-app-backend.onrender.com/api/greet?name=${name}`);
            const data = await response.json();
            setGreeting(data.message || data.error);
        } catch (error) {
          console.log(error);
            setGreeting('Something wents wrong');
        }
    };

    return (
        <div className="container">
            <h1>Greeting App</h1>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={fetchGreeting}>Get Greeting</button>
            <h3>{greeting}</h3>
        </div>
    );
}

export default App;
