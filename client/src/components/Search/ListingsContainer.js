import React, { Component } from 'react';
import Listing from './Listing';
import './listings.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setListings } from '../../store/listings';



class ListingsContainer extends Component {
    
    componentWillMount() {
        this.props.setListings();
    }
    
    
    render(){
        return (
        <div className="listings-container">
            <div className="listings">
                {this.props.listings.map((listing) => <Listing listing={listing} key={listing.id} />)}
            </div>
        </div>
            )
        }
    }

    function mapReduxStateToProps(reduxState){
        return {
            listings: reduxState.listings
        }
    }
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {setListings: setListings},
        dispatch
    )
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ListingsContainer);