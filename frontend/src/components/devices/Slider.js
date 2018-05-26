// @flow

import React, {Component} from "react";
import Slider from 'rc-slider';

import type {Node} from 'react';

import 'rc-slider/assets/index.css';

type SliderProps = {
    brightness: number
};

type SliderState = {};

const style = {width: 400, margin: 50};

function log(value) {
    console.log(value); //eslint-disable-line
}

class CustomSlider extends Component<SliderProps, SliderState> {

    static getMarks(step: number) {

        let marks = {};
        for (let i = 0; i <= 100; i += step) {
            marks[i] = (i === 0 || i === 100) ? {
                style: {
                    color: 'red',
                },
                label: <strong>{`${i}%`}</strong>,
            } : `${i}%`;
        }
        return marks;
    }

    render(): Node {
        let {brightness} = this.props;
        let marks = CustomSlider.getMarks(25);
        return (
            <div style={style}>
                <Slider dots min={0} marks={marks} step={25} onChange={log} defaultValue={brightness}/>
            </div>
        )
    }
}

export default CustomSlider;