# Formspree Setup Guide for Contact Form

Your contact form has been configured to work with Formspree. Follow these steps to make it functional:

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Sign up" (it's free)
3. Create an account using your email or GitHub account
4. Verify your email address

## Step 2: Create Your Form

1. Log in to your Formspree dashboard
2. Click "New Form"
3. Give your form a name (e.g., "Portfolio Contact Form")
4. Formspree will generate a unique endpoint URL for you

## Step 3: Update Your Contact.js File

1. Open `src/containers/contact/Contact.js`
2. Find this line:
   ```javascript
   const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID_HERE";
   ```
3. Replace `YOUR_FORM_ID_HERE` with your actual Formspree form ID
   - It will look like: `https://formspree.io/f/xoqgvgye`
   - Your form ID is the random characters at the end of the URL

## Step 4: Test Your Form

1. Navigate to your contact page
2. Fill out the form with test data
3. Submit the form
4. Check your email - you should receive the test submission
5. Also check your Formspree dashboard for submissions

## Example of Final Code

```javascript
const formspreeEndpoint = "https://formspree.io/f/xoqgvgye"; // Replace with your actual ID
```

## Features Included

✅ **Loading state** - Button shows "Sending..." while submitting  
✅ **Success message** - Confirmation when message is sent  
✅ **Error handling** - Shows error if submission fails  
✅ **Direct email link** - Alternative contact method if form fails  
✅ **Form validation** - Required fields are enforced

## Troubleshooting

- If you get CORS errors, make sure your form ID is correct
- Check your browser's console for any error messages
- Ensure all required fields are filled out
- Try the direct email link as a backup option

## Formspree Free Tier Limits

- 50 submissions per month
- Email notifications
- Basic spam protection
- File uploads (up to 10MB)

That's it! Your contact form should now be fully functional with Formspree.
