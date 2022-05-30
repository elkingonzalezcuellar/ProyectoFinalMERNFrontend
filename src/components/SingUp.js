import React, { Component } from 'react'
import axios from 'axios'


export default class SingUp extends Component {

 state = {
        name: '',
        email:'',
        password:'',
        confirm_password : '',

        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:5000/api/users');
        this.setState({
            users: res.data
        });
    }

    onChangeName = e => {
        this.setState({
            name: e.target.value
        })
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
    onChangeConfirmPassword = e => {
        this.setState({
            confirm_password: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/users', {
            name: this.state.name,
            email:this.state.email,
            password:this.state.password,
            confirm_password:this.state.confirm_password
        });
        this.setState({ name: '' , email: '' ,password: '', confirm_password:''});
        this.getUsers();
    }



  render() {
    return (
      <div className="modal-content">
        <div className="modal-body ">
          <div className="container">
            <div className="row">
               <div className="col-md-4 mx-auto">
                 <div class="card">
                   <div class="card-header">
                     Account Register
                   </div>
                                     <div className="card card-body">
                   
                   <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.name}
                                    type="text"
                                    placeholder='Name'
                                    onChange={this.onChangeName}
                                />
                                
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
                                <input
                                    className="form-control"
                                    value={this.state.confirm_password}
                                    type="password"
                                    placeholder='Confirm password'
                                    onChange={this.onChangeConfirmPassword}
                                />                               
                                                               
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Sing Up
                    </button>
                        </form>
                 </div>

                 </div>


               </div>
            </div>

            
          </div>
        </div>

      </div>


      
 
    )
  }
}
