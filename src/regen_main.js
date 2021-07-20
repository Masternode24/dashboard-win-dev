import React from 'react';

class RegenMain extends React.Component { 
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

        fetch('https://regen.stakesystems.io/staking/validators/'+this.props.name,
        {
            method: "GET",
            mode: 'cors'
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

        const { isLoaded, items } = this.state;
        console.log("REGEN : ", items)
        if (!isLoaded)
            return (
<div className="card mb-4 rounded-3 shadow-sm border-primary">
<div className="card-header py-3 text-white bg-primary border-primary">
<h4 className="my-0 fw-normal">Regen</h4>
</div>
<div className="card-body"><h1 className="card-title pricing-card-title"><small className="text-muted fw-light">Loading ...</small></h1>
</div>
</div>
);

    return (
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
        <h4 className="my-0 fw-normal">Regen</h4>
        </div>
        <div className="card-body">
        {items.result.description.moniker}
        <h1 className="card-title pricing-card-title">{Math.round(items.result.tokens/1000000).toFixed(0)}<small className="text-muted fw-light">kava</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
        <li>Block # {items.height}</li>
        <li>Jailed : {items.result.jailed.toString()}</li>
        <li>Commision : {items.result.commission.commission_rates.rate*100} %</li>
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-primary">More Info</button>
        </div>
        </div>
        );
    }
} 
  
export {RegenMain};