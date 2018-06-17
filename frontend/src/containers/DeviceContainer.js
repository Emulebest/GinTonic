// @flow

import {connect} from "react-redux";
import {withRouter} from 'react-router'

import DevicesContainer from "../components/devices/DevicesContainer";

const mapStateToProps = (state) => ({
    devices: state.devices.data.devices,
    amount : state.payment.wallet.data.amount
});


export default withRouter(connect(mapStateToProps)(DevicesContainer));