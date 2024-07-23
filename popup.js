document.addEventListener('DOMContentLoaded', function() {
    const captureBtn = document.getElementById('captureBtn');
    const instructionInput = document.getElementById('instructionInput');
    const result = document.getElementById('result');
    const loader = document.getElementById('loader');
  
    captureBtn.addEventListener('click', function() {
      const instruction = instructionInput.value.trim();
      result.textContent = '';
      loader.style.display = 'block';
      captureBtn.disabled = true;
  
      chrome.runtime.sendMessage({
        action: "captureAndAnalyze",
        instruction: instruction
      }, function(response) {
        loader.style.display = 'none';
        captureBtn.disabled = false;
  
        if (response.error) {
          result.textContent = 'Error: ' + response.error;
        } else {
          result.textContent = response.description;
        }
      });
    });
  });