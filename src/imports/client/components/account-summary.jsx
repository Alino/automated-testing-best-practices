import React from 'react';

export default React.createClass({
  render() {
    return (
       <div className="account-summary">
         $ <span className="account-summary__balance">{this.props.account.balance}</span>
       </div>
    );
  }
});
