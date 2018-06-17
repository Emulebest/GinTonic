import React from 'react';
import {getHistory} from "../actions/transactions/history";
import {Container, Row, Jumbotron, Button, Col, UncontrolledTooltip, Table} from "reactstrap";
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
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                transactions.map((item, i) => {
                                    return (
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                            <td>{item.amount}</td>
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