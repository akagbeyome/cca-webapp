import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Messages | BlueHQ - Colorectal Cancer Support",
  description: "BlueHQ Messages - Connect with your care team and community",
};

export default function Messages() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Messages
        </h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Your Messages
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Connect with your care team, ask questions, and stay updated on your treatment plan.
        </p>
      </div>
    </div>
  );
}