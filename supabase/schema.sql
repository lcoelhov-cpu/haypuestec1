create extension if not exists pgcrypto;

create table if not exists public.formulario (
  "Nombre" text not null,
  "Mail" text not null,
  "Número de teléfono" text
);

alter table public.formulario enable row level security;
revoke all on table public.formulario from anon, authenticated;
grant insert ("Nombre", "Mail", "Número de teléfono") to anon, authenticated;

drop policy if exists "Anyone can submit formulario" on public.formulario;
create policy "Anyone can submit formulario"
  on public.formulario
  for insert
  to anon, authenticated
  with check (true);

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 120),
  email text not null check (char_length(trim(email)) between 3 and 254),
  phone text check (phone is null or char_length(phone) <= 40),
  company text check (company is null or char_length(company) <= 160),
  message text not null check (char_length(trim(message)) between 1 and 4000),
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.contact_requests enable row level security;

revoke all on table public.contact_requests from anon, authenticated;
grant insert (name, email, phone, company, message) on table public.contact_requests to anon, authenticated;

drop policy if exists "Anyone can submit contact requests" on public.contact_requests;
create policy "Anyone can submit contact requests"
  on public.contact_requests
  for insert
  to anon, authenticated
  with check (true);
