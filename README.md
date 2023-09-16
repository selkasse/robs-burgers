# Rob's Burgers

This is a sample site for a fictitous client -- Rob's Burgers

It is currently hosted on a Salesforce Experience Builder site (LWR)

## Gotchas

Salesforce Experience Builder adds some of its own CSS to conform to Salesforce styles.

This is mostly a good thing. However, it can get in the way of certain custom styles.

For example, in the following CSS block, the `color` property was not being applied:

```css
.logo {
  display: inline-block;
  color: white;
  font-size: 60px;
  margin-left: 10px;
}
```

To get around this issue, the `<head>` markup must be changed, as that is where the default stylesheets are being loaded.

To access the `<head>` markup, do the following:

- open the Builder for your Experience Site
- go to Settings
- go to Advanced
- press the 'Edit Head Markup' button
- remove (or comment-out) the `dxp-slds-extensions.min.css` stylesheet

The Head Markup ends up looking like this:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Welcome to LWC Communities!</title>

<link
  rel="stylesheet"
  href="{ basePath }/assets/styles/styles.css?{ versionKey }"
/>

<!-- webruntime-branding-shared stylesheets -->
<link
  rel="stylesheet"
  href="{ basePath }/assets/styles/salesforce-lightning-design-system.min.css?{ versionKey }"
/>
<link
  rel="stylesheet"
  href="{ basePath }/assets/styles/dxp-site-spacing-styling-hooks.min.css?{ versionKey }"
/>
<link
  rel="stylesheet"
  href="{ basePath }/assets/styles/dxp-styling-hooks.min.css?{ versionKey }"
/>
<!--<link rel="stylesheet" href="{ basePath }/assets/styles/dxp-slds-extensions.min.css?{ versionKey }" /> -->

<!-- webruntime-branding-shared stylesheets -->
```
