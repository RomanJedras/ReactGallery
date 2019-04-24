var image = {
	name: 'Kotek',
	src: 'http://imgur.com/n8OYCzR.png'
};

let movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: './images/moves/harry/actor.png'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: "./images/moves/liyon/krol-lew-grafika.jpg"
	},
	{
		id: 3,
		title: 'Kapitan Marvel',
		desc:   'Film o kapitan Marvel',
		img: "./images/moves/marvel/Kapitan-Marvel.jpg"
	}
];

const MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	
	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		);
	},
});

const MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	},
});

const MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired,
	},
	
	render: function(){
		return (
			React.createElement('img', {
				src: this.props.image,
				style: {
					width:"200px",
					height:"auto"}
			}
			)
		);
	},
});

const Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	
	render: function () {
		return (
			React.createElement('li', {key:this.props.movie.id, className: 'list-item__item'} ,
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {image: this.props.movie.img}))
		);
	}
});

const moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key: movie.id, movie:movie}
	);
});

const MoviesList = React.createElement('div', {},
		React.createElement('h1', {className: 'list-item__heading'}, 'Lista filmów'),
		React.createElement('ul', {className: 'list-item__list'}, moviesElements)
	);

ReactDOM.render(MoviesList, document.getElementById('app'));







// let GalleryItem = React.createClass({
// 	propTypes: {
// 		image: React.PropTypes.object.isRequired,
// 	},
//
// 	render: function() {
// 		return (
// 			div({},
// 				React.createElement('h2', {}, this.props.image.name),
// 				React.createElement('img', {src: this.props.image.src})
// 			)
// 		)
// 	},
//
// });
//
// const element = React.createElement(GalleryItem,{image: image});
// ReactDOM.render(element, document.getElementById('app'));