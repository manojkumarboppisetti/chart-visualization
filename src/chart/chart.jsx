import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'

import * as d3 from "d3";

class Chart extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.drawChart();

    }

    drawChart() {
        //
        // const data = [2000, 3000, 2330, 1000, 900, 1230];
        // const mapFactor = 0.1;
        // const h = 500;
        // const w = 700;
        // const barHeight = 50;
        //
        // const svg = d3.select(this.refs.canvas)
        //     .append("svg")
        //     .attr("width", w)
        //     .attr("height", h)
        //     .style("border", "1px solid black");
        //
        // svg.selectAll("rect")
        //     .data(data)
        //     .enter()
        //     .append("rect")
        //     .attr("x", 0)
        //     .attr("y", (d, i) => i * (barHeight + 10))
        //     .attr("width", (d, i) => d * mapFactor)
        //     .attr("height", barHeight)
        //     .attr("fill", '#9c141f');
        //
        // svg.selectAll("text")
        //     .data(data)
        //     .enter()
        //     .append("text")
        //     .text((d) => d)
        //     .attr("x", (d, i) => ( d * mapFactor ) + 10 - (500 * mapFactor))
        //     .attr("y", (d, i) => ((i * barHeight) + 10) + (barHeight / 2))


        const data = [2000, 3000, 2330, 1000, 900, 1230];
        const dates = ["12/09/2020", "12/09/2020", "12/09/2020", "12/09/2020", "12/09/2020", "12/09/2020"];
        const height = 600;
        const width = 400;
        const scale = 0.1;
        const stepHeight = 40;

        const svg = d3.select("#chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
        // .style("border", "1px solid black");

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("height", stepHeight)
            .attr("width", (datapoint) => (datapoint * scale))
            .attr("fill", "#a71719")
            .attr("x", (datapoint, iteration) => 0)
            .attr("y", (datapoint, iteration) => (iteration * (stepHeight + 5)));

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("x", (datapoint, iteration) => (datapoint * scale) + 10)
            .attr("y", (dataPoint, iteration) => ((iteration * (stepHeight + 5)) + (25)))
            .text(dataPoint => dataPoint);

        svg.selectAll("text")
            .data(dates)
            .enter()
            .append("text")
            .attr("x", (datapoint, iteration) => (datapoint * scale) + 10)
            .attr("y", (dataPoint, iteration) => ((iteration * (stepHeight + 5)) + (25)))
            .text(dataPoint => dataPoint);
    }

    render() {

        return (
            <div>
                <Card>
                    <CardContent>
                        <div>
                            <FormControl style={{minWidth: 120}}>
                                <InputLabel id="demo-simple-select-label">Store</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={()=>{
                                        console.log('cnahed')
                                    }}
                                >
                                    <MenuItem value={'store1'}>Store1</MenuItem>
                                    <MenuItem value={'store2'}>Store2</MenuItem>
                                    <MenuItem value={'store3'}>Store3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{"margin": "20px 0px", "display": "flex"}}>
                            <div id={"chart"}/>
                            <div className={"datesList"}>
                                <div className={"dateItem"}>
                                    April 11
                                </div>
                                <div className={"dateItem"}>
                                    April 12
                                </div>
                                <div className={"dateItem"}>
                                    April 13
                                </div>
                                <div className={"dateItem"}>
                                    April 14
                                </div>
                                <div className={"dateItem"}>
                                    April 15
                                </div>
                                <div className={"dateItem"}>
                                    April 16
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Chart.propTypes = {};

export default Chart;
