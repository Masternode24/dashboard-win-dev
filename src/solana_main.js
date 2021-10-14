import React from 'react';

class SolanaMain extends React.Component { 
     /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
      constructor(props) {
        super(props);
        this.state = {
            price: [],
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

        fetch('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT')
        .then(res => res.json())
        .then(json => {
            this.setState({
                price: json,
            })
        }).catch((err) => {
            console.log(err);
        });

        fetch('https://www.validators.app/api/v1/validators/mainnet/' + this.props.name, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Token': 'PxVMH4KK32mAwVVUQTRpiYvn'
            },
            mode: 'cors',
            method: "GET",
        })
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
        link = 'https://www.validators.app/api/v1/validators/mainnet/' + link
        console.log("LINK : " , link)
        const { isLoaded, items, price } = this.state;
        console.log("SOLANA : ", items)
        if (!isLoaded)
            return (
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
        <h4 className="my-0 fw-normal">Solana</h4>
        </div>
        <div className="card-body"><h1 className="card-title pricing-card-title"><small className="text-muted fw-light">Loading ...</small></h1>
        </div>
        </div>
    );

    return (
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
        <h4 className="my-0 fw-normal">Solana</h4>
        </div>
        <div className="card-body">
        {items.name}
        <h1 className="card-title pricing-card-title">{Math.round(items.active_stake/1000000000).toFixed(0)}<small className="text-muted fw-light">sol</small></h1>
        <ul className="list-unstyled mt-3 mb-4">

        <button type="button" className="btn btn-outline-dark position-relative">
        <li>{(Math.round(items.active_stake/1000000000).toFixed(2)*price.price).toFixed(2)} $</li>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
        <li>{Math.round(price.price).toFixed(2)} $</li>
        </span>
        </button>
        
        <li></li>

        <div className="spinner-border spinner-border-sm" role="status"></div>

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
  
export {SolanaMain};