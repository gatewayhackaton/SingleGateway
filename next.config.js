'use strict'

/* eslint-disable */
const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => { }
}

module.exports = withPlugins([
    withCss,
    withImages
])
