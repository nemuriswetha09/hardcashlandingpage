"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(-1);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "bot", text: "👋 Hi! Type 'Hi' to get started." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const questions = [
    "What's your full name?",
    "Please enter your email address:",
    "What's your phone number?",
    "Which service do you need help with?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUserResponse = (text: string) => {
    // If already submitted, don't process further inputs
    if (isSubmitted) {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text },
        { sender: "bot", text: " Our team will contact you soon!" },
      ]);
      setInput("");
      return;
    }

    const newForm = { ...formData };

    if (step === -1) {
      if (text.toLowerCase() !== "hi") {
        setMessages((prev) => [
          ...prev,
          { sender: "user", text },
          { sender: "bot", text: "⚠️ Please start by saying 'Hi'." },
        ]);
        return;
      }
      setMessages((prev) => [...prev, { sender: "user", text }]);
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: questions[0] }]);
      }, 600);
      setStep(0);
      return;
    }

    if (step === 0) newForm.name = text;
    if (step === 1) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        setMessages((prev) => [
          ...prev,
          { sender: "user", text },
          { sender: "bot", text: " Please enter a valid email." },
        ]);
        return;
      }
      newForm.email = text;
    }
    if (step === 2) {
      // Validate exactly 10 digits for phone number
      if (!/^\d{10}$/.test(text)) {
        setMessages((prev) => [
          ...prev,
          { sender: "user", text },
          { sender: "bot", text: "please enter valid mobile number. Phone number must be exactly 10 digits." },
        ]);
        return;
      }
      newForm.phone = text;
    }
    if (step === 3) newForm.service = text;

    setFormData(newForm);
    setMessages((prev) => [...prev, { sender: "user", text }]);

    if (step < questions.length - 1) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: questions[step + 1] }]);
      }, 600);
      setStep(step + 1);
    } else {
      handleSubmit(newForm);
    }
  };

  const handleSubmit = async (data: typeof formData) => {
    setIsLoading(true);
    setIsSubmitted(true); // Mark as submitted to prevent duplicate submissions
    
    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbzqvsa0yZgLX7Bo6bPL699W_eFNASpn2ZSgDRy_-UdlSj1hnUTe2yxTgYfEKJ0EKlHv/exec";
      const urlWithCacheBust = `${scriptUrl}?t=${Date.now()}`;
      
      await fetch(urlWithCacheBust, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 
          "Content-Type": "text/plain; charset=utf-8",
        },
        mode: "no-cors"
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks! Our team will reach out to you soon." },
      ]);
      
    } catch (err) {
      console.error("Submission error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "There was an issue sending your data, but we've noted your information locally." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    handleUserResponse(input.trim());
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div>
      {/* Floating Bot Button with text on the right side */}
      <div className="fixed bottom-6 right-6 flex items-center space-x-2 z-50">
        {/* Bot button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
        >
          <span className="text-xl">🤖</span>
        </button>
        
        {/* "Here to Assist You" text positioned to the right of the button */}
        <span className="font-bold animate-pulse text-amber-100 px-3 py-2 rounded-full shadow-lg">
          Here to Assist You!
        </span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white text-black w-80 h-96 rounded-xl shadow-xl flex flex-col z-50 border border-gray-200">
          <div className="bg-yellow-500 text-black font-bold p-3 rounded-t-xl flex justify-between items-center">
            <span>Chat Assistant</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-black hover:text-gray-700 transition-colors text-lg"
            >
              ✕
            </button>
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[70%] ${
                  msg.sender === "bot"
                    ? "bg-gray-200 text-black self-start"
                    : "bg-yellow-500 text-black self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="p-2 rounded-lg bg-gray-200 text-black self-start">
                ⏳ Sending your information...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Container */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={step === -1 ? "Type 'Hi' to start..." : "Type your answer..."}
                className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                disabled={(step >= questions.length && isSubmitted) || isLoading}
              />
              <button
                onClick={handleSend}
                className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-600 disabled:bg-gray-300 transition-colors min-w-[40px] flex items-center justify-center"
                disabled={(step >= questions.length && isSubmitted) || !input.trim() || isLoading}
              >
                {isLoading ? "..." : "➤"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}