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
      let errors = [];
      (console.log(queue));
      if (!queue.dapp_name) {
        errors.push('Dapp Name');
      }
      if (!queue.status) {
        errors.push('Project Status');
      }
      if (!queue.description) {
        errors.push('Description');
      }
      if (!queue.contact) {
        errors.push('Contact');
      }
      if (!queue.contact_email) {
        errors.push('Email');
      }

      if (!queue.site) {
        errors.push('Site URL');
      }
      if (!queue.license) {
        errors.push('License');
      }
      if (!errors.length == 0) {
        swal(
          'You need to fill out these required fields',
          errors.toString(),
          'error'
        );
        analytics.track('submitDapp', {
          dapp_name: queue.dapp_name,
          result: 'error',
          error: errors.toString()
        });
      } else {
        Meteor.call('queues.submit', queue, (err) => {
          if (err) {
            swal(
              'Oops...',
              err,
              'error'
            );
            analytics.track('submitDapp', {
              dapp_name: queue.dapp_name,
              result: 'error',
              error: err
            });
          } else {
            $('#submitModal').modal('close');
            swal(
              'Thank you.',
              'Your submission will be reviewed.',
              'success'
            );
            $thisForm[0].reset();

            const hasWeb3 = (typeof web3 !== 'undefined');
            analytics.identify({
              name: queue.contact,
              email: queue.contact_email,
              hasWeb3
            });
            analytics.track('submitDapp', {
              dapp_name: queue.dapp_name,
              result: 'success',
            });
          }
        });
      }
    }
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_QUEUE_ERROR', null);
  }
};
