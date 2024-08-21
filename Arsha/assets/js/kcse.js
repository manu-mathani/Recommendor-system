document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kcseForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        const riasecTotal = document.getElementById('riasecTotal').value;

        // Add RIASEC total to form data
        formData.append('riasecTotal', riasecTotal);

        try {
            // Send the form data to the server
            const response = await fetch('https://your-server.com/submit', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle response from the server
            const result = await response.json();
            if (result.success) {
                // Store result in localStorage or pass via URL parameters
                localStorage.setItem('results', JSON.stringify(result.data));
                // Redirect to results page
                window.location.href = 'results.html';
            } else {
                alert('Submission failed: ' + result.message);
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});


