# Vercel Deployment Guide

## 📋 Pre-Deployment Checklist

✅ Portfolio ready with all features:
- Hero, About, Experience, Projects, Skills, Education, Contact sections
- WhatsApp integration
- Email copy functionality
- Resume download
- All project links updated (SmartDoc AI, Malaria Prediction)

## 🚀 Deploy to Vercel - Step by Step

### Step 1: Push to GitHub

If you haven't already pushed to GitHub:

```bash
# Create a new repository on GitHub: https://github.com/new
# Name it "portfolio" or any name you prefer

# Then run these commands in your terminal:
cd /app
git add .
git commit -m "Portfolio website ready for deployment"
git remote add origin https://github.com/Arnav-Kumar1/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit: https://vercel.com/signup
   - Click "Continue with GitHub"
   - Authorize Vercel to access your repositories

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Find "portfolio" repository and click "Import"

3. **Configure Build Settings**
   Vercel should auto-detect these settings from `vercel.json`:
   - **Framework Preset:** Create React App
   - **Build Command:** `cd frontend && yarn install && yarn build`
   - **Output Directory:** `frontend/build`
   - **Install Command:** `cd frontend && yarn install`

4. **Environment Variables (Optional)**
   If needed in the future:
   - Click "Environment Variables"
   - Add any variables (currently none required)

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - You'll get a URL like: `your-portfolio.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (if you have one)
3. Update DNS settings as instructed by Vercel

## 🔧 Vercel Configuration

The `vercel.json` file in the root directory contains:
- Build command pointing to frontend directory
- Output directory configuration
- URL rewrites for React Router (SPA support)

## 📝 Important Notes

### URL Structure
Your portfolio will be accessible at:
- Production: `https://your-portfolio.vercel.app`
- Preview URLs for each git push

### Automatic Deployments
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment

### Build Time
- Initial build: ~2-3 minutes
- Subsequent builds: ~1-2 minutes

## 🐛 Troubleshooting

### Build Fails?
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Verify build command is correct

### 404 Errors?
- The `vercel.json` rewrites handle this
- All routes redirect to index.html for React Router

### Images Not Loading?
- Public folder assets are automatically served
- Resume PDF is in `/frontend/public/`

## 📱 After Deployment

Test these features:
- ✅ Email copy button
- ✅ WhatsApp link (mobile & desktop)
- ✅ Resume download
- ✅ All project live demo links
- ✅ GitHub links
- ✅ LinkedIn link
- ✅ Smooth scrolling navigation

## 🎉 Success!

Once deployed, share your portfolio:
- LinkedIn profile
- GitHub README
- Resume
- Email signature

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
