
// assets/javascripts/infinite_scroll_module.js
(function(angular) {

  var
    dependencies;

  dependencies = [];

  angular.module('ch.InfiniteScroll', dependencies)
    .constant('SCROLL_EVENT', {
      MET: 'infiniteScroll:events:met',
      REGISTER: 'infiniteScroll:events:register',
      REMOVE: 'infiniteScroll:events:remove'
    });

})(angular);

// assets/javascripts/infinite_scroll_directive.js
(function(angular) {

  var
    definitions;

  definitions = [
    '$window',
    '$document',
    'SCROLL_EVENT',
    infiniteScrollDirective
  ];

  angular.module('ch.InfiniteScroll')
    .directive('chInfiniteScroll', definitions);

  function infiniteScrollDirective($window, $document, SCROLL_EVENT) {
    return link;

    function link(scope, elem, attrs) {
      var
        screenHeight = $window.innerHeight;

      registerScrollListener();
      scope.$on(SCROLL_EVENT.REGISTER, registerScrollListener);
      scope.$on(SCROLL_EVENT.REMOVE, removeScrollListener);
      elem.$on('$destroy', removeScrollListener);

      function registerScrollListener() {
        removeScrollListener();
        $document.on('scroll', handleScroll);
      }

      function handleScroll() {
        if ($window.scrollY + screenHeight >= elem[0].offsetTop) {
          scope.$emit(SCROLL_EVENT.MET);
          removeScrollListener();
        }
      }

      function removeScrollListener() {
        $document.off('scroll', handleScroll);
      }
    }
  }

})(angular);
