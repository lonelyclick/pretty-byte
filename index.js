'use strict';

module.exports = function (num) {
	if (isNaN(parseFloat(num)) || !isFinite(num)) return '-';
	var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
	number = Math.floor(Math.log(num) / Math.log(1024));
	return (num / Math.pow(1024, Math.floor(number))).toFixed(2) +  ' ' + units[number];
};
