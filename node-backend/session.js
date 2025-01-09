import crypto from 'node:crypto';

const sessionDB = {};

const generateRandomData = () => {
    // random count from 70 to 110
    const count = Math.floor(Math.random() * 40) + 70;
    
    const data = [];
    while (data.length < count) {
        const groupSize = Math.floor(Math.random() * 5) + 3; // group size between 3 and 7
        const date = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString();
        for (let i = 0; i < groupSize && data.length < count; i++) {
            data.push({
                name: crypto.randomBytes(8).toString('hex'),
                date: date
            });
        }
    }
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    return data;
}

const createSession = () => {
    const sessionId = crypto.randomBytes(32).toString('hex');

    sessionDB[sessionId] = {
        data: generateRandomData(),
    };

    return sessionId;
}

const deleteSession = (sessionId) => {
    delete sessionDB[sessionId];
}

const checkSessionExists = (sessionId) => {
    return !!sessionDB[sessionId];
}

const filterSessionData = (sessionId, afterDateCriteria, limit) => {
    const session = sessionDB[sessionId];
    if(!session) {
        return [];
    }
    const data = session.data;
    if(!afterDateCriteria) {
        return data.slice(0, limit);
    }
    const index = data.findIndex(item => new Date(item.date) >= new Date(afterDateCriteria));
    if (index === -1) {
        return [];
    }
    return data.slice(index, index + limit);
}

export { filterSessionData, createSession, deleteSession, checkSessionExists };
