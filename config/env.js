const { join } = require('path')
const dotenv = require('dotenv');
const config = dotenv.config({ path: join(__dirname, '.env') })
if (config.error) {
    console.log(config.error)
}

module.exports = config.parsed