import React, { Component } from 'react';

class comicBook extends Component {	
    constructor(props) {
        super(props);
        this.state = {
					data:[]
				}
    }
  render(){
    return(
      <div>{item.comics.items.map((subitem, i)=> {
			  return (
					<ul key={i}>					
						<li>{subitem.name}</li>
					</ul>
        )
			})}
			</div>
    )
  }
}
	
export default comicBook;
