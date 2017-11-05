var cbr = require('couchdb-backup-restore');
var fs = require('fs');
var config = {credentials: 'http://admin:password@localhost:5984'};

function done(err) {
  if (err) {
    return console.error(err);
  }
  console.log('all done!');
}


// backup
//cbr.backup(config, done).pipe(fs.createWriteStream('./db-backup.tar.gz'))

// restore
fs.createReadStream('./jodigroup.tar.gz').pipe(cbr.restore(config, done));