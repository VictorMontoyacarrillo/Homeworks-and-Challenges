// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Category = require('./models/Category');
const News = require('./models/News');

// Middleware para manejar JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Rutas
const categoriesRoutes = require('./routes/categories');
const newsRoutes = require('./routes/news');

app.use('/categories', categoriesRoutes);
app.use('/news', newsRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
