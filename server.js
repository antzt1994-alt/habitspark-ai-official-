const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'), { acceptRanges: false }));

app.use((req, res, next) => {
  delete req.headers['range'];
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/features', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'features.html'));
});

app.get('/how-it-works', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'how-it-works.html'));
});

app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pricing.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy-policy.html'));
});

app.get('/terms-of-service', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'terms-of-service.html'));
});

app.get('/term-of-service', (req, res) => {
  res.redirect(301, '/terms-of-service');
});

app.get('/:page.html', (req, res) => {
  const filePath = path.join(__dirname, 'public', `${req.params.page}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`HabitSpark site running on http://localhost:${PORT}`);
});
