import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase'

class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    render() {
        return (
            <div className="component welcomeScreen">
                {this.state.isSignedIn ? <Link to="/navbar"></Link> : console.log('not logged in')}

                <div className="component">
                    <div className="row"> 
                        <image src={}></image>
                    </div>
                </div>

                <div className="row center">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                        Soy de BanIgualdad
                    </button>
                </div>

                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row center">
                    <h4><Link to="/login" className="btn btn-outline-primary">Vengo a conocer</Link></h4>
                </div>
            </div>
        )
    }
}

export default Welcome;