const express = require('express');
const cors = require('cors');
const mainRoutes = require('./routes/main.routes');
const productsRoutes = require('./routes/products.routes');
const discountsRoutes = require('./routes/discounts.routes');
const { dbConnection } = require('./database/config.db');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;

    //Open DB connection
    this.dbInit()
      .then((result) => console.log('DB init ok'))
      .catch((error) => console.log('error al iniciar la base de datos'));
    // Middlewares
    this.middlewares();

    // App Routes
    this.routes();
  }

  async dbInit() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    // Reading and parsing of request
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static('public'));
  }
  routes() {
    this.app.use('/api', mainRoutes);
    this.app.use('/api/products', productsRoutes);
    this.app.use('/api/discounts', discountsRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on ${this.port} \n\n\n http://localhost:${this.port}/api`
      );
    });
  }
}

module.exports = Server;
