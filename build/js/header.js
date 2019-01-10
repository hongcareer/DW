(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//头部显示
$(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 20) {
      $('#header').stop().hide();
      $('.header').slideDown(501);
    } else {
      $('#header').stop().show();
      $('.header').stop().hide();
    }
  });
}());
},{}]},{},[1])