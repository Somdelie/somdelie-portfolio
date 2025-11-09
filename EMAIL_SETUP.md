# Email Setup Instructions

## Nodemailer SMTP Configuration

Your contact form is now set up to send emails to `admin@cautious.co.za` using Nodemailer with SMTP!

### Setup Steps:

#### Option 1: Using Gmail (Recommended for Testing)

1. **Enable 2-Step Verification**
   - Go to your [Google Account](https://myaccount.google.com/)
   - Security → 2-Step Verification → Turn on

2. **Create App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select app: "Mail"
   - Select device: "Other" → enter "Portfolio Website"
   - Click "Generate"
   - Copy the 16-character password

3. **Update Environment Variables**
   - Open `.env.local` file
   - Update with your Gmail credentials:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   SMTP_FROM=your-email@gmail.com
   SMTP_TO=admin@cautious.co.za
   ```

#### Option 2: Using Other SMTP Providers

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
```

**Custom Domain/Business Email:**
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contact@yourdomain.com
SMTP_PASSWORD=your-password
```

4. **Restart Your Development Server**
   ```bash
   # Stop the current server (Ctrl+C)
   pnpm dev
   ```

### Email Features ✨

#### Admin Notification Email
- ✅ Sent to `admin@cautious.co.za`
- ✅ Beautiful HTML template with orange gradient header
- ✅ Sender's name, email, subject, and message
- ✅ Reply-to set to sender's email for easy responses
- ✅ Professional formatting with your brand colors

#### Auto-Reply Email to Sender
- ✅ Instant confirmation email to the person who contacted you
- ✅ Gorgeous HTML template with:
  - Animated success header with gradient
  - Personalized greeting
  - Message summary
  - Your contact information grid (email, phone, location, response time)
  - Expected response time (24-48 hours)
  - Call-to-action to view portfolio
  - Professional signature
- ✅ Reassures sender their message was received
- ✅ Sets expectations for response time

### User Experience Features 🎉

#### Toast Notifications (Sonner)
- ⏳ **Loading Toast**: "Sending your message..." while processing
- ✅ **Success Toast**: Rich notification with confirmation details
- ❌ **Error Toast**: Helpful error messages with alternative contact options

#### Success Modal
- 🎨 Beautiful modal with green gradient header
- ✅ Animated success icon
- 📧 Confirmation email notification
- ⏰ Response time information
- 📝 "What happens next?" section
- 📞 Direct contact information for urgent matters

### Form Features

- ✅ Form validation with required fields
- ✅ Loading states with disabled inputs during submission
- ✅ Success/error status messages in form
- ✅ Auto form reset after successful submission
- ✅ Prevents multiple submissions
- ✅ Fully responsive design

### Testing the Complete Flow

1. Fill out the contact form on your website
2. Click "Send Message"
3. You'll see:
   - Loading toast while processing
   - Success toast with confirmation
   - Beautiful success modal
   - Form fields reset
4. Check `admin@cautious.co.za` for the admin notification
5. Check the sender's email for the auto-reply confirmation

### Email Templates

Both email templates feature:
- Responsive design
- Your brand colors (#ff6b35 orange gradient)
- Professional formatting
- Clear call-to-actions
- Contact information
- Mobile-friendly layouts

### SMTP Limits

**Gmail:**
- Free: 500 emails per day
- Perfect for portfolio websites

**Outlook/Hotmail:**
- Free: 300 emails per day

**Custom Domain:**
- Depends on your hosting provider

### Dependencies Added

- `nodemailer` - SMTP email sending library
- `@types/nodemailer` - TypeScript definitions
- `sonner` - Beautiful toast notifications

### Files Created/Modified

1. **`app/api/send-email/route.ts`** - API endpoint using Nodemailer for sending emails
2. **`components/home-page/ContactSection.tsx`** - Contact form with toast integration
3. **`components/home-page/SuccessModal.tsx`** - Success modal component
4. **`app/layout.tsx`** - Added Toaster component
5. **`.env.local`** - Environment variables for SMTP configuration

### Troubleshooting

**Gmail "Less secure app" error:**
- Use App Password instead of regular password
- Enable 2-Step Verification first

**Connection timeout:**
- Check SMTP host and port
- Try port 465 with `SMTP_SECURE=true`

**Authentication failed:**
- Double-check username and password
- For Gmail, use App Password not regular password

**Emails not arriving:**
- Check spam/junk folder
- Verify SMTP_FROM matches your SMTP_USER
