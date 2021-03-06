let isServer;
let debugIsEnabled;

function boolean(string) {
  return string === 'true';
}

/**
 * @constructor
 */
const EngineConfig = {
  initialize: (isServerParam) => {
    isServer = isServerParam;
    debugIsEnabled = boolean(process.env.DEBUG_ENABLED) || boolean(process.env.FORCE_DEBUG);
  },

  debugIsEnabled: () => debugIsEnabled,

  isServer: () => isServer,

  isClient: () => !isServer,
};

export default EngineConfig;
