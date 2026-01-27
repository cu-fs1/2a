# 2a-me

## Getting Started

To run this project:

```bash
pnpm i
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
2a/
├── app/                    # Next.js App Router directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── public/                 # Static assets
├── eslint.config.mjs      # ESLint configuration
├── next-env.d.ts          # Next.js TypeScript declarations
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── pnpm-lock.yaml         # pnpm lock file
├── pnpm-workspace.yaml    # pnpm workspace configuration
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Code Explanation: app/page.tsx

### Line-by-Line Breakdown

**Line 1: `"use client";`**

- Marks this as a Client Component in Next.js 13+ App Router
- Required because we're using React hooks (useState) which need client-side interactivity

**Line 3: `import { useState } from "react";`**

- Imports the useState hook from React to manage component state

**Line 4: `import React from "react";`**

- Imports React to handle types for event handlers

**Line 6: `const maxLength = 150;`**

- Defines the maximum character limit for the message

**Line 8: `export default function Home() {`**

- Exports the Home component as the default export
- This becomes the page component for the root route (/)

**Line 9: `const [message, setMessage] = useState("");`**

- Creates a state variable called `message` initialized to an empty string
- `setMessage` is the function to update this state

**Lines 11-13: `const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { ... }`**

- Defines a handler function for textarea changes
- `.slice(0, maxLength)` ensures the input never exceeds the character limit

**Line 15: `return (`**

- Begins the JSX return statement (the UI to render)

**Line 16: `<div className="flex min-h-screen items-center justify-center bg-white p-6 font-sans">`**

- Outer container with Tailwind CSS classes to center the content and apply basic styling

**Line 17: `<div className="w-full max-w-md">`**

- Inner container that sets a maximum width for the message box

**Line 19: `<textarea ...>`**

- The textarea element with multiple props:
  - `className`: Applies styling including height, rounded corners, border, background, and focus effects
  - `placeholder`: The text shown when the textarea is empty
  - `value`: Controls the textarea value with our state variable (controlled component)
  - `onChange`: Uses the `handleChange` function to update state on every keystroke

**Line 26: `<div className="mt-3 pr-1 text-right text-2xl font-light text-black/50 tabular-nums">`**

- Character counter container with styling for alignment and appearance

**Line 27: `{message.length}/{maxLength}`**

- Displays current character count and max limit (e.g., "25/150")

This creates a simple, elegant textarea component with a character counter and smooth styling transitions.
