/* eslint-disable no-new */

import { Initializer } from '@gouvfr/core/src/scripts/init/Initializer';
import { Scheme } from './index';

new Initializer(':root[' + Scheme.SCHEME_ATTRIBUTE + ']', [Scheme]);
