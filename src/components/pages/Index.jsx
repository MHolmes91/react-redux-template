import React from 'react';
import SearchForm from '../../containers/forms/SearchContainer.jsx';
import SearchResults from '../../containers/blocks/SearchResultsContainer.jsx';
import { Link } from 'react-router';

//Example of using an image and a link
let templateImageSrc = require('../../assets/template-image.png');
 
export default class Index extends React.Component {
	render() {
		return (
			<div>
				<img src={ templateImageSrc } />
				<h1>
					Search For Music
				</h1>
				<SearchForm />
				<br />
				<SearchResults />
				<br />
				<a href="https://api.spotify.com" target="_blank">Powered by the Spotify API</a>
			</div>
		)
	}
}