import React from 'react';
import SHOP from './shop';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           collections: SHOP
        };
    }

    render() {
        return <div>SHOP PAGE</div>; 
    }
}

export default ShopPage;