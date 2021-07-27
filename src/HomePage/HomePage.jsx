import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
        this.reload();
       // reRender()
    }

    reRender(){
        this.props.getTickets();
        //this.props.getBook();
    }

    reload(){
        this.props.getTickets();
        this.props.getBook();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users, ticker, book } = this.props;
        setInterval(this.reRender(), 10) 
        return (
            <div className="Title">
                <div>
                    <h1>Tickers</h1>
                    <div className="Title-Subtitle">You're logged in with {user.firstName}</div>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
                <p onClick={()=>this.reload()}>reconnect</p>
                <div>
                    {ticker && ticker.items && ticker.items.data.map((item, x) => {
                        return (
                            <div key={x}>
                                <p>current {item[0]} -  {item[1]}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <table responsive striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th style={{margin:'10px', padding:'10px'}}>PRICE</th>
                                <th style={{margin:'10px', padding:'10px'}}>COUNT</th>
                                 <th style={{margin:'10px', padding:'10px'}}>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                        {book && book.items && book.items.data.map((itm, v) => {
                        return (
                            <tr key={v}>
                                <td style={{margin:'10px', padding:'10px'}}>{itm[0]}</td>
                                <td style={{margin:'10px', padding:'10px'}}>{itm[1]}</td>
                                <td style={{margin:'10px', padding:'10px'}}>{itm[2]}</td>
                            </tr>
                        )
                    })}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication, ticker, book } = state;
    const { user } = authentication;
    return { user, users, ticker, book };
}

const actionCreators = {
    getUsers: userActions.getAll,
    getTickets: userActions.getTickets,
    deleteUser: userActions.delete,
    getBook: userActions.getBook
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };