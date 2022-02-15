<?php

function flame_scripts(){

  wp_register_script('flame_matchheight_min', 'https://sumweekly.com/scri/jquery.matchHeight-min.js', true, array( 'jquery' ));
  wp_register_script('flame_matchheight', 'https://sumweekly.com/scri/jquery.matchHeight.js', true, array( 'jquery' ));
  wp_register_script('flame_main', 'https://sumweekly.com/scri/scripts.js', true, array( 'jquery' ));
  wp_register_script('flame_min', 'https://sumweekly.com/scri/scripts.min.js', true, array( 'jquery' ));
  wp_register_script('flame_customizer', 'https://sumweekly.com/scri/customizer.js', true, array( 'jquery' ));
  wp_register_script('flame_customizer_min', 'https://sumweekly.com/scri/customizer.min.js', true, array( 'jquery' ));
  wp_register_script('flame_navigation', 'https://sumweekly.com/scri/navigation.js', true, array( 'jquery' ));
  wp_register_script('flame_navigation_min', 'https://sumweekly.com/scri/navigation.min.js', true, array( 'jquery' ));
  wp_register_script('flame_focus', 'https://sumweekly.com/scri/skip-link-focus-fix.js', true, array( 'jquery' ));
  wp_register_script('flame_focus_min', 'https://sumweekly.com/scri/skip-link-focus-fix.min.js', true, array( 'jquery' ));

  wp_enqueue_script( 'flame_matchheight_min' );
  wp_enqueue_script( 'flame_matchheight' );
  wp_enqueue_script( 'flame_main' );
  wp_enqueue_script( 'flame_min' );
  wp_enqueue_script( 'flame_customizer' );
  wp_enqueue_script( 'flame_customizer_min' );
  wp_enqueue_script( 'flame_navigation' );
  wp_enqueue_script( 'flame_navigation_min' );
  wp_enqueue_script( 'flame_focus' );
  wp_enqueue_script( 'flame_focus_min' );

}
add_action( 'wp_enqueue_scripts', 'flame_scripts' );
