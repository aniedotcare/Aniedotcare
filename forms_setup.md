# Forms & Booking Setup Instructions

## Formspree (for the contact form)

To get the contact form working, you'll need to create a new form in Formspree and get your form's endpoint URL.

1.  **Sign up for a free account** at [https://formspree.io/](https://formspree.io/).
2.  **Create a new form** for your website. You'll be given a unique URL that looks something like this: `https://formspree.io/f/YOUR_FORM_ID`.
3.  **Copy this URL** and replace the placeholder `https://formspree.io/f/YOUR_FORM_ID` in the `contact_form.html` file with your actual Formspree URL.

That's it! Your contact form will now send submissions to your email address.

## Calendly (for booking consultations)

To get the booking widget working, you'll need to have a Calendly account and a scheduled event for your free consultations.

1.  **Sign up for a free account** at [https://calendly.com/](https://calendly.com/).
2.  **Create a new event type** for your "Free 20-minute consultation".
3.  **Copy the link** for your event. It will look something like this: `https://calendly.com/your-username/20min`.
4.  **Replace the placeholder** `https://calendly.com/YOUR_CALENDLY_LINK` in the `contact_form.html` file with your actual Calendly event link.

Your booking widget will now show your availability and allow clients to book a consultation with you directly.
