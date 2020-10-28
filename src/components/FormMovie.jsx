import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://post-a-form.herokuapp.com/api/movies/';

class FormMovie extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          poster: '',
          comments: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`Film ajouté avec l'ID ${res.id} !`);
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
        });
    }

    render(){
        return(
            <div className="FormMovie">
                <h1>Saisie d'une critique de film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={this.onChange}
                        value={this.state.name}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">Poster</label>
                        <input
                        type="text"
                        id="poster"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.poster}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="comments">Comments</label>
                        <textarea
                        id="comments"
                        name="comments"
                        onChange={this.onChange}
                        value={this.state.comments}
                        />
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Send" />
                    </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default FormMovie;