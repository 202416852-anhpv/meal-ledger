import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";

export const AuthService = {
  async googleLogin(credential: string) {
    const googleClientId = process.env.GOOGLE_CLIENT_ID;
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!googleClientId) {
      throw new Error(
        "GOOGLE_CLIENT_ID is not defined in environment variables",
      );
    }

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables.");
    }

    const googleClient = new OAuth2Client(googleClientId);

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: googleClientId,
    });

    const payload = ticket.getPayload();
    if (!payload) throw new Error("Invalid Google token");

    const token = jwt.sign(
      {
        sub: payload.sub,
        email: payload.email,
        name: payload.name,
      },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    return {
      token,
      user: { id: payload.sub, email: payload.email, name: payload.name },
    };
  },
};
