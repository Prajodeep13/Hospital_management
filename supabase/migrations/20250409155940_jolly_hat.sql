/*
  # Initial Schema Setup

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `treatment` (text)
      - `created_at` (timestamp)
      - `status` (text)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text)
      - `treatment` (text)
      - `content` (text)
      - `rating` (integer)
      - `created_at` (timestamp)
      - `approved` (boolean)

    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `published` (boolean)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users and public access where appropriate
*/

-- Consultations table
CREATE TABLE consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text,
  treatment text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to create consultations"
  ON consultations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);

-- Testimonials table
CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  treatment text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now(),
  approved boolean DEFAULT false
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to view approved testimonials"
  ON testimonials
  FOR SELECT
  TO public
  USING (approved = true);

CREATE POLICY "Allow authenticated users to manage testimonials"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (true);

-- Blog posts table
CREATE TABLE blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now(),
  published boolean DEFAULT false
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to view published blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Allow authenticated users to manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true);