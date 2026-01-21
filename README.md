# Page Explanation: app/page.tsx

This document provides a detailed, line-by-line explanation of the code in `app/page.tsx`.

## Line-by-Line Breakdown

| Line | Code | Explanation |
| :--- | :--- | :--- |
| **1** | `'use client';` | Marks this file as a **Client Component**. In Next.js App Router, components are Server Components by default. We need this because we are using React state (`useState`). |
| **3** | `import { useState } from 'react';` | Imports the `useState` hook, which allows us to add state (dynamic data) to the functional component. |
| **5** | `export default function Home() {` | Defines and exports the default React component for this page. |
| **6** | `const [message, setMessage] = useState('');` | Creates a state variable `message` (to store the text) and a function `setMessage` to update it, initialized as an empty string. |
| **7** | `const maxLength = 150;` | Defines a constant for the maximum allowed characters in the text area. |
| **10** | `<div className="flex ...">` | The main container. It uses flexbox to center the content vertically (`items-center`) and horizontally (`justify-center`) within the full screen height (`min-h-screen`). |
| **11** | `<div className="w-full max-w-md">` | A container for the form elements, ensuring it fills the width but stays within a readable maximum size (`max-w-md`). |
| **13-18** | `<textarea ... />` | The text input area. |
| **14** | `className="..."` | Extensive styling: fixed height (`h-48`), rounded corners (`rounded-xl`), subtle borders, a translucent background (`bg-black/5`), and transition effects for focus states. |
| **15** | `placeholder="..."` | Displays the hint text when the input is empty. |
| **16** | `value={message}` | Binds the value of the textarea to our `message` state variable (Controlled Component). |
| **17** | `onChange={(e) => ...}` | An event handler that triggers whenever the user types. It updates the state using `setMessage` and uses `.slice(0, maxLength)` to strictly enforce the character limit. |
| **20-22** | `<div className="..."> ... </div>` | A container for the character counter, aligned to the right and styled with light text and `tabular-nums` for consistent spacing as numbers change. |
| **21** | `{message.length}/{maxLength}` | Dynamically displays the current character count and the maximum limit. |
