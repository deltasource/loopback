// Copyright IBM Corp. 2013,2018. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
/**
 * loopback ~ public api
 */

const loopback = module.exports = require('./lib/loopback');
const datasourceJuggler = require('loopback-datasource-juggler');

/**
 * Connectors
 */

loopback.Connector = require('./lib/connectors/base-connector');
loopback.Memory = require('./lib/connectors/memory');

/**
 * Types
 */

loopback.GeoPoint = require('loopback-datasource-juggler/lib/geo').GeoPoint;
loopback.DateString = require('loopback-datasource-juggler/lib/date-string');
loopback.ValidationError = loopback.Model.ValidationError;
