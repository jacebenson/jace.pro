---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "What are all the shortcuts in ServiceNow?"
subtitle: "Whenever the filter navigator shortcuts come up or the keyboard shortcuts come up folks find them useful"
summary: "I'm just making a note of all of these shortcuts here"
authors: ["jace"]
tags: []
categories: []
date: 2020-05-22T09:02:23-05:00
lastmod: 2020-05-22T09:02:23-05:00
featured: false
draft: false
image:
  caption: ""
  focal_point: ""
  preview_only: false
projects: []
---
I was watching the #til channel on [SNDevs](sndevs.com) slack.  The navigation shortcut of `table.filter` came up.  I didn't know about it.  It's great.  Instead of writing about just that, I include all the shortcuts.  

ServiceNow has 3 sets of shortcuts.  They have UI15 Keyboard shortcuts.  I'm not covering those as no one uses UI15 anymore.

# Keyboard shortcuts

There's only a few that ServieNow observes.  Extensions add some too.

## Out of box shortcuts

| Action                                   | Windows keyboard shortcut                   | Mac keyboard shortcut                       |
| ---------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| Activate global search field             | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd> | <kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>G</kbd> |
| Toggle application navigator             | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>C</kbd> | <kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>C</kbd> |
| Activate navigation filter field         | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd> | <kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>F</kbd> |
| Impersonate user                         | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>I</kbd> | <kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>I</kbd> |
| Navigate to the main content on the page | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>P</kbd> | <kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>P</kbd> |
| Client Debugger Window                   | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>J</kbd> | <kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>J</kbd> |
| On Service Portal id=form Save the form  | <kbd>Ctrl</kbd>+<kbd>S</kbd>                | <kbd>Ctrl</kbd>+<kbd>S</kbd>                |
| On Service Portal widget editor, Save    | <kbd>Ctrl</kbd>+<kbd>S</kbd>                | <kbd>Ctrl</kbd>+<kbd>S</kbd>                |

## From SN Utils

| Action                        | Keyboard shortcut                                    |
| ----------------------------- | ---------------------------------------------------- |
| Save the current form         | <kbd>Ctrl</kbd>+<kbd>S</kbd>                         |
| Create List filter            | <kbd>Ctrl</kbd>+<kbd>Left Click</kbd> on Field Label |
| Paste screenshots             | <kbd>Ctrl</kbd>+<kbd>V</kbd>                         |
| Activate the extension        | Configurable |
| Pop-In/Pop-Out of `nav_to.do` | Configurable |
| Show Technical Names          | Configurable |
| Open slashcommand popup       | Configurable |
| Open VS Code ScriptSync tab   | Configurable |

Source: https://twitter.com/sn_utils/status/1192913388906713088

## Navigation shortcuts

| Shortcut       | Do I Use This | What does it do                                                  |
| ---------------| ------------- | ---------------------------------------------------------------- |
| `table.config` | No            | Opens a list of all things related to a table                    |
| `table.list`   | Yes           | Opens the list of all records on said table in the current frame |
| `table.LIST`   | Yes           | Opens the list of all records on said table in a new tab         |
| `table.do`     | Yes           | Opens a empty form for said table in the current frame           |
| `table.form`   | Yes           | Opens a empty form for said table in the current frame           |
| `table.FORM`   | Yes           | Opens a empty form for said table in a new tab                   |
| `table.filter` | No            | Opens the list for a table with no records in the current frame  |
| `table.FILTER` | No            | Opens the list for a table with no records in a new tab          |

I looked for where these are configured/built, and they are hardcoded in [`/scripts/app.magellan/directive.magellanNavigationFilter.js`](https://hi.service-now.com/scripts/app.magellan/directive.magellanNavigationFilter.js).

```js
/*! RESOURCE: /scripts/app.magellan/directive.magellanNavigationFilter.js */
angular.module('Magellan').directive('magellanNavigationFilter', function(
    $rootScope,
    glideUrlBuilder,
    $window,
    snCustomEvent,
    $timeout,
    concourseNavigatorService
) {
    return {
        restrict: 'A',
        template: '',
        link: function(scope, element) {
            var selectedIndex = 0;
            var selectedElement = null;
            var shortcutCallback = null;
            var collection = [];
            var nav = $j('#nav_west_center');
            element.on('focus', function() {
                $timeout(function() {
                    element.select();
                }, 10);
            });
            scope.clearHighlight = function() {
                angular.element('#gsft_nav a.state-active').removeClass('state-active');
            };
            var _$navRoot;

            function _focusFirstItem() {
                if (!_$navRoot) {
                    _$navRoot = $window.jQuery('#gsft_nav');
                }
                $timeout(function() {
                    $window.requestAnimationFrame(function() {
                        _$navRoot.find('.state-active').removeClass('state-active');
                        var $visibleItems = _$navRoot.find('a.sn-widget-list-item:visible');
                        if ($visibleItems.length) {
                            $visibleItems.eq(0).addClass('state-active');
                        }
                    });
                }, 100);
            }
            scope.filterText = '';
            scope.filterTextValue = function(newValue, highlightFirstItem) {
                if (angular.isDefined(newValue)) {
                    concourseNavigatorService.filterTerm = newValue;
                    scope.filterText = newValue;
                    clearShortcutPreview();
                    if (handleNavFilterExtension(scope.filterText)) {
                        return;
                    }
                    handleShortcuts(scope.filterText);
                    if (highlightFirstItem === undefined || highlightFirstItem)
                        _focusFirstItem();
                }
                return scope.filterText;
            };
            scope.handleEnterKeypress = function($event) {
                if (!selectedElement) {
                    var $selected = $window.jQuery('#gsft_nav').find('.state-active');
                    if ($selected.length) {
                        selectedElement = $selected.get(0);
                    }
                }
                if (handleEnterKeypressEvent($event)) {
                    reset();
                }
                handleShortcutCallback();
            };
            var DETECT_JAVASCRIPT = /^javascript:/;

            function handleEnterKeypressEvent($event) {
                if (!selectedElement || !selectedElement.href) {
                    return false;
                }
                if (DETECT_JAVASCRIPT.test(selectedElement.href)) {
                    $window.location.href = selectedElement.href;
                    return true;
                } else {
                    scope.navigate(selectedElement.href, selectedElement.getAttribute('target'));
                    $event.preventDefault();
                    return true;
                }
            }

            function handleShortcutCallback() {
                if (!shortcutCallback)
                    return;
                shortcutCallback();
                scope.filterTextValue('');
                clearShortcutPreview();
            }

            function handleNavFilterExtension(val) {
                try {
                    if (typeof $window.navFilterExtension === "function" && $window.navFilterExtension(val, msg))
                        return true;
                } catch (e) {
                    jslog("Error in UI Script navFilterExtension - " + e);
                }
            }

            function handleShortcuts(filterText) {
                var tooltip = '';
                var table = '';
                shortcutCallback = null;
                if (filterText.length < 5)
                    return;
                if (filterText.endsWith('.form')) {
                    table = filterText.replace('.form', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open the ' + table + ' form';
                    shortcutCallback = function() {
                        scope.navigate(glideUrlBuilder.getCancelableLink(table + '.do?sys_id=-1'));
                    };
                } else if (filterText.endsWith('.list')) {
                    table = filterText.replace('.list', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open the ' + table + ' list';
                    shortcutCallback = function() {
                        scope.navigate(glideUrlBuilder.getCancelableLink(table + '_list.do'));
                    };
                } else if (filterText.endsWith('.config')) {
                    table = filterText.replace('.config', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open the ' + table + ' configuration';
                    shortcutCallback = function() {
                        scope.navigate(glideUrlBuilder.getCancelableLink(buildTableConfigURL(table)));
                    };
                } else if (filterText.endsWith('.filter')) {
                    table = filterText.replace('.filter', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open an empty ' + table + ' list';
                    shortcutCallback = function() {
                        scope.navigate(glideUrlBuilder.getCancelableLink(table + '_list.do?sysparm_filter_only=true'));
                    };
                } else if (filterText.endsWith('.FORM')) {
                    table = filterText.replace('.FORM', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open the ' + table + ' form in a new window';
                    shortcutCallback = function() {
                        $window.open(glideUrlBuilder.newGlideUrl(table + '.do?sys_id=-1').getURL());
                    };
                } else if (filterText.endsWith('.LIST')) {
                    table = filterText.replace('.LIST', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open the ' + table + ' list in a new window';
                    shortcutCallback = function() {
                        $window.open(glideUrlBuilder.newGlideUrl(table + '_list.do').getURL());
                    };
                } else if (filterText.endsWith('.CONFIG')) {
                    table = filterText.replace('.CONFIG', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open the ' + table + ' configuration in a new window';
                    shortcutCallback = function() {
                        $window.open(buildTableConfigURL(table));
                    };
                } else if (filterText.endsWith('.FILTER')) {
                    table = filterText.replace('.FILTER', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open an empty ' + table + ' list in a new window';
                    shortcutCallback = function() {
                        $window.open(glideUrlBuilder.newGlideUrl(table + '_list.do?sysparm_filter_only=true').getURL());
                    };
                } else if (filterText.endsWith('_list.do')) {
                    table = filterText.replace('_list.do', '').toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open the ' + table + ' list';
                    shortcutCallback = function() {
                        scope.navigate(table + '_list.do');
                    };
                } else if (filterText.endsWith('.do')) {
                    var path = filterText.toLowerCase().replace(/ /g, '');
                    tooltip = 'Press enter to open ' + path;
                    shortcutCallback = function() {
                        scope.navigate(path);
                    };
                }
                top.NOW.magellan && top.NOW.magellan.setNavigatingState && top.NOW.magellan.setNavigatingState(true);
                if (tooltip != '')
                    previewShortcut(tooltip);
            }

            function buildTableConfigURL(table) {
                var url = glideUrlBuilder.newGlideUrl('personalize_all.do');
                url.addParam('sysparm_rules_table', table);
                url.addParam('sysparm_rules_label', table);
                return url.getURL();
            }

            function previewShortcut(title) {
                var placement = document.documentElement.getAttribute('dir') == 'rtl' ? 'left' : 'right';
                jQuery(element).tooltip({
                    placement: placement,
                    container: 'body',
                    trigger: 'manual',
                    title: title
                }).tooltip('show');
                scope.isPreviewOpen = true;
            }

            function clearShortcutPreview() {
                if (scope.isPreviewOpen) {
                    jQuery(element).tooltip('destroy');
                    scope.isPreviewOpen = false;
                    shortcutCallback = null;
                }
            }

            function setSelected(index) {
                var element;
                if (index != selectedIndex) {
                    jQuery(selectedElement).removeClass('state-active');
                    selectedIndex = index;
                    selectedElement = collection[index];
                    element = jQuery(selectedElement);
                    element.addClass('state-active');
                }
            }

            function reset() {
                selectedIndex = -1;
                if (selectedElement) {
                    jQuery(selectedElement).removeClass('state-active');
                    selectedElement = null;
                }
                collection = [];
            }
            $rootScope.$on('applicationTree.rendered', function() {
                reset();
                if (scope.data.filteredApplications && scope.data.filteredApplications.length > 0 && scope.filterText.length > 0) {
                    setTimeout(function() {
                        collection = jQuery('#gsft_nav').find('a.sn-widget-list-item');
                        if (collection.length > 0)
                            for (var i = 0; i < collection.length; i++) {
                                if (collection[i].href && collection[i].href != 'javascript:void(0)') {
                                    setSelected(i);
                                    nav.scrollTop(0);
                                    break;
                                }
                            }
                    }, 10);
                }
                if (scope.filterText === '') {
                    clearShortcutPreview();
                }
            });
            jQuery('.nav-body').on('click', 'a', function() {
                if (jQuery(this).attr('href') != '#') {
                    reset();
                }
            });
        }
    };
});;
```