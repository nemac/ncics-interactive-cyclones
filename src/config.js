
export const config = {
  title: 'North Atlantic West of 60°W: 1950-2020',
  width: 600,
  height: 500,
  margin: { left: 80, right: 10, top: 15, bottom: 60 },
  yearStart: 1950,
  yearEnd: 2020,
  yAxisTitle: 'Tropical Cyclone Days (per year)',
  stormTypes: {
    'named_storm': {
      'where': "USA_WIND>=34 AND BASIN = 'NA'",
      'label': 'Named Storms',
      'tooltip': 'Named Storm Days',
      'legend_label': 'Named Storms (>= 34kt)',
      'fill': '#C6DBEF',
      'active': true
    },
    'hurricane': {
      'where': "USA_WIND>=64 AND BASIN = 'NA'",
      'label': 'Hurricanes',
      'tooltip': 'Hurricane Days',
      'legend_label': 'Hurricanes (>=64kt)',
      'fill': '#6BAED6',
      'active': true
    },
    'major_hurricane': {
      'where': "USA_WIND>=96 AND BASIN = 'NA'",
      'label': 'Major Hurricanes',
      'tooltip': 'Major Hurricane Days',
      'legend_label': 'Major Hurricanes (>= 96kt)',
      'fill': '#08519C',
      'active': true
    }
  },
  // Stop labelling every x-axis tick after this many elements
  TICK_LABEL_THRESHOLD: 30,
  // Number of ticks between labels once TICK_LABEL_THRESDHOLD is met (inclusive)
  TICK_LABEL_STEP: 5,
  // These should be consistent with the CSS
  TOOLTIP_HEIGHT: 85,
  TOOLTIP_WIDTH: 180
}

