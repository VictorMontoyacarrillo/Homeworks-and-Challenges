// routes/news.js
const express = require('express');
const router = express.Router();
const News = require('../models/News');
const Category = require('../models/Category');

// Crear una nueva noticia
router.post('/', async (req, res) => {
  try {
    const category = await Category.findById(req.body.categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    const news = new News({
      title: req.body.title,
      description: req.body.description,
      category: req.body.categoryId
    });

    const savedNews = await news.save();
    category.news.push(savedNews._id);
    await category.save();

    res.json(savedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las noticias
router.get('/', async (req, res) => {
  try {
    const news = await News.find().populate('category');
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una noticia por ID
router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate('category');
    if (!news) return res.status(404).json({ error: 'News not found' });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una noticia
router.put('/:id', async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description
      },
      { new: true }
    );
    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar una noticia
router.delete('/:id', async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: 'News deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
