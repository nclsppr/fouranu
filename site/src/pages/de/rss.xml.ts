import type { APIRoute } from "astro";
import { createRssResponse } from "../rss.xml";

export const prerender = true;

export const GET: APIRoute = () => createRssResponse("de");
