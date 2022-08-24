import getTimestamp from './getTimestamp.js';
import config from '../config/config.js';
import _ from 'lodash';

const getZipFileName = () => {
  const directoryName = config.path.rootFolder || 'dist';

  return `${_.kebabCase([directoryName])}-${getTimestamp()}.zip`;
};

export default getZipFileName;
