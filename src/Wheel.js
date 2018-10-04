import React, {Component} from 'react';
import './Wheel.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Wheel extends Component {
    constructor(){
        super()

        this.state = {
            itemList: []
        }
    }

    componentDidMount(){
        axios.get('/wheel').then( res => {
            function getItems(){
                let list = []
                for(let i =0;i < res.data.length;i++){
                    list.push(res.data[i])
                }
                return list
            }
            this.setState({itemList: getItems()})
        })
    }

    scrollDiv(){
            document.getElementById("wheelContainer").scrollLeft += 800;
    }

    scrollRight(){
        var container = document.getElementById('wheelContainer');
        var scrollAmount = 0;
        var slideTime = setInterval(function(){
            container.scrollLeft += 10;
            scrollAmount += 10;
            if(scrollAmount >= (window.innerWidth * .925)){
                window.clearInterval(slideTime)
            }
        }, 8)
    }

    scrollLeft(){
        var container = document.getElementById('wheelContainer');
        var scrollAmount = 0;   
        var slideTime = setInterval(function(){
            container.scrollLeft -= 10;
            scrollAmount += 10;
            if(scrollAmount >= (window.innerWidth * .925)){
                window.clearInterval(slideTime)
            }
        }, 8)
    }

    render(){

        let listDisplay = this.state.itemList.map( (el, ind ) => {
            return (
            <div className='wheelItem' key={ind}>
        <Link to={`/item/${el.id}`} className='buttonLink'>
        <img className='wheelPic' src={el.picture} alt=''></img></Link>
                <div className='wheelName'><Link to={`/item/${el.id}`}
                style={{textDecoration: 'none', color: 'white'}} >{el.name}</Link></div>
            </div>
            )
        })

        return(
            <div>

                <div className='wheelContainer' id='wheelContainer'>
                    <div className='wheelLeft' onClick={ ()=> this.scrollLeft()}><div className='leftArrow'>←</div>
                    </div>
                    
                    {listDisplay}

                    <div className='wheelRight' onClick={ () => this.scrollRight()}><div className='rightArrow'>→</div>
                    </div>
                </div>


            </div>
        )
    }






}

export default Wheel;