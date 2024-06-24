document.addEventListener('DOMContentLoaded', function() {
    const jsonData = [
        { id: 1, title: 'Innovative Solution', description: 'Discover new ways to solve problems with cutting-edge technology.' },
        { id: 2, title: 'Seamless Integration', description: 'Easily integrate our tools into your existing systems.' },
        { id: 3, title: 'Future Ready', description: 'Prepare your business for the future with our advanced solutions.' }
    ];

    const contentContainer = document.getElementById('content-container');

    jsonData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'dynamic-item';
        itemDiv.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        contentContainer.appendChild(itemDiv);
    });
});
