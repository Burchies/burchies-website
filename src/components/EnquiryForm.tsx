'use client'
import { useState } from 'react'
import {
  validateEnquiry,
  isValid,
  EVENT_TYPES,
  type CateringEnquiry,
  type EnquiryErrors,
} from '@/lib/enquiry'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function errorId(field: keyof EnquiryErrors) {
  return 'f-' + field + '-error'
}

export function EnquiryForm() {
  const [form, setForm] = useState<CateringEnquiry>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guests: '',
    location: '',
    message: '',
    website: '',
  })
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const hasErrors = Object.keys(errors).length > 0

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateEnquiry(form)
    if (!isValid(errs)) {
      setErrors(errs)
      const firstError = Object.keys(errs)[0] as keyof EnquiryErrors
      requestAnimationFrame(() => {
        document.getElementById('f-' + firstError)?.focus()
      })
      return
    }

    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border-b border-charcoal/20 bg-transparent pb-2 pt-1 text-base text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-ember transition-colors duration-200'
  const labelClass =
    'block text-[10px] tracking-widest uppercase text-ember font-semibold mb-1'
  const errorClass = 'text-[11px] text-ember mt-1 font-semibold'

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center gap-4 py-16 px-8 text-center bg-bone rounded-sm border border-charcoal/10"
      >
        <div className="w-14 h-14 rounded-full bg-ember/10 flex items-center justify-center text-3xl">
          🍗
        </div>
        <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
          Got it.
        </h3>
        <p className="text-base text-charcoal/70 max-w-md leading-relaxed">
          Burchie will swing back to you soon — probably after the lunch rush. Check
          your inbox (and the spam folder, just in case).
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7"
      noValidate
      aria-describedby={hasErrors ? 'form-errors' : undefined}
    >
      {hasErrors && (
        <div
          id="form-errors"
          role="alert"
          aria-live="polite"
          className="rounded-sm border border-ember/30 bg-ember/5 px-4 py-3 text-sm text-charcoal"
        >
          Please check the highlighted fields before sending your enquiry.
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="f-website">Website</label>
        <input
          id="f-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website ?? ''}
          onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label htmlFor="f-name" className={labelClass}>
            What do we yell when it&rsquo;s ready?
          </label>
          <input
            id="f-name"
            name="name"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Your name"
            value={form.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId('name') : undefined}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          {errors.name && <p id={errorId('name')} className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="f-email" className={labelClass}>
            Email
          </label>
          <input
            id="f-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            placeholder="you@example.com"
            value={form.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId('email') : undefined}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          {errors.email && <p id={errorId('email')} className={errorClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="f-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="f-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClass}
            placeholder="021 123 4567"
            value={form.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId('phone') : undefined}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          {errors.phone && <p id={errorId('phone')} className={errorClass}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="f-date" className={labelClass}>
            Event date
          </label>
          <input
            id="f-date"
            name="eventDate"
            type="date"
            autoComplete="off"
            required
            min={new Date().toISOString().slice(0, 10)}
            className={inputClass}
            value={form.eventDate}
            aria-invalid={Boolean(errors.eventDate)}
            aria-describedby={errors.eventDate ? errorId('eventDate') : undefined}
            onChange={(e) => setForm((f) => ({ ...f, eventDate: e.target.value }))}
          />
          {errors.eventDate && <p id={errorId('eventDate')} className={errorClass}>{errors.eventDate}</p>}
        </div>

        <div>
          <label htmlFor="f-type" className={labelClass}>
            What kind of event?
          </label>
          <select
            id="f-type"
            name="eventType"
            autoComplete="off"
            required
            className={inputClass + ' appearance-none'}
            value={form.eventType}
            aria-invalid={Boolean(errors.eventType)}
            aria-describedby={errors.eventType ? errorId('eventType') : undefined}
            onChange={(e) =>
              setForm((f) => ({ ...f, eventType: e.target.value as CateringEnquiry['eventType'] }))
            }
          >
            <option value="">Pick the vibe…</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.eventType && <p id={errorId('eventType')} className={errorClass}>{errors.eventType}</p>}
        </div>

        <div>
          <label htmlFor="f-guests" className={labelClass}>
            How many hungry humans?
          </label>
          <input
            id="f-guests"
            name="guests"
            type="number"
            inputMode="numeric"
            min={30}
            required
            className={inputClass}
            placeholder="Approx. headcount"
            value={form.guests}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? errorId('guests') : undefined}
            onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
          />
          {errors.guests && <p id={errorId('guests')} className={errorClass}>{errors.guests}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="f-location" className={labelClass}>
          Where&rsquo;s the event?
        </label>
        <input
          id="f-location"
          name="location"
          autoComplete="street-address"
          required
          className={inputClass}
          placeholder="Suburb, venue, or full address"
          value={form.location}
          aria-invalid={Boolean(errors.location)}
          aria-describedby={errors.location ? errorId('location') : undefined}
          onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
        />
        {errors.location && <p id={errorId('location')} className={errorClass}>{errors.location}</p>}
      </div>

      <div>
        <label htmlFor="f-message" className={labelClass}>
          Tell us the vibe{' '}
          <span className="normal-case tracking-normal text-charcoal/40 font-normal">
            (optional)
          </span>
        </label>
        <textarea
          id="f-message"
          name="message"
          autoComplete="off"
          rows={4}
          className={inputClass + ' resize-none'}
          placeholder="Any allergens, theme, deadlines, or hot tips we should know?"
          value={form.message}
          aria-describedby={undefined}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-ember" role="alert" aria-live="polite">
          Something went wrong. Try again, or drop us a DM on{' '}
          <a
            className="underline decoration-ember/40 underline-offset-2"
            href="https://www.instagram.com/burchies.fried.chicken/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-ember text-cream text-xs tracking-widest uppercase rounded-sm enabled:hover:bg-ember/90 enabled:hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 font-semibold btn-shimmer relative overflow-hidden"
      >
        {status === 'submitting' ? 'Sending…' : 'Send it'}
      </button>
    </form>
  )
}
