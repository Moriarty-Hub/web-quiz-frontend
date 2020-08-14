import React from 'react';
import "../styles/App.css";
import Item from "./Item"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/get-item-list')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((products) => {
                this.items = products.map(product => {
                    return {
                        name: product.name,
                        price: product.price,
                        picture: product.picture
                    }
                })
            });
    }


    render() {
        return (
            <div class="home">
                {this.state.items.map((item) => (
                    <Item
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        picture={item.picture}
                    />
                ))}
            </div>
    )}
}

export default Home;
