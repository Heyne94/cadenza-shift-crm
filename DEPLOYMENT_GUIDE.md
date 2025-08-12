# GitHub Deployment Guide for Cadenza CRM

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Fill in the repository details:
   - **Repository name**: `cadenza-shift-crm` (or your preferred name)
   - **Description**: "Cadenza Shift & Employee Record CRM - AI-powered scheduling system"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/cadenza-shift-crm.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Set Up GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. GitHub will suggest workflows - choose "Static HTML" or create a custom one

## Step 4: Create GitHub Actions Workflow

Create a file `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Step 5: Access Your Deployed Site

After the workflow runs successfully, your site will be available at:
`https://YOUR_USERNAME.github.io/cadenza-shift-crm/`

## Alternative: Manual Deployment

If you prefer manual deployment:

1. Build the project locally: `npm run build`
2. Go to repository Settings > Pages
3. Choose "Deploy from a branch"
4. Select "gh-pages" branch (you'll need to create this)
5. Upload the contents of the `dist/` folder to the gh-pages branch

## Troubleshooting

- Make sure your repository is public for GitHub Pages (unless you have a paid plan)
- Check the Actions tab for any build errors
- Ensure all dependencies are properly listed in package.json
- Verify the base URL in vite.config.js if needed

## Next Steps

- Set up a custom domain (optional)
- Configure environment variables for production
- Set up continuous deployment for automatic updates
