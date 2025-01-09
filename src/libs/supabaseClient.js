import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASEURL;
const supabaseKey = import.meta.env.SUPABASEKEY;

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export { supabaseClient }
