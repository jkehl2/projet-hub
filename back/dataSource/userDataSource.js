const { DataSource } = require('apollo-datasource');
const DataLoader = require('dataloader');
const cache = require('./cache');


class UserDataSource extends DataSource {

    constructor() {
        super();
    }
    initialize(config) {
        this.context = config.context;
        this.client = config.context.sqlClient;
    }

    async findAllUsers() {
        const result = await this.client.query('SELECT * FROM users');
        return result.rows;
    }

    async findUserById(userId) {
        const cacheKey = "user"+ userId.toString();
        return cache.wrapper(cacheKey,async () => {
            await this.userLoader.clear(userId)
            console.log(`-- Adding ${userId} to category dataloader`);
            return await this.userLoader.load(userId);
        });
    };

    async insertUser(user) {
        const savedUser = await this.client.query(
            `INSERT INTO users
                (name, email, password)
             VALUES ($1, $2, $3) RETURNING *`,
            [user.name, user.email, user.password]
             );
        return savedUser.rows[0];
    };

    async editUser(user) {
        const savedUser = await this.client.query(`
            UPDATE users
            SET 
                name = $1,
                email = $2,
                password = $3,
                avatar = $4
            WHERE
                id = $5
            RETURNING *
             `,
            [user.name, user.email, user.password, user.avatar, user.id]
             );
        return savedUser.rows[0];
    };

    async deleteUser(id) {
        const savedUser = await this.client.query(`
            DELETE FROM users
            WHERE
                id = $1
             `,
            [id]
             );
        return {msg: "deletion completed"};
    };

    userLoader = new DataLoader(async (ids) => {
        console.log('Running batch function user Loader with', ids);
       
        const result = await this.client.query(
            'SELECT * FROM users WHERE id = ANY($1)',
            [ids]);
        const data = ids.map(id => {
            return result.rows.find( author => author.id == id);
        });
        return data;
    });


}

module.exports = UserDataSource;