import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function App() {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [playerAge, setPlayerAge] = useState('');
  const [playerTeam, setPlayerTeam] = useState('');

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/players');
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const addPlayer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/players', {
        name: playerName,
        age: playerAge,
        country: playerTeam,
      });
      setPlayers([...players, response.data]);
      setPlayerName('');
      setPlayerAge('');
      setPlayerTeam('');
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Cricket Players</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={addPlayer}>
            <Form.Group controlId="playerName">
              <Form.Label>Player Name</Form.Label>
              <Form.Control type="text" placeholder="Enter player name" value={playerName} onChange={e => setPlayerName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="playerAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" placeholder="Enter player age" value={playerAge} onChange={e => setPlayerAge(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="playerTeam">
              <Form.Label>Team</Form.Label>
              <Form.Control type="text" placeholder="Enter team" value={playerTeam} onChange={e => setPlayerTeam(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Player
            </Button>
          </Form>
        </Col>
        <Col>
          <ul className="list-group">
            {players.map(player => (
              <li key={player.id} className="list-group-item">
                {player.name}, {player.age}, {player.country}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
