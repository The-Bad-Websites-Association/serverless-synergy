const buzz = require('buzzphrase');

module.exports = (req, res) => {
    let string = buzz.get({format: '{a} {v} {N}'}) + ' with ' + buzz.get({format: '{a} {v} {N}'});

    res.json({phrase: string});
    res.status(200);
    res.end();
}