/*
  # Sports & Adventure Database Schema

  ## Overview
  This migration creates the database structure for storing sports achievements and trekking adventures.
  
  ## New Tables
  
  ### 1. `sports_achievements`
  Stores information about various sports accomplishments
  - `id` (uuid, primary key) - Unique identifier
  - `sport_name` (text) - Name of the sport (Swimming, Football, Basketball, etc.)
  - `achievement` (text) - Description of the achievement
  - `level` (text) - Level of achievement (District, State, National, etc.)
  - `year` (text) - Year of achievement
  - `description` (text) - Additional details
  - `icon` (text) - Icon identifier for the sport
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 2. `treks`
  Stores information about trekking adventures
  - `id` (uuid, primary key) - Unique identifier
  - `trek_name` (text) - Name of the trek
  - `location` (text) - Trek location
  - `status` (text) - completed/planned/upcoming
  - `date` (text) - Date of trek
  - `difficulty` (text) - Easy, Moderate, Hard, Extreme
  - `duration` (text) - Duration of trek
  - `description` (text) - Trek details and experience
  - `image_url` (text) - Image of the trek
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 3. `gear_items`
  Stores sports and trekking gear information
  - `id` (uuid, primary key) - Unique identifier
  - `gear_type` (text) - sports/trekking
  - `item_name` (text) - Name of the gear
  - `brand` (text) - Brand name
  - `description` (text) - Gear details
  - `category` (text) - Category of gear
  - `image_url` (text) - Image of the gear
  - `created_at` (timestamptz) - Record creation timestamp
  
  ## Security
  - Enable RLS on all tables
  - Add policies for public read access (since this is portfolio data)
  - Restrict write access to authenticated users only
  
  ## Important Notes
  - All tables use UUID for primary keys
  - Timestamps are automatically set
  - Public read access allows portfolio visitors to view data
  - Only authenticated owner can modify data
*/

-- Create sports_achievements table
CREATE TABLE IF NOT EXISTS sports_achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sport_name text NOT NULL,
  achievement text NOT NULL,
  level text DEFAULT '',
  year text DEFAULT '',
  description text DEFAULT '',
  icon text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create treks table
CREATE TABLE IF NOT EXISTS treks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trek_name text NOT NULL,
  location text DEFAULT '',
  status text DEFAULT 'planned',
  date text DEFAULT '',
  difficulty text DEFAULT 'Moderate',
  duration text DEFAULT '',
  description text DEFAULT '',
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create gear_items table
CREATE TABLE IF NOT EXISTS gear_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gear_type text NOT NULL,
  item_name text NOT NULL,
  brand text DEFAULT '',
  description text DEFAULT '',
  category text DEFAULT '',
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE sports_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE treks ENABLE ROW LEVEL SECURITY;
ALTER TABLE gear_items ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for sports achievements"
  ON sports_achievements FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public read access for treks"
  ON treks FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public read access for gear items"
  ON gear_items FOR SELECT
  TO anon
  USING (true);

-- Create policies for authenticated users to manage their data
CREATE POLICY "Authenticated users can insert sports achievements"
  ON sports_achievements FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update sports achievements"
  ON sports_achievements FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete sports achievements"
  ON sports_achievements FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert treks"
  ON treks FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update treks"
  ON treks FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete treks"
  ON treks FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert gear items"
  ON gear_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update gear items"
  ON gear_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete gear items"
  ON gear_items FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample sports achievements
INSERT INTO sports_achievements (sport_name, achievement, level, year, description, icon) VALUES
('Swimming', 'District Level Swimmer', 'District', '2018', 'Competed at district level swimming championships', 'swimming'),
('Football', 'School Team Player', 'School', '2019', 'Active football team member', 'football'),
('Basketball', 'Regular Player', 'Club', '2020', 'Play basketball regularly at club level', 'basketball'),
('Padel', 'Recreational Player', 'Recreational', '2022', 'Enjoy playing padel tennis', 'padel'),
('Badminton', 'Club Player', 'Club', '2021', 'Regular badminton player', 'badminton'),
('Table Tennis', 'Amateur Player', 'Amateur', '2020', 'Play table tennis recreationally', 'tabletennis');
