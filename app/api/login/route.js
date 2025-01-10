import { NextResponse } from 'next/server';

export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.SECRET_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('password', password, {
      httpOnly: true,
      path: '/',
      maxAge: 60,
    });
    return response;
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}
