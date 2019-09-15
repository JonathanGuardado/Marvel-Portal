const baseApiUrl = 'https://gateway.marvel.com';

module.exports = {
  cors: {
    origin: '*', // so that local.telus.com:4000 is allowed, for example,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Correlation-Id, T-Session-Token',
    credentials: true
  },
  key:'ts=1&apikey=d7ebdda808d8fdba67051dbb7087f32f&hash=c4200ae9972778286fd84c9aec7a1152',
  publicKey:'d7ebdda808d8fdba67051dbb7087f32f',
  privateKey:'ef01df7cf23a7691e88d4b3a1091227e74f4ed81',
  hash:'c4200ae9972778286fd84c9aec7a1152',
  logging: {
    prettyPrint: false,
    level: 'debug',
    stringify: true,
    humanReadableUnhandledException: false,
    json: true,
    colorize: false,
    timestamp: true
  },
  charactersApi: `${baseApiUrl}/v1/public/characters`,

};
