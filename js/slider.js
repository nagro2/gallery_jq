/* implementation of the "slider" photo gallery in jquery originally by Helping Develop */

sliderint = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider > img').fadeIn(300);
	startSlider();
});

function startSlider(){
	count = $('#slider >img').size();

	loop = setInterval(function(){ /*do the "function" every 3 seconds*/
		if(sliderNext > count){
			sliderNext = 1;
			sliderint=1;
		}


		$('#slider > img').fadeOut(300);
		$('#slider > img#' + sliderNext).fadeIn(300);

		sliderint = sliderNext;
		sliderNext = sliderNext + 1;

	}, 3000)
}

function prev(){
	newSlide = sliderint -1;
	showSlide(newSlide);

}




function next(){
	newSlide = sliderint +1;
	showSlide(newSlide);

}


function stopLoop(){
	window.clearInterval(loop); /* clears loop interval defined above. This stops the loop */

}

function showSlide(id){
		stopLoop();
		if(id > count){
			id = 1;
			}
		else if(id < 1){
			id = count;
			}
		
		$('#slider > img').fadeOut(300);
		$('#slider > img#' + id).fadeIn(300);

		sliderint = id;
		sliderNext = id + 1;
		startSlider(); /*restart the loop */

}


$('#slider > img').hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}
)


/*Note it would be easy to turn each image into a link by adding an a href tag to each image */
