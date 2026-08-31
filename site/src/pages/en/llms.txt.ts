import type { APIRoute } from "astro";
import { createLlmsResponse } from "../llms.txt";

export const prerender = true;

export const GET: APIRoute = () => createLlmsResponse("en");
