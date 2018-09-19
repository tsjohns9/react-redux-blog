import React, { Component } from 'react';
import API from '../../util/API';
import SimpleMap from './map';

export default class Author extends Component {
  constructor(props) {
    super(props);
    this.state = { author: null };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    API.getAuthors(id)
      .then(result => {
        this.setState({ author: result });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.author) {
      return <div className="loader" />;
    }
    return (
      <section className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">{this.state.author.name}</h2>
            <h5 className="mb-4">Contact</h5>
            <p>{this.state.author.email}</p>
            <p>{this.state.author.phone}</p>
            <p>{this.state.author.website}</p>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">About Me</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
              quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </div>
        </div>
        <h3 className="text-center my-5">Location</h3>
        <p className="text-center">
          {this.state.author.address.street}, {this.state.author.address.city}
        </p>
        <div style={{ height: '300px' }}>
          <SimpleMap isMarkerShown address={this.state.author.address} />
        </div>
      </section>
    );
  }
}
