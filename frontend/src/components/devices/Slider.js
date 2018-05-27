// @flow

import React, {Component} from "react";
import Slider from 'rc-slider';

import type {Node} from 'react';

import 'rc-slider/assets/index.css';

type SliderProps = {
    id: number,
    brightness: number,
    changeBrightness: (deviceId: number) => void
};

type SliderState = {};

const style = {width: 400, margin: 50};

class CustomSlider extends Component<SliderProps, SliderState> {

    constructor(props: SliderProps) {
        super(props);
        const self: any = this;
        self.handleSliderChange = this.handleSliderChange.bind(this);
    }

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

    handleSliderChange() {
        let {changeBrightness, id} = this.props;
        changeBrightness(id);
    }

    render(): Node {
        let {brightness} = this.props;
        let marks = CustomSlider.getMarks(25);
        return (
            <div style={style}>
                <Slider
                    dots
                    min={0}
                    marks={marks}
                    step={25}
                    onChange={this.handleSliderChange}
                    defaultValue={brightness}/>
            </div>
        )
    }
}

export default CustomSlider;