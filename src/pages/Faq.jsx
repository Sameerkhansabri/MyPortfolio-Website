import React from 'react';

function Faq() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <p>Q: How can I contact you?</p>
      <p className="mb-4">A: You can reach me at <a href="mailto:sameerkhansabri@gmail.com" className="text-blue-600 underline">sameerkhansabri@gmail.com</a>.</p>
      <h2 className="text-xl font-semibold mt-4">Q: Do you take freelance work?</h2>
      <p className="mb-4">A: Yes, I am available for freelance and contract projects.</p>
    </div>
  );
}

export default Faq;