create table if not exists public.formulario (
  "Nombre" text not null,
  "Mail" text not null,
  "Número de teléfono" text
);

alter table public.formulario
  alter column "Nombre" drop identity if exists;

alter table public.formulario
  alter column "Nombre" type text using "Nombre"::text;

alter table public.formulario
  alter column "Mail" type text using "Mail"::text;

alter table public.formulario
  alter column "Número de teléfono" type text using "Número de teléfono"::text;

alter table public.formulario enable row level security;

revoke all on table public.formulario from anon, authenticated;
grant insert ("Nombre", "Mail", "Número de teléfono") on table public.formulario to anon, authenticated;

drop policy if exists "Anyone can submit formulario" on public.formulario;
create policy "Anyone can submit formulario"
  on public.formulario
  for insert
  to anon, authenticated
  with check (true);
