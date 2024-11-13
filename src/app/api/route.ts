import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headers = request.headers;
  const obj = Object.fromEntries(headers);
  return NextResponse.json(obj, { status: 200 });
}
