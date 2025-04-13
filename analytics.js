document.addEventListener('DOMContentLoaded', async () => {
    const loader = document.getElementById('loader');
    const analyticsContent = document.getElementById('analytics-content');

    loader.style.display = 'block';
    analyticsContent.style.display = 'none';

    try {
        const response = await fetch('https://passphrase-project-backend.onrender.com/');

        if (!response.ok) {
            throw new Error(`Failed to fetch analytics: ${response.status}`);
        }

        const data = await response.json();

        const pTags = analyticsContent.querySelectorAll('p');

        if (pTags.length >= 4) {
            pTags[0].textContent = `Total Number of Correct Passphrases: ${data.correctPassphraseCount}`;
            pTags[1].textContent = `Total Number of Incorrect Passphrases: ${data.incorrectPassphraseCount}`;
            pTags[2].textContent = `Total Number of Correct Password: ${data.correctPasswordCount}`;
            pTags[3].textContent = `Total Number of Incorrect Password: ${data.incorrectPasswordCount}`;
        }

        loader.style.display = 'none';
        analyticsContent.style.display = 'block';

    } catch (error) {
        console.error('Error loading analytics:', error);
        loader.textContent = 'Failed to load analytics.';
    }
});
