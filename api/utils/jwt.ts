import { SignJWT, jwtVerify } from 'jose';

export const genToken = async (userID: string) =>
	new SignJWT({})
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setSubject(userID)
		.setIssuer('justmeet')
		.setExpirationTime('30d')
		.sign(Buffer.from(process.env.JWT_KEY));

export const verifyToken = async (token: string) =>
	jwtVerify(token, Buffer.from(process.env.JWT_KEY), { issuer: 'justmeet' });
