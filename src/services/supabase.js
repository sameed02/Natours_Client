import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://ibsdablihpfmyicmpglg.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlic2RhYmxpaHBmbXlpY21wZ2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NjIyMzAsImV4cCI6MjAzNDAzODIzMH0.wgriq5ijWXIxTnT73yebxUcsuVav9SP_8tTUxtx33O8";

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
