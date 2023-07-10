# Functional Requirements and Notes

challenge page -- https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H

Light/Dark Mode toggle -- takes system pref by default, but can override with toggle
- What HTML markup (accessible) --  https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/
- Use fieldset, legentd, radio inputs

Use fieldset, legend, radio inputs

Switching between light/dark mode via JS and Prefers-color-scheme media query 
	--  https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

Three options toggle: light/dark/system pref -- https://codepen.io/renddrew/pen/bRomab?editors=1100

CSS Variables (custom properties) -- https://css-tricks.com/updating-a-css-variable-with-javascript/

Prefers-color-scheme media query

Accessibility
- Use correct heading tags
- Screenreader-only text for card titles/username -- https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/

Card organization
card
card__platform
card__icon
card__icon--facebook
card__username

card__count
card__count--big, card_count--small
card__label

card__change
card__change--up, card__change--down
