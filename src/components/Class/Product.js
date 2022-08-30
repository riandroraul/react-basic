import React from "react";

class Product extends React.Component {
  state = {
    count: 0,
    harga: 1000,
  };

  kurang = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  tambah = () => {
    this.setState({ count: this.state.count + 1 });
  };

  harga = () => {
    this.setState({ harga: this.state.harga * this.state.count });
    console.log(this.state.harga);
  };

  render() {
    return (
      <div>
        <h3>Nama Product: Iphone X</h3>
        <h3>Harga Product: {this.state.harga}</h3>
        <h5>Jumlah Product: {this.state.count} </h5>
        <span>
          <button
            onClick={() => {
              this.tambah();
            }}
          >
            +
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              this.kurang();
            }}
          >
            -
          </button>
        </span>
      </div>
    );
  }
}

export default Product;
