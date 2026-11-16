import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
        viewMode: 'cards',
        };
    }

    handleSwitch = () => {
        this.setState((prevState) => ({
        viewMode: prevState.viewMode === 'cards' ? 'list' : 'cards',
        }));
    };

    render() {
        const { products } = this.props;
        const { viewMode } = this.state;
        const icon = viewMode === 'cards' ? 'view_list' : 'view_module';

        return (
        <div className="store-container">
            <div className="toolbar">
            <IconSwitch icon={icon} onSwitch={this.handleSwitch} />
            </div>
            
            {viewMode === 'cards' 
            ? <CardsView cards={products} /> 
            : <ListView items={products} />
            }
        </div>
        );
    }
}