const inputs = document.querySelectorAll('input');

function updateVariables() {
    const sizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}

inputs.forEach(input => input.addEventListener(('mousemove'), updateVariables));

inputs.forEach(input => input.addEventListener('change', updateVariables));