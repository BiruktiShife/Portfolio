import * as React from "react";

export const EmailTemplate = ({ name, email, msg }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h1 style={{ color: "#7c3aed", marginBottom: "20px" }}>
      New Contact Form Message
    </h1>

    <div
      style={{
        backgroundColor: "#f8fafc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ color: "#334155", marginBottom: "15px" }}>
        Contact Details:
      </h2>
      <p style={{ margin: "5px 0", color: "#475569" }}>
        <strong>Name:</strong> {name}
      </p>
      <p style={{ margin: "5px 0", color: "#475569" }}>
        <strong>Email:</strong> {email}
      </p>
    </div>

    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ color: "#334155", marginBottom: "15px" }}>Message:</h3>
      <p
        style={{ color: "#475569", lineHeight: "1.6", whiteSpace: "pre-wrap" }}
      >
        {msg}
      </p>
    </div>

    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#f1f5f9",
        borderRadius: "8px",
      }}
    >
      <p style={{ margin: "0", fontSize: "14px", color: "#64748b" }}>
        This message was sent from your portfolio contact form.
      </p>
    </div>
  </div>
);
