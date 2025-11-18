import { nanoid } from "nanoid";
import { URL } from "../models/url.model.js";

async function generateShortUrl(req, res) {
  const originalUrl = req.body.originalUrl;

  if (!originalUrl) {
    return res
      .status(400)
      .json({
        status: 'Bad Request',
        errors: [
            'Original URL is required'
        ]
    });
  }

  // Generate an 8-character unique ID
  const shortId = nanoid(8);

  await URL.create({
    shortId,
    originalUrl
  });

  return res
    .status(201)
    .json({
        status: 'Created',
        shortUrl: `${req.protocol}://${req.get('host')}/${shortId}`
    });
}

export {
    generateShortUrl
};
