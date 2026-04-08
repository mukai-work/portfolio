import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, type, message } = await req.json();

  const typeLabel: Record<string, string> = {
    lp: "LP制作",
    corporate: "コーポレートサイト",
    ec: "ECサイト",
    other: "その他",
  };

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "k.mukai.work@gmail.com",
    subject: `【ポートフォリオ】${name}様からのお問い合わせ`,
    text: `お名前: ${name}\nメール: ${email}\n種類: ${typeLabel[type] ?? "未選択"}\n\nメッセージ:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
