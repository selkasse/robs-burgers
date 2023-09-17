# Rob's Burgers

This is a sample site for a fictitous client -- Rob's Burgers

It is currently hosted on a Salesforce Experience Builder site (LWR)

## Gotchas

<!-- START COLLAPSIBLE SECTION -->

<details>
<summary>
<h3> CSS not being applied </h3>
</summary>

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
- press the 'Save' button
- refresh the page

Remove or comment-out the line that looks like this:

```html
<link
  rel="stylesheet"
  href="{ basePath }/assets/styles/dxp-slds-extensions.min.css?{ versionKey }"
/>
```

</details>

<!-- END COLLAPSIBLE SECTION -->

<!-- START COLLAPSIBLE SECTION -->
<details>
<summary>
<h3>Mystery background color</h3>
</summary>

Similar to CSS not being applied, the default stylesheets in the `<head>` markup also adds unwanted styles. For instance, a colored background in the `body` that we did not specify.

Again, we can comment out the appropriate stylesheet to remove the background color. However, keep in mind that this is the same stylesheet that allows for `slds` styling.

In other words, removing this stillsheet will **disable built-in componenets and classes** like `<lightning-card>` and `slds-align_absolute-center`

If you wish to proceed, remove or comment-out the line that looks like this:

```html
<link
  rel="stylesheet"
  href="{ basePath }/assets/styles/salesforce-lightning-design-system.min.css?{ versionKey }"
/>
```

</details>
<!-- END COLLAPSIBLE SECTION -->

<!-- START COLLAPSIBLE SECTION -->
<details>

<summary>
<h3> Site requiring login </h3>
</summary>

By default, accessing the site will prompt for a Salesforce login.

If this is not the desired behavior, you will need to adjust a setting:

- open the Builder for your Experience Site
- go to 'Settings'
- in the 'General' tab, check the box for 'Guest users can see and interact with the site without logging in'
- publish the site

You should now be able to access the site without a login

</details>

<!-- END COLLAPSIBLE SECTION -->
