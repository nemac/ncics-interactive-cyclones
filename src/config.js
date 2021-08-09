
export const title = 'North Atlantic West of 60°W: 1950-2020'

export const MIN_YEAR = 1950;
export const MAX_YEAR = 2020;

export const storm_types = {
    'count_35': {
      'where': 'USA_WIND<64 AND USA_WIND>=34',
      'label': 'Named Storms'
    },
    'count_64': {
      'where': 'USA_WIND>=64 AND USA_WIND<96',
      'label': 'Hurricanes'
    },
    'count_96': {
      'where': 'USA_WIND>=96',
      'label': 'Major Hurricanes'
    }
}

export const legend_labels = {
  'count_96' : 'Major Hurricanes (>= 96kt)',
  'count_64' : 'Hurricanes (>= 64kt)',
  'count_35' : 'Named Storms (>= 34kt)'
}

export const fill_colors = {
  'count_96' : '#3e99e8',
  'count_64' : '#4cbc18',
  'count_35' : '#489524'
}


