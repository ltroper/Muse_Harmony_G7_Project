const {csrfProtection, asyncHandler} = require('./util')
const {check, validationResult} = require('express-validator');
const db = require('../db/models');
const router = express.Router();
const bcrypt = require('bcryptjs')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken = req.csrfToken(),
  });
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({max: 50})
    .withMessage('Email must be less than 50 characters'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({max: 50})
    .withMessage('Password must be less than 50 characters'),
];

router.post('/login', csrfProtection,
loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let errors = [];

  const validateErrors = validationResult(req);

  if(validateErrors.isEmpty()){
    const user = await db.User.findOne({where: {email}});

    if (user !== null){
      const passwordMatch = await bcrypt.compare(password, user.hashPassword.toString());
      if (passwordMatch){
        return res.redirect('./')
      }
    }

    errors.push('Login failed for the provided email address and password');

  }
  else {
    errors = validateErrors.array().map((error) => error.msg);
  }

  res.render('user-login', {
    title: 'Login',
    email,
    errors,
    csrfToken: req.csrfToken()
  });


}));

module.exports = router;
