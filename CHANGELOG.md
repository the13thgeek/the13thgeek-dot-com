# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- [Placeholder for ongoing development]

---
## [1.2.6] - 2024-11-28
### Changed 
- [About] Added non-tech work, volunteer experience and FT/PT job indicators

## [1.2.5] - 2024-11-21
### Changed 
- [About] Updated headshot

## [1.2.4] - 2024-10-20
### Changed 
- [About] Reworded About page's Off The Grid section.

## [1.2.3a] - 2024-10-08
### Fixed 
- [Global] Fixed code styling

## [1.2.3] - 2024-10-02
### Changed
- [Twitch] Layout revamp

## [1.2.2] - 2024-09-29
### Added
- [FieldNotes] added support for <hr /> rendering

## [1.2.1] - 2024-09-28
### Fixed
- [Global] fixed mistake in date options object
### Added
- [Global] added MM.DD.YYYY display format in dateFormatter()
### Removed 
- [Global] remove Tiny5 font, no longer used

## [1.2.0] - 2024-09-27
### Added
- [Global] Sanity.io integration
- [Global] Fixed responsive navbar logo
- [FieldNotes] Added blogs!
### Changed
- [Global] created utils component for generic helpers
- [Global] created fieldNotesUtils for blog helpers
- [Global] created twitchUtils for Twitch API-related helpers
- [WIP] Updated links list to display in a column
### Fixed
- [Global] changed NavLink -> Link for non-navigational links
### Removed
- [MyWork] deleted unused component

## [1.1.2] - 2024-09-14
### Fixed
- [Twitch] Fixed link on Latest Broadcasts to make the first item point to the live stream during Live

## [1.1.1] - 2024-09-14
### Fixed
- [Twitch] Fixed bug on the missing broadcast thumbnail while live on Twitch

## [1.1.0] - 2024-09-13
### Added
- [Global] Added SEO tags/integration

## [1.0.0] - 2024-09-13
- First release! =)

## [0.2.9] - 2024-09-12
### Added
- [Global] GA4 integration
- [Twitch] Twitch integration for VODs, clips and LIVE status
- [Home] Twitch LIVE integration
### Changed
- [Twitch] Reversed layout order for History/Rotation
- [Twitch] Converted Rotation to horizontal carousel

## [0.2.8] - 2024-09-08
### Added
- [Home] Text animation effect on Hero
- [About] Branding section
- [Twitch] Community/Staff section
### Changed
- [Global] Changed navigation from BrowserRouter -> HashRouter
- [Home] Minor layout tweaks
- [About] Tweaks on wording/layout
- [Twitch] Tweaks on wording
### Fixed
- [Home] Repository links

## [0.2.7] - 2024-09-07
### Added
- [Twitch] Slider implementation

## [0.2.6] - 2024-09-05
### Fixed
- [Navbar] Fixed/cleaned up global styles
### Changed
- [404] updated
- [About] Page updated to reflect updated colour scheme
- [Twitch] Page layout updated
### Added
- [About] Background info
- [About] Added 'open to work' badge

## [0.2.5] - 2024-09-05
### Fixed
- [About] Social media display error
- [Navbar] Added support for navigating between page-to-anchor link to another page via "isHome" prop
- [Global] Fixed duplicated styles on SCSS compile
### Added
- [About] PH language support
- [Twitch] Embedded player
- [Twitch] History
- [Twitch] Now Streaming + Community
- [Projects] added
- [Workshop] added
- [Gaming] added
- [Connect] added
### Changed
- [Global] Cleaned up global styles
- [Global] Changed colour schemes
- [Global] Fixed pages to top scroll for each load
- [About] Updated/cleaned layout
- [Home] Updated layout
- [Hero] revamp
- [Projects] renamed from [MyWork]
- [Projects] revamp
### Removed
- [Services] removed
- [Socials] removed
- cleaned up unused assets/components

## [0.2.4] - 2024-08-28
### Added
- [Global] Implemented global styles for site-wide objects
- [Global] Font-Awesome integration
- [Global] Colour palette/styles
- [Global] Japanese font support
- [About] Image assets
### Changed
- [Navbar] New colour scheme
- [Navbar] New floating style
- [Home] Intro
- [Services] Updated header
- [About] Page updates

## [0.2.3] - 2024-08-20
### Added
- COMING SOON page

### Changed
- [Global] favicon

## [0.2.2] - 2024-08-14
### Added
- new CHANGELOG document
- [Navbar] set "current" class marker on navbar link if user is on the same page

### Changed
- README.md; changelog has been moved to separate file
- [Global] useEffect implementation to add empty dependency arrays
- [Navbar] changed <Link> to <NavLink>

### Deprecated
- [Navbar] EXACT prop on the Navbar component

---

## [0.2.1] - 2024-08-13
### Added
- [Global] Boilerplate Terms of Use and Privacy Policy pages.
- [Global] `.env` file for environment configuration.

---

## [0.2.0] - 2024-08-11
### Added
- [Global] Global stylesheet for variables/global elements.
- [Global] Branding for the13thgeek in header and footer.
- [Global] Routing for the application.
- [Global] New pages including 404 page.
- [Global] SASS integration.

### Changed
- [Style] Converted existing CSS to SASS.
- [About] Moved the About component into its own page.

---

## [0.1.1] - 2024-08-10
### Added
- [Global] Assets folder for static files.
- [Global] Navbar and hero area components.
- [Global] About Me, Services, and Contact components.
- [Global] Footer section.
- [Global] Responsive CSS for mobile and tablet views.

---

## [0.1.0] - 2024-08-09
### Added
- [Global] Initial project setup and creation.
- [Global] Initial commits.
- [Global] Basic homepage with barebones navbar.