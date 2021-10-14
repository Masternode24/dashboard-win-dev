import React from 'react';


class Node extends React.Component { 
     /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
      constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch(this.props.name)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, items } = this.state;
        console.log(items)
        if (!isLoaded)
            return (
            <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between">
            Loading ...
            </li>
            </ul>
);


    return (
<ul className="list-group mb-3">

<a href={this.props.name} className="list-group-item list-group-item-action list-group-item-light" aria-current="true">
   [ Full API ]
  </a>
            <li className="list-group-item d-flex justify-content-between">
            <span>Node IP</span>
            <strong><mark>{items.ip}</mark></strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
            <span>Catch Up</span>
            <strong><mark>TESTING ...</mark></strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
            <span>Ver.</span>
            <strong><mark>{items.ver}</mark></strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
            <span>RAM T/F/U</span>
            <strong>{Math.round((items.ram.total)/1000000).toFixed(0)} / {Math.round((items.ram.free)/1000000).toFixed(0)} / {Math.round((items.ram.usage)/1000000).toFixed(0)} Mb</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
            <span>Mount Point  [ {items.disks[0].mountPoint} ] </span>
            <strong>{Math.round((items.disks[0].percent)).toFixed(0)}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
             <span>Mount Point [ {items.disks[1].mountPoint} ]</span>
            {
                Math.round((items.disks[1].percent)).toFixed(0) > 85 && 
                <strong className="text-danger">{Math.round((items.disks[1].percent)).toFixed(0)} %</strong>
            }
            {
                Math.round((items.disks[1].percent)).toFixed(0) < 85 && 
                <strong>{Math.round((items.disks[1].percent)).toFixed(0)} %</strong>
            }
            </li>
            <li className="list-group-item d-flex justify-content-between">
            <span>CPU %</span>
            {
               Math.round(items.cpu.usage) < 33 && 
               <strong>{Math.round((items.cpu.usage))} %</strong>
            }
             {
               Math.round(items.cpu.usage) > 33 && 
               <strong className="text-danger">{Math.round((items.cpu.usage))} %</strong>
            }
            </li>
            <li className="list-group-item d-flex justify-content-between">
            <span>Uptime</span>
            <strong>{Math.round((items.hostInfo.uptime)/60/60/24).toFixed(0)} Days</strong>
            </li>
        </ul>
        );   
    }
} 
  
export {Node};