const authSessions = new Map();

function setUser(sessionToken, user) {
    authSessions.set(sessionToken, user);
}

function getUser(sessionToken) {
    return authSessions.get(sessionToken);
}

export {
    setUser,
    getUser
};
