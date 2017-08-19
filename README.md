# State of the DApps

Lists of all Ethereum DApps known to mankind. Watch our presentation https://youtu.be/iqBNPh5IMqM

Authorative source: https://docs.google.com/spreadsheets/d/1VdRMFENPzjL2V-vZhcc_aa5-ysf243t5vXlxC2b054g/edit?usp=sharing

This is a service provided by [Moby Corp](http://www.moby-corp.com)

## API

We have the following REST / JSON endpoints:

```
http://dapps.moby-corp.com/api/dapps
http://dapps.moby-corp.com/api/dapps-by-tag/<tag>
```
For status.im I would suggest to add the `status-im` tag to all dapps that support status.im, and then call http://dapps.moby-corp.com/api/dapps-by-tag/status-im to fetch those.

## Development

### Meteor web application

Ensure you have [Meteor](https://www.meteor.com/install) installed.

Application architecture has been upgraded to [Mantra-Spec](https://kadirahq.github.io/mantra/)
Please follow the guide.


To run the app:

    $ meteor npm i
    $ meteor

Open your web browser and go to [http://localhost:3000](http://localhost:3000) to see the app running.

## Sync tool

Go the the tool directory:

    $ cd private/sync

Install the Python requirements:

    $ pip install -r requirements.txt

Setup an OAuth2 key for the Google Sheets synchroniztion:

https://gspread.readthedocs.org/en/latest/oauth2.html

Sync:

    $ GOOGLE_APPLICATION_CREDENTIALS=/path/to/google-client-id.json MONGODB_URL=mongodb://127.0.0.1:3001/meteor ./sync.py

## License

Released under the MIT License.
