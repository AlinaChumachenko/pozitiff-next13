import { projects } from "../../data/projects.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(projects);
  }
}
