import { equal } from 'assert';
import yayify from './index';

it('should yayify', () => {
  equal(yayify('unicorns'), 'unicorns yay');
});
