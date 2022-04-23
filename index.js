const https = require("http")

module.exports = class watchfox{
    #token // Private Field
    constructor(token){
        if(token && token.trim() != ""){
            if(token.match(/([A-F0-9a-f]){64}/g)){
                // console.log(`Token set as ${token}`);
                this.#token = token
            }else{
                console.log("Error: token does not follow the correct format\nMake sure that you copied the token correctly");
            }
        }else{
            return false
        }
    }

    fetch (userid) {
        return new Promise(async resolve => {
            if(!this.#token)
                resolve("You need to specify your token in the constructor")
            if(userid == undefined || userid.length < 16 || userid.length > 20){
                resolve("You need to supply a valid user id")
            }
            // // https://watchfox.kitsunes.eu:2544/dataHandling?function=get_score&token=${this.#token}&userid=${userid}
            const options = {
                hostname: 'watchfox.kitsunes.eu',
                port:2544,
                path: `/dataHandling?function=get_score&token=${this.#token}&userid=${userid}`,
                method: 'GET'
            }
            // const options = {
            //     hostname: 'localhost',
            //     port: 2544,
            //     path: `/dataHandling?function=get_score&token=${this.#token}&userid=${userid}`,
            //     method: 'GET'
            // }

            const req = https.request(options, res => {
                var data = ""
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => {
                    data = JSON.parse(data);
                    resolve(data)
                })
            })
            req.on('error', error => {
                console.error(error)
                resolve(error)
            })
            req.end()
        })
    }
}

