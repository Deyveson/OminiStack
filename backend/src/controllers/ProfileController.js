const connection = require('../database/connection');

module.exports = {
    async index (req, res) {
        const org_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', org_id)
            .select('*')

        return res.json(incidents)
    }
}