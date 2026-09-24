# Personal Portfolio

A static landing page published with GitHub Pages. No build step, no dependencies.

## Structure
```
portfolio-site/
├── .github/workflows/pages.yml   Publishes frontend/ on every push to main
├── README.md
└── frontend/
    ├── index.html                Page content and sections
    ├── css/
    │   ├── variables.css         Colors, fonts, spacing (edit first)
    │   ├── base.css              Reset, typography, page layout
    │   └── components.css        Header, buttons, cards, contact form
    ├── js/
    │   ├── projects.js           Your project list (edit this)
    │   └── main.js               Renders projects, handles contact form
    └── assets/
        ├── images/profile/       Portrait (portrait.jpg)
        ├── images/projects/      One image per project
        ├── images/icons/         Favicon
        ├── fonts/                Self-hosted fonts (optional)
        └── docs/                 resume.pdf
```

## 1. Personalize
- Replace "Your Name" and placeholder text in `frontend/index.html`.
- List your projects in `frontend/js/projects.js`.
- Add images and your résumé to `frontend/assets/`.

## 2. Set up the contact form
1. Create a free form at https://formspree.io and copy its form ID.
2. In `frontend/index.html`, replace `YOUR_FORM_ID` in the form's `action`
   with that ID. Submissions are emailed to you.

Other form services work too, but check that their field names and
endpoint match the form.

## 3. Publish
1. Push this repo to GitHub (branch `main`).
2. Go to Settings → Pages → Build and deployment → Source, and choose **GitHub Actions**.
3. Push again (or run the workflow from the Actions tab). Your site appears at
   `https://YOUR-USERNAME.github.io/REPO-NAME/`, or `https://YOUR-USERNAME.github.io/`
   if the repo is named `YOUR-USERNAME.github.io`.

## Preview locally
Open `frontend/index.html` in a browser. The contact form only works once published.
