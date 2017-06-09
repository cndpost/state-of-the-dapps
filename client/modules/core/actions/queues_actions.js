export default {
  create({Meteor, LocalState}, antiSpam, queue, $thisForm) {
    const hasAnalytics = (typeof analytics !== 'undefined');
    const hasWeb3 = (typeof web3 !== 'undefined');
    LocalState.set('CREATE_QUEUE_ERROR', null);
    if (antiSpam !== '42') {
      swal(
        'Oops...',
        'You failed the spam filter test!',
        'error'
      );
    } else if (queue) {
      let errors = [];
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
        if (hasAnalytics) {
          analytics.track('submitDapp', {
            dapp_name: queue.dapp_name,
            hasWeb3,
            result: 'error',
            error: errors.toString()
          });
        }
      } else {
        Meteor.call('queues.submit', queue, (err) => {
          if (err) {
            swal(
              'Oops...',
              err,
              'error'
            );
            if (hasAnalytics) {
              analytics.track('submitDapp', {
                dapp_name: queue.dapp_name,
                hasWeb3,
                result: 'error',
                error: err
              });
            }
          } else {
            $('#submitModal').modal('close');
            swal(
              'Thank you.',
              'Your submission will be reviewed.',
              'success'
            );
            $thisForm[0].reset();

            if (hasAnalytics) {
              analytics.identify(queue.contact_email, {
                '$email': queue.contact_email,
                '$name': queue.contact,
                hasWeb3
              });
              analytics.track('submitDapp', {
                dapp_name: queue.dapp_name,
                result: 'success',
                hasWeb3
              });
            }
          }
        });
      }
    }
  },
  clearErrors({LocalState}) {
    return LocalState.set('CREATE_QUEUE_ERROR', null);
  }
};
