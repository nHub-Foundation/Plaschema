import React from 'react';
import './chart.css';
import { Line } from 'react-chartjs-2';
import RandomData from './data';

let months = RandomData.map(mnth => mnth.Month)
let mnthData = RandomData.map(mnth => mnth.Visited_Hospitals)

const data = {
    labels: months,
    datasets: [
      {
        label: 'Total Hospital Visited',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: mnthData
      }
    ]
  };

class Linecharts extends React.Component {  
    constructor(props) {                 
        super(props);                 
        this.state = { Data: {} };         
    }  
    render() {
    // console.log("lllllllllllllllllllllllllll", RandomData);  
    
        return (  
            <div className="canvas">  
                <div className="chartjs">
                  <Line ref="chart" data={data} />
                </div>
                <div>     
                  <hr/>           
                   <p>Total Hospital visits vs Amount paid to providers</p>
                </div>
            </div>  
        )  
    }  

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
      }
}  


export default Linecharts;
