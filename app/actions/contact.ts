'use server';

export async function sendContactEmail(formData: { name: string; email: string; message: string }) {
  try {
    // Using Formspree for email handling (free service, no auth required)
    const response = await fetch('https://formspree.io/f/xyzdefgh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New message from ${formData.name}`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('[v0] Email send error:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
}
