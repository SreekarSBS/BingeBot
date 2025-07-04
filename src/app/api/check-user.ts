// pages/api/check-user.ts
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "@/lib/firebaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    await admin.auth().getUserByEmail(email);
    return res.status(200).json({ exists: true });
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      return res.status(200).json({ exists: false });
    }
    return res.status(500).json({ message: error.message });
  }
}
