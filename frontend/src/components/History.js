import React from 'react';
import {getHistory} from "../actions/transactions/history";
import {Container, Row, Jumbotron, Col,Table} from "reactstrap";
import {NotificationManager} from "react-notifications";

class History extends React.Component {

    componentWillMount() {
        this.props.dispatch(getHistory());
        NotificationManager.info("Follow you transaction history here", 'Info message');
    }


    render() {
        let transactions = this.props.transactions || [];

        return (
            <Jumbotron>
                <Container>
                    <Row className="row-devices">
                        <Col md="12">
                            <h1>Transactions history</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Table hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Device</th>
                                <th>Level</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                transactions.map((item, i) => {
                                    let trans = JSON.parse(item);
                                    return (
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{trans.from}</td>
                                            <td>{trans.to}</td>
                                            <td>{trans.device}</td>
                                            <td>{trans.level}</td>
                                            <td>{trans.amount}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default History;