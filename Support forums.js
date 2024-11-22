document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.padding = '0.5rem 1rem';
    toggleButton.style.borderRadius = '5px';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// Dark mode styling
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    body.dark-mode {
        background-color: #333;
        color: #f5f5f5;
    }
    .support-forums {
        background-color: #444;
    }
    .category {
        background-color: #555;
    }
    .btn {
        background-color: #666;
    }
    .btn:hover {
        background-color: #777;
    }
`;
document.head.appendChild(darkModeStyles);
