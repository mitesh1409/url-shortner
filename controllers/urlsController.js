import { nanoid } from "nanoid";

import { URL } from "../models/url.model.js";

async function listUrls(req, res) {
    const urls = await URL.find({ createdBy: req.user._id }).sort({ createdAt: -1 });
    res.render('urls/index', {
        urls,
        protocol: req.protocol,
        host: req.get('host')
    });
}

function showFormToGenerateShortUrl(req, res) {
    res.render('urls/generate');
}

async function generateShortUrl(req, res) {
  console.log('req.body', req.body);
  const originalUrl = req.body ? req.body.originalUrl ?? undefined : undefined;

  if (!originalUrl) {
    return res
      .status(400)
      .render('urls/generate', { error: 'Original URL is required' });
  }

  // Generate an 8-character unique ID
  const shortId = nanoid(8);

  await URL.create({
    shortId,
    originalUrl,
    createdBy: req.user._id
  });

  return res.redirect('/urls');
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
    showFormToGenerateShortUrl,
    generateShortUrl,
    redirectToOriginalUrl
};
