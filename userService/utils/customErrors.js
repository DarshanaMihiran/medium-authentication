class NotFoundException extends Error {
    constructor(type) {
        super(`${type} records not found`);
        this.name = `${type}NotFoundException`;
        this.statusCode = 404;
    }
}

class InvalidCredentialsException extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidCredentialsException';
        this.statusCode = 401;
    }
}

class DatabaseException extends Error {
    constructor(message) {
        super(message);
        this.name = 'DatabaseException';
        this.statusCode = 500;
    }
}

module.exports = {
    NotFoundException,
    InvalidCredentialsException,
    DatabaseException
};
