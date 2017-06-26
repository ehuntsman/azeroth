import React, { Component } from 'react';
import './App.css';
import router from './router';
import $ from 'jquery';

export default function App() {
  $(document).ready(function(){
      $("#home").hover(
          function(){
              $("#home img").animate({
                  height: '+=5px',
                  width: '+=5px'
              });
          }, function(){
              $("#home img").animate({
                  height: '-=5px',
                  width: '-=5px'
              });
          }
      )
      $("#shop").hover(
          function(){
              $("#shop img").animate({
                  height: '+=5px',
                  width: '+=5px'
              });
          }, function(){
              $("#shop img").animate({
                  height: '-=5px',
                  width: '-=5px'
              });
          }
      )
      $("#petShop").hover(
          function(){
              $("#petShop img").animate({
                  height: '+=5px',
                  width: '+=5px'
              });
          }, function(){
              $("#petShop img").animate({
                  height: '-=5px',
                  width: '-=5px'
              });
          }
      )
      $("#faire").hover(
          function(){
              $("#faire img").animate({
                  height: '+=5px',
                  width: '+=5px'
              });
          }, function(){
              $("#faire img").animate({
                  height: '-=5px',
                  width: '-=5px'
              });
          }
      )
      $("#eat").hover(
          function(){
              $("#eat img").animate({
                  height: '+=5px',
                  width: '+=5px'
              });
          }, function(){
              $("#eat img").animate({
                  height: '-=5px',
                  width: '-=5px'
              });
          }
      )
      $("#fish").hover(
          function(){
              $("#fish img").animate({
                  height: '+=5px',
                  width: '+=5px'
              });
          }, function(){
              $("#fish img").animate({
                  height: '-=5px',
                  width: '-=5px'
              });
          }
      )
      $("#characters").hover(
          function(){
              $("#characters img").animate({
                  height: '+=5px',
                  width: '+=5px'
              });
          }, function(){
              $("#characters img").animate({
                  height: '-=5px',
                  width: '-=5px'
              });
          }
      )
  })
  return (
    <div className="App">
      {router}
    </div>
  )
}
