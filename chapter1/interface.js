exports.insert = function (db, doc, callback) {
    db.collection('movies').insert(doc, function (err) {
        if (err) callback(err);

        callback(null);
    });
};

exports.byDirector = function (db, director, callback) {
    db.collection('movies').find({director: director}, {'sort': 'title'}).toArray(function (err, arr) {
        if (err) callback(err);

        callback(null, arr);
    });
};