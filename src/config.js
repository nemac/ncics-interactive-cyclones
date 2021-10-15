
export const config = {
  title: 'North Atlantic West of 60°W: 1950-2020',
  width: 800,
  height: 600,
  margin: { left: 25, right: 0, top: 15, bottom: 30 },
  initState: {
    'yearStart': 1950,
    'yearEnd': 2020,
    'activeStormTypes': ['named_storm', 'hurricane', 'major_hurricane']
  },
  stormTypes: {
    'named_storm': {
      'where': 'USA_WIND<64 AND USA_WIND>=34',
      'label': 'Named Storms',
      'legend_label': 'Named Storms (>= 34kt)',
      'fill': 'lightblue'
    },
    'hurricane': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Hurricanes',
      'legend_label': 'Hurricanes (>=64kt)',
      'fill': 'blue'
    },
    'major_hurricane': {
      'where': 'USA_WIND>=96',
      'label': 'Major Hurricanes',
      'legend_label': 'Major Hurricanes (>= 96kt)',
      'fill': 'darkblue'
    }
  },
}

