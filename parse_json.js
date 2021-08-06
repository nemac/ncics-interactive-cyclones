#!/usr/bin/env node

const data = require('./data.json')

const parseYears = (data) => {
  const keys = Object.keys(data)
  const years = keys.map(k => parseInt(k))
  return years
}

const parseTrace = (key, data, years) => {
  const trace = {
    x: years,
    y: [],
    type: 'scatter'
  }
  years.forEach((year) => {
    trace['y'].push(data[year][key])
  })
  return trace
}

const years = parseYears(data)
const trace_count_96 = parseTrace('count_96', data, years)
const trace_count_64 = parseTrace('count_64', data, years)
const trace_count_35 = parseTrace('count_35', data, years)

const all_traces = [trace_count_96, trace_count_64, trace_count_35]
