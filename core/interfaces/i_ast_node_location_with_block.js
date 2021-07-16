/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for an AST node location that has an associated
 * block.
 * @author samelh@google.com (Sam El-Husseini)
 */

'use strict';

goog.module('Blockly.IASTNodeLocationWithBlock');
goog.module.declareLegacyNamespace();

goog.require('Blockly.IASTNodeLocation');
goog.requireType('Blockly.Block');


/**
 * An AST node location that has an associated block.
 * @interface
 * @extends {Blockly.IASTNodeLocation}
 */
const IASTNodeLocationWithBlock = function() {};

/**
 * Get the source block associated with this node.
 * @return {Blockly.Block} The source block.
 */
IASTNodeLocationWithBlock.prototype.getSourceBlock;

exports = IASTNodeLocationWithBlock;
