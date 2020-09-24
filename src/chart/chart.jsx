// import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';

import data from '../data/data';
import Axes from '../Axes';
import Bars from '../Bars';

import ResponsiveWrapper from '../ResponsiveWrapper';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.xScale = scaleBand();
        this.yScale = scaleLinear();
    }

    render() {
        const margins = {top: 50, right: 20, bottom: 100, left: 60};
        const svgDimensions = {
            width: Math.max(this.props.parentWidth, 300),
            height: 500
        };

        const maxValue = Math.max(...data.map(d => d.value))

        const xScale = this.xScale
            .padding(0.5)
            .domain(data.map(d => d.title))
            .range([margins.left, svgDimensions.width - margins.right])

        const yScale = this.yScale
            .domain([0, maxValue])
            .range([svgDimensions.height - margins.bottom, margins.top])

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
                        <div style={{"margin": "20px 0px"}}>
                            <svg width={svgDimensions.width} height={svgDimensions.height}>
                                <Axes
                                    scales={{xScale, yScale}}
                                    margins={margins}
                                    svgDimensions={svgDimensions}
                                />
                                <Bars
                                    scales={{xScale, yScale}}
                                    margins={margins}
                                    data={data}
                                    maxValue={maxValue}
                                    svgDimensions={svgDimensions}
                                />
                            </svg>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default ResponsiveWrapper(Chart)
