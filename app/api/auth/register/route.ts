import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { createSession, hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, skillLevel, discordUsername } = body as {
      name?: string;
      email?: string;
      password?: string;
      skillLevel?: string;
      discordUsername?: string;
    };

    if (!name || !email || !password || !discordUsername) {
      return NextResponse.json(
        { error: "Name, email, password, and Discord username are required." },
        { status: 400 },
      );
    }

    const normalizedEmail = email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered." },
        { status: 409 },
      );
    }

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email: normalizedEmail,
        passwordHash,
        skillLevel,
        discordUsername,
      },
    });

    await createSession({ sub: String(user.id), email: user.email });

    return NextResponse.json(
      {
        message: "Registration successful.",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          skillLevel: user.skillLevel,
          discordUsername: user.discordUsername,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Register error", error);
    return NextResponse.json(
      { error: "Failed to register. Please try again." },
      { status: 500 },
    );
  }
}
