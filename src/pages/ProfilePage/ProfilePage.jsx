import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import ProfileForm from '../../components/ProfileForm/ProfileForm';


const ProfilePage = (props) => (
    <Router>
        <div>
            <button>
                <NavLink to="/createprofile" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>Become a Supporter</NavLink>{' '}
                <Route exact path="/createprofile" component={ProfileForm} />
            </button>

        </div>

    </Router>
);

export default ProfilePage;
