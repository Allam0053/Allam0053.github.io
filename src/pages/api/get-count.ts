import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://sixcpdfgwzrnzgmokplj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_gnIlNxJG4BEhuHB74uOXcg_AvOu-leA";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Query with head: true and count: 'exact' gets the total row count 
    // without pulling the actual row data into memory.
    const { count, error } = await supabase
      .from('visit_counter')
      .select('*', { count: 'exact', head: true })
      .eq('page', '/about/me'); // Filters specifically for your about page

    if (error) throw error;

    return res.status(200).json({ count: count || 0 });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}