import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { refreshToken } from '../../pages/Login/redux/action';
const PrivateRoute = (props) => {
  // componentDidMount() {
  //   this.props.refreshToken();
  // }

  useEffect(() => {
    if (!props.baseApp.appLoading) {
      // props.refreshToken();
    }
  }, [props.baseApp.appLoading]);

  // render() {
  const { path, exact, component, login, baseApp } = props;
  const { isLogin, isRefresh } = login;

  if (isRefresh) {
    return <h1> Loading </h1>;
  }

  if (baseApp.appLoading) {
    return <h1> Loading </h1>;
  }
  if (!isLogin) {
    return <Redirect to="/login" />;
  }
  return <Route path={path} exact={exact} component={component} />;
};
// }

PrivateRoute.propTypes = {
  login: PropTypes.object.isRequired,
  component: PropTypes.any,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  baseApp: PropTypes.object.isRequired,
  refreshToken: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { login, baseApp } = state;
  return { login, baseApp };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      refreshToken,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
