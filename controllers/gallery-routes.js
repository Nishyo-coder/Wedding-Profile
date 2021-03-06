const { Profile } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
      const profilesData = await Profile.findAll({});
      const profiles = profilesData.map((profile) => profile.get({ plain: true }));
      console.log(profiles)
      res.render('gallery',{profiles, logged_in:req.session.logged_in});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router