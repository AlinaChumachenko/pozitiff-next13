export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, tel, message } = req.body;

    console.log("Form data:", { name, email, tel, message });
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
