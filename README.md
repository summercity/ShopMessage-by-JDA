# ShopMessage Assignment for React Developer

Features:

- User can select a start and end date for which to show data.
- The "Optins" and "Recipeints" datasets are shown in the same chart. The X-axis represents calendar days.
- User can hide or reveal the "Optins" dataset from the chart.
- User can hide or reveal the "Recipients" dataset from the chart.

Full Feature Demo:
https://screencast-o-matic.com/watch/cYQ1jEH44K

Performance Demo:
https://screencast-o-matic.com/watch/cYQ1QoH4a8

## Instructions

Install the dependencies onto your local development environment.

```
$> npm install
```

Start Application

```
$> npm start
```

## Resources

To retrieve the dataset for optins, the server code in this repo exposes two JSON endpoints:

- `/api/reports/optins.json?from={YYYY-MM-DD}&to={YYYY-MM-DD}`
- `/api/reports/recipients.json?from={YYYY-MM-DD}&to={YYYY-MM-DD}`
