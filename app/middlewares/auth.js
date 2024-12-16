const { UnauthenticatedError, UnautorizhedError } = require('../errors');
const { isTokenValid } = require('../utils/jwt');

const authenticateUser = async (req, res, next) => {
    try {
        let token;
        const authHeader = req.headers.authorization;

        if(authHeader && authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1];
        }

        if(!token) {
            throw new UnauthenticatedError('Authentication Invalid');
        }

        const payload = isTokenValid({ token });

        req.user = {
            email : payload.email,
            role : payload.role,
            name : payload.name,
            organizer : payload.organizer,
            id : payload.userId,
        };

        next();
    } catch (error) {
        next(error);
    }
};

const authorizedRoles = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            throw new UnautorizhedError('Unauthorized to access this route');
        }
        next();
    };
};

module.exports = { authenticateUser, authorizedRoles }