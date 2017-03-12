/**
 * Created by evilboss on 3/12/17.
 */
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
  return statusColors[parseInt(status[0], 10)];
};
const dappHelper = {getStatusColor};

export {dappHelper};