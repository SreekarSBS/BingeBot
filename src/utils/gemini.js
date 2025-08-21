import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

const gemini = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default gemini;