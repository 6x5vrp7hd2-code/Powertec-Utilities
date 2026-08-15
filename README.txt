POWERTEC UTILITIES — GITHUB FIXED VERSION

This package fixes the missing logo / hero / banner images visible on the live GitHub Pages site.

WHY IT FAILED
The image files were uploaded to the repository ROOT from iPhone, but the website code was looking for them inside an /images/ folder.

THIS VERSION
All images are intentionally kept in the repository root and all HTML/CSS references have been corrected to match.

UPLOAD / REPLACE THESE FILES IN THE REPOSITORY ROOT:
index.html
about.html
services.html
sectors.html
contact.html
styles.css
README.txt
logo.png
hero.jpg
about-banner.jpg
services-banner.jpg
sectors-banner.jpg
contact-banner.jpg
sector-distribution.jpg
sector-datacentre.jpg
sector-infrastructure.jpg
favicon.png

Do NOT create an images folder for this version.
GitHub Pages should redeploy automatically after Commit changes.
