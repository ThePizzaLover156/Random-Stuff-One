const noteInput = document.getElementById('noteInput');
const saveStatus = document.getElementById('saveStatus');
const charCount = document.getElementById('charCount');

// Load saved note
const savedNote = localStorage.getItem('pwa_quick_note');
if (savedNote) {
  noteInput.value = savedNote;
  updateStats();
}

// Auto-save on input
noteInput.addEventListener('input', () => {
  localStorage.setItem('pwa_quick_note', noteInput.value);
  saveStatus.innerHTML = '<i class="fa-solid fa-arrows-rotate animate-spin mr-1"></i> Saving...';
  
  setTimeout(() => {
    saveStatus.innerHTML = '<i class="fa-solid fa-check mr-1"></i> Saved';
  }, 400);

  updateStats();
});

function updateStats() {
  charCount.textContent = `${noteInput.value.length} characters`;
}

function clearNotes() {
  if(confirm("Are you sure you want to clear your note?")) {
    noteInput.value = '';
    localStorage.removeItem('pwa_quick_note');
    updateStats();
  }
}