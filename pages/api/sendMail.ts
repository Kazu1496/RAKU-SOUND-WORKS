import type { NextApiHandler } from 'next';

import { ContactInput } from '@/components/templates/Contact';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).end();
  }

  const contactData = JSON.parse(req.body) as ContactInput;
  if (!contactData.email || !contactData.message || !contactData.name) {
    return res.status(400).end();
  }

  try {
    // メール送信処理を書く
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }

  return res.status(200).end();
};

export default handler;
