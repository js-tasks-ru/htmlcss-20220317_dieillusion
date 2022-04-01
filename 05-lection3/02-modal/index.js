(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const modalMask = document.getElementById('modal-mask');

    if (!close || !modalOpen || !modal || !modalMask) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
        modalMask.style.display = 'block';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
        modalMask.style.display = 'none';
    });
})();
