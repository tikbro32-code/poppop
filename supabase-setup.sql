-- Setup Supabase Videos Table

CREATE TABLE IF NOT EXISTS public.videos (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY
);

-- Ensure all columns exist
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS url text;
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS author text;
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS "authorUid" text;
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS likes text DEFAULT '0';
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS comments text DEFAULT '0';
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS shares text DEFAULT '0';
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS description text;
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS category text;
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS thumbnail text;
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS views text DEFAULT '0';
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS "aspectRatio" text DEFAULT '9:16';
ALTER TABLE public.videos ADD COLUMN IF NOT EXISTS "createdAt" timestamp with time zone DEFAULT timezone('utc'::text, now());


-- Enable RLS
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;

-- Allow public read access
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE tablename = 'videos'
        AND policyname = 'Benarkan semua orang melihat video'
    ) THEN
        CREATE POLICY "Benarkan semua orang melihat video"
        ON public.videos FOR SELECT USING (true);
    END IF;
END
$$;

-- Allow authenticated insert
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE tablename = 'videos'
        AND policyname = 'Benarkan insert untuk pengguna log masuk'
    ) THEN
        CREATE POLICY "Benarkan insert untuk pengguna log masuk"
        ON public.videos FOR INSERT WITH CHECK (auth.role() = 'authenticated');
    END IF;
END
$$;
