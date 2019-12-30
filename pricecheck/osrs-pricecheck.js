const items = require('../items/items.json');
const got = require('got');

const API_URL =
  'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=';

const byName = name => {
  return new Promise(async (resolve, reject) => {
    if (name === '' || typeof name !== 'string') {
      return reject('Missing or invalid string type.');
    } else {
      const itemData = await Promise.all(
        items
          .filter(item => item.name.includes(name))
          .map(async item => {
            return await got(`${API_URL}${item.id}`).json();
          })
      );
      return resolve(itemData);
    }
  });
};

const byID = id => {
  return new Promise((resolve, reject) => {
    if (id === '' || typeof id !== 'number') {
      return reject('Missing or invalid number type.');
    } else {
      const item = items.filter(item => item.id === id);
      got(`${API_URL}${item[0].id}`)
        .json()
        .then(resp => resolve(resp.item));
    }
  });
};

module.exports = {
  item: {
    byName,
    byID
  }
};
