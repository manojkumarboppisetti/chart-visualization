import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
        const h = 600;
        const w = 600;
        const scale = 0.1;

        const svg = d3.select("#chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("border", "1px solid black");

        svg.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", 40)
            .attr("height", (datapoint) => datapoint * scale)
            .attr("fill", "orange")
            .attr("x", (datapoint, iteration) => iteration * 45)
            .attr("y", (datapoint) => h - datapoint * scale)

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("x", (dataPoint, i) => i * 45 + 10)
            .attr("y", (dataPoint, i) => h - dataPoint * scale - 10)
            .text(dataPoint => dataPoint)
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
                        <div style={{"margin": "20px"}}>
                            <div id={"chart"}/>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Chart.propTypes = {};

export default Chart;
