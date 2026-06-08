import { Request, Response } from "express";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User";
import { sendEmail } from "../utils/sendEmail";

// REGISTER

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      isVerified: false,
    });

    const verificationLink = `${process.env.CLIENT_URL}/verify-email/${verificationToken}`;

    await sendEmail(
      user.email,
      "Потвърди своя ReactLearn акаунт",
      `
    <div
      style="
        max-width:600px;
        margin:0 auto;
        padding:40px;
        font-family:Arial,sans-serif;
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:16px;
      "
    >
      <h1 style="margin:0 0 20px; color:#111; font-size:28px;">
        Добре дошъл в ReactLearn 🚀
      </h1>

      <p style="color:#4b5563; font-size:16px; line-height:1.7;">
        Благодарим ти за регистрацията.
      </p>

      <p style="color:#4b5563; font-size:16px; line-height:1.7;">
        За да активираш своя акаунт и да получиш достъп до всички курсове,
        натисни бутона по-долу.
      </p>

      <div style="margin:32px 0;">
        <a
          href="${verificationLink}"
          style="
            display:inline-block;
            padding:14px 24px;
            background:#111;
            color:#fff;
            text-decoration:none;
            border-radius:12px;
            font-weight:700;
          "
        >
          Потвърди акаунта
        </a>
      </div>

      <p style="color:#6b7280; font-size:14px; line-height:1.6;">
        Ако не си създавал акаунт в ReactLearn, можеш спокойно да игнорираш този имейл.
      </p>

      <hr style="border:none; border-top:1px solid #e5e7eb; margin:24px 0;" />

      <p style="color:#9ca3af; font-size:13px; margin:0;">
        © ReactLearn • Платформа за самообучение по React
      </p>
    </div>
  `,
    );

    res.status(201).json({
      message:
        "Registration successful. Please check your email to verify your account.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// VERIFY EMAIL

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({
      verificationToken: token,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired verification token",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;

    await user.save();

    res.json({
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

// LOGIN

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        message: "Please verify your email before logging in",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
