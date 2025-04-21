import { NextResponse } from "next/server";
import obdCodes from "@/data/obdCodes.json";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code")?.toUpperCase();

  if (!code) {
    return NextResponse.json({ error: "Code is required" }, { status: 400 });
  }

  const result = obdCodes.find((item) => item.code === code);

  if (!result) {
    return NextResponse.json([], { status: 200 });
  }

  return NextResponse.json({
    code: result.code,
    description: result.meaning,
    system: result.system,
  });
}
