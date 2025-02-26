/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

/* Override Infima variables */
:root {
  --ifm-font-family-base: 'Inter', sans-serif;
  --ifm-font-family-monospace: 'DM Mono', monospace;
  --ifm-color-primary: #333;
  --ifm-color-primary-dark: #222;
  --ifm-color-primary-darker: #111;
  --ifm-color-primary-darkest: #000;
  --ifm-color-primary-light: #555;
  --ifm-color-primary-lighter: #777;
  --ifm-color-primary-lightest: #999;
  --ifm-code-font-size: 92%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

/* Keep dark mode colors monochrome */
[data-theme='dark'] {
  --ifm-color-primary: #ccc;
  --ifm-color-primary-dark: #bbb;
  --ifm-color-primary-darker: #aaa;
  --ifm-color-primary-darkest: #999;
  --ifm-color-primary-light: #ddd;
  --ifm-color-primary-lighter: #eee;
  --ifm-color-primary-lightest: #fff;
  --docusaurus-highlighted-code-line-bg: rgba(255, 255, 255, 0.1);
}

/* Header styling */
.navbar {
  background-color: #FFFFFF !important; /* White header background */
  color: #131313 !important; /* Black/Grey text */
}

/* Ensure header text color does not change in dark mode */
[data-theme='dark'] .navbar {
  background-color: #FFFFFF !important;
  color: #131313 !important;
}

/* Footer styling */
.footer {
  background-color: #333 !important; /* Previous header color */
  color: white !important;
}

/* Adjust Tip Box Color */
.alert--info {
  background-color: #f0f0f0 !important;
  border-color: #aaa !important;
  color: #333 !important;
}

[data-theme='dark'] .alert--info {
  background-color: #444 !important;
  border-color: #666 !important;
  color: #ddd !important;
}

/* Hide Contact link by default */
.navbar .navbar__item--contact {
  display: none;
}

@media (max-width: 767px) {
  .navbar__menu--opened .navbar__item--contact {
    display: block;
  }
}

/* Donate button styling */
.navbar__donate-button {
  background-color: var(--ifm-color-primary);
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border: 2px solid var(--ifm-color-primary-dark);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  margin-left: 10px;
  display: none;
}

/* Show Donate button on mobile */
@media (max-width: 767px) {
  .navbar__donate-button {
    display: block;
  }
}

/* Hover effect for Donate button */
.navbar__donate-button:hover {
  background-color: var(--ifm-color-primary-dark);
  border-color: var(--ifm-color-primary-darker);
}

/* Adjust Donate button border in dark mode */
[data-theme='dark'] .navbar__donate-button {
  border-color: var(--ifm-color-primary-lightest);
}

[data-theme='dark'] .navbar__donate-button:hover {
  border-color: var(--ifm-color-primary-lighter);
}

/* Ensure main header and subheader remain white */
.hero__title, .hero__subtitle {
  color: white !important;
}

/* Adjust H1 and H2 font sizes for mobile */
@media (max-width: 768px) {
  .hero__title {
    font-size: 2.5rem;
  }
  .hero__subtitle {
    font-size: 1.25rem;
  }
}
