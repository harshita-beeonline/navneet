#!/bin/bash

echo "🔁 Starting deployment for beta.modxcomputers.com"

# Navigate to project directory
cd /www/wwwroot/beta.modxcomputers.com || {
  echo "❌ Project folder not found!"
  exit 1
}


# Pull latest code
echo "📥 Pulling latest code from Bitbucket..."
git pull origin main || git pull origin master

# Fix for Git ownership warning (just in case)
git config --global --add safe.directory /www/wwwroot/beta.modxcomputers.com

# Clean old build cache
echo "🧹 Removing old .next build cache..."
rm -rf .next
npm cache clean --force

# Install dependencies
echo "📦 Installing npm packages..."
npm install --legacy-peer-deps

# Build the app
echo "🏗️ Building Next.js app..."
npm run build

# Restart PM2 process cleanly
echo "🧹 Deleting and restarting PM2 process..."
pm2 delete modx-beta
pm2 start npm --name "modx-beta" -- start
pm2 save

echo "✅ Deployment complete!"
