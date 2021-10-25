
export const config = {
  title: 'North Atlantic West of 60°W: 1950-2020',
  width: 800,
  height: 600,
  margin: { left: 25, right: 0, top: 15, bottom: 40 },
  yearStart: 1950,
  yearEnd: 2020,
  stormTypes: {
    'named_storm': {
      'where': 'USA_WIND<64 AND USA_WIND>=34',
      'label': 'Named Storms',
      'legend_label': 'Named Storms (>= 34kt)',
      'fill': '#C6DBEF',
      'active': false
    },
    'hurricane': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Hurricanes',
      'legend_label': 'Hurricanes (>=64kt)',
      'fill': '#6BAED6',
      'active': true
    },
    'major_hurricane': {
      'where': 'USA_WIND>=96',
      'label': 'Major Hurricanes',
      'legend_label': 'Major Hurricanes (>= 96kt)',
      'fill': '#08519C',
      'active': true
    }
  },
  // Don't label every x-axis tick after this many elements
  TICK_LABEL_THRESHOLD: 30,
  // The number of ticks before setting another label
  // when TICK_LABEL_THRESHOLD is met
  TICK_LABEL_STEP: 5
}

