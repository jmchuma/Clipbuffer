/*
 * Copyright (c) 2012 Jose María Chumo Mata. All rights reserved.
 * Use of this source code is governed by a 3-clause BSD license that can be
 * found in the LICENSE file.
 */

/**
 * Erase all content in clipboard
 */
function emptyClipboard(info, tab) {
  var urls = document.getElementById('urls');
  urls.value = '';
  urls.select();
  document.execCommand('cut');
}

/**
 * Add url to stash
 */
function addToStash(info, tab) {
  var urls = document.getElementById('urls');
  urls.select();
  // paste previous content
  document.execCommand('paste');
  // queue new URL
  urls.value = urls.value+'\n'+(info.linkUrl || info.srcUrl);
  // paste to clipboard by cutting from textarea.
  // This leaves a empty textare to use in emptyClipboard
  urls.select();
  document.execCommand('cut');
}

// URL stasher menu
var rootMenu = chrome.contextMenus.create({
  "title" : "URL stasher",
  "type" : "normal",
  "contexts" : ["audio","image","link","video"]
});

// Delete URL stash content
var clearMenu = chrome.contextMenus.create({
  "title" : "Clear clipboard",
  "contexts" : ["audio","image","link","video"],
  "onclick" : emptyClipboard,
  "parentId": rootMenu
});

// Add to stahs
var addMenu = chrome.contextMenus.create({
  "title" : "Stash URL",
  "contexts" : ["audio","image","link","video"],
  "onclick" : addToStash,
  "parentId": rootMenu
});