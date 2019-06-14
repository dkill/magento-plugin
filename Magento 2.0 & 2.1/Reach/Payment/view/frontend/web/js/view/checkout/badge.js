/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'ko',
    'underscore',
    'uiComponent',
    'jquery'
    
], function (ko,_,Component,$) {
    'use strict';

    return Component.extend({        
        initialize: function () {
            this._super();
            return this;
        },
        /**
         * @param {HTMLElement} element
         */
        getBadge: function () {             
            return  window.checkoutConfig.reach.badge.ImageUrl;
        },

        /**
         * @returns {Boolean}
         */
        isBadgeEnabled: function () {
            return true;
        }
    });
});
