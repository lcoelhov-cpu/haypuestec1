import { supabase, supabaseConfigured } from './supabase'

export async function createContactRequest(request) {
  if (!supabaseConfigured) {
    return { saved: false }
  }

  const { error } = await supabase.from('contact_requests').insert(request)

  if (error) {
    throw error
  }

  return { saved: true }
}

export async function createQuoteRequest({ name, email, phone }) {
  if (!supabaseConfigured) {
    return { saved: false }
  }

  const values = {
    Nombre: name.trim(),
    Mail: email.trim(),
    'Número de teléfono': phone.trim(),
  }

  if (!values.Nombre || !values.Mail || !values['Número de teléfono']) {
    throw new Error('Nombre, mail y teléfono son obligatorios')
  }

  const { error } = await supabase.from('formulario').insert(values)

  if (error) {
    throw error
  }

  return { saved: true }
}
