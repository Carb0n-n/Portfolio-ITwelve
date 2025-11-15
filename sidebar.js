(function () {
    const checkbox = document.getElementById('sidebar-toggle');
    if (!checkbox) return;

    // toggle when any navbar square button is clicked
    document.querySelectorAll('.navbar .btn-square').forEach(btn => {
        btn.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
        });
    });

    // close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') checkbox.checked = false;
    });
})();