import validate from 'validate.js';
const constraints = {
  dapp_name: {
    presence: true,
    length: {
      maximum: 32
    }
  },

  status: {
    presence: true
  },
  description: {
    presence: true,
    length: {
      maximum: 64
    }
  },
  contact: {
    presence: true,
    length: {
      maximum: 32
    }
  },
  contact_email: {
    presence: true,
    length: {
      maximum: 32
    },
    email: true
  },
  site: {
    presence: true,
    length: {
      maximum: 64
    },
    url: true
  },
  license: {
    presence: true
  },
  tags: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    },
  },
  contract_address_ropsten: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    }
  },
  contract_address_mainnet: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    }
  },
  github: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    },
  },
  reddit: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    },
  },
  slack: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    },
  },
  facebook: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    }
  },
  twitter: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    },
  },
  gitter: {
    presence: {allowEmpty: true},
    length: {
      maximum: 64
    },
  },
  the_etherian: {
    presence: false,
    length: {
      maximum: 64
    },
  },
};
export default {
  create({Meteor, LocalState}, antiSpam, queue, $thisForm) {


    LocalState.set('CREATE_QUEUE_ERROR', null);


    if (antiSpam !== '42') {
      swal(
        'Oops...',
        'You failed the spam filter test!',
        'error'
      );
    } else if (queue) {
      let errors = validate(queue, constraints, {format: 'flat'});
      if (errors) {
        swal(
          'Oops',
          errors.toString().replace(/,/g, '\n'),
          'error'
        );
      } else {
        Meteor.call('queues.submit', queue, (err) => {
          if (err) {
            swal(
              'Oops...',
              err,
              'error'
            );
          } else {
            $('#submitModal').modal('close');
            swal(
              'Thank you.',
              'Your submission will be reviewed.',
              'success'
            );
            $thisForm[0].reset();
          }
        });
      }
    }
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_QUEUE_ERROR', null);
  }
};
