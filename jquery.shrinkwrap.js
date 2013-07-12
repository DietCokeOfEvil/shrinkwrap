/** 
 * JQuery plugin that scales and centers a block element inside its parent's
 * bounding box.  Mainly designed for images.  Scaling preserves aspect ratio,
 * and centering is both horizontal and vertical.
 * 
 * Author: Seth Davenport, http://www.sethdavenport.com
 *
 *  Copyright 2013 Seth Davenport
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *   http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Shrinkwrap: scales and centers an image inside its container's box.
 * 
 * Scaling preserves aspect ratio.
 * Centering is both horizontal and vertical.
 */
(function($) {
    $.fn.extend({
        shrinkWrap: function() {
            return $(this).fitToParentBox().centerInParentBox();
        }
    });
})(jQuery);

/**
 * Fits an item inside its container's box.  Scaling preserves aspect ratio.
 */
(function($) {
    $.fn.extend({
        fitToParentBox: function() {
            return this.each(function() {
                var item = $(this);
                var box = $(this).parent();
                
                // Figure out which dimension needs to be scaled the most.
                var widthDelta = box.width() - item.width();
                var heightDelta = box.height() - item.height();

                newWidth = item.width();
                newHeight = item.height();
                if (widthDelta > heightDelta) {
                    newWidth = 'auto';
                    newHeight = '100%';
                }
                else {
                    newWidth = '100%';
                    newHeight = 'auto';
                }

                item.css('position', 'relative');
                item.css('width', newWidth);
                item.css('height', newHeight);
            });
        }
    });
})(jQuery);

/**
 * Centres an item inside its container's box.
 */
(function($) {
    $.fn.extend({
        centerInParentBox: function() {
            return this.each(function() {
                var item = $(this);
                var box = $(this).parent();
                
                var widthDelta = box.width() - item.width();
                var heightDelta = box.height() - item.height();

                item.css('position', 'relative');
                item.css('left', (widthDelta / 2) + 'px');
                item.css('top', (heightDelta / 2)  + 'px');
            });
        }
    })
})(jQuery);