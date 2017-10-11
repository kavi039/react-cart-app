import React,{Component} from 'react';

export default class InputItem extends Component{

    render(){
        return <input type={'text'} className={'form-control'}
               placeholder={'Enter item,quantity and price per unit seprated by hyphen(-)'}
                      onKeyUp={this.props.insertItem}/>
    }
}