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
