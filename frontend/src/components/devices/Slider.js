// @flow

import React, {Component} from "react";
import Slider from 'rc-slider';

import type {Node} from 'react';

import 'rc-slider/assets/index.css';

type SliderProps = {
    brightness: number,
    changeBrightness: (brightness : number) => void
};

type SliderState = {};

class CustomSlider extends Component<SliderProps, SliderState> {

    constructor(props: SliderProps) {
        super(props);
        const self: any = this;
        self.handleSliderChange = this.handleSliderChange.bind(this);
    }

    static getMarks(step: number) {
        let marks = {};
        for (let i = 0; i <= 100; i += step) {
            marks[i] =  `${i}%`;
        }
        return marks;
    }

    handleSliderChange(brightness : number) {
        let {changeBrightness} = this.props;
        changeBrightness(brightness);
    }

    render(): Node {
        console.log("SLIDER REREDNDE", this.props.brightness);
        let {brightness} = this.props;
        let marks = CustomSlider.getMarks(25);
        return (
            <div className="slider-container">
                <Slider
                    dots
                    min={0}
                    marks={marks}
                    step={25}
                    onChange={this.handleSliderChange}
                    value={brightness}/>
            </div>
        )
    }
}

export default CustomSlider;