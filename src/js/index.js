document.addEventListener('DOMContentLoaded', function () {
    
    const menuIconContainer = document.createElement('div');
    menuIconContainer.setAttribute('id', 'menu-icon-container');

    
    const menuIconLabel = document.createElement('label');
    menuIconLabel.setAttribute('for', 'menu-toggle');
    menuIconLabel.setAttribute('id', 'menu-icon');
    menuIconLabel.innerHTML = '&#9776;';

   
    menuIconContainer.appendChild(menuIconLabel);

    
    const menuToggle = document.createElement('input');
    menuToggle.setAttribute('type', 'checkbox');
    menuToggle.setAttribute('id', 'menu-toggle');

  
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    
    const nav = document.createElement('nav');

    
    const menuLinks = document.querySelectorAll('.headerss a');

   
    Array.from(menuLinks).forEach(link => {
        const menuItem = document.createElement('a');
        menuItem.setAttribute('href', link.getAttribute('href'));
        menuItem.textContent = link.textContent;
        nav.appendChild(menuItem);
    });

   
    menu.appendChild(nav);

    
    document.body.appendChild(menuIconContainer);
    document.body.appendChild(menuToggle);
    document.body.appendChild(menu);

    
    menuIconLabel.addEventListener('click', function () {
       
        menuToggle.checked = !menuToggle.checked;

        
        menu.style.display = menuToggle.checked ? 'block' : 'none';
    });

    

    
    menuIconContainer.style.position = 'fixed';
    menuIconContainer.style.top = '0';

   
    menuIconContainer.style.width = 'calc(100% - 50px)'; 
});
document.addEventListener('DOMContentLoaded', function () {
    
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Enable Dark Mode';

    
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.top = '50px';
    darkModeButton.style.right = '50px';

   
    document.body.appendChild(darkModeButton);


    darkModeButton.addEventListener('click', function () {
       
        document.body.classList.toggle('dark-mode');
    });
});

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
