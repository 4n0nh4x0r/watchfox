# WatchFox
Watchfox is a system that is supposed to be used as a discord server watchdog, but as fox


## Installation

Use npm to install the package

```bash
npm i watchfox
```

## Usage

```javascript
const watchfox = require("watchfox")
                                                                 
var wf = new watchfox("5780c40195ebd6e4e0aeca995f0665881fd0231e25c4dxxxxxxxxxxxxxxxxxxx")
wf.fetch("123456789123456789").then(r => {
    console.log(r);
})
```
You will get this json object as response
```json
{ 
  responseCode: 0,
  data: { 
    score: [ 
      100, // Troll
      100, // Raider
      80   // Harasser
    ], 
    flags: [
      "Possibly Harasser"
    ] 
  } 
}
```
By default every user has a score of 100 on all fields, the more this value decreases, the higher the probability that this user acts in bad faith.  

## License
[MIT](https://choosealicense.com/licenses/mit/)
