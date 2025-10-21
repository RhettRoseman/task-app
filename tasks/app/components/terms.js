// app/components/Terms.js
"use client";

import React from "react";

export default function Terms() {
  return (
    <div>
  
    <div className="max-w-3xl mx-auto p-8  text-white rounded-lg shadow-lg my-8">
      <h1 className="text-3xl text-center font-bold mb-6">Terms & Conditions – Task Manager App</h1>

      <p className="mb-4"><strong>Effective Date:</strong> [10-21-25]</p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using [Your App Name], you agree to these Terms & Conditions. If you do not agree, do not use the app.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">2. Use of the App</h2>
      <p className="mb-4">
        The app is provided for personal task management only. You may not use the app for illegal or harmful purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">3. Data Storage</h2>
      <p className="mb-4">
        All tasks are stored locally on your device in your browser’s localStorage. We are not responsible for data loss if your device or browser data is cleared.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All code, design, and content of the app belong to [Your Name/Company]. You may use the app for personal purposes but may not reproduce or sell it without permission.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any damages resulting from the use or inability to use the app. The app is provided “as is” without warranties of any kind.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms at any time. Updates will be reflected in the app.
      </p>
    </div>
    </div>
  );
}
