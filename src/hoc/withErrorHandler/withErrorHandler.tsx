import React, { ComponentElement, Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux/Aux'
import { AxiosInstance } from 'axios'

interface Props {

}

interface State {
  error: {isAxiosError: boolean } | null
}

const WithErrorHandler: any = (WrappedComponent: any, axios: AxiosInstance) => {
  return class extends Component<State, Props> {
    state = {
      error: null
    }
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })

      axios.interceptors.response.use(res => res, error => {
        debugger
        this.setState({error: error})
      } )
    }

    errorConfirmedHandler() {
      this.setState({error: null})
    }

    render() {
      return (
        <Aux>
          <Modal
            show={Object.keys(this.state.error)}
            modalClose={this.errorConfirmedHandler }>
            {this.state.error ? this.state.error : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}


export default WithErrorHandler
