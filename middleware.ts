import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';
 


export default authMiddleware({
  afterAuth(auth, req) {
    return NextResponse.next()
  },
  publicRoutes: ["/"]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
