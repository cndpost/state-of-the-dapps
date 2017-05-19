/**
 * Created by evilboss on 3/12/17.
 */
import slug from 'slug';
import unslug from 'unslug';
const getStatusColor = (status) => {
  let statusColors = [
    'light-grey', // 0. Unknown
    'black white-text', // 1. Abandoned
    'red darken-2 white-text', // 2. On Hold
    'grey darken-2 white-text', // 3. Stealth Mode
    'amber accent-1', // 4. Concept
    'amber', // 5. Work In Progress
    'green accent-1', // 6. Demo
    'green accent-2', // 7. Working Prototype
    'light-green accent-3' // 8. live
  ];
  return (status) ? statusColors[parseInt(status[0], 10)] : '';
};
const getStatusText = (status) => {

  return (status) ? status.replace(/\d[.]+/g, '') : '';
};
const slugyfy = (slugText) => {
  return (slugText) ? slug(slugText) : '';
};
const unSlugyfy = (slugText) => {
  return (slugText) ? unslug(slugText) : '';
};
const dappHelper = {getStatusColor, getStatusText, slugyfy, unSlugyfy};

export {dappHelper};
