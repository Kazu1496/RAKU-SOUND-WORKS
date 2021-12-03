import type { NextApiHandler } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { ContactInput } from '@/components/templates/Contact';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).end();
  }

  const contactData = JSON.parse(req.body) as ContactInput;
  const { email, message, name, requirements, companyName } = contactData;
  if (!email || !message || !name) {
    return res.status(400).end();
  }

  const smtp = nodemailer.createTransport({
    port: 465,
    service: 'Gmail',
    secure: true,
    auth: {
      user: process.env.RECEIVE_MAIL_ADDRESS,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  const msg: Mail.Options = {
    to: process.env.RECEIVE_MAIL_ADDRESS,
    from: {
      name: `${name}（会社名: ${companyName || '記載なし'}) <${email}>`,
      address: email,
    },
    subject: `お問い合わせ（${requirements}）`,
    text: message,
  };

  try {
    smtp.sendMail(msg, (error, _) => {
      if (error) {
        return res.status(500).end();
      }
      return res.status(200).end();
    });
  } catch (e) {
    return res.status(500).end();
  }
};

export default handler;
