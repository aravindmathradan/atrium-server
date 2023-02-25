const CustomAPIError = require('../utils/errors/custom-error');
const bucket = require('../datasources/firebase-cloud-storage');

exports.getStructureMap = async (req, res, next) => {
  try {
    const file = bucket.file('BuildingModels/buildingmap.json');
    const [fileContents] = await file.download();

    res.json(JSON.parse(fileContents.toString()));
  } catch {
    throw new CustomAPIError('Failed to fetch building map', 404);
  }
};

exports.generateSignedUrl = async (req, res, next) => {
  try {
    const file = bucket.file(`BuildingModels/${req.url.slice(1)}/scene.glb`);
    const options = {
      version: 'v4',
      action: 'read',
      expires: Date.now() + 1000 * 60 * 60, // 1 hour
    };
    const [url] = await file.getSignedUrl(options);
    res.send(url);
  } catch {
    throw new CustomAPIError('Failed to generate building url', 401);
  }
};
