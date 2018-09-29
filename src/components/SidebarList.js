import React from 'react';
import {Link} from 'react-router-dom';

export default class SidebarList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      expandList: false
    }
  }

  render(){
    const {items, itemLink, header} = this.props;
    const {expandList} = this.state;
    return (
      <div className="sidebar-list-container">
        <div className="sidebar-list-header">
          {header}
          <div onClick={()=>this.setState({expandList: !expandList})} className="expand-icon-container">
            { expandList ?
              <i class="material-icons expand-icon">arrow_drop_up</i>
              :
              <i class="material-icons expand-icon">arrow_drop_down</i>
            }
          </div>
        </div>
        {
          expandList &&
          <ul className="sidebar-list">
           {
             items.map((item)=>{
               return (
                 <Link to={itemLink + item.id}>
                   <li key={item.id}>
                     <h5>{item.name}</h5>
                   </li>
                 </Link>
               )
             })
           }
          </ul>
        }

      </div>
    )
  }
}
