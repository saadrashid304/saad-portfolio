import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_CONTACT_FORM_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phoneNo, subject, message } = body;

    const data = await resend.emails.send({
      from: "Norasol <onboarding@resend.dev>",
      to: "saadrashid304@gmail.com",
      subject: `New Inquiry from ${name} - ${subject || "Norasol Contact"}`,
      html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">

        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

          <!-- Header -->
          <div style="background-color: #0f172a; color: #ffffff; padding: 16px 24px;">
            <h2 style="margin: 0; font-size: 20px;">NoraSol</h2>
            <p style="margin: 4px 0 0; font-size: 13px; opacity: 0.8;">
              New Contact Form Submission
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 24px;">
            <p style="font-size: 14px; color: #333;">
              You have received a new inquiry from the Norasol website. Details are below:
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">

              <tr>
                <td style="padding: 10px; font-weight: bold; width: 140px;">Name:</td>
                <td style="padding: 10px;">${name}</td>
              </tr>

              <tr style="background-color: #f9fafb;">
                <td style="padding: 10px; font-weight: bold;">Email:</td>
                <td style="padding: 10px;">${email}</td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold;">Phone:</td>
                <td style="padding: 10px;">${phoneNo || "N/A"}</td>
              </tr>

              <tr style="background-color: #f9fafb;">
                <td style="padding: 10px; font-weight: bold;">Subject:</td>
                <td style="padding: 10px;">${subject || "General Inquiry"}</td>
              </tr>

              <tr>
                <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px; white-space: pre-line;">${message}</td>
              </tr>

            </table>

            <!-- Divider -->
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

            <p style="font-size: 12px; color: #6b7280;">
              This email was automatically generated from the Norasol contact form.
            </p>
          </div>

          <!-- Footer -->
          <div style="background-color: #f9fafb; padding: 16px 24px; text-align: center;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">
              © ${new Date().getFullYear()} Norasol. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    `,
    });
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}
