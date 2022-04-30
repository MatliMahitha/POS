import React from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import _ from 'lodash'
const GoogleChart = (props) => {
  const bills = useSelector(state => state.bills.data)

  const findTotal = (arr) => {
    {/* let tot = 0
     arr.forEach(ele => tot += ele.total)
     return tot*/}
    return arr.reduce((a, b) => { return a+b.total},0)
  }
  const result = _.groupBy(bills, 'date')
    // {2022-04-01T00:00:00.000Z: Array(10), 2022-04-02T00:00:00.000Z: Array(4), 2022-04-03T00:00:00.000Z: Array(10), 2022-04-04T00:00:00.000Z: Array(8), 2022-04-05T00:00:00.000Z: Array(2), …}
  const final = ([].concat([...[['Date', 'Rupees', { role: 'style' }]].concat(Object.keys(result).map(ele => { return ([ele.slice(0, 10), findTotal(result[ele]), '#B0E0E6']) }))]))
  return (
    <div className=" m-5 bg-light rounded shadow ">
      <Chart
      height={400}
        data={final}
        chartType="ColumnChart"
        loader={<div>Loading Chart...</div>}
      />
      <div className="card-body rounded" style={{ backgroundColor: '#B0E0E6', color: '#000000', textAlign: 'center' }}>
                      <div className="card-title" ><h3>Sales Chart</h3></div>
      </div>
    </div>
  )

}
export default GoogleChart 