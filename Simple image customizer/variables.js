function handleUpdate(){
	console.log(this.name);

	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty( "--" + this.name, this.value + suffix);
}

const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mouseover', handleUpdate));