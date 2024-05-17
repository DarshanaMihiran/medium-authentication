const express = require('express');
const userController = require('../controllers/userController');
const { validateIdQuery, validateGetWithFiltersQuery } = require('../middlewares/inputValidationMiddleware');

const router = express.Router();

// Define routes and use controller methods
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users with filters, sort and pagination
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *         description: Filter criteria (e.g., genre=Action)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Field to sort by (e.g., release_date)
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *         description: Sort order (asc or desc)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', validateGetWithFiltersQuery, userController.get);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to get
 *     responses:
 *       200:
 *         description: A movie
 *       404:
 *         description: User not found
 */
router.get('/:id', validateIdQuery, userController.getById);

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "User object that needs to be added"
 *         required: true
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */
router.post('/create', userController.create);



module.exports = router;
