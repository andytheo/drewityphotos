"use client";

import React, { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof FormState, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!form.name || !form.email || !form.message) {
      setError('Please fill name, email and message.');
      return;
    }

    setLoading(true);
    try {
      // Use Next.js API route (no need for external backend)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || 'Failed to send message');
      }

      setSuccess("✓ Message sent - thank you! We'll be in touch soon.");
      setForm(initialState);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to send message';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-inner">
          <p className="section-kicker">Contact</p>
          <h2>Book a session that looks intentional from the start.</h2>
          <p>
            Share what you need, the kind of imagery you want, and any dates you&apos;re working
            around. I&apos;ll follow up with availability and the best fit.
          </p>
          <div className="contact-socials">
            <p className="contact-social-label">Instagram</p>
            <a 
              href="https://instagram.com/drewity_photos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="Follow us on Instagram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @drewity_photos
            </a>
          </div>
          <div className="contact-info">
            <p className="contact-social-label">Studio Address</p>
            <p className="contact-address">Kitchener</p>
            <div className="contact-links">
              <a
                href="https://maps.app.goo.gl/HR43tY4Sft3VBnPf8"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-chip"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                value={form.subject}
                onChange={(e) => update('subject', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project, ideas, or anything else..."
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                required
              ></textarea>
            </div>

            {error && (
              <div className="contact-message contact-message-error">
                {error}
              </div>
            )}
            {success && (
              <div className="contact-message contact-message-success">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="contact-submit"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;