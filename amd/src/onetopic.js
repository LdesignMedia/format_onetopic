// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * HTML tabs to html
 *
 * Since version 2.9, Moodle supports Javascript modules written using the Asynchronous Module Definition (AMD) API.
 * https://docs.moodle.org/dev/Javascript_Modules
 * https://docs.moodle.org/dev/jQuery
 *
 * @package format_onetopic
 * @copyright  2016 MoodleFreak.com
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery', 'jqueryui', 'core/yui'], function ($, Y) {

    /**
     * Show a log message if debugging is enabled.
     * @param val
     */
    var log = function (val) {
        try {
            console.log(val);
        } catch (e) {
        }
    };

    return {
        initialise: function (params) {
            $(document).ready(function () {
                log('Loaded onetopic');
                $('.course-content > .onetopic .nav-tabs li a').each(function (i,e) {
                    $(this).html($(this).text());
                }),

                // Show nav bar
                $('.course-content .onetopic .nav-tabs').show();

            });
        }
    };

});