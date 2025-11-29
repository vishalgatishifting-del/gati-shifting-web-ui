import { useEffect } from "react";

export default function ZohoForm() {

  useEffect(() => {
    // Add Zoho validation script dynamically
    const script = document.createElement("script");
    script.src = "https://crm.zoho.in/crm/WebFormScriptServlet?rid=1132138000000574001"; 
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <form
      id="webform1132138000000574001"
      action="https://crm.zoho.in/crm/WebToLeadForm"
      method="POST"
      acceptCharset="UTF-8"
    >
      <input type="hidden" name="xnQsjsdp" value="dc0d740efb9028b11f55f08fddb3bc9e624a51b98ee80c602ea6a1484b98ddce" />

      <input type="text" name="Last Name" placeholder="Your Name" required />
      <input type="email" name="Email" placeholder="Your Email" required />
      <input type="text" name="Phone" placeholder="Phone" />

      <input type="submit" value="Submit" />
    </form>
  );
}
