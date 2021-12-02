import sgMail, { MailDataRequired } from '@sendgrid/mail';
import type { NextApiHandler } from 'next';

import { ContactInput } from '@/components/templates/Contact';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).end();
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const contactData = JSON.parse(req.body) as ContactInput;
  const { email, message, name, requirements, companyName } = contactData;
  if (!email || !message || !name) {
    return res.status(400).end();
  }

  const msg: MailDataRequired = {
    to: process.env.RECEIVE_MAIL_ADDRESS,
    from: {
      name: `${name}（会社名：${companyName || '記載なし'}）`,
      email,
    },
    subject: `お問い合わせ（${requirements}）`,
    text: message,
  };

  const sendResponse = await sgMail.send(msg);

  if (sendResponse[0].statusCode === 202) {
    return res.status(200).end();
  }
  return res.status(500).end();
};

export default handler;
