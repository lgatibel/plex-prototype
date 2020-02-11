import React, {Component} from 'react';
import axios from 'axios';
    
class WatchLater extends Component {
    constructor() {
        super();
        this.state = { users: [], loading: true};
    }
    
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers() {
       axios.get(`https://localhost:8000/api/users`).then(users => {
           this.setState({ users: users.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <div>
                <h1>WATCH LATER</h1>
            </div>
        )
    }
}
export default WatchLater;

