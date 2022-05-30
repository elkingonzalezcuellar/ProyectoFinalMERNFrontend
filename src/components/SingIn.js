import React, { Component } from 'react'
import axios from 'axios'
export default class SingIn extends Component {
   state = { 
        email:'',
        password:'',
    }

      onChangeEmail = e => {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword = e => {
        this.setState({
            password: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/users', {
            email:this.state.email,
            password:this.state.password,
        });
        this.setState({ email: '' ,password: ''});
    }

  render() {
    return (
<div className="row">
  <div className="col-md-4 mx-auto">
    <div className="card mt-4 text-center">
      <div className="card-header">
        <h1 className="h4">
          Account Login
        </h1>
      </div>
        <img className="rounded-circle mx-auto d-block logo m-4" src="/bingo.png" alt="Logo"/>
      <div className="card-body">
                           <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                
                                <input
                                    className="form-control"
                                    value={this.state.email}
                                    type="text"
                                    placeholder='Email'
                                    onChange={this.onChangeEmail}
                                />
                                <input
                                    className="form-control"
                                    value={this.state.password}
                                    type="password"
                                    placeholder='Password'
                                    onChange={this.onChangePassword}
                                />


                          
                                                               
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Sing In
                    </button>
                        </form>

      </div>
    </div>
  </div>
</div>

    )
  }
}
