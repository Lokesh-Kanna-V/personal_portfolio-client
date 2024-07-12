import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Lokesh Kanna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
