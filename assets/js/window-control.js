var nw = require('nw.gui');
var win = nw.Window.get();

// Minimize
document.getElementById('windowControlMinimize').onclick = function() {
    win.minimize();
};

// Close
document.getElementById('windowControlClose').onclick = function() {
	win.close();
};
