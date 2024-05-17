const jwt = require('jsonwebtoken');
const environment = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./env/env.${environment}` });

function verifyToken(request, response, next) {
    const authzHeader = request.headers['authorization']
    const accessToken = authzHeader && authzHeader.split(' ')[1]
    if (accessToken == null) {
        return response.status(401).send();
    } else {
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
            if (error) {
                response.status(403)
            } else {
                request.user = user
                next()
            }
        })
    }
}

module.exports = { verifyToken };
