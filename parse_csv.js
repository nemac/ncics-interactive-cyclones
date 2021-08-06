
let fs = require('fs')

let csv = 'NA_60w_days_1950-2020.csv'

var data = fs.readFileSync(csv, 'utf8')

data = data.split('\n')

// year,count_96,count_64,count_35
columns = data[0]

// Remove empty string at the end
data = data.slice(1, data.length-1)

new_data = {}

let parseRow = (row, row_index, arr) => {
  as_array = row.split(',')
  let year = as_array[0]
  new_data[year] = {
    'count_96': parseFloat(as_array[1]),
    'count_64': parseFloat(as_array[2]),
    'count_35': parseFloat(as_array[3])
  }
}

data.forEach(parseRow)

let json_string = JSON.stringify(new_data)

console.log(json_string)
