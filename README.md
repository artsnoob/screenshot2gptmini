# Screenshot Analyzer Chrome Extension

This Chrome extension allows users to capture screenshots of their current tab and analyze them using GPT-4o mini, providing insightful descriptions of the image content.

## Features

- Capture screenshots of the current tab
- Analyze screenshots using GPT-4o mini
- Provide custom instructions for image analysis
- User-friendly popup interface

## Installation

1. Clone this repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click on the extension icon in your Chrome toolbar to open the popup.
2. (Optional) Enter custom instructions in the text input field.
3. Click the "Capture and Analyze" button.
4. Wait for the analysis to complete. The result will be displayed in the popup.

## Configuration

Before using the extension, you need to set up your OpenAI API key:

1. Open `background.js`.
2. Replace the placeholder API key with your actual OpenAI API key:
   ```javascript
   const OPENAI_API_KEY = 'your-api-key-here';
   ```

**Note:** Keep your API key confidential and do not share it publicly.

## Files

- `manifest.json`: Extension configuration file
- `background.js`: Handles screenshot capture and image analysis
- `popup.html`: HTML structure for the extension popup
- `popup.js`: JavaScript for the popup functionality

## Dependencies

- Chrome Extensions API
- OpenAI API (GPT-4o mini model)

## Security

This extension uses content security policy (CSP) to enhance security. Make sure to follow best practices when handling API keys and user data.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your chosen license here]

## Disclaimer

This extension is not affiliated with or endorsed by OpenAI. Use it responsibly and in accordance with OpenAI's use policies.
