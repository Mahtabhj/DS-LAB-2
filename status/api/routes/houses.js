// const router = require("express").Router();
// const User = require("../models/User");
// const House = require("../models/House");

// //CREATE House
// router.post("/", async (req, res) => {
//   const newHouse = new House(req.body);
//   try {
//     const savedHouse = await newHouse.save();
//     res.status(200).json(savedHouse);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //UPDATE house
// router.put("/:id", async (req, res) => {
//   try {
//     const house = await House.findById(req.params.id);
//     if (house.username === req.body.username) {
//       try {
//         const updatedHouse = await House.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedHouse);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can update only your house!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //DELETE house
// router.delete("/:id", async (req, res) => {
//   try {
//     const house = await House.findById(req.params.id);
//     if (house.username === req.body.username) {
//       try {
//         await house.delete();
//         res.status(200).json("house has been deleted...");
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can delete only your house!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET house
// router.get("/:id", async (req, res) => {
//   try {
//     const house = await House.findById(req.params.id);
//     res.status(200).json(house);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET ALL houseS
// router.get("/", async (req, res) => {
//   const username = req.query.user;
//   // const catName = req.query.cat;
//   try {
//     let houses;
//     if (username) {
//       houses = await House.find({ username });
//     } 
//     // else if (catName) {
//     //   houses = await House.find({
//     //     categories: {
//     //       $in: [catName],
//     //     },
//     //   });
//     // } 
//     else {
//       houses = await House.find();
//     }
//     res.status(200).json(houses);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
const router = require("express").Router();
const User = require("../models/User");
const House = require("../models/House");

//CREATE House
router.post("/", async (req, res) => {
  const newHouse = new House(req.body);
  try {
    const savedHouse = await newHouse.save();
    res.status(200).json(savedHouse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE house
router.put("/:id", async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (house.username === req.body.username) {
      try {
        const updatedHouse = await House.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedHouse);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your house!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE house
router.delete("/:id", async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (house.username === req.body.username) {
      try {
        await house.delete();
        res.status(200).json("house has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your house!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET house
router.get("/:id", async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    res.status(200).json(house);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL houseS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let houses;
    if (username) {
      houses = await House.find({ username });
    } else if (catName) {
      houses = await House.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      houses = await House.find();
    }
    res.status(200).json(houses);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;