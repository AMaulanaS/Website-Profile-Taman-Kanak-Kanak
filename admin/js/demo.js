//[Preview Menu Javascript]

//Project:	Superieur Admin - Responsive Admin Template
//Primary use:   This file is for demo purposes only.

$(function () {
  'use strict'

  /**
   * Get access to plugins
   */

  $('[data-toggle="control-sidebar"]').controlSidebar()
  $('[data-toggle="push-menu"]').pushMenu()

  var $pushMenu       = $('[data-toggle="push-menu"]').data('lte.pushmenu')
  var $controlSidebar = $('[data-toggle="control-sidebar"]').data('lte.controlsidebar')
  var $layout         = $('body').data('lte.layout')

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var mySkins = [
    'skin-info',
    'skin-black',
    'skin-danger',
    'skin-warning',
    'skin-primary',
    'skin-success',
    'skin-info-light',
    'skin-black-light',
    'skin-danger-light',
    'skin-warning-light',
    'skin-primary-light',
    'skin-success-light'
  ]

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== 'undefined') {
      return localStorage.getItem(name)
    } else {
      window.alert('Please use a modern browser to properly view this template!')
    }
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem(name, val)
    } else {
      window.alert('Please use a modern browser to properly view this template!')
    }
  }

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function changeLayout(cls) {
    $('body').toggleClass(cls)
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      $pushMenu.expandOnHover()
      $layout.activate()
    }
    $controlSidebar.fix()
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function changeSkin(cls) {
    $.each(mySkins, function (i) {
      $('body').removeClass(mySkins[i])
    })

    $('body').addClass(cls)
    store('skin', cls)
    return false
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin')
    if (tmp && $.inArray(tmp, mySkins))
      changeSkin(tmp)

    // Add the change skin listener
    $('[data-skin]').on('click', function (e) {
      if ($(this).hasClass('knob'))
        return
      e.preventDefault()
      changeSkin($(this).data('skin'))
    })

    // Add the layout manager
    $('[data-layout]').on('click', function () {
      changeLayout($(this).data('layout'))
    })

    $('[data-controlsidebar]').on('click', function () {
      changeLayout($(this).data('controlsidebar'))
      var slide = !$controlSidebar.options.slide

      $controlSidebar.options.slide = slide
      if (!slide)
        $('.control-sidebar').removeClass('control-sidebar-open')
    })

    $('[data-sidebarskin="toggle"]').on('click', function () {
      var $sidebar = $('.control-sidebar')
      if ($sidebar.hasClass('control-sidebar-dark')) {
        $sidebar.removeClass('control-sidebar-dark')
        $sidebar.addClass('control-sidebar-light')
      } else {
        $sidebar.removeClass('control-sidebar-light')
        $sidebar.addClass('control-sidebar-dark')
      }
    })

    $('[data-enable="expandOnHover"]').on('click', function () {
      $(this).attr('disabled', true)
      $pushMenu.expandOnHover()
      if (!$('body').hasClass('sidebar-collapse'))
        $('[data-layout="sidebar-collapse"]').click()
    })

    $('[data-enable="rtl"]').on('click', function () {
      $(this).attr('disabled', true)
      $pushMenu.expandOnHover()
      if (!$('body').hasClass('rtl'))
        $('[data-layout="rtl"]').click()
    })

    $('[data-enable="dark"]').on('click', function () {
      $(this).attr('disabled', true)
      $pushMenu.expandOnHover()
      if (!$('body').hasClass('dark'))
        $('[data-layout="dark"]').click()
    })

    //  Reset options
    if ($('body').hasClass('fixed')) {
      $('[data-layout="fixed"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('layout-boxed')) {
      $('[data-layout="layout-boxed"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('sidebar-collapse')) {
      $('[data-layout="sidebar-collapse"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('rtl')) {
      $('[data-layout="rtl"]').attr('checked', 'checked')
    }
    if ($('body').hasClass('dark')) {
      $('[data-layout="dark"]').attr('checked', 'checked')
    }

  }

  // Create the new tab
  var $tabPane = $('<div />', {
    'id'   : 'control-sidebar-theme-demo-options-tab',
    'class': 'tab-pane active'
  })

  // Create the tab button
  var $tabButton = $('<li />', { 'class': 'nav-item' })
    .html('<a href=\'#control-sidebar-theme-demo-options-tab\' class=\'active\' data-toggle=\'tab\'>'
      + 'Settings'
      + '</a>')

  // Add the tab button to the right sidebar tabs
  $('[href="#control-sidebar-home-tab"]')
    .parent()
    .before($tabButton)

  // Create the menu
  var $demoSettings = $('<div />')

  // Layout options
  $demoSettings.append(
    '<h4 class="control-sidebar-heading">'
    + 'Layout Options'
    + '</h4>'
    // Fixed layout
	+ '<div class="flexbox mb-15">'
	+ '<label for="layout_fixed" class="control-sidebar-subheading">'
    + 'Fixed layout'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="fixed" id="layout_fixed">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'	
	  
    // Boxed layout
	+ '<div class="flexbox mb-15">'
	+ '<label for="layout_boxed" class="control-sidebar-subheading">'
    + 'Boxed Layout'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="layout-boxed" id="layout_boxed">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
	  
    // Sidebar Toggle
	+ '<div class="flexbox mb-15">'
	+ '<label for="toggle_sidebar" class="control-sidebar-subheading">'
    + 'Toggle Sidebar'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="sidebar-collapse" id="toggle_sidebar">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'	  
    
    // Control Sidebar Toggle
	+ '<div class="flexbox mb-15">'
	+ '<label for="toggle_right_sidebar" class="control-sidebar-subheading">'
    + 'Toggle Right Sidebar Slide'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-controlsidebar="control-sidebar-open" id="toggle_right_sidebar">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'	  
	  	
    // Control Sidebar Skin Toggle
	+ '<div class="flexbox mb-15">'
	+ '<label for="toggle_right_sidebar_skin" class="control-sidebar-subheading">'
    + 'Toggle Right Sidebar Skin'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-sidebarskin="toggle" id="toggle_right_sidebar_skin">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
	  
    // rtl layout
	+ '<div class="flexbox mb-15">'
	+ '<label for="rtl" class="control-sidebar-subheading">'
    + 'rtl'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="rtl" id="rtl">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
	  
    // dark layout
	+ '<div class="flexbox mb-15">'
	+ '<label for="dark" class="control-sidebar-subheading">'
    + 'Dark Layout'
    + '</label>'
	+ '<label class="switch switch-border switch-danger">'
	+ '<input type="checkbox" data-layout="dark" id="dark">'
	+ '<span class="switch-indicator"></span>'
	+ '<span class="switch-description"></span>'
	+ '</label>'
	+ '</div>'
  )
  
  var $skinsList = $('<ul />', { 'class': 'list-unstyled clearfix' })

  // Dark sidebar skins
  var $skinInfo =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-info" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #242a33;"></span><span class="bg-info" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinInfo)
  var $skinBlack =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div class="clearfix"><span style="display:block; width: 30%; float: left; height: 60px; background: #242a33;"></span><span style="display:block; width: 70%; float: left; height: 60px; background: #f4f6f9;"></span></div>'
            + '</a>')
  $skinsList.append($skinBlack)
  var $skinPrimary =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-primary" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #242a33;"></span><span class="bg-primary" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinPrimary)
  var $skinSuccess =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-success" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #242a33;"></span><span class="bg-success" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinSuccess)
  var $skinDanger =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-danger" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #242a33;"></span><span class="bg-danger" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinDanger)
  var $skinWarning =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-warning" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #242a33;"></span><span class="bg-warning" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinWarning)

  // Light sidebar skins
  var $skinInfoLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-info-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #f4f6f9;"></span><span class="bg-info" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinInfoLight)
  var $skinBlackLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div class="clearfix"><span style="display:block; width: 30%; float: left; height: 60px; background: #f4f6f9;"></span><span style="display:block; width: 70%; float: left; height: 60px; background: #2A3E52;"></span></div>'
            + '</a>')
  $skinsList.append($skinBlackLight)
  var $skinPrimaryLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-primary-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #f4f6f9;"></span><span class="bg-primary" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinPrimaryLight)
  var $skinSuccessLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-success-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #f4f6f9;"></span><span class="bg-success" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinSuccessLight)
  var $skinDangerLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-danger-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #f4f6f9;"></span><span class="bg-danger" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinDangerLight)
  var $skinWarningLight =
        $('<li />', { style: 'float:left; width: 33.33333%; padding: 5px 20px 20px 0px;' })
          .append('<a href="javascript:void(0)" data-skin="skin-warning-light" style="display: block;" class="clearfix full-opacity-hover">'
            + '<div><span style="display:block; width: 30%; float: left; height: 60px; background: #f4f6f9;"></span><span class="bg-warning" style="display:block; width: 70%; float: left; height: 60px;"></span></div>'
            + '</a>')
  $skinsList.append($skinWarningLight)

  

  $demoSettings.append('<h4 class="control-sidebar-heading">Skins</h4>')
  $demoSettings.append($skinsList)

  $tabPane.append($demoSettings)
  $('#control-sidebar-home-tab').after($tabPane)

  setup()

  $('[data-toggle="tooltip"]').tooltip()
});// End of use strict
