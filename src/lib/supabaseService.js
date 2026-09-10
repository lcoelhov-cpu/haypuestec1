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

  const { error } = await supabase.from('formulario').insert({
    Nombre: name.trim(),
    Mail: email.trim(),
    'Número de teléfono': phone.trim(),
  })

  if (error) {
    throw error
  }

  return { saved: true }
}
