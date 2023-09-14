(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = '8230BE2198E70B5AD0269A9600311300';
	s.version = '17-1-2-0';
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	b.push(function () {
		x.stickyBar({
			enabledBreakpoints: ['ea2f0ee4d5cbb25e1ee6c7c4378fee7b','d2f9bff7f63c0d6b7c7d55510409c19b','72e5146e7d399bc2f8a12127e43469f1','5ecdcca63de80fd3d4fbb36295d22b7d']
		});
	});

	// ShowBox
	$.extend(s.imShowBox, {
		"effect": "none", "customEffect": "generic animated none",
		'transitionEffect' : 'zoom',
		'fullScreenEnabled' : true,
		'zoomEnabled' : true,
		'showProgress' : true,
		'shadow' : '3px 3px 5px 0px rgba(64, 64, 64, 1)',
		'background' : 'rgba(255, 255, 255, 1)',
		'borderWidth' : {
			'top': 1,
			'right': 1,
			'bottom': 4,
			'left': 3
		},
		'buttonLeft': '<svg class=\"im-common-left-button\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#1a171b;}.b{fill:#fff;}<\/style><\/defs><path class=\"a\" d=\"M26.62,42.33a1,1,0,0,1-.66-.25L7.31,25.83a1,1,0,0,1,0-1.51L26,8.08a1,1,0,0,1,1.66.75V20.37H42a1,1,0,0,1,1,1v7.42a1,1,0,0,1-1,1H27.62V41.33a1,1,0,0,1-1,1Z\"/><path class=\"b\" d=\"M26.62,8.83V21.37H42v7.42H26.62V41.33L8,25.07,26.62,8.83m0-2a2,2,0,0,0-1.31.49L6.65,23.57a2,2,0,0,0,0,3L25.3,42.83a2,2,0,0,0,3.31-1.51V30.79H42a2,2,0,0,0,2-2V21.37a2,2,0,0,0-2-2H28.62V8.83a2,2,0,0,0-2-2Z\"/><\/svg>',
		'buttonRight': '<svg class=\"im-common-right-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#1a171b;}.b{fill:#fff;}<\/style><\/defs><path class=\"a\" d=\"M23.38,42.25a1,1,0,0,1-1-1V29.71H8a1,1,0,0,1-1-1V21.29a1,1,0,0,1,1-1H22.38V8.75A1,1,0,0,1,24,8L42.69,24.24a1,1,0,0,1,0,1.51L24,42A1,1,0,0,1,23.38,42.25Z\"/><path class=\"b\" d=\"M23.38,8.75,42,25,23.38,41.25V28.71H8V21.29H23.38V8.75m0-2a2,2,0,0,0-2,2V19.29H8a2,2,0,0,0-2,2v7.42a2,2,0,0,0,2,2H21.38V41.25a2,2,0,0,0,3.31,1.51L43.35,26.5a2,2,0,0,0,0-3L24.7,7.24a2,2,0,0,0-1.31-.49Z\"/><\/svg>',
		'buttonClose': '<svg class=\"im-common-close-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#1a171b;}.b{fill:#fff;}<\/style><\/defs><path class=\"a\" d=\"M32.33,36.84a1,1,0,0,1-.71-.29L25,29.92l-6.62,6.62a1,1,0,0,1-1.41,0L13.46,33a1,1,0,0,1,0-1.41L20.08,25l-6.62-6.62a1,1,0,0,1,0-1.41l3.5-3.5a1,1,0,0,1,1.41,0L25,20.08l6.63-6.62a1,1,0,0,1,1.41,0l3.5,3.5a1,1,0,0,1,0,1.41L29.92,25l6.62,6.63a1,1,0,0,1,0,1.41L33,36.54A1,1,0,0,1,32.33,36.84Z\"/><path class=\"b\" d=\"M32.33,14.16l3.5,3.5L28.5,25l7.33,7.33-3.5,3.5L25,28.5l-7.33,7.33-3.5-3.5L21.5,25l-7.33-7.33,3.5-3.5L25,21.5l7.33-7.33m0-2a2,2,0,0,0-1.41.59L25,18.67l-5.92-5.92a2,2,0,0,0-2.83,0l-3.5,3.5a2,2,0,0,0,0,2.83L18.67,25l-5.92,5.92a2,2,0,0,0,0,2.83l3.5,3.5a2,2,0,0,0,2.83,0L25,31.33l5.92,5.92a2,2,0,0,0,2.83,0l3.5-3.5a2,2,0,0,0,0-2.83L31.33,25l5.92-5.92a2,2,0,0,0,0-2.83l-3.5-3.5a2,2,0,0,0-1.41-.59Z\"/><\/svg>',
		'buttonEnterFS': '<svg class=\"im-common-enter-fs-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#1a171b;}<\/style><\/defs><path class=\"a\" d=\"M39.93,31.73V19s0-.09,0-.13l.67-6.14a2,2,0,0,0-2-2.22h-.22l-8.91,1H18.39l-6.74-.74h-.22a2,2,0,0,0-2,2.22l.74,6.74V30.82l-1,8.91a2,2,0,0,0,2,2.22h.22l6.14-.67H30.39l8.24.9h.22a2,2,0,0,0,2-2.22Z\"/><polygon class=\"b\" points=\"38.85 40.19 37.66 29.33 34.39 32.59 28.03 26.23 29.95 24.32 29.95 24.32 34.15 20.12 37.42 23.39 38.61 12.53 27.75 13.72 31 16.97 24.89 23.09 23.24 21.43 23.24 21.43 19.03 17.22 22.29 13.96 11.43 12.77 12.62 23.63 15.88 20.36 21.75 26.23 19.83 28.14 19.83 28.14 15.63 32.34 12.38 29.09 11.19 39.95 22.05 38.76 18.78 35.49 24.89 29.37 27.06 31.55 27.06 31.55 31.25 35.73 27.99 39 38.85 40.19\"/><\/svg>',
		'buttonExitFS': '<svg class=\"im-common-exit-fs-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#1a171b;}<\/style><\/defs><path class=\"a\" d=\"M42.66,19.44h-.51a10.13,10.13,0,0,0-8.49-8.18V10A1.56,1.56,0,0,0,32.1,8.45H7.34A1.56,1.56,0,0,0,5.78,10V40a1.56,1.56,0,0,0,1.56,1.56H42.66A1.56,1.56,0,0,0,44.22,40V21A1.56,1.56,0,0,0,42.66,19.44Z\"/><polygon class=\"b\" points=\"39.99 21 39.99 37.46 10.01 37.46 10.01 12.54 32.1 12.54 32.1 10.01 7.34 10.01 7.34 39.99 42.66 39.99 42.66 21 39.99 21\"/><polygon class=\"b\" points=\"25.09 14.86 23.2 22.89 21.3 30.93 29.45 29.58 37.59 28.23 32.77 23.07 39.11 17.14 36.26 14.09 29.92 20.02 25.09 14.86\"/><\/svg>',
		'buttonZoomIn': '<svg class=\"im-common-zoom-in-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#1a171b;}<\/style><\/defs><path class=\"a\" d=\"M43.95,38.18l0,0-7.32-7.3A17,17,0,0,0,22.06,5a17,17,0,0,0,0,34.05,16.85,16.85,0,0,0,8.76-2.44l7.34,7.32,0,0a3.67,3.67,0,0,0,2.59,1A4.29,4.29,0,0,0,45,40.78,3.65,3.65,0,0,0,43.95,38.18Z\"/><path class=\"b\" d=\"M42.86,39.25h0l-8.21-8.18A15.53,15.53,0,1,0,31,34.66l8.22,8.19h0a2.15,2.15,0,0,0,1.53.61,2.76,2.76,0,0,0,2.7-2.7A2.14,2.14,0,0,0,42.86,39.25Zm-1.08,1.07h0l-1.46,1.46h0l1.46-1.46ZM12.71,31.37a13.21,13.21,0,1,1,9.35,3.87A13.23,13.23,0,0,1,12.71,31.37Z\"/><polygon class=\"b\" points=\"23.66 13.32 20.23 13.32 20.23 20.5 13.05 20.5 13.05 23.93 20.23 23.93 20.23 31.1 23.66 31.1 23.66 23.93 30.83 23.93 30.83 20.5 23.66 20.5 23.66 13.32\"/><\/svg>',
		'buttonZoomOut': '<svg class=\"im-common-zoom-out-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#1a171b;}<\/style><\/defs><path class=\"a\" d=\"M44,38.22l0,0-7.34-7.32A17.07,17.07,0,0,0,22,4.94,17.08,17.08,0,0,0,22,39.1a16.91,16.91,0,0,0,8.79-2.45L38.18,44l0,0a3.68,3.68,0,0,0,2.6,1A4.3,4.3,0,0,0,45,40.82,3.66,3.66,0,0,0,44,38.22Z\"/><path class=\"b\" d=\"M42.89,39.29h0l-8.23-8.21A15.58,15.58,0,1,0,31,34.69l8.24,8.22h0a2.15,2.15,0,0,0,1.53.61,2.77,2.77,0,0,0,2.71-2.71A2.14,2.14,0,0,0,42.89,39.29Zm-1.08,1.07h0l-1.47,1.47h0l1.47-1.47Zm-29.16-9A13.25,13.25,0,1,1,22,35.28,13.28,13.28,0,0,1,12.65,31.39Z\"/><rect class=\"b\" x=\"12.99\" y=\"20.48\" width=\"17.84\" height=\"3.44\"/><\/svg>',
		'buttonZoomRestore': '<svg class=\"im-common-zoom-restore-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#fff;}.b{fill:#1a171b;}<\/style><\/defs><path class=\"a\" d=\"M44.55,18.81a1.83,1.83,0,0,0-1.63-1h0L35.61,18l-.14-.27c-.09-.18-.19-.36-.29-.54-.2-.35-.4-.7-.63-1l-.05-.08c-.28-.41-.58-.81-.89-1.19l-.06-.07a15.81,15.81,0,0,0-7.49-5l-.07,0c-.48-.15-1-.28-1.48-.38l-.12,0c-.43-.08-.86-.15-1.3-.2l-.36,0c-.48,0-1-.07-1.47-.07h0a16,16,0,0,0,0,31.95h0c.49,0,1,0,1.47-.07l.43,0q.54-.06,1.07-.16l.4-.08c.47-.1.93-.22,1.39-.36h0c.45-.14.89-.31,1.33-.49l.38-.17q.47-.21.92-.44l.4-.21c.32-.18.63-.37.94-.57l.26-.17.06,0,.07-.06a16,16,0,0,0,4.35-4.53,1.81,1.81,0,0,0,.36-.35l9.3-12.48A1.83,1.83,0,0,0,44.55,18.81Z\"/><path class=\"b\" d=\"M33.62,32.13l9.3-12.48-8.49.19a14.14,14.14,0,1,0-5.16,16.82,1.58,1.58,0,0,0-1.79-2.6A11,11,0,1,1,31,19.92l-7.24.16Z\"/><\/svg>',
		'borderRadius' : '20px 20px 20px 20px',
		'borderColor' : 'rgba(255, 255, 255, 1) rgba(255, 255, 255, 1) rgba(0, 0, 0, 1) rgba(0, 0, 0, 1)',
		'textColor' : 'rgba(0, 0, 0, 1)',
		'fontFamily' : 'Raleway',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : 'rgba(255, 255, 255, 1)',
		'opacity' : 0.95,
		'radialBg' : false // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'websitex5.bl.templates.showboxanimation',
		'width' : 500,
		'shadow' : '3px 3px 5px 0px rgba(64, 64, 64, 1)',
		'background' : 'rgba(255, 255, 255, 1)',
		'borderRadius' : 10,
		'textColor' : 'rgba(0, 0, 0, 1)',
		'boxColor' : 'rgba(255, 255, 255, 1)',
		'opacity' : 0.95
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 1,
		'arrow' : true,
		'shape' : 'classic',
		'position' : 'bottom',
		'effect' : 'attach',
		'showTail' : true
	});

	// PageToTop
	$.extend(s.imPageToTop, {
		'imageFile' : 'style/page-to-top.png'
	});

	// Captcha
	b.push(function () {
		x5engine.captcha.instance = new x5engine.captcha.x5captcha({
			"phpfile": "captcha/x5captcha.php",
		});
	}, false, 'first');
	b.push(function() { x.passwordpolicy.init({ "requiredPolicy": "false", "minimumCharacters": "6", "includeUppercase": "false", "includeNumeric": "false", "includeSpecial": "false" });
	});

	// BreakPoints
	s.breakPoints.push({ "hash": "ea2f0ee4d5cbb25e1ee6c7c4378fee7b", "name": "Desktop", "start": "max", "end": 1150, "fluid": false});
	s.breakPoints.push({ "hash": "d2f9bff7f63c0d6b7c7d55510409c19b", "name": "Breakpoint 1", "start": 1149, "end": 720, "fluid": false});
	s.breakPoints.push({ "hash": "72e5146e7d399bc2f8a12127e43469f1", "name": "Mobile", "start": 719, "end": 480, "fluid": false});
	s.breakPoints.push({ "hash": "5ecdcca63de80fd3d4fbb36295d22b7d", "name": "Mobile Fluid", "start": 479, "end": 0, "fluid": true});

	b.push(function() { x.cookielaw.showBanner({id: "cookie-law-message",texts: [
		{ basepath: "", text: "This website uses cookies: please read the statement on data protection." },
		{ basepath: "../", text: "This website uses cookies: please read the statement on data protection." }
	],
priority: 1, bannerStyle: 'box', position: 'top-left', acceptButton: false}); });

	s.loaded = true;
})( _jq, x5engine );
