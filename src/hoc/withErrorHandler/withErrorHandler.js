import React, { Component } from 'react';
import GeneralModal from '../../components/UI/GeneralModal/GeneralModal';
import Auxiliary from '../Auxiliary/Auxiliary';

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
    this.reqInterceptor =  axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
     this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    errorConfirmHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Auxiliary>
          <GeneralModal
            show={this.state.error}
            modalClosed={this.errorConfirmHandler}
          >
            {this.state.error
              ? 'Ops ! ' + this.state.error.message
              : null}
          </GeneralModal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default WithErrorHandler;
