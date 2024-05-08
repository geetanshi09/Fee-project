function showSpaceNotification(message) {
    const toastContainer = document.getElementById('toastContainer');

    // Create a new toast element
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = message;

    // Add the toast to the container
    toastContainer.appendChild(toast);

    // Trigger a reflow to animate the entrance
    toast.offsetWidth; // eslint-disable-line no-unused-expressions

    // Show the toast
    toast.classList.add('show');

    // Hide the toast after a delay (e.g., 5 seconds)
    setTimeout(() => {
        toast.classList.remove('show');

        // Remove the toast from the DOM after the animation is complete
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 500);
    }, 5000);
}

// Sample usage
showSpaceNotification("Astronauts have discovered a new exoplanet!");
