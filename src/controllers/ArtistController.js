const Controller = require('./Controller');
const {ArtistRepository} = require("./../repositories");
const ArtistOutputTransformer = require("../transformers/artist/output");

class ArtistController extends Controller {

    async index(req, res) {
        const pagination = this.extractPagination(req)
        const data = await ArtistRepository
            .setTransformer(ArtistOutputTransformer)
            .paginate(pagination.perPage, pagination.page);

        this.sendResponse(res, data);
    }

    async show(req, res) {
        const id = req.params.id;
        const data = await ArtistRepository
            .setTransformer(ArtistOutputTransformer)
            .find(id);

        this.sendResponse(res, data);
    }

    async search(req, res) {
        const query = req.query.q;
        if (!query) {
            return this.sendResponse(res, null);
        }

        const artist = await ArtistRepository.search(query)
        this.sendResponse(res, artist);
    }
}

module.exports = ArtistController;
