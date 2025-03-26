
// This is just to fix the TypeScript error - we're only updating line 164
// The error shows: Property 'align' is missing in type 'HTMLElement' but required in type 'HTMLDivElement'
// We need to check if the element is a HTMLDivElement before accessing align property

// Replace the problematic code with proper type checking
const element = document.getElementById('themotherboard');
if (element && element instanceof HTMLDivElement) {
  element.scrollIntoView({ behavior: 'smooth' });
}
