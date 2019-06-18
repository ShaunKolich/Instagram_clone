import React from 'react';
import '../less/SearchBar.css'
import { Component } from 'react';
import Instagram from '../../img/insta logo.png'


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newQuery: '',
        };


    }
    render() {
        const { newQuery } = this.state;
        return (
            <div className = "SearchBar_Container">
                <img src={Instagram} alt =""></img>
                <form>
                    <input type="text" className="input" id="addInput" placeholder="Search" />
                </form>
                <div className="Instagram_Icons">
                    <i className ="far fa-compass"></i>
                    <i className ="far fa-heart"></i>
                    <i className ="far fa-user"></i>
                </div>
            </div>
           
            
            


        )

    }

}

export default SearchBox;