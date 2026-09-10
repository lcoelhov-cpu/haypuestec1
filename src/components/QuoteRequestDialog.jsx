import { useState } from 'react'
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import { Close, Send } from '@mui/icons-material'
import { createContactRequest } from '../lib/supabaseService'

const initialForm = {
  name: '',
  email: '',
  phone: '',
}

export default function QuoteRequestDialog({ open, onClose, parts }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleClose = () => {
    if (!submitting) {
      setStatus(null)
      onClose()
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const message = `Solicitud de cotización para: ${parts.map(([label, name, price]) => `${label}: ${name} (${price})`).join('; ')}`
      const result = await createContactRequest({ ...form, message })
      setForm(initialForm)
      setStatus(result.saved ? 'saved' : 'not-configured')
    } catch (error) {
      console.error('No se pudo guardar la solicitud de cotización', error)
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" aria-labelledby="quote-dialog-title">
      <DialogTitle id="quote-dialog-title" className="!flex !items-center !justify-between">
        Solicitar cotización
        <IconButton aria-label="Cerrar formulario" onClick={handleClose} disabled={submitting} edge="end">
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers className="!space-y-4">
          <p className="text-sm text-slate-400">Déjanos tus datos y te contactaremos con una propuesta para esta configuración.</p>
          <TextField label="Nombre completo" value={form.name} onChange={updateField('name')} required fullWidth autoFocus />
          <TextField label="Mail" type="email" value={form.email} onChange={updateField('email')} required fullWidth />
          <TextField label="Número de teléfono" type="tel" value={form.phone} onChange={updateField('phone')} required fullWidth inputProps={{ pattern: '[0-9+() -]{7,20}' }} />
          {status === 'not-configured' && <Alert severity="info">La solicitud quedó validada. Configura Supabase para guardarla.</Alert>}
          {status === 'error' && <Alert severity="error">No pudimos enviar la solicitud. Inténtalo de nuevo.</Alert>}
          {status === 'saved' && <Alert severity="success">Tu solicitud fue enviada correctamente.</Alert>}
        </DialogContent>
        <DialogActions className="!px-6 !py-4">
          <Button onClick={handleClose} disabled={submitting}>Cancelar</Button>
          <Button type="submit" variant="contained" startIcon={<Send />} disabled={submitting}>
            {submitting ? 'Enviando...' : 'Enviar solicitud'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
