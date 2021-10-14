import React from 'react';

class VelasMain extends React.Component { 
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

        fetch('https://api.binance.com/api/v3/ticker/price?symbol=VELASUSDT')
        .then(res => res.json())
        .then(json => {
            this.setState({
                price: json,
                isLoaded: true,
            })
        }).catch((err) => {
            console.log(err);
        });


        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }

          postData('https://api.velas.com', {"jsonrpc":"2.0", "id":1, "method":"getBalance", "params":["68sonvZZ9oeEuUsCvPqRMk36RjeQCp3BjJ1ZKvRM3L8m"]})
          .then(data => {
              this.setState({
                  items: data,
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
        link = 'https://velasity.com/validator/' + link
        console.log("LINK : " , link)
        const { isLoaded, items } = this.state;
        console.log("VELAS : ", items)
        if (!isLoaded)
            return (
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
        <h4 className="my-0 fw-normal">Velas</h4>
        </div>
        <div className="card-body"><h1 className="card-title pricing-card-title"><small className="text-muted fw-light">Loading ...</small></h1>
        </div>
        </div>
    );

    return (
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-white bg-primary border-primary">
        <h4 className="my-0 fw-normal">Velas <a href={link} className="text-white"><i className="bi bi-box-arrow-in-up-right"></i></a></h4>
        </div>
        <div className="card-body">
        {/*  <h4 className="text-red">{items.result.value}</h4> */}
        <ul className="list-unstyled mt-3 mb-4">
        {/*  {price.price} */}
        {/*  <button type="button" className="btn btn-dark position-relative"> 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        </span>
        </button>
        */}
        <li></li>

        <div className="spinner-border spinner-border-sm" role="status"></div>

        <li>Slot # No Info</li>

        </ul>
        <a href={link}>
        <button type="button" className="w-100 btn btn-lg btn-primary">More Info</button>
        </a>
        </div>
        </div>
        );
    }
} 
  
export {VelasMain};