import {Meteor} from 'meteor/meteor';
import {Match, check} from 'meteor/check';
import {Queue} from '/lib/collections/';
export default function () {
  Meteor.methods({
    'queues.submit'(data) {
      // validate the data before emailing it out
      // TODO rate limit?
      const ShortString = Match.Where((x) => {
        check(x, String);
        return x.length <= 128;
      });
      console.log(data);
      check(data, {
        dapp_name: ShortString,
        description: ShortString,
        contact: ShortString,
        contact_email: ShortString,
        site: ShortString,
        reddit: Match.Maybe(ShortString),
        slack: Match.Maybe(ShortString),
        github: Match.Maybe(ShortString),
        license: ShortString,
        tags: ShortString,
        status: ShortString,
        facebook: Match.Maybe(ShortString),
        twitter: Match.Maybe(ShortString),
        gitter: Match.Maybe(ShortString),
        blog: Match.Maybe(ShortString),
        wiki: Match.Maybe(ShortString),
        the_etherian: Match.Maybe(ShortString),
        contract_address_mainnet: Match.Maybe(ShortString),
        contract_address_ropsten: Match.Maybe(ShortString),
        opt_in: Match.Maybe(ShortString)
      });
      data.timestamp = new Date().toLocaleString();
      Queue.insert(data);
      Email.send({
        to: process.env.MAIL_TO,
        from: process.env.MAIL_FROM,
        replyTo: data.contact_email,
        subject: `New Dapp Submitted - ${data.dapp_name}`,
        text: `Dapp needs to be approved and added manually:\n\n ${EJSON.stringify(data, null, 2)}`
      });
      return true;
    }
  });
}
