import React,{Component} from 'react';

let textAlign={
    'textAlign':'center'
};

export default class ItemList extends Component{
    render(){
        let items= this.props.items;
        let html=items.map((obj,index)=>{return <tr>
                                        <td style={textAlign}>{obj.name}</td>
                                        <td style={textAlign}>{obj.qty}</td>
                                        <td style={textAlign}>{obj.qty*obj.price}</td>
                                        <td style={textAlign}>
                                            <button onClick={this.props.increaseItemQty.bind(this,index)}>+</button>
                                            <button onClick={this.props.decreaseItemQty.bind(this,index)}>-</button>
                                        </td>
            <td style={textAlign}><button onClick={this.props.removeItem.bind(this,index)}>Remove</button></td>
                                        </tr>});
        return <table className={'table table-striped table-bordered table-condensed'}>
               <thead>
                   <th style={textAlign}>Name</th>
                   <th style={textAlign}>Qty</th>
                   <th style={textAlign}>Price</th>
                   <th style={textAlign}>Action</th>
                   <th style={textAlign}>Remove</th>
               </thead>
               <tbody>
               {html}
               </tbody>
               </table>

    }
}