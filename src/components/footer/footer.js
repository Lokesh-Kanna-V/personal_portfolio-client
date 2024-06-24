import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Your Website Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
