document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = 'Data submitted successfully!';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Error submitting data.';
    });
});