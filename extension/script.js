/*
 * Copyright (c) 2012 Jose María Chumo Mata. All rights reserved.
 * Use of this source code is governed by a 3-clause BSD license that can be
 * found in the LICENSE file.
 */

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
  // cut from textarea and paste to clipboard.
  // I cut to empty the textarea.
  urls.select();
  document.execCommand('cut');
}

// Menu entry for audio
var audioMenu = chrome.contextMenus.create({
  "title" : chrome.i18n.getMessage('audioMenu'),
  "contexts" : ["audio"],
  "onclick" : addToStash,
});

// Menu entry for images
var imageMenu = chrome.contextMenus.create({
  "title" : chrome.i18n.getMessage('imageMenu'),
  "contexts" : ["image"],
  "onclick" : addToStash,
});

// Menu entry for links
var linkMenu = chrome.contextMenus.create({
  "title" : chrome.i18n.getMessage('linkMenu'),
  "contexts" : ["link"],
  "onclick" : addToStash,
});

// Menu entry for video
var videoMenu = chrome.contextMenus.create({
  "title" : chrome.i18n.getMessage('videoMenu'),
  "contexts" : ["video"],
  "onclick" : addToStash,
});
