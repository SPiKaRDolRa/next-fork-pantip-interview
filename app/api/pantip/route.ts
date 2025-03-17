import axios from "axios";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = "https://pantip.com/";
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
    });

    const $ = cheerio.load(data);
    const topics: { title: string; link: string; category: string }[] = [];

    $(".post-title a").each((index, element) => {
      const title = $(element).text().trim();
      const link = "https://pantip.com" + $(element).attr("href");
      const category = $(element).parents(".post").find(".tag a").first().text().trim();

      topics.push({ title, link, category });
    });

    return NextResponse.json({ success: true, data: topics });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch data" });
  }
}
