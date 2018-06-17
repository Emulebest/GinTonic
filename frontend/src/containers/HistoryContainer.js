import {connect} from "react-redux";
import {withRouter} from 'react-router'

import History from "../components/History";

const mapStateToProps = (state) => ({
    transactions : state.history.history.data.transactions
});


export default withRouter(connect(mapStateToProps)(History));