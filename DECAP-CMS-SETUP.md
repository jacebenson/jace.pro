# Decap CMS Setup for jace.pro

This site now has Decap CMS (formerly Netlify CMS) configured for content management.

## What's Been Configured

### Collections
- **Blog Posts**: Located in `src/posts/{year}/` organized by year
- **Draft Posts**: Located in `src/posts/drafts/` for work-in-progress content
- **Pages**: Located in `src/pages/` for static pages like About, Privacy, etc.

### Features
- Editorial workflow (Draft → In Review → Ready)
- Tag management
- Media uploads to `src/assets/images/blog/`
- Redirect URL management
- Markdown editing with rich text support

## Setup Instructions

### 1. Enable Netlify Identity (For Production)

On Netlify:
1. Go to your site dashboard
2. Navigate to **Site settings → Identity**
3. Click **Enable Identity**
4. Under **Registration preferences**, select "Invite only" (recommended)
5. Under **Services → Git Gateway**, click **Enable Git Gateway**

### 2. Invite Users

1. Go to **Identity** tab in your Netlify dashboard
2. Click **Invite users**
3. Enter email addresses of content editors
4. They'll receive an invitation email to set up their account

### 3. Access the CMS

Once deployed, access the CMS at:
- Production: `https://jace.pro/admin/`
- Local: `http://localhost:8080/admin/`

### 4. Local Development (Optional)

To test the CMS locally without authentication:

1. Install the Decap CMS proxy server:
   ```bash
   npx decap-server
   ```

2. In `src/admin/config.yml`, uncomment the local backend line:
   ```yaml
   local_backend: true
   ```

3. Run your 11ty dev server:
   ```bash
   npm run dev
   ```

4. Access the CMS at `http://localhost:8080/admin/`

**Note**: Remember to comment out `local_backend: true` before deploying to production!

## How to Use

### Creating a New Blog Post

1. Log in to the CMS at `/admin/`
2. Click **Blog Posts** collection
3. Click **New Post**
4. Fill in:
   - Title
   - Description
   - Publish Date
   - Tags (e.g., servicenow, javascript)
   - Body content
5. Click **Save** → **Set status** → Choose Draft/In Review/Ready
6. When ready, click **Publish** to create a pull request or commit directly

### Creating a Draft Post

Same as above, but use the **Draft Posts** collection. These are saved in `src/posts/drafts/`.

### Editing a Page

1. Click **Pages** collection
2. Select the page to edit
3. Make your changes
4. Save and publish

### Editorial Workflow

The CMS uses a 3-stage workflow:
1. **Drafts**: Work in progress
2. **In Review**: Ready for review
3. **Ready**: Approved and ready to publish

Content must go through these stages before being published to the main branch.

## File Structure

```
src/
├── admin/
│   ├── config.yml      # CMS configuration
│   └── index.html      # CMS interface
├── posts/
│   ├── 2025/          # Posts organized by year
│   ├── 2024/
│   ├── drafts/        # Draft posts
│   └── posts.json     # Default post config
└── pages/             # Static pages
```

## Customizing the CMS

Edit `src/admin/config.yml` to:
- Add new content collections
- Modify field types
- Change media folders
- Adjust editorial workflow settings

See [Decap CMS documentation](https://decapcms.org/docs/configuration-options/) for all options.

## Troubleshooting

### Can't log in
- Ensure Netlify Identity is enabled
- Check that Git Gateway is enabled
- Verify the user has been invited

### Changes not appearing
- Check the **Workflow** tab for pending changes
- Ensure the content was published (not just saved)
- Check that the pull request was merged (if using editorial workflow)

### Local backend not working
- Ensure `npx decap-server` is running
- Verify `local_backend: true` is uncommented in config.yml
- Check that your dev server is running

## Next Steps

1. Deploy these changes to Netlify
2. Enable Netlify Identity on your site
3. Invite your first content editor
4. Test creating a post in the CMS

## Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Documentation](https://docs.netlify.com/visitor-access/git-gateway/)
