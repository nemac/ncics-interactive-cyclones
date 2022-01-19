
An interactive climate indicator built for globalchange.gov. This tool has a d3-based interactive chart and a Leaflet map showing storm tracks.

## Setup

Install dependencies:

```bash
npm install```

## Run

Run a webpack dev server:

```bash
npm run start```

## Build

Build the webpack bundle:

```bash
npm run build```


## Notes

- The development environment uses D3 4.13.0 from a CDN to match the version used on globalchange.gov. D3 is not included in the javascript bundle because the production environment, globalchange.gov, will have D3 already in scope.
