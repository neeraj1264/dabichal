// app/maintenance/page.jsx
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white text-center p-6">
      <div className="bg-white border rounded-3xl shadow-xl p-10 max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-yellow-100 rounded-full">
            <Wrench className="text-yellow-600" size={42} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Website Under Maintenance</h1>
        <p className="mt-3 text-gray-600">We’re improving your experience. Please check back soon.</p>
        <p className="mt-6 text-sm text-gray-500">
          Contact: <a href="mailto:sardarjitours@example.com" className="text-yellow-600">sardarjitours@example.com</a>
        </p>
      </div>
      <footer className="mt-8 text-xs text-gray-400">© {new Date().getFullYear()} Sardar Ji Travels</footer>
    </main>
  );
}
