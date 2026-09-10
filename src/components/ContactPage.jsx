import { useState } from 'react'
import { Alert, Button, Paper, Snackbar, TextField } from '@mui/material'
import { Send } from '@mui/icons-material'
import { createContactRequest } from '../lib/supabaseService'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const result = await createContactRequest(form)
      setForm(initialForm)
      setStatus(result.saved ? 'saved' : 'not-configured')
    } catch (error) {
      console.error('No se pudo guardar la solicitud de contacto', error)
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <div className="mono-font text-xs uppercase tracking-widest text-[#52d6c1]">Atención técnica y despachos</div>
        <h1 className="display-font mt-2 text-4xl font-bold text-white">Estamos en línea contigo.</h1>
        <p className="mt-2 max-w-2xl text-slate-400">Soporte para compras individuales, cotizaciones B2B e importaciones directas.</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <Paper component="form" onSubmit={handleSubmit} className="!rounded-lg !border !border-white/10 !bg-[#131b27] !p-5 md:!p-7">
          <h2 className="display-font text-2xl font-bold text-white">Envíanos tu requerimiento</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <TextField label="Nombre completo" value={form.name} onChange={updateField('name')} required />
            <TextField label="Correo electrónico" type="email" value={form.email} onChange={updateField('email')} required />
            <TextField label="Teléfono / WhatsApp" value={form.phone} onChange={updateField('phone')} />
            <TextField label="Empresa (opcional)" value={form.company} onChange={updateField('company')} />
          </div>
          <TextField label="¿En qué podemos ayudarte?" value={form.message} onChange={updateField('message')} multiline rows={4} className="!mt-4 !w-full" required />
          <Button type="submit" variant="contained" disabled={submitting} startIcon={<Send />} className="!mt-5">
            {submitting ? 'Enviando...' : 'Enviar consulta'}
          </Button>
        </Paper>

        <div className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-[#131b27] p-5">
            <div className="font-bold text-[#52d6c1]">Puntos de retiro</div>
            {['Santa Cruz · Equipetrol Norte', 'La Paz · Sopocachi', 'Cochabamba · Cala Cala'].map((location) => (
              <div key={location} className="mt-4 flex items-center gap-3 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#52d6c1]" />
                {location}
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-blue-400/20 bg-blue-500/10 p-5 text-sm leading-6 text-slate-300">
            Importaciones directas con póliza aduanera y garantía escrita de 12 meses.
          </div>
        </div>
      </div>

      <Snackbar open={Boolean(status)} autoHideDuration={5000} onClose={() => setStatus(null)}>
        <Alert severity={status === 'error' ? 'error' : status === 'not-configured' ? 'info' : 'success'} onClose={() => setStatus(null)}>
          {status === 'saved' && 'Tu consulta fue enviada correctamente.'}
          {status === 'not-configured' && 'El formulario está listo. Configura las variables de Supabase para guardar la consulta.'}
          {status === 'error' && 'No pudimos guardar la consulta. Inténtalo de nuevo.'}
        </Alert>
      </Snackbar>
    </div>
  )
}
