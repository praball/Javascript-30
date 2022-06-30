const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    let inBetween = false;      //flag
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them inbetween.');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    //console.log(e);
    lastChecked = this;
}

checkboxes.forEach(checkboxes => checkboxes.addEventListener('click', handleCheck));