const userRepo = require('../repos/userRepo');

class userService {
    async get(filter, sort, order, page, limit) {
        return await userRepo.get(filter, sort, order, page, limit);
    }
   
    async getById(id) {
        return await userRepo.getById(id);
    }

    async createUser(username, firstname, lastname, password) {
        try {         
            // Call the repository to create the movie
            console.log(year);
            const createdUser = await userRepo.create({
                username, firstname, lastname, password
            });
            return createdUser;
        } catch (error) {
            throw new Error(`Error creating movie: ${error.message}`);
        }
    }
}

module.exports = new userService();