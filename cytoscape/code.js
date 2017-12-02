$(function(){ // on dom ready

// photos from flickr with creative commons license
  
var cy = cytoscape({
  container: document.getElementById('cy'),
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'height': 80,
        'width': 80,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 3,
        'border-opacity': 0.5
      })
    .selector('.eating')
      .css({
        'border-color': 'red'
      })
    .selector('.eater')
      .css({
        'border-width': 9
      })
    .selector('edge')
      .css({
        'width': 6,
        'target-arrow-shape': 'triangle',
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa'
      })
    .selector('#ld')
      .css({
        'background-image': '../images/ld.jpg'
      })
    .selector('#subo')
      .css({
        'background-image': '../images/subo.jpg'
      })
    .selector('#basant')
      .css({
        'background-image': '../images/basant.jpg'
      })
  .selector('#priyanka')
      .css({
        'background-image': '../images/priyanka.jpg'
      })
  .selector('#ss')
      .css({
        'background-image': '../images/ss.jpg'
      })
  .selector('#vartika')
      .css({
        'background-image': '../images/vartika.jpg'
      })
  .selector('#aditi')
      .css({
        'background-image': '../images/aditi.jpg'
      })
  .selector('#bhavna')
      .css({
        'background-image': '../images/bhavna.jpg'
      })
	.selector('#indra')
      .css({
        'background-image': '../images/indra.jpg'
      })
	  .selector('#krishna')
      .css({
        'background-image': '../images/krishna.jpg'
      })
	  .selector('#nitin')
      .css({
        'background-image': '../images/nitin.jpg'
      })
	  .selector('#pracheta')
      .css({
        'background-image': '../images/pracheta.jpg'
      })
	  .selector('#shikha')
      .css({
        'background-image': '../images/shikha.jpg'
      })
	   .selector('#xyz')
      .css({
        'background-image': '../images/xyz.jpg'
      })
	    .selector('#kopal')
      .css({
        'background-image': '../images/kopal.jpg'
      })
	   .selector('#song3')
      .css({
        'background-image': '../images/song3.jpg'
      })
	   .selector('#song1')
      .css({
        'background-image': '../images/song1.jpg'
      })
	   .selector('#song2')
      .css({
        'background-image': '../images/song1.jpg'
      })
	   .selector('#fashion1')
      .css({
        'background-image': '../images/fashion.jpg'
      })
	   .selector('#fashion2')
      .css({
        'background-image': '../images/fashion.jpg'
      })
	   .selector('#fashion3')
      .css({
        'background-image': '../images/fashion.jpg'
      })
	   .selector('#fashion4')
      .css({
        'background-image': '../images/fashion.jpg'
      })
	   .selector('#play')
      .css({
        'background-image': '../images/play.jpg'
      })
	   .selector('#dance')
      .css({
        'background-image': '../images/dance.jpg'
    //  })
      }),
  
  elements: {
    nodes: [
      { data: { id: 'ld' } },
      { data: { id: 'subo' } },
      { data: { id: 'aditi' } },
      { data: { id: 'basant' } },
      { data: { id: 'bhavna' } },
      { data: { id: 'indra' } },
      { data: { id: 'kopal' } },
      { data: { id: 'krishna' } },
      { data: { id: 'nitin' } },
      { data: { id: 'pracheta' } },
      { data: { id: 'priyanka' } },
      { data: { id: 'shikha' } },
      { data: { id: 'ss' } },
      { data: { id: 'vartika' } },
	  { data: { id: 'dance' } },
	  { data: { id: 'song1' } },
	  { data: { id: 'song2' } },
	  { data: { id: 'song3' } },
	  { data: { id: 'play' } },
	  { data: { id: 'fashion1' } },
	  { data: { id: 'fashion2' } },
	  { data: { id: 'fashion3' } },
	  { data: { id: 'fashion4' } },
	  { data: { id: 'xyz' } }
	  
    ],
    edges: [
	//songs1
     { data: { source: 'song1', target: 'indra' } },
	  { data: { source: 'song1', target: 'basant' } },
	  { data: { source: 'song1', target: 'subo' } },
	  { data: { source: 'song1', target: 'bhavna' } },
	  //song2
	  { data: { source: 'song2', target: 'indra' } },
	  { data: { source: 'song2', target: 'basant' } },
	  { data: { source: 'song2', target: 'pracheta' } },
	  { data: { source: 'song2', target: 'kopal' } },
	  { data: { source: 'song2', target: 'bhavna' } },
	  //song3
	  { data: { source: 'song3', target: 'aditi' } },
	  //dance
	  { data: { source: 'dance', target: 'xyz' } },
	   { data: { source: 'dance', target: 'shikha' } },
	    { data: { source: 'dance', target: 'priyanka' } },
		 { data: { source: 'dance', target: 'ss' } },
	  //play
	   { data: { source: 'play', target: 'ss' } },
	    { data: { source: 'play', target: 'xyz' } },
	  { data: { source: 'play', target: 'indra' } },
	  //fashion1
	  { data: { source: 'fashion1', target: 'pracheta' } },
	  { data: { source: 'fashion1', target: 'ld' } },
	  //fashion2
	  { data: { source: 'fashion2', target: 'indra' } },
	  { data: { source: 'fashion2', target: 'bhavna' } },
	  //fashion3
	  { data: { source: 'fashion3', target: 'nitin' } },
	  { data: { source: 'fashion3', target: 'aditi' } },
	 //fashion4
	  { data: { source: 'fashion4', target: 'krishna' } },
	  { data: { source: 'fashion4', target: 'vartika' } }
    ]
  },
  
  layout: {
     name: 'springy',

  animate: true, // whether to show the layout as it's running
  maxSimulationTime: 100000, // max length in ms to run the layout
  ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
  fit: true, // whether to fit the viewport to the graph
  padding: 0, // padding on fit
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  random: false, // whether to use random initial positions
  infinite: true, // overrides all other options for a forces-all-the-time mode
  ready: undefined, // callback on layoutready
  stop: undefined, // callback on layoutstop

  // springy forces
  stiffness: 200,
  repulsion: 2000,
  damping: 0.15
  }
  
});
}); 