# 2a-me

## Getting Started

To run this project:

```bash
pnpm i
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Code Explanation: app/page.tsx

### Line-by-Line Breakdown

**Line 1: `"use client";`**
- Marks this as a Client Component in Next.js 13+ App Router
- Required because we're using React hooks (useState) which need client-side interactivity

**Line 3: `import { useState } from "react";`**
- Imports the useState hook from React
- Allows us to manage component state (the message text)

**Line 5: `export default function Home() {`**
- Exports the Home component as the default export
- This becomes the page component for the root route (/)`

**Line 6: `const [message, setMessage] = useState("");`**
- Creates a state variable called `message` initialized to an empty string
- `setMessage` is the function to update this state
- Stores the text the user types in the textarea

**Line 7: `const maxLength = 150;`**
- Defines the maximum character limit for the message
- Set to 150 characters

**Line 9: `return (`**
- Begins the JSX return statement (the UI to render)

**Line 10: `<div className="flex min-h-screen items-center justify-center bg-white p-6 font-sans">`**
- Outer container with Tailwind CSS classes:
  - `flex`: enables flexbox layout
  - `min-h-screen`: minimum height of full viewport
  - `items-center justify-center`: centers content vertically and horizontally
  - `bg-white`: white background
  - `p-6`: padding on all sides
  - `font-sans`: sans-serif font family

**Line 11: `<div className="w-full max-w-md">`**
- Inner container:
  - `w-full`: full width
  - `max-w-md`: maximum width of medium size (28rem/448px)

**Line 12: `<div>`**
- Wrapper div for the textarea

**Line 13-18: `<textarea ...>`**
- The textarea element with multiple props:

**Line 14: `className="..."`**
- Styles applied to textarea:
  - `h-48`: height of 12rem/192px
  - `w-full`: full width of parent
  - `rounded-xl`: extra-large border radius
  - `border border-black/10`: thin border with 10% black opacity
  - `bg-black/5`: background with 5% black opacity
  - `p-6`: padding inside
  - `text-xl`: extra-large text size
  - `text-black/90`: text color with 90% opacity
  - `backdrop-blur-sm`: small blur effect on background
  - `transition-all`: smooth transitions for all properties
  - `focus:border-black/20`: border becomes 20% black on focus
  - `focus:bg-black/10`: background becomes 10% black on focus
  - `placeholder:text-black/30`: placeholder text at 30% opacity

**Line 15: `placeholder="Type your message..."`**
- The placeholder text shown when textarea is empty

**Line 16: `value={message}`**
- Controls the textarea value with our state variable
- Makes this a controlled component

**Line 17: `onChange={(e) => setMessage(e.target.value.slice(0, maxLength))}`**
- Event handler that fires when user types
- `e.target.value` gets the current text
- `.slice(0, maxLength)` limits input to first 150 characters
- `setMessage()` updates the state with the new value

**Line 20: `<div className="mt-3 pr-1 text-right text-2xl font-light text-black/50 tabular-nums">`**
- Character counter container:
  - `mt-3`: top margin
  - `pr-1`: small right padding
  - `text-right`: right-aligned text
  - `text-2xl`: large text size
  - `font-light`: light font weight
  - `text-black/50`: 50% black opacity
  - `tabular-nums`: monospaced numbers for consistent width

**Line 21: `{message.length}/{maxLength}`**
- Displays current character count and max limit (e.g., "25/150")
- Updates dynamically as user types

**Lines 22-26**
- Closing tags for all the divs

This creates a simple, elegant textarea component with a character counter and smooth styling transitions.
