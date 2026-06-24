import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js'; // Ensure you have @supabase/supabase-js installed

// Storing credentials in variables as requested
const SUPABASE_URL = "https://sixcpdfgwzrnzgmokplj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_gnIlNxJG4BEhuHB74uOXcg_AvOu-leA";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Inserts a new row. Assumes your schema has auto-generated IDs/timestamps
    const { error } = await supabase
      .from('visit_counter')
      .insert([{ page: '/about/me' }]); 

    if (error) throw error;

    return res.status(200).json({ success: true });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}