const OPENAI_API_KEY = 'your-api-key-here'; // Replace with your actual API key

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "captureAndAnalyze") {
    captureScreenshot()
      .then(screenshot => analyzeImage(screenshot, request.instruction))
      .then(sendResponse)
      .catch(error => sendResponse({error: error.message}));
    return true;  // Indicates we will respond asynchronously
  }
});

async function captureScreenshot() {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  const screenshot = await chrome.tabs.captureVisibleTab(tab.windowId, {format: 'png'});
  return screenshot;
}

async function analyzeImage(imageDataUrl, instruction) {
  const userMessage = instruction 
    ? `${instruction} What's in this image?` 
    : "What's in this image?";

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: userMessage },
            {
              type: "image_url",
              image_url: {
                "url": imageDataUrl,
                "detail": "low"
              },
            },
          ],
        },
      ],
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return { description: data.choices[0].message.content };
}