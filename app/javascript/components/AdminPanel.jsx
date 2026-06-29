import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Heading } from './Heads';
import { createCocktail } from '../actions/index';

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      ingredients: '',
      image: '',
      errors: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addCocktail } = this.props;
    const { name, description, ingredients, image } = this.state;
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    fetch('/api/v1/cocktails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ name, description, ingredients, image }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'SUCCESS') {
          addCocktail(data.data);
          toast.success(`"${data.data.name}" added!`);
          this.setState({ name: '', description: '', ingredients: '', image: '', errors: [] });
        } else {
          this.setState({ errors: data.errors || ['Something went wrong.'] });
        }
      })
      .catch(() => this.setState({ errors: ['Network error. Please try again.'] }));
  }

  render() {
    const { currUser } = this.props;
    const { name, description, ingredients, image, errors } = this.state;

    if (currUser === null) {
      return <p className="text-center mt-5">Checking permissions...</p>;
    }

    if (!currUser.admin) {
      return <p className="text-center mt-5">Access Denied. Admins only.</p>;
    }

    return (
      <div>
        <Heading />
        <div className="container mt-4" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4">Add New Cocktail</h2>

          {errors.length > 0 && (
            <div className="alert alert-danger">
              {errors.map(err => <p key={err} className="mb-0">{err}</p>)}
            </div>
          )}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="form-control"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control"
                name="description"
                value={description}
                onChange={this.handleChange}
                rows={3}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                className="form-control"
                name="ingredients"
                value={ingredients}
                onChange={this.handleChange}
                rows={3}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                className="form-control"
                type="url"
                name="image"
                value={image}
                onChange={this.handleChange}
              />
            </div>

            {image && (
              <div className="mb-3">
                <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-block">
              Add Cocktail
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AdminPanel.propTypes = {
  currUser: PropTypes.instanceOf(Object),
  addCocktail: PropTypes.instanceOf(Function).isRequired,
};

AdminPanel.defaultProps = {
  currUser: null,
};

const mapStateToProps = state => ({ currUser: state.currUser });
const mapDispatchToProps = dispatch => ({
  addCocktail: cocktail => dispatch(createCocktail(cocktail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
