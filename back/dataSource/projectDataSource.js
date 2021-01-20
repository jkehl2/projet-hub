const { DataSource } = require('apollo-datasource');
const DataLoader = require('dataloader');
const cache = require('./cache');


class ProjectDataSource extends DataSource {

    constructor() {
        super();
    }

    // Dans la DataSource on doit obligatoirement implémenter une méthode
    // initialize qui sera appelé par notre serveur apollo pour faire de
    // "l'injection de dépendance"
    initialize(config) {
        // config contiendra 2 propriété
        // - context qui servira à faire passer les dépendances
        // - cache pour la gestion interne
        this.context = config.context;
        this.client = config.context.sqlClient;
    }

    async findAllProjects() {
        const result = await this.client.query('SELECT * FROM projects');
        return result.rows;
    }

    async findProjectById(projectId) {
        const result = await this.client.query('SELECT * FROM projects WHERE id = $1', [projectId]);

        if (result.rowCount === 0) {
            return undefined;
        }

        return result.rows[0];
    }

    async findProjectsByGeo(lat, long) {
        // await this.projectsByGeoLoader.clear(lat, long);
        // console.log(`-- Adding ${lat, long} to project by geo dataloader`);
        // return await this.projectsByGeoLoader.load(lat, long);
        
        const cacheKey = lat.toString() + long.toString();
        // const cached = await cache.read(cacheKey);
        // result = JSON.parse(cached);
        // if (result == undefined){
        //     result = await this.client.query(`SELECT * FROM projects 
        //     WHERE west < $1
        //     AND east > $1
        //     AND north < $2 
        //     AND south > $2
        //     `, [lat, long]);

        //     if (result.rowCount === 0) {
        //         return undefined;
        //     }
            
        //     await cache.store(cacheKey, JSON.stringify(result));

        //     console.log(`caching ${cacheKey}`);


        // } else {
        //     console.log("cache found");
        // }

        // return result.rows;
        const results = await cache.wrapper(cacheKey,async () => {
            const result = await this.client.query(`SELECT * FROM projects 
            WHERE west < $1
            AND east > $1
            AND north < $2 
            AND south > $2
            `, [lat, long]);

            if (result.rowCount === 0) {
                return undefined;
            }
            
            return result

        })
        return results.rows;
    }





}

module.exports = ProjectDataSource;