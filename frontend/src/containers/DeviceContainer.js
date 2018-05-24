// @flow

import {connect} from "react-redux";
import {withRouter} from 'react-router'

import DevicesContainer from "../components/DevicesContainer";

const mapStateToProps = (state) => ({
    devices: state.devices.all.data.devices
});


export default withRouter(connect(mapStateToProps)(DevicesContainer));