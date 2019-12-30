const os = require('./pricecheck/osrs-pricecheck');

os.item.byName('whip').then(data => data.map(item => console.log(item)));
os.item.byID(12771).then(data => console.log(data));
