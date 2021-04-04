const Bootcamp = require("../models/Bootcamp");

// Get All bootcamps
// GET /api/v1/bootcamps
// Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// Get Single Bootcamp
// GET /api/v1/bootcamps/:id
// Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// Create New Bootcamp
// POST /api/v1/bootcamps/
// Private
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  try {
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// Update Bootcamp
// PUT /api/v1/bootcamp/:id
// Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamp ${req.params.id}` });
};

// Delete Bootcamp
// DELETE /api/v1/bootcamp/:id
// Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
