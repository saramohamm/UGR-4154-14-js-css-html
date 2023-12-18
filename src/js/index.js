document.addEventListener('DOMContentLoaded', function () {
    // Create menu icon container
    const menuIconContainer = document.createElement('div');
    menuIconContainer.setAttribute('id', 'menu-icon-container');

    // Create menu icon label
    const menuIconLabel = document.createElement('label');
    menuIconLabel.setAttribute('for', 'menu-toggle');
    menuIconLabel.setAttribute('id', 'menu-icon');
    menuIconLabel.innerHTML = '&#9776;';

    // Append the label to the container
    menuIconContainer.appendChild(menuIconLabel);

    // Create menu toggle checkbox
    const menuToggle = document.createElement('input');
    menuToggle.setAttribute('type', 'checkbox');
    menuToggle.setAttribute('id', 'menu-toggle');

    // Create menu
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    // Create navigation
    const nav = document.createElement('nav');

    // Get all links in the navigation menu
    const menuLinks = document.querySelectorAll('.headerss a');

    // Populate navigation with links
    Array.from(menuLinks).forEach(link => {
        const menuItem = document.createElement('a');
        menuItem.setAttribute('href', link.getAttribute('href'));
        menuItem.textContent = link.textContent;
        nav.appendChild(menuItem);
    });

    // Append menu items to the menu
    menu.appendChild(nav);

    // Append elements to the body
    document.body.appendChild(menuIconContainer);
    document.body.appendChild(menuToggle);
    document.body.appendChild(menu);

    // Add click event to the menu icon label
    menuIconLabel.addEventListener('click', function () {
        // Toggle the checkbox when the label is clicked
        menuToggle.checked = !menuToggle.checked;

        // Toggle the visibility of the menu
        menu.style.display = menuToggle.checked ? 'block' : 'none';
    });

    

    // Make the menu icon fixed at the top
    menuIconContainer.style.position = 'fixed';
    menuIconContainer.style.top = '0';

    // Set the width of the menu icon container to full screen with right margin
    menuIconContainer.style.width = 'calc(100% - 50px)'; // Full screen width with 50px right margin
});
document.addEventListener('DOMContentLoaded', function () {
    // Create a button element for dark mode toggle
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Enable Dark Mode';

    // Apply styles to position the button
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.top = '50px';
    darkModeButton.style.right = '50px';

    // Append the button to the body
    document.body.appendChild(darkModeButton);

    // Add a click event listener to the dark mode button
    darkModeButton.addEventListener('click', function () {
        // Toggle dark mode by adding/removing a class on the body
        document.body.classList.toggle('dark-mode');
    });
});

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
