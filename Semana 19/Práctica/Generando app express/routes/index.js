var express = require("express");
var router = express.Router();
const data = require("../userData");
const methods = require("../methods");
const fs = require("fs");
const User = require("../models/user");

//rutas
const registerRoute = "../views/pages/register";
const loginRoute = "../views/pages/login";
const homeRoute = "../views/pages/home";
const expressRoute = "../views/pages/express";

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Programación Computacional IV" });
});

router.get("/home", function (req, res) {
  if(req.user){
    res.render(homeRoute, {title: "Bienvenido", userName: req.user.fullName});
  } else {
    res.render(loginRoute, {
      message: "Inicie sesión para continuar",
      messageClass: "alert-danger"
    })
  }
});

router.get("/expressjs", function (req, res) {
  res.render(expressRoute);
});

router.get("/register", (req, res) => {
  res.render(registerRoute);
});

router.get("/login", (req, res) => {
  res.render(loginRoute);
});

router.post("/register", async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  try {
    //verificar si los password coinciden
    if (password === confirmPassword) {
      //validar si el correo ya está registrado
      /*if (data.data.find((dat) => dat.email === email)) {
      res.render(registerRoute, {
        message: "El usuario ya está registrado",
        messageClass: "alert-danger",
      });
    }
    //encriptar el password
    const pHash = methods.getHashedPassword(password);

    //almacenar los datos
    data.data.push({
      fullName,
      email,
      password: pHash,
    });

    //guardar los datos en el archivo
    var jsonData = JSON.stringify(data.data);
    jsonData = `const data = ${jsonData} 
    
    module.exports = {
      data
  }`;

    fs.writeFile("userData.js", jsonData, (err) => {
      if (err) throw err;
    });

    res.render(loginRoute, {
      message: "Registro Completo. Inicie sesión",
      messageClass: "alert-success",
    });
    */
      //validar si el correo existe
      user = await User.findOne({ email: email }).then((user) => {
        if (user) {
          res.render(registerRoute, {
            message: "El usuario ya está registrado",
            messageClass: "alert-danger",
          });
        } else {
          const hashedPassword = methods.getHashedPassword(password);
          const userDB = new User({
            fullName: fullName,
            email: email,
            password: hashedPassword,
          });
          userDB.save();

          res.render(loginRoute, {
            message: "El registro se ha completado",
            messageClass: "alert-success",
          });
        }
      });
    } else {
      res.render(registerRoute, {
        message: "La contraseñas no coinciden",
        messageClass: "alert-danger",
      });
    }
  } catch (error) {
    console.log("error", error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = methods.getHashedPassword(password);

  user = await User.findOne({ email: email, password: hashedPassword })
  .then(user => {
      if (user) {
        const authToken = methods.generateAuthToken();

        //almacenar el token de autenticacion
        methods.authTokens[authToken] = user;
        //guardar el token en una cookie
        res.cookie("AuthToken", authToken);
        res.redirect("/home");

      } else {
        res.render(loginRoute, {
          message: "El usuario o contraseña no son válidos",
          messageClass: "alert-danger",
        });
      }
    }
  );
});


//logout
router.get('/logout', (req, res) => {
  res.clearCookie('AuthToken');
  return res.redirect('/')
})

module.exports = router;
