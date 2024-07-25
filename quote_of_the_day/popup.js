document.addEventListener('DOMContentLoaded', function() {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        // Select a random quote from the array
        const randomIndex = Math.floor(Math.random() * data.length);
        const quote = data[randomIndex].text;
        const author = data[randomIndex].author || 'Unknown';
  
        document.getElementById('quote').textContent = `"${quote}"`;
        document.getElementById('author').textContent = `— ${author}`;
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
        document.getElementById('quote').textContent = 'Failed to fetch a quote. Please try again later.';
      });
  });
  