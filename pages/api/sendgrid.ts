import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = JSON.parse(req.body) as {
      name: string;
      email: string;
      phone: string;
      model: string;
      price: string;
      year: string;
      info: string;
    };
    await sendgrid.send({
      to: "nikolai_aleksandrov1998@abv.bg", // Your email where you'll receive emails
      from: "b.pavlov1819@gmail.com", // your website email address here
      subject: `New Order: ${data.name} - ${data.model}, ${data.year}`,
      html: `<div>
        <p>Client: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Order: ${data.model}, ${data.year}</p>
        <p>Max Price: ${data.price}</p>
        <p>Additional information: ${data.info}</p>
    </div>`
    });
    return res.status(200).json({ error: null });
  } catch (error: any) {
    return res.status(error?.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
