import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const tokenRes = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
          code,
        }),
      }
    );

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok || !tokenData.access_token) {
      console.error("Token response error:", tokenData);
      return NextResponse.json(
        { error: "Failed to fetch access token" },
        { status: 401 }
      );
    }

    const accessToken = tokenData.access_token;

    const userRes = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });

    const user = await userRes.json();

    if (!user.login) {
      return NextResponse.json(
        { error: "Failed to fetch user info" },
        { status: 401 }
      );
    }

    if (user.login !== process.env.NEXT_PUBLIC_ALLOWED_GITHUB_USERNAME) {
      return NextResponse.redirect(new URL('/unauthorized', req.nextUrl.origin));
    }

    const jwtToken = jwt.sign(
      {
        id: user.id,
        name: user.login,
        avatar: user.avatar_url,
      },
      process.env.NEXT_PUBLIC_JWT_SECRET!,
      { expiresIn: "2h" }
    );

    const redirectUrl = new URL("/mahesha/add", url.origin);
    const response = NextResponse.redirect(redirectUrl);

    response.cookies.set("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("GitHub Auth Error:", error);
    return NextResponse.json({ error: "OAuth failed" }, { status: 500 });
  }
}
