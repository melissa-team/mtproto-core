const apiSchema = require('../scheme/api-74.json');
const mtprotoSchema = require('../scheme/mtproto.json');

module.exports = {
  schema: {
    api: apiSchema,
    mtproto: mtprotoSchema,
  },
  layer: 74,

  invokeWithLayer: 0xda9b0d0d,
  initConnection: 0xc7481da6,
  invokeAfterMsg: 0xcb9f372d,

  app: {},

  test: false,
};
