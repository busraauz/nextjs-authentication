import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard'];
export default auth((req) => {
	const isLoggedIn = !!req.auth;
	if (
		!isLoggedIn &&
		protectedRoutes.find((r) => req.nextUrl.pathname.includes(r))
	) {
		return NextResponse.redirect(new URL('/', req.nextUrl));
	}

	return NextResponse.next();
});
