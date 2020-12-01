// import React from 'react';
// import './chart.css';

// the linechart


import React from 'react';
import axios from 'axios';  
import { Line } from 'react-chartjs-2';

class Linecharts extends React.Component {  
    constructor(props) {                 
        super(props);                 
        this.state = { Data: {} };         
    }
    componentDidMount() {  
    axios.get(`http://localhost:61022/Api/Charts/Getrecord`)  
        .then(res => {  
            console.log(res);  
            const ipl = res.data;  
            let playername = [];  
            let runscore = [];  
            ipl.forEach(record => {  
                playername.push(record.Playername);  
                runscore.push(record.Runscore);  
            });  
            this.setState({  
                Data: {  
                    labels: playername,  
                        datasets: [  
                                {
                                label: 'IPL 2018/2019 Top Run Scorer',  
                                data: runscore,  
                                backgroundColor: [  
                                    "#3cb371",  
                                    "#0000FF",  
                                    "#9966FF",  
                                    "#4C4CFF",  
                                    "#00FFFF",  
                                    "#f990a7",  
                                    "#aad2ed",  
                                    "#FF00FF",  
                                    "Blue",  
                                    "Red"  
                                ]  
                            }
                        ]
                }
            });
    })
}  
render() {
        return (  
            <div>  
                <Line  
                    data={this.state.Data}  
                    options={{ maintainAspectRatio: false }} />  
            </div>  
        )  
    }  
}  


export default Linecharts;

// class Chart extends React.Component {
//     render() {
//         return (
//             <div>
                
//                 <p>Total Hospital visits vs Amount paid to providers</p>
//             </div>
//         )
//     }
// }

// export default Chart;
