## API wrapper for oldschool runescape grand exchange

### Install with NPM or Yarn

`npm i oldschool-pricechecker`

`yarn add oldschool-pricechecker`

### API

To search for items by name:

```javascript
os.item.byName('whip').then(data => data.map(item => console.log(item)));
```

Response:

```javascript
[
    {
  icon: 'http://services.runescape.com/m=itemdb_oldschool/1576515589238_obj_sprite.gif?id=4151',
  icon_large: 'http://services.runescape.com/m=itemdb_oldschool/1576515589238_obj_big.gif?id=4151',
  id: 4151,
  type: 'Default',
  typeIcon: 'http://www.runescape.com/img/categories/Default',
  name: 'Abyssal whip',
  description: 'A weapon from the abyss.',
  current: { trend: 'neutral', price: '2.9m' },
  today: { trend: 'negative', price: '- 3,490' },
  members: 'true',
  day30: { trend: 'positive', change: '+10.0%' },
  day90: { trend: 'positive', change: '+12.0%' },
  day180: { trend: 'positive', change: '+10.0%' }
}
{
  icon: 'http://services.runescape.com/m=itemdb_oldschool/1576515589238_obj_sprite.gif?id=12769',
  icon_large: 'http://services.runescape.com/m=itemdb_oldschool/1576515589238_obj_big.gif?id=12769',
  id: 12769,
  type: 'Default',
  typeIcon: 'http://www.runescape.com/img/categories/Default',
  name: 'Frozen whip mix',
  description: 'Cold to the touch.',
  current: { trend: 'neutral', price: '355.1k' },
  today: { trend: 'neutral', price: 0 },
  members: 'true',
  day30: { trend: 'negative', change: '-10.0%' },
  day90: { trend: 'positive', change: '+53.0%' },
  day180: { trend: 'positive', change: '+60.0%' }
}
{
  icon: 'http://services.runescape.com/m=itemdb_oldschool/1576515589238_obj_sprite.gif?id=12771',
  icon_large: 'http://services.runescape.com/m=itemdb_oldschool/1576515589238_obj_big.gif?id=12771',
  id: 12771,
  type: 'Default',
  typeIcon: 'http://www.runescape.com/img/categories/Default',
  name: 'Volcanic whip mix',
  description: 'How has lava been stored like this...?',
  current: { trend: 'neutral', price: '363.6k' },
  today: { trend: 'positive', price: '+7,585' },
  members: 'true',
  day30: { trend: 'negative', change: '-9.0%' },
  day90: { trend: 'positive', change: '+58.0%' },
  day180: { trend: 'positive', change: '+67.0%' }
}
]
```

To search for items by ID:

```javascript
os.item.byID(12771).then(data => console.log(data));
```

Response:

```json
{
  "icon": "http://services.runescape.com/m=itemdb_oldschool/1576515589238_obj_sprite.gif?id=12771",
  "icon_large": "http://services.runescape.com/m=itemdb_oldschool/1576515589238_obj_big.gif?id=12771",
  "id": 12771,
  "type": "Default",
  "typeIcon": "http://www.runescape.com/img/categories/Default",
  "name": "Volcanic whip mix",
  "description": "How has lava been stored like this...?",
  "current": { "trend": "neutral", "price": "363.6k" },
  "today": { "trend": "positive", "price": "+7,585" },
  "members": "true",
  "day30": { "trend": "negative", "change": "-9.0%" },
  "day90": { "trend": "positive", "change": "+58.0%" },
  "day180": { "trend": "positive", "change": "+67.0%" }
}
```
