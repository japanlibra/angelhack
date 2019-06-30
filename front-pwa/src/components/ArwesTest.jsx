import React from 'react';
import { connect } from 'react-redux';
import { Arwes, Button, Header, Content, Frame, Footer, Words } from 'arwes';
import axios from 'axios';

import * as action from '../modules/arwes';
import styles from '../styles';

export class ArwesTest extends React.Component {
  state = {
    node: {
      domain: '52.68.245.214',
      port: '3000'
    },
    address: '7e89ad41434b3f19873ea4b856854c81b7f5c71beefe93edc6855ebfe6a62421',
    receiver:
      '28c71b7f723c47eff7b32b6b6437421b88bdc4e90c953608ebce421e09ea9dfe',
    amount: '1',
    ref: {
      receiver: React.createRef(),
      amount: React.createRef()
    }
  };

  componentDidMount() {
    this.checkBalance();
  }

  checkBalance = () => {
    const url = `http://${this.state.node.domain}:${this.state.node.port}/check-balance-sync?address=${this.state.address}`;
    this.props.checkBalance(url);
    // this.props.checkBalanceDummy(url);
  };

  handleReceiver = () => {
    this.setState({
      receiver: this.state.ref.receiver.current.value
    });
  };

  handleAmount = () => {
    this.setState({
      amount: this.state.ref.amount.current.value
    });
  };

  render() {
    const { arwes } = styles;

    return (
      <article>
        <Header animate style={arwes.header}>
          <h1 onClick={() => console.log(this.props)}>Jibra</h1>
        </Header>

        <Content style={arwes.content}>
          <section style={arwes.section}>
            <p>Sender</p>
            {this.state.address}
          </section>

          <section style={arwes.section}>
            <p>Balance</p>
            <h2>{this.props.arwes.payload.accountState.balance}</h2>
            <Button onClick={this.checkBalance}>Check Balance</Button>
          </section>

          <section style={arwes.section}>
            <p>Receiver</p>
            <Frame animate level={1} corners={3}>
              <input
                ref={this.state.ref.receiver}
                value={this.state.receiver}
                onChange={this.handleReceiver}
                style={arwes.input}
              />
            </Frame>
          </section>

          <section style={arwes.section}>
            <p>Amount</p>
            <Frame animate level={1} corners={3}>
              <input
                ref={this.state.ref.amount}
                value={this.state.amount}
                onChange={this.handleAmount}
                style={arwes.input}
              />
            </Frame>
          </section>

          <section style={arwes.section}>
            <Button
              onClick={() => {
                const url = `http://${this.state.node.domain}:${this.state.node.port}/transfer?receiver=${this.state.receiver}&amount=${this.state.amount}`;
                this.props.transfer(url);
              }}
              style={arwes.transferButton}
            >
              Transfer
            </Button>
          </section>
        </Content>

        <Footer animate style={arwes.footer}>
          <p>AngelHack Tokyo 2019</p>
        </Footer>
      </article>
    );
  }
}

// container
export default connect(
  state => state,
  dispatch => ({
    checkBalance: url => {
      dispatch(action.checkBalance(url));
    },
    checkBalanceDummy: url => {
      dispatch(action.checkBalanceDummy(url));
    },
    transfer: url => {
      dispatch(action.transfer(url));
    }
  })
)(ArwesTest);
