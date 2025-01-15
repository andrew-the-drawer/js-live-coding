import express from 'express';
import cors from 'cors';
import { createSession, filterSessionData, deleteSession, checkSessionExists } from './session.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
    const sessionId = createSession();
    if(!sessionId) {
        res.status(400).json({
            error: 'Session limit reached. Might need to restart the server'
        })
    }
    return res.status(201).json({ sessionId });
});

app.delete('/logout', (req, res) => {
    const sessionId = req.headers['x-session-id'];
    deleteSession(sessionId);
    return res.status(200).json({
        status: 'succeeded'
    });
});

app.get('/data', (req, res) => {
    const sessionId = req.headers['x-session-id'];
    const afterDateCriteria = req.query.afterDate;
    const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
    if (!checkSessionExists(sessionId)) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }
    const data = filterSessionData(sessionId, afterDateCriteria, limit);
    return res.status(200).json(data);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});