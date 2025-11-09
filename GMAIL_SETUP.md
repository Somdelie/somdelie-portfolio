# Quick Start - Gmail Setup

## 🚀 5-Minute Setup with Gmail

### Step 1: Get Gmail App Password

1. Go to https://myaccount.google.com/apppasswords
2. If you don't see it, enable 2-Step Verification first at https://myaccount.google.com/security
3. Create app password:
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Name it: **Portfolio Website**
4. Copy the 16-character password (looks like: `abcd efgh ijkl mnop`)

### Step 2: Update .env.local

Replace these values in your `.env.local` file:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
SMTP_FROM=your-email@gmail.com
```

Keep these as-is:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_TO=admin@cautious.co.za
```

### Step 3: Restart Server

```bash
# Press Ctrl+C to stop current server
pnpm dev
```

### Step 4: Test!

1. Go to your contact form
2. Fill it out and submit
3. You should see:
   - Loading toast
   - Success toast
   - Success modal
4. Check both emails:
   - Your Gmail (admin notification)
   - Sender's email (auto-reply confirmation)

## ✅ Done!

Your contact form now uses Gmail to send:
- Admin notifications to you
- Auto-reply confirmations to visitors

No suspended accounts, no API keys to worry about!
