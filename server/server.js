const express = require('express');
const app = express();

//New Type of way to instead of body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Route includes
const elementRouter = require('./routes/elements.router');

/* Routes */
app.use('/api/element', elementRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});