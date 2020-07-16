const ShoppingCentre = require("../models/shoppingCentres");

exports.shoppingCentres_get_all = async (req, res) => {
  try {
    const allCentres = await ShoppingCentre.find();
    res.status(200).json({
      data: {
        centres: allCentres
      }
    });
  } catch(err) {
    res.status(500).json({
      message: err
    });
  }
};

exports.shoppingCentres_add_new_one = (req, res, next) => {
  const shoppingCentre = new ShoppingCentre({
    name: req.body.name,
    address: req.body.address,
  });
  console.log(req.body);

  shoppingCentre
    .save()
    .then(result => {
      res.status(200).json({
        data: {
          message: "Shopping centre added!",
          result
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        data: {
          message: err
        }
      });
    });
};

exports.shoppingCentres_delete_exist_one = async (req, res) => {
  try {
    const removeCentre = await ShoppingCentre.deleteOne({ _id: req.body._id });
    res.status(200).json({
      data: {
        message: "Centre deleted!",
        removeCentre
      }
    });
  } catch (err) {
    res.status(500).json({
      data: {
        message: err
      }
    });
  }
};

exports.shoppingCentres_update_exist_one = async (req, res, next) => {
    try {
      const updateCentre = await ShoppingCentre.updateMany(
        { _id: req.body._id },
        {
          $set: {
            name: req.body.name,
            address: req.body.address
          }
        }
      );
      res.status(200).json({
        data: {
          message: "Update centre sccuessfully!",
          updateCentre
        }
      });
    } catch (err) {
      res.status(500).json({
        data: {
          message: err
        }
      });
    }
};