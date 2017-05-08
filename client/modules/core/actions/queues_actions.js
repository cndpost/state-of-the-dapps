export default {
  create({Meteor, LocalState}, antiSpam, queue, $thisForm) {
    LocalState.set('CREATE_QUEUE_ERROR', null);
    /* TODO: use better validation library*/
    const emailPattern = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const urlPattern = new RegExp('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}');
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
      } else if (queue.dapp_name.length > 32) {
        errors.push('Dapp Name length must be not more than 32');
      }
      if (!queue.status) {
        errors.push('Project Status');
      }
      if (!queue.description) {
        errors.push('Description');
      } else if (queue.description.length > 64) {
        errors.push('Description length must be not more than 64');
      }
      if (!queue.contact) {
        errors.push('Contact');
      } else if (queue.contact.length > 32) {
        errors.push('Contact length must be not more than 32');
      }
      if (!queue.contact_email) {
        errors.push('Email');
      } else if (queue.contact.length > 32) {
        errors.push('Email length must be not more than 32');
      }

      if (!queue.site) {
        errors.push('Site URL');
      } else if (queue.site.length > 64) {
        errors.push('Site URL length must be not more than 64');
      } else if (!urlPattern.test(queue.site)) {
        errors.push('Site URL is not a valid url');
      }

      if (!queue.license) {
        errors.push('License');
      }
      if (queue.tags) {
        if (queue.tags.length > 128) {
          errors.push('too many tags');
        }
      }
      if (queue.github) {
        if (queue.github.length > 64) {
          errors.push('Github link may be too long');

        } else if (!urlPattern.test(queue.github)) {
          errors.push('Github link is not a valid url');

        } else if (!queue.github.includes('https://github.com/')) {
          errors.push('Github link is not a github url');
        }
      }
      if (queue.reddit) {
        if (queue.reddit.length > 64) {
          errors.push('reddit link may be too long');

        } else if (!urlPattern.test(queue.reddit)) {
          errors.push('reddit link is not a valid url');

        } else if (!queue.reddit.includes('https://reddit.com') || !queue.reddit.includes('https://www.reddit.com/')) {
          errors.push('reddit link is not a reddit url');
        }
      }
      if (queue.slack) {
        if (queue.slack.length > 64) {
          errors.push('slack link may be too long');

        } else if (!urlPattern.test(queue.slack)) {
          errors.push('slack link is not a valid url');

        }
      }
      if (queue.facebook) {
        if (queue.facebook.length > 64) {
          errors.push('facebook link may be too long');

        } else if (!urlPattern.test(queue.facebook)) {
          errors.push('facebook link is not a valid url');

        } else if (!queue.facebook.includes('https://facebook.com') || !queue.facebook.includes('https://www.facebook.com/')) {
          errors.push('facebook link is not a facebook url');
        }
      }
      if (queue.twitter) {
        if (queue.twitter.length > 64) {
          errors.push('twitter link may be too long');

        } else if (!urlPattern.test(queue.twitter)) {
          errors.push('twitter link is not a valid url');

        } else if (!queue.twitter.includes('https://twitter.com') || !queue.facebook.includes('https://www.twitter.com/')) {
          errors.push('twitter link is not a twitter url');
        }
      }
      if (queue.gitter) {
        if (queue.gitter.length > 64) {
          errors.push('gitter link may be too long');

        } else if (!urlPattern.test(queue.gitter)) {
          errors.push('gitter link is not a valid url');

        }
      }
      if (queue.the_etherian) {
        if (queue.the_etherian.length > 64) {
          errors.push('the etherian link may be too long');
        } else if (!urlPattern.test(queue.the_etherian)) {
          errors.push('the etherian link is not a valid url');
        }
      }
      if (!errors.length == 0) {
        swal(
          'You need to fill out these required fields',
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
