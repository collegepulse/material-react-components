## [2.0.6](https://github.com/collegepulse/material-react-components/compare/v2.0.5...v2.0.6) (2019-09-03)


### Bug Fixes

* Docs updates ([#21](https://github.com/collegepulse/material-react-components/issues/21)) ([c1439d6](https://github.com/collegepulse/material-react-components/commit/c1439d6))



## v2.0.5

- [Tabs] Implementation detail changes to reduce bundle size

## v2.0.4

- [Switch] [TextField] enhancements to support Preact

## v2.0.3

- [Dialog] fix for better support for Preact

## v2.0.2

- Upgrade to @babel/runtime@7.0.0

##  v2.0.1

- Exclude require statements to CSS files in CommonJS build

## v2.0.0

### API Changes

- `Switch` and `TextField` no longer autogenerate an aria-labelledby attribute for their input fields. They can be supplied via the labelId prop. This change was needed to fix server-side rendering hydration errors on the client. uuid was also removed from dependencies, so expect a slightly smaller bundle size.

### Build Changes

For versions `1.2.3` (inclusive) and prior, the distributions were incorrect.

- The commonjs `dist/index.js` file had module ES module import/export syntax.
- The commonjs source files had their css inlined (poor for performance and causes bundle size bloat).
- The module build couldn't be tree-shaken since `{sideEffects: false}` was not set in package.json.
- Both builds missed other opportunities for reducing bundle size, like removing prop types.

## v1.2.3

- remove `deep-assign` from dependencies
- remove `keycode` from dependencies

## v1.2.2

No changes.

## v1.2.1

- Upgrade from babel 6 to 7
- switch linter from eslint to xo
- upgrade to webpack 4
- move babel dependencies to devDependencies (where applicable)

## v1.2.0

- `SelectField` component implementation

## v1.1.0

- Added `Table`, partial implementation (https://material.io/guidelines/components/data-tables.html)
- Upgraded some dependencies

## 1.0.0

🎉 1.0.0 release 🎉

- **Support for React 16.** Cleaned up warnings that were present upon upgrade.
- **Removed undocumented API's.** Some components accepted an undocumented domRef property; these have been removed. Out of an abundance of caution, a major release bump-- upgrading should be relatively effortless, however).

## 0.0.5

- [SnackBar] fix centering on IE 11 and Safari

## 0.0.4

- [GridItem] fix issue where child DOM elements could overflow outside the grid

## 0.0.3

- [Tabs] a11y enhancements, fix UI bug where tabs had incorrect height

## v0.0.2-0 

## v0.0.1-0
