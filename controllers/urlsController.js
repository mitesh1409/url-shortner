import { URL } from "../models/url.model.js";

async function listUrls(req, res) {
    const urls = await URL.find({}).sort({ createdAt: -1 });
    res.render('urls/index', { urls });
}

export {
    listUrls
};
