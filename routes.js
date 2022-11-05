const router = require('express').Router();
const sw = require('./sw');

router.get('/me', (req, res) => {
    sw.getCurrentUser().then((user) => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

router.get("/expenses", (req, res) => {
    sw.getExpenses().then((expenses) => {
        res.send({expenses});
    }).catch((e) => {
        res.status(400).send(e);
    });
});


module.exports = router;