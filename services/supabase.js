import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dzbtxopinstwsdhdtqiv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YnR4b3BpbnN0d3NkaGR0cWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MTQ4NzksImV4cCI6MjA1NTk5MDg3OX0.vJARVCiUFXFTL_TYPVoYlrtECCo4umLWA_Uy8vXTTGw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
