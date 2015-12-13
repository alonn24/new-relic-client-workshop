# NREUM API
In this exercise we will learn the new relic javascript API.

Read the [NREUM documentation](https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-apis/reporting-data-events-browser-agent-api#methods)

Once we include the New Relic js code in our app (see documentation), 
we can use the global object `NREUM` to send more data to New Relic about our users.

We are going to use:
- setCustomAttribute - tag a session with more data about the whole session (e.g. application version).
- finished - report the real loading time of our application.
- noticeError - report custom error via code (should report an Error object or other custom error object).
- addPageAction - report a user action (or a code action).

<strong>Notice: The reportError API does not sent data to New Relic Insights!</strong>. You can see the data only in New Relic browser.

## Exercise
In this exercise we wrap `NREUM` with a provider.
Edit `NREUM.js` with:

1. setCustomAttribute - tag the current session with `staticsUrl` that maps to `http://statics.com/projects/version/` in the config phase.
2. addPageAction - the user did something that you want to know of! report the `actionName` given with a `value` column. 
3. noticeError - oh no! There was an error! report the error to New Relic Browser <strong>and Insights</strong> with a `message` column.
4. report finished - report the finished event when your data loaded.  

## Check yourself
Run `$ npm run NREUM` to check correctness.
