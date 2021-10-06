import React from 'react';

class SolanaTest extends React.Component { 
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
        fetch('https://www.validators.app/api/v1/validators/testnet/' + this.props.name, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Token': 'PxVMH4KK32mAwVVUQTRpiYvn'
            },
            mode: 'cors',
            method: "GET",
        },)
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
        var link = this.props.name
        link = 'https://www.validators.app/api/v1/validators/testnet/' + link
        console.log("LINK : " , link)
        const { isLoaded, items } = this.state;
        console.log("SOLANA : ", items)
        if (!isLoaded)
            return (
        <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
        <h4 className="my-0 fw-normal">Solana</h4>
        </div>
        <div className="card-body"><h1 className="card-title pricing-card-title"><small className="text-muted fw-light">Loading ...</small></h1>
        </div>
        </div>
    );

    return (
        <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
        <h4 className="my-0 fw-normal">Solana</h4>
        </div>
        <div className="card-body">
        {items.name}
        <h1 className="card-title pricing-card-title">{Math.round(items.active_stake/1000000000).toFixed(0)}<small className="text-muted fw-light">sol</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
        <li>Epoch # {items.epoch} / Skipped Slots : {items.skipped_slots}</li>
        <li>Jailed : {items.delinquent.toString()}</li>
        <li>Commision : {items.commission} %</li>
        </ul>
        <a href={link}>
        <button type="button" className="w-100 btn btn-lg btn-primary">More Info</button>
        </a>
        </div>
        </div>
        );
    }
} 
  
export {SolanaTest};