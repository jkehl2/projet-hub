const redis = require('redis');

const client = redis.createClient();

module.exports = {

    read(key) {
        return new Promise((resolve, reject) => {
            client.get(key, (error, password) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    resolve(password);
                }
            });
        });
    },

    store(key, value) {
        return new Promise((resolve, reject) => {
            client.setex(key, 180, value, (error, status) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    resolve(status);
                }
            });
        });
    },

    has(key) {
        return new Promise((resolve, reject) => {
            client.exists(key, (error, result) => {
                if (error) {
                    console.log(error);
                    reject(error);
                    return;
                }

                resolve(result == 1);
            });
        });
    },

    flush() {
        return new Promise((resolve, reject) => {
            client.flushall((error, result) => {
                if (error) {
                    console.log(error);
                    reject(error);
                    return;
                }
                console.log("redis flushed");
                resolve(result == 1);
            });
        });
    },

    async wrapper(key,callback){
        const cached = await this.read(key);
        const valueAlreadyInCache = await this.has(key);
        if (!valueAlreadyInCache){
            result = await callback();
            await this.store(key, JSON.stringify(result));
            console.log(`caching ${key}`);
            return result;
        }else {
            let result = JSON.parse(cached);
            console.log(`cach found`);
            return result
        }
        // return callback();
    }



};