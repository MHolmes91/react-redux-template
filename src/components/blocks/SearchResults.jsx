import React from 'react';
 
export default class SearchResults extends React.Component {
	constructor(props){
		super(props);
		console.log('search results props');
		console.log(props);
	}

	render() {
		let debug = JSON.stringify(this.props);
		let isPending = this.props.isPending;

		let results = this.props.results;
		let resultsListType = this.props.type + 's';
		let resultsList = [];
		let resultsMeta = {};
		let totalResults = 0;
		let resultsOffset = 0;
		let resultsLimit = 0;

		if(results && results[resultsListType]){
			resultsMeta = results[resultsListType]
			resultsList = resultsMeta.items;
			totalResults = resultsMeta.total;
			resultsOffset = resultsMeta.offset;
			resultsLimit = resultsMeta.limit;
		}

		let type = this.props.type;

		let error = this.props.error;

		if(isPending){
			return (<div className="searchResultsMessage">Search Pending...</div>);
		}
		else{
			if(resultsList && resultsList.length){
				let resultsListJsx = resultsList.map(function(result){
					if(result.images.length){
						return <li>
							<a href={result.external_urls.spotify} target="_blank">
								<img src={result.images.pop().url} />
								<span>{result.name}</span>
							</a>
						</li>;
					}
					else{
						return <li>
							<a href="{result.external_urls.spotify}"><span>{result.name}</span></a>
						</li>;
					}
					
				});

				return(
					<div className="searchResultsContainer">
						<h2 className="searchResultsInfo">Showing { resultsOffset + 1 } - { resultsOffset + resultsLimit } of { totalResults } </h2>
						<ul className="searchResults">{resultsListJsx}</ul>
					</div>
				);
			}
			else{
				return(<div className="searchResultsMessage">No Results Found</div>);
			}
		}
	}
}