document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/');

        if (!response.ok) {
            throw new Error(`Failed to fetch analytics: ${response.status}`);
        }

        const data = await response.json();

        const pTags = document.querySelectorAll('.login-container p');

        if (pTags.length >= 4) {
            pTags[0].textContent = `Total Number of Correct Passphrases: ${data.correctPassphraseCount}`;
            pTags[1].textContent = `Total Number of Incorrect Passphrases: ${data.incorrectPassphraseCount}`;
            pTags[2].textContent = `Total Number of Correct Password: ${data.correctPasswordCount}`;
            pTags[3].textContent = `Total Number of Incorrect Password: ${data.incorrectPasswordCount}`;
        }
    } catch (error) {
        console.error('Error loading analytics:', error);
        alert('Failed to load analytics. Please check your server.');
    }
});
