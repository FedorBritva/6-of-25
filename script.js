let index = 0;

nextImage(index);


function nextImage(i) {
	index += i;
	let images = document.getElementsByClassName('image');
	let dots = document.getElementsByClassName('dot');


	for (i = 0; i < images.length; i++) {
		images[i].style.display = 'none'
	}

	for (i = 0; i < images.length; i++) {
		dots[i].className = dots[i].className.replace('active', '')
	}

	if (index < 0) {
		index = images.length - 1;
	}
	if (index == images.length) {
		index = 0;
	}

	images[index].style.display = 'block';
	dots[index].classList.add('active');
	console.log(index);
	console.log(dots[index].className);
}

function showImage(num) {
	index = num;
	let images = document.getElementsByClassName('image');
	let dots = document.getElementsByClassName('dot');


	for (i = 0; i < images.length; i++) {
		images[i].style.display = 'none'
	}

	for (i = 0; i < images.length; i++) {
		dots[i].className = dots[i].className.replace('active', '')
	}
	console.log(num);

	images[num].style.display = 'block';
	dots[num].classList.add('active');
}