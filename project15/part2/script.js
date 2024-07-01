

const counters = document.querySelectorAll('.counder');

counters.forEach(counter => {
    counter.innerHTML = '0';

    const updateCounder = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerHTML;

        const increament = target / 200;
        if(c < target) {
            counter.innerHTML = `${Math.ceil(c + increament)}`;
            setTimeout(updateCounder, 1);
        } else {
            counter.innerHTML = target;
        }

    }
    updateCounder();
})

// j