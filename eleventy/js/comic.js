document.addEventListener('DOMContentLoaded', () => {

    const transcript = document.getElementById('transcription');
    const toggleBtn = document.getElementById('toggle-transcript')
    let isVisible = false;

    function toggle() {
        isVisible = !isVisible;
        if (isVisible) {
            toggleBtn.textContent = 'Hide transcription'
            transcript.className = 'transcript'
        } else {
            toggleBtn.textContent = 'Show transcription'
            transcript.className = 'transcript visually-hidden'
        }
    }

    document.getElementById('toggle-transcript').addEventListener('click', () => {
        toggle();
    })

});