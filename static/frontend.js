document.getElementById('calcForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);

    const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ n1, n2 })
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById('result').textContent = `Result: ${data.result}`;
    } else {
        document.getElementById('result').textContent = 'An error occurred.';
    }
});
