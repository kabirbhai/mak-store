export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "kabir", role: "coder" },
    { id: 2, name: "kabir", role: "coder" },
    { id: 3, name: "kabir", role: "coder" },
    { id: 4, name: "kabir", role: "coder" },
    { id: 5, name: "kabir", role: "coder" },
  ]);
}
