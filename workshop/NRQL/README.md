# NRQL (New Relic Query Language)
In this exercise we will query the data reported by previous exercise, and actually see something.

Read the [NRQL documentation](https://docs.newrelic.com/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference)   

New Relic Insights provide the PageView table, which is populated by data OOTB and custom attributes.

The `NREUM` API add:
- setCustomAttribute - add a column to the PageView and PageAction tables for each session with the reported value.
- addPageAction - add an entry to PageAction with the actionName specified and columns by the reported object.
- finished - add an entry to PageAction with `actionName = 'finished'` and the loading time.

## Exercise
Go to New Relic insights and perform the questions:
- Q1: Select the unique sessions count who view `wix-ecommerce-checkout-statics` pages in the last day.
- Q2: Select the errors count stacked by version for `wix-ecommerce-%` <strong>using TIMESERIES</strong>.
- Q3: Select the errors rate for `wix-ecommerce-checkout-statics` <strong>using filter and TIMESERIES.</strong> (use errors count divided by total unique session from Q1 and Q2).
- Q4: Select a histogram for the finished event timeSinceLoad (width 20, 100 buckets) for `wix-ecommerce-%`;  

## Check yourself
run `$ npm run NRQL` and answer the questions.
use `ctrl + C` to exit.