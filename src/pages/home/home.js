import { layout } from '../../components/layout';

import template from './home.html';
import data from './home.json';

export const home = () => {
  page('/', () => {
    layout('en', 'home', template(data));
    componentHandler.upgradeAllRegistered();
  });

  page('/zh', () => {
    layout('zh', 'home', template(data));
    componentHandler.upgradeAllRegistered();
  });
};
