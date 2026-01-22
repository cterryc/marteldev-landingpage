// WhatsApp contact function
export const contactWhatsApp = (message: string) => {
  const phone = '51907679229' // TODO: Replace with actual phone number
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')
}
