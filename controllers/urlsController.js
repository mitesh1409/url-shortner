import { URL } from "../models/url.model.js";

async function listUrls(req, res) {
    const urls = await URL.find({}).sort({ createdAt: -1 });
    res.render('urls/index', { urls });
}

async function redirectToOriginalUrl(req, res) {
  const shortId = req.params.shortId;

  const urlEntry = await URL.findOne({ shortId });

  if (!urlEntry) {
    return res
      .status(404)
      .render('404-not-found');
  }

  // Log the visit
  urlEntry.visitHistory.push({ timestamp: new Date() });
  await urlEntry.save();

  return res.redirect(urlEntry.originalUrl);
}

export {
    listUrls,
    redirectToOriginalUrl
};
