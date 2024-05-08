console.log("hi")
// Selecting DOM elements
const notifications = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");

// Details for each type of toast notification
const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast.',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: This is an error toast.',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast.',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info: This is an information toast.',
    }
};

// Function to remove a toast
const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
};

// Function to create a new toast
const createToast = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    
    notifications.appendChild(toast);

    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

// Event listeners for buttons to trigger toast creation
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});
