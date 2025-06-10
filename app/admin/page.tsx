"use client";

import React, { useEffect, useState } from "react";
import { ref, onValue, Unsubscribe, set, remove } from "firebase/database";
import { database } from "@/lib/firebase"; // Adjust path to your Firebase config
import Image from "next/image";

// Interfaces for data structures
interface QuoteSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  country: string;
  whatsapp: string;
  message: string;
  quantity: string;
  quantityUnit: string;
  createdAt: string;
  products: {
    name: string;
    subCategories: string[];
  }[];
}

interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
  status: string;
}

interface ProductCount {
  name: string;
  count: number;
}

const AdminPanel: React.FC = () => {
  const [access, setAccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submissions, setSubmissions] = useState<QuoteSubmission[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loadingQuotes, setLoadingQuotes] = useState<boolean>(true);
  const [loadingMessages, setLoadingMessages] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"quotes" | "messages">("quotes");
  const [editingQuote, setEditingQuote] = useState<QuoteSubmission | null>(null);
  const [editingMessage, setEditingMessage] = useState<ContactMessage | null>(null);
  const [productCounts, setProductCounts] = useState<ProductCount[]>([]);

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@360impex.com" && password === "uzairosama123@") {
      setAccess(true);
      setError("");
    } else {
      setError("Invalid email or password!");
    }
  };

  // Logout handler
  const handleLogout = () => {
    setAccess(false);
    setEmail("");
    setPassword("");
    setSubmissions([]);
    setMessages([]);
    setActiveTab("quotes");
  };

  // Fetch data and calculate product counts
  useEffect(() => {
    if (!access) return;

    // Fetch Quote Requests
    const quoteRef = ref(database, "quoteRequests");
    const unsubQuotes: Unsubscribe = onValue(quoteRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const parsedData = Object.entries(data).map(([id, value]) => ({
          id,
          ...(value as object),
        })) as QuoteSubmission[];
        setSubmissions(parsedData.reverse());

        // Calculate product counts
        const counts: { [key: string]: number } = {};
        parsedData.forEach((submission) => {
          submission.products?.forEach((product) => {
            counts[product.name] = (counts[product.name] || 0) + 1;
          });
        });
        setProductCounts(
          Object.entries(counts).map(([name, count]) => ({ name, count }))
        );
      } else {
        setSubmissions([]);
        setProductCounts([]);
      }
      setLoadingQuotes(false);
    });

    // Fetch Contact Messages
    const messagesRef = ref(database, "contactMessages");
    const unsubMessages: Unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedMessages = Object.entries(data).map(([id, value]) => ({
          id,
          ...(value as object),
        })) as ContactMessage[];
        setMessages(loadedMessages.reverse());
      } else {
        setMessages([]);
      }
      setLoadingMessages(false);
    });

    return () => {
      unsubQuotes();
      unsubMessages();
    };
  }, [access]);

  // Update Quote
  const handleUpdateQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuote || !editingQuote.id) return;
    try {
      await set(ref(database, `quoteRequests/${editingQuote.id}`), editingQuote);
      setEditingQuote(null);
      alert("Quote updated successfully!");
    } catch (error) {
      console.error("Error updating quote:", error);
      setError("Failed to update quote.");
    }
  };

  // Update Message
  const handleUpdateMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMessage || !editingMessage.id) return;
    try {
      await set(ref(database, `contactMessages/${editingMessage.id}`), editingMessage);
      setEditingMessage(null);
      alert("Message updated successfully!");
    } catch (error) {
      console.error("Error updating message:", error);
      setError("Failed to update message.");
    }
  };

  // Delete Quote
  const handleDeleteQuote = async (id: string) => {
    if (confirm("Are you sure you want to delete this quote?")) {
      try {
        await remove(ref(database, `quoteRequests/${id}`));
        alert("Quote deleted successfully!");
      } catch (error) {
        console.error("Error deleting quote:", error);
        setError("Failed to delete quote.");
      }
    }
  };

  // Delete Message
  const handleDeleteMessage = async (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        await remove(ref(database, `contactMessages/${id}`));
        alert("Message deleted successfully!");
      } catch (error) {
        console.error("Error deleting message:", error);
        setError("Failed to delete message.");
      }
    }
  };

  if (!access) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-[#1b2636]">
        <div className="p-8 bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all hover:scale-105">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo/logodark.png" // Replace with your logo path
              alt="360Impex Logo"
              width={120}
              height={120}
              className="rounded-full cursor-pointer"
            />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Access Restricted to Admins Only</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter admin email"
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter admin password"
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#7ed957] focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#7ed957]   hover:bg-[#6CC44A]  text-white p-3 rounded-lg transition-colors font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 p-6 fixed h-full shadow-lg transition-all duration-300">
        <div className="flex items-center mb-8">
          <Image
            src="/logo/logo.png" // Replace with your logo path
            alt="360Impex Logo"
            width={40}
            height={40}
            className="rounded-full mr-2"
          />
          <h2 className="text-xl font-bold text-[#7ed957]">Admin Panel</h2>
        </div>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("quotes")}
            className={`w-full text-left  cursor-pointer p-3 rounded-lg flex items-center transition-all duration-200 ${activeTab === "quotes"
              ? "bg-[#7ed957]   hover:bg-[#6CC44A] text-white"
              : "bg-gray-700 text-gray-200 hover:bg-[#7ed957]  hover:text-white"
              }`}
          >
            <span className="mr-2">📦</span> Quote Requests
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`w-full  cursor-pointer text-left p-3 rounded-lg flex items-center transition-all duration-200 ${activeTab === "messages"
              ? "bg-[#7ed957]   hover:bg-[#6CC44A] text-white"
              : "bg-gray-700 text-gray-200 hover:bg-[#6CC44A] hover:text-white"
              }`}
          >
            <span className="mr-2">✉️</span> Contact Messages
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left p-3 cursor-pointer rounded-lg flex items-center transition-all duration-200 bg-red-600 text-white hover:bg-red-700"
          >
            <span className="mr-2">🚪</span> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 md:p-10 w-full">
        {activeTab === "quotes" && (
          <section>
            <h1 className="text-3xl font-bold mb-6 text-[#7ed957]">Quote Requests</h1>
            {/* Product Counts */}
            {productCounts.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Product Summary</h2>
                <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="p-2">Product Name</th>
                        <th className="p-2">Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productCounts.map((product, idx) => (
                        <tr key={idx} className="border-b border-gray-700">
                          <td className="p-2">{product.name}</td>
                          <td className="p-2">{product.count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {loadingQuotes ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
              </div>
            ) : submissions.length === 0 ? (
              <p className="text-gray-400">No submissions found.</p>
            ) : (
              <div className="space-y-6">
                {submissions.map((submission, idx) => (
                  <div key={submission.id || idx} className="bg-gray-800 rounded-lg p-6 shadow-md">
                    <h2 className="text-lg font-semibold mb-2">
                      {submission.name} — {submission.country}
                    </h2>
                    <p><strong>Email:</strong> {submission.email || "N/A"}</p>
                    <p><strong>Phone:</strong> {submission.phone || "N/A"}</p>
                    <p><strong>WhatsApp:</strong> {submission.whatsapp || "N/A"}</p>
                    <p><strong>Business:</strong> {submission.business || "N/A"}</p>
                    <p><strong>Quantity:</strong> {submission.quantity || "0"} {submission.quantityUnit || ""}</p>
                    <p><strong>Message:</strong> {submission.message || "N/A"}</p>
                    <p><strong>Submitted on:</strong> {new Date(submission.createdAt).toLocaleString()}</p>
                    <div className="mt-3">
                      <strong>Products:</strong>
                      <ul className="list-disc list-inside text-sm mt-1">
                        {submission.products?.map((product, i) => (
                          <li key={i}>
                            {product.name || "N/A"} - {product.subCategories?.join(", ") || "N/A"}
                          </li>
                        )) || <li>No products listed</li>}
                      </ul>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => setEditingQuote(submission)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => submission.id && handleDeleteQuote(submission.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === "messages" && (
          <section>
            <h1 className="text-3xl font-bold mb-6 text-[#7ed957]">Contact Form Submissions</h1>
            {loadingMessages ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
              </div>
            ) : messages.length === 0 ? (
              <p className="text-gray-400">No messages found.</p>
            ) : (
              <div className="space-y-6">
                {messages.map((msg, idx) => (
                  <div key={msg.id || idx} className="bg-gray-800 rounded-lg p-6 shadow-md">
                    <p><strong>Name:</strong> {msg.name || "N/A"}</p>
                    <p><strong>Email:</strong> {msg.email || "N/A"}</p>
                    <p><strong>Phone:</strong> {msg.phone || "N/A"}</p>
                    <p><strong>Subject:</strong> {msg.subject || "N/A"}</p>
                    <p><strong>Message:</strong> {msg.message || "N/A"}</p>
                    <p><strong>Status:</strong> {msg.status || "N/A"}</p>
                    <p><strong>Date:</strong> {new Date(msg.createdAt).toLocaleString()}</p>
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => setEditingMessage(msg)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => msg.id && handleDeleteMessage(msg.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Edit Quote Modal */}
        {editingQuote && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg text-black">
              <h2 className="text-2xl font-bold mb-4">Edit Quote</h2>
              <form onSubmit={handleUpdateQuote}>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={editingQuote.name}
                    onChange={(e) => setEditingQuote({ ...editingQuote, name: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={editingQuote.email}
                    onChange={(e) => setEditingQuote({ ...editingQuote, email: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    type="text"
                    value={editingQuote.phone}
                    onChange={(e) => setEditingQuote({ ...editingQuote, phone: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Business</label>
                  <input
                    type="text"
                    value={editingQuote.business}
                    onChange={(e) => setEditingQuote({ ...editingQuote, business: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Country</label>
                  <input
                    type="text"
                    value={editingQuote.country}
                    onChange={(e) => setEditingQuote({ ...editingQuote, country: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">WhatsApp</label>
                  <input
                    type="text"
                    value={editingQuote.whatsapp}
                    onChange={(e) => setEditingQuote({ ...editingQuote, whatsapp: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Quantity</label>
                  <input
                    type="text"
                    value={editingQuote.quantity}
                    onChange={(e) => setEditingQuote({ ...editingQuote, quantity: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Quantity Unit</label>
                  <input
                    type="text"
                    value={editingQuote.quantityUnit}
                    onChange={(e) => setEditingQuote({ ...editingQuote, quantityUnit: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    value={editingQuote.message}
                    onChange={(e) => setEditingQuote({ ...editingQuote, message: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setEditingQuote(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Message Modal */}
        {editingMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg text-black">
              <h2 className="text-2xl font-bold mb-4">Edit Message</h2>
              <form onSubmit={handleUpdateMessage}>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={editingMessage.name}
                    onChange={(e) => setEditingMessage({ ...editingMessage, name: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={editingMessage.email}
                    onChange={(e) => setEditingMessage({ ...editingMessage, email: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    type="text"
                    value={editingMessage.phone}
                    onChange={(e) => setEditingMessage({ ...editingMessage, phone: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    value={editingMessage.subject}
                    onChange={(e) => setEditingMessage({ ...editingMessage, subject: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    value={editingMessage.message}
                    onChange={(e) => setEditingMessage({ ...editingMessage, message: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Status</label>
                  <select
                    value={editingMessage.status}
                    onChange={(e) => setEditingMessage({ ...editingMessage, status: e.target.value })}
                    className="mt-1 p-2 w-full border rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                    <option value="In Progress">In Progress</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setEditingMessage(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;