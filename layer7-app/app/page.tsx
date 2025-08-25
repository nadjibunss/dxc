"use client";

import { useState } from 'react';

export default function Home() {
  const [targetUrl, setTargetUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    if (targetUrl) {
      setIsStarted(true);
      // Logic to start the process would go here
      console.log(`Starting process for ${targetUrl} with method ${method}`);
    } else {
      alert('Silakan masukkan URL target terlebih dahulu.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">Layer 7 Interface</h1>
        <p className="text-gray-400 mb-8">
          Pilih metode dan masukkan URL untuk memulai.
        </p>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full">
          {!isStarted ? (
            <div className="flex flex-col gap-6">
              <div>
                <label htmlFor="url-input" className="block text-left text-lg font-medium mb-2">
                  URL Target
                </label>
                <input
                  id="url-input"
                  type="text"
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="https://contoh.com"
                  className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="method-select" className="block text-left text-lg font-medium mb-2">
                  Metode
                </label>
                <select
                  id="method-select"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                  <option>PATCH</option>
                  <option>HEAD</option>
                </select>
              </div>

              <button
                onClick={handleStart}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-xl font-semibold transition-colors"
              >
                Mulai
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold">Proses Dimulai...</h2>
              <p className="text-gray-400 mt-2">Target: {targetUrl}</p>
              <p className="text-gray-400">Metode: {method}</p>
              {/* This is where you might show logs or results */}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
