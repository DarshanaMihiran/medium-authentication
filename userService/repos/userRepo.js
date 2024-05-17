const User = require('../models/userModel');

class userRepo {
    async getById(id) {
        return await User.find({_id : id});
    }

    async getAllUsers(query) {
        return await Movie.find(query);
    }

    async get(filters, sort, order, page, limit) {
        const query = {};

        // Apply filters
        if (filters) {
            const filterArray = filters.split('&');
            filterArray.forEach(filter => {
                const [key, value] = filter.split('=');
                query[key] = value;
            });
        }

        // Apply sorting
        let sortQuery = {};
        if (sort) {
            sortQuery[sort] = order === 'desc' ? -1 : 1;
        }

        try {
            const users = await User.find(query)
                .sort(sortQuery)
                .skip((page - 1) * limit)
                .limit(limit);
            return users;
        } catch (error) {
            throw new Error('Failed to fetch movies');
        }
    }

    async create(userData) {
        try {
            const user = new Movie(userData);
            await user.save();
            return user;
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }
}

module.exports = new userRepo();